import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultImage from "../assets/house-default.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={260}
            alt="house"
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                USD {millify(price * 0.27)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            padding="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          ></Flex>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
