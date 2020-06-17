/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Slider from '@react-native-community/slider'
import {BotonCredito} from '../../components/BotonCredito'
import {BotonDetalle} from '../../components/BotonDetalle'

const MainScreen: () => React$Node = () => {
  useEffect(() => {
    let temporal = 5000
    setMonto(temporal.toString())
    temporal = 3
    setPlazo(temporal.toString())
  }, [])

  const [monto, setMonto] = useState()
  const [plazo, setPlazo] = useState()
  let cantidadFija = monto / plazo

  const funcionsetMonto = valor => {
    console.log(valor)
    console.log(parseInt(valor))
    if (parseInt(valor) > 5000 && parseInt(valor) < 50000) {
      setMonto(valor)
    } 
    /*if (parseInt(valor) > 5000 && parseInt(valor) < 50000) {
      setMonto(valor)
    } else {
      let temporal = 5000
      setMonto(temporal.toString())
      Alert.alert(
        'Error',
        'Numero introducido es erroneo',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      )
    }*/
  }

  const funcionComprobar = () => {
    console.log(monto)
  }

  //UI
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <View style={styles.inputContainer}>
          <View style={styles.mainContent1}>
            <Text style={styles.txtTitle}> Simulá tu crédito </Text>
          </View>
          <View style={styles.mainContent2}>
            <View style={styles.montoContent}>
              <Text style={styles.txtMonto}>MONTO TOTAL</Text>
              <TextInput
                style={styles.txtInputMonto}
                keyboardType='numeric'
                onChangeText={valor => funcionsetMonto(valor)}
                defaultValue={`$ ${monto}`}
                textAlign='center'
                onSubmitEditing={() => funcionComprobar()}
              />
            </View>
            <Slider
              style={styles.slider}
              minimumValue={5000}
              maximumValue={50000}
              step={1}
              minimumTrackTintColor='#FFFFFF'
              maximumTrackTintColor='#000000'
              onFocus={() => setMonto('')}
              onValueChange={val => setMonto(val.toString())}
            />
            <View style={styles.cantidades}>
              <Text style={styles.txtcantidades}>$5000 </Text>
              <Text style={styles.txtcantidades}>$50000</Text>
            </View>
          </View>
          <View style={styles.mainContent3}>
            <View style={styles.montoContent}>
              <Text style={styles.txtMonto}>PLAZO</Text>
              <TextInput
                style={styles.txtInputMonto}
                keyboardType='numeric'
                onChangeText={val => setPlazo(val)}
                textAlign='center'
                value={plazo}
              />
            </View>
            <Slider
              style={styles.slider}
              minimumValue={3}
              maximumValue={24}
              step={1}
              minimumTrackTintColor='#FFFFFF'
              maximumTrackTintColor='#000000'
              onValueChange={val => setPlazo(val.toString())}
            />
            <View style={styles.cantidades}>
              <Text style={styles.txtcantidades}>3 </Text>
              <Text style={styles.txtcantidades}>24</Text>
            </View>
          </View>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.txtTitle}>COUTA FIJA POR MES</Text>
          <Text style={styles.txtFijo}>${cantidadFija.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <BotonCredito>OBTENÉ CRÉDITO</BotonCredito>
          <BotonDetalle>VER DETALLE DE CUOTAS</BotonDetalle>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#094f83',
  },
  mainContent: {
    width: '92%',
    height: '96%',
    backgroundColor: '#003b65',
    alignSelf: 'center',
    margin: 25,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  outputContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#00365c',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  mainContent1: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContent2: {
    flex: 1,
  },
  mainContent3: {
    flex: 1,
  },
  txtTitle: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    alignSelf: 'center',
  },
  montoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 15,
  },
  txtMonto: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Light',
    paddingStart: 15,
    fontSize: 18,
  },
  txtInputMonto: {
    flex: 1,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slider: {
    alignSelf: 'center',
    width: '90%',
    height: 40,
  },
  cantidades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 10,
    paddingEnd: 10,
  },
  txtcantidades: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  txtFijo: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
})

export default MainScreen
