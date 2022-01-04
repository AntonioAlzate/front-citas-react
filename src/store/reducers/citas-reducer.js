import {
    INICIAL,
    OBTENER_TODOS,
    OBTENER_POR_ID
  } from "../actions/citas-action-type";

  const initialState = {
    citas: {
        lista: [],
        cita: {}
    }
  }

  export default function citasReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        
        case OBTENER_TODOS:
            return {
                ...state, citas: {
                    lista: action.payload,
                    cita: {}
                }

            }

            case OBTENER_POR_ID:
                return {
                    ...state, citas: {
                        lista: state.lista,
                        cita: action.payload
                    }
                }

            case INICIAL:
                return initialState;

            default:
                return state;
    }

}