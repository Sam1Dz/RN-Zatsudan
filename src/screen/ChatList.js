import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Body, Title } from 'native-base';

export default class ChatList extends Component {
	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>Chat</Title>
					</Body>
				</Header>
				<Content>
					<Text>Halaman Chat</Text>
				</Content>
			</Container>
		)
	}
}