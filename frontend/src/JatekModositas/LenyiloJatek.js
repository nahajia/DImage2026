
import { useState,useEffect } from "react"
import Cim from "../Cim"

const LenyiloJatek=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const leToltes=async ()=>{
        try{
            const response=await fetch(Cim.Cim+"/jatek")
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.ok)
                {
                    setAdatok(data)
                    setTolt(false)}
            else 
                {
                    setHiba(true)
                    setTolt(false)
                }
            }
        catch (error){
            console.log(error)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        leToltes()
    },[])

    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>Hiba</div>
                )       
    
    else return (
        <div>
            <select onChange={(e)=>  kivalasztott(e.target.value)      }>
                {adatok.map((elem,index)=>(
                    <option key={index} value={elem.jatek_id}>id:{elem.jatek_id} játék neve:{elem.jatek_nev} ({elem.tipus_nev})</option>
                ))}
            </select>
        </div>
    )
}
export default LenyiloJatek
