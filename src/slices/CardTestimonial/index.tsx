import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CardTestimonial`.
 */
export type CardTestimonialProps =
  SliceComponentProps<Content.CardTestimonialSlice>;

/**
 * Component for "CardTestimonial" Slices.
 */
const CardTestimonial = ({ slice }: CardTestimonialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for card_testimonial (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CardTestimonial;
