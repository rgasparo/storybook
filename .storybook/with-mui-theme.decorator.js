import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import stylesV2 from './themes/styles-v2'
import GlobalStyles from '@mui/material/GlobalStyles'

import { themes } from './themes';

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey])
  
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story/>
      <GlobalStyles styles={stylesV2} />
    </ThemeProvider>
    );
  };
