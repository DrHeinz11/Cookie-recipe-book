import { Stack, Tag } from "@chakra-ui/react";

export default function TagCard({ tags }) {
  const tagSplit = tags ? tags.split(",") : "-".split();
  return (
    <Stack
      direction="row"
      gap={"10px"}
      size="lg"
      flexWrap="wrap"
      justify="flex-start"
    >
      {tagSplit.map((e, index) =>
        e === "-" || e === "" || e === " " ? (
          ""
        ) : (
          <Tag
            key={`${e}${index}`}
            colorScheme={"teal"}
            margin="0 !important"
            borderRadius="sm"
          >
            {e}
          </Tag>
        )
      )}
    </Stack>
  );
}
