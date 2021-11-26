import { Category as CategoryIcon } from '@emotion-icons/material-outlined';
import {
  Articles as ArticlesComponent,
  Categories,
  List as ListComponent,
  Timeline as TimelineComponent,
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
