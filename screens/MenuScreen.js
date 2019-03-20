import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MenuScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.screenSplit}>
                    <Text style={styles.sectionText}>Regular Calculator</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Calculator')} style={[{backgroundColor: "#6a6b6d"} ,styles.buttonShape]}>
                        <Text style={[{color: "white"}, {fontWeight: "bold"}]}>Calculator</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.middleView}>
                    <Text style={styles.middeScreenText}>Calculators</Text>
                </View>

                <View style={styles.screenSplit}>
                    <Text style={styles.sectionText}>Surface Area Calculator</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ShapeSelection')} style={[{backgroundColor: "#6a6b6d"} ,styles.buttonShape]}>
                        <Text style={[{color: "white"}, {fontWeight: "bold"}]}>Shapes</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#b4cdf7"
    },
    screenSplit: {
        alignSelf: 'stretch', 
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    buttonShape: {
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: "black", 
        alignItems: "center", 
        width: 150, 
        height: 50, 
        justifyContent: "center",
    },
    middleView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d9d9db",
    },
    sectionText: {
        fontWeight: "bold",
    },
    middeScreenText: {
        fontSize: 30,
        fontWeight: "bold",
    }
});