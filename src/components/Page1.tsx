import React from "react"
import { View, Text } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page1 = () => (
    <View style={commonStyles.container}>
        <Text style={commonStyles.text}>Page 1</Text>
                <Text style={commonStyles.content}>
                    Name: John Ivan A. Gonzales
                    Age: 20
                    DOB: 09/26/2004
                </Text>
    </View>
);

export default Page1;