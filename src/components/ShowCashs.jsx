function ShowCashs() {
  return (
    <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Transações
      </h2>

      {/* <?php foreach ($registro_financeiro as $transacao): ?> */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border-b border-zinc-300 dark:border-zinc-700">
        <div>
          <p className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
            R$ {/* <?= formatarDinheiro($transacao['valor']) ?> */}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Usuário ID: {/* <?= $transacao['usuario_id'] ?> */}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Criado em: {/* <?= $transacao['data_lancamento'] ?> */} - Atualizado
            em: {/*  <?= $transacao['data_modificacao'] ?> */}
          </p>
          <p className="mt-1">
            Status:{" "}
            <span className="<?= $transacao['status'] == 'Pago' ? 'text-emerald-500' : 'text-red-500' ?> font-semibold">
              {/* <?= $transacao['status'] ?> */}
            </span>
          </p>
        </div>
        <form method="POST">
          <input type="hidden" name="id" />{" "}
          {/* value="<?= $transacao['id'] ?> */}
          <button
            type="submit"
            name="pagar"
            className="w-full lg:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
          >
            Pagar
          </button>
        </form>
      </div>
      {/* <?php endforeach; ?> */}
    </div>
  );
}

export default ShowCashs;
