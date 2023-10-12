import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        palette: {
            primary: {
                mode: 'light',
                primary: {
                    main: '#027A4D',
                },
                secondary: {
                    main: '#4CDA89',
                },
                background: {
                    default: '#F1F1F1',
                },
                text: {
                    primary: '#333333',
                },
                error: {
                    main: '#b74545',

                },
            },
            typography: {
                fontFamily: 'Product Sans Medium',
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: `
       @import url('https://fonts.cdnfonts.com/css/white-love');
       @import url('https://fonts.cdnfonts.com/css/product-sans')
}
      `,
                },
            },
            MuiCssBaseline: {
                styleOverrides: `
            @import url('https://fonts.cdnfonts.com/css/product-sans');

      `,
            },
        },
    }
});