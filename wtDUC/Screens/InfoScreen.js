import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import mainStyle from '../mainStyle';

export default class InfoScreen extends React.Component {

	static navigationOptions = {
    	tabBarLabel: 'Info',
    	// Note: By default the icon is only shown on iOS. Search the showIcon option below.
    	tabBarIcon: ({ tintColor, iconStyle }) => (
      		<Icon color={tintColor} iconStyle={iconStyle} size={36} name='info' type="feather" />
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

const styles = StyleSheet.create({

    //Emory Blue: #002878

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});