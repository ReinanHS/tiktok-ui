import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class UserList extends React.Component {
  state = {
    user: [],
  };

  constructor(props) {
    super(props);
    this.state.user = props.item;
  }

  render() {
    const {avatar, name, username} = this.state.user;

    return (
      <TouchableWithoutFeedback onPress={() => alert(username)}>
        <View style={styles.container}>
          {/* Imagem do usuário */}
          <Image style={styles.avatar} source={avatar} />
          <View style={styles.userInfos}>
            {/* Informações sobre o usuário */}
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userTag}>@{username}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
  },
  userInfos: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6a4c93',
  },
  userTag: {
    color: '#393e46',
  },
});
