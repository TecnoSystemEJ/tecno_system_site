import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import TextCard from "@/components/TextCard";
import SliderComponent from "@/components/SliderComponent";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  return (
    <div
      className="flex flex-col overflow-x-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-3xl font-primary text-primary-main my-3 font-400">
        {slice.primary.company_name}
      </h2>
      <PrismicRichText
        field={slice.primary.text}
        components={{
          paragraph: ({ children }) => (
            <p className="font-secondary text-black text-sm font-400 mb-8">
              {children}
            </p>
          ),
        }}
      />
      <TextCard
        title={slice.primary.text_card_title}
        subtitle={slice.primary.text_card_subtitle}
      />
      <SliderComponent cards={slice.items} />
    </div>
  );
};

export default AboutSection;
