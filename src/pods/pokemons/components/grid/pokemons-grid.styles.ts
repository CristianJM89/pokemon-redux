import { createStyles } from "@material-ui/core/styles";

export const styles = () => createStyles({
    pokemon: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
        },
        fontFamily: "Roboto",   
    },
    idLink: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#06c',
    },
    tableHead: {
        backgroundColor: '#3f51b5',
    },
    tableCellStyle: {
        color: 'white',
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 'bolder',
    },
});