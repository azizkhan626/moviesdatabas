import React, { useEffect, useState } from "react";



const AppContaxt = React.createContext()

const API_URL = "http://www.omdbapi.com/?apikey=e08200a2&s="




const AppProvirder = ({ children }) => {


    const [APIDATA, setAPIDATA] = useState([]);
    const [search,setSearch] = useState("pirates of the caribbean");
    const [isloading,setIsloading] = useState(true)
    const [Getindex,setGetindex] = useState(null)
   
  




    const GetApifunction = async (url) => {
        try {

            const res = await fetch(url);
            const data = await res.json()

            if(data.Response === "True"){
                setIsloading(false)
                setAPIDATA(data.Search)

            }  else(
                setIsloading(true)
            )
            

                
        
        } catch (error) {
           


        }



    }

    useEffect(() => {


      let holdTime =  setTimeout(() => {

            GetApifunction(API_URL + search);
            
        },800);

      return () => clearTimeout(holdTime);

    }, [search])



    return <AppContaxt.Provider value={{APIDATA,search,setSearch,isloading,setGetindex,Getindex}}>{children}</AppContaxt.Provider>

}



export { AppProvirder, AppContaxt }
