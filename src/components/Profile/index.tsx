import { Box, Image, Text } from "@chakra-ui/react";

type ProfileProps = {
  name?: string;
  ocupation?: string;
};
export function Profile({
  name = "Natália Araújo",
  ocupation = "Dev Frontend ReactJS",
}: ProfileProps) {
  return (
    <>
      <Box marginBottom="32px">
        <Image src="/avatar.jpeg" alt="Dan Abramov" borderRadius="3px" />
        <Text fontSize="1.5rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1.1rem">{ocupation}</Text>
      </Box>
    </>
  );
}
