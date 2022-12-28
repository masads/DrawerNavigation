import React, { useState } from 'react';
import { PermissionsAndroid, View, Text, TouchableOpacity, Pressable, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { normalize } from '../styles/style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ImagePickerExample = ({ image, saveImage, deteleImage }) => {
    const [responseCamera, setResponseCamera] = React.useState(image ? { uri: image } : null);
    console.log(image)
    const openCameraWithPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                    (response) => {
                        if (response.assets) {
                            setResponseCamera(response.assets[0]);
                            saveImage(response.assets[0]);
                        }
                    },
                )
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };


    return (
        <View  >
            {responseCamera !== null ? (
                <View style={{ flex: 1, padding: 10 }} >
                    <View s >
                        <Image source={{ uri: responseCamera.uri }} style={{ flex: 1, height: 200, zIndex: 2 }} />
                        <AntDesign style={{ position: "absolute", zIndex: 2, right: -10, top: -15 }} name="closecircle" size={30} color="#E7625F" onPress={() => { setResponseCamera(null); deteleImage() }} />
                    </View>
                    <Pressable

                        onPress={openCameraWithPermission}
                        style={styles.buttonRe}
                    ><Text style={styles.buttonText} >Retake</Text></Pressable>
                </View>


            ) : (
                <Pressable

                    onPress={openCameraWithPermission}
                    style={styles.button}
                ><Text style={styles.buttonText} >Select image</Text></Pressable>
            )}
        </View>

    );
};
const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: "#0275d8",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        paddingVertical: normalize(20),
    },
    buttonText: {
        color: "white",
        fontSize: normalize(18),
    },
    label: {
        fontSize: normalize(15),
        paddingLeft: 5
    },
    buttonRe: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        paddingVertical: normalize(20),
        backgroundColor: "#E7625F",
    }
});

export default ImagePickerExample;



