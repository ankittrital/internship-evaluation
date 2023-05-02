import HOC from '@components/HOC/HOC';
import TermsConditions from '@screens/TermsConditions/TermsConditions';
import React, {useMemo} from 'react';

const TermsWrapper = () => {
  const Header = useMemo(() => {
    return HOC(TermsConditions);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default TermsWrapper;
