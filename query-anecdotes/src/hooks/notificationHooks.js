import { useContext } from 'react';
import { NotificationContext } from '../NotificationContext';

export const useNotificationValue = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotificationValue must be used within a NotificationProvider');
  }
  return context.notification;
};

export const useNotificationDispatch = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotificationDispatch must be used within a NotificationProvider');
  }
  return context.dispatchNotification;
};
