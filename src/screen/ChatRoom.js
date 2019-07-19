import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Container, Content, Header, Right, Body, Title, Subtitle } from 'native-base';

export default class ChatRoom extends Component {
	state = {
		name: '',
		status: '',
		photo: ''
	};

	componentDidMount() {
		const {navigation} = this.props;
		
		const name = navigation.getParam('name');
		const status = navigation.getParam('status');
		const photo = navigation.getParam('photo');

		this.setState({name, status, photo})
	}

	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title style={{fontSize: 15, fontWeight: 'bold'}}>{this.state.name}</Title>
						<Subtitle style={{fontSize: 12.5, color: '#CCCCCC'}} numberOfLines={1}>{this.state.status}</Subtitle>
					</Body>
					<Right>
						<Image source={{uri: this.state.photo}} style={{height: 35, width: 35, borderRadius: 100}}/>
					</Right>
				</Header>
				<Content>
					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					<Text>Halaman Chat</Text>
				</Content>
			</Container>
		)
	}
}