import React from 'react';

type ButtonType = {
    title: string;
    callback?: () => void;
}

export const Button = (props: ButtonType) => {
    return (
        <>
            <button onClick={props.callback}>{props.title}</button>
        </>
    );
};

