import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextCard`.
 */
export type TextCardProps = SliceComponentProps<Content.TextCardSlice>;

/**
 * Component for "TextCard" Slices.
 */
const TextCard = ({ slice }: TextCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextCard;
