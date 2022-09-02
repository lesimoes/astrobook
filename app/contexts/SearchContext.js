import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [text, setText] = useState('');

  function handleSearch(textSearch) {
    setText(textSearch);
    console.log(textSearch);
  }
  return (
    <SearchContext.Provider value={{ text, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context !== undefined) {
    return context;
  }
  return new Error('Não existe o contexto Search');
}

export { SearchProvider, useSearch };
