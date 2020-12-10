import React, { useContext, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";

import FuncsSettingForm from "./FuncsSettingForm"
import { ContextBranch, ContextLinear } from './ContextProvider'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch'
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    customWidth: {
        maxWidth: 500,
    },

}))

const LinearPipesForm = ({ ifLinear, index, mid }) => {
    const classes = useStyles()
    const [inputBranchStates, dispatchB] = useContext(ContextBranch);
    const [inputLinearStates, dispatchL] = useContext(ContextLinear);
    const [inputStates, setInputStates] = useState(() => {
        if (ifLinear) {
            return inputLinearStates;
        } else {
            return inputBranchStates[index].linearSetting;
        }
    });

    const handleLinearPipesInput = (id, event) => {
        const newInputFields = inputStates.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
                i[event.target.name + 'Check'] = false;
            }
            return i;
        })
        
        if (ifLinear) {
            dispatchL({ type: 'UPDATE_STEPSETS', data: newInputFields });
        } else {
            const newValue = inputBranchStates;
            newValue[index].linearSetting = newInputFields;
            dispatchB({ type: 'UPDATE_STEPSETS', data: newValue });
        }
        setInputStates(newInputFields);
    }

    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                {inputStates.map((inputField, indexf) => (
                    <div key={inputField.id}>
                        <h4>stepSet {indexf + 1}</h4>
                        <Tooltip title={<Typography variant='body2'>{`describe main work in this stepSet, eg.'_load'`}</Typography>} classes={{ tooltip: classes.customWidth }}>
                        <TextField
                            error={inputField.stepIDCheck}
                            name="stepID"
                            label="stepID"
                            variant="filled"
                            helperText={inputField.stepIDCheck ? 'The field cannot be empty. Please enter a value' : null}
                            value={inputField.stepID}
                            onChange={event => handleLinearPipesInput(inputField.id, event)}
                        />

                        </Tooltip>
                        
                        <FuncsSettingForm
                            ifLinear={ifLinear}
                            index={index}
                            indexm={indexf}
                            classes={classes}
                            mid={inputField.id}
                            funcsSettings={inputField.funcsSettings} />
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default LinearPipesForm;