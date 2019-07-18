import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Header, Card, CardItem, Body, Title, Button, Right } from 'native-base';

import { Auth } from '../Config';

export default class Profile extends Component {
	_logOut = () => {
		Auth.signOut().then(() => {
			AsyncStorage.clear();
			this.props.navigation.navigate('Loading');
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
						<Button transparent>
							<Image source={require('../img/edit_icon.png')} style={{height: 20, width: 20}}/>
						</Button>
					</Right>
				</Header>
				<Content>

					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					
					<View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
						<Image source={require('../img/pp_example.jpg')} style={{height: 128, width: 128, borderRadius: 100}}/>
						<Text style={{marginTop: 10, color: 'black', fontSize: 20, fontWeight: 'bold'}}>Pratama Dimas</Text>
					</View>

					<View style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
						<Card>
							<CardItem>
								<Body>
									<Text style={{fontWeight: 'bold', fontSize: 15}}>Status</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>勉強します、まだ忙しい。</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Email</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>dimasgamers01@gmail.com</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Telepon</Text>
                					<Text style={{fontSize: 12.5}}>+6285102569534</Text>
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