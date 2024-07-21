//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>güneşinkızı</Text>
      <Text style={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        dolore quidem ipsa atque #hashtag
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: '10,',
  },
  name: {
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    marginVertical: 5,
    color: '#000000',
  },
  link: {
    fontWeight: '400',
    color: '#004c8b',
  },
  editProfileButton: {
    borderColor: '#cbcbcb',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editProfileText: {
    fontWeight: '700',
    color: '#000000',
  },
});
