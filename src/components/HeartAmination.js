import React from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export default class HeartAmination extends React.Component {
  state = {
    x: 0,
    y: 0,
    isLoading: true,
    isAnimating: false,
    iconSize: new Animated.Value(100),
    opacityIcon: new Animated.Value(1),
    rotate: (Math.random() * (30 - -30) + -30).toString() + 'deg',
  };

  constructor(props) {
    super(props);
    this.state.x = props.x;
    this.state.y = props.y;
  }

  startAnimation = () => {
    Animated.timing(this.state.iconSize, {
      toValue: 150,
      duration: 1000,
      easing: Easing.back(0.8),
    }).start(() => this.setState({isAnimating: false}));

    Animated.timing(this.state.opacityIcon, {
      toValue: 0,
      duration: 1500,
      easing: Easing.back(0.8),
    }).start();
  };

  componentDidMount() {
    let x = setTimeout(() => {
      let isLoading = !this.state.isLoading;
      let isAnimating = !this.state.isAnimating;
      this.setState({isLoading, isAnimating});
      this.startAnimation();
      clearTimeout(x);
    }, 1);
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          left: this.state.x,
          top: this.state.y,
        }}>
        <AnimatedIcon
          style={{
            textAlign: 'center',
            fontSize: this.state.iconSize,
            opacity: this.state.opacityIcon,
            transform: [{rotate: this.state.rotate}],
          }}
          name={'heart'}
          color={'#ff595e'}
        />
      </View>
    );
  }
}
