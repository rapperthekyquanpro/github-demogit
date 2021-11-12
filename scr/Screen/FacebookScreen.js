
import React, { useState, useReducer } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Formik } from 'formik';
import { useForm, useController } from "react-hook-form";
import Item from '../components/ItemComponent';
import LoginButton from '../components/LoginButton';

export const ACTION = {
  ADD_ITEM: "add_item",
  SELECT_ITEM: "select_item",
  DELETE_ITEM: "delete_item"
}

function reducer(list, action) {
  switch (action.type) {
    case ACTION.ADD_ITEM:
      return [...list, newItem(action.payload.name)]
    case ACTION.SELECT_ITEM:
      return list.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete }
        }
        return item;
      })
    case ACTION.DELETE_ITEM:
      return list.filter(item => 
        item.id !== action.payload.id
      )
    default: return list;
  }
}

function newItem(name) {
  return { id: Date.now(), name: name, complete: false }
}

function display() {

}

const FacebookScreen = () => {
  const [list, dispatch] = useReducer(reducer, []);
  // const [itemName, setName] = useState(0);

  function onSubmit(values) {
    if(values.name !== "")
    dispatch({ type: ACTION.ADD_ITEM, payload: { name: values.name } })
  }

  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => onSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
      {list.map(item => {
        return <Item key={item.id} item={item} dispatch={dispatch}></Item>
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"
  }
});

export default FacebookScreen;
