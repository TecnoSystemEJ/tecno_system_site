import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CarouselCard`.
 */
export type CarouselCardProps = SliceComponentProps<Content.CarouselCardSlice>;

/**
 * Component for "CarouselCard" Slices.
 */
const CarouselCard = ({ slice }: CarouselCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for carousel_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CarouselCard;
