import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import TextCard from "@/components/TextCard";

/**
 * Props for `TestimonialSection`.
 */
export type TestimonialSectionProps =
  SliceComponentProps<Content.TestimonialSectionSlice>;

/**
 * Component for "TestimonialSection" Slices.
 */
const TestimonialSection = ({
  slice,
}: TestimonialSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TextCard
        title={slice.primary.text_card_title}
        subtitle={slice.primary.text_card_subtitle}
      />
      {slice.items.map((item, index) => (
        <div key={index}>
          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.text} />
          <PrismicNextImage field={item.image} />
        </div>
      ))}
    </section>
  );
};

export default TestimonialSection;
