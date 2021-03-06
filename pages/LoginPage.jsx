import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={{ uri: './assets/logo.png' }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(e) => navigation.navigate('Register')}>
        <Text style={styles.forgot_button}>Registre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={(e) => {
        if (email === "admin@coestate.io" && password === 'admin') {
          navigation.navigate('Home')
        } else {
          alert("Credenciais inválidas!");
        }
      }}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    backgroundColor: "gray",
    placeholderTextColor: 'white',
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    color: 'white',
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "blue",
    color: 'white'
  },
  loginText: {
    color: 'white'
  },
  logo: {
    width: 66,
    height: 58,
  },
});