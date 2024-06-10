'use client';
import { experimental_extendTheme } from '@mui/material/styles';

// Creating new component variants, like <Button variant="rounded" />
// https://mui.com/material-ui/customization/theme-components/#creating-new-component-variants
declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    plain: true;
  }
}

// Palette: https://mui.com/customization/palette/
const theme = experimental_extendTheme({
  // cssVarPrefix: '', // defaults to 'mui', like: --mui-palette-primary-main
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"'].join(','),
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'plain' },
          style: {
            textTransform: 'none',
            border: 'none',
            backgroundColor: '#fff',
            ':hover': {
              backgroundColor: '#B3B3B3',
            },
            '&.Mui-disabled': {
              backgroundColor: '#B3B3B3',
              color: 'var(--mui-palette-text-primary)',
            },
          },
        },
        {
          props: { disabled: true, variant: 'plain' },
          style: {
            // backgroundColor: '#B3B3B3',
            backgroundColor: 'red',
            color: 'red',
            // color: 'var(--mui-palette-text-primary)',
          },
        },
      ],
    },
  },
});

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export default theme;
