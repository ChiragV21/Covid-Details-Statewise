import React, { useEffect, useState } from 'react';
import './newstyle.css';
const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <h1 className="header">INDIA COVID-19 DASHBOARD</h1>

            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{curElem.state}</td>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.active}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    );
};

export default Statewise;