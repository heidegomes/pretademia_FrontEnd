'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import PretademiaContext from '../../context/pretademiaContext';
import { years, regions, uf, grauAcademico } from '../../services/dataFilters';
import iconeRoxo from '../../public/iconeRoxo.png';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '../../components/ui/Select';
import { Button } from '../../components/ui/Button';

const Filtro = () => {

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

  const { filteredData, setFilteredData } = useContext(PretademiaContext);

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

  const buildQuery = () => {
    const queryParamsObj = {};

    if (filterTitulo) queryParamsObj.projeto = String(filterTitulo);
    if (filterDiscente) queryParamsObj.discente = String(filterDiscente);
    if (filterOrientador) queryParamsObj.orientador = String(filterOrientador);
    if (palavraChave) queryParamsObj.palavra_chave = String(palavraChave);
    if (linhaPesquisa) queryParamsObj.linha_pesquisa = String(linhaPesquisa);
    if (selectedGrauAcademico) queryParamsObj.grau_academico = String(selectedGrauAcademico);
    if (selectedYear) queryParamsObj.ano = String(selectedYear);
    if (selectedRegiao) queryParamsObj.regiao = String(selectedRegiao);
    if (selectedUF) queryParamsObj.uf_ies = String(selectedUF);
    if (selectedEntidadeEnsino) queryParamsObj.entidade_ensino = String(selectedEntidadeEnsino);
    if (selectedPrograma) queryParamsObj.programa = String(selectedPrograma);
    if (selectedGrandeAreaConhecimento) queryParamsObj.grande_area_conhecimento = String(selectedGrandeAreaConhecimento);
    if (selectedAreaConhecimento) queryParamsObj.area_conhecimento = String(selectedAreaConhecimento);
    if (selectedAreaAvaliacao) queryParamsObj.area_avaliacao = String(selectedAreaAvaliacao);

    console.log('queryParamsObj:', queryParamsObj);

    const queryString = new URLSearchParams(queryParamsObj).toString(); 
    return queryString ? `?${queryString}` : ''; 
  }


  const fetchProjects = async (query = '') => {
    try {
      const response = await fetch(`http://localhost:3001/projects${query}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
      }

      const data = await response.json();
      setFilteredData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects(); 
  }, []);

  const handleFilter = async () => {
    const query = buildQuery();
    fetchProjects(query);
  };

  const handleClearFilters = () => {
    setFilterTitulo('');
    setFilterDiscente('');
    setFilterOrientador('');
    setPalavraChave('');
    setLinhaPesquisa('');
    setSelectedGrauAcademico('');
    setSelectedYear('');
    setSelectedRegiao('');
    setSelectedUF('');
    setSelectedEntidadeEnsino('');
    setSelectedPrograma('');
    setSelectedGrandeAreaConhecimento('');
    setSelectedAreaConhecimento('');
    setSelectedAreaAvaliacao('');

    fetchProjects();
  };

  return (
    <div>
      <div className="flex justify-center w-full bg-black">
        <Image src={iconeRoxo} alt="pretademia" className="h-52 w-52 m-8" />
      </div>
      <div className="container mx-auto p-4">
        <form className="flex flex-col gap-4 text-purple-950 bg-yellow-400 border rounded-lg shadow-md border-gray-200">
        <div className='flex flex-row gap-4 justify-center mt-6'>
          <div>
            <Label htmlFor="titulo">Título do projeto:
              <Input type="text" name="titulo" id="titulo" value={filterTitulo} onChange={(e) => setFilterTitulo(e.target.value)} />
            </Label>
          </div>
          <div>
            <Label htmlFor="discente">Discente:
              <Input type="text" name="discente" id="discente" value={filterDiscente} onChange={(e) => setFilterDiscente(e.target.value)} />
            </Label>
          </div>
          <div>
            <Label htmlFor="orientador">Orientador:
              <Input 
              type="text" 
              name="orientador" 
              id="orientador" 
              value={filterOrientador} 
              onChange={(e) => {
                  setFilterOrientador(e.target.value);
                  }} 
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="palavra_chave">Palavra-chave:
              <Input type="text" name="palavra_chave" id="palavra_chave" value={palavraChave} onChange={(e) => setPalavraChave(e.target.value)} />
            </Label>
          </div>
          <div>
            <Label htmlFor="linha_pesquisa">Linha de pesquisa:
              <Input type="text" name="linha_pesquisa" id="linha_pesquisa" value={linhaPesquisa} onChange={(e) => setLinhaPesquisa(e.target.value)} />
            </Label>
          </div>
        </div>

        <div className='flex flex-row gap-4 justify-center'>
          <div>
            <Label htmlFor="ano">Ano:</Label>
            <Select
              name="ano"
              id="ano"
              value={selectedYear}
              onValueChange={(value) => setSelectedYear(value)}
            >
              <SelectTrigger className="w-[192px]">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                {years.map((e) => (
                  <SelectItem value={String(e)} name={String(e)} key={e}>
                    {e}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="regiao">Região:</Label>
            <Select
              name="regiao"
              id="regiao"
              value={selectedRegiao}
              onValueChange={(value) => setSelectedRegiao(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                {regions.map((r) => (
                  <SelectItem value={r} name={r} key={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="uf">UF:</Label>
              <Select
                name="uf"
                id="uf"
                value={selectedUF}
                onValueChange={(value) => setSelectedUF(value)}
              >
                <SelectTrigger className="w-[192px]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                  {uf.map((e) => (
                    <SelectItem value={e} name={e} key={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>
          <div>
            <Label htmlFor="entidade_ensino">Entidade de Ensino: </Label>
            <Select
              name="entidade_ensino"
              id="entidade_ensino"
              value={selectedEntidadeEnsino}
              onValueChange={(value) => setSelectedEntidadeEnsino(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                {entidadeEnsinoData.map((e) => (
                  <SelectItem value={e.entidade_ensino} name={e.entidade_ensino} key={e.entidade_ensino}>
                    {e.entidade_ensino}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="grau_academido">Grau acadêmico:</Label>
            <Select
              name="grau_academico"
              id="grau_academico"
              value={selectedGrauAcademico}
              onValueChange={(value) => setSelectedGrauAcademico(value)}
            >
              <SelectTrigger className="w-[192px]">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                {grauAcademico.map((e) => (
                  <SelectItem value={e} name={e} key={e}>
                    {e}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </div>
        <div className='flex flex-row gap-4 justify-center'>
          <div>
            <Label htmlFor="programa">Programa:</Label>
            <Select
              name="programa"
              id="programa"
              value={selectedPrograma}
              onValueChange={(value) => setSelectedPrograma(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                  <SelectItem value={null} key="none">Selecione</SelectItem>
                {programaData.map((e) => (
                  <SelectItem value={e.programa} name={e.programa} key={e.programa}>
                    {e.programa}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="grande_area_conhecimento">Grande Área de Conhecimento:</Label>
            <Select
              name="grande_area_conhecimento"
              id="grande_area_conhecimento"
              value={selectedGrandeAreaConhecimento}
              onValueChange={(value) => setSelectedGrandeAreaConhecimento(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                {grandeAreaConhecimentoData.map((e) => (
                  <SelectItem value={e.grande_area_conhecimento} name={e.grande_area_conhecimento} key={e.grande_area_conhecimento}>
                    {e.grande_area_conhecimento}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="area_conhecimento">Área de Conhecimento:</Label>
            <Select
              name="area_conhecimento"
              id="area_conhecimento"
              value={selectedAreaConhecimento}
              onValueChange={(value) => setSelectedAreaConhecimento(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                {areaConhecimentoData.map((e) => (
                  <SelectItem value={e.area_conhecimento} name={e.area_conhecimento} key={e.area_conhecimento}>
                    {e.area_conhecimento}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="area_avaliacao">Área de Avaliação:</Label>
            <Select
              name="area_avaliacao"
              id="area_avaliacao"
              value={selectedAreaAvaliacao}
              onValueChange={(value) => setSelectedAreaAvaliacao(value)}
            >
              <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              <SelectContent>
                {areaAvaliacaoData.map((e) => (
                  <SelectItem value={e.area_avaliacao} name={e.area_avaliacao} key={e.area_avaliacao}>
                    {e.area_avaliacao}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

          <div className="flex flex-row gap-4 justify-between mb-6 mx-28 mt-2">
            <Button
              type="button"
              size="lg"
              className="text-yellow-400 bg-purple-950"
              onClick={handleClearFilters}
            >
              Limpar filtros
            </Button>
            <Button
              type="button"
              size="lg"
              className="text-yellow-400 bg-purple-950"
              onClick={handleFilter}
            >
              Filtrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filtro;
