import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Button,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CommentBox from './CommentBox';
import TagUsers from './TagUsers';

const {height} = Dimensions.get('window');

const commentsList = [
  {
    id: 1,
    comment: '@reinan imagine the atmosphere in the elevator lol',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 70,
    isLike: false,
    user: {
      avatar: require('../assets/avatars/alexandergarcia.png'),
      name: 'Car Man',
    },
    replies: [
      {
        id: 2,
        comment: '@Lucas Temos tão pouco tempo',
        created_at: '2019-12-21 17:01:33',
        edited: false,
        likes: 1,
        isLike: false,
        user: {
          avatar: require('../assets/avatars/andrea.schmidt.png'),
          name: 'faguinho.adv',
        },
      },
      {
        id: 3,
        comment:
          'Esse jogo é muito bom, só acho difícil se acostumar com os controles',
        created_at: '2019-12-21 17:01:33',
        edited: false,
        likes: 5,
        isLike: false,
        user: {
          avatar: require('../assets/avatars/alexandergarcia.png'),
          name: 'Dede Loko',
        },
      },
    ],
  },
  {
    id: 2,
    comment: 'Temos tão pouco tempo',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 8,
    isLike: true,
    user: {
      avatar: require('../assets/avatars/andrea.schmidt.png'),
      name: 'faguinho.adv',
    },
  },
  {
    id: 3,
    comment:
      'Esse jogo é muito bom, só acho difícil se acostumar com os controles',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 18,
    isLike: true,
    user: {
      avatar: require('../assets/avatars/alexandergarcia.png'),
      name: 'Dede Loko',
    },
  },
  {
    id: 4,
    comment: 'Sono de leão lip kkkkkkkk',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 0,
    isLike: false,
    user: {
      avatar: require('../assets/avatars/jmitch.png'),
      name: 'FUTEBOL 10',
    },
  },
  {
    id: 5,
    comment: 'Manda salve',
    created_at: '2019-12-21 17:01:33',
    edited: true,
    likes: 1,
    isLike: true,
    user: {
      avatar: require('../assets/avatars/andrea.schmidt.png'),
      name: 'Reinan Gabriel',
    },
  },
  {
    id: 6,
    comment:
      'Mano posso fazer um vídeo estilo desse mais o crédito vai para vc',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 0,
    isLike: false,
    user: {
      avatar: require('../assets/avatars/jmitch.png'),
      name: 'Lucas Santos',
    },
  },
  {
    id: 7,
    comment: 'Melhor jogo estilo futsal que já vi',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 1,
    isLike: false,
    user: {
      avatar: require('../assets/avatars/alexandergarcia.png'),
      name: 'Gabriel Pato',
    },
  },
  {
    id: 8,
    comment: 'sse Só Tá Rodando Em Cll Bom O Meu Tá Travado Lagado',
    created_at: '2019-12-21 17:01:33',
    edited: false,
    likes: 190,
    isLike: false,
    user: {
      avatar: require('../assets/avatars/alexandergarcia.png'),
      name: 'Luiz Lula',
    },
  },
];

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

class Comments extends React.Component {
  state = {
    comments: [],
    tagUsers: [],
    typing: '',
    isTagUsers: false,
    textTagUser: '',
  };

  constructor(props) {
    super(props);
    this.state.comments = commentsList;
    this.state.tagUsers = TagUsersList;
  }

  // Function to edit the text of comments made
  commentText = text => {
    // Saves the last word that was typed for right after making a comparison
    const lastWord =
      text.split(' ').length > 1
        ? text.split(' ')[text.split(' ').length - 1]
        : text;
    // Checking if the word is a mention for an appointment
    if (lastWord.charAt(0) === '@') {
      // Enables the screen with the list of users that can be marked in this comment
      this.setState({isTagUsers: true});
      // Saves all characters after @
      this.setState({textTagUser: lastWord.substring(1)});
    } else {
      // If the first character of the last word entered does not have an @, we disable the screen
      this.setState({isTagUsers: false});
    }
    this.setState({typing: text});
  };

  // Function to choose a person to mark in comments
  commentToChooseTagUser = username => {
    let tags = this.state.typing.split(' ');
    tags.forEach((item, index) => {
      if (item.charAt(0) !== '@') {
        tags.splice(index, 1);
      }
    });

    if (tags.indexOf('@' + username) === -1) {
      const text = this.state.typing.split('@');
      text.forEach((item, index) => {
        text[index] = index > 0 ? '@' + item : item;
      });
      text[text.length - 1] = '@' + username + ' ';
      this.setState({typing: text.join('')});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Este usuário já foi marcado!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
    }
  };

  // Function to send a comment
  commentSeed = () => {
    const id = commentsList.length + 4;
    commentsList.push({
      id,
      comment: this.state.typing,
      created_at: '2019-12-21 17:01:33',
      edited: false,
      likes: 0,
      isLike: false,
      user: {
        avatar: require('../assets/avatars/andrea.schmidt.png'),
        name: 'faguinho.adv',
      },
    });
    this.setState({comments: commentsList});
    this.setState({typing: ''});
    this.setState({isTagUsers: false});
  };

  render() {
    return (
      // Modal regarding comments
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}>
        <View style={style.modalDialog}>
          {/* Header */}
          <View style={style.modalHeader}>
            {/* Information on total comments */}
            <Text style={style.modalTitle}>
              {this.state.comments.length} comentários
            </Text>
            {/* Button to close the modal */}
            <TouchableHighlight
              style={style.modalClose}
              onPress={this.props.setModalVisible}>
              <Ionicons name={'md-close'} size={25} color={'#C5C3CA'} />
            </TouchableHighlight>
          </View>
          {/* Body */}
          <View style={style.modalBody}>
            {this.state.isTagUsers ? (
              // List of users that can be tagged in a comment
              <FlatList
                data={this.state.tagUsers.filter(({name, username}) => {
                  return (
                    name
                      .toUpperCase()
                      .indexOf(this.state.textTagUser.toUpperCase()) > -1 ||
                    username
                      .toUpperCase()
                      .indexOf(this.state.textTagUser.toUpperCase()) > -1
                  );
                })}
                renderItem={({item, index}) => {
                  return (
                    // Componente que tem as informações dos usuários
                    <TagUsers
                      item={item}
                      toChooseTag={this.commentToChooseTagUser}
                      key={index.toString()}
                    />
                  );
                }}
                keyExtractor={item => item.id.toString()}
              />
            ) : (
              // Listing of comments for this publication
              <FlatList
                data={this.state.comments}
                renderItem={({item, index}) => {
                  return <CommentBox {...item} key={index.toString()} />;
                }}
                keyExtractor={item => item.id.toString()}
              />
            )}
          </View>
          {/* Footer */}
          <KeyboardAvoidingView behavior="position" style={style.modal}>
            <View style={style.modalFooter}>
              {/* Comment box */}
              <TextInput
                value={this.state.typing}
                style={style.input}
                underlineColorAndroid="transparent"
                placeholder="Adicione um comentário..."
                onChangeText={text => this.commentText(text)}
                maxLength={400}
                autoCorrect={true}
              />
              {/* Button to send comment */}
              <TouchableOpacity onPress={this.commentSeed}>
                <Text style={style.send}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  modal: {
    // padding: 15,
    flex: 1,
  },
  modalDialog: {
    flex: 1,
    backgroundColor: '#FFFEFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    padding: 15,
  },
  modalTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#C5C3CA',
  },
  // Modal Body
  modalBody: {
    height: height / 1.3,
    padding: 15,
  },
  modalFooter: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default withNavigation(Comments);
