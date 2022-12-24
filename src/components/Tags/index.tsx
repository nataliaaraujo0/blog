import { Tag } from "@chakra-ui/react";

type TagsProps = {
  titleTag?: string;
};
export function Tags({ titleTag = "title" }: TagsProps) {
  return (
    <>
      <Tag
        variant="solid"
        w="90%"
        colorScheme="pink"
        borderRadius="4px"
        height="32px"
      >
        {titleTag}
      </Tag>
    </>
  );
}
