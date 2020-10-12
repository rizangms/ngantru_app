import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
	    	nik: '',
	    	pass: ''
	  	};
  	}

	render(){
		return(
			<View>
				<Avatar.Image size={150} source={require('../../assets/img/dokumen.png')} />
		        <TextInput
			        label='NIK'
			        value={this.state.nik}
			        onChangeText={text => this.setState({ nik:text })}
			    />
		    </View>
		);
	}
}