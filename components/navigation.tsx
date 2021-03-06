import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, Link, BoxProps } from "@chakra-ui/react";

const links = [
  {
    label: "Project",
    href: "/project",
  },
  {
    label: "Book",
    href: "https://book.ekapm.dev/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "https://forms.gle/cwyS5jzZBYfdZgYL9",
  },
];

export const Navigation = ({ ...restProps }: BoxProps) => {
  const { pathname } = useRouter();

  return (
    <HStack spacing={4} {...restProps}>
      {links.map((link) => (
        <NextLink key={link.href} href={link.href} passHref={true}>
          <Link
            px={2}
            py={2}
            rounded={"md"}
            color={"white"}
            _hover={{ textDecoration: "none", bg: "gray.900" }}
            css={{ transition: "all 0.3s ease-in-out" }}
            bg={pathname === link.href ? "gray.900" : "inherit"}
          >
            {link.label}
          </Link>
        </NextLink>
      ))}
    </HStack>
  );
};
