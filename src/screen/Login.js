import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { Container, Form, Item, Label, Input, Button, Text } from 'native-base'

export default class Login extends Component {
	render() {
		return (
			<Container>
				
				<View style={{alignItems: 'center', marginTop: 50, marginBottom: 25}}>
					<Image source={require('../img/zatsudan_logo.png')} style={styles.logo}/>
				</View>

				<View>
					<Form>
						<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
							<Input placeholder='Email' />
						</Item>
						<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
							<Input placeholder='Password'/>
						</Item>
					</Form>
					<Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10}}>----------</Text>
					<Button block rounded bordered info style={{marginRight: 5, marginLeft: 5, marginBottom: 10}}>
						<Text>Masuk</Text>
					</Button>
					<Button block rounded success style={{marginRight: 5, marginLeft: 5, marginBottom: 10}} onPress={() => {this.props.navigation.navigate('Register')}}>
						<Text>Daftar</Text>
					</Button>
				</View>

			</Container>

		)
	}
}

const styles = StyleSheet.create({
	logo: {
		height: 96,
		width: 96
	}
});