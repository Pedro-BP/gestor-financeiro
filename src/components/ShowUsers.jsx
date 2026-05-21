import { Pencil, Trash } from "lucide-react";

function ShowUsers({ users }) {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Usuários
      </h2>
      {users.map((users) => (
        <div
          key={users.id}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-zinc-300 dark:border-zinc-700"
        >
          <div>
            <p className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
              {users.nome_completo}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {users.vinculo_institucional} - CPF: {users.cpf}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">{users.email}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
              Criado em: {users.data_criacao} - Atualizado em:
              {users.data_atualizacao}
            </p>
          </div>

          <form method="POST">
            <input type="hidden" name="id" value={users.id} />
            <div className="flex gap-4">
              <button
                type="submit"
                name="editar"
                className="flex-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition"
                placer
              >
                <Pencil />
              </button>
              <button
                type="submit"
                name="excluir"
                className="flex-none bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition"
              >
                <Trash />
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

export default ShowUsers;
