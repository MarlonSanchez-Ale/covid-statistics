import React from 'react'
import { GlobeAltIcon } from "@heroicons/react/outline";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { Countries } from '../../../data/FetchWrapper';
import AlertElement from '../AlertElement/AlertElement';

export default function Search({value, setValue}) {

  //const [value, setValue] = useState("");

  const { countries, isLoading, error, message } = Countries()

  return (
    <div>
      <div className="max-w-sm mx-auto space-y-6">
        <SearchSelect value={value} onValueChange={setValue} placeholder='Select country'>
          {isLoading && (
            <SearchSelectItem value="countries" aria-disabled={true} icon={GlobeAltIcon}>
              Loading...
            </SearchSelectItem>
          )}
          {countries && countries.map((country, index) => (
            <SearchSelectItem value={country} key={index} icon={GlobeAltIcon}>
              {country}
            </SearchSelectItem>
          ))}
          {error && (
            <AlertElement message={message} />
          )}
        </SearchSelect>
      </div>
    </div>
  )
}
