import { getComponentData } from '@/lib/components';
import { slidingGalleryDefault } from '@/lib/defaultComponentsData';
import SlidingGallery from './SlidingGallery';

export default async function DynamicSlidingGallery() {
  const data = await getComponentData('sliding_gallery', slidingGalleryDefault);
  
  if (!data?.images || data.images.length === 0) {
    return null;
  }

  return <SlidingGallery images={data.images} />;
}
