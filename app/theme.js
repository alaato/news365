import { extendTheme } from "@mui/joy";
 const theme = extendTheme({
    fontFamily: {
      body: 'Noto Sans Arabic, var(--gh-fontFamily-fallback)',
    },
    colorSchemes: {
      light: {
        palette: {
          white: {
            50: '#ffffff',
            100: '#ffffff',
            200: '#ffffff',
            300: '#ffffff',
            400: '#ffffff',
            500: '#ffffff',
            600: '#ffffff',
            700: '#ffffff',
            800: '#ffffff',
            900: '#ffffff',
          },
        },
      },
    },
    components: {
    JoyCard: {
      defaultProps: {
        size: 'md',
      },
      styleOverrides: {
        root: {
          '--Card-radius': '0px',
        },
      },
    },
}});
  export default theme;