import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Pressable } from 'react-native';
import { Icon } from '@rneui/base';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="home"
        type="feather"
        size={28}
        color={colors.subtext}
        onPress={() => navigation.navigate('Home')}
      />
      <Icon
        style={styles.icon}
        name="search"
        type="feather"
        size={28}
        color={colors.subtext}
        onPress={() => navigation.navigate('Search')}
      />
      <Icon
        style={styles.icon}
        name="heart"
        type="feather"
        size={28}
        color={colors.subtext}
        onPress={() => navigation.navigate('Error')}
      />
      <Icon
        style={styles.icon}
        name="user"
        type="feather"
        size={28}
        color={colors.subtext}
        onPress={() => navigation.navigate('Error')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.base,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});
