import { Pencil, Trash } from "lucide-react";

function ShowUsers({ users, handleUserEdit, handleUserDelete }) {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Usuários
      </h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-zinc-300 dark:border-zinc-700"
        >
          <div>
            <p className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
              {user.nome_completo}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {user.vinculo_institucional} - CPF:{" "}
              {user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">{user.email}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
              Criado em: {user.data_criacao} - Atualizado em:{" "}
              {user.data_atualizacao}
            </p>
          </div>
          <input type="hidden" name="id" value={user.id} />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleUserEdit(user)}
              className="flex-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition"
            >
              <Pencil />
            </button>

            <button
              type="button"
              onClick={() => handleUserDelete(user.id)}
              className="flex-none bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition"
            >
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowUsers;
