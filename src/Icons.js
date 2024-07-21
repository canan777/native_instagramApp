import {Image} from 'react-native';

function Logo() {
  return <Image source={require('../assest/logo.png')} />;
}

function Home({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/home.png')}
    />
  );
}
function HomeField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/home-field.png')}
    />
  );
}
function Search({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/search.png')}
    />
  );
}
function SearchField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/search-field.png')}
    />
  );
}
function Reel({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/reel.png')}
    />
  );
}
function ReelField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/reel-field.png')}
    />
  );
}
function Shop({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/shop.png')}
    />
  );
}
function ShopField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/shop-field.png')}
    />
  );
}
function Plus({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/plus.png')}
    />
  );
}
function Heart({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/heart.png')}
    />
  );
}
function Messenger({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assest/messenger.png')}
    />
  );
}
function Dots() {
  return (
    <Image
      style={{width: 15, height: 3}}
      source={require('../assest/more.png')}
    />
  );
}
function Bookmark() {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assest/bookmark.png')}
    />
  );
}
function Comment() {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assest/comment.png')}
    />
  );
}
function Share() {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assest/share.png')}
    />
  );
}
function Dropdown() {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assest/dropdown.png')}
    />
  );
}
function BurgerMenu() {
  return (
    <Image
      style={{width: 20, height: 20}}
      source={require('../assest/burger.png')}
    />
  );
}

export {
  BurgerMenu,
  Dropdown,
  Comment,
  Share,
  Bookmark,
  Dots,
  Messenger,
  Heart,
  Plus,
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  ReelField,
  Reel,
  Shop,
  ShopField,
};