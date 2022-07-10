import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log(isShowKeyboard);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/image/stars-on-night.jpg')}
          style={styles.image}
        >

          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            > 
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                <TextInput
                  style={styles.input}
                  textAlign={'center'}
                  onFocus={ () => setIsShowKeyboard(true) } 
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={'center'}
                  secureTextEntry={true}
                  onFocus={ () => setIsShowKeyboard(true) } 
                />
              </View>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
              >
                  <Text style={styles.btnText}>SIGN IN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>

        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: 'center',
    resizeMode: "cover",
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#f0f8ff',
    borderRadius: 10,
    height: 40,
    padding: 10,
    color: '#000',
    backgroundColor: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
    // marginBottom: 100,

  },
  inputTitle: {
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00bfff',
    marginTop: 40,
    padding: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent'
      },
      android: {
        backgroundColor: '#00bfff'
      },
    })
  },
  btnText: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        color: '#00bfff',
      },
      android: {
        color: '#fff',
      },
    }),
  },
});
