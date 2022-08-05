import TagCard from "./TagCard";
import { Image, Stack, Heading, Text} from "@chakra-ui/react";
export const CardFocus = ({ image, title, area, tags }) => {
  return (
    <Stack
      className="contenedor"
      //minH={{ lg: "565px", base: "400px" }}
      bg="#fcfcfc"
      w="250px"
      minH="400px"
      justifyContent={"flex-start"}
      align="flex-start"
      m={"0 !important"}
      borderRadius="md"
      border={"1px solid #ccc"}
      p="15px 15px"
      boxShadow="0px 0px 10px 0px rgba(197, 197, 197, 0.62)"
      _hover={{
        md: {
          boxShadow: "0px 0px 20px 0px rgba(197, 197, 197, 1)",
          transform: "scale(1.05)",
          transition: "250ms",
        },
      }}
    >
      <Heading fontSize="2xl" textTransform="capitalize">
        {title}
      </Heading>
      <Text fontWeight={"semibold"} fontSize="xl" textTransform="capitalize">
        {area}
      </Text>
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        boxSize={{ base: "3xs", md: "2xs" }}
        borderRadius="md"
      />
      <TagCard tags={tags} />
    </Stack>
  );
};


