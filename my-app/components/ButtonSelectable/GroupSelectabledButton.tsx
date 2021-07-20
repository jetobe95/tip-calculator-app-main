import { useState } from "react";
import useAppState from "../../hooks/useAppState";
import ButtonSelectable from "./ButtonSelectable";
import { GridGroup, InputCustomTip } from "./styledComponents";

const tips = [5, 10, 15, 25, 50];

export default function GroupSelectabledButton() {
  const { dispatch, state } = useAppState();
  const { tipPercent } = state;

  function setSelected(tip: number) {
    dispatch({
      type: "SET_TIP_PERCENT",
      payload: { percent: tip },
    });
  }

  return (
    <GridGroup>
      {tips.map(tip => (
        <ButtonSelectable
          enabled={tipPercent === tip}
          title={`${tip}%`}
          key={tip}
          onClick={() => setSelected(tip)}
        />
      ))}
      <InputCustomTip
        type="number"
        as="input"
        placeholder="Custom"
        onChange={(event: any) => setSelected(parseFloat(event.target.value))}
      />
    </GridGroup>
  );
}
