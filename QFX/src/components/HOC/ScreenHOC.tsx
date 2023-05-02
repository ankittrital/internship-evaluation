import CustomScreenHeader from '@components/CustomScreenHeader/CustomScreenHeader';
import React from 'react';

const ScreenHOC =
  (Component: any) =>
  ({props}: any) => {
    return (
      <>
        <CustomScreenHeader />
        <Component {...props} />
      </>
    );
  };

export default ScreenHOC;
