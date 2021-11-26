import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { addDecorator } from '@storybook/react';
import { IntlProvider } from 'react-intl';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

addDecorator((story) => (
  <ThemeProvider theme={createTheme()}>
    <CssBaseline />
    <IntlProvider
      locale="en"
      messages={{
        keywords: 'Keywords',
        contentDescription: 'CV site for Kristine Sundt Lorentzen',
        'header.contact': 'Contact',
        'header.print': 'Print',
        'header.download': 'Download',
        'profile.picture': 'Profile picture',
        'profile.jobTitle': 'Senior developer',
        'profile.about.description':
          "I am passionately interested in usability and love to be challenged both technically and creatively. I have been luck enough to get experience with many different technologies, and I've learned a lot about how to present data in an efficient and visually appealing way.",
        'profile.info.age': '{age} years old',
        'profile.info.location': 'Oslo, Norway',
        'profile.references.description':
          'References and certificates are provided upon request.',
      }}
    >
      {story()}
    </IntlProvider>
  </ThemeProvider>
));
