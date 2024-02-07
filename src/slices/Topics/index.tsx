import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Topics`.
 */
export type TopicsProps = SliceComponentProps<Content.TopicsSlice>;

/**
 * Component for "Topics" Slices.
 */
const Topics = ({ slice }: TopicsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for topics (variation: {slice.variation}) Slices
    </section>
  );
};

export default Topics;
