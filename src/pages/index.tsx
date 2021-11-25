import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import type { NextPage } from 'next';
import education from '../../assets/data/education.json';
import experience from '../../assets/data/experience.json';
import lookingFor from '../../assets/data/lookingFor.json';
import other from '../../assets/data/other.json';
import profile from '../../assets/data/profile.json';
import research from '../../assets/data/research.json';
import image from '../../public/images/profile_image.webp';
import { CategoryData } from '../components/categories/Category';
import { Header } from '../components/header/Header';
import { Content } from '../components/Content';

const Home: NextPage = () => {
  const categories: CategoryData[] = [
    {
      header: 'categories.experience',
      icon: WorkOutline,
      type: 'timeline',
      data: experience,
      order: { xs: 1, xl: 1 },
    },
    {
      header: 'categories.education',
      icon: School,
      type: 'timeline',
      data: education,
      order: { xs: 2, xl: 3 },
    },
    {
      header: 'categories.research',
      icon: Biotech,
      type: 'articles',
      data: research,
      order: { xs: 3, xl: 2 },
    },
    {
      header: 'categories.other',
      icon: Article,
      type: 'articles',
      data: other,
      order: { xs: 4, xl: 4 },
    },
    {
      header: 'categories.lookingFor',
      icon: Help,
      type: 'list',
      data: lookingFor,
      order: { xs: 5, xl: 5 },
    },
  ];

  return (
    <>
      <Header
        linkedIn="https://www.linkedin.com/in/kristinesundtlorentzen/"
        github="https://github.com/kristine-sl/cv"
        email="kristine.sundt.lorentzen@gmail.com"
      />
      <Content image={image} profile={profile} categories={categories} />
    </>
  );
};

export default Home;
