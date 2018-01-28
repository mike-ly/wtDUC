import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class WriteReviewScreen extends React.Component {

	static navigationOptions = {
    	tabBarLabel: 'Home',
    	// Note: By default the icon is only shown on iOS. Search the showIcon option below.
    	tabBarIcon: ({ tintColor, iconStyle }) => (
      		<Icon color={tintColor} iconStyle={iconStyle} size={36} name='edit' type='fontawesome' />
    	),
  	};

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make willcally reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
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