import { _AppContext } from "./appContext";
import { useContext } from "react";

const numberFormat = new Intl.NumberFormat("es");
export default function useAppState() {
  const { state, dispatch } = useContext(_AppContext);
  const { numberOfPeople, bill, tipPercent } = state;
  const isValid = bill > 0 && numberOfPeople > 0 && tipPercent > 0;
  const tipAmount = isValid ? Math.round((bill * (tipPercent / 100)) / numberOfPeople) : 0;
  const total = isValid ? Math.round((bill + tipAmount) / numberOfPeople) : 0;
  return {
    state,
    dispatch,
    isValid,
    tipAmount: numberFormat.format(tipAmount),
    total:numberFormat.format(total),
  };
}
