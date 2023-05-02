import Locations from '@screens/Locations/Locations';
import React, {useMemo} from 'react';
import HOC from '@components/HOC/HOC';

const LocationsWrapper = () => {
  const Header = useMemo(() => {
    return HOC(Locations);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default LocationsWrapper;
