function AddCash() {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Nova Transação
      </h2>
      <form method="POST" className="flex flex-col gap-4">
        <div>
          <label
            for="usuario"
            className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2"
          >
            Usuário
          </label>
          <input
            type="text"
            name="usuario"
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            for="valor"
            className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2"
          >
            Valor
          </label>
          <input
            type="number"
            step="0.01"
            name="valor"
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            for="status"
            className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2"
          >
            Status
          </label>
          <select
            name="status"
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pendente">Pendente</option>
            <option value="Pago">Pago</option>
          </select>
        </div>
        <input
          type="submit"
          name="transacao"
          value="Salvar Transação"
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition"
        />
      </form>
    </div>
  );
}

export default AddCash;
