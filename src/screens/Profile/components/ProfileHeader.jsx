import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../../Icons';

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Text style={styles.username}>güneşinkızı</Text>
        <Dropdown />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
