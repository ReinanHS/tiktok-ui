// @flow
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Avatar extends React.Component {
  state = {
    following: true,
  };

  constructor(props) {
    super(props);
  }

  getStyleFollowView() {
    const style = {
      width: 24,
      height: 24,
      borderRadius: 24 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -15,
      marginLeft: 24,
    };

    style.backgroundColor = this.state.following ? '#8ac926' : '#ff595e';

    return style;
  }

  actionOnBtnFollow = () => {
    this.setState({following: !this.state.following});
    return ToastAndroid.show(
      this.state.following ? 'Você deixou de seguir' : 'Você começou a seguir',
      3,
      ToastAndroid.BOTTOM,
    );
  };

  render() {
    const {user, avatar, id} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
          <Image
            key={id.toString()}
            source={avatar}
            resizeMode="contain"
            style={styles.logoStyle}
          />
        </View>
        <TouchableHighlight
          onPress={this.actionOnBtnFollow}
          style={this.getStyleFollowView()}>
          <FontAwesome
            name={this.state.following ? 'check' : 'plus'}
            size={16}
            color={'#fff'}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerCircle: {
    marginTop: 50,
    borderRadius: 32,
    width: 66,
    height: 66,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
  },
});
