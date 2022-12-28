import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { FlashList } from "@shopify/flash-list";
import { normalize } from "../styles/style";
import { useNavigation } from "@react-navigation/native";
import ServiceCard from "../components/ServiceCard";

const EditServices = () => {
    const data = [
        {
            id: 1,
            title: "Service 1",
            category: "cate1",
            price: "400",
            store: "Store 1",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg",
        },
        {
            id: 2,
            title: "Service 2",
            category: "cate2",
            price: "800",
            store: "Store 2",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg",
        },
        {
            id: 3,
            title: "Service 3",
            category: "cate1",
            price: "600",
            store: "Store 3",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg",
        },

    ];
    const { navigate } = useNavigation();
    const handlePress = (id, uri, service, category, price, store) => {
        console.log("main item");
        console.log(id, uri, service, category, price, store);
        navigate("EditService", { id, uri, service, category, price, store })
    };

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
            <FlashList
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                data={data}
                contentContainerStyle={{ paddingBottom: 10 }}
                estimatedItemSize={normalize(200)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ServiceCard
                        id={item.id}
                        onItemPress={handlePress}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        store={item.store}
                        url={item.url}
                        showDeleteButton={false}
                    />
                )}
            />
        </View>
    );
};

export default EditServices;