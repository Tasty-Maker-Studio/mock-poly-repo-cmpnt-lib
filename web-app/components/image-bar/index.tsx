import Image from 'next/image';
import { HStack, Box} from '@tms/styled-system/jsx';
import { css} from '@tms/styled-system/css';
import {ImageToggle } from '@tms/design-system/ImageToggle';


const getImages = (imageList: any[]) => {
    return imageList.map((image, index) => (
        <Image
            key={index}
            width={500}
            height={0}
            className={css({
                width: '100%',
                height: '100%'
            })}
            src={image.imgSrc}
            objectFit={'cover'}
            alt="this is an image"
        />
    ));
};

const  ImageBar = ()=>{
    const imageSets = [
        [
            {
                imgSrc:
                    'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=601'
            },
            {
                imgSrc:
                    ' https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=601'
            }
        ],
        [

            {
                imgSrc:
                    'https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=601'
            },
            {
                imgSrc:
                    'https://images.unsplash.com/photo-1651055183233-13e372fbfe51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxhaXIlMjBqb3JkYW4lMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=601'
            }
        ]
    ];
    return (
        <HStack w={'1030px'} gap={'30px'}>
            {imageSets.map(
                (item, index) => {
                    const imageNode = getImages(item);
                    return (
                        <Box key={index} w={'500px'}>
                                    <ImageToggle >
                                        {imageNode}
                                    </ImageToggle>
                        </Box>
                    )
                  }
                )
            }
        </HStack>
    )

}

export { ImageBar};
