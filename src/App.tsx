
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import TabPostagem from "./components/postangens/tabpostagem/TabPostagem";
import ListaTema from "./components/temas/listatemas/ListaTema";
import ListaPostagem from "./components/postangens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postangens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postangens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "./store/Store";



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path='/cadastrousuario' element={<CadastroUsuario />} />

          <Route path='/temas' element={<ListaTema />} />

          <Route path='/posts' element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>

  );
}

export default App;