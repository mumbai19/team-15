import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import CampaignScreen from "../screens/CampaignScreen";
import DonatedScreen from "../screens/DonatedScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CampaignStack = createStackNavigator(
  {
    Campaign: CampaignScreen,
  }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

CampaignStack.navigationOptions = {
  tabBarLabel: 'Campaigns',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

CampaignStack.path = '';

const DonatedStack = createStackNavigator(
  {
    Donated: DonatedScreen,
  },{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },
 );

DonatedStack.navigationOptions = {
  tabBarLabel: 'Donated',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

DonatedStack.path = '';

const ProductsStack = createStackNavigator(
  {
    Products: ProductsScreen,
  },{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },

);

ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProductsStack.path = '';

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-contact'} />
    ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  CampaignStack,
  DonatedStack,
    ProductsStack,
    ProfileStack,

});

tabNavigator.path = '';

export default tabNavigator;
