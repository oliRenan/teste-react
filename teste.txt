const PRODUCT_API_URL = 'https://fakestoreapi.com/products';
function App() {

  return (
    <>
      <div className='flex flex-col justify-center h-screen w-screen p-4 gap-4'>
        <h1 className="text-3xl">Bem vindo</h1>
        <h2 className="text-xl">Seu teste consiste em criar uma aplicação que simule um carrinho de compras</h2>
        <h2 className="text-xl">O que será disponibilizado</h2>
        <ol className="list-decimal list-inside">
          <li>A lista de produtos, incluindo titulo, preço, descrição, categoria e imagem. Os produtos serão retornados por uma API pública.</li>
          <li>Tanstack query para lidar com as consultas à API</li>
          <li>React Hook Form para lidar com formulários</li>
          <li>TailwindCSS para estilização</li>
        </ol>
        <h2 className="text-xl">O que esperamos</h2>
        <ol className="list-decimal list-inside">
          <li>Que o usuário veja a lista de produtos em formato de catálogo (sem restrição de layout, use sua criatividade)</li>
          <li>Que o usuário consiga adicionar produtos ao carrinho</li>
          <li>Que o carrinho armazene os seguintes dados: o(s) produto(s) selecionados, sua quantidade, o valor total de cada produto e um total geral</li>
          <li>Que o usuário consiga visualizar o carrinho com os produtos adicionados</li>
          <li>Que o usuário consiga remover produtos do carrinho</li>
        </ol>

        <p>Quanto a navegação, fica a seu critério: o carrinho e o catálogo podem estar na mesma página ou em páginas separadas.</p>

        <h2 className="text-2xl">Orientações e restrições</h2>

        <ol className="list-disc list-inside">
          <li>Não é permitido instalar outras bibliotecas além das citadas, <b>com exceção de bibliotecas de roteamento e navegação.</b></li>
          <li>O uso de IA é livre, <b>porém gostaríamos de ver sua criatividade e habilidades.</b> Caso utilize, deixe um comentário no trecho de código evidenciando que ele foi gerado por IA. Seja honesto.</li>
          <li>O prazo limite é de <b>1 semana</b>. Caso não consiga finalizar o teste como um todo, nos envie mesmo assim. <b>Valorizamos seu esforço e tempo dedicado.</b></li>
        </ol>

        <h2 className="text-2xl">Tenha um ótimo teste!</h2>
      </div>
    </>
  )
}

export default App
