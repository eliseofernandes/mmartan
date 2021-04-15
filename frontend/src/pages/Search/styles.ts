import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      flexGrow: 1,
      height: '100vh',
    },
    title: {
      flexGrow: 1,
      backgroundColor: '#dcdcdc',
    },
    loadingColorPrimary: {
      background: 'rgb(223, 190, 127)',
    },
    loadingBarColorPrimary: {
      backgroundColor: '#dcdcdc',
    },
    dividerTotal: {
      background: 'rgb(223, 190, 127)',
      height: 3,
      width: 242,
    },
  }),
);

export default useStyles;
