function AddUser({ handleSubmit, formUserData, handleChange, editandoUserId }) {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Cadastro de Usuários
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            name="nome_completo"
            value={formUserData.nome_completo}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            CPF
          </label>
          <input
            type="text"
            name="cpf"
            value={formUserData.cpf}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formUserData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            Classificação
          </label>
          <select
            name="vinculo_institucional"
            value={formUserData.vinculo_institucional}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Selecione</option>
            <option value="Aluno">Aluno</option>
            <option value="Funcionario">Funcionário</option>
            <option value="Visitante">Visitante</option>
          </select>
        </div>
        <input
          type="submit"
          value={editandoUserId ? "Atualizar" : "Cadastrar"}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition self-end"
        />
      </form>
    </div>
  );
}

export default AddUser;
