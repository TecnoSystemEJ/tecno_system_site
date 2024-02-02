import React from "react";
import { AllDocumentTypes } from "../../../prismicio-types";

type Props = {
  homeData: AllDocumentTypes;
};

const HeaderSection = (props: Props) => {
  const text1 = props.homeData.data;

  return <div></div>;
};

export default HeaderSection;
