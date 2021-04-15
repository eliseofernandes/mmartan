import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginBottom: 5,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
    },
  }),
);

export default useStyles;
