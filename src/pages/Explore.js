import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

const TagUsersList = [
  {
    id: 1,
    avatar: require('../assets/avatars/alexandergarcia.png'),
    name: 'Car Man',
    username: 'carman',
    punctuation: 0,
  },
  {
    id: 2,
    avatar: require('../assets/avatars/andrea.schmidt.png'),
    name: 'Andrea Schmidt',
    username: 'andrea.schmidt',
    punctuation: 0,
  },
  {
    id: 3,
    avatar: require('../assets/avatars/derek.russel.png'),
    name: 'Derek Russel',
    username: 'derek.russel',
    punctuation: 0,
  },
  {
    id: 4,
    avatar: require('../assets/avatars/jmitch.png'),
    name: 'Jmitch',
    username: 'jmitch',
    punctuation: 0,
  },
  {
    id: 5,
    avatar: require('../assets/avatars/monicaa.png'),
    name: 'Monicaa',
    username: 'monicaa',
    punctuation: 0,
  },
];

import TagUsers from '../components/TagUsers';

export default class Explore extends React.Component {
  state = {
    texto: '',
    tagUsers: [],
  };

  constructor(props) {
    super(props);
    this.state.tagUsers = TagUsersList;
  }

  mudarTexto = texto => {
    this.setState({texto});
  };

  render() {
    return (
      <View style={{marginTop: 50}}>
        <TextInput
          value={this.state.texto}
          onChangeText={texto => this.mudarTexto(texto)}
          placeholder="Oi"
        />
        <FlatList
          data={this.state.tagUsers}
          keyboardShouldPersistTaps="always"
          renderItem={({item, index}) => {
            return (
              // Component that has user information
              <TagUsers
                item={item}
                toChooseTag={this.commentToChooseTagUser}
                key={index.toString()}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
