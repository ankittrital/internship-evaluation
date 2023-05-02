import ScreenHOC from '@components/HOC/ScreenHOC';
import Login from '@screens/Login/Login';
import React, {useMemo} from 'react';

const LoginWrapper = () => {
  const Header = useMemo(() => {
    return ScreenHOC(Login);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default LoginWrapper;
