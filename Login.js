import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          <Image style={{height:250, width:400}} source={{uri:"https://acegif.com/wp-content/gifs/book-17.gif"}} />
          <Text style={{fontSize:18, textAlign:'center', color:'#1a000a', padding:50}}>WELCOME TO BOOK STORE </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name"
          placeholderTextColor="gray"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Home Page')}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('SignUp')}>SIGNUP</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>  
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009999",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#99ffff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'#006666',
  },
 
  loginBtn: {
    width: "20%",
    borderRadius: 10,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#99ffff",
  },

  SignUpBtn: {
    width: "20%",
    borderRadius: 10,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#99ffff",
  },
});