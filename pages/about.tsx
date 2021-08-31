import {
  Text,
  Box,
  Link,
  Stack,
  Flex,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdDone } from "react-icons/md";
// components
import { SectionHeadline } from "../components/section-headline";
import { Avatar } from "../components/avatar";

interface SkillsType {
  map: any;
  title?: string | null;
  knowledge?: string[] | null;
}
[];

const skills: SkillsType = [
  {
    title: "Languages",
    knowledge: ["CSS & HTML", "JavaScript", "Typescript"],
  },
  {
    title: "Frontend",
    knowledge: ["React", "Next.js", "Gatsby.js", "Hugo"],
  },
  {
    title: "Backend",
    knowledge: ["NodeJS", "Python", "Golang"],
  },
  {
    title: "Database RDBMS",
    knowledge: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Database NoSQL",
    knowledge: ["Redis", "MongoDB", "Firebase", "CouchDB"],
  },
  {
    title: "Design",
    knowledge: ["CSS", "Chakra UI", "Tailwind CSS", "CSS in JS"],
  },
  {
    title: "Testing",
    knowledge: [
      "Unit Testing",
      "E2E Testing",
      "React Testing Library",
      "Cypress",
    ],
  },
  {
    title: "Architecture",
    knowledge: ["Microservices", "Monolith"],
  },
  {
    title: "Containerization",
    knowledge: ["Docker"],
  },
  {
    title: "Cluster Management",
    knowledge: ["Kubernetes (K8s)", "Swarm"],
  },
  {
    title: "Cloud",
    knowledge: ["Google Cloud Platform", "AWS"],
  },
  {
    title: "Transport Layer ",
    knowledge: [
      "REST (RPI)",
      "gRPC (RPI)",
      "RabbitMQ (Messaging)",
      "Kafka (Messaging)",
    ],
  },
  {
    title: "Data Visualization",
    knowledge: ["MS Power BI", "Tableau", "Data Studio", "Metabase"],
  },
  {
    title: "Tools Project Management",
    knowledge: ["Jira", "Trello", "Notion", "ClickUp", "MS Project"],
  },
  {
    title: "Tools Infrastructure",
    knowledge: ["ArgoCD", "Terraform", "Ansible", "Istio"],
  },
  {
    title: "Tools CI/CD",
    knowledge: ["GitHub Action", "CircleCI", "TravisCI"],
  },
  {
    title: "Tools SDLC",
    knowledge: ["Git", "GitOps (CD)"],
  },
  {
    title: "Tools Security",
    knowledge: ["OAuth", "JWT", "Vault"],
  },
  {
    title: "API Docs",
    knowledge: ["OpenAPI", "Swagger"],
  },
];

export const AboutPage = () => {
  return (
    <>
      <SectionHeadline>
        Hello, I am Eka Prasetia{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </SectionHeadline>
      <Flex direction={["column", "column", "row"]} mb={{ base: 12, md: 0 }}>
        <Stack spacing={6} maxW={"2xl"} order={[2, 2, 1]}>
          <Text
            fontSize={"xl"}
            as={"em"}
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            I design and build Fullstack Development from Indonesia.
          </Text>

          <Text fontSize={"lg"}>
            Outside of the regular work I spend my time{" "}
            <Link href={"https://github.com/ekaone/"}>
              contribute to open source projects
            </Link>
            , also read widely and try new things
          </Text>
        </Stack>
        <Box minW={300} mx={"auto"} mb={{ base: 12, md: 0 }} order={[1, 1, 2]}>
          <Avatar />
        </Box>
      </Flex>

      <Box bg={"gray.900"} p={8} rounded={"md"}>
        <SectionHeadline size={"lg"} as={"h3"}>
          My Knowledge
        </SectionHeadline>
        <Text fontSize={"lg"} mb={6}>
          These are the things I know about or use.
        </Text>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          {skills.map((skill: any) => (
            <Box key={skill.title}>
              <Text fontWeight={"bold"} mb={2}>
                {skill.title}
              </Text>
              <List>
                {skill.knowledge.map((k: any) => (
                  <ListItem key={k}>
                    <ListIcon as={MdDone} color={"brandGreen.500"} />
                    {k}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AboutPage;
