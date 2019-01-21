import { createStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = theme => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 300,
  },
  button: {
    margin: theme.spacing.unit,
    width: 150,
  },
  input: {
    display: 'none',
  },
  fieldText: {
    color: 'inherit',
    width: '95%',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 6,
    width: '50%',
  }
});