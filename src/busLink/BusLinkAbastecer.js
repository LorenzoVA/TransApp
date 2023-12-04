import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  CheckBox,
  SafeAreaView,
} from 'react-native';

export default function AquaLinkAbastecer({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valorRecarga, setValorRecarga] = useState('');
  const [opcaoPagamento, setOpcaoPagamento] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataExpiracao, setDataExpiracao] = useState('');
  const [cvv, setCvv] = useState('');
  const [concordouTermos, setConcordouTermos] = useState(false);
  const [codigoPix, setCodigoPix] = useState('');

  const goToHome = () => {
    navigation.navigate('BusLink');
  };

  const realizarRecarga = () => {
    if (
      nome &&
      sobrenome &&
      email &&
      cpf &&
      telefone &&
      valorRecarga &&
      opcaoPagamento &&
      concordouTermos
    ) {
      if (opcaoPagamento === 'PIX') {
        const codigoAleatorio = Math.random()
          .toString(36)
          .substring(2, 12)
          .toUpperCase();
        setCodigoPix(codigoAleatorio);
      }

      Alert.alert('Recarga bem-sucedida');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.', {
        color: 'red',
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Recarga do Cartão GVBuss</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            onChangeText={(text) => setSobrenome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={(text) => setCpf(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            onChangeText={(text) => setTelefone(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="N° do Cartão GVBus"
            onChangeText={(text) => setValorRecarga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor da Recarga"
            onChangeText={(text) => setValorRecarga(text)}
          />
        </View>
        <Text style={styles.label}>Selecione o Método de Pagamento:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => setOpcaoPagamento('Cartão de Crédito')}
          >
            <Text style={styles.btnText}>Cartão de Crédito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => setOpcaoPagamento('Cartão de Débito')}
          >
            <Text style={styles.btnText}>Cartão de Débito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => setOpcaoPagamento('PIX')}
          >
            <Text style={styles.btnText}>PIX</Text>
          </TouchableOpacity>
        </View>
        {opcaoPagamento === 'Cartão de Crédito' ||
        opcaoPagamento === 'Cartão de Débito' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Número do Cartão"
              onChangeText={(text) => setNumeroCartao(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Titular do Cartão"
              onChangeText={(text) => setNomeTitular(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Data de Expiração"
              onChangeText={(text) => setDataExpiracao(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              onChangeText={(text) => setCvv(text)}
            />
          </>
        ) : null}
        {opcaoPagamento === 'PIX' ? (
          <View style={styles.pixContainer}>
            <Text style={styles.label}>Código PIX:</Text>
            <Text style={styles.codigoPix}>{codigoPix}</Text>
            <Text style={styles.instrucoesPix}>
              Copie e cole este código para fazer o pagamento PIX.
            </Text>
          </View>
        ) : null}
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={concordouTermos}
            onValueChange={(newValue) => setConcordouTermos(newValue)}
          />
          <Text style={styles.checkboxLabel}>
            Estou ciente dos termos e condições.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={realizarRecarga}>
          <Text style={styles.btnText}>Recarregar</Text>
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
    marginBottom: '10%',
  },
  inputContainer: {
    marginRight: '35%',
  },
  input: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 4,
    padding: '5%',
    marginBottom: '10%',
  },
  label: {
    marginLeft: '5%',
    fontSize: 18,
    marginBottom: '8%',
    marginTop: '5%',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8%',
  },
  radio: {
    backgroundColor: '#FFA500',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 4,
    padding: '3%',
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    marginBottom: '5%',
    marginTop: '6%',
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
  pixContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 4,
    padding: 8,
    marginBottom: '8%',
  },
  codigoPix: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  instrucoesPix: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'gray',
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
});
