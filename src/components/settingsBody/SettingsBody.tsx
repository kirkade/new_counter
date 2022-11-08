import React, {ChangeEvent} from 'react';

type SettingsBodyType = {
    maxvalue: number
    startvalue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setError: (message: string) => void

}

export const SettingsBody = (props: SettingsBodyType) => {

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.valueAsNumber < 0) {
            props.setError('maxvalue should be more than 0')
        } else if (event.currentTarget.valueAsNumber === props.startvalue) {
            props.setError('maxvalue equal to startvalue')
        }
        props.setMaxValue(event.currentTarget.valueAsNumber)
    }

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.valueAsNumber < 0) {
            props.setError('startvalue should be more than 0')
        } else if (event.currentTarget.valueAsNumber === props.maxvalue) {
            props.setError('maxvalue equal to startvalue')
        }
        props.setStartValue(event.currentTarget.valueAsNumber)
    }

    return (
        <div className={'settings'}>
            <span style={{marginRight:'10px',color:'#1976d2'}}>maxvalue</span>
            <input type='number' value={props.maxvalue} onChange={onChangeMaxValue}/>
            <span style={{marginRight:'10px',color:'#1976d2'}}>startvalue</span>
            <input type='number' value={props.startvalue} onChange={onChangeStartValue}/>
        </div>
    );
};

