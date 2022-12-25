import { Tag } from "@chakra-ui/react";

type TagsProps = {
  titleTag?: string;
  width?: string;
  maxWidth?: string;
  colorScheme?: string;
  padding?: string;
};
export function Tags({
  padding,
  titleTag = "ReactJs",
  width = "90%",
  maxWidth,
  colorScheme = "pink",
}: TagsProps) {
  return (
    <Tag
      padding={padding}
      variant="solid"
      w={width}
      maxWidth={maxWidth}
      colorScheme={colorScheme}
      borderRadius="4px"
      height="32px"
    >
      {titleTag}
    </Tag>
  );
}
