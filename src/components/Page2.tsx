import React from "react"
import { View, Text } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page2 = () => (
    <View style={commonStyles.container}>
        <Text style={commonStyles.text}>Page 1</Text>
                <Text style={commonStyles.content}>
                    About Me:
                    * I like Playing Games and Watching Anime
                    * I'm Currently at my 2nd Year of BSIT
                </Text>
    </View>
);

export default Page2;