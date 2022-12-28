import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { normalize } from "../styles/style";

function ServiceCard({
    onItemPress,
    onDeletePress,
    title,
    category,
    price,
    store,
    url,
    showDeleteButton,
    id
}) {
    const onProductPress = () => {
        onItemPress(id, url, title, category, price, store);
    };

    const onDeleteButtonPress = () => {
        onDeletePress(id, url, title, category, price, store);
    };
    return (
        <Pressable onPress={onProductPress}>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                <View
                    style={{
                        width: normalize(80),
                        height: normalize(80),
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            borderRadius: 20,
                        }}
                        source={{
                            uri: url,
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1,
                        marginLeft: 10,
                    }}
                >
                    <View
                        style={{
                            justifyContent: "space-between",
                            paddingLeft: 5,
                            flex: 1,
                        }}
                    >
                        <Text
                            numberOfLines={1}
                            style={{
                                color: "#7C7C7C",
                                fontSize: normalize(16),
                            }}
                        >
                            {store}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: normalize(14),
                                    fontWeight: "bold",
                                    color: "#3D3939",
                                }}
                                numberOfLines={1}
                            >
                                {title}
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <AntDesign
                                name="tag"
                                size={normalize(16)}
                                color="#3D3939"
                                style={{ paddingTop: 2 }}
                            />
                            <Text
                                style={{
                                    paddingLeft: 5,
                                    fontSize: normalize(14),
                                }}
                                numberOfLines={1}
                            >
                                {category}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            paddingBottom: 5,
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                color: "#0DCDAA",
                                fontSize: normalize(16),

                            }}
                        >
                            {price} Pkr
                        </Text>
                        {showDeleteButton ? (
                            <Pressable
                                onPress={onDeleteButtonPress}
                                hitSlop={{ left: 10, bottom: 5 }}
                            >
                                <AntDesign size={20} color={"red"} name="delete" />
                            </Pressable>
                        ) : (
                            <></>
                        )}
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

export default ServiceCard;