// Flow
import React from "react";
//  Prismic
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
//  Components
import List from "@/components/List";
import TextCard from "@/components/TextCard";
import Button from "@/components/Button";
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
      className="flex flex-col gap-8 md:gap-16 mb-8 md:mb-16"
    >
      <header className="flex flex-col gap-y-5">
        <div>
          <h2 className="text-2xl font-primary text-primary-main my-3 lg:text-[32px]">
            {slice.primary.company_name}
          </h2>

          <h1 className="text-[28px] font-primary lg:text-[58px]">
            <PrismicRichText
              field={slice.primary.sub_title}
              components={{
                strong: ({ children }) => (
                  <span className="text-primary-main font-bold">
                    {children}
                  </span>
                ),
              }}
            />
          </h1>
        </div>


        <ul className="flex flex-col gap-2">
          {slice.items.map((item, index) => (
            <List key={index} text={item.topics} />
          ))}
        </ul>

        <div className="flex space-x-4">
          <div className="mr-2">
            <Button
              href={slice.primary.button_link_1}
              styles="primary"
              name={slice.primary.button_text_1}
            />
          </div>

          <div className="ml-2">
            <Button
              href={slice.primary.button_link_2}
              styles="secondary"
              name={slice.primary.button_text_2}
            />
          </div>
        </div>


      </header>

      <div className="flex flex-col gap-y-8">
        <TextCard
          title={slice.primary.text_card_title}
          subtitle={slice.primary.text_card_subtitle}
        />
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        <PrismicNextImage field={slice.primary.image_1} className="w-full lg:w-1/3" />
        <PrismicNextImage field={slice.primary.image_2} className="w-full lg:w-1/3" />
        <PrismicNextImage field={slice.primary.image_3} className="hidden lg:block lg:w-1/3" />
      </div>

    </section>
  );
};

export default HeaderSection;
