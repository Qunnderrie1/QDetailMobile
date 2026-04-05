import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import UserContext, { UserProvider } from './app/UserProvider'
import Home from './app/(Tabs)/home';
import CustomHeader from './app/components/CustomHeader';
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigator } from 'expo-router';

export default function App() {

  
  return (

    <View>
      <StatusBar style='light' />
    </View>

 
  );
}

