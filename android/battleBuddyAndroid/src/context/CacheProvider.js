import React, {useContext, useEffect, useState, createContext} from 'react';
import PropTypes from 'prop-types';

const CacheContext = createContext([{}, () => {}]);

const CacheProvider = ({children}) => {
  const [state, setState] = useState();

  useEffect(() => {
    return destroyCache;
  }, []);

  const destroyCache = () => {
    setState(null);
  };

  const updateCache = async (key, value) => {
    const isFunction = typeof value === 'function';

    if (isFunction) {
      setState((prevState) => {
        return {
          ...prevState,
          [key]: value(prevState[key])
        };
      });
    } else {
      setState((prevState) => ({...prevState, [key]: value}));
    }

    console.log(`Cache for type ${key} succesfully updated`);
  };

  return (
    <CacheContext.Provider value={{cache: state, destroyCache, updateCache}}>
      {children}
    </CacheContext.Provider>
  );
};

CacheProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useCache = () => useContext(CacheContext);

export default CacheProvider;