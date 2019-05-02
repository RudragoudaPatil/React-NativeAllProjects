import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
export default class dashboard extends Component {

  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    }
  }



  render() {
    return (

      <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://userscontent2.emaze.com/images/4aa16ac7-87e5-4313-ac25-ddc40ae01d8b/ece71c51217b2ba373804c0751c5eed7.jpg" }} />
        <ScrollView contentContainerStyle={styles1.contentContainer}>
          <Card
            title='BHILWARA'>
            <Text>
              Students Attendence App
  </Text>
            <Icon
              name='g-translate'
              color='#00aced' />
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Geomap')}>
              <Text style={styles.loginText}>View Details</Text>
            </TouchableHighlight>
          </Card>
          <Card
            title='BHILWARA'>
            <Text style={{ marginBottom: 10 }}>
              Students Details
 </Text>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.loginText}>View Details</Text>
            </TouchableHighlight>
          </Card>
          <Card
            title='BHILWARA'>
            <Text style={{ marginBottom: 10 }}>
              Students Attendence
 </Text>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Geomap')}>
              <Text style={styles.loginText} s>View Details</Text>
            </TouchableHighlight>
          </Card>
        </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#a7b6ce',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 50,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00b5ec",
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  dashboard: {
    backgroundColor: '#a7b6ce',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
const styles1 = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
