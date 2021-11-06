export const LoadAlboom=()=>{
    return function (dispatch){
        dispatch({
            type:`ALBOOM_LOAD_START`
        })
        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:`ALBOOM_LOAD_SUCCESS`,
                    payload:json
                })
            })
    }
}
export const LoadFoto=(big_foto)=>{
    return function (dispatch){
        dispatch({
            type:`FOTO_LOAD_START`
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${big_foto}`)
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:`FOTO_LOAD_SUCCESS`,
                    payload:json
                })
            })
    }
}
export const setPicture_Click=(big_loaded)=> {
    return {
        type: 'PICTURE_CLICK',
        payload: !big_loaded
    }
}