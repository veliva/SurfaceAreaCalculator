import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import { BackHandler } from 'react-native';

export default class CircleScreen extends React.Component {
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate('ShapeSelection');
        return true;
    };

    render() {
        return(
            <View>
                <Text>CircleScreen</Text>
            </View>
        );
    }
}