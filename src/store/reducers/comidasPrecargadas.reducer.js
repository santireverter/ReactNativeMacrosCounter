import { COMIDASPRECARGADAS } from '../../constants/data/comidasPrecargadas'

const initialState = {
    comidas: COMIDASPRECARGADAS,
    selected: null
};

const comidasPrecargadasReducer = (state = initialState, action) =>{
    return state;
};

export default comidasPrecargadasReducer;