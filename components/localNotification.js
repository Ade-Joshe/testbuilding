// import React, {Component} from 'react'; 
// import {TextInput, View, Keyboard} from 'react-native'; 
// import {Constants, Notifications, Permissions} from 'expo'; 
import Data from '../data';

// export default class Timer extends Component { 
//     onSubmit() { 
//         // Keyboard.dismiss(); 
//         const day= new Date().getDate();
//         const month= new Date().getMonth();
//         const localNotification = { 
//             title: 'Word For Today', 
//             body: Data[month][day],
//             android: {
//                 sticky: false,
//                 sound: true
//             },
//             icon: require('../assets/images/icon.png'),
//             expiration:600000,
//             sound: true
//         }; 

//         const schedulingOptions = { 
//             // time: 1548953108944 + n,
//             // time: (1548910800000 + 86400000),
//             time: (new Date()).getTime() + 1000,
//             repeat: 'day'
//         };
//         console.log('i die not');
//         // The notification will show if the app is not active that is: 
//         // if another app being used when the notification is scheduled 
//         // to appear or if the device's screen is locked 
//         Notifications.scheduleLocalNotificationAsync( 
//             localNotification, schedulingOptions 
//         ); 

//         console.log(new Date().getHours())

//     } 

//     handleNotification() { 
//         // If the app is active when the notification is scheduled to fire 
//         // this function will be called 
//         console.log('ok! got your notif'); 
//     } 

//     // We need to ask for Notification permissions for ios devices 
//      componentDidMount() { 
//         this.onSubmit(); 
//         let result =  Permissions.askAsync(Permissions.NOTIFICATIONS); 
//         if (Constants.isDevice && result.status === 'granted') { 
//             console.log('Notification permissions granted.') 
//         }
//     } 

//     componentWillMount(){
//         console.log('i will run o!')
//     }

//     render() { 
//         // this.onSubmit();
//         return ( 
//             <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}> 
//             </View> 
//         ); 
//     } 
//  }; 

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

        const schedulingOptions = {
            // time: (new Date()).getTime() + 50,
            time: (1548914400000 + 86400000),
            repeat: 'day'
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