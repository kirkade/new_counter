import React from 'react';

type CounterBodyType = {
    counter:number
    error:string
}

export const CounterBody = (props:CounterBodyType) => {
    return (
        <div>
            {props.error
                ? props.error
                : <h2>{props.counter}</h2>
            }
        </div>
    );
};

