import * as React from 'react';
import {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Input} from '../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {authRegister} from '../redux/users/UserSlice';
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(authRegister({email: email, password: password, name: name})).unwrap()
    .then(() => navigation.navigate('Login'))
    .catch((error) => Alert.alert(error))
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.View}>
        <Text style={styles.title}>ลงทะเบียนสมาชิก</Text>
        <Text style={styles.inputText}>Name</Text>
        <Input
          style={styles.input}
          labelValue={name}
          onChangeText={userName => setName(userName)}
          placeholder=""
          autoCorrect={false}
        />
        <Text style={styles.inputText}>EMAIL</Text>
        <Input
          style={styles.input}
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder=""
          keyboardType={'email-address'}
          autoCorrect={false}
        />
        <Text style={styles.inputText}>PASSWORD</Text>
        <Input
          style={styles.input}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText=""
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Regular',
    alignSelf: 'flex-start',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Regular',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    marginVertical: 7,
    width: 260,
    fontSize: 16,
    padding: 5,
    marginBottom: 7,
    shadowColor: '#000000',
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingLeft: 15,
    fontFamily: 'Regular',
  },
  loginButton: {
    marginVertical: 30,
    backgroundColor: '#047FC7',
    width: 140,
    height: 40,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Regular',
    fontSize: 18,
    marginTop: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#091D42',
    alignItems: 'center',
  },
  View: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    paddingTop: 15,
    fontFamily: 'Prompt-Regular',
  },
  subtext: {
    color: '#047FC7',
    paddingTop: 5,
    marginBottom: 20,
    fontFamily: 'Prompt-Regular',
  },
});
export default RegisterScreen;
