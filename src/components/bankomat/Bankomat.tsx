import React from 'react';
import {FilterValueType, MoneyType} from "../../App";
import {Button} from "./Button";

type BankomatType = {
    filteredMoney: MoneyType[]
    filterValue: (filter: FilterValueType) => void
}

export const Bankomat = (props: BankomatType) => {

    return (
        <div>
            <ul>
                {props.filteredMoney.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>{item.banknots}</span>
                                <span>{item.value}</span>
                                <span>{item.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div style={{margin: '15px'}}>
                <Button title={'ALL'} callback={() => props.filterValue('all')}/>
                <Button title={'DOLLARS'} callback={() => props.filterValue('dollars')}/>
                <Button title={'RUBLES'} callback={() => props.filterValue('rubles')}/>
            </div>

        </div>
    );
};

