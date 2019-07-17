import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { Container, Form, Item, Label, Input, Button, Text } from 'native-base'

export default class Register extends Component {
	render() {
		return (
			<Container>

				<View style={{alignItems: 'center', marginTop: 50, marginBottom: 25}}>
					<Image source={require('../img/zatsudan_logo.png')} style={styles.logo}/>
				</View>

				<View>
					<Form>
						<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
							<Input placeholder='Nama' />
						</Item>
						<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
							<Input placeholder='Email' />
						</Item>
						<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
							<Input placeholder='Password'/>
						</Item>
					</Form>
					<Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10}}>----------</Text>
					<Button block rounded success style={{marginRight: 5, marginLeft: 5, marginBottom: 10}}>
						<Text>Daftar</Text>
					</Button>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text>Sudah punya akun? </Text>
						<Text style={{color: '#2E79BE'}} onPress={() => {this.props.navigation.pop()}}>Masuk</Text>
					</View>
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