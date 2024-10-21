import React, {useState} from 'react';
import './App.css';
import {Bankomat} from "./components/bankomat/Bankomat";


export type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

export type FilterValueType = 'all' | 'rubles' | 'dollars'


function App() {

    // const topCars = [
    //   {manufacturer:'BMW', model:'m5cs'},
    //   {manufacturer:'Mercedes', model:'e63s'},
    //   {manufacturer:'Audi', model:'rs6'}
    // ]


    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterValueType>('all');
    let filteredMoney = money;
    if (filter === 'dollars') {
        filteredMoney = filteredMoney.filter(f => f.banknots === 'Dollars')
    }

    if (filter === 'rubles') {
        filteredMoney = filteredMoney.filter(f => f.banknots === 'RUBLS')
    }

    const filterValue = (filter: FilterValueType) => {
        setFilter(filter)
    }


    return (
        <div>
            {/*<TopCars cars={topCars}/>*/}
            <Bankomat filteredMoney={filteredMoney}
                      filterValue={filterValue}
            />


        </div>
    );
}

export default App;
