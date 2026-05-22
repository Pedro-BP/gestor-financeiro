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

  const [formData, setFormData] = useState({
    nome_completo: "",
    cpf: "",
    email: "",
    vinculo_institucional: "",
  });

  const [editandoId, setEditandoId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editandoId !== null) {
      const usuariosAtualizados = users.map((user) =>
        user.id === editandoId
          ? {
              ...user,
              ...formData,
            }
          : user,
      );

      setUsers(usuariosAtualizados);
      setEditandoId(null);
    } else {
      const novoUsuario = {
        id: users.length + 1,
        ...formData,
      };

      setUsers([...users, novoUsuario]);
    }

    setFormData({
      nome_completo: "",
      cpf: "",
      email: "",
      vinculo_institucional: "",
    });
  }

  function handleDelete(id) {
    const novosUsuarios = users.filter((user) => user.id !== id);

    setUsers(novosUsuarios);
  }

  function handleEdit(user) {
    setFormData({
      nome_completo: user.nome_completo,
      cpf: user.cpf,
      email: user.email,
      vinculo_institucional: user.vinculo_institucional,
    });

    setEditandoId(user.id);
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <Header />
      <div className="flex-1 p-5">
        <div className="w-full min-h-screen overflow-x-hidden p-3 md:p-6">
          <Dashbord cashs={cashs} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <AddUser
              users={users}
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
              editandoId={editandoId}
            />
            <AddCash /> {/* Fazer as Funções */}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ShowUsers
              users={users}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            {/* Adicionar data_lancamento e data_modificacao */}
            <ShowCashs /> {/* Fazer as Funções */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
