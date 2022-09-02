
import React, { useContext } from 'react'
import { AppContaxt } from './contaxt'


const Search = () => {
 const {search,setSearch} = useContext(AppContaxt)



  return (<>
    
    <div  className='seach-div'>
    <h1 className='sttc'> Seach Your Favorite Movies</h1>
    
 <form action='#' onSubmit={(e)=>e.preventDefault()}>

        <input onChange={(event)=>setSearch(event.target.value)}  placeholder='Type You Movie Name' className='inputtype'/>
        </form>
        <h4>{search}</h4>
    </div>
    </>
  )
}

export default Search