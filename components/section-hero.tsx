import NextLink from "next/link";
import { Heading, Text, Link, Stack, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

import { Section } from "./section";

export const SectionHero = () => {
  return (
    <Section>
      <Heading as="h1" size="2xl" mb={8}>
        Hi there{" "}
        <span role="img" aria-label="smile">
          👋
        </span>
      </Heading>
      <Stack spacing={3} maxW={"5xl"} mb={12}>
        <Text
          color={"white"}
          fontSize={{
            base: "lg",
            sm: "2xl",
            md: "3xl",
          }}
        >
          Thank you for visiting, I made a small{" "}
          <Link href={"/project"}>project here</Link> as a study material and I
          also wrote a short <Link href={"https://book.ekapm.dev/"}>notes</Link>{" "}
          for the learning process, I hope you can feel comfortable here
          <span role="img" aria-label="smile">
            😀
          </span>
        </Text>
      </Stack>
      <NextLink href={"/about"} passHref={true}>
        <Button
          as={Link}
          variant={"outline"}
          rightIcon={<MdArrowForward />}
          _hover={{
            textDecoration: "none",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
        >
          About
        </Button>
      </NextLink>
    </Section>
  );
};
