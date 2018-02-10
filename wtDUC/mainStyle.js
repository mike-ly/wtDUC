import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //Emory Blue: #002878

    // GENERAL
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    fullWidthContainer: {
    	flexDirection: 'row',
    	alignItems: 'center',
    },

    topBar: {
    	flex: 1,
    	height: 70,
    	backgroundColor: '#002878',
    	paddingTop: 20,
    	flexDirection: 'row',	
    },

    topBarLeft: {
    	flex: 1,
    },

    topBarCenter: {
    	flex: 3,
    },

    topBarRight: {
    	flex: 1,
    }
    
    // HOME SCREEN
});