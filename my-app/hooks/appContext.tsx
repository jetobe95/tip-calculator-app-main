import { createContext, Dispatch, FC, useReducer } from "react";
import { AppAction, appReducer, AppState, initalState } from "./appReducer";
export const _AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
}>({
  state: {
    bill: 0,
    tipPercent: 0,
    numberOfPeople: 0,
  },
  dispatch: () => undefined,
});

export const AppProvider: FC<{}> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initalState);
  return (
    <_AppContext.Provider value={{ state, dispatch }}>{children}</_AppContext.Provider>
  );
};
