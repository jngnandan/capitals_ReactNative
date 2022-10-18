import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <Home />
    </View>
  );
}


