import { useNavigation } from '@react-navigation/native';
import { SearchProvider } from '../contexts/SearchContext';
import { Icon } from '@rneui/base';

import Title from '../views/topbar/Title';
import Search from '../views/topbar/Search';

export default function Content({ children }) {
  return (
    <SearchProvider>
      <Search />
      {children}
    </SearchProvider>
  );
}
