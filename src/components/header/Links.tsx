import { Github, Instagram, Linkedin } from '@emotion-icons/fa-brands';
import { Icon, IconButton } from '@mui/material';

interface LinksProps {
  github?: string;
  linkedIn?: string;
  instagram?: string;
}

export const Links = ({ github, linkedIn, instagram }: LinksProps) => (
  <>
    {linkedIn && (
      <IconButton href={linkedIn} color="secondary" aria-label="LinkedIn">
        <Icon component={Linkedin} suppressHydrationWarning />
      </IconButton>
    )}
    {github && (
      <IconButton href={github} color="secondary" aria-label="Github">
        <Icon component={Github} suppressHydrationWarning />
      </IconButton>
    )}
    {instagram && (
      <IconButton href={instagram} color="secondary" aria-label="Instagram">
        <Icon component={Instagram} suppressHydrationWarning />
      </IconButton>
    )}
  </>
);
