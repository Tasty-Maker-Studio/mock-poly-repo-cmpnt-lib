import { VStack } from '@tms/styled-system/jsx';
import { TopFold } from '../components/top-fold';
import { ImageBar } from '../components/image-bar';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
      <VStack>
        <TopFold />
        <ImageBar />
      </VStack>
  );
}
