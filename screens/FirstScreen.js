import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';


export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/main/topMain.png")}
        style={styles.header} resizeMode='cover'>
      </ImageBackground>
      <View style={styles.body}>
        <Image source={require('../assets/main/logo.png')} style={styles.logo} />
        <Text> Annaklycheff application </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Second')} style={styles.registration}> 
            <Text style={styles.registrationText}>Регистрация</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={()=> navigation.navigate('Second')}> <Text>Войти</Text></TouchableOpacity>  
        <Text style={styles.loginWith}>Войти с помощью</Text>
          <View style={styles.messageLogo}>
          <Image source={require('../assets/main/Googleicon.png')} resizeMode='cover' style={styles.icon} />
          <Image source={require('../assets/main/Facebookicon.png')} resizeMode='cover' style={styles.icon} />
          <Image source={require('../assets/main/Vkicon.png')} resizeMode='cover' style={styles.icon} />
        </View>
      </View>
      <View style={styles.footer}>
        <ImageBackground source={require('../assets/main/bottomPart.png')}></ImageBackground>
        {/* <Image source={require('../assets/main/bottomPart.png')}/> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flex: 3,
    width: "100%",
    aspectRatio: 566 / 359,
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width:  "100%",
  },
  logo: {
    width: 155,
    height: 81,
  },
  registration: {
    alignItems: "center",
    justifyContent: "center",
    width: 316,
    height: 58,
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  registrationText: {
    color: "white",
    fontSize: 18,
  },
  login:{
    marginTop: 15,
  },
  loginWith:{
    marginTop: 55,

  },
  messageLogo: {
    marginTop: 15,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 5,
    width: 44,
    height: 44,
  }
});
