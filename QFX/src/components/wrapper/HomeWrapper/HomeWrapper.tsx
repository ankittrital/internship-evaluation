import {TopTab} from '@navigation/TabNavigator/TopTav';
import React, {useMemo} from 'react';
import HOC from '@components/HOC/HOC';

const HomeWrapper = () => {
  const Header = useMemo(() => {
    return HOC(TopTab);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HomeWrapper;
