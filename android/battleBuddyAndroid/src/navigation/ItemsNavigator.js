import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ItemsScreen from '../screens/ItemsScreen';
import TabBarIcon from '../components/common/TabBarIcon';
import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/stacks/Item/ItemDetailScreen';

const itemsNavigator = createStackNavigator({
  Items: ItemsScreen,
  Category: CategoryScreen,
  Detail: ItemDetailScreen
});

itemsNavigator.navigationOptions = {
  tabBarLabel: 'Items',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="items" /> // eslint-disable-line
};

export default itemsNavigator;
