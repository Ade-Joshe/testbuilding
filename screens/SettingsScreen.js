import React from 'react';
import {
	Text, View
} from 'react-native';
import Spacer from './Spacer';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'About',
	};

	render() {
		/* Go ahead and delete ExpoConfigView and replace it with your
		 * content, we just wanted to give you a quick view of your config */
		return (
			<View style={{ padding: '3%' }}>
				<Spacer size={30} />
				<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
					GO FOR THE WORD DAILY INSPIRATIONAL.
				</Text>
				<View style={{ marginTop: 20, marginBottom: 30 }}>
					<Text style={{ fontSize: 19 }}>
						Inspiration is the mother of manifestation and cure of depression.
						Receive a daily word of inspiration from THE WORD MOBILE and connect to supernatural words that will help you achieve your goals and visions this year. God bless you.
					</Text>
				</View>
				<Text style={{ fontSize: 15 }}> Brought to you by</Text>
				<Text style={{ fontSize: 20 }}> Evang. Kingsley Obinna </Text>
				<Text style={{ fontSize: 20 }}> Email: kingsleyobinna101@gmail.com </Text>
				<Text style={{ fontSize: 20 }} > @2019 Edition.</Text>
			</View>
		)
	}
}
