import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {

    const checkoutHandler = async (amount)=>{

        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

        const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })

        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "Kshitij Khare",
            description: "Test Transaction",
            image: "https://pps.whatsapp.net/v/t61.24694-24/224908666_208612837856652_7695545231543804881_n.jpg?ccb=11-4&oh=01_AdS7eCkHs_Twdl-vHoEnKz-bEgSxNght1eEO5-b3N19nkg&oe=64EF1864&_nc_cat=109",
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

    }

  return (
    <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
            <Card amount={5000} img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_34FR+watch-45-stainless-gold-cell-8s_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MEp1NU0yNHJrRzJPTzV4alVta3BRcXZRZ1hOcVY2RkQyZ3g1TjVWNUdaMldjVDc2clhvcXZOU1M1U3RlemFORHB1YzFsU05nMlF0Nkd0Y0I4UzNzdUpqVFl2bmxURTQ4cGhNd1ZSc0QwV2FUL0lZZVB3VEk3YUlXcGRVOUVWelo4VDErMDlYT1NRTDZKczBJam9aSlhWUXlIcWowbThNZW12RmpOQ3k0eXBvZ2tqV0o1djdObGJpZlgzbWkyaEpH" checkoutHandler={checkoutHandler}/>
            <Card amount={3000} img="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQEC3_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-ocean-ultra_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=L2xFdUludVRmNllRZElFaXVzWXVGL3Z4OU1ucmxYekw5aGF6a2ZZcG9hbkhmeDE0UzBCYy9MWjZjaXZ0WGh1azExZWZnQ1FqQU1WOTVsQlNVKyt2L1crdm1LU3F2cVFnNjJkbzRraFNhQyttNXpXVkkyRFpDM29hMXdIeExleTRtTk5pK2VWTVRqeW1FekJWR3dQUlpwUDhoaDQvQk1qdG9oYWwxVDBSWE5ueFBYN1QxYzVKQXZvbXpRaU9oa2xkVkRJZXFQU2J3eDZhOFdNMExMakttbnpKdTVCTEJ1MjBnR1dHUzcxVUxrRT0" checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home