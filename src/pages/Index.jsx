import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Divider, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaHamburger, FaCandyCane, FaPizzaSlice, FaIceCream } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" size="2xl">
          Delicious Eats Menu
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Discover our tasty and sizzling menu, full of delights to satisfy your cravings!
        </Text>
      </VStack>

      <Divider my={10} />

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <MenuItem title="Burgers" description="Juicy and flavorful burgers with a variety of toppings" icon={FaHamburger} imageSrc="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzEwMjg0NTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" bgColor={bgColor} textColor={textColor} />
        <MenuItem title="Chocolates" description="A selection of gourmet chocolates to sweeten your day" icon={FaCandyCane} imageSrc="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGVzfGVufDB8fHx8MTcxMDI4NTk0NXww&ixlib=rb-4.0.3&q=80&w=1080" bgColor={bgColor} textColor={textColor} />
        <MenuItem title="Savory Treats" description="Indulge in our fresh and delicious savory snacks" icon={FaPizzaSlice} imageSrc="https://images.unsplash.com/photo-1607872155422-34b70c9e6690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYXZvcnklMjBzbmFja3N8ZW58MHx8fHwxNzEwMjg1OTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" bgColor={bgColor} textColor={textColor} />
        <MenuItem title="Ice Cream" description="Cool down with our creamy and dreamy ice cream flavors" icon={FaIceCream} imageSrc="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE3MTAyODU5NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgColor={bgColor} textColor={textColor} />
      </SimpleGrid>
    </Container>
  );
};

const MenuItem = ({ title, description, icon: Icon, imageSrc, bgColor, textColor }) => {
  return (
    <VStack p={5} spacing={3} bg={bgColor} boxShadow="lg" borderRadius="xl" transition="transform 0.2s, box-shadow 0.2s" _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}>
      <Box boxSize="80px" bg="gray.200" borderRadius="full" p={2}>
        <Icon size="64px" />
      </Box>
      <VStack spacing={1}>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text color={textColor} fontSize="md">
          {description}
        </Text>
      </VStack>
      <Image src={imageSrc} borderRadius="xl" objectFit="cover" boxSize="200px" alt={`${title} image`} />
    </VStack>
  );
};

export default Index;
