import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Alert, 
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Tidak Ada Barcode yang di Scan')

  const cameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Access
  useEffect(() => {
    cameraPermission();
  }, []);

  // Barcode Handler
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Barcode dengan tipe: ' + type + 'dan Data: ' + data + 'berhasil discan')
  };

  // Check Permission
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Meminta Izin Untuk Mengakses Kamera</Text>
      </View>)
    }

  if (hasPermission === false) {
    return (
    //   Alert.alert(
    //     'Akses Untuk Kamera Ditolak!',
    //     'Silahkan Ulangi Proses dan Berikan Akses Untuk Kamera',
    //     [{text: 'OK'}],
      
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Akses Untuk Kamera Ditolak! Silahkan Berikan Akses Untuk Kamera</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => cameraPermission()}>
          <Text style={styles.buttonText}>
            Izinkan Kamera
          </Text>
        </TouchableOpacity>
        </View>
      )
    }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.resultText1}>Hasil Scan Barcode :</Text>
      <Text style={styles.resultText2}>{text}</Text>

      {scanned && 
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>
              Scan Barcode Lainnya
            </Text>
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText1: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 2,
    fontWeight: 'bold'
  },
  resultText2: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#004161',
    borderRadius: 10,
    width: 250
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  }
});

export default BarcodeScanner;