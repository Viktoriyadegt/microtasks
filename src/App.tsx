import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/input/FullInput";



 export type MoneyType = {
     banknots: string,
     value: number,
     number: string
 }

 export type FilterValueType = 'all' | 'rubles' | 'dollars'

export type MessageType = {
    id: number
    message: string
}


function App() {

    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]


    /*
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
    */

       // let [count, setCount] = useState<number>(0);
       //
       // const increment = () => {
       //     console.log(count)
       //     setCount(++count)
       // }
       //
       // const reset = () => {
       //     console.log(count)
       //     setCount(0)
       // }



    let [messages,setMessages] = useState<MessageType[]>([
         {id: 1, message: 'message1'},
         {id: 2, message: 'message2'},
         {id: 3, message: 'message3'},
     ])

    const addMessage = (message: string) => {
        setMessages( [{id: 4, message}, ...messages])
    }


    return (

        <div >
       {/* <div style={{margin: '20px'}}>*/}
            {/*<div style={{fontSize: '30px', textAlign: 'center'}}>*/}
            <div style={{fontSize: '30px'}}>
                {/*<TopCars cars={topCars}/>*/}
                {/* <Bankomat filteredMoney={filteredMoney} filterValue={filterValue}/>*/}
                {/*<Counter count={count} reset={reset} increment={increment}/>*/}

                <FullInput addMessage={addMessage}/>

                <ul>
                    {messages.map(message => {
                        return (
                            <li key={message.id}>
                                <span>{message.message}</span>
                            </li>
                        )
                    })}

                </ul>


            </div>
        </div>
    );
}

export default App;
