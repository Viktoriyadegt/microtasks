import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../../App";

type FullInputProps = {
    messages: MessageType[]
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

            <ul>
                {props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <span>{message.message}</span>
                        </li>
                    )
                })}

            </ul>

        </div>
    );
};

