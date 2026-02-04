"use client";

import { Button, HStack, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack minH="100svh" justify="center" gap={6} px={6}>
      <Heading size="lg">Chakra UI Button Demo</Heading>
      <HStack>
        <Button colorScheme="teal">Click me</Button>
        <Button variant="outline" colorScheme="teal">
          Click me
        </Button>
      </HStack>
    </VStack>
  );
}
