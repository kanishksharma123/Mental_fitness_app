import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
let feelingTodayJson = [
    {
        "id": 1,
        "image": require('../assets/Happy.png'),
        "title": "Happy",
        "color": '#EF5DA8'
    },
    {
        "id": 2,
        "image": require('../assets/calmicon.png'),
        "title": "Calm",
        "color": '#AEAFF7'
    },
    {
        "id": 3,
        "image": require('../assets/Relax.png'),
        "title": "Relax",
        "color": '#F09E54'
    },
    {
        "id": 4,
        "image": require('../assets/Focus.png'),
        "title": "Focus",
        "color": '#A0E3E2'
    },
]
let todayTask = [
    {
        "id": 1,
        "image": require('../assets/calmicon.png'),
        "title": "Peer Group Meetup",
        "subtitle": "Let’s open up to the  thing that matters amoung the people ",
        "joinNow": true,
        "color": '#FCDDEC'
    },
    {
        "id": 2,
        "image": require('../assets/calmicon.png'),
        "title": "Meditation",
        "subtitle": "Aura is the most important thing that matters to you.join us on ",
        "joinNow": false,
        "color": '#F09E544D'
    },
    // {
    //     "id": 3,
    //     "image": require('../assets/calmicon.png'),
    //     "title": "Title 3",
    //     "subtitle": "Subtitle 3",
    //     "joinNow": true,
    //     "color": '#F09E54'
    // }
]
const Dashboard = () => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                // alignItems: 'center',
                marginHorizontal: 20
            }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Image style={{}} source={require('../assets/Hamburger.png')} ></Image>
                <Image style={{}} source={require('../assets/Ellipse2.png')} ></Image>
            </View>
            <Text style={{ fontSize: 24, fontFamily: 'verdana', marginTop: 10 }}>Welcome back, Sarina!</Text>
            <Text style={{ fontSize: 22, fontFamily: 'Cochin', marginTop: 20, fontWeight: '400' }}>How are you feeling today ?</Text>

            <FlatList
                style={{ marginTop: 30, maxHeight: 140, }}
                nestedScrollEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                data={feelingTodayJson}
                renderItem={({ item }) => (
                    <View style={{ maxHeight: 80, }}>
                        <View style={{ backgroundColor: item.color, justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 20, maxHeight: 80, marginRight: 30, }} >
                            <Image resizeMode='contain' style={{ width: 50, height: 50, }} source={item.image} ></Image>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Cochin', marginTop: 10, fontWeight: '400', marginLeft: 35 }}>{item.title}</Text>

                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Text style={{ fontSize: 22, fontFamily: 'Cochin', marginTop: 30, fontWeight: '400' }}>Today’s Task</Text>
            <FlatList
                style={{ marginTop: 30, }}
                data={todayTask}
                renderItem={({ item }) => (
                    <View style={{}}>
                        <View style={{ backgroundColor: item.color, padding: 20, borderRadius: 20, marginTop: 20 }} >
                            <Text style={{ fontSize: 20, fontFamily: 'Cochin', fontWeight: '300', width: 250 }}>{item.title}</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Cochin', fontWeight: '300', width: 250, marginTop: 10 }}>{item.subtitle}</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'verdana', fontWeight: '600', width: 250, color: '#EF5DA8', marginTop: 10 }}>{item.joinNow ? 'Join Us' : '06:00'}</Text>
                            <Image resizeMode='contain' style={{ width: 50, height: 50, position: 'absolute', right: 5, top: 30 }} source={item.image} ></Image>
                        </View>


                    </View>
                )}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}
export default Dashboard;