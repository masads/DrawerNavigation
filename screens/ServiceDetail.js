import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native';
import { normalize } from '../styles/style';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ServiceDetail = ({ route }) => {
    const { id, uri, service, category, price, store } = route.params;
    console.log(id, uri, service, category, price, store)
    return (
        <ScrollView style={styles.Container} >
            <View style={styles.ContainerView} >
                <Image source={{ uri }} style={{ flex: 1, height: normalize(200), marginVertical: 10, borderRadius: 15 }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={[styles.label, { color: 'black', fontSize: normalize(24) }]} >{store}</Text>
                    <Text style={[styles.label, { color: "#0DCDAA" }]} >{price}Pkr</Text>
                </View>
                <View>
                    <Text style={styles.label} >{service}</Text>
                </View>
                <View style={{ flexDirection: "row", margin: 5 }} >
                    <AntDesign
                        name="tag"
                        size={normalize(16)}
                        color="#3D3939"
                        style={{ paddingTop: 5 }}
                    /><Text style={{ color: "#3D3939", fontSize: normalize(18), paddingLeft: 5 }} >{category}</Text>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
    },
    ContainerView: {
        padding: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    label: {
        fontSize: normalize(18),
        fontWeight: "bold",

    }

});
export default ServiceDetail;