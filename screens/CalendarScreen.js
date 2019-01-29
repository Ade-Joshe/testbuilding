import React from 'react';
import Spacer from './Spacer';
import Data from '../data'
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';

import {
	Agenda
} from 'react-native-calendars';


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
	}

	render() {
		const { yearPicked, dayPicked, monthPicked } = this.state;
		console.log(dayPicked, monthPicked, yearPicked);
		return (
			<View style={styles.container}>
				<Agenda
					hideExtraDays={false}
					onDayPress={(day) => {
						console.log('day pressed is: ', day);
						this.changeDate(day);
					}}
					minDate={'2019-01-01'}
					maxDate={'2019-12-31'}
					theme={{
						agendaDayTextColor: 'darkgrey',
						agendaDayNumColor: 'green',
						agendaTodayColor: 'purple',
						agendaKnobColor: 'blue'
					}}
					futureScrollRange={1}
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
									You Selected {new Date(yearPicked, monthPicked, dayPicked).toDateString()}
								</Text>
								<Spacer size={20} />
								<Text style={styles.h3}>
									{Data[monthPicked][dayPicked]}
								</Text>
							</View>
						)
				}
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
		fontSize: 20
	},
	h3: {
		fontSize: 16
	}
});