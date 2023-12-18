import { useState } from 'react'
import { Search, Sliders, List, ArrowLeft } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const [filterIsOpen, openFilter] = useState(false)

  return (
    <header className='container min-w-full bg-white p-4 flex items-center gap-4'>
    {!filterIsOpen ? <>
      <div className='basis-1/4 select-none'>
        <img src="./img/favicon.ico" alt="GGetaway logo" className='cursor-pointer'
        onClick={() => navigate("/")} />
      </div>
      <div className='basis-1/2 flex items-center justify-between gap-4'>
        <div className='basis-3/4 flex items-center justify-between header-search-btns'>
          <input type='text' placeholder='Search' className='bg-zinc-100 mr-3' />
          <Search className='inline cursor-pointer' />
        </div>
        <div className='basis-1/4 flex items-center gap-2 header-search-btns cursor-pointer select-none'
        onClick={() => openFilter(!filterIsOpen)}>
          <Sliders className='inline' />
          <p className='inline'>Filters</p>
        </div>
      </div>
      <div className='basis-1/4 w-full flex justify-end'>
        <List className='cursor-pointer text-4xl' />
      </div>
    </>:<>
      <div className='basis-1/8'>
        <ArrowLeft className='cursor-pointer text-4xl'
        onClick={() => openFilter(!filterIsOpen)} />
      </div>
      <div className='basis-7/8 w-full flex justify-around'>
      <select name="sort">
        <option>Sort by:</option>
        <option value="az">Ascending Name</option>
        <option value="za">Descending Name</option>
        <option value="low-price">Lowest Price</option>
        <option value="high-price">Highest Price</option>
        <option value="high-rated">Highest Rated</option>
        <option value="low-rated">Lowest Rated</option>
      </select>
      <select name="type">
        <option>Filter by Type:</option>
        <option value="Accomodation">Accomodation</option>
        <option value="Activity">Activity</option>
        <option value="Landmark">Landmark</option>
      </select>
      <select name="location">
        <option>Filter by Location:</option>
        <option value="North Island">North Island</option>
        <option value="South Island">South Island</option>
      </select>
      </div>
    </>}
    </header>
  )
}

export default Header
