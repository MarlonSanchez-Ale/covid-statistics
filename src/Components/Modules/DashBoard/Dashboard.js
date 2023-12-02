import React, { useState } from 'react'
import ReportsProvince from '../../layout/ReportsProvince/ReportsProvince'
import Search from '../../elements/Search/Search'
import { Statistics } from '../../../data/FetchWrapper'

export default function Dashboard() {

    const [value, setvalue] = useState("")
    const { data, isLoading, error, message } = Statistics(value);
    
    return (
        <div className='flex flex-col justify-center gap-10 p-5'>
            <Search value={value} setValue={setvalue} />
            <ReportsProvince data={data} isLoading={isLoading} error={error} message={message} />
        </div>
    )
}

