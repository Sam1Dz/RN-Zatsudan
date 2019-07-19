import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, StatusBar, AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Form, Item, Label, Input, Button, Text, Content } from 'native-base'

import { Database, Auth } from '../Config';

export default class Login extends Component {
	state = {
		users: [],
		email: '',
		password: '',
		refreshing: false
	};

	_login = () => {
		this.setState({refreshing: true});

		if (this.state.email == '' && this.state.password == '') {
			alert('Harap mengisi Semua Form!')
			this.setState({refreshing: false});
		} else {
			Database.ref('users').orderByChild('email').equalTo(this.state.email).once('value', (result) => {
				let data = result.val();
				
				if (data !== null) {
					let user = Object.values(data);
					this.setState({user});

					let user_data = {
						name: this.state.user[0].name,
						email: this.state.user[0].email,
						phone: this.state.user[0].phone,
						status: this.state.user[0].status,
						photo: this.state.user[0].photo
					}

					AsyncStorage.setItem('user', JSON.stringify(user_data));

				}
			});

			Auth.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => { this.props.navigation.navigate('Loading') })
			.catch(error => { 
				alert(error.message)
				this.setState({
					email: '',
					password: '',
					refreshing: false
				});
			})
		}
	};

	render() {
		return (
			
			<Container style={{backgroundColor: '#2E79BE'}}>
				<Content>
				
					<StatusBar backgroundColor="#2E79BE" barStyle="light-content" />

					<View style={{alignItems: 'center', marginTop: 50, marginBottom: 25}}>
						<Image source={require('../img/zatsudan_logo_white.png')} style={styles.logo}/>
					</View>

					{
						this.state.refreshing == true ?
						<ActivityIndicator size="large" color="#FFFFFF" />
						:
						(
							<View>
								<Form>
									<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
										<Input placeholder='Email' onChangeText={(email) => this.setState({email})} />
									</Item>
									<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
										<Input secureTextEntry={true} placeholder='Password' onChangeText={(password) => this.setState({password})} />
									</Item>
								</Form>
								<Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10, color: 'white'}}>----------</Text>
								<Button block rounded style={{marginRight: 5, marginLeft: 5, marginBottom: 10, backgroundColor: '#609FD9'}} onPress={this._login}>
									<Text>Masuk</Text>
								</Button>
								<Button block rounded success style={{marginRight: 5, marginLeft: 5, marginBottom: 10}} onPress={() => {this.props.navigation.navigate('Register')}}>
									<Text>Daftar</Text>
								</Button>
							</View>
						)
					}

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