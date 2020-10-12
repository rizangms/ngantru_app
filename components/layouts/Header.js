import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import { Appbar } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default class Header extends Component {
	render(){
		return(
			<View>
		        <Appbar.Header>
			       	<Appbar.Content title="Title" subtitle={'Subtitle'} />
			        <Appbar.Action icon="magnify" onPress={() => {}} />
			        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
			    </Appbar.Header>
		    </View>
		);
	}
}