import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Community = () => {
    const communitiesData = [
        { id: '1', name: 'Community 1', color: '#FF6B6B' },
        { id: '2', name: 'Community 2', color: '#6BFF6B' },
        { id: '3', name: 'Community 3', color: '#6B6BFF' },
        // Add more community objects as needed
    ];

    const renderCommunityItem = ({ item }) => (
        <TouchableOpacity style={[styles.communityCard, { backgroundColor: item.color }]}>
            <Text style={styles.communityName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Communities</Text>
            <FlatList
                data={communitiesData}
                keyExtractor={(item) => item.id}
                renderItem={renderCommunityItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 16,
    },
    communityCard: {
        padding: 16,
        margin: 8,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    communityName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Text color on the card
    },
});

export default Community;
