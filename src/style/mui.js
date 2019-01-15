import { createMuiTheme } from '@material-ui/core/styles';

export const createTheme = theme =>
  createMuiTheme({
    typography: { useNextVariants: true },
    palette: {
      common: {
        black: '#000',
        white: '#fff',
        type: 'dark',
        ...theme.palette.common,
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
        ...theme.palette.primary,
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText: '#fff',
        ...theme.palette.secondary,
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
      },
      tonalOffset: 0.2,
      contrastThreshold: 3,
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(255, 255, 255, 0.87)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        default: '#fff',
        hint: 'rgba(0, 0, 0, 0.38)',
        divider: 'rgba(0, 0, 0, 0.12)',
        ...theme.palette.text,
      },
      background: {
        paper: '#fafafa',
        default: '#fafafa',
        ...theme.palette.background,
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(0, 0, 0, 0.14)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        ...theme.palette.action,
      },
    },
    overrides: {
      MuiCardActionArea: {
        focusHighlight: { background: 'transparent' },
        focusVisible: { background: 'transparent' },
      },
      MuiCardHeader: {
        root: {
          margin: 0,
          background: theme.palette.primary.main,
          color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        },
        title: {
          color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        },
      },
      MuiSvgIcon: {
        colorSecondary: {
          color: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        },
      },
      MuiFormLabel: {
        root: {
          color: 'rgba(0,0,0,0.3)',
        },
      },
    },
  });

const muiTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      type: 'dark',
    },
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    tonalOffset: 0.2,
    contrastThreshold: 3,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      default: '#fff',
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    background: {
      paper: '#fafafa',
      default: '#fafafa',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  overrides: {
    MuiCardActionArea: {
      focusHighlight: { background: 'transparent' },
      focusVisible: { background: 'transparent' },
    },
    MuiCardHeader: {
      root: {
        margin: 0,
        background: '#3f51b5', //primary
        color: 'rgba(255, 255, 255, 0.87)', // light => white
      },
      title: {
        color: 'rgba(255, 255, 255, 0.87)', // light => white
      },
    },
    MuiSvgIcon: {
      colorSecondary: {
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(0,0,0,0.3)',
      },
    },
  },
});

export default muiTheme;
