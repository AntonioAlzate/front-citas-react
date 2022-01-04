import {
    INICIAL,
    OBTENER_TODOS,
    OBTENER_POR_ID
  } from "../actions/citas-action-type";

  const initialState = {
    citas: {
        lista: [],
        nombre: ''
    }
  }

  export default function citasReducer(state = initialState, action) {

    switch (action.type) {
        case OBTENER_TODOS:
            return {
                ...state, citas: {
                    lista: action.payload,
                    nombre: ''
                }

            }

            case OBTENER_POR_ID:
                return {
                    ...state, citas: {
                        lista: action.payload,
                        nombre: ''
                    }
                }

            case INICIAL:
                return initialState;

            default:
                return state;
    }

}