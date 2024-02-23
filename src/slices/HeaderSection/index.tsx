import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeaderSection`.
 */
export type HeaderSectionProps =
  SliceComponentProps<Content.HeaderSectionSlice>;

/**
 * Component for "HeaderSection" Slices.
 */
const HeaderSection = ({ slice }: HeaderSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>{slice.primary.company_name}</>
      <PrismicRichText field={slice.primary.sub_title} />
      {slice.items.map((item, index) => (
        <div key={index}>{item.topics}</div>
      ))}
      <PrismicNextLink field={slice.primary.button_link_1}>
        {slice.primary.button_text_1}
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.button_link_2}>
        {slice.primary.button_text_2}
      </PrismicNextLink>
      <PrismicNextImage field={slice.primary.image_1} />
      <PrismicNextImage field={slice.primary.image_2} />
    </section>
  );
};

export default HeaderSection;
