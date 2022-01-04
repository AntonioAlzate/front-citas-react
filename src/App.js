import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import ListaCitas from "./pages/ListaCitas";
import CitaDetalle from "./pages/CitaDetalle";
import {Provider, useDispatch} from 'react-redux';
import store from './store/store';
import { useEffect } from "react";
import { getCitas } from "./store/actions/citas-action";


function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ListaCitas />} />
      <Route path="/cita/:Id" element={<CitaDetalle />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
