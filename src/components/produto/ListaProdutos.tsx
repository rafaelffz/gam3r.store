import { produtos } from "@/core";
import ProdutoItem from "./ProdutoItem";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";

export default function ListaProdutos() {
  // const { produtos } = useProdutos();
  return produtos.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  ) : (
    <ProdutoNaoEncontrado semBotaoVoltar />
  );
}
