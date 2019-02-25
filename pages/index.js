import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './main/index.js';
import Profile from './profile/index.js';
import OnBoarding from './onboarding/index.js';
import Splash from './splash/index.js';
import ProfileNav from './profile/components/nav.js';
import MainNav from './main/components/nav.js';

const MainScreen = ({ navigation }) => (<Main nav={navigation}/>);
const SplashScreen = ({ navigation }) => (<Splash nav={navigation}/>);
const OnBoardingScreen = ({ navigation }) => (<OnBoarding nav={navigation}/>);
const firstTime = false // simulate a first time user

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: <MainNav />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: <ProfileNav />,
    }
  },
},
{
  headerMode: "float",
  cardShadowEnabled: false,
  cardOverlayEnabled: true,
  cardStyle: {

  },
  navigationOptions: {
    headerVisible: false,
  }
});

const FirstTimeNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  OnBoarding: {
    screen: OnBoardingScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  Main: {screen: MainScreen},
  Profile: {screen: Profile},
},
{
  headerMode: 'none',
  cardShadowEnabled: false,
  cardOverlayEnabled: true,
  cardStyle: {

  },
  navigationOptions: {
    headerVisible: false,
  }
});

export default firstTime ? createAppContainer(FirstTimeNavigator) : createAppContainer(MainNavigator);
