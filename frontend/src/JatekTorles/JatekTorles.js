

import { useState,useEffect } from "react"
import Cim from "../Cim"

const JatekTorles=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)
    const [siker,setSiker]=useState(false)

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
    },[siker])

    const torlesFuggveny=async (jatek_id,jatek_nev)=>{
        //alert(jatek_id)
        const biztos=window.confirm(`Biztosan törölni szeretnéd ${jatek_nev} játékot?`)
        if (biztos){
            //alert("Jó")
            const response=await fetch(Cim.Cim+"/jatekTorles/"+jatek_id,{
                    method: "delete",
                    headers: {
                        "Content-Type": "application/json"
                            }
                   })
            const data=await response.json()
            if (response.ok){
                alert(data["message"])
                setSiker(!siker)
            }
            else{
                alert(data["error"])
            }
        }
    }
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
                <table>
                      <tr> 
                        <th>Játék neve</th>
                        <th>Játék ára</th>
                        <th>Játék típusa</th>                                            </tr>                  
                {adatok.map((elem,index)=>(
                    <tr key={index} > 
                        <td>{elem.jatek_nev}</td>
                        <td>{elem.jatek_ar}</td>
                        <td>{elem.tipus_nev}</td>                                            <td><button
                            className="btn btn-danger"
                            onClick={()=>torlesFuggveny(elem.jatek_id,elem.jatek_nev)}
                            >x</button></td>  
                    </tr>
                ))}
                </table>
        </div>
    )
}
export default JatekTorles


