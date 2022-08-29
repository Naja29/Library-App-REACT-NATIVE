import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import BookAurthor from './BookAurthor';
import Login from './Login';
import SignUp from './SignUp';
import BookList from './BookList';
import Bookdetails from './Bookdetails';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Log Out" component={Login} options={{
          headerStyle: {
          backgroundColor: '#009999',
          },
          headerTintColor: '#009999',
        }}/>
        <Drawer.Screen name="Home Page" component={Home} options={{
          title: 'Menu',
          headerStyle: {
          backgroundColor: '#006666',
          },
          headerTintColor: '#4dffff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="BookAurthor" component={BookAurthor} options={{
          title: 'Book Author',
          headerStyle: {
          backgroundColor: '#006666',
          },
          headerTintColor: '#4dffff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="BookList " component={BookList} options={{
          title: 'Book List',
          headerStyle: {
          backgroundColor: '#006666',
          },
          headerTintColor: '#4dffff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="Bookdetails " component={Bookdetails} options={{
          title: 'Book Categories',
          headerStyle: {
          backgroundColor: '#006666',
          },
          headerTintColor: '#4dffff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{
          headerStyle: {
          backgroundColor: '#009999',
          },
          headerTintColor: '#009999',
        }}/>
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

