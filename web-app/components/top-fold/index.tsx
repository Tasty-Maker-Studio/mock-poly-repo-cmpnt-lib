import Image from 'next/image';
import Link from 'next/link';
import {Button } from '@tms/design-system/Button'
import {SplashSection} from '@tms/design-system/SplashSection';
const getImageNode = (imgSrc: string, altText: string) => {
    return (
        <Image
            src={imgSrc}
            alt={altText}
            fill={true}
            style={{
                aspectRatio: 'widescreen',
                position: 'absolute',
                top: '0px',
                left: '0px',
                objectFit: 'cover',
                objectPosition: 'center center',
                opacity: 1,
                transition: 'opacity 500ms ease 0s',
                overscrollBehavior: 'contain',
                overflowClipMargin: 'content-box',
                boxSizing: 'border-box',
                overflow: 'clip'
            }}
        />
    );
};

const getSplashButtonNode = (exploreUrl: string, exploreButtonText: string) => {
    return (
        <Button variant="accent" fill="outline">
            <Link
                href={exploreUrl}
                style={{
                    color: 'white',
                    textDecoration: 'none'
                }}
            >
                {exploreButtonText}
            </Link>
        </Button>
    );
};

const TopFold=  () => {
    const currentImageUrl =
        'https://burst.shopifycdn.com/photos/yellow-pillow-bedside-table.jpg?width=925&format=pjpg&exif=1&iptc=1';
    const imageAltText = 'splash image';
    const exploreUrl = 'http://www.google.com';
    const exploreButtonText = 'Explore Products';
    const splashNode: React.ReactNode = getImageNode(currentImageUrl, 'splash image');

    return (
        <SplashSection
            title="Abodephile"
            splashImageNode={splashNode as React.ReactElement}
            buttonNode={getSplashButtonNode(exploreUrl, exploreButtonText)}
        />
    );
};

export { TopFold };
