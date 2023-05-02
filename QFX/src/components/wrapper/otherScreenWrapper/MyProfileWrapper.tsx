import HOC from '@components/HOC/HOC';
import MyProfile from '@screens/MyProfile/MyProfile';
import React, {useMemo} from 'react';

const MyProfileWrapper = () => {
  const Header = useMemo(() => {
    return HOC(MyProfile);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default MyProfileWrapper;
