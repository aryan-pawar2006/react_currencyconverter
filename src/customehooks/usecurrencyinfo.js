//this custome hook we are making becuase from and to part is look like same so that by making this hook 
// whatever value we are getting from API that we are directly fetching into from and to part so bassicaly whatever work we want to do infrom
//  and to part that we are doing in this custome hook so that I can use it directly
//also we can use another hooks in this custome hook:
import { useEffect,useState} from "react";

function useCurrencyInfo(currency)
{
    const [data,setdata]=useState({});
    //when we want to invok any value at that we use follo hook:
    useEffect(()=>{

     //callback fun
     fetch(`
        https://v6.exchangerate-api.com/v6/ebce95e446b5f630014096ff/latest/${currency}`
       )
       .then((res)=>res.json())
       .then((res)=>setdata(res.conversion_rates))
       .catch((err)=>console.error("error fetching the data",err));
    },[currency])//basically [] in this bracket e are passing the dependancies that means when we do changes in this values the usestate hook get invoked:
    return data;//because any other hook also returns data only then ths data can be set by setdata fun 
    //thats whay in custome hook also we are returning the data only
}

export default useCurrencyInfo;