import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

CheckBox = props => {
  return (
    <Image
      source={require('../Images/check.png')}
      style={{
        width: '100%',
        height: '100%',
        tintColor: props.isSelected ? 'blue' : 'white',
      }}
    />
  );
};
export default ListView = props => {
  return (
    <View style={style.container}>
      <Text style={style.txt}>{props.data}</Text>
      <TouchableOpacity style={style.editBtn} onPress={props.edit}>
        <Text style={style.editTxt}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.deleteBtn} onPress={props.delete}>
        <Image
          style={style.deleteIcon}
          source={require('../Images/close.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.deleteAllBtn} onPress={props.onClick}>
        <CheckBox isSelected={props.isSelected} />
      </TouchableOpacity>
    </View>
  );
};
