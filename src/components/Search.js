import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Search extends React.Component {
  state = {
    inputText: '',
  };

  constructor(props) {
    super(props);
  }

  style = StyleSheet.create({
    input: {
      fontSize: 16,
      width: '75%',
      height: '100%',
    },
    main: {
      flex: 1,
      flexBasis: 1,
      flexDirection: 'row',
      marginTop: 30,
      alignItems: 'center',
    },
    searchBar: {
      backgroundColor: '#dddddd',
      height: 40,
      marginHorizontal: 20,
      borderRadius: 4,
    },
    d_flex: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 10,
    },
  });

  searchSubmit = () => {
    Alert.alert('Seacrh', this.state.inputText);
  };

  render() {
    return (
      <View style={this.style.main}>
        <View style={this.style.searchBar}>
          <View style={this.style.d_flex}>
            <EvilIcons name="search" size={30} />
            <TextInput
              onChange={event => {
                this.setState({inputText: event.text});
              }}
              style={this.style.input}
              placeholder="Search"
              keyboardType={'web-search'}
              returnKeyType="search"
              value={this.state.inputText}
              onSubmitEditing={this.searchSubmit}
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('QR Code')}>
          <Ionicons name="qrcode-scan" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}
