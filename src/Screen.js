import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile/Profile';
import {
  Home,
  HomeField,
  SearchField,
  Search,
  ReelField,
  Reel,
  ShopField,
  Shop,
} from './Icons';

const Tab = createBottomTabNavigator();

export default function Screen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="search"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="reel"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={26} /> : <Reel size={30} />,
        }}
        component={ReelScreen}
      />
      <Tab.Screen
        name="shop"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        component={ShopScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.avatar,
                {borderColor: focused ? '#000' : 'transparent'},
              ]}
              source={require('../assest/profile.png')}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});