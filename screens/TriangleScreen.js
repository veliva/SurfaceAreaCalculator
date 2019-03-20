import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import { BackHandler } from 'react-native';

export default class CalculatorScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {perimeter: parseFloat("0")};

        this.state = {perimeterA: parseFloat("0")};
        this.state = {perimeterB: parseFloat("0")};
        this.state = {perimeterC: parseFloat("0")};

        this.state = {surfaceArea: parseFloat("0")};

        this.state = {surfaceAreaA: parseFloat("0")};
        this.state = {surfaceAreaH: parseFloat("0")};
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

    sumPerimeterValues = () => {
        this.setState({perimeter: this.state.perimeterA + this.state.perimeterB + this.state.perimeterC});
    }

    calculateSurfaceArea = () => {
        this.setState({surfaceArea: this.state.surfaceAreaA * this.state.surfaceAreaH / 2});
    }
    
    render() {
        return(
            <View style={[{flex: 1}]}>
                <View style={styles.screenSplit}>
                    <Image style={styles.ImageStyle} source={require('./../images/triangle.gif')} />
                </View>
                <View style={styles.screenSplit}>
                    <View style={styles.RowOfElements}>
                        <View style={styles.itemStyle}>
                            <View style={[{alignItems: "center"}, {flex: .2}]}>
                                <Text style={styles.textStyle}>Surface Area</Text>
                                <Text style={styles.textStyle}>Formula: S = a * h / 2</Text>
                            </View>
                            <View style={[{flex: .5}]}>
                                <View style={styles.InputElement}>
                                    <Text style={styles.TextInInputElement}>a = </Text>
                                    <TextInput 
                                        keyboardType="numeric"
                                        placeholder="0"
                                        style={[styles.textInput, {height: "50%"}]}
                                        onChangeText={(text) => this.setState({surfaceAreaA: parseFloat(text)}, () => this.calculateSurfaceArea())}
                                    />
                                </View>
                                <View style={styles.InputElement}>
                                    <Text style={styles.TextInInputElement}>h = </Text>
                                    <TextInput
                                        keyboardType='numeric'
                                        placeholder="0"
                                        style={[styles.textInput, {height: "50%"}]}
                                        onChangeText={(text) => this.setState({surfaceAreaH: parseFloat(text)}, () => this.calculateSurfaceArea())}
                                    />
                                </View>
                            </View>
                            <View style={[{flex: .3}, {justifyContent: "center"}]}>
                                <Text style={styles.AnswerText}>
                                    S = {this.state.surfaceArea}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemStyle}>
                            <View style={[{alignItems: "center"}, {flex: .2}]}>
                                <Text style={styles.textStyle}>Perimeter</Text>
                                <Text style={styles.textStyle}>Formula: P = a + b + c</Text>
                            </View>
                            <View style={[{flex: .5}]}>
                                <View style={styles.InputElement}>
                                    <Text style={styles.TextInInputElement}>a = </Text>
                                    <TextInput 
                                        keyboardType="numeric"
                                        placeholder="0"
                                        style={styles.textInput}
                                        onChangeText={(text) => this.setState({perimeterA: parseFloat(text)}, () => this.sumPerimeterValues())}
                                    />
                                </View>
                                <View style={styles.InputElement}>
                                    <Text style={styles.TextInInputElement}>b = </Text>
                                    <TextInput
                                        keyboardType='numeric'
                                        placeholder="0"
                                        style={styles.textInput}
                                        onChangeText={(text) => this.setState({perimeterB: parseFloat(text)}, () => this.sumPerimeterValues())}
                                    />
                                </View>
                                <View style={styles.InputElement}>
                                    <Text style={styles.TextInInputElement}>c = </Text>
                                    <TextInput
                                        keyboardType='numeric'
                                        placeholder="0"
                                        style={styles.textInput}
                                        onChangeText={(text) => this.setState({perimeterC: parseFloat(text)}, () => this.sumPerimeterValues())}
                                    />
                                </View>
                            </View>
                            <View style={[{flex: .3}, {justifyContent: "center"}]}>
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
        flex: 1,
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
        height: "70%",
    },
    InputElement: {
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    TextInInputElement: {
        flex: .3,
        fontWeight: "bold"
    },
    AnswerText: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30
    }
});