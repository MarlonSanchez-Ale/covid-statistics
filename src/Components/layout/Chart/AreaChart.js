import React, { useState, useEffect } from 'react'
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";
import { TotalReports } from '../../../data/FetchWrapper';
import { Reports } from '../../../data/FetchWrapper';

const data = [
    {
        name: "Active",
        value: 456,
    },
    {
        name: "Confirmed",
        value: 351,
    },
    {
        name: "Deaths",
        value: 271,
    },
    {
        name: "Fatality Rate",
        value: 191,
    },
    {
        name: "Record",
        value: 91,
    },
];



export default function Charts() {

   // const [chartdata, setChartData] = useState()
   // const { totaldata } = TotalReports()
   // const { data } = Reports()


    return (
        <div className='flex flex-row justify-center'>
            <Card className="">
                <Title>Website Analytics</Title>
                <Flex className="mt-4">
                    <Text>
                        <Bold>Title</Bold>
                    </Text>
                    <Text>
                        <Bold>Value (%)</Bold>
                    </Text>
                </Flex>
                <BarList data={data} className="mt-2" />
            </Card>
        </div>
    )
}
