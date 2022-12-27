import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
    },

})

export default styles;