import { useState,useEffect } from "react"
import Cim from "../Cim"

const Modosit=({kivalasztott})=>{
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)
    const [siker,setSiker]=useState(" ")
    const [helyes,setHelyes]=useState(true)

    const [egyJatek, setEgyJatek] = useState(null)

    //adatok módosítása - jatekModosit backend végpont hívása
    const adatModosit = async(e) => {
        e.preventDefault()
        //alert(egyJatek.jatek_ar)
        const bemenet={
            "jatek_nev": egyJatek.jatek_nev,
            "jatek_ertekeles": egyJatek.jatek_ertekeles,
            "jatek_ar": egyJatek.jatek_ar,
            "jatek_leiras": egyJatek.jatek_leiras,
            "jatek_tipus" : egyJatek.jatek_tipus
        }
        try{
        const response=await fetch(Cim.Cim+"/jatekModosit/" + kivalasztott,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bemenet)
            })
        const data=await response.json()
        //alert(JSON.stringify(data))
        if (response.ok){
            setSiker(data["message"])
            setHelyes(true)
            }
            
        else
            setSiker(data["error"])
        }
        catch (error){
            console.log(error)

        }
    
    }







    useEffect(()=>{

    const leToltes=async ()=>{
        try{
            const response=await fetch(Cim.Cim+"/jatekEgy/"+kivalasztott)
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.ok)
                {
                    setEgyJatek(data[0])
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
        <div className="modositDoboz">

            <form onSubmit={adatModosit}>
                <div>
                    Játék neve:
                    <input
                    style={{marginLeft:"30px"}}
                    className="inputD"
                    type="text"
                    value={egyJatek.jatek_nev} 
                    onChange={(e) => setEgyJatek({...egyJatek, jatek_nev:e.target.value})}
                />

                <div>
                    Értékelés:
                    <input
                    style={{marginLeft:"42px"}}
                    className="inputD"
                    type="text" 
                    value={egyJatek.jatek_ertekeles}
                    onChange={(e) => setEgyJatek({...egyJatek, jatek_ertekeles:e.target.value})}
                     
                     />
                </div>

                 <div>
                    Ár:
                    <input
                    style={{marginLeft:"91px"}}
                    className="inputD"
                    type="text" 
                    value={egyJatek.jatek_ar}
                    onChange={(e) => setEgyJatek({...egyJatek, jatek_ar:e.target.value})}
                     
                     />
                </div>

                <div>
                    Leírás:
                    <input
                    style={{marginLeft:"66px"}}
                    className="inputD"
                    type="text" 
                    value={egyJatek.jatek_leiras}
                    onChange={(e) => setEgyJatek({...egyJatek, jatek_leiras:e.target.value})}
                     />
                </div>

                <div>
                    Típus:
                    <input
                    style={{marginLeft:"69px"}}
                    className="inputD"
                    type="text" 
                    value={egyJatek.jatek_tipus}
                    onChange={(e) => setEgyJatek({...egyJatek, jatek_tipus:e.target.value})}
                     />
                </div>

                </div>
                

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        >
                        Módosítás
                    </button>
                    {helyes ? 
                        <div style={{color:"green"}}>{siker} &nbsp;</div> 
                        :  
                        <div style={{color:"red"}}>{siker} &nbsp;</div> }

                </div>
            </form>

        </div>
    )
}
export default Modosit

