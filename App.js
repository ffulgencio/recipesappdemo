import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <LinearGradient colors={['rgba(0,0,0,0.00)',"black"]}
          style={styles.linearGradient}>
            <Text style={{color:'white'}}>Hello World!</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#EFEFEF',
  
  },
  linearGradient: {
    flex: 1,

    height:100,
  },
});
