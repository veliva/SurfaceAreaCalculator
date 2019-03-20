import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import { BackHandler } from 'react-native';

export default class RectangleScreen extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {perimeter: parseFloat("0")};
        this.state = {surfaceArea: parseFloat("0")};

        this.state = {rectangleA: parseFloat("0")};
        this.state = {rectangleB: parseFloat("0")};
    }

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

    calculateRectangleSurfacePerimeter = () => {
        if(this.state.rectangleA === parseFloat("0") || this.state.rectangleB === parseFloat("0")){
            return;
        } else {
            this.setState({surfaceArea: this.state.rectangleA * this.state.rectangleB});
            this.setState({perimeter: 2*(this.state.rectangleA + this.state.rectangleB)});
        }
    }

    render() {
        return(
            <View style={[{flex: 1}]}>
                <View style={styles.screenSplit}>
                    <Image style={styles.ImageStyle} source={require('./../images/rectangle.gif')} />
                </View>
                <View style={styles.screenSplit}>
                    <View style={styles.RowOfElements}>
                        <View style={[{flex:1}, {alignItems: "center"}]}>
                            <Text style={styles.textStyle}>Surface Area</Text>
                            <Text style={styles.textStyle}>Formula: S = a * b</Text>
                        </View>
                        <View style={[{flex:1}, {alignItems: "center"}]}>
                            <Text style={styles.textStyle}>Perimeter </Text>
                            <Text style={styles.textStyle}>Formula: P = 2 * (a + b)</Text>
                        </View>
                    </View>

                    <View style={[{flex: .4}, {borderWidth: 1}]}>
                        <View style={[{flex: 1}]}>
                            <View style={styles.InputElement}>
                                <Text style={styles.TextInInputElement}>a = </Text>
                                <TextInput 
                                    keyboardType="numeric"
                                    placeholder="0"
                                    style={[styles.textInput]}
                                    onChangeText={(text) => this.setState({rectangleA: parseFloat(text)}, () => this.calculateRectangleSurfacePerimeter())}
                                />
                            </View>
                            <View style={styles.InputElement}>
                                <Text style={styles.TextInInputElement}>b = </Text>
                                <TextInput 
                                    keyboardType="numeric"
                                    placeholder="0"
                                    style={[styles.textInput]}
                                    onChangeText={(text) => this.setState({rectangleB: parseFloat(text)}, () => this.calculateRectangleSurfacePerimeter())}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.RowOfElements}>
                        <View style={styles.itemStyle}>
                            <View style={[{flex: 1}, {justifyContent: "center"}]}>
                                <Text style={styles.AnswerText}>
                                    S = {this.state.surfaceArea}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemStyle}>
                            <View style={[{flex: 1}, {justifyContent: "center"}]}>
                                <Text style={styles.AnswerText}>
                                    P = {this.state.perimeter}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenSplit: {
        alignSelf: 'stretch',
        flex: 1,
        borderWidth: 1,
    },
    ImageStyle: {
        flex: 1,
        backgroundColor: "#99baef",
        height: null,
        resizeMode: 'contain',
        width: null,
    },
    RowOfElements: {
        flex: .3,
        flexDirection: "row"
    },
    itemStyle: {
        flex: 1,
        borderWidth: 1
    },
    textStyle: {
        fontWeight: "bold",
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        flex: .6,
        height: "60%",
    },
    InputElement: {
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 90
    },
    TextInInputElement: {
        flex: .2,
        fontWeight: "bold",
        fontSize: 20
    },
    AnswerText: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30
    }
});