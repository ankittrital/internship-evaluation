import React from 'react';
import ShowScreenHoc from '@components/HOC/ShowScreenHoc';
import ShowSelection from '@screens/ShowSelection/ShowSelection';

const ShowSelectionWrapper = (props: any) => {
  return (
    <>
      <ShowScreenHoc>
        <ShowSelection props={props.route.params} children={undefined} />
      </ShowScreenHoc>
    </>
  );
};

export default ShowSelectionWrapper;
