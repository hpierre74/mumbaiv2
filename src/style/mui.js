import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    secondary: {
      main: '#0a0a0a',
      light: '#0a0a0a',
      dark: '#0a0a0a',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.87)',
      light: '#FFF',
      dark: '#FFF',
    },
    error: red,
    default: blue,
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
    background: {
      paper: '#0a0a0a',
      default: '#0a0a0a',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.14)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: `0px 1px 3px 0px rgba(255, 255, 255, 0.2), 0px 1px 1px 0px rgba(255, 255, 255, 0.14), 0px 2px 1px -1px rgba(255, 255, 255, 0.12)`,
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        background: 'transparent',
      },
      focusVisible: {
        background: 'transparent',
      },
    },
  },
});

export default muiTheme;
