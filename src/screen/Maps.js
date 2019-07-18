import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Content, Header, Body, Title } from 'native-base';

export default class Maps extends Component {
	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>Maps</Title>
					</Body>
				</Header>
				<Content>
					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					<Text>Halaman Maps</Text>
				</Content>
			</Container>
		)
	}
}