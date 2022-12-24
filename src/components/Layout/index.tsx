import {
  Box,
  Card,
  Divider,
  Flex,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";

export function Layout() {
  return (
    <Flex h="100vh" padding="1rem">
      <Flex w="357px" alignItems="center" h="100vh" flexDir="column" gap="4px">
        <Box marginBottom="32px">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Text fontSize="1.5rem" fontWeight="bold">
            Natália Araújo
          </Text>
          <Text fontSize="1.1rem">Front-End developer</Text>
        </Box>
        <Divider marginBottom="32px" width="320px" />
        <Tag
          variant="solid"
          w="90%"
          colorScheme="pink"
          borderRadius="4px"
          height="32px"
        >
          ReactJs
        </Tag>
        <Tag
          variant="solid"
          w="90%"
          colorScheme="pink"
          borderRadius="4px"
          height="32px"
        >
          ReactJs
        </Tag>
        <Tag
          variant="solid"
          w="90%"
          colorScheme="pink"
          borderRadius="4px"
          height="32px"
        >
          ReactJs
        </Tag>
        <Tag
          variant="solid"
          w="90%"
          colorScheme="pink"
          borderRadius="4px"
          height="32px"
        >
          ReactJs
        </Tag>
      </Flex>
      <Flex w="90%" h="100vh" marginLeft="42px" flexDir="column">
        <Text fontWeight="bold" fontSize="2.2rem">
          Sobre o meu trabalho
        </Text>
        <Tabs variant="unstyled">
          <TabList gap="4px">
            <Tab w="150px" bg="purple.700" borderRadius="4px">
              Repo Github
            </Tab>
            <Tab w="150px" bg="purple.700" borderRadius="4px">
              Projetos
            </Tab>
            <Tab isDisabled w="150px" bg="purple.700" borderRadius="4px">
              Experiencias
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex bg="pink.900" maxWidth="895px" h="600px">
                1
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex bg="pink.800" maxWidth="895px" h="600px">
                2
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex bg="pink.700" maxWidth="895px" h="600px">
                3
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
