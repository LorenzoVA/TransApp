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
    navigation.navigate('BusLink');
  };

  const vitoria = () => {
    const latitude = -20.320839828993172;
    const longitude = -40.35183240957003;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const vilaVelha = () => {
    const latitude = -20.34268981053882;
    const longitude = -40.29493479620554;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const saoTorquato = () => {
    const latitude = -20.330182571893836;
    const longitude = -40.353120788407345;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const ibes = () => {
    const latitude = -20.346578948769423;
    const longitude = -40.315854569628804;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const itaparica = () => {
    const latitude = -20.39234806395017;
    const longitude = -40.32157931451889;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const campoGrande = () => {
    const latitude = -20.345882036803605;
    const longitude = -40.396800864221575;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const jardimAmerica = () => {
    const latitude = -20.333582644540705;
    const longitude = -40.35904321031799;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const itaciba = () => {
    const latitude = -20.325841382776026;
    const longitude = -40.37182901261246;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const carapina = () => {
    const latitude = -20.230661457954387;
    const longitude = -40.27002610386151;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const laranjeiras = () => {
    const latitude = -20.1939693481784;
    const longitude = -40.25482612781206;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  const jacaraipe = () => {
    const latitude = -20.159750839493295;
    const longitude = -40.19603888451322;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Localizações</Text>
        <Text style={styles.sub}>Vitória</Text>
        <TouchableOpacity style={styles.button} onPress={vitoria}>
          <Text style={styles.btnText}>Terminal de Vitória</Text>
        </TouchableOpacity>
        <Text style={styles.sub}>Vila Velha</Text>
        <TouchableOpacity style={styles.button} onPress={vilaVelha}>
          <Text style={styles.btnText}>Terminal de Vila Velha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={saoTorquato}>
          <Text style={styles.btnText}>Terminal de São Torquato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ibes}>
          <Text style={styles.btnText}>Terminal do Ibes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={itaparica}>
          <Text style={styles.btnText}>Terminal de Itaparica</Text>
        </TouchableOpacity>
        <Text style={styles.sub}>Cariacica</Text>
        <TouchableOpacity style={styles.button} onPress={campoGrande}>
          <Text style={styles.btnText}>Terminal de Campo Grande</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={jardimAmerica}>
          <Text style={styles.btnText}>Terminal de Jardim América</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={itaciba}>
          <Text style={styles.btnText}>Terminal de Itacibá</Text>
        </TouchableOpacity>
        <Text style={styles.sub}>Serra</Text>
        <TouchableOpacity style={styles.button} onPress={carapina}>
          <Text style={styles.btnText}>Terminal de Carapina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={laranjeiras}>
          <Text style={styles.btnText}>Terminal de Laranjeiras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={jacaraipe}>
          <Text style={styles.btnText}>Terminal de Jacaraípe</Text>
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
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    padding: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    fontSize: 24,
    marginBottom: '5%',
  },
  button: {
    backgroundColor: '#FFA500',
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
    color: '#000000',
  },
  sub: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
