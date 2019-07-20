import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native';
import { Container, Content, Header, Body, Title, Item, Label, Input, Button } from 'native-base';

import { Database, Auth } from '../Config';

export default class EditProfile extends Component {
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

	_updateProfile = () => {
		Database.ref('/users/' + Auth.currentUser.uid).set({
			name: this.state.name,
			status: this.state.status,
			phone: this.state.phone,
			photo: this.state.photo
		});

		let data = {
			name: this.state.name,
			status: this.state.status,
			email: this.state.email,
			phone: this.state.phone,
			photo: this.state.photo
		}

		AsyncStorage.setItem('user', JSON.stringify(data));
		this.props.navigation.pop();
	};

	render() {
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>Edit Profil</Title>
					</Body>
				</Header>
				<Content>

					<View style={{marginTop: 10}}>

						<Text style={{fontSize: 15, marginLeft: 5, marginBottom: 2, fontWeight: 'bold'}}>Ubah Status</Text>
						<Item regular style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
							<Input placeholder='Status' value={this.state.status} onChangeText={(status) => this.setState({status})} />
						</Item>

						<Text style={{fontSize: 15, marginLeft: 5, marginBottom: 2, fontWeight: 'bold'}}>Ubah Foto Profil</Text>
						<Item regular style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
							<Input placeholder='Image URL' value={this.state.photo} onChangeText={(photo) => this.setState({photo})} />
						</Item>

						<Text style={{fontSize: 15, marginLeft: 5, marginBottom: 2, fontWeight: 'bold'}}>Ubah Data Pribadi</Text>
						<Item regular style={{marginLeft: 5, marginRight: 5, marginBottom: 5}}>
							<Input placeholder='Nama' value={this.state.name} onChangeText={(name) => this.setState({name})} />
						</Item>
						<Item regular style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
							<Input placeholder='Telepon' value={this.state.phone} onChangeText={(phone) => this.setState({phone})} />
						</Item>

						<Button block success style={{marginRight: 5, marginLeft: 5}} onPress={this._updateProfile}>
							<Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Edit Profil</Text>
						</Button>

					</View>

				</Content>
			</Container>
		)
	}
}