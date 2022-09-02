import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { getBook } from '../../services/googleBooks';
import colors from '../../theme/colors';
import Rating from '../../components/Rating';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const htmlRegex = /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g;

export default function Detail() {
  const {
    params: { bookId },
  } = useRoute();
  const [detail, setDetail] = useState({});


  
  useEffect(() => {
    getBook({ id: bookId }).then((res) => {

      const { title, authors, categories, averageRating, ratingsCount, description } = res.volumeInfo;

      const image =
        res.volumeInfo.imageLinks.medium || res.volumeInfo.imageLinks.thumbnail;
      setDetail({
        title,
        authors,
        categories,
        image,
        averageRating,
        ratingsCount,
        description
      });
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: detail.image }} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{detail.title}</Text>
        <View style={{flex: 1, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subInfo}>{detail.authors}</Text>
            <Text style={styles.subInfo}> • </Text>
            <Text style={styles.subInfo}>{detail.categories}</Text>
          </View>
          <View >
            <Icon
              name="heart"
              type="feather"
              size={28}
              color={colors.subtext}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 20}}>
          <Rating rating={detail.averageRating} />
          <Text style={{color: colors.subtext, marginLeft: 10}}>{detail.ratingsCount} Avaliações</Text>
        </View>
  
        <View style={styles.descriptionContainer}>
          <Text style={{fontSize: 20, color: colors.text, marginBottom: 20}}>Resumo</Text>
          <Text style={styles.descriptionText}>{detail.description?.replace(htmlRegex, '')}</Text>
        </View>
        
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2,
    resizeMode: 'contain',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  containerInfo: {
    flex: 1/2,
    margin: 6,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '600',
  },
  subInfo: {
    marginTop: 4,
    fontSize: 14,
    color: colors.subtext,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 10,
    borderTopWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    borderTopColor: colors.overlayAlpha,
    borderBottomWidth: 1,
    borderBottomColor: colors.overlayAlpha,
    
  },
  descriptionContainer: {
    flex: 1,
    paddingTop: 20,
    borderTopWidth: 1,
    marginTop: 20,
    borderTopColor: colors.overlayAlpha,
    marginBottom: 40,
  },
  descriptionText:  {
    fontSize: 18,
    color: colors.subtext,
  }

});
