import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Checkbox,
    FormControlLabel,
    Typography,
    TextField,
} from '@material-ui/core';

export const ToDo = ({header, text, isCompleted}) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                <FormControlLabel
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                    control={<Checkbox checked={isCompleted}/>}
                    label={header}
                />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography color="textSecondary">
                    {text}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};
