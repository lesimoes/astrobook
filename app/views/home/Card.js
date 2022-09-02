import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, Pressable, Dimensions } from 'react-native';

import colors from '../../theme/colors';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
export default function Card({ id, image, title, authors, ...otherProps }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Detail', { bookId: id })}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={[styles.title, styles.authors]}>
        {authors?.toString()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    width: 200,
    alignItems: 'flex-start',
  },
  image: {
    height: 200, 
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'contain',
    
  },
  card: {
    marginBottom: 20,
    width: 200,
    borderRadius: 5,
    shadowColor: colors.overlay2,

    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  authors: {
    fontWeight: '400',
    color: colors.subtext,
  },
});
