import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashbord from "./components/Dashbord";
import AddUser from "./components/AddUser";
import AddCash from "./components/AddCash";
import ShowUsers from "./components/ShowUsers";
import ShowCashs from "./components/ShowCashs";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      nome_completo: "Exemplo Teste",
      cpf: "00000000000",
      email: "teste@example.com",
      vinculo_institucional: "Visitante",
      data_criacao: "2026-05-11 00:00:00",
      data_atualizacao: "2026-05-11 00:00:00",
    },
  ]);

  const [formUserData, setFormUserData] = useState({
    nome_completo: "",
    cpf: "",
    email: "",
    vinculo_institucional: "",
    data_criacao: "",
    data_atualizacao: "",
  });

  const [editandoUserId, setEditandoUserId] = useState(null);

  function handleUserChange(e) {
    const { name, value } = e.target;
    setFormUserData({ ...formUserData, [name]: value });
  }

  function handleUserSubmit(e) {
    e.preventDefault();

    if (editandoUserId !== null) {
      const usuariosAtualizados = users.map((user) =>
        user.id === editandoUserId
          ? {
              ...user,
              ...formUserData,
            }
          : user,
      );

      setUsers(usuariosAtualizados);
      setEditandoUserId(null);
    } else {
      const novoUsuario = {
        id: users.length + 1,
        ...formUserData,
        data_criacao: new Date().toLocaleString(),
        data_atualizacao: new Date().toLocaleString(),
      };

      setUsers([...users, novoUsuario]);
    }

    setFormUserData({
      nome_completo: "",
      cpf: "",
      email: "",
      vinculo_institucional: "",
    });
  }

  function handleUserDelete(id) {
    const novosUsuarios = users.filter((user) => user.id !== id);

    setUsers(novosUsuarios);
  }

  function handleUserEdit(user) {
    setFormUserData({
      nome_completo: user.nome_completo,
      cpf: user.cpf,
      email: user.email,
      vinculo_institucional: user.vinculo_institucional,
      data_criacao: user.data_criacao,
      data_atualizacao: new Date().toLocaleString(),
    });

    setEditandoUserId(user.id);
  }

  const [cashs, setCashs] = useState([
    {
      id: 1,
      valor: 10.0,
      usuario_id: 1,
      status: "Pendente",
      data_lancamento: "2026-05-11 00:00:00",
      data_modificacao: "2026-05-11 00:00:00",
    },
    {
      id: 2,
      valor: 10.0,
      usuario_id: 1,
      status: "Pago",
      data_lancamento: "2026-05-11 00:00:00",
      data_modificacao: "2026-05-11 00:00:00",
    },
  ]);

  const [formCashData, setFormCashData] = useState({
    valor: "",
    usuario_id: "",
    status: "",
    data_lancamento: "",
    data_modificacao: "",
  });

  const [editandoCashId, setEditandoCashId] = useState(null);

  function handleCashChange(e) {
    const { name, value } = e.target;
    setFormCashData({ ...formCashData, [name]: value });
  }

  function handleCashSubmit(e) {
    e.preventDefault();

    if (editandoCashId !== null) {
      const cashsAtualizados = cashs.map((cash) =>
        cash.id === editandoCashId
          ? {
              ...cash,
              ...formCashData,
            }
          : cash,
      );

      setCashs(cashsAtualizados);
      setEditandoCashId(null);
    } else {
      const novoCash = {
        id: cashs.length + 1,
        ...formCashData,
        data_lancamento: new Date().toLocaleString(),
        data_modificacao: new Date().toLocaleString(),
      };

      setCashs([...cashs, novoCash]);
    }

    setFormCashData({
      valor: "",
      usuario_id: "",
      status: "",
      data_lancamento: "",
      data_modificacao: "",
    });
  }

  function handleCashDelete(id) {
    const novosCashs = cashs.filter((cash) => cash.id !== id);

    setCashs(novosCashs);
  }

  function handleCashEdit(cash) {
    setFormCashData({
      valor: cash.valor,
      usuario_id: cash.usuario_id,
      status: cash.status,
      data_lancamento: cash.data_lancamento,
      data_modificacao: new Date().toLocaleString(),
    });

    setEditandoCashId(cash.id);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <Header />
      <div className="flex-1 p-5">
        <div className="w-full min-h-screen overflow-x-hidden p-3 md:p-6">
          <Dashbord cashs={cashs} />
          <div className="flex flex-col xl:flex-row gap-6 mb-6">
            <AddUser
              users={users}
              handleUserSubmit={handleUserSubmit}
              formUserData={formUserData}
              handleUserChange={handleUserChange}
              editandoUserId={editandoUserId}
            />
            <AddCash
              cashs={cashs}
              handleCashSubmit={handleCashSubmit}
              formCashData={formCashData}
              handleCashChange={handleCashChange}
              editandoCashId={editandoCashId}
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <ShowUsers
              users={users}
              handleUserEdit={handleUserEdit}
              handleUserDelete={handleUserDelete}
            />
            <ShowCashs
              cashs={cashs}
              handleCashEdit={handleCashEdit}
              handleCashDelete={handleCashDelete}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
