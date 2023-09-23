import { Header } from '../src';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header
    linkedIn="https://www.linkedin.com/"
    github="https://github.com/"
    instagram="https://www.instagram.com/"
    email="kristine.sundt.lorentzen@gmail.com"
    theme="light"
    toggleTheme={() => {}}
    locale="en"
    updateLocale={() => {}}
  />
);
