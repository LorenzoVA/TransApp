import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function TransApp({ navigation }) {
  const goToBusLink = () => {
    navigation.navigate('BusLink');
  };
  const goToAquaLink = () => {
    navigation.navigate('AquaLink');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical contentContainerStyle={styles.scroll}>
        <Image
          source={require('../src/imgs/logo_transapp.png')}
          style={styles.imgLogo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button} onPress={goToBusLink}>
          <Text style={styles.btnText}>BusLink</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToAquaLink}>
          <Text style={styles.btnText}>AquaLink</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // #3F2A55, #3A9140
  },
  scroll: {
    marginTop: '10%',
    padding: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: '60%',
    height: '60%',
    marginBottom: '15',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#3A9140',
    borderRadius: 5,
    margin: '8%',
    width: '65%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  btnText: {
    color: '#3F2A55',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  imgLogo: {
    height: '150px',
    width: '150px',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
