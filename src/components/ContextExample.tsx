import {
  createContext,
  PropsWithChildren,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ItemsContext = createContext<{ items: string[]; updateItems: any }>({
  items: [],
  updateItems: () => {},
});

const ItemsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [items, updateItems] = useState(["pouet", "poil", "patate"]);
  return (
    <ItemsContext.Provider value={{ items, updateItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

const SearchableProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ItemsProvider>
      <SearchProvider>{children}</SearchProvider>
    </ItemsProvider>
  );
};

export const ContextExample = () => {
  return (
    <SearchableProvider>
      <Search />
      <AddForm />
      <List />
    </SearchableProvider>
  );
};

const SearchContext = createContext<{
  searchedItems: string[];
  updateSearchItems: any;
}>({
  searchedItems: [],
  updateSearchItems: () => {},
});

const SearchProvider = ({ children }: PropsWithChildren<{}>) => {
  const [searchedItems, updateSearchItems] = useState([]);
  return (
    <SearchContext.Provider value={{ searchedItems, updateSearchItems }}>
      {children}
    </SearchContext.Provider>
  );
};

const Search = () => {
  const { items } = useContext(ItemsContext);
  const { updateSearchItems } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const updateSearchedItems = useCallback(() => {
    const val = inputRef.current?.value;
    let filteredItems = items;
    if (val?.trim() !== "") {
      filteredItems = items.filter((item) =>
        item.toLowerCase().includes(val!.toLowerCase())
      );
    }
    updateSearchItems(filteredItems);
  }, [items, updateSearchItems]);

  useEffect(() => {
    updateSearchedItems();
  }, [items, updateSearchItems, updateSearchedItems]);

  const onChange = () => {
    updateSearchedItems();
  };

  console.log("rendering Search component");
  return (
    <div>
      Search: <input ref={inputRef} type="text" onChange={onChange} />
    </div>
  );
};

/* const SearchContext = createContext<{
  query: string;
  updateQuery: any;
}>({
  query: "",
  updateQuery: () => {},
});

const SearchProvider = ({ children }: PropsWithChildren<{}>) => {
  const [query, updateQuery] = useState("");
  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

const Search = () => {
  const { updateQuery } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = () => {
    updateQuery(inputRef.current?.value);
  };

  console.log("rendering Search component");
  return (
    <div>
      Search: <input ref={inputRef} type="text" onChange={onChange} />
    </div>
  );
}; */

const AddForm = () => {
  const { updateItems } = useContext(ItemsContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = inputRef.current?.value;
    if (val?.trim() !== "") {
      updateItems((items: any) => [...items, val]);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  console.log("rendering Add Form component");

  return (
    <div>
      <form onSubmit={onSubmit}>
        Add item: <input ref={inputRef} type="text" />
      </form>
    </div>
  );
};

const List = () => {
  const { searchedItems: filteredItems } = useContext(SearchContext);
  /* const { items } = useContext(ItemsContext);
  const { query } = useContext(SearchContext);
  const filteredItems = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(query!.toLowerCase())),
    [items, query]
  ); */

  console.log("rendering List component");
  return (
    <div>
      Items:
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
