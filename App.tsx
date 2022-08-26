import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TextInputTest from './src/screens/TextView';

import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <StatusBar style='auto' />
      <TextInputTest></TextInputTest>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 60px;
`;
