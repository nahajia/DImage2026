import { useState } from 'react';
import Lenyilo from '../Jatekok/Lenyilo';
import Cim from '../Cim';

const JatekFelvitel = () => {


    const [nev, setNev] = useState()
    const [ertekeles, setErtekeles] = useState()
    const [ar, setAr] = useState()
    const [leiras, setLeiras] = useState()
    const [kivalasztott,setKivalasztott]=useState(1)

    const [siker,setSiker]=useState(" ")
    const [helyes,setHelyes]=useState(true)

    const felvitel = async () => {
        //alert(`${jatek_nev} ${jatek_ertekeles} ${jatek_ar} ${jatek_leiras} ${jatek_tipus}`)

        if (nev !== "" && ertekeles !== "" && ar !== "" && leiras !== "" ) {

            const biztos = window.confirm(`Biztosan hozzá szeretnéd adni a ${nev} játékot az adatbázishoz?`) 

            if (biztos) {
                //alert("ok")

                const bemenet={
                    "jatek_nev":nev,
                    "jatek_ertekeles":ertekeles,
                    "jatek_ar":ar,
                    "jatek_leiras":leiras,
                    "jatek_tipus" : kivalasztott
                }

                const response=await fetch(Cim.Cim+"/jatekFelvitel", {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(bemenet)
                            })

                const data = await response.json()

                if (response.ok) {
                        setSiker(data["message"])
                        setHelyes(true)
                } else {
                        setSiker(data["error"])
                }
            }
            

        } else {
            alert("Minden adat megadása kötelező!");
        }
    }

    return (
        <div>

            <div className='ujJatek'>
                <div className='jatekCim' style={{textAlign:"center", marginBottom:20}}>Új játék felvitele</div>
                <div className="dobozElem">Játék neve: <input style={{marginLeft:"50px"}} onChange={(e) => setNev(e.target.value)} type="text" /></div>
                <div className="dobozElem">Játék értékelése: <input style={{marginLeft:"10px"}} onChange={(e) => setErtekeles(e.target.value)} type="number" min={0} max={10}/></div>
                <div className="dobozElem">Játék ára: <input style={{marginLeft:"63px"}} onChange={(e) => setAr(e.target.value)} type="number" min={0} max={1000000}/> Ft</div>
                <div className="dobozElem">Játék leírása:</div> 
                <div><textarea className='textDoboz' onChange={(e) => setLeiras(e.target.value)}></textarea></div>
                <div className="dobozElem">Játék típus: <Lenyilo kivalasztott={setKivalasztott}/></div>
                <button type="button" class="btn btn-primary" onClick={() => felvitel()}>Új játék felvitele</button>

                {helyes ? 
                        <div style={{color:"green"}}>{siker} &nbsp;</div> 
                        :  
                        <div style={{color:"red"}}>{siker} &nbsp;</div> }

            </div>
        </div>
        
    )
}

export default JatekFelvitel


