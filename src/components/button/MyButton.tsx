import {Button} from "@mui/material";

type ButtonsType = {
    name: string,
    callback: () => void,
    class?: string,
    disabled?: boolean,
}

export const MyButton = (props: ButtonsType) => {

    return (
        <div>
            <Button variant='contained' color='primary' style={{margin:'10px'}} disabled={props.disabled} className={props.class}
                    onClick={() => props.callback()}>{props.name}</Button>
        </div>
    )
}