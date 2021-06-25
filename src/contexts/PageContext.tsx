import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type Page = {
  Dark: boolean;
}

type PageContextType = {
  page: Page | undefined ,
}

type PageContextProviderProps = {
  children: ReactNode;
}

export const PageContext = createContext({} as PageContextType);

export const PageContextProvider = (props: PageContextProviderProps) => {
  const [page, setPage] = useState<Page>();

  useEffect(() => {
    setPage({
      Dark: true
    })
  }, [page]);


  return (
    <PageContext.Provider value={{ page }}>
      {props.children}
    </PageContext.Provider>
  );
}