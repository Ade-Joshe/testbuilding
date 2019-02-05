import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Dimensions
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
			<View style={styles.container}>
				<Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
					GO FOR THE WORD DAILY INSPIRATIONAL.
				</Text>
				<View style={{ marginTop: 20, marginBottom: 20 }}>
					<Text style={{ fontSize: 15, color: 'white' }}>
						Inspiration is the mother of manifestation and cure of depression.
						Receive a daily word of inspiration from THE WORD MOBILE and connect to supernatural words that will help you achieve your goals and visions this year. God bless you.
					</Text>
				</View>
				<Text style={{ fontSize: 14, color: 'white' }}> Brought to you by</Text>
				<Text style={{ fontSize: 15, color: 'white' }}> Evang. Kingsley Obinna </Text>
				<Text style={{ fontSize: 15, color: 'white' }}> Email: kingsleyobinna101@gmail.com </Text>
				<Text style={{ fontSize: 15, color: 'white' }} > &copy; 2019 Edition.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#36454f',
		padding: '3%',
		height: Dimensions.get('window').height
	}
});