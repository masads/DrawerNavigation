import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { normalize } from '../styles/style';
import ImagePickerExample from '../components/ImagePicker';
import { categories } from '../constant/constants';


const AddService = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        //api logic for add service
        console.log(name)
        console.log(category)
        console.log(price)
        console.log(service)
        console.log(image)


        //for reset logic when done adding
        // setName('');
        // setService('');
        // setPrice('');
        // setCategory('');
        // setImage(null);
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
                    <ImagePickerExample saveImage={saveImage} deteleImage={deteleImage} />
                </View>
                <Pressable
                    onPress={handleSubmit}
                    style={styles.button}
                ><Text style={styles.buttonText} >Submit</Text></Pressable>
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
        paddingLeft: 5,
        paddingTop: 10
    }
});

export default AddService;