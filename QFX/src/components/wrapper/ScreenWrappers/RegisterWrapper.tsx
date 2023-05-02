import ScreenHOC from '@components/HOC/ScreenHOC';
import Register from '@screens/Register/Register';
import React, {useMemo} from 'react';

const RegisterWrapper = () => {
  const Header = useMemo(() => {
    return ScreenHOC(Register);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default RegisterWrapper;
