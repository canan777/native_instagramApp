import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uek9P9h0p75CNaNr0tP7ixVc23UV0BTpjJ2fyw8898c3MD4Y6-WT~KJdVk3APJomy07POpLv0Vv3IWTsDkylsS~DKzb5gxGoCqkuosOI7ecmNh16tQ4erPzrflCUY~~Wytbn~PLAfAnwKdmF8v-NimRWuDaKFEqzsZhxn5bsVIdSCf2QtUD9cRvHHMFF6-njvkhoI9jM4VSr-FwljHyUX5am4haaX50~u8kml~3yc44JZt-XvJOU6JJjM2oaQXjrQvAps8z8zeGkkbMJsYJpE~s6B99d3ygnFqqdzU8565y~7dsspJVzlK2JwzzONuHUyD4x2j8mVU2AGmLA0kBo-A__',
          }}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>777</Text>
        <Text style={styles.statNumber}>Posts</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>520</Text>
        <Text style={styles.statNumber}>Followers</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statLabel}>938</Text>
        <Text style={styles.statNumber}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {width: 80, height: 80, borderRadius: 40},
  stats: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  statNumber: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
});
