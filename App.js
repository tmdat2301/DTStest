/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Provider} from 'react-redux';

const App = () => {
  const [option, setOption] = useState('Option1');
  function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
  }

  // Tạo hàm để tạo chuỗi ngẫu nhiên với độ dài từ 1 đến 5 ký tự
  function getRandomString() {
    const length = Math.floor(Math.random() * 5) + 1;
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += getRandomCharacter();
    }
    return randomString;
  }

  // Tạo mảng chứa 1000 phần tử ngẫu nhiên
  const randomArray = [];
  for (let i = 0; i < 1000; i++) {
    randomArray.push(getRandomString());
  }
  // console.log(randomArray);

  const sortedAscending1 = randomArray.slice().sort();

  const sortedDescending = randomArray
    .slice()
    .sort((a, b) => b.localeCompare(a));

  const sortedAscending = randomArray.slice().sort();

  const sortedDescending2 = randomArray
    .slice()
    .sort((a, b) => b.localeCompare(a));
  const sortedDescending3 = randomArray
    .slice()
    .sort((a, b) => b.localeCompare(a));

  return (
    <View style={styles.Container}>
      <View style={styles.RandomArray}>
        <Text style={styles.Text}>Array 1000 words random:</Text>
        <ScrollView>
          {randomArray.map((item, index) => (
            <Text>
              {index}: {item}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.Option}>
        <TouchableOpacity
          onPress={() => setOption('Option1')}
          style={styles.Button}>
          <Text style={styles.Text}>Sort 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOption('Option2')}
          style={styles.Button}>
          <Text style={styles.Text}>Sort 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Text}>Sort 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Text}>Sort 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Text}>Sort 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RandomArray}>
        <ScrollView>
          <Text style={styles.Text}>Result:</Text>
          {option === 'Option1'
            ? sortedAscending1.map((item, index) => (
                <Text>
                  {index}: {item}
                </Text>
              ))
            : sortedDescending.map((item, index) => (
                <Text>
                  {index}: {item}
                </Text>
              ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  RandomArray: {
    width: '50%',
    height: 300,
    backgroundColor: '#aaa',
    alignItems: 'center',
    marginLeft: 100,
  },
  Option: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  Button: {
    height: 20,
    width: 50,
    backgroundColor: '#aaa',
  },
  Text: {
    color: 'red',
    fontSize: 14,
  },
});
export default App;
