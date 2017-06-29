
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import { red, yellow } from 'material-ui/styles/colors';


const theme = createMuiTheme({
  palette: createPalette({
    primary: red, // Purple and green play nicely together.
    accent: {
      ...yellow,
    },
    error: red,
  }),
});


export default theme;
