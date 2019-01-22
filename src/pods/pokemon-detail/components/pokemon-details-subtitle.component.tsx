import { Typography } from "@material-ui/core";
import React from "react";

interface InternalProps {
    type: string;
    value: any;
}

export const PokemonDetailsSubtitle = (props: InternalProps) =>
    <span style={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography variant={'h6'} style={{ width: '120px', textTransform: 'capitalize', }}>{props.type}</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant={'subheading'} style={{ width: '120px', textTransform: 'capitalize', }}>{props.value}</Typography>
    </span>

