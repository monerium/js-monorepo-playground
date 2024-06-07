"use client";
import { experimental_extendTheme } from "@mui/material/styles";
// Creating new component variants, like <Button variant="rounded" />
// https://mui.com/material-ui/customization/theme-components/#creating-new-component-variants

// Palette: https://mui.com/customization/palette/
const theme = experimental_extendTheme({
  // cssVarPrefix: '', // defaults to 'mui', like: --mui-palette-primary-main
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"'].join(","),
  },
});

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export default theme;
