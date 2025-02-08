import React from "react"
import { View, Text } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page3 = () => (
    <View style={commonStyles.container}>
        <Text style={commonStyles.text}>Page 1</Text>
        <Text style={commonStyles.content}>
            I'm doing the best i can to get a job and finish college.
        </Text>
    </View>
);

export default Page3;