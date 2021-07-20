export type AppAction =
  | { type: "SET_BILL"; payload: { bill: number } }
  | {
      type: "SET_TIP_PERCENT";
      payload: { percent: number };
    }
  | {
      type: "SET_NUMBER_OF_PEOPLE";
      payload: { numberOfPeople: number };
    }
  | {
      type: "RESET";
    };

export interface AppState {
  bill: number;
  tipPercent: number;
  numberOfPeople: number;
}
export const initalState: AppState = {
  bill: 0,
  tipPercent: 0,
  numberOfPeople: 0,
};

export const appReducer = (
  state: AppState = initalState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case "RESET":
      return initalState;
    case "SET_NUMBER_OF_PEOPLE":
      return { ...state, numberOfPeople: action.payload.numberOfPeople };
    case "SET_BILL":
      return { ...state, bill: action.payload.bill };
    case "SET_TIP_PERCENT":
      return { ...state, tipPercent: action.payload.percent };

    default:
      return state;
  }
};
