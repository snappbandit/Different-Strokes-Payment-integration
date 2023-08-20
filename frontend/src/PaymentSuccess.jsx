import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0]
    
    const referencenum = searchQuery.get("reference")

  return (
    <Box>
        <VStack h="100vh" justifyContent={"center"}>

            <Heading textTransform={"uppercase"}>Order Successful !!!</Heading>
            <Text>
                Reference No. {referencenum}
            </Text>
        </VStack>
    </Box>
  )
}

export default PaymentSuccess