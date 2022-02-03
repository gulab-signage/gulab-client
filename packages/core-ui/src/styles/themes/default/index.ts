import { createTheme } from '@mui/material';
import components from './components';
import palette from './palette';
import typography from './typography';

export default createTheme({
  name: 'default',
  components,
  palette,
  typography,
});
