import React from 'react';
import {
	Text,
	View,
	Dimensions
} from 'react-native';
import Data from '../data';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  colors = ['brown', 'maroon', 'black', 'navy', 'purple', '#2f4f4f', 'darkgreen', '#4b0082', '#3c1414', '#36454f', '#800020', '#004225']

  colorPicker = 'black';
  month = new Date().getMonth();
  day = new Date().getDate();

  render() {
    this.colorPicker = this.colors[Math.ceil(Math.random() * 12)];
    return (
      <View style={{ backgroundColor: this.colorPicker, padding: '3%', height: Dimensions.get('window').height }}>
        <View>
			<Text style={{ color: 'white', fontSize: 30 }}>
				Word for today {new Date().toDateString()}
			</Text>
        </View>
        <View style={{marginTop: 30}}>
			<Text style={{ color: 'white', fontSize: 20, }}>
				{Data[this.month][this.day]}
			</Text>
		</View>
      </View>
    );
  }
}