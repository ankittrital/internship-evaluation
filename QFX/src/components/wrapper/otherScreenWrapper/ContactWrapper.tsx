import HOC from '@components/HOC/HOC';
import Contact from '@screens/Contact/Contact';
import React, {useMemo} from 'react';

const ContactWrapper = () => {
  const Header = useMemo(() => {
    return HOC(Contact);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default ContactWrapper;
