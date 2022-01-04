import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCitasByIdPaciente } from "../store/actions/citas-action";

export default function CitaDetalle() {
  const dispatch = useDispatch();

  const params = useParams();

  const cita = useSelector((state) => state.citasReducer.citas.cita);

  useEffect(() => {
    dispatch(getCitasByIdPaciente(params.Id));
  }, [dispatch]);

  const navigate = useNavigate();

  const redireccionarLista = () => {
    navigate("/");
  }

  return (
    <div className="container">
      <div className="col-md-12 text-center mt-5">
        <h1>Detalles Cita</h1>
        <dl>
          <dt>Id Cita</dt>
          <dd>{cita.id}</dd>

          <dt>Id Paciente</dt>
          <dd>{cita.idPaciente}</dd>
          <dt>Paciente</dt>
          <dd>{cita.nombrePaciente + " " + cita.apellidosPaciente}</dd>
          <dt>Medico</dt>
          <dd>{cita.nombreMedico + " " + cita.apellidosMedico}</dd>
          <dt>Fecha y hora de reserva</dt>
          <dd>{cita.fechaReservaCita + " " + cita.horaReservaCita}</dd>
          <dt>Estado de la cita</dt>
          <dd>
            <span>{cita.estadoReservaCita}</span>
          </dd>
        </dl>
        <button
          type="button"
          onClick={() => redireccionarLista()}
          className="btn btn-primary mr-2"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
