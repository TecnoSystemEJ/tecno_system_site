// React
import React from "react";
// Prismic
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
// Components
import TextCard from "@/components/TextCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

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
      className="flex flex-col w-full gap-8 md:gap-16 mb-8 md:mb-16 relative"
    >
      <TextCard
        title={slice.primary.text_card_title}
        subtitle={slice.primary.text_card_subtitle}
      />

      <div className="hidden lg:flex absolute right-[-20%] -top-10">
        <Image
          src="./linetech.svg"
          width={735}
          height={151}
          alt="Picture of the author"
        />
      </div>

      <div className="hidden lg:flex absolute left-[-20%] bottom-[380px]">
        <Image
          src="./linetech2.svg"
          width={735}
          height={151}
          alt="Picture of the author"
        />
      </div>

      <div className="w-full sm:justify-between flex flex-row flex-wrap lg:gap-y-5 lg:gap-x-8 gap-y-8">
        {slice.items.map((item, index) => (
          <TestimonialCard
            title={item.title}
            key={index}
            text={item.text}
            score={item.score != null ? item.score : null}
            image={item.image}
          />
        ))}
      </div>

      <ContactForm />
    </section>
  );
};

export default TestimonialSection;
