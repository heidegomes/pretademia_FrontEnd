// Client component
import { useContext, useEffect, useState } from 'react';
import styles from './filtro.module.css';
import { useRouter } from 'next/navigation';
import PretademiaContext from '../context/pretademiaContext';
import { years, regions, uf, grauAcademico } from '../services/dataFilters';


const Filtro = () => {
  const router = useRouter();
  const [filterTitulo, setFilterTitulo] = useState('');
  const [filterDiscente, setFilterDiscente] = useState('');
  const [filterOrientador, setFilterOrientador] = useState('');
  const [palavraChave, setPalavraChave] = useState('');
  const [linhaPesquisa, setLinhaPesquisa] = useState('');
  const [selectedGrauAcademico, setSelectedGrauAcademico] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRegiao, setSelectedRegiao] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [entidadeEnsinoData, setEntidadeEnsinoData] = useState([]);
  const [selectedEntidadeEnsino, setSelectedEntidadeEnsino] = useState('');
  const [programaData, setProgramaData] = useState([]);
  const [selectedPrograma, setSelectedPrograma] = useState('');
  const [grandeAreaConhecimentoData, setGrandeAreaConhecimentoData] = useState([]);
  const [selectedGrandeAreaConhecimento, setSelectedGrandeAreaConhecimento] = useState('');
  const [areaConhecimentoData, setAreaConhecimentoData] = useState([]);
  const [selectedAreaConhecimento, setSelectedAreaConhecimento] = useState('');
  const [areaAvaliacaoData, setAreaAvaliacaoData] = useState([]);
  const [selectedAreaAvaliacao, setSelectedAreaAvaliacao] = useState('');
  const [queryParams, setQueryParams] = useState('');

  // Shared data
  const { filteredData, setFilteredData } = useContext(PretademiaContext);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/projects?${queryParams}`);
        const data = await response.json();
        setFilteredData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilteredData();
  }, [queryParams]);

  useEffect(() => {
    const fetchEntidadeEnsino = async () => {
      try {
        const entidadeEnsino = await fetch('http://localhost:3001/entidadeEnsino');
        const entidadeEnsinoData = await entidadeEnsino.json();
        setEntidadeEnsinoData(entidadeEnsinoData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntidadeEnsino();

    const fetchPrograma = async () => {
      try {
        const programa = await fetch('http://localhost:3001/programa');
        const programaData = await programa.json();
        setProgramaData(programaData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrograma();

    const fetchGrandeAreaConhecimento = async () => {
      try {
        const grandeAreaConhecimento = await fetch('http://localhost:3001/grandeAreaConhecimento');
        const grandeAreaConhecimentoData = await grandeAreaConhecimento.json();
        setGrandeAreaConhecimentoData(grandeAreaConhecimentoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGrandeAreaConhecimento();

    const fetchAreaConhecimento = async () => {
      try {
        const areaConhecimento = await fetch('http://localhost:3001/areaConhecimento');
        const areaConhecimentoData = await areaConhecimento.json();
        setAreaConhecimentoData(areaConhecimentoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAreaConhecimento();

    const fetchAreaAvaliacao = async () => {
      try {
        const areaAvaliacao = await fetch('http://localhost:3001/areaAvaliacao');
        const areaAvaliacaoData = await areaAvaliacao.json();
        setAreaAvaliacaoData(areaAvaliacaoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAreaAvaliacao();

  }, []);

  const handleFilter = () => {  // Aplica o filtro apenas quando o botão é clicado
    const queryParamsObj = {};
    console.log("cliquei aqui")
    if (filterTitulo) queryParamsObj.projeto = filterTitulo;
    if (filterDiscente) queryParamsObj.discente = filterDiscente;
    if (filterOrientador) queryParamsObj.orientador = filterOrientador;
    if (palavraChave) queryParamsObj.palavra_chave = palavraChave;
    if (linhaPesquisa) queryParamsObj.linha_pesquisa = linhaPesquisa;
    if (selectedGrauAcademico) queryParamsObj.grau_academico = grauAcademico;
    if (selectedYear) queryParamsObj.ano = selectedYear;
    if (selectedRegiao) queryParamsObj.regiao = selectedRegiao;
    if (selectedUF) queryParamsObj.uf_ies = selectedUF;
    if (selectedEntidadeEnsino) queryParamsObj.entidade_ensino = selectedEntidadeEnsino;
    if (selectedPrograma) queryParamsObj.programa = selectedPrograma;
    if (selectedGrandeAreaConhecimento) queryParamsObj.grande_area_conhecimento = selectedGrandeAreaConhecimento;
    if (selectedAreaConhecimento) queryParamsObj.area_conhecimento = selectedAreaConhecimento;
    if (selectedAreaAvaliacao) queryParamsObj.area_avaliacao = selectedAreaAvaliacao;

    const query = new URLSearchParams(queryParamsObj).toString();

    router.push({
      pathname: '/',
      query: query,
    });

    setQueryParams(query)
  };

  return (
    <div className={styles.filtro__container}>
      <form>
        <div className={styles.searchText__container}>
          <div className={styles.searchText}>
            <div>
              <label htmlFor="titulo">Título do projeto:
                <input type="text" name="titulo" id="titulo" value={filterTitulo} onChange={(e) => setFilterTitulo(e.target.value)} />
              </label>
            </div>
            <div>
              <label htmlFor="discente">Discente:
                <input type="text" name="discente" id="discente" value={filterDiscente} onChange={(e) => setFilterDiscente(e.target.value)} />
              </label>
            </div>
            <div>
              <label htmlFor="orientador">Orientador:
                <input type="text" name="orientador" id="orientador" value={filterOrientador} onChange={(e) => setFilterOrientador(e.target.value)} />
              </label>
            </div>
            <div>
              <label htmlFor="palavra_chave">Palavra-chave:
                <input type="text" name="palavra_chave" id="palavra_chave" value={palavraChave} onChange={(e) => setPalavraChave(e.target.value)} />
              </label>
            </div>
            <div>
              <label htmlFor="linha_pesquisa">Linha de pesquisa:
                <input type="text" name="linha_pesquisa" id="linha_pesquisa" value={linhaPesquisa} onChange={(e) => setLinhaPesquisa(e.target.value)} />
              </label>
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <div>
          <label htmlFor="grau_academido">Grau acadêmico:
            <select
                className={styles.selected}
              name="grau_academico"
              id="grau_academico"
              onChange={(e) => setSelectedGrauAcademico(e.target.value)}
            >
              {grauAcademico.map((e) => (
                <option value={e} name={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="ano">Ano:
            <select
                className={styles.selected}
              name="ano"
              id="ano"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((e) => (
                <option value={e} name={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="regiao">Região:
            <select
                className={styles.selected}
              name="regiao"
              id="regiao"
              onChange={(e) => setSelectedRegiao(e.target.value)}
            >
              {regions.map((r) => (
                <option value={r} name={r} key={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="uf">UF:
            <select
                className={styles.selected}
              name="uf"
              id="uf"
              onChange={(e) => setSelectedUF(e.target.value)}
            >
              {uf.map((e) => (
                <option value={e} name={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="entidade_ensino">Entidade de Ensino:
            <select
                className={styles.selected}
              name="entidade_ensino"
              id="entidade_ensino"
              onChange={(e) => setSelectedEntidadeEnsino(e.target.value)}
            >
              {entidadeEnsinoData.map((e) => (
                <option value={e.entidade_ensino} name={e.entidade_ensino} key={e.entidade_ensino}>
                  {e.entidade_ensino}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="programa">Programa:
            <select
                className={styles.selected}
              name="programa"
              id="programa"
              onChange={(e) => setSelectedPrograma(e.target.value)}
            >
              {programaData.map((e) => (
                <option value={e.programa} name={e.programa} key={e.programa}>
                  {e.programa}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="grande_area_conhecimento">Grande Área de Conhecimento:
            <select
                className={styles.selected}
              name="grande_area_conhecimento"
              id="grande_area_conhecimento"
              onChange={(e) => setSelectedGrandeAreaConhecimento(e.target.value)}
            >
              {grandeAreaConhecimentoData.map((e) => (
                <option value={e.grande_area_conhecimento} name={e.grande_area_conhecimento} key={e.grande_area_conhecimento}>
                  {e.grande_area_conhecimento}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="area_conhecimento">Área de Conhecimento:
            <select
                className={styles.selected}
              name="area_conhecimento"
              id="area_conhecimento"
              onChange={(e) => setSelectedAreaConhecimento(e.target.value)}
            >
              {areaConhecimentoData.map((e) => (
                <option value={e.area_conhecimento} name={e.area_conhecimento} key={e.area_conhecimento}>
                  {e.area_conhecimento}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="area_avaliacao">Área de Avaliação:
            <select
                className={styles.selected}
              name="area_avaliacao"
              id="area_avaliacao"
              onChange={(e) => setSelectedAreaAvaliacao(e.target.value)}
            >
              {areaAvaliacaoData.map((e) => (
                <option value={e.area_avaliacao} name={e.area_avaliacao} key={e.area_avaliacao}>
                  {e.area_avaliacao}
                </option>
              ))}
            </select>
          </label>
        </div>
        </div>
        <div className={styles.options_button}>
          <button className={styles.button} type="button" onClick={handleFilter}>
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
