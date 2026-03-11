import { useState } from 'react';
import Lenyilo from './Lenyilo';
import JatekTipusSzerint from './JatekTipusSzerint';

const Jatekok=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)

    return (
        <div>
            <div style={{textAlign:"center",marginBottom:20}}>Játékok</div>
            <div className="row">
                <div className="col-sm-4">
                    <Lenyilo kivalasztott={setKivalasztott}/>
                    </div>
                <div className="col-sm-8">
                    <JatekTipusSzerint kivalasztott={kivalasztott}/>
                </div>
            </div>

        </div>
    )
}
export default Jatekok

