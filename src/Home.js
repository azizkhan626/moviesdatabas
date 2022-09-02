import React, { useContext } from 'react'
// import MYCard from './Card'
import { AppContaxt } from './contaxt'
import { Link } from 'react-router-dom'






const Home = () => {

   const {APIDATA,isloading,setGetindex} = useContext(AppContaxt)
  
if(isloading)  return <div className='lod'>Loading...</div>

console.log(APIDATA )
  


  return (
<>




    <div className='container'>
      

 <div className='row'>
    {
    APIDATA.map((movie,ind)=>{

      const movieName =movie.Title.substring(0,15)

        return (<>

        <div className='col-md-3 col-sm-1 col-lg-4 '  >
      <Link to={`/movie/:${movie.imdbID}`} className="Ancor">
          <div className='card hoverStyle'   key={movie.imdbID} onClick={()=>setGetindex(ind)}>
       
       <img className='img' src={movie.Poster}  alt="img"/>
       <div className='card-title'>{movieName}</div>

       </div>
       </Link>
      
         
       
       </div>
        
        </>) 
    })
    
    }
    </div>
   
  
    
    
   
    

    
    </div>
    </>

  )
}

export default Home