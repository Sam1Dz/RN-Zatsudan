import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Image, AsyncStorage, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Body, Title, Subtitle, Form, Item, Input, Button, Text, Footer, FooterTab } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import moment from 'moment';

import { Database, Auth } from '../Config';
import UserInfo from '../UserInfo'

export default class ChatRoom extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messagesList: [],
			textMessage: '',
			id: props.navigation.getParam('id'),
			name: props.navigation.getParam('name'),
			myName: '',
			status: props.navigation.getParam('status'),
			photo: props.navigation.getParam('photo'),
		};

		UserInfo.name = this.state.name;
		UserInfo.status = this.state.status;
		UserInfo.email = props.navigation.getParam('email');
		UserInfo.phone = props.navigation.getParam('phone');
		UserInfo.photo = this.state.photo;

	}

	componentWillMount() {
		AsyncStorage.getItem('user', (error, result) => {
			if (result) {
				let resultParsed = JSON.parse(result)
				this.setState({ myName: resultParsed.name });
			}
		});

		Database.ref('messages').child(Auth.currentUser.uid).child(this.state.id).on('child_added', (value) => {
			this.setState((prevData) => {
				return {
					messagesList: [...prevData.messagesList, value.val()]
				}
			})
		})
	}

	_sendMessage = async () => {
		if (this.state.textMessage != '') {
			let msgId = Database.ref('messages').child(Auth.currentUser.uid).child(this.state.id).push().key;
			let updates = {};
			let message = {
				message: this.state.textMessage,
				time: moment().format('DD/MM/YYYY HH:mm:ss'),
				from: this.state.myName
			}
			updates['messages/' + Auth.currentUser.uid + '/' + this.state.id + '/' + msgId] = message;
			updates['messages/' + this.state.id + '/' + Auth.currentUser.uid + '/' + msgId] = message;
			Database.ref().update(updates);
			this.setState({textMessage: ''});
		}
	};

	renderMessage = ({ item }) => (
		<View style={{
			display: 'flex',
			flexDirection: 'column',
			width: '60%',
			alignSelf: item.from === this.state.myName ? 'flex-end' : 'flex-start',
			backgroundColor: item.from === this.state.myName ? '#C0D6EB' : '#CCCCCC',
			borderRadius: 5,
			marginBottom: 10
		}}>
			<Text style={{padding: 7, fontSize: 15}}>{item.message}</Text>
			<Text style={{textAlign: 'right', paddingRight: 5, fontSize: 10, color: "#4C4C4C"}}>{item.time}</Text>
		</View>
	);

	render() {
		const {height, width} = Dimensions.get('window');
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title style={{fontSize: 15, fontWeight: 'bold'}}>{this.state.name}</Title>
						<Subtitle style={{fontSize: 12.5, color: '#CCCCCC'}} numberOfLines={1}>{this.state.status}</Subtitle>
					</Body>
					<Right>
						<Button transparent onPress={() => this.props.navigation.navigate('OthersProfile')}>
							<Image source={{uri: this.state.photo}} style={{height: 35, width: 35, borderRadius: 100}}/>
						</Button>
					</Right>
				</Header>

				<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>

				<Content>
					<FlatList
						style={{padding: 10, height: height * 0.73}}
						data={this.state.messagesList}
						renderItem={this.renderMessage}
						keyExtractor={(item, index) => index.toString()}
					/>
				</Content>

				<View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
					<Item rounded style={{backgroundColor: '#FFFFFF', paddingLeft: 10, paddingRight: 10, marginRight: 5, marginLeft: 5, marginBottom: 10, elevation: 3}}>
						<Input placeholder='Ketik Pesan' value={this.state.textMessage} onChangeText={(textMessage) => this.setState({textMessage})} />
						<Button transparent onPress={this._sendMessage}>
							<Image source={require('../img/send_icon.png')} style={{height: 25, width: 25}}/>
						</Button>
					</Item>
				</View>

			</Container>
		)
	}
}