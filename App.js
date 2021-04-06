import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
//import Caritem from './assets/components/Caritem';
import CarsList from './assets/components/CarsList';
import Header from './assets/components/Header';



export default function App() {
  return (
    <View style={styles.container}>
      
    {/* <Caritem name={"Model X"} tagline={"Order Online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/ModelX.jpeg')}/>
    <Caritem name={"Model Y"} tagline={"Order Online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/ModelY.jpeg')}/>
    <Caritem name={"Model S"} tagline={"Order Online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/ModelS.jpeg')}/>
    <Caritem name={"Model A"} tagline={"Order Online for"} taglineCTA={"Touchless Delivery"} image={require('./assets/images/Model3.jpeg')}/> */}
    <Header/>
    <CarsList/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


