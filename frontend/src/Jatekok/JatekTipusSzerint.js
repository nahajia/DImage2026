

import { useState,useEffect } from "react"
import Cim from "../Cim"
import "../App.css"

const JatekTipusSzerint=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)



    useEffect(()=>{

    const leToltes=async ()=>{
        try{
            let bemenet={
                "tipus_id":kivalasztott
            }
            const response=await fetch(Cim.Cim+"/jatekKeresTip",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bemenet)
            })
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

        leToltes()
    },[kivalasztott])

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
                {/*kivalasztott*/}
                {adatok.map((elem,index)=>(
                    <div key={index} className="doboz"> 
                        <div className="jatekCim">{elem.jatek_nev} </div>
                        <div style={{textAlign:"center",marginTop:"20px"}}>
                            <img style={{width:"200px"}} src={`${Cim.Cim}/kepek/${elem.jatek_id}.jpg`} alt={elem.jatek_nev} />
                        </div>
                        <div>Értékelés: {elem.jatek_ertekeles} </div>
                        <div>Ár: {elem.jatek_ar} </div>
                        <div>Játék leírása: {elem.jatek_leiras} </div>
                        <div className="jatekTipus">Játék típusa: {elem.tipus_nev} </div>

                    </div>
                ))}
           
        </div>
    )
}
export default JatekTipusSzerint

