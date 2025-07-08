import React, { useState } from "react";
import {
    View,
    TextInput,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { theme } from "../assets/styles/styles";

export default function AutoCompleteInput({
    data = [],
    placeholder = "Type here...",
}) {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);

    const handleChange = (text) => {
        setQuery(text);
        if (text.length > 0) {
            const regex = new RegExp(`${text.trim()}`, "i");
            setFiltered(data.filter((item) => item.search(regex) >= 0));
        } else {
            setFiltered([]);
        }
    };

    const handleSelect = (item) => {
        setQuery(item);
        setFiltered([]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={query}
                onChangeText={handleChange}
            />
            {filtered.length > 0 && (
                <FlatList
                    style={styles.list}
                    data={filtered}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelect(item)}>
                            <Text style={styles.item}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    list: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        borderColor: "#ccc",
        borderTopWidth: 0,
        borderRadius: 8,
        maxHeight: 150,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
});
