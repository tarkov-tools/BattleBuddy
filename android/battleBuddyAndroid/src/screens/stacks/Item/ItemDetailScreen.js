import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import useStorageImage from '../../../hooks/useStorageImage';
import ImageType from '../../../constants/ImageType';
import FirearmDetail from '../../../components/detail/FirearmDetail';
import ArmorDetail from '../../../components/detail/ArmorDetail';
import AmmoDetail from '../../../components/detail/AmmoDetail';
import MedicalDetail from '../../../components/detail/MedicalDetail';
import ThrowableDetail from '../../../components/detail/ThrowableDetail';
import MeleeDetail from '../../../components/detail/MeleeDetail';

const ScrollView = styled.ScrollView`
  background: ${({theme}) => theme.colors.background};
`;

const Text = styled.Text`
  color: white;
`;

const Image = styled.ImageBackground`
  /* prettier-ignore */
  aspectRatio: 1.77;
  width: 100%;
`;

const Description = styled(Text)`
  padding: 20px;
  text-align: justify;
`;

const ItemDetailScreen = ({navigation}) => {
  const {item, type} = navigation.state.params;
  // Placeholder data until data comes from backend
  // TODO: Implement backend data for detail page
  const {placeholder, image} = useStorageImage(item, ImageType.large);

  const typeToComponent = {
    firearm: FirearmDetail,
    armor: ArmorDetail,
    ammunition: AmmoDetail,
    medical: MedicalDetail,
    grenade: ThrowableDetail,
    melee: MeleeDetail
  };

  const DetailElement = typeToComponent[type];

  return (
    <ScrollView>
      <Image source={image ? image : placeholder} resizeMode="contain" />
      <Description>{item.description}</Description>
      <DetailElement item={item} />
    </ScrollView>
  );
};

ItemDetailScreen.navigationOptions = (screenProps) => ({
  title: screenProps.navigation.getParam('item').name,
  headerStyle: {
    backgroundColor: '#191919'
  },
  headerTintColor: '#FF491C',
  headerTitleStyle: {
    fontSize: 28
  }
});

ItemDetailScreen.propTypes = {
  navigation: PropTypes.any.isRequired
};

export default ItemDetailScreen;
