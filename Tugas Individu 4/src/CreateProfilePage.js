import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';

const CreateProfile = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Maaf, Akses Terhadap Galeri Belum Diberikan',
            'Silahkan Berikan Akses Terhadap Galeri Anda',
            [{text: 'OK'}],
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const removeImage = () => {
    setImage()
    Alert.alert(
      'Gambar Telah Terhapus',
      'Silahkan Masukkan Gambar Terbaru',
      [{text: 'OK'}],
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.MainText}>
          Foto Profil Kamu
        </Text>
      </View>
      <View>
        {image && <Avatar.Image
          underlayColor={'rgba(0,0,0,0)'}
          size={250}
          source={{uri: image}}
        />}
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonUpload}
          onPress={() => pickImage()}>
          <Text style={styles.buttonText}>
            Unggah Foto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRemove}
          onPress={() => removeImage()}>
          <Text style={styles.buttonText}>
            Hapus Foto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  containerButton: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonUpload: {
    height: 40,
    backgroundColor: 'green',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 10,
  },
  buttonRemove: {
    height: 40,
    backgroundColor: 'red',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
});

export default CreateProfile;