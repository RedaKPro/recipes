import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Splash = ({ }) => {
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                <Text style={styles.title}>100K+ Premium Recipes</Text>

                <Button>Start Cooking</Button>
            </View>
        </ImageBackground>
    )
}

export default React.memo(Splash);