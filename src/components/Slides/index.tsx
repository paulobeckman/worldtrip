import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type SlidesProps = {
  continents:{
    slug: string;
    title: string;
    caption: string;
    image: string;
  }[]
}

export default function Slides({continents}: SlidesProps) {
  return (
    <Flex
      w="100%"
      h={["15.625rem","18.125rem"]}
      mb={["10","20"]}
      mx="auto"
      maxW="77.5rem"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:4000,
        }}
        style={{width: '100%', flex: '1'}}
      > 
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h={["10.188rem", "15.625rem", "15.625rem", "20.938rem"]}
              align="center"
              justify="center"
              textAlign="center"
              bgImage={`url('${continent.image}')`}
              bgSize="cover"
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    color="gray.50"
                    fontWeight="bold"
                    fontSize={["3xl","4xl","5xl"]}
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.100"
                    fontSize={["0.8rem","1xl", "2xl"]}
                    mt={["2","4"]}
                  >
                    {continent.caption}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
