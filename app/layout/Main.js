import { View, ScrollView } from 'react-native';
import { SearchProvider } from '../contexts/SearchContext';
import Search from '../views/topbar/Search';
import Tabs from './Tabs';
import colors from '../theme/colors';

export default function Main({ children, searchBar }) {
  return (
    <SearchProvider>
      {searchBar ? <Search /> : ''}
      <View style={{ flex: 1, backgroundColor: colors.base }}>{children}</View>

      <Tabs />
    </SearchProvider>
  );
}
