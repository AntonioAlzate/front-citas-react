import CitasService from "../../services/CitasService";
import { actionCreator } from "template-redux-helpers";
import {
  INICIAL,
  OBTENER_TODOS,
  OBTENER_POR_ID
} from "./citas-action-type";

const citasService = new CitasService();

export const getCitas = () => {
  return (dispatch) => {
    citasService
      .citasList()
      .then((data) => {
        dispatch(actionCreator(OBTENER_TODOS, "payload")(data));
      })
      .catch((error) => {
        dispatch(actionCreator(INICIAL, "payload")(error));
        throw error;
      });
  };
};

export const getCitasByIdPaciente = (id) => {
    return (dispatch) => {
      citasService
        .citasListByIdPaciente(id)
        .then((data) => {
          dispatch(actionCreator(OBTENER_POR_ID, "payload")(data));
        })
        .catch((error) => {
          dispatch(actionCreator(INICIAL, "payload")(error));
          throw error;
        });
    };
  };
