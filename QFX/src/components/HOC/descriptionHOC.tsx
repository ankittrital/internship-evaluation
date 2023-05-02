import MovieDetailsHeader from '@components/CustomScreenHeader/MovieDetailsHeader';
import React from 'react';

const DescriptionHoc = ({children}: any) => {
  return (
    <>
      <MovieDetailsHeader />
      {children}
    </>
  );
};

export default DescriptionHoc;
