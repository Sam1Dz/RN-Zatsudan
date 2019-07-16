import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../../screen/Login';
import RegisterScreen from '../../screen/Register';

const RootNavigator = createStackNavigator(
	{
		Login: {screen: LoginScreen},
		Register: {screen: RegisterScreen}
	},
	{
		headerMode: 'none'
	}
)

export default createAppContainer(RootNavigator);