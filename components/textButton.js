import { Pressable,StyleSheet, Text, View } from "react-native";

export default function TextButton(props) {

function onTabHandler(){
    props.onTab()
}



    return (
        <View>
            <Pressable onPress={onTabHandler}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.textStyle}>
                        {props.title}
                        </Text>
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 8,
        paddingHorizontal:16,
        backgroundColor:'green',
    },
    textStyle:{
    color: 'white',
    fontSize: 20,
    },

})