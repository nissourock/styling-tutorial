import React, { useState, Fragment } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { ArrowBackIos } from '@material-ui/icons'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import styles from './countries.module.css';



export async function fetchCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')

    return data
}

export default function Countries() {


    return (
        <div className={styles.main}>
            <div className='flex justify-between p-10 bg-rose-200 border-b-2 shadow-xl'>
                <div className='font-semibold text-3xl font-["barlow"]'>Where is the world ?</div>
                <div>Dark mode</div>

            </div>
            <Outlet />


        </div>
    )
}


const Countrycard = ({ countryName, population, region, capital, flag, altspelling }) => {
    return (<Link to={`/countries/${altspelling}`}>
        <div className='flex flex-col w-3/4 sm:w-64 grow sm:grow-0 shadow-lg border-t-2 rounded-lg overflow-hidden hover:scale-110 transition-all duration-150 ease-in-out' href={countryName}>
            <img src={flag} className='block sm:h-52 object-cover'></img>
            <div className='flex flex-col p-4 bg-gray-50'>
                <div className='my-2 text-xl font-bold h-14'>{countryName}</div>
                <div className='font-normal'>Population :<span className='font-light'> {population}</span></div>
                <div className='font-normal'>Region: <span className='font-light'>{region}</span></div>
                <div className='font-normal'>Capital : <span className='font-light'>{capital}</span></div>

            </div>
        </div></Link>)
}

export const Allcountries = () => {
    const { data, error, isError, isLoading } = useQuery('countries', fetchCountries)
    const [value, setValue] = useState(null)
    const [selected, setSelected] = useState("anis")
    const [query, setQuery] = useState('')
    if(data){
    data?.sort((a, b) => a.name.common.localeCompare(b.name.common))
    let options = []
    let i = 0
    data?.map(country => {
        options = [...options, { id: i++, label: country.name.common }]
    })

  const filteredPeople =
  query === ''
    ? options
    : options.filter((country) =>
        country.label
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    
    const filtered =  data?.filter(country => country.name.common === value)
    
    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //      const filtered =  data?.filter(country => country.name.common.toLowercase() === value.toLowercase())
    //     setValue(null)
    //     return filtered
    // }
    return (<>
        <div className='flex justify-between p-10  '>
            <div className=''>
                <Combobox value={selected} onChange={()=>setSelected(query)}>
                    <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input
                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                displayValue={(person) => person.label}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredPeople.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) : (
                                    filteredPeople.map((person, index) => (
                                        <Combobox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                }`
                                            }
                                            value={person.label}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.label}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                }`}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
            

        </div>

        <div className='p-10 flex flex-wrap gap-8  justify-center '>
            {data?.map(country => {
                return (
                    <Countrycard countryName={country.name.common} 
                    capital={country.capital} 
                    population={country.population} 
                    region={country.region} 
                    flag={country.flags.svg} 
                    altspelling={country.altSpellings[0]} />
                )})
            }
               
                



            {/* <Countrycard countryName="nepal of my big dick of te usa of america"  capital="idk" population="123309" region="americas" flag="https://flagcdn.com/np.svg"/>
                <Countrycard countryName="nepal"  capital="idk" population="123309" region="americas" flag="https://flagcdn.com/dz.svg"/>
                <Countrycard countryName="nepal"  capital="idk" population="123309" region="americas" flag="https://flagcdn.com/np.svg"/>
                <Countrycard countryName="nepal"  capital="idk" population="123309" region="americas" flag="https://flagcdn.com/np.svg"/> */}






        </div>
    </>
    )}
    return (<>
    <div class="w-36 mx-auto m-20 object-fill">
        <svg role="status" class="inline w-28 h-28 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
    </>)
}

export const Countrydetail = () => {
    const { data, error, isError, isLoading } = useQuery('countries', fetchCountries)
    let params = useParams();
    const history = useNavigate();

    if (isLoading) {
        return (<>Loading</>)

    }
    if (isError) {
        return (<>

        </>)

    }
    if (data) {
        const countrydata = data?.filter(country => country.altSpellings[0] === params.id);
        const country = countrydata[0]
        console.log(countrydata)


        return (<>
            <div className='flex flex-col m-10 gap-10'>
                <div>
                    <button onClick={() => history('/countries/all')} className='flex p-2 border-2 shadow-sm rounded-sm gap-1 w-auto'>
                        <ArrowBackIos />
                        <div >Back</div>
                    </button>

                </div>
                <div className='flex gap-10 flex-col sm:flex-row'>
                    <div className='sm:basis-1/2 '><img className='shadow-lg' src={country.flags.svg}></img>
                    </div>

                    <div className='sm:basis-1/2 flex flex-col'>
                        <div className='text-3xl'>{country.name.common}</div>
                        <div> Population: {country.population}</div>
                        <div>Region: {country.region}</div>
                    </div>

                </div>


            </div>

        </>)
    }

}
