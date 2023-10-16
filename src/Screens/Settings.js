import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Settings = () => {
    const toggleSwitch = () => {
        // Handle the toggle switch logic here
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>General Settings</Text>
                <View style={styles.setting}>
                    <Text style={styles.settingText}>Push Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={false}
                    />
                </View>
                <View style={styles.setting}>
                    <Text style={styles.settingText}>Email Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={true}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Account Settings</Text>
                <TouchableOpacity style={styles.setting}>
                    <Text style={styles.settingText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setting}>
                    <Text style={styles.settingText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginHorizontal: 20
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    settingText: {
        fontSize: 16,
    },
});

export default Settings;
