import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export function Xp() {
  return (
    <Card bg="purple.900" w="100%" h="120px" borderRadius="6px">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" color="white">
              <strong style={{ color: "#cf5192" }}> YAZO</strong> |
              Desenvolvedora Front-end ReactJs
            </Heading>
            <Text pt="2" fontSize="sm" color="white">
              Criação de funcionalidades para projetos do ramo de eventos,
              utlizando ReactJs, Typescript, Storybook, Material-UI, Styled
              components e Axios. Ferramentas gerenciais: Atlassian Jira, Scrum,
              Kanban, Github, AWS - S3, Cloud front.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
