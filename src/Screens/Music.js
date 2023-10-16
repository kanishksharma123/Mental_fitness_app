import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayback = () => {
        setIsPlaying(!isPlaying);
        // Add your logic for starting or pausing the music here
    };

    const handleNext = () => {
        // Add logic to play the next song here
    };

    const handlePrevious = () => {
        // Add logic to play the previous song here
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/Onboarding.png')} // Replace with your image
                style={styles.image}
            />
            <Text style={styles.title}>Now Playing</Text>
            <Text style={styles.songTitle}>Animals</Text>
            <Text style={styles.artist}>Martin Garrix</Text>
            <View style={styles.controls}>
                <TouchableOpacity onPress={handlePrevious}>
                    <Text style={styles.controlButton}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayback}>
                    <Text style={styles.playButton}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={styles.controlButton}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 150,
    },
    songTitle: {
        fontSize: 20,
        marginTop: 10,
    },
    artist: {
        fontSize: 16,
        color: 'gray',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },
    playButton: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    controlButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Music;
