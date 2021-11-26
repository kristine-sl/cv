import { Github, Linkedin } from '@emotion-icons/fa-brands';
import { Icon, IconButton } from '@mui/material';

interface LinksProps {
  github?: string;
  linkedIn?: string;
}

export const Links = ({ github, linkedIn }: LinksProps) => (
  <>
    {linkedIn && (
      <IconButton href={linkedIn} color="secondary" aria-label="LinkedIn">
        <Icon component={Linkedin} />
      </IconButton>
    )}

    {github && (
      <IconButton href={github} color="secondary" aria-label="Github">
        <Icon component={Github} />
      </IconButton>
    )}
  </>
);
