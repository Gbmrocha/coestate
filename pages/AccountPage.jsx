import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function AccountPage() {
    const [user, setUser] = useState(data);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={{ padding: 20 }}>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={(e) => alert('foto')}
                        style={{
                            marginTop: 60,
                            marginBottom: 10,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            borderRadius: 100,
                            backgroundColor: '#ccc',
                        }}>
                        <Text>Envie sua foto</Text>
                    </TouchableOpacity>

                    <Text>{user.username}</Text>

                </View>

                <Text style={{ fontSize: 40, marginTop: 20 }}>Informações</Text>

                <View style={styles.card}>
                    <Text style={styles.title}>Nome</Text>
                    <Text style={styles.label}>{user.name}</Text>

                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Telefone</Text>
                    <Text style={styles.label}>{user.phone}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Email</Text>
                    <Text style={styles.label}>{user.email}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Sexo</Text>
                    <Text style={styles.label}>{user.sex}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Idade</Text>
                    <Text style={styles.label}>{user.age}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const data = {
    username: 'jprcarvalho',
    name: 'João Pedro Rios Carvalho',
    phone: '(75) 99237-0004',
    email: 'jprcarvalho1@icloud.com',
    sex: 'Masculino',
    age: '21',
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
    label: {
        marginLeft: 5
    },
    card: {
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    }
});