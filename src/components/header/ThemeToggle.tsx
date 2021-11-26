import { DarkMode, LightMode } from '@emotion-icons/material-outlined';
import { Icon, IconButton } from '@mui/material';

export interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <IconButton
      color="secondary"
      aria-label="Github.com"
      onClick={() => toggleTheme()}
    >
      <Icon component={theme === 'light' ? DarkMode : LightMode} />
    </IconButton>
  );
};
