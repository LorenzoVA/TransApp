import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function AquaLinkHome({ navigation }) {
  const goToAbastecer = () => {
    navigation.navigate('Abastecer BusLink');
  };
  const goToLinhas = () => {
    navigation.navigate('Linhas BusLink');
  };
  const goToMapa = () => {
    navigation.navigate('Mapa BusLink');
  };
  const goToTransApp = () => {
    navigation.navigate('TransApp');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical contentContainerStyle={styles.scroll}>
        <Image
          source={require('../../src/imgs/logo_buslink.png')}
          style={styles.imgLogo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button} onPress={goToAbastecer}>
          <Text style={styles.btnText}>Abastecer Cartão GVBuss</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToLinhas}>
          <Text style={styles.btnText}>Ver linhas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToMapa}>
          <Text style={styles.btnText}>Mapa dos Terminais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.voltar} onPress={goToTransApp}>
          <Text style={styles.txtVoltar}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFA500',
    borderRadius: 5,
    margin: '8%',
    width: '65%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  btnText: {
    color: '#FFFFFF',
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
  voltar: {
    marginTop: '3%',
    padding: '1%',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  txtVoltar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
