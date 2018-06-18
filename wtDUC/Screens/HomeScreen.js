import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import mainStyle from '../mainStyle';

export default class HomeScreen extends React.Component {

	static navigationOptions = {
    	tabBarLabel: 'Home',
    	// Note: By default the icon is only shown on iOS. Search the showIcon option below.
    	tabBarIcon: ({ tintColor, iconStyle }) => (
      		<Icon color={tintColor} iconStyle={iconStyle} size={36} name='today' />
    	),
  	};

    render() {
        return (
            <View style={mainStyle.container}>
            	<View style={mainStyle.fullWidthContainer}>
            		<View style={mainStyle.topBar}>
            			<Text style={mainStyle.navHeader}>Today</Text>
            		</View>
            	</View>
             
            </View>
        );
    }
}