import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bookmark, Comment, Dots, Heart, Share} from '../../Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';

export default function Post({post}) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post?.user?.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post?.user?.name}</Text>
        </View>
        <Dots />
      </View>
      <FitImage src={post?.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Share />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post?.likes} likes</Text>
        </View>
        <ReadMore
          seeLessStyle={{color: '#999'}}
          seeLessText="Daha az"
          seeMoreText="Daha fazla"
          seeMoreStyle={{color: '#999'}}
          numberOfLines={2}>
          <Text style={styles.user}>{post?.user.name}</Text>
          {` `}
          {post?.description}
        </ReadMore>
        {post?.comments > 0 && (
          <TouchableOpacity style={{paddingBottom: 7}} activeOpacity={0.7}>
            <Text style={styles.comments}>
              View all {post?.comments} comments
            </Text>
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.date}>{post?.date}</Text>
          <Text style={styles.translation}>See Translation</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 12,
  },
  user: {
    fontWeight: '600',
  },
  comments: {
    marginTop: 3,
    opacity: 0.5,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 7,
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },
});