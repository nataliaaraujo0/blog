import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Tags } from "../Tags";

export function RepoCard() {
  const [tags] = useState([1, 2]);
  return (
    <Flex bg="purple.900" w="453px" h="240px" gap="4" borderRadius="8px">
      <Flex padding="8px">
        <Image
          boxSize="180px"
          src="https://i.pinimg.com/564x/78/72/0e/78720e6cd776ec07da4d37f2d370995d.jpg"
          borderRadius="4px"
        />
      </Flex>

      <Flex flexDir="column" w="240px" marginTop="4px">
        <Box marginBottom="16px">
          <Text fontSize="1.2rem" fontWeight="bold" color="orange.400">
            Name do projeto
          </Text>
          <Text fontSize="1rem">Descrição do projeto</Text>
        </Box>
        <Box marginBottom="16px">
          <Text fontSize="0.8rem" fontWeight="semibold">
            24/12/2022
          </Text>
          <Text fontSize="0.9rem" fontWeight="bold">
            Link deploy
          </Text>
        </Box>

        <Flex>
          <Box>
            {tags.map((tag) => {
              return (
                <>
                  <Tags maxWidth="90px" padding="4px" />
                </>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
