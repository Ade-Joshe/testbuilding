import Data from '../data';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';



export default class Timer extends Component {
    onSubmit() {
        const day = new Date().getDate();
        const month = new Date().getMonth();
        const localNotification = {
            title: 'Word For Today',
            body: Data[month][day],
            android: {
                sticky: true,
                sound: true,
            },
            sound: true
        };

        const schedulingOptions = {
            time: new Date().getTime() + 1000,
            repeat: 'day',
        }

        console.log(new Date().getTime())

        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );

        let result = Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (Constants.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')
        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and 
        // handle them in a callback
        Notifications.addListener(this.handleNotification);

    }

    handleNotification() {
        console.log('ok! got your notif');
    }

    async componentDidMount() {
        if (new Date().getHours() === 1) {
            await this.onSubmit();
        }
        else {
            Notifications.dismissAllNotificationsAsync();
            Notifications.cancelAllScheduledNotificationsAsync();
        }
        console.log(new Date().getTime())
    }

    render() {
        return (
            <View />
        );
    }
};