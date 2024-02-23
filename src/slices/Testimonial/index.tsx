import { Content} from "@prismicio/client";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {

  const renderStars = (score: number): JSX.Element[] => {
    const maxScore = 5;
    const scoreInt = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    const stars = [];

    for (let i = 1; i <= maxScore; i++) {
      if (i <= scoreInt) {
        stars.push(<IoMdStar key={i} className="text-primary-main" />);
      } else if (i === scoreInt + 1 && hasHalfStar) {
        stars.push(<IoMdStarHalf key={i} className="text-primary-main" />);
      } else {
        stars.push(<IoMdStarOutline key={i} className="text-primary-main" />);
      }
    }
    console.log(score)
    return stars;
  };


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-0 m-0 mb-5 px-4 flex flex-col gap-10"
    >
      <div className="flex items-right text-base justify-center h-16 flex-grow flex-col text-black font-secondary pl-2 border-l-[3px] border-primary-main border-solid">
         <PrismicRichText field={slice.primary.testimonial_title} components={{
        heading3: ({children}) => (
          <h3 className="font-bold">{children}</h3>
        )
      }}/>
      <PrismicRichText field={slice.primary.testimonial_subtitle} components={{
        paragraph: ({children}) => (
          <p>{children}</p>
        )
      }} />
      </div>
     

      <div>
        {slice.items.map((item, index) => (
          <div key={index} className="border border-primary-main w-[348px] h-36 rounded-xl">
            <div className="flex gap-2 items-center ml-2 mt-4 border">
            <div className="flex flex-col items-center justify-center">
              <div className="border border-primary-main rounded-full w-20 h-20"><PrismicNextImage className="rounded-full" field={item.testimonial_image}/></div>
              <div className="flex items-start gap-1 h-6 mt-1"><>{item.testimonial_score != null ? renderStars(item.testimonial_score) : null}</></div>
            </div>
            <div className="flex flex-col gap-1 mb-2 border">
              <PrismicRichText field={item.testimonial_name} components={{
                heading3: ({children}) => (
                  <h3 className="text-sm text-primary-main uppercase font-primary font-normal">{children}</h3>
                )
              }} />
              <PrismicRichText field={item.testimonial_text} components={{
                paragraph: ({children}) => (
                  <p className="text-xs font-secondary font-medium uppercase leading-3">{children}</p>
                )
              }} />
            </div>
             
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
