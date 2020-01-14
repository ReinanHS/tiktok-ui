import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import Avatar from './Avatar';
import StatisticsPost from './StatisticsPost';
import HeartAmination from './HeartAmination';

const {width, height} = Dimensions.get('window');

export default class Posts extends React.Component {
  state = {
    x: 100,
    y: 90,
    likesP: Array(0),
    posts: [],
  };

  constructor(props) {
    super(props);
    this.state.posts = this.props.item;
  }

  onDoublePress = evt => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      let result = this.state.likesP;
      const index = result.length - 1;
      result.push(
        <HeartAmination
          x={evt.nativeEvent.locationX}
          y={evt.nativeEvent.locationY}
          key={(result.length * evt.nativeEvent.locationX)
            .toString()
            .substr(1, 4)}
        />,
      );
      this.setState({likesP: result});
      setTimeout(index => {
        let result = this.state.likesP;
        result.splice(index, 1);
        this.setState({likesP: result});
      }, 4000);
    }
    this.lastPress = time;
  };

  render() {
    const {source, user, avatar, id} = this.state.posts;
    return (
      <TouchableWithoutFeedback onPress={evt => this.onDoublePress(evt)}>
        <View style={styles.container}>
          <Image
            key={id.toString()}
            source={source}
            style={styles.backgroundStyle}
          />

          {this.state.likesP.map(item => {
            return item;
          })}

          <View style={styles.transparentView}>
            <View style={styles.logoViewStyle}>
              <Avatar {...{user, avatar, id}} />
            </View>
            <StatisticsPost />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9E9BA2',
    width,
    height,
  },

  backgroundStyle: {
    flex: 1,
    position: 'relative',
    width,
    height,
  },

  transparentView: {
    flex: 1,
    // backgroundColor: 'red',
    position: 'absolute',
    width,
    height,
  },

  logoViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'blue',
    marginRight: 15,
  },
});
