import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp
};

const windowWidth = Dimensions.get('window').width

const HomeScreen: React.FC<Props> = ({navigation}) => {
    const [userId, setUserId] = useState('');
     
    const checkValidity = () => {
        if (userId.length <= 8) {
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text style={styles.text}> Welcome to your Home Screen</Text>
              <TextInput
                  style={styles.input}
                  value={userId}
                  onChangeText={setUserId}
                  placeholder="Enter User ID"
                  autoCapitalize="none"
                />
                {
                    checkValidity() === false
                        ?
                           <Button
                           title="Enter User Id"
                           color={'#4a4a4a'}
                        />
                        :
                        <Button
                           title="Go to Profile"
                           onPress={() => navigation.navigate('Profile', { userId: userId})}
                        />
                }  
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        width: windowWidth*.75,
        fontSize: 40,
        textAlign: 'center',
        color: '#333333'
    },
    input: {
        width: windowWidth*.75,
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
});

export default HomeScreen;