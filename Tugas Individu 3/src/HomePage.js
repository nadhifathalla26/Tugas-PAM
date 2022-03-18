import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const Home = ({navigation}) => {  
  const [text, inputText] = useState({ 
    departure: '',
    arrival: '',
    date: '',
  });

  const getInput = (userInput) => {
    return (val) => {
      inputText({ ...text, [userInput]: val });
      console.log(text);
    }
  }
  
  const onSubmit = () => {
    navigation.navigate('Info', { text })
  } 
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00660e" />
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView>
            <Text style={styles.header}>Healing.ID</Text>
            <View style={styles.main}>
              <Text style={styles.title}>Bandara Keberangkatan</Text>
              <View style={styles.search}>
                <Icon style={styles.departureIcon} name="plane-departure" size={20} color='#283593'/>
                <TextInput
                  style={styles.input}
                  placeholder="Bandara Keberangkatan"
                  onChangeText={getInput('departure')}
                  value={text.departure}
                />
              </View>   
              <Text style={styles.title}>Bandara Tujuan</Text>
              <View style={styles.search}>
                <Icon style={styles.arrivalIcon} name="plane-arrival" size={20} color='#283593' />
                <TextInput
                  style={styles.input}
                  placeholder="Bandara Tujuan"
                  onChangeText={getInput('arrival')}
                  value={text.arrival}
                />
              </View>              
              <Text style={styles.title}>Tanggal Penerbangan</Text>
              <View style={styles.search}>
                <Icon style={styles.calendarIcon} name="calendar-days" size={20} color='#283593' />
                <TextInput
                  style={styles.input}
                  placeholder="Tanggal Penerbangan"
                  onChangeText={getInput('date')}
                  value={text.date}
                />
              </View>              
              <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}>
                <Text style={styles.buttonText}>Cari</Text>
              </TouchableOpacity>
              </View>
            <Text style={styles.copyright}>Muhammad Nadhif Athalla - 119140209</Text>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#00660e',
  },
  header: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: 20,    
  },
  main: {
    margin: 40,  
    marginTop: 50,  
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 0,
  },
  // group: {
  //   marginBottom: 20,
  // },
  search: {
    marginLeft:15,    
    flexDirection: 'row', 
    justifyContent: 'center',   
    alignItems: 'center',
  },
  calendarIcon: {
    paddingRight: 5,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00660e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00660e',
    borderRadius: 5,
    color: '#00660e',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: 250,
    flex: 1,
  },
  button: {
    backgroundColor: '#eb7900',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#00660e',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Home;