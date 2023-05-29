const tabela = document.getElementById("table_passeios");

const passeios = [
    {nome:"Jardim Botânico", cidade:"Curitiba - PR", preco:"Grátis"},
    {nome:"Cristo Redentor", cidade: "Rio de Janeiro - RJ", preco:"R$ 120"},
    {nome:"Pão de Açúcar",cidade: "Rio de Janeiro - RJ", preco:"R$ 80"},
    {nome:"Ponte Hercílio Luz", cidade: "Florianópolis - SC ", preco:"Grátis"},
    {nome:"Museu do Amanhã", cidade:"Rio de Janeiro - RJ", preco:"R$ 54"},
    {nome:"Beto Carreiro", cidade:"Penha - SC", preco:"R$ 220"},
    {nome:"Roda Gigante", cidade:"Balneário Camboriú - SC", preco:"R$ 95"},
    {nome:"Águas Termais", cidade:"Águas Mornas - SC", preco:"R$ 320"},
    {nome:"Nossa Senhora de Lourdes", cidade:"Canelinhas - RS", preco:"Grátis"},
    {nome:"Porto de Galinhas", cidade:"Porto de Galinhas - PE", preco:"Grátis"},
    {nome:"Trem", cidade:"Morretes - PR", preco:"R$ 230"},
    {nome:"Aquário", cidade:"Balneário Camboriú - SC", preco:"R$ 70"}
]

const TopoTabela = 
    `<tr>
      <th>Nome</th>
      <th>Local</th>
      <th>Preço</th>
    </tr>`

const CorpoTabela = (objeto) => (
  objeto.map((item) => {
    return `<tr>
      <td>${item.nome}</td>
      <td>${item.cidade}</td>
      <td>${item.preco}</td>
    </tr>`;
  })
);

tabela.innerHTML = '<table id="table_passeios">'
tabela.innerHTML += TopoTabela
tabela.innerHTML += CorpoTabela(passeios)
tabela.innerHTML += '</table>'



const busca = document.getElementById("busca")

function filtrar () {
  let filter = passeios.filter((lugar) => {
    if(lugar.nome.startsWith(busca.value)){
      return lugar
    }
  })
  tabela.innerHTML = '<table id="table_passeios">'
  tabela.innerHTML += TopoTabela
  tabela.innerHTML += CorpoTabela(filter)
  tabela.innerHTML += '</table>'
}
