import { createMuiTheme } from '@material-ui/core';

import { ptBR } from '@material-ui/core/locale';
import global from './global';

const theme = createMuiTheme(
  {
    overrides: {
      MuiCssBaseline: {
        '@global': { global },
      },
    },
  },
  ptBR,
);

export default theme;
