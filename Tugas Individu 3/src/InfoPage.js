import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Jadwal_Pesawat, Maskapai_Pesawat, Bandara_Pesawat } from './Data.js';

const Info = ({ route, navigation }) => {
  const data = route.params.text;
  const departure = Bandara_Pesawat.find(item => item.bandara_nama === data.departure).bandara_id;
  const arrival = Bandara_Pesawat.find(item => item.bandara_nama === data.arrival).bandara_id;
  const scheduleList = Jadwal_Pesawat.filter(item =>
    item.bandara_id_keberangkatan === departure &&
    item.bandara_id_kedatangan === arrival &&
    item.jadwal_penerbangan === data.date);
  console.log(scheduleList);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00660e" />
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="chevron-left" style={styles.buttonBack} size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.header}>Healing.ID</Text>
            <Text style={styles.headline}>Hasil Pencarian Penerbangan</Text>
          </View>
          <Text style={styles.search}>Hasil Pencarian</Text>
          <FlatList
          data={scheduleList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.detail_search}>
                <View style={styles.airport_style}>
                  <Text style={styles.text}>
                    {Bandara_Pesawat.find(theItem => theItem.bandara_id === item.bandara_id_keberangkatan).bandara_nama}
                  </Text>
                  <Text style={styles.text}>
                    {Bandara_Pesawat.find(theItem => theItem.bandara_id === item.bandara_id_kedatangan).bandara_nama}
                  </Text>
                </View>
                <View style={styles.time_style}>
                  <View style={styles.airline_style}>
                    <Icon style={styles.planeIcon} name="plane" size={20} color='#fff' />
                    <Text style={styles.text}>
                      {Maskapai_Pesawat.find(theItem => theItem.maskapai_id === item.maskapai_id).maskapai_nama}
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {item.jadwal_penerbangan}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            )}
            keyExtractor={item => item.jadwal_id}
            >
          </FlatList>
        </View>
        <Text style={styles.copyright}>Muhammad Nadhif Athalla - 119140209</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#00660e',
  },
  buttonBack: {
    color: '#fff',
    marginTop: 40,
    marginHorizontal: 40,
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 40,
  },
  search: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  card: {
    marginHorizontal: 30,
  },
  detail_search: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 10,
  },
  airport_style: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time_style: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airline_style: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  planeIcon: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});

export default Info;