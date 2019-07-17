import React, { Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginScreen from '../../screen/Login';
import RegisterScreen from '../../screen/Register';
import ChatListScreen from '../../screen/ChatList';
import MapsScreen from '../../screen/Maps';
import ProfileScreen from '../../screen/Profile';

const RootNavigator = createStackNavigator(
	{
		Login: {screen: LoginScreen},
		Register: {screen: RegisterScreen}
	}, {
		headerMode: 'none'
	}
);

const BottomNavigation = createMaterialBottomTabNavigator(
	{
		Chat: {screen: ChatListScreen},
		Maps: {screen: MapsScreen},
		Profile: {screen: ProfileScreen}
	}, {
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				if (routeName === 'Chat') {
					return (
						<Image source={require('../../img/chat_icon.png')} style={{height: 20, width: 20}}/>
					);
				}else if (routeName === 'Maps') {
					return (
						<Image source={require('../../img/map_icon.png')} style={{height: 20, width: 20}}/>
					);
				}else if (routeName === 'Profile') {
					return (
						<Image source={require('../../img/user_icon.png')} style={{height: 20, width: 20}}/>
					);
				}
			},
		}),
		initialRouteName: 'Chat',
		activeColor: '#f0edf6',
		inactiveColor: '#c0bdc4',
		barStyle: {backgroundColor: '#2E79BE'}
	}
);

export default createAppContainer(BottomNavigation);