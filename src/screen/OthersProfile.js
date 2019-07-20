import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Header, Card, CardItem, Body, Title, Button, Right } from 'native-base';

import { Database } from '../Config';
import UserInfo from '../UserInfo'

export default class OthersProfile extends Component {
	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>{UserInfo.name} Profil</Title>
					</Body>
				</Header>
				<Content>

					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					
					<View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
						<Image source={{uri: UserInfo.photo}} style={{height: 128, width: 128, borderRadius: 100}}/>
						<Text style={{marginTop: 10, color: 'black', fontSize: 20, fontWeight: 'bold'}}>{UserInfo.name}</Text>
					</View>

					<View style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
						<Card>
							<CardItem>
								<Body>
									<Text style={{fontWeight: 'bold', fontSize: 15}}>Status</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>{UserInfo.status}</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Email</Text>
                					<Text style={{fontSize: 12.5, marginBottom: 10}}>{UserInfo.email}</Text>
                					<Text style={{fontWeight: 'bold', fontSize: 15}}>Telepon</Text>
                					<Text style={{fontSize: 12.5}}>{UserInfo.phone}</Text>
                				</Body>
                			</CardItem>
                		</Card>
					</View>

				</Content>
			</Container>
		)
	}
}