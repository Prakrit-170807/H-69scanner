import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner"

export default class RideStart extends Component {

    constructor() {
        super()
        this.state = {
            camPermission: null,
            dataScan: false,
            getScanData: '',
            scanState: 'free'
        }
    }


    accuirepermission = async () => {
        const awaitpermission = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ camPermission: awaitpermission == "Success" })
        this.state.scanState = 'busy'
    }

    QRscan = async ({ type, data }) => {
        this.setState({
            dataScan: true,
            gatScanData: data,
            ScanState: 'free'
        })
    }

    render() {
        if (this.state.scanState == "busy" && this.state.camPermission=="") {
            return (
                <BarCodeScanner onBarCodeScanned={dataScan ? true : this.QRscan}></BarCodeScanner>
            )
        }
        else if (this.state.scanState == "free") {
            return (
                <View style={styles.container}>
                    <View >
                        <Text style={styles.text}>Start Riding   </Text>
                    </View>
                    <View>
                        <Image style={styles.img} source={require("../assets/QBCodeintr.png")} ></Image>
                    </View>
                    <TouchableOpacity style={styles.scancd}onPress={this.accuirepermission}>
                        <Text>
                            Scan Code
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a55b1"
    },
    text: {
        color: "#daeff7",
        backgroundColor: "#233f64",
        margin: -50,
        marginTop: -50,
        paddingRight: 180,
        paddingLeft: 40,
        paddingTop: 80,
        paddingBottom: 20,
        fontSize: 30
    },
    img: {
        marginTop: 60,
        marginLeft: -220,
        width: 300,
        height: 300,
    },
    scancd: {
        marginTop: 60, marginBottom: 180, 
        borderWidth: 0.1 , borderRadius: 20,
        paddingTop: 20, paddingBottom: 20, 
        paddingLeft: 70, paddingRight: 70,
        backgroundColor: "#daeff4"
    }
});
