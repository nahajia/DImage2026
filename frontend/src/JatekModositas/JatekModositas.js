import { useState } from "react"
import LenyiloJatek from "./LenyiloJatek"
import Modosit
 from "./Modosit"
const JatekModositas=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    const [talalat,setTalalat]=useState(false)

    const jatekKeres=()=>{
        //alert(kivalasztott)
        setTalalat(true)
    }

    return (
        <div>
            <div className="alCim">Játék módosítása</div>
            <LenyiloJatek kivalasztott={setKivalasztott} />

            <button 
                className="btn btn-primary"
                style={{marginTop:"10px"}}
                onClick={()=>jatekKeres()}
                >
            Játék keresése    
            </button>

            {talalat && <Modosit kivalasztott={kivalasztott} />}


        </div>
    )
}
export default JatekModositas


