import DescriptionHeader from '@components/HOC/descriptionHOC';
import Description from '@screens/Description/Description';
import React from 'react';

const DescriptionWrapper = (props: any) => {
  return (
    <>
      <DescriptionHeader>
        <Description props={props.route.params} children={undefined} />
      </DescriptionHeader>
    </>
  );
};

export default DescriptionWrapper;
