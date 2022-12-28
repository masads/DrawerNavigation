import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { normalize } from '../styles/style';
import ImagePickerExample from '../components/ImagePicker';
import { categories } from '../constant/constants';



const EditService = ({ route }) => {

    const [name, setName] = useState(route.params.store);
    const [service, setService] = useState(route.params.service);
    const [price, setPrice] = useState(route.params.price);
    const [category, setCategory] = useState(route.params.category);
    const [image, setImage] = useState(route.params.uri);

    const handleupdate = () => {
        //api logic for edit service
        console.log(route.params.id);
        console.log(name)
        console.log(category)
        console.log(price)
        console.log(service)
        console.log(image)
    }

    const saveImage = (data) => {
        setImage(data);
    }
    const deteleImage = () => {
        setImage(null);
    }
    return (
        <ScrollView style={styles.Container} >
            <View style={styles.ContainerView} >
                <View>
                    <Text style={styles.label} >Name of store:</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label} >Service Name:</Text>
                    <TextInput
                        value={service}
                        onChangeText={text => setService(text)}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label} >Price:</Text>
                    <TextInput
                        value={price}
                        onChangeText={text => setPrice(text)}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text style={styles.label} >Category of service:</Text>
                    <Picker
                        selectedValue={category}
                        onValueChange={itemValue => setCategory(itemValue)}
                    >
                        {categories.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}

                    </Picker>
                </View>
                <View>
                    <Text style={styles.label} >Upload an image:</Text>
                    <ImagePickerExample image={image} saveImage={saveImage} deteleImage={deteleImage} />
                </View>
                <Pressable
                    onPress={handleupdate}
                    style={styles.button}
                ><Text style={styles.buttonText} >update</Text></Pressable>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    Container: {
    },
    ContainerView: {
        backgroundColor: "white",
        padding: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    input: {
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        paddingHorizontal: 20
    },
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
    }
});
export default EditService;