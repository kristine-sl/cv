import { Category as CategoryIcon } from '@emotion-icons/material-outlined';
import {
  Articles as ArticlesComponent,
  Categories,
  List as ListComponent,
  Timeline as TimelineComponent,
  Gallery as GalleryComponent,
} from '../src';
import { Category as CategoryComponent } from '../src/components/categories/Category';

export default {
  title: 'Categories',
  component: Categories,
};

const timelineExampleData = [
  {
    startYear: 2020,
    endYear: 2021,
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    description: 'This is a longer description of the timeline item.',
    keywords: 'keyword1, keyword2, keyword3',
  },
  {
    startYear: 2020,
    title: 'Title 2',
    subtitle: 'Subtitle 2',
  },
];

export const Timeline = () => (
  <CategoryComponent header="Timeline" icon={CategoryIcon}>
    <TimelineComponent data={timelineExampleData} />
  </CategoryComponent>
);

const articlesExampleData = [
  {
    type: 'Article type 1',
    title: 'Title 1',
    startDate: '2020-01-01T00:00:00.000',
    endDate: '2021-01-01T00:00:00.000',
    source: 'Source 1',
    link: 'https://www.kristinesl.me',
    description: 'This is a longer description of the article.',
  },
  {
    type: 'Article type 2',
    title: 'Title 2',
    startDate: '2020-08-01T00:00:00.000',
    description: 'This is another longer description of the article.',
  },
];

export const Articles = () => (
  <CategoryComponent header="Articles" icon={CategoryIcon}>
    <ArticlesComponent data={articlesExampleData} />
  </CategoryComponent>
);

const listExampleData = ['List item 1', 'List item 2', 'List item 3'];

export const List = () => (
  <CategoryComponent header="List" icon={CategoryIcon}>
    <ListComponent data={listExampleData} />
  </CategoryComponent>
);

const galleryExampleData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export const Gallery = () => (
  <CategoryComponent header="Gallery" icon={CategoryIcon}>
    <GalleryComponent data={galleryExampleData} />
  </CategoryComponent>
);
