import React, { Component } from 'react';
import { AsyncStorage, Platform, StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Form, Item, Label, Input, Button, Text, Content } from 'native-base'

import { db } from '../config';
import User from '../User'

export default class Register extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	register = async () => {
		await AsyncStorage.setItem('userEmail', this.state.email);
		User.name = this.state.name;
		User.email = this.state.email;
		this.props.navigation.navigate('App');
	};

	render() {
		return (
			<Container style={{backgroundColor: '#2E79BE'}}>
				<Content>

					<StatusBar backgroundColor="#2E79BE" barStyle="light-content" />

					<View style={{alignItems: 'center', marginTop: 50, marginBottom: 25}}>
						<Image source={require('../img/zatsudan_logo_white.png')} style={styles.logo}/>
					</View>
				
					<View>
						<Form>
							<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
								<Input placeholder='Nama' onChangeText={(name) => this.setState({name})} />
							</Item>
							<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
								<Input placeholder='Email' onChangeText={(email) => this.setState({email})} />
							</Item>
							<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
								<Input secureTextEntry={true} placeholder='Password' onChangeText={(password) => this.setState({password})} />
							</Item>
						</Form>
						<Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10, color: 'white'}}>----------</Text>
						<Button block rounded success style={{marginRight: 5, marginLeft: 5, marginBottom: 10}} onPress={this.register}>
							<Text>Daftar</Text>
						</Button>
						<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
							<Text style={{color: 'white'}}>Sudah punya akun? </Text>
							<Text style={{color: '#96BCDE'}} onPress={() => {this.props.navigation.pop()}}>Masuk</Text>
						</View>
					</View>
				
				</Content>
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