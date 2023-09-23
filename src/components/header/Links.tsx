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
      <IconButton
        href={linkedIn}
        color="secondary"
        aria-label="LinkedIn"
        suppressHydrationWarning
      >
        <Icon component={Linkedin} suppressHydrationWarning />
      </IconButton>
    )}
    {github && (
      <IconButton
        href={github}
        color="secondary"
        aria-label="Github"
        suppressHydrationWarning
      >
        <Icon component={Github} suppressHydrationWarning />
      </IconButton>
    )}
    {instagram && (
      <IconButton
        href={instagram}
        color="secondary"
        aria-label="Instagram"
        suppressHydrationWarning
      >
        <Icon component={Instagram} suppressHydrationWarning />
      </IconButton>
    )}
  </>
);
