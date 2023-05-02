import HOC from '@components/HOC/HOC';
import Help from '@screens/Help/Help';
import React, {useMemo} from 'react';

const HelpWrapper = () => {
  const Header = useMemo(() => {
    return HOC(Help);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HelpWrapper;
