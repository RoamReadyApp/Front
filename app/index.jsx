import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Item from "../Componants/item"; // Adjust the path accordingly
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import welcome from "./Login"

export default function Page() {
    
    return(
        <View style={styles.container}>
                <welcome/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
});
