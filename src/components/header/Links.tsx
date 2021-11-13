import { Github, Linkedin } from '@emotion-icons/fa-brands';
import { Icon, IconButton } from '@mui/material';

export const Links = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/in/kristinesundtlorentzen/"
        color="secondary"
        aria-label="LinkedIn.com"
      >
        <Icon component={Linkedin} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/kristinesundtlorentzen/"
        color="secondary"
        aria-label="Github.com"
      >
        <Icon component={Github} />
      </IconButton>
    </>
  );
};
