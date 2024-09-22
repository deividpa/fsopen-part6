import { createContext, useContext, useReducer } from 'react';
import propTypes from 'prop-types';

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload;
    case 'HIDE':
      return '';
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [notification, dispatchNotification] = useReducer(notificationReducer, '');

  return (
    <NotificationContext.Provider value={[notification, dispatchNotification]}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
      throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

NotificationProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { NotificationContext };