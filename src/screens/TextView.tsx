import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

const TextInputTest = () => {
  const [finalText, setFinalText] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);

  const handleTextChange = (yo: string) => {
    // console.log(yo);
    // setText((yo) => yo);
    setText(yo);
  };

  const handleSubmit = () => {
    setFinalText(text);
    setText('');
  };

  useEffect(() => {
    // console.log(`hi ${text}`);
  }, [text]);

  return (
    <>
      <Container>
        <Text>sdfsdf</Text>

        {/* <InputContainer> */}
        <InputText
          onChangeText={handleTextChange}
          placeholder='hello I am jaesin'
          maxLength={1000}
          multiline={true}
          value={text}
          onEndEditing={() => console.log('onEndEditing')}
          keyboardType='default'
          onFocus={() => console.log('onFocus')}
          onKeyPress={(e: any) => {
            if (e.nativeEvent.key == 'Enter') {
              handleSubmit();
            }
          }}
          //   textAlign='center'
          textAlignVertical='top'
        ></InputText>
        {/* </InputContainer> */}
        <Button title='submit' onPress={handleSubmit}></Button>
        <ResultView>
          <ResultText>{finalText}</ResultText>
        </ResultView>
      </Container>
    </>
  );
};

export default TextInputTest;

const Container = styled.View`
  width: 100%;
  /* height: 200px; */
  /* flex-flow: row; */
  align-items: center;
  border: 1px solid black;
`;

const InputContainer = styled.View`
  width: 100%;
  height: 300px;
`;

const InputText = styled.TextInput`
  width: 100%;
  height: 350px;
  background-color: aliceblue;
`;

const ResultView = styled.View`
  width: 100%;
  height: 100px;
  background-color: #f07e7e;
`;

const ResultText = styled.Text``;
