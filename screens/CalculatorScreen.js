require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CalcButton, CalcDisplay} from './../components';

export default class CalculatorScreen extends React.Component {

    constructor(props){
        super(props);


        this.state = {
            display: "0",
        };
        

        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton title="C" color="white" backgroundColor="#a5a4a2" />
                        <CalcButton title="+/-" color="white" backgroundColor="#a5a4a2" />
                        <CalcButton title="%" color="white" backgroundColor="#a5a4a2" />
                        <CalcButton title="/" color="white" backgroundColor="#dd8a0d" />
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="7" color="white" backgroundColor="#37393d" />
                        <CalcButton title="8" color="white" backgroundColor="#37393d" />
                        <CalcButton title="9" color="white" backgroundColor="#37393d" />
                        <CalcButton title="x" color="white" backgroundColor="#dd8a0d" />
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="4" color="white" backgroundColor="#37393d" />
                        <CalcButton title="5" color="white" backgroundColor="#37393d" />
                        <CalcButton title="6" color="white" backgroundColor="#37393d" />
                        <CalcButton title="-" color="white" backgroundColor="#dd8a0d" />
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="1" color="white" backgroundColor="#37393d" />
                        <CalcButton title="2" color="white" backgroundColor="#37393d" />
                        <CalcButton title="3" color="white" backgroundColor="#37393d" />
                        <CalcButton title="+" color="white" backgroundColor="#dd8a0d" />
                    </View>

                    <View style={styles.buttonRow}>
                        <CalcButton title="0" color="white" backgroundColor="#37393d" style={{flex: 2}} />
                        <CalcButton title="." color="white" backgroundColor="#37393d" />
                        <CalcButton title="=" color="white" backgroundColor="#dd8a0d" />
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "black"},
    displayContainer: { flex: 1,  justifyContent: "flex-end"},
    buttonContainer: { paddingBottom: 20 },
    buttonRow: {flexDirection: "row", justifyContent: "space-between"}
});