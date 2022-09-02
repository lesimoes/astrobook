import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import colors from '../../theme/colors';

export default function BigCard({ data }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { bookId: data.id })}
    >
      <Image
        style={styles.image}
        source={{ uri: data.imageLinks.thumbnail || data.imageLinks.medium }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'contain',
  },
  card: {
    height: 400,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: colors.bas2,
    shadowColor: colors.overlay2,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 10,
    
  },
});
