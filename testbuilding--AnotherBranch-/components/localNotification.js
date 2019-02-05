import Data from '../data';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';



export default class Timer extends Component {
    onSubmit(e) {
        const day = new Date().getDate();
        const month = new Date().getMonth();
        const localNotification = {
            title: 'Word For Today',
            body: Data[month][day],
            android: {
                sticky: true,
                sound: true,
            },
            // expiration: 6,
            expiration: 600000,
            sound: true
        };

        const check = () => {
            if (new Date().getHours() === 9) {
                console.warn('time says 9am')
                return (new Date().getTime());
            }
            else {
                console.warn('time says something else');
                Notifications.dismissAllNotificationsAsync();
                Notifications.cancelAllScheduledNotificationsAsync();
                return (new Date().setDate(new Date().getDate() + 1))
            }
        }


        const schedulingOptions = {
            time: check(),
            repeat: 'day',
            // check()
        }
        console.log(new Date().getTime())

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );
    }

    handleNotification() {
        console.log('ok! got your notif');
    }

    async componentDidMount() {
        console.log(new Date().getTime())
        this.onSubmit();
        // We need to ask for Notification permissions for ios devices

        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (Constants.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')
        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and 
        // handle them in a callback
        Notifications.addListener(this.handleNotification);
    }
    render() {
        return (
            <View />
        );
    }
};