import React from 'react';
import {View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class UploadIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  styleUpload = StyleSheet.create({
    btn: {
      backgroundColor: '#FFFEFF',
      width: 60,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderLeftColor: '#6a4c93',
      borderRightColor: '#8ac926',
      borderTopWidth: 0,
      borderLeftWidth: 4,
      borderRightWidth: 4,
      marginTop: 5,
      marginBottom: 5,
    },
  });

  render() {
    return (
      <View style={this.styleUpload.btn}>
        <Entypo
          name={this.name || 'plus'}
          size={this.size || 28}
          color={this.tintColor}
        />
      </View>
    );
  }
}
