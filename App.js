import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './app/layout/Main';
import colors from './app/theme/colors';
import Detail from './app/views/detail/Detail';
import Content from './app/layout/Content';
import SearchBooks from './app/views/search/SearchBooks';
import Home from './app/views/home/Home';
import Error from './app/views/error/Error';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'none',
            }}
          >
            <Stack.Screen name="Home">
              {() => (
                <Main>
                  <Home />
                </Main>
              )}
            </Stack.Screen>
            <Stack.Screen name="Search">
              {() => (
                <Main searchBar>
                  <SearchBooks />
                </Main>
              )}
            </Stack.Screen>
            <Stack.Screen name="Detail">
              {() => (
                <Main>
                  <Detail />
                </Main>
              )}
            </Stack.Screen>
            <Stack.Screen name="Error">
              {() => (
                <Main>
                  <Error />
                </Main>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base,
  },
});
