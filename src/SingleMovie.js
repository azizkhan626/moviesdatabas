
import { useContext } from 'react';

import { AppContaxt } from './contaxt'





const SingleMovie = () => {

    const {APIDATA,isloading,Getindex} = useContext(AppContaxt);



   const {Title,Poster,Year,Type} = APIDATA[Getindex]

   console.log(APIDATA)


   if(isloading) return <div>single movie is loading....</div>

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-1 col-lg-6 hoverStyle1'>
          <div className="card ">
        <img src={Poster} alt="poster"/>
        </div>
         </div>
        <div className='col single-title card hoverStyle1 '>
          <div className='card-title'> 
           <h3>Title: <span className='sttc'>{Title}</span> </h3>
           <br/>
           <h4>Type:  {Type}</h4>
           <h4>Year: {Year}</h4>
           </div>
          
        </div>
      </div>
      
       </div>
    
    
    </>
  )
}

export default SingleMovie