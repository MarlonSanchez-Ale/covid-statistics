import React from "react";
import { Grid, Card, Text, Metric, Col } from "@tremor/react";
import { Chip } from "@material-tailwind/react";
import { Player } from '@lottiefiles/react-lottie-player';
import AlertElement from "../../elements/AlertElement/AlertElement";


export default function ReportsProvince({ data, isLoading, error, message }) {

    if (isLoading) {
        return (
            <div className='grid place-items-center p-10'>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/b8a57534-8bd6-4b0e-a156-85705dc8e784/NFcy4nQhtK.json"
                    style={{ height: '300px', width: '300px' }}
                />
            </div>
        )
    }

    if (error) {
        <div className="grid place-items-center p-10">
            <AlertElement message={message} />
        </div>
    }

    return (
        <div className='flex flex-col gap-5 justify-center'>
            {data && data.map(({ cases, continent, country, deaths, day, tests }, index) => (
                <div className='flex flex-col justify-center gap-5' key={index}>
                    <div className='flex flex-col rounded-md bg-gray-300  p-10 text-left'>
                        <Metric>Statistics</Metric>
                        <div className='flex flex-row justify-end gap-5 p-5'>
                            <Chip variant="ghost" value={continent} />
                            <Chip variant="ghost" value={country} />
                            <Chip variant="ghost" value={`Total Cases: ${cases.total}`} />
                        </div>
                        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
                            <Col numColSpan={1} numColSpanLg={2}>
                                <Card>
                                    <Text>Active</Text>
                                    <Metric>{cases.active}</Metric>
                                </Card>
                            </Col>
                            <Card>
                                <Text>Recovered</Text>
                                <Metric>{cases.recovered}</Metric>
                            </Card>
                            <Col>
                                <Card>
                                    <Text>Deaths</Text>
                                    <Metric>{deaths.total}</Metric>
                                </Card>
                            </Col>
                            <Card>
                                <Text>Tests</Text>
                                <Metric>{tests.total}</Metric>
                            </Card>
                            <Card>
                                <Text>Day</Text>
                                <Metric>{day}</Metric>
                            </Card>
                        </Grid>
                    </div>
                </div>
            ))}
        </div>
    )
}
