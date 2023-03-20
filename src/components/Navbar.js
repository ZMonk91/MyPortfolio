import { Box, Flex, HStack,useColorMode } from '@chakra-ui/react';
import NavbarLink from './NavbarLink';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'light' 
  return (
    <Box
      bg={isDarkMode ? 'white' : 'gray.900'}
      px={4}
      py={4}
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box fontSize="lg" fontWeight="bold" color="teal.500">
          Zachary Monk
        </Box>
        <HStack spacing={8} alignItems="center">
          <NavbarLink  linkTo={'home'}/>
          <NavbarLink  linkTo={'about'}/>
          <NavbarLink  linkTo={'projects'}/>
          <NavbarLink  linkTo={'contact'}/>
          <ColorModeSwitcher/>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
