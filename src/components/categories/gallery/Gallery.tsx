import { ImageList, ImageListItem } from '@mui/material';
import { useCategoryHeader } from '../CategoryContext';
import { CategoryHeader } from '../CategoryHeader';

interface GalleryProps {
  data: { img: string; title: string }[];
}

export const Gallery = ({ data }: GalleryProps) => {
  const header = useCategoryHeader();

  return (
    <>
      {header && <CategoryHeader {...header} />}
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.map(item => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
