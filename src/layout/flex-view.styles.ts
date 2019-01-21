import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  '@global': {
    'body, html, #root': {
      margin: 0,
      padding: 0,
      width: '100%',
    }
  },
  container: {
    alignItems: 'center',
    width: '100wh',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: theme.palette.grey['200'],
  },
});
