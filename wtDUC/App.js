import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import InfoScreen from './Screens/InfoScreen';
import WriteReviewScreen from './Screens/WriteReviewScreen';

const App = TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    WriteReview: {
        screen: WriteReviewScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    Info: {
        screen: InfoScreen,
    }
}, {
    tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#002878',
            inactiveTintColor: '#9e9e9e',
            showLabel: false,
            style: { 
                backgroundColor: 'transparent',
                height: 60,
                alignItems: 'center',
                borderTopWidth: 0,
                paddingHorizontal: 20,
            },
            iconStyle: {

            }
        },
    }
);

const styles = StyleSheet.create({

    //Emory Blue: #002878

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;