import { message, notification } from 'antd';


export const openNotificationWithIcon = (type,message) => {
    notification[type]({
        message: type === 'success' ? 'Success' : 'Error',
        description: message || '',
        placement: 'topLeft'
    });
};