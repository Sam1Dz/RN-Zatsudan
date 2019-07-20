import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Header, Card, CardItem, Body, Title, Button, Right } from 'native-base';

import { Auth } from '../Config';

export default class Profile extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		status: '',
		photo: '',
	};

	constructor(props) {
		super(props);
		AsyncStorage.getItem('user', (error, result) => {
			if (result) {
				let resultParsed = JSON.parse(result)
				this.setState({
					name: resultParsed.name,
					email: resultParsed.email,
					phone: resultParsed.phone,
					status: resultParsed.status,
					photo: resultParsed.photo
				});
			}
		});
	}

	_logOut = () => {
		Auth.signOut().then(() => {
			AsyncStorage.clear();
			this.props.navigation.navigate('Auth');
		}).catch(error => { alert( error.message ) } )
	};

	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>Profil</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => this.props.navigation.navigate('EditProfile')}>
							<Image source={require('../img/edit_icon.png')} style={{height: 20, width: 20}}/>
						</Button>
					</Right>
				</Header>
				<Content>

					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					
					<View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
						<Image source={{uri: this.state.photo}} style={{height: 128, width: 128, borderRadius: 100}}/>
						<Text style={{marginTop: 10, color: 'black', fontSize: 20, fontWeight: 'bold'}}>{this.state.name}</Text>
					</View>

					<View style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
						<Card>
							<CardItem>
								<Body>
									<Text style={{fontWeight: 'bold', fontSize: 15}}>Status</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>{this.state.status}</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Email</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>{this.state.email}</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Telepon</Text>
                					<Text style={{fontSize: 12.5}}>{this.state.phone}</Text>
                				</Body>
                			</CardItem>
                		</Card>
					</View>

					<Button block danger style={{marginRight: 5, marginLeft: 5}} onPress={this._logOut}>
						<Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Keluar</Text>
					</Button>

				</Content>
			</Container>
		)
	}
}