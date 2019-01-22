import { createStyles } from "@material-ui/core/styles";

export const styles = theme => createStyles({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '500px',
        overflow: 'auto',
    },
    cardHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
    }
});