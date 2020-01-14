import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ToastAndroid,
  StyleSheet,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Comments from './Comments';

export default class StatisticsPost extends React.Component {
  state = {
    likes: 1,
    comments: '70',
    shares: '0',
    isSave: false,
    isLike: false,
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    this.comment = React.createRef();
  }

  // Função ao clicar no coração em um comentário
  actionLike = () => {
    this.setState({isLike: !this.state.isLike});
    if (typeof this.state.likes === 'number') {
      this.setState({likes: this.state.likes + (this.state.isLike ? -1 : 1)});
    }

    if (!this.state.isLike) {
      return ToastAndroid.show(
        'Marcou esse vídeo como gostei',
        3,
        ToastAndroid.BOTTOM,
      );
    }
  };

  // Função para ativar ou desativar a modal com os comentários
  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  render() {
    const {likes, isLike, comments, shares, isSave} = this.state;

    return (
      <View style={styles.statistics}>
        <Comments
          ref={this.comment}
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
        />
        <View style={styles.items}>
          <TouchableWithoutFeedback onPress={this.actionLike}>
            <AntDesign
              name={'heart'}
              size={38}
              color={isLike ? '#ff595e' : '#fff'}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.itemText}>{likes}</Text>
        </View>
        <View style={styles.items}>
          <TouchableWithoutFeedback onPress={this.setModalVisible}>
            <AntDesign name={'message1'} size={38} color={'#fff'} />
          </TouchableWithoutFeedback>
          <Text style={styles.itemText}>{comments}</Text>
        </View>
        <View style={styles.items}>
          <TouchableWithoutFeedback>
            <AntDesign name={'upload'} size={38} color={'#fff'} />
          </TouchableWithoutFeedback>
          <Text style={styles.itemText}>{shares}</Text>
        </View>
        <View style={styles.items}>
          <TouchableWithoutFeedback>
            <AntDesign name={'codepen'} size={38} color={'#fff'} />
          </TouchableWithoutFeedback>
          <Text style={styles.itemText}>{isSave}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statistics: {
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  items: {
    marginBottom: 25,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  itemText: {
    // backgroundColor: 'green',
    fontSize: 24,
    color: '#fff',
  },
});
