import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoadFoto} from "./actions";

function Foto(props){
    const dispatch=useDispatch();
    const big_loaded=useSelector(state=>state.big_loaded)

    const handleClick_BigFoto=(id)=>{
        if (big_loaded){
            return
        }
        dispatch(LoadFoto(id))
    }


    return (<div className="arr_pict">
            <Link to={`/${props.foto.id}`}>
                <a>
                    <img onClick={() => {
                        handleClick_BigFoto(props.foto.id)
                    }} src={props.foto.url} className="pic_arr"/>
                </a>
            </Link>
        </div>
    )



}

export default Foto