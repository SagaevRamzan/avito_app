import {useDispatch, useSelector} from "react-redux";
import Foto from "./Foto";
import {useEffect} from "react";
import {LoadAlboom, LoadFoto} from "./actions";
import Big_Foto from "./Big_Foto";

function App() {
    const fotos=useSelector(state=>state.fotos);
    const big_loaded=useSelector(state=>state.big_loaded);

    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(LoadAlboom())
    },[]);

if (big_loaded===true){
    return (<div className="app">
                <header className="app_header">
                    TEST APP
                </header>
                <div className="pict">
                    {fotos.map(foto => {
                        return <Foto foto={foto} key={foto.id}/>
                    })}
                </div>
                <div>
                    <Big_Foto url={fotos.id} key={fotos.id}/>
                </div>
            </div>
    );
}
else {
    return (<div className="app">
                <header className="app_header">
                    TEST APP
                </header>
                <div className="pict">
                    {fotos.map(foto => {
                        return <Foto foto={foto} key={foto.id}/>
                    })}
                </div>
             </div>
    );
}


}

export default App;
