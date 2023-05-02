import ScreenHOC from '@components/HOC/ScreenHOC';
import QfxFranchise from '@screens/QFXFranchise/QFXFranchise';
import React, {useMemo} from 'react';

const QFXFranchiseWrapper = () => {
  const Header = useMemo(() => {
    return ScreenHOC(QfxFranchise);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default QFXFranchiseWrapper;
