import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { FlashList } from "@shopify/flash-list";
import { normalize } from "../styles/style";
import { useNavigation } from "@react-navigation/native";
import ServiceCard from "../components/ServiceCard";

const DeleteServices = () => {
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
    const handleDelete = (id, uri, title, category, price, store) => {
        console.log("delete item");
        console.log(id, uri, title, category, price, store);
        //api logic for delete service
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
                        onDeletePress={handleDelete}
                        onItemPress={() => { }}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        store={item.store}
                        url={item.url}
                        showDeleteButton={true}
                    />
                )}
            />
        </View>
    );
};

export default DeleteServices;