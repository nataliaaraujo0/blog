import { Tag } from "@chakra-ui/react";

type TagsProps = {
  title?: string;
};
export function Tags({ title = "title" }: TagsProps) {
  return (
    <>
      <Tag
        variant="solid"
        w="90%"
        colorScheme="pink"
        borderRadius="4px"
        height="32px"
      >
        {title}
      </Tag>
    </>
  );
}
