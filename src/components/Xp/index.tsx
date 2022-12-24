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
type XpProps = {
  ocupation: string;
  company: string;
  description: string;
};

export function Xp({
  ocupation = " Desenvolvedora Front-end ReactJs",
  company = "YAZO",
  description = "Criação de funcionalidades para projetos do ramo de eventos, utlizando ReactJs, Typescript, Storybook, Material-UI, Styled components e Axios. Ferramentas gerenciais: Atlassian Jira, Scrum,Kanban, Github, AWS - S3, Cloud front",
}: XpProps) {
  return (
    <Card bg="purple.900" w="100%" h="120px" borderRadius="6px">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" color="white">
              <strong style={{ color: "#cf5192" }}> {company}</strong> |
              {ocupation}
            </Heading>
            <Text pt="2" fontSize="sm" color="white">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
