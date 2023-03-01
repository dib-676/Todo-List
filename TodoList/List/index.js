import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import ListView from '../Component';
import style from '../List/style';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      data: [],
      selectedCard: [],
      editMode: false,
      updateId: -1,
    };
  }

  checkSelection = id => {
    if (this.state.selectedCard.includes(id)) {
      idx = this.state.selectedCard
        .map((val, idx) => {
          return val == id ? idx : -1;
        })
        .filter(val => {
          return val != -1;
        });
      this.state.selectedCard.splice(idx, 1);
    } else {
      this.state.selectedCard.push(id);
    }
    data = [...this.state.selectedCard];
    this.setState({selectedCard: data});
  };
  deleteFunc = id => {
    idx = this.state.data
      .map((val, idx) => {
        return val.id == id ? idx : -1;
      })
      .filter(val => {
        return val != -1;
      });
    this.state.data.splice(idx, 1);
    data = [...this.state.data];
    this.setState({data: data});
  };
  deleteAllFunc = () => {
    dataX = [...this.state.data];
    for (let i = 0; i < this.state.selectedCard.length; i++) {
      dataX = dataX.filter(val => {
        return val.id != this.state.selectedCard[i];
      });
    }
    this.setState({data: dataX});
  };
  addData = () => {
    if (this.state.name == ""){
      Alert.alert("Name Can't be empty")
      return
    }
    if (this.state.editMode) {
      this.state.data.map(val => {
        if (val.id == this.state.updateId) {
          val.name = this.state.name;
        }
        return val;
      });
      data = [...this.state.data];
      this.setState({data: data});
      this.setState({updateId: -1});
      this.setState({editMode: false});
      this.setState({name: ''});
    } else {
      this.state.data.push({id: this.state.id, name: this.state.name});
      id = this.state.id + 1;
      data = [...this.state.data];
      this.setState({data: data});
      this.setState({name: ''});
      this.setState({id: id});
    }
  };
  editFunc = id => {
    val = this.state.data.filter(val => {
      return val.id == id;
    });
    console.log(`dhfj ${val[0].id}`);
    this.setState({name: val[0].name});
    this.setState({updateId: val[0].id});
    this.setState({editMode: true});
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.headerScreen}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.deleteAllBtn}
            onPress={this.deleteAllFunc}>
            <Text style={style.deleteAllBtnTxt}>Delete All</Text>
          </TouchableOpacity>
        </View>
        <View style={style.mainScreen}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => {
              return (
                <ListView
                  data={item.name}
                  id={item.id}
                  edit={() => {
                    this.editFunc(item.id);
                  }}
                  onClick={() => this.checkSelection(item.id)}
                  delete={() => {
                    console.log(item.id);
                    this.deleteFunc(item.id);
                  }}
                  isSelected={this.state.selectedCard.includes(item.id)}
                />
              );
            }}
          />
        </View>
        <View style={style.footerScreen}>
          <TextInput
            style={style.input}
            value={this.state.name}
            placeholder={'Write Your Tasks'}
            placeholderTextColor={'gray'}
            onChangeText={e => {
              this.setState({name: e});
              console.log(this.state.name);
            }}
          />
          <TouchableOpacity style={style.addBtn} onPress={() => this.addData()}>
            <Text style={{fontSize:50,color:"red"}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
