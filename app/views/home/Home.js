import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { searchBooks } from '../../services/googleBooks';
import colors from '../../theme/colors';
import BigCard from './BigCard';
import Card from './Card';
import { Skeleton } from "@rneui/themed";


export default function Home({ navigation }) {
  const [books, setBooks] = useState(null);
  const [mainBook, setMainBook] = useState(null);
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    searchBooks({ query: 'clube da luta' }).then((res) => {
      setMainBook({
        ...res?.items[0].volumeInfo,
        id: res?.items[0].id,
      });
    });
  }, []);

  useEffect(() => {
    searchBooks({
      query:
        'author:john+green&langRestrict=pt&orderBy=relevance&printType=books&startIndex=2',
    }).then((res) => {
      setAuthors(
        res?.items?.map((book) => ({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          id: book.id,
          image: book.volumeInfo?.imageLinks?.thumbnail,
        }))
      );
    });
  }, []);

  useEffect(() => {
    searchBooks({
      query:
        'marketing+digital&subject:marketing&langRestrict=pt&orderBy=relevance&printType=books',
    }).then((res) => {
      setBooks(
        res?.items?.map((book) => ({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          id: book.id,
          image: book.volumeInfo?.imageLinks?.thumbnail,
        }))
      );
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.mainText}>Destaque</Text>
          {mainBook ? <BigCard data={mainBook} /> : <Skeleton animation="pulse" width={'100%'} height={200} />}
        </View>
      
        <View style={styles.others}>
          <Text style={styles.mainText}>Autor(a)</Text>
          {authors ? <FlatList
            horizontal
            data={authors}
            renderItem={({ item }) => <Card {...item} key={item.id} />}
            keyExtractor={(item) => item.id}
          /> : <Skeleton animation="pulse" width={'100%'} height={200} />}
          
        </View>
      
     
        <View style={styles.others}>
          <Text style={styles.mainText}>Outros</Text>
          {books ? <FlatList
            horizontal
            data={books}
            renderItem={({ item }) => <Card {...item} key={item.id} />}
            keyExtractor={(item) => item.id}
          /> : <Skeleton animation="pulse" width={'100%'} height={200} />}
          
        </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 10,
  },
  main: {},
  mainText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
    color: colors.text,
  },
  others: {
    marginBottom: 20,
  },
});
