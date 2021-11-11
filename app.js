

import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: ' coffee shop', key: '1' },
    { text: 'supermarket', key: '2' },
    { text: 'music', key: '3' },
    { text: 'cinema', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  


  const submitHandler = (text) => {
   
      setTodos(prevTodos => {
        return [
          { text },
          ...prevTodos
        ];
      });
   
  };

  

  return (
    <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

