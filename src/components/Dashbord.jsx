function Dashbord({ users }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Total de vendas:
        </p>
        <p className="font-bold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50">
          R$ 00,00 {/* <?= totalVendas($registro_financeiro) ?> */}
        </p>
      </div>
      <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Recebidos:</p>
        <p className="font-bold text-2xl md:text-3xl text-emerald-500">
          R$ 00,00 {/* <?= totalRecebidos($registro_financeiro) ?> */}
        </p>
      </div>
      <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 shadow-sm">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Em aberto:</p>
        <p className="font-bold text-2xl md:text-3xl text-red-500">
          R$ 00,00 {/* <?= totalAbertos($registro_financeiro) ?> */}
        </p>
      </div>
    </div>
  );
}

export default Dashbord;
