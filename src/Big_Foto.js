import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LoadFoto, setPicture_Click} from "./actions";

function Big_Foto(props){
    const big_fotos_id=useSelector(state=>state.big_fotos_id)
    const big_loaded=useSelector(state=>state.big_loaded)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(LoadFoto(props.fotos))
    },[]);
const handleClose=()=>{
    dispatch(setPicture_Click(big_loaded))
    }

    if(big_fotos_id.comments[0]) {
        const x=new Date(0,1,0,0,0,0,big_fotos_id.comments[0].date)
        return <div className="modal_window">
            <div className="big_foto" >
                <img src={big_fotos_id.url} className="fotoX"/>
                        <div>
                                <div className="comments">
                                    {x.getDay()+`.`+x.getMonth()+`.`+ x.getFullYear()}
                                    <br/>
                                    {big_fotos_id.comments[0].text}
                                </div>
                        </div>

                        <button onClick={handleClose} className="close_window"><a >X</a></button>

            </div>
            <div className="big_foto_2">
                <input className="input_name" placeholder="Ваше имя"/>
                <input className="input_comment" placeholder="Ваш комментарий"/>
                <button className="but_comment">
                    Оставить комментарий
                </button>
            </div>
        </div>
    }
    else {
        return <div className="modal_window">
            <div className="big_foto" >
                 {<img src={big_fotos_id.url} className="fotoX" />}

                <div className="comments">
                    not comments
                </div>
                <div>
                    <button onClick={handleClose} className="close_window"><a >X</a></button>
                </div>
            </div>
            <div className="big_foto_2">
                <input className="input_name" placeholder="Ваше имя"/>
                <input className="input_comment" placeholder="Ваш комментарий"/>
                <button className="but_comment">
                    Оставить комментарий
                </button>
            </div>
        </div>
    }
}
export default Big_Foto
