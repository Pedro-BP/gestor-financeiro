import { Pencil, Trash } from "lucide-react";

function ShowCashs({ cashs, handleCashEdit, handleCashDelete }) {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Transações
      </h2>
      {cashs.map((cash) => (
        <div
          key={cash.id}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-zinc-300 dark:border-zinc-700"
        >
          <div>
            <p className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
              R${" "}
              {cash.valor.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Usuário ID: {cash.usuario_id}{" "}
              {/* fazer uma função para aceitar cpf, compara com o usuario existente e colocar o id correspondente */}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Criado em: {cash.data_lancamento} - Atualizado em:{" "}
              {cash.data_modificacao}
            </p>
            <p className="mt-1">
              Status:{" "}
              <span
                className={`${cash.status === "Pago" ? "text-emerald-500" : "text-red-500"} font-semibold`}
              >
                {cash.status}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleCashEdit(cash)}
              className="flex-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition"
            >
              <Pencil />
            </button>
            <button
              type="button"
              onClick={() => handleCashDelete(cash.id)}
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

export default ShowCashs;
