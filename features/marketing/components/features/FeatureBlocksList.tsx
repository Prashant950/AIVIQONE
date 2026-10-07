import FeatureDetailBlock from "./FeatureDetailBlock";
import { featureBlocks } from "@/features/marketing/data/features-page";

export default function FeatureBlocksList() {
  return (
    <>
      {featureBlocks.map((block, index) => (
        <FeatureDetailBlock key={block.number} {...block} reversed={index % 2 !== 0} />
      ))}
    </>
  );
}