import CustomHeader from '@components/CustomHeader/CustomHeader';
import React from 'react';

/**
 * @author
 * @function @HOC
 **/

const HOC =
  (Component: any) =>
  ({props}: any) => {
    return (
      <>
        <CustomHeader />
        <Component {...props} />
      </>
    );
  };

export default HOC;
