
// import { Permissions, Notifications } from 'expo';

// // const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

// async function registerForPushNotificationsAsync() {
//   const { status: existingStatus } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   let finalStatus = existingStatus;

//   // only ask if permissions have not already been determined, because
//   // iOS won't necessarily prompt the user a second time.
//   if (existingStatus !== 'granted') {
//     // Android remote notification permissions are granted during the app
//     // install, so this will only ask on iOS
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     finalStatus = status;
//   }

//   // Stop here if the user did not grant permissions
//   if (finalStatus !== 'granted') {
//     return;
//   }

//   // Get the token that uniquely identifies this device
//   let token = await Notifications.getExpoPushTokenAsync();
// }


// // This refers to the function defined earlier in this guide
// // import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

// class ScamNotification extends React.Component {
//   state = {
//     notification: {},
//   };

//   componentDidMount() {
//     registerForPushNotificationsAsync();

//     // Handle notifications that are received or selected while the app
//     // is open. If the app was closed and then opened by tapping the
//     // notification (rather than just tapping the app icon to open it),
//     // this function will fire on the next tick after the app starts
//     // with the notification data.
//     this._notificationSubscription = Notifications.addListener(this._handleNotification);
//   }

//   _handleNotification = (notification) => {
//     this.setState({notification: notification});
//   };

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Origin: {this.state.notification.origin}</Text>
//         <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
//       </View>
//     );
//   }}



// export default ScamNotification;



// import {Notifications} from 'expo';

// class ScamNotification extends React.Component {
  
//   localNotification = {
//     title: 'Have You read the',
//     body: 'Android ndi bad guys',
//     android: {
//       sound: true,
//       sticky: true,
//       link: true
//     }
//   };
  
  
  
//   render(){
//   let t = new Date();
//   t.setSeconds(t.getSeconds() + 10);
//   const schedulingOptions = {
//     time: new Date().getTime() + 1000, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
//     repeat: 'repeat'
//   };
//   return Notifications.addListener(schedulingOptions);
//   }
// }


















// import {Component} from 'react';
// import {TextInput, Keyboard} from 'react-native';
// import {Constants, Notifications, Permissions} from 'expo';


// class Timer extends Component {
//     onSubmit(e) {
//         // Keyboard.dismiss();
//         const localNotification = {
//             title: 'Word for today',
//             body: 'Click to Open the word for Today!'
//         };

//         const schedulingOptions = {
//             // time: (new Date()).getTime() + Number(e.nativeEvent.text)
//             time: 6
//         }

//        // Notifications show only when app is not active.
//         // (ie. another app being used or device's screen is locked)
//         Notifications.scheduleLocalNotificationAsync(
//             localNotification, schedulingOptions
//         );
//     }


//     handleNotification() {
//         console.warn('ok! got your notif', new Date().getTime());
//     }

//     async componentDidMount() {
//         // We need to ask for Notification permissions for ios devices
//         let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

//         if (Constants.isDevice && result.status === 'granted') {
//             console.log('Notification permissions granted.')
//         }

//         // If we want to do something with the notification when the app
//         // is active, we need to listen to notification events and 
//        // handle them in a callback
//         Notifications.addListener(this.handleNotification);
//     }

//     render() {
//         return (
//             <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
//                 <TextInput
//                     onSubmitEditing={this.onSubmit}
//                     placeholder={'time in ms'}
//                 />
//             </View>
//         );
//     }
// };



















// Test code goes above

import React from 'react';
import Spacer from './Spacer';
import Data from '../data'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
	Calendar
} from 'react-native-calendars';
// import Timer from '../components/localNotification';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'All Days',
  };

  state = {
    dayPicked: new Date().getDate(),
    monthPicked: new Date().getMonth(),
    yearPicked: new Date().getFullYear()
  }

  // zero indexing does not match month structure
  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();

  changeDate = (day) => {
    this.setState({
      dayPicked: day.day,
      monthPicked: day.month - 1,
      yearPicked: day.year
    });
  }
  
  componentDidMount() {
    this.state.dayPicked = this.day;
    this.state.monthPicked = this.month;
    this.state.yearPicked = this.year;
    // <ScamNotification />
  }

  render() {
    const { yearPicked, dayPicked, monthPicked } = this.state;
    console.log(dayPicked, monthPicked, yearPicked);
    return (
      <View style={styles.container}>
        <Calendar
					hideExtraDays={false}
					onDayPress={(day) => {
						console.log('day pressed is: ', day);
						this.changeDate(day);
					}}
					minDate={'2019-01-01'}
					maxDate={'2019-12-31'}
					theme={{
            selectedDotColor: 'blue',
            // todayTextColor: 'green',
            selectedDayTextColor: 'white',
            selectedDayBackgroundColor: 'purple',
						// agendaDayTextColor: 'darkgrey',
						// agendaDayNumColor: 'green',
						// agendaTodayColor: 'purple',
						// agendaKnobColor: 'blue'
					}}
					pastScrollRange={1}
					futureScrollRange={12}
					refreshing={true}
          horizontal={true}
				/>
        {
          ((yearPicked !== this.year) || (monthPicked > this.month) || ((monthPicked === this.month) && (dayPicked > this.day))) ?
            (
              <View style={{ padding: '3%' }}>
                <Text> Selection locked until due ! </Text>
              </View>
            ) :
            (
              <View style={{ padding: 20 }}>
                <Text style={styles.h1}>
                  {new Date(yearPicked, monthPicked, dayPicked).toDateString()}
                </Text>
                <Text style={styles.h3}>
                  {Data[monthPicked][dayPicked]}
                </Text>
              </View>
            )
        }
        {/* <Timer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    padding: '3%',
  },
  h1: {
    fontSize: 25
  },
  h3: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold'
  }
});