import {
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  Image,
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { searchBooks } from '../../services/googleBooks';
import colors from '../../theme/colors';
import Book from './Book';
import { useSearch } from '../../contexts/SearchContext';

export default function SearchBooks({ }) {
  const [books, setBooks] = useState([]);
  const { text } = useSearch();


  useEffect(() => {
    searchBooks({ query: text }).then((res) => {
      setBooks(
        res?.items?.map((book) => ({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          id: book.id,
          thumbnail: book.volumeInfo?.imageLinks?.thumbnail,
        }))
      );
    });
  }, [text]);

  return (
    <View style={styles.container}>
     
      {!books ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Image 
        source={require('../../assets/astrounat01.png')}
        style={{width: 200, height: 220, resizeMode: 'contain'}}
        />
        </View>
      ): <FlatList
        numColumns="2"
        data={books}
        renderItem={({ item }) => <Book {...item} />}
        keyExtractor={(item) => item.id}
      />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    flex: 1,

  },

  image: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  card: {
  
    height: 300,
    margin: 10,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1 / 2,
    elevation: 20,
    shadowColor: colors.overlay2,
  },
});
