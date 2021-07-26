import React, { useEffect, useState } from 'react';
import style from './CountryDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryDetail } from '../../Actions/index';

const CountryDetail = ({ id }) => {
    const dispatch = useDispatch()
    const country = useSelector(state => state.countryDetail)
    const [state, setState] = useState(false)

    useEffect(() => {
        dispatch(countryDetail(id))
        setState(true)
    }, [])

    return (
        <> {!state ? <div>Loading...</div> :
            Object.keys(country).length === 0 ? <div>Loading...</div> ://devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object
                <div className={style.fontContainer}>
                      <div >
                    <Link className={style.buttonLink} to='/countries'> GO HOME </Link>
                </div>
                    <div className={style.detailContainer} >
                        <h1>{country.name} ({country.id})</h1>
                        <figure >
                            <img src={country.flag} alt='img not found 😔' />
                        </figure>
                        <h2>Capital: {country.capital}</h2>
                        <h2>Region: {country.region}</h2>
                        <h2>Subregion: {country.subregion}</h2>
                        <h2>Population: {country.population}</h2>
                        <h2>Area: {country.area} km²</h2>
                    </div>
                    <div className={style.detailContainer}>
                        <h1>Dreams of tourist activities</h1>
                    <hr />
                        {country.activities.length === 0 ? <p>There are no tourist dreams in this country</p> :
                            <div> <ul>
                                {
                                    country.activities.map((actTour) => (
                                        <li key={actTour.name}>
                                            {actTour.name}
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        }
                    </div>
                </div>
        }
        </>
    )
}

export default CountryDetail;


//  function CountryDetail() {
//      const dispatch = useDispatch();
//      const countryDetail = useSelector(state => state.countryDetail)
//      const { id } = useParams()

//      useEffect(() => {
//          dispatch(getCountries(id))
//          return () => {
//              dispatch(clearCountry())
//          }
//      },[dispatch, id])
//      console.log(countryDetail)

//     if (countryDetail === null) { 
//         return (<h1> Country not found</h1>)
//     } else if 
//         (countryDetail === undefined) {
//             return(<h1>Cargando...</h1>)
//     } else {
//         return (<div>
//             <span>Name:</span>
//             <span>{countryDetail.name}</span>
//             <span>{countryDetail.region}</span>
//             <img src={countryDetail.flag} alt='Img not found 😔'/>
//         </div>)
//     }   
// }
// export default CountryDetail


