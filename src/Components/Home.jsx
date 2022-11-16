import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: '4',
    size: '4xl'

}

const Home = () => {
    return (
        <Box>
            <MyCarousel></MyCarousel>

            <Container maxWidth={'container.xl'} minH={'100vh'} p={'16'}>

                <Heading textTransform={"uppercase"} py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m={'auto'}
                >
                    Services
                </Heading>

                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}

                >

                    <Img src={img5} h={['40', '400']} filter={'hue-rotate(130deg)'}></Img>

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid deserunt accusantium doloribus commodi quos culpa quam velit sit eaque provident est consectetur, amet doloremque, sunt delectus ipsam adipisci fuga?
                        Reiciendis maiores veritatis fuga eos quae ab velit. Quia reiciendis earum consequatur voluptatem assumenda voluptatum, ut quibusdam recusandae, beatae perspiciatis maiores. Itaque culpa voluptates porro odio totam. Inventore, quae. Maxime.
                        Error architecto explicabo tenetur quae, veritatis aliquid iusto distinctio dignissimos deleniti molestiae omnis, repudiandae amet eligendi facilis magnam aspernatur eius. Ut itaque odit eveniet repellat incidunt, aut molestiae. Dolore, incidunt.
                        Amet soluta quae vero id quis harum a distinctio in dolore neque, natus nobis suscipit, inventore quod aperiam reprehenderit eveniet? Sunt aliquid assumenda error temporibus, vitae at odio ullam nesciunt?
                        Officiis obcaecati, repudiandae omnis eos veritatis vero modi ab commodi ipsum exercitationem ullam, itaque cupiditate facilis debitis nisi. Delectus totam corporis debitis. Corrupti harum praesentium, a magni voluptas unde culpa.
                    </Text>

                </Stack>


            </Container>
        </Box>
    )
};

const MyCarousel = () => (


    <Carousel autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >


        <Box w={'full'} h={'100vh'}>

            <Img src={img1} />
            <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>The New World Order</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img2} />
            <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>A World Dominated By Games</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Console Gaming</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>

            <Img src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>State Of The Art Games</Heading>
        </Box>

    </Carousel>


);

export default Home;
