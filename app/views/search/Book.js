import { Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/colors';

export default function Book({ id, thumbnail }) {
  const navigation = useNavigation();

  console.log(id)
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { bookId: id })}
    >
      <Image style={styles.image} source={{ uri: thumbnail }}></Image>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'contain',
  },
  card: {
    height: 300,
    margin: 10,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1 / 2,
    shadowColor: colors.overlay2,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 110,
  },
});
