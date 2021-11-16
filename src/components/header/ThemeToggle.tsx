import { DarkMode, LightMode } from '@emotion-icons/material-outlined';
import { Icon, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggle } from '../../slices/themeSlice';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <IconButton
      color="secondary"
      aria-label="Github.com"
      onClick={() => dispatch(toggle())}
    >
      <Icon component={theme === 'light' ? DarkMode : LightMode} />
    </IconButton>
  );
};
