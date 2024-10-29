import React, {ChangeEvent, useState} from 'react';

type FullInputProps = {
    addMessage: (message: string) => void
}

export const FullInput = (props: FullInputProps) => {

    let [message, setMessage] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(message)
        setMessage('')
    }



    return (
        <div>
            <input type="text" value={message} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>

        </div>
    );
};

