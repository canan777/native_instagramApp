import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../Icons';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';
export default function Profile() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  console.log(imageSize);
  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStory />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        data={posts}
        renderItem={renderProps}
        contentContainerStyle={styles.photoGrid}
        style={{marginTop: 15}}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid: {
    paddingHorizontal: 5,
  },
});