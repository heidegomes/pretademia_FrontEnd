import { useContext } from 'react';
import PretademiaContext from '../../context/pretademiaContext';

const Table = () => {
  const { filteredData } = useContext(PretademiaContext);

  console.log(filteredData);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-400 shadow-md rounded-lg p-6 border border-gray-200 w-full"
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-purple-950 mb-1">
                Discente: {item.discente}
              </h2>
              <p className="text-sm text-purple-950">
                <strong>Projeto:</strong> {item.projeto}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-purple-950 space-y-1">
                <li>
                  <strong>Ano:</strong> {item.ano}
                </li>
                <li>
                  <strong>Região:</strong> {item.regiao}
                </li>
                <li>
                  <strong>UF:</strong> {item.uf_ies}
                </li>
                <li>
                  <strong>Entidade de Ensino:</strong> {item.entidade_ensino}
                </li>
                <li>
                  <strong>Programa:</strong> {item.programa}
                </li>
                <li>
                  <strong>Grande Área de Conhecimento:</strong> {item.grande_area_conhecimento}
                </li>
                <li>
                  <strong>Área de Conhecimento:</strong> {item.area_conhecimento}
                </li>
                <li>
                  <strong>Área de Avaliação:</strong> {item.area_avaliacao}
                </li>
                <li>
                  <strong>Grau Acadêmico:</strong> {item.grau_academico}
                </li>
                <li>
                  <strong>Palavra-chave:</strong> {item.palavra_chave}
                </li>
                <li>
                  <strong>Linha de Pesquisa:</strong> {item.linha_pesquisa}
                </li>
                <li>
                  <strong>Orientador:</strong> {item.orientador}
                </li>
              </ul>
              <div>
                <p className="text-sm text-purple-950">
                  <strong>Resumo:</strong> {item.resumo || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
