import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import stories from '../../../data/stories';
import Story from './Story';
export default function Stories() {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <Story story={story} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
  },
});