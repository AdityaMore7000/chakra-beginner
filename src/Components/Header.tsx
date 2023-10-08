import { Box, Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box
      color={"#f7fafc"}
      bg="#6b46c1"
      pt="90px"
      pb="198px"
      width={"full"}
      textAlign={"center"}
    >
      <Heading fontWeight={"800"} fontSize={"48px"}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight={"500"} fontSize={"24px"} pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
