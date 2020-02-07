import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default class CommentBox extends React.Component {
  state = {
    commentDeta: [],
  };

  constructor(props) {
    super(props);
    this.state.commentDeta = props;
  }

  onLikeAction = () => {
    this.setState(result => ({
      commentDeta: {
        ...result.commentDeta,
        likes: result.commentDeta.likes + (result.commentDeta.isLike ? -1 : 1),
        isLike: !result.commentDeta.isLike,
      },
    }));
  };

  renderComment = comment => {
    const list = new Array();
    comment.split(' ').forEach((item, index) => {
      if (item.charAt(0) === '@') {
        return list.push(
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              alert("You will be redirected to the user's profile " + item);
            }}>
            <Text style={style.commentTextTag}>{item + ' '}</Text>
          </TouchableWithoutFeedback>,
        );
      } else {
        return list.push(item + ' ');
      }
    });

    return <Text>{list}</Text>;
  };

  render() {
    const {
      comment,
      created_at,
      edited,
      isLike,
      likes,
      user,
    } = this.state.commentDeta;
    return (
      <View style={style.commentBoxWrapper}>
        <View style={style.commentBox}>
          <Image style={style.commenterAvatar} source={user.avatar} />
          <View style={style.commentContent}>
            <View style={style.commenterHead}>
              <Text style={style.commenterName}>{user.name}</Text>
              {edited ? (
                <Text style={style.commenterEdited}>(Editado)</Text>
              ) : (
                false
              )}
              <AntDesign style={style.commentDate} name={'clockcircleo'}>
                {' '}
                1 Dia
              </AntDesign>
            </View>
            <View style={style.commentBody}>{this.renderComment(comment)}</View>
            <View style={style.commentFooter}>
              <View style={style.commentLikes}>
                {likes > 0 ? (
                  <Text style={style.commentFooterText}>{likes}</Text>
                ) : (
                  false
                )}
                <TouchableWithoutFeedback onPress={this.onLikeAction}>
                  <AntDesign
                    name={isLike ? 'heart' : 'hearto'}
                    size={20}
                    color={'#ff595e'}
                  />
                </TouchableWithoutFeedback>
              </View>
              <View style={style.commentReply}>
                <Text style={style.commentFooterAction}>Responder</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.nestedComments}>
          <FlatList
            data={this.state.commentDeta.replies}
            renderItem={({item, index}) => {
              return <CommentBox {...item} key={index.toString()} />;
            }}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  commentBoxWrapper: {
    marginBottom: 15,
  },
  commentBox: {
    flex: 1,
    flexDirection: 'row',
  },
  commenterAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  commentContent: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: '#f2f3f5',
    borderRadius: 8,
    padding: 10,
  },
  commenterHead: {
    flex: 1,
    flexDirection: 'row',
  },
  commenterName: {
    fontWeight: 'bold',
    color: '#6a4c93',
  },
  commenterEdited: {
    color: '#C5C3CA',
    marginLeft: 10,
  },
  commentDate: {
    flex: 1,
    textAlign: 'right',
    color: '#C5C3CA',
  },
  commentBody: {
    padding: 5,
  },
  commentTextTag: {
    fontWeight: 'bold',
    color: '#6a4c93',
    fontSize: 16,
  },
  commentFooter: {
    flex: 1,
    flexDirection: 'row',
  },
  commentLikes: {
    flexDirection: 'row',
  },
  commentReply: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  commentFooterText: {
    color: '#C5C3CA',
    marginRight: 10,
  },
  commentFooterAction: {
    fontWeight: 'bold',
  },
  nestedComments: {
    marginTop: 10,
    marginLeft: 50,
  },
});
// https://bootsnipp.com/snippets/PDxZ1
