import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, View, StatusBar } from 'react-native';

import User from '../User';

export default class Auth extends Component {
	
	constructor(props) {
	  super(props);
	  this._authCheck();
	}

	_authCheck = async () => {
		User.email = await AsyncStorage.getItem('userEmail');
		this.props.navigation.navigate(User.email ? 'App' : 'Auth');
	};

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
				<ActivityIndicator size="large" color="#2E79BE" />
			</View>
		);
	}

}