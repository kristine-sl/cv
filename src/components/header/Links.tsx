import { Github, Linkedin } from '@emotion-icons/fa-brands';
import { Icon, IconButton } from '@mui/material';

export const Links = () => (
  <>
    <IconButton
      href="https://www.linkedin.com/in/kristinesundtlorentzen/"
      color="secondary"
      aria-label="LinkedIn"
    >
      <Icon component={Linkedin} />
    </IconButton>
    <IconButton
      href="https://github.com/kristine-sl/cv"
      color="secondary"
      aria-label="Github repo"
    >
      <Icon component={Github} />
    </IconButton>
  </>
);
