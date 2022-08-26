import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextInputTest from './src/screens/TextView';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View> */}
      <StatusBar style='auto' />
      <TextInputTest></TextInputTest>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5E960',
  },
});
