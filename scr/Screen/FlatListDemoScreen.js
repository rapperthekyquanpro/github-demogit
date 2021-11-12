
import React, { useState, useReducer } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground
} from 'react-native';
import MatchesButtonComponent from '../components/MatchesButtonComponent';
import backGround from '../assets/lol-background.png'


const FlatListDemoScreen = ({ navigation }) => {
    const matches = [
        {
            info: "BO1", type: "Play-in", isOpen: true, key: "1",
            match: [
                { date: "20/10/2021", time: "18:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "1" },
                { date: "20/10/2021", time: "19:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "2" },
                { date: "21/10/2021", time: "20:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "3" },
                { date: "21/10/2021", time: "21:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "4" },
                { date: "22/10/2021", time: "22:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "5" },
                { date: "22/10/2021", time: "23:00", team1Logo: require("../assets/T1.png"), team2Logo: require("../assets/HLE.png"), status: "open", choose: 0, key: "6" },
            ]
        },
        { info: "BO5", type: "Play-in", isOpen: false, key: "2", match: [] },
        { info: "BO1", type: "Group", isOpen: false, key: "3", match: [] },
        { info: "BO5", type: "Quarter", isOpen: false, key: "4", match: [] },
        { info: "BO5", type: "Semi-Final", isOpen: false, key: "5", match: [] },
        { info: "BO5", type: "Final", isOpen: false, key: "6", match: [] }
    ]

    return (
        <ImageBackground source={backGround} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={matches}
                    renderItem={({ item }) => {
                        return (
                            <MatchesButtonComponent
                                onPress={() => navigation.navigate('DateMatchesScreen', item)}
                                info={item.info}
                                type={item.type}
                                isOpen={item.isOpen}
                            />
                        );
                    }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default FlatListDemoScreen;
