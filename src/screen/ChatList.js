import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, FlatList, SaveAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Body, Title, ListItem, Left, Right, Thumbnail, Text } from 'native-base';

import { Database, Auth } from '../Config'

export default class ChatList extends Component {
	state = {
		users: [],
		refreshing: false
	}

	componentWillMount() {
		this.setState({refreshing: true});
		Database.ref('users').on('child_added', (data) => {
			let person = data.val();
			person.id = data.key;
			if (person.id != Auth.currentUser.uid) {
				this.setState((prevData) => {
					return {
						users: [...prevData.users, person]
					}
				})
				this.setState({refreshing: false});
			}
		})
	}

	_renderItem = ({ item }) => (
		<ListItem avatar onPress={() => this.props.navigation.navigate('ChatRoom', item)}>
			<Left>
				<Thumbnail source={{uri: item.photo}} />
			</Left>
			<Body>
				<Text numberOfLines={1} style={{fontWeight: 'bold'}}>{item.name}</Text>
				<Text note numberOfLines={1}>{item.status}</Text>
			</Body>
		</ListItem>
	);

	render() {
		console.log(this.state.users);
		return (
			<Container>
				<Header style={{backgroundColor: '#2E79BE'}}>
					<Body>
						<Title>Chat</Title>
					</Body>
				</Header>
				<Content>
					
					<StatusBar backgroundColor="#2E79BE" barStyle="light-content"/>
					
					{
						this.state.refreshing == true ?
						<ActivityIndicator size="large" color="#2E79BE" style={{marginTop: 10}} />
						:
						(
                        	<View style={{flex: 1}}>
								<FlatList
									data={this.state.users}
									renderItem={this._renderItem}
									keyExtractor={(item) => item.id}
								/>
							</View>
						)
                    }

				</Content>
			</Container>
		)
	}
}