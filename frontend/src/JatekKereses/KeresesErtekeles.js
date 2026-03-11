
import { useState } from "react"
import Cim from "../Cim"

const KeresErtekeles=()=>{
    const [beSzoveg,setBeSzoveg]=useState("")
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const keres=async ()=>{
        try{
            let bemenet={
                "ertek":beSzoveg
            }
            const response=await fetch(Cim.Cim+"/jatekKeresErtek",{
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

    return (
        <div>
            <div className="cim">Keresés érték szerint</div>
            <div className="keretKeres">
             <input 
                type="text" 
                placeholder="Add meg legalább mennyi legyen az értékelése..."
                style={{ width: "400px" }}
                onChange={(e)=>setBeSzoveg(e.target.value)}
            />
            <br />
            <button className="btn btn-primary mt-3 mb-3" onClick={keres}>Keresés</button>
            <ul>
            {adatok.map((elem,index)=>(
                    <li key={index} >
                        {elem.jatek_nev} (értékelés: {elem.jatek_ertekeles}, ár: {elem.jatek_ar})
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
export default KeresErtekeles



