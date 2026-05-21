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
            <AddUser users={users} /> {/* Fazer as Funções */}
            <AddCash /> {/* Fazer as Funções */}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ShowUsers users={users} /> {/* Fazer as Funções */}
            <ShowCashs /> {/* Fazer as Funções */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
