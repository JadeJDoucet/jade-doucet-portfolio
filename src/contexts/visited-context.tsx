import {
  createContext,
  Dispatch,
  useContext,
  useReducer,
} from 'react'

/*
  This is intentionally over-complicated to demonstrate
  how you can use context for more complex state
*/
interface CountProviderProps {
  children: React.ReactNode
}

interface PagesVisitedContextType {
  state: {
    visited: string[],
  },
  dispatch: Dispatch<PagesVisitedActions>,
}

type PagesVisitedActions =
  | { type: 'ADD_PAGE_VISITED'; payload: string; }
  | { type: 'REMOVE_PAGE_VISITED'; payload: string; }
  | { type: 'CLEAR_PAGES_VISITED' };

export const PagesVisitedContext = createContext<PagesVisitedContextType>({
  state: { visited: [] },
  dispatch: () => null
});

const pagesVisitedReducer = (state: PagesVisitedContextType['state'], action: PagesVisitedActions) => {
  switch (action.type) {
    case 'ADD_PAGE_VISITED': {
      return { visited: [...state.visited, action.payload] };
    }
    case 'REMOVE_PAGE_VISITED': {
      return { visited: state.visited.filter((pageName) => pageName !== action.payload) };
    }
    case 'CLEAR_PAGES_VISITED': {
      return { visited: [] };
    }
    default: {
      throw new Error(`Unhandled action ${action}}`);
    }
  }
}

const PagesVisitedProvider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(pagesVisitedReducer, { visited: [] });
  const value = { state, dispatch };
  return (
    <PagesVisitedContext.Provider value={value}>
      {children}
    </PagesVisitedContext.Provider>
  );
};

const usePagesVisited = () => {
  const context = useContext(PagesVisitedContext);
  const { state, dispatch } = context;

  const addPage    = (pageName: string) => dispatch({ type: 'ADD_PAGE_VISITED', payload: pageName });
  const removePage = (pageName: string) => dispatch({ type: 'REMOVE_PAGE_VISITED', payload: pageName });
  const clearPages = () => dispatch({ type: 'CLEAR_PAGES_VISITED' });

  if (context === undefined) {
    throw new Error('usePagesVisited must be used within a PagesVisitedProvider');
  }
  return { state, addPage, removePage, clearPages };
}

export { PagesVisitedProvider, usePagesVisited };
