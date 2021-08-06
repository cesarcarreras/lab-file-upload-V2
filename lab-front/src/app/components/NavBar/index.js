import React from 'react'
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";


import tumblrLogo from '../../assets/images/Tumblr.png'

const NavBar = () => {
    return(
        <Flex p="4">
        <Box>
        <img src={tumblrLogo} alt="Tumblr img" width="100px"/>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="green" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="blue">Log in</Button>
        </Box>
      </Flex>
    )
}

export default NavBar