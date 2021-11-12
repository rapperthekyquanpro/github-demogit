import React from "react";
import{
    Image,Text,View,StyleSheet
} from "react-native";
import titleImage from '../assets/title-image.png'

export default function TitleComponent(props){
    return (
        <View>
            <Image source={props.imageSource}></Image>
            <Text style={styles.slogan}>Love is for everyone</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    slogan:{
        fontSize: 25,
        fontWeight: '500'
    }
})