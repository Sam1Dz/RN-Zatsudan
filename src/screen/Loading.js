import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, StatusBar, Text } from 'react-native';

import { Auth } from '../Config';
import User from '../User';

export default class Loading extends Component {

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
				<ActivityIndicator size="large" color="#2E79BE" />
				<Text style={{fontWeight: 'bold'}}>Loading</Text>
			</View>
		);
	}

	componentDidMount() {
		Auth.onAuthStateChanged(user => {
			this.props.navigation.navigate(user ? 'App' : 'Auth');
		})
	}

}