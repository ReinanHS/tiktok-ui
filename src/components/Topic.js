import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class Topic extends React.Component {
  state = {
    topic: [],
  };

  constructor(props) {
    super(props);
    this.state.topic = props.item;
  }

  style = StyleSheet.create({
    image: {
      width: 80,
      height: 80,
      backgroundColor: '#dddddd',
      borderRadius: 5,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    title: {
      fontSize: 24,
    },
    titleView: {
      paddingHorizontal: 25,
      height: 80,
      width: '70%',
      flex: 1,
      justifyContent: 'center',
    },
  });

  render() {
    const {topic} = this.state;

    return (
      <TouchableOpacity
        style={this.style.container}
        onPress={() => alert('Go to ' + topic.title)}>
        <Image source={{uri: topic.image}} style={this.style.image} />
        <View style={this.style.titleView}>
          <Text style={this.style.title}>{topic.title}</Text>
        </View>
        <Feather name="chevron-right" size={20} />
      </TouchableOpacity>
    );
  }
}
