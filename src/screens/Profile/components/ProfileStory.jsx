import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1170534237/tr/foto%C4%9Fraf/k%C3%BC%C3%A7%C3%BCk-konu%C5%9Fma.jpg?s=612x612&w=0&k=20&c=mHotcwB4TCO8SqELUxQs2QSmMu9X3kuj_Q3joQMUxKY=',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 2</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 3</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1571772545/photo/coffee-aromas-envelop-a-relaxing-customer.webp?b=1&s=170667a&w=0&k=20&c=egRCntCKBmPIuxUk45SC7_BOFf297gAYId8gugTIMbA=',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 4</Text>
      </View>

      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStroyButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>New</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStroyButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
