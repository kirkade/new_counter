import React, {useEffect, useState} from 'react';

import './App.css';
import {CounterBody} from "./components/counter/CounterBody";
import {MyButton} from "./components/button/MyButton";
import {SettingsBody} from "./components/settingsBody/SettingsBody";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [settingsOn, setSettingsOn] = useState<boolean>(false)
    const [error,setError] = useState<string>('')

    const increment = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(0)
        localStorage.clear()
    }

    const set = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setSettingsOn(!settingsOn)
        setCounter(startValue)

    }

    useEffect(() => {
        let counterAsString = localStorage.getItem('startValue')
        if (counterAsString) {
            let newValue = JSON.parse(counterAsString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])

    return (
        <div className="App">
            <div className={'container'}>
                <div className={'body'}>
                    {settingsOn
                        ? <SettingsBody maxvalue={maxValue} setMaxValue={setMaxValue} startvalue={startValue}
                                        setStartValue={setStartValue} setError={setError}/>
                        : <CounterBody counter={counter} error={error}/>
                    }
                </div>
                <div className={'buttons'}>
                    {!settingsOn && <MyButton name={'inc'} callback={increment}/>}
                    <MyButton name={'set'} callback={set}/>
                    {!settingsOn && <MyButton name={'reset'} callback={reset}/>}
                </div>
            </div>
        </div>
    );
}

export default App;
