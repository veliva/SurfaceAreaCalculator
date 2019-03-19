import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import { BackHandler } from 'react-native';

export default class CalculatorScreen extends React.Component {
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate('Menu');
        return true;
    };

    render(){
        return(
            <View style={[{flex: 1}]}>
                <View style={styles.screenSplit}>
                    <TouchableOpacity style={styles.TouchableOpacityStyle}>
                        <Image style={styles.ImageStyle} source={require('./../images/triangle.gif')} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Triangle</Text>
                </View>
                <View style={styles.screenSplit}>
                    <TouchableOpacity style={styles.TouchableOpacityStyle}>
                        <Image style={styles.ImageStyle} source={require('./../images/rectangle.gif')} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Rectangle</Text>
                </View>
                <View style={styles.screenSplit}>
                    <TouchableOpacity style={styles.TouchableOpacityStyle}>
                        <Image style={styles.ImageStyle} source={require('./../images/circle.jpg')} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Circle</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenSplit: {
        alignSelf: 'stretch',
        flex: 1,
        borderWidth: 1,
    },
    TouchableOpacityStyle: {
        flex: .9,
        backgroundColor: "white",
    },
    textStyle: {
        flex: .1,
        backgroundColor: "#b4cdf7",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    },
    ImageStyle: {
        flex:1,
        height: null,
        resizeMode: 'contain',
        width: null,
    }
});