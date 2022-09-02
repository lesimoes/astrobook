import { TextInput, StyleSheet, View, Keyboard } from 'react-native';
import { useState } from 'react';

import { Icon } from '@rneui/base';

import colors from '../../theme/colors';
import { useSearch } from '../../contexts/SearchContext';

export default function Search() {
  const { handleSearch } = useSearch();
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="Busque seu livro aqui!"
        onChangeText={(e) => setInputValue(e)}
      />
      <Icon
        style={styles.icon}
        name="search"
        type="feather"
        size={28}
        color={colors.subtext}
        onPress={() => {
          Keyboard.dismiss()
          handleSearch(inputValue)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.base,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderRadius: 4,
    padding: 10,
    flex: 1,
    backgroundColor: colors.overlay,
    color: colors.text,
    fontSize: 22,
  },
});
