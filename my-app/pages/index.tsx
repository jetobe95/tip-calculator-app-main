import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GroupSelectabledButton from "../components/ButtonSelectable/GroupSelectabledButton";
import Labelnput from "../components/Label/Label";
import LabelTextInput from "../components/LabelTextInput/LabelTextInput";
import TipResult from "../components/TipResult/TipResult";
import {
  Wrapper,
  SizedBox,
  Nav,
  LeftSide,
  RightSide,
} from "../components/styledComponents";
import useAppState from "../hooks/useAppState";

export default function Home() {
  const { dispatch,state:{bill,numberOfPeople} } = useAppState();
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav>
          <Image src="/logo.svg" height={53} width={86} alt="Logo" />
        </Nav>
      </header>

      <Wrapper>
        <LeftSide>
          <LabelTextInput
            label="Bill"
            textInputProps={{
              type:'number',
              value:bill,
              placeholder: "0",
              iconName: "/icon-dollar.svg",
              onChange: (text) =>
                dispatch({
                  type: "SET_BILL",
                  payload: { bill: parseFloat(text) },
                }),
            }}
          />
          <SizedBox />
          <Labelnput title="Select Tip %" />
          <GroupSelectabledButton />
          <SizedBox />

          <LabelTextInput
            label="Number of people"
            textInputProps={{
              type:'number',
              placeholder:"0",
              value:numberOfPeople,
              iconName:"/icon-person.svg",
              onChange: (text) =>
                dispatch({
                  type: "SET_NUMBER_OF_PEOPLE",
                  payload: { numberOfPeople: parseFloat(text) },
                }),

            }}
          />
        </LeftSide>
        <RightSide>
          <TipResult />
        </RightSide>
      </Wrapper>
    </div>
  );
}
