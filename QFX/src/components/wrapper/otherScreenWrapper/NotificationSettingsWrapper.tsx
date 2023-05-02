import HOC from '@components/HOC/HOC';
import NotificationSettings from '@screens/NotificationSettings/NotificationSettings';
import React, {useMemo} from 'react';

const NotificationSettingWrapper = () => {
  const Header = useMemo(() => {
    return HOC(NotificationSettings);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};
export default NotificationSettingWrapper;
