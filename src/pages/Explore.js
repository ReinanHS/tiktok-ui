import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import Search from '../components/Search';
import Topic from '../components/Topic';

const TopicLoad = require('../../server.json').topics;

export default class Explore extends React.Component {
  state = {
    topics: [],
  };

  constructor(props) {
    super(props);
    this.state.topics = TopicLoad;
  }

  style = StyleSheet.create({
    areaView: {
      backgroundColor: '#dddddd',
    },
    mainView: {
      backgroundColor: '#ffffff',
      marginTop: 20,
      paddingBottom: 10,
    },
    container: {
      marginHorizontal: 25,
    },
    scroll: {
      marginBottom: 60,
      marginTop: 25,
    },
    textTopic: {
      fontSize: 24,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingBottom: 10,
    },
  });

  render() {
    const {topics} = this.state;

    return (
      <SafeAreaView style={this.style.areaView}>
        <View style={this.style.mainView}>
          <Search />
          <ScrollView style={this.style.scroll}>
            {topics.map((item, index) => (
              <Topic {...{item, index}} key={item.id.toString()} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
