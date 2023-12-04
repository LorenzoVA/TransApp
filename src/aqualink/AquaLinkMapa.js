import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AquaLinkMapa({ navigation }) {
  const goToHome = () => {
    navigation.navigate('AquaLink');
  };

  const vitoria = () => {
    const latitude = -20.318055454863085; // -20.318055454863085, -40.29439725091569
    const longitude = -40.29439725091569;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const vilaVelha = () => {
    const latitude = -20.327626897138863; // -20.327626897138863, -40.29140617357321
    const longitude = -40.29140617357321;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const cariacica = () => {
    const latitude = -20.30873439833375; // -20.30873439833375, -40.36403103861589
    const longitude = -40.36403103861589;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Estações</Text>
        <Text style={styles.sub}>Vitória - Praça do Papa</Text>
        <TouchableOpacity style={styles.button} onPress={vitoria}>
          <Text style={styles.btnText}>Estação Prefeito Setembrino</Text>
        </TouchableOpacity>
        <Text style={styles.sub}>Vila Velha - Prainha</Text>
        <TouchableOpacity style={styles.button} onPress={vilaVelha}>
          <Text style={styles.btnText}>Estação Governador Albuíno</Text>
        </TouchableOpacity>
        <Text style={styles.sub}>Cariacica - Porto de Santana</Text>
        <TouchableOpacity style={styles.button} onPress={cariacica}>
          <Text style={styles.btnText}>Estação Prefeito Aloizio</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.voltar} onPress={goToHome}>
        <Text style={styles.txtVoltar}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#191919',
  },
  scroll: {
    padding: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    color: '#FFFFFF',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    fontSize: 24,
    marginBottom: '5%',
  },
  button: {
    backgroundColor: '#7AA6EF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    marginBottom: '5%',
    marginTop: '6%',
    height: hp('5%'),
    width: wp('60%'),
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
  voltar: {
    marginLeft: '5%',
    padding: '4%',
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
    color: '#FFFFFF',
  },
  sub: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '5%',
    marginTop: '7%',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
});
