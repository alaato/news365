import {buttonClasses} from "@mui/joy/Button";
import { extendTheme } from "@mui/joy";
 const theme = extendTheme({
    direction: 'rtl',
    fontFamily: {
      body: 'Noto Sans Arabic, var(--gh-fontFamily-fallback)',
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
    JoyButton: {
      defaultProps: {
        variant: 'usual'
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'usual' && {
            alignSelf: 'center',
            appearance: 'none',
            backgroundColor: 'transparent',
            border: '2px solid #1A1A1A',
            borderRadius: '15px',
            boxSizing: 'borderbox',
            color: '#3B3B3B',
            cursor: 'pointer',
            display: 'inlineblock',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: 'normal',
            margin: '0',
            height: '60px',
            minWidth: '0',
            outline: 'none',
            padding: '16px 24px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 300ms cubicbezier(.23, 1, 0.32, 1)',
            userSelect: 'none',
            webkituserselect: 'none',
            touchAction: 'manipulation',
            maxWidth:'150px',
            willChange: 'transform',
          }),
        }),
    },
  },
}});
  export default theme;