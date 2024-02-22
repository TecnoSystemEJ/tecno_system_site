import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";


export type HeaderSectionProps =
  SliceComponentProps<Content.HeaderSectionSlice>;


const HeaderSection = ({ slice }: HeaderSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <>{slice.primary.company_name}</>
     <p>tecnosystem company name</p>
    </section>
  );
};

export default HeaderSection;
