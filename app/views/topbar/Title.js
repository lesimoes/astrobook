import { Text, StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';

export default function Title(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
