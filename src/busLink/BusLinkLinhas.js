import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const data = [
  {
    id: '1',
    nOnibus: '513',
    horario: '09:00',
    localEmbarque: 'Ponto A',
    destino: 'Ponto B',
  },
  {
    id: '2',
    nOnibus: '925',
    horario: '09:30',
    localEmbarque: 'Ponto C',
    destino: 'Ponto D',
  },
  {
    id: '3',
    nOnibus: '173',
    horario: '11:15',
    localEmbarque: 'Ponto E',
    destino: 'Ponto F',
  },
  {
    id: '4',
    nOnibus: '438',
    horario: '11:30',
    localEmbarque: 'Ponto G',
    destino: 'Ponto H',
  },
  {
    id: '5',
    nOnibus: '279',
    horario: '12:00',
    localEmbarque: 'Ponto I',
    destino: 'Ponto J',
  },
];

export default function AquaLinkLinhas({ navigation }) {
  const goToHome = () => {
    navigation.navigate('BusLink');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Linhas de Ônibus</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.busContainer}>
            <View style={styles.busInfo}>
              <Text style={styles.label}>N° do Ônibus:</Text>
              <Text style={styles.value}>{item.nOnibus}</Text>
            </View>
            <View style={styles.busInfo}>
              <Text style={styles.label}>Horário:</Text>
              <Text style={styles.value}>{item.horario}</Text>
            </View>
            <View style={styles.busInfo}>
              <Text style={styles.label}>Local de Embarque:</Text>
              <Text style={styles.value}>{item.localEmbarque}</Text>
            </View>
            <View style={styles.busInfo}>
              <Text style={styles.label}>Destino:</Text>
              <Text style={styles.value}>{item.destino}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.voltar} onPress={goToHome}>
        <Text style={styles.txtVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginLeft: '25%',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    fontSize: 24,
    marginBottom: '5%',
  },
  busContainer: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
  busInfo: {
    marginBottom: 10,
  },
  label: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  voltar: {
    marginTop: '3%',
    marginLeft: '4%',
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
