import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: "border-box"
    },
    detailTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: 'auto',
        flexBasis: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 1,
        minHeight: '332px',
        minWidth: '220px',
        boxSizing: "border-box",
    },
    pokemonBody: {
        textAlign: 'justify',
        flexBasis: '80%',
        padding: '1rem 7rem',
        flexGrow: 1,
        boxSizing: "border-box",
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    linkBack: {
        padding: '12px',
    }
});
