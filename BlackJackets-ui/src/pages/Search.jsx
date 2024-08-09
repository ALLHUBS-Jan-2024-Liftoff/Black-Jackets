import React, { useEffect, useState } from 'react'
import { getVenueSearch, fetchVenues } from '../services/venueService';
import '../pages/style.css'
import { FaSearch } from 'react-icons/fa';

function Search() {
    useEffect(() => {
        fetchVenues().then(data => {
            console.log(data);
           // setData(data);
            setFilterData(data);
        })
    }, []);
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const handleFilter = (value) => {
        const res = filterData.filter(
            f => f.name.toLowerCase().includes(value.toLowerCase()))
        setData(res);
    }
   
  return (
      <div className='templateContainer'>
          <div className='searchInput_Container'>
              <input type="text" placeholder='Search Venues'
                  onChange={e => handleFilter(e.target.value)} />
              <FaSearch />
              </div>
          <div className='templateContainer'>
              {data.map((d, i) => (
                  <div key={i} >
                      {d.name}
                      </div>
              ))}
          </div>
                    
      </div>
  )
}

export default Search