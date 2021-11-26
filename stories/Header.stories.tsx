import { Header } from '../src';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header
    linkedIn="https://www.linkedin.com/in/kristinesundtlorentzen/"
    github="https://github.com/kristine-sl/cv"
    email="kristine.sundt.lorentzen@gmail.com"
    theme="light"
    toggleTheme={() => {}}
    locale="en"
    updateLocale={() => {}}
  />
);

// export const Dark = () => (
//   <Header
//     linkedIn="https://www.linkedin.com/in/kristinesundtlorentzen/"
//     github="https://github.com/kristine-sl/cv"
//     email="kristine.sundt.lorentzen@gmail.com"
//     theme="dark"
//     toggleTheme={() => {}}
//     locale="en"
//     updateLocale={() => {}}
//   />
// );
