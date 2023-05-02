import HOC from '@components/HOC/HOC';
import GojiLoyalty from '@screens/Goji Loyalty/GojiLoyalty';
import React, {useMemo} from 'react';

const GojiWrapper = () => {
  const Header = useMemo(() => {
    return HOC(GojiLoyalty);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default GojiWrapper;
