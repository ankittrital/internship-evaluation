import CustomScreenHeader from '@components/CustomScreenHeader/CustomScreenHeader';
import React from 'react';

const ShowScreenHoc = ({children}: any) => {
  return (
    <>
      <CustomScreenHeader />
      {children}
    </>
  );
};

export default ShowScreenHoc;
