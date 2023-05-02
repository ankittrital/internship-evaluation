import ScreenHOC from '@components/HOC/ScreenHOC';
import Support from '@screens/Support/Support';
import React, {useMemo} from 'react';

const SupportWrapper = () => {
  const Header = useMemo(() => {
    return ScreenHOC(Support);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default SupportWrapper;
