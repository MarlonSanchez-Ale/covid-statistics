import React, { useEffect, useState } from 'react'
import { TotalReports } from '../../../data/FetchWrapper'
import { Card, List, ListItem, Title } from "@tremor/react";
import { Player } from '@lottiefiles/react-lottie-player';
import AlertElement from '../../elements/AlertElement/AlertElement';

export default function TotalReport() {
    const { totaldata, isLoading, error, message } = TotalReports();

    const [reports, setReports] = useState();

    useEffect(() => {
        if (totaldata) {
            setReports(
                [
                    {
                        title: "Active",
                        value: totaldata.active,
                    },
                    {
                        title: "Confirmed",
                        value: totaldata.confirmed,
                    },
                    {
                        title: "Deaths",
                        value: totaldata.deaths,
                    },
                    {
                        title: "Fatality Rate",
                        value: totaldata.fatality_rate,
                    },
                    {
                        title: "Date",
                        value: totaldata.date,
                    },
                ]
            )
        }

    }, [totaldata])

    return (
        <div className='grid place-items-center'>
            {isLoading && !totaldata && (
                <div className='grid place-items-center'>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/b8a57534-8bd6-4b0e-a156-85705dc8e784/NFcy4nQhtK.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>
            )}
            {totaldata && (
                <Card className="flex flex-col justify-center gap-5">
                    <Title>Total Reports</Title>
                    <List>
                        {reports && reports.map(({ title, value }, index) => (
                            <ListItem key={index}>
                                <span>{title}</span>
                                <span>{value}</span>
                            </ListItem>
                        ))}
                    </List>
                </Card>
            )}
            {error && (
                <div className="grid place-items-center p-10">
                    <AlertElement message={message} />
                </div>
            )}
        </div>
    )
}
