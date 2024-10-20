import React from 'react';

type TopCarsTYpe = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}
export const TopCars = (props: TopCarsTYpe) => {
    return (

        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((m, index) => {
                return (
                    <tr key={index}>
                        <td>{m.manufacturer}</td>
                        <td>{m.model}</td>
                    </tr>
                )
            })}
            </tbody>

        </table>
    );
};
