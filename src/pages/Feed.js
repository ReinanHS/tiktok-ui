import React from 'react';
import {View, FlatList, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Posts from '../components/Posts';

const PostsJSON = [
  {
    id: '2',
    source: require('../assets/stories/2.jpg'),
    user: 'derek.russel',
    avatar: require('../assets/avatars/derek.russel.png'),
  },
  {
    id: '4',
    source: require('../assets/stories/4.jpg'),
    user: 'jmitch',
    avatar: require('../assets/avatars/jmitch.png'),
  },
  {
    id: '5',
    source: require('../assets/stories/5.jpg'),
    user: 'monicaa',
    avatar: require('../assets/avatars/monicaa.png'),
  },
  {
    id: '3',
    source: require('../assets/stories/3.jpg'),
    user: 'alexandergarcia',
    avatar: require('../assets/avatars/alexandergarcia.png'),
  },
  {
    id: '1',
    source: require('../assets/stories/1.jpg'),
    user: 'andrea.schmidt',
    avatar: require('../assets/avatars/andrea.schmidt.png'),
  },
];

const {width, height} = Dimensions.get('window');

export default class Feed extends React.Component {
  state = {
    post: [],
  };

  constructor(props) {
    super(props);
    this.state.post = PostsJSON;
  }

  static navigationOptions = {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FFFEFF',
      inactiveTintColor: '#9E9BA2',
      style: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        position: 'absolute',
      },
    },
  };

  render() {
    const {post} = this.state;

    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container}>
          <FlatList
            data={post}
            renderItem={({item, index}) => (
              <Posts {...{item, index}} key={index.toString()} />
            )}
            keyExtractor={item => item.id}
            snapToInterval={height}
            decelerationRate={'fast'}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9E9BA2',
  },
});
