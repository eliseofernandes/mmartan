import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleDiv: {
      flexGrow: 1,
    },
    title: {
      width: 140,
      height: 28,
    },
    input: {
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
      },
    },
  }),
);

export default useStyles;
