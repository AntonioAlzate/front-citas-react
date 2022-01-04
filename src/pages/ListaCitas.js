import React, { Fragment } from "react";
import { getCitas } from ".././store/actions/citas-action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListaCitas() {
  const dispatch = useDispatch();

  const citas = useSelector((state) => state.citasReducer.citas.lista);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCitas());
  }, [dispatch]);

  const redireccionarDetalleCita = (cita) => {
    navigate(`/cita/${cita.idPaciente}`);
  };

  return (
    <div>
      <Fragment>
        <h2 className="text-center my-5">Listado Citas</h2>
        <div className="container">
          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre Paciente</th>
                <th scope="col">Nombre Medico</th>
                <th scope="col">Fecha Cita</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>

            {citas !== undefined && citas.length !== 0 ? (
              <tbody>
                {citas.data.map((item, index) => (
                  <tr key={item.idPaciente}>
                    <th scope="row">{index}</th>
                    <td>
                      {item.nombrePaciente + " " + item.apellidosPaciente}
                    </td>
                    <td>{item.nombreMedico + " " + item.apellidosMedico}</td>
                    <td>{item.fechaReservaCita}</td>
                    <td>{item.estadoReservaCita}</td>
                    <td className="acciones">
                      <button
                        type="button"
                        onClick={() => redireccionarDetalleCita(item)}
                        className="btn btn-primary mr-2"
                      >
                        Detalle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>Cargando</h1>
            )}
          </table>
        </div>
      </Fragment>
    </div>
  );
}
