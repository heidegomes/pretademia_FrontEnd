'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import PretademiaContext from '../../context/pretademiaContext';
import { years, regions, uf, grauAcademico } from '../../services/dataFilters';
import iconeRoxo from '../../public/iconeRoxo.png';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

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
    <div className='bg-yellow-400'>
      <div className='flex justify-center w-full bg-black'>
        <Image src={iconeRoxo} alt="pretademia" className='flex justify-center h-52 w-52 m-8' />
      </div>
      <form className='flex flex-col container mx-auto gap-4 text-purple-950 m-8'>
        <div className='flex flex-row gap-4 justify-center'>
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
              <Input type="text" name="orientador" id="orientador" value={filterOrientador} onChange={(e) => setFilterOrientador(e.target.value)} />
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
            <Label htmlFor="ano">Ano:
              <Select
                name="ano"
                id="ano"
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((e) => (
                    <SelectItem value={e} name={e} key={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div>
            <Label htmlFor="regiao">Região:
              <Select
                name="regiao"
                id="regiao"
                onChange={(e) => setSelectedRegiao(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                <SelectContent>
                  {regions.map((r) => (
                    <SelectItem value={r} name={r} key={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div>
            <Label htmlFor="uf">UF:
              <Select
                name="uf"
                id="uf"
                onChange={(e) => setSelectedUF(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                <SelectContent>
                  {uf.map((e) => (
                    <SelectItem value={e} name={e} key={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div>
            <Label htmlFor="entidade_ensino">Entidade de Ensino:
              <Select
                name="entidade_ensino"
                id="entidade_ensino"
                onChange={(e) => setSelectedEntidadeEnsino(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                <SelectContent>
                  {entidadeEnsinoData.map((e) => (
                    <SelectItem value={e.entidade_ensino} name={e.entidade_ensino} key={e.entidade_ensino}>
                      {e.entidade_ensino}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div>
            <Label htmlFor="grau_academido">Grau acadêmico:
              <Select
                name="grau_academico"
                id="grau_academico"
                onChange={(e) => setSelectedGrauAcademico(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {grauAcademico.map((e) => (
                    <SelectItem value={e} name={e} key={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>

        </div>
        <div className='flex flex-row gap-4 justify-center'>
          <div>
            <Label htmlFor="programa">Programa:
              <Select
                name="programa"
                id="programa"
                onChange={(e) => setSelectedPrograma(e.target.value)}
              >
                <SelectTrigger className="w-[192px]">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                <SelectContent>
                  {programaData.map((e) => (
                    <SelectItem value={e.programa} name={e.programa} key={e.programa}>
                      {e.programa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
          </div>
          <div>
            <Label htmlFor="grande_area_conhecimento">Grande Área de Conhecimento:
              <Select
                name="grande_area_conhecimento"
                id="grande_area_conhecimento"
                onChange={(e) => setSelectedGrandeAreaConhecimento(e.target.value)}
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
            </Label>
          </div>
          <div>
            <Label htmlFor="area_conhecimento">Área de Conhecimento:
              <Select
                name="area_conhecimento"
                id="area_conhecimento"
                onChange={(e) => setSelectedAreaConhecimento(e.target.value)}
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
            </Label>
          </div>
          <div>
            <Label htmlFor="area_avaliacao">Área de Avaliação:
              <Select
                name="area_avaliacao"
                id="area_avaliacao"
                onChange={(e) => setSelectedAreaAvaliacao(e.target.value)}
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
            </Label>
          </div>
        </div>

        <div className='flex flex-row gap-4 justify-between mb-4'>
          <Button type="button" size='lg' className='text-yellow-400 bg-purple-950'>
            Limpar filtros
          </Button>
          <Button type="button" size='lg' className='text-yellow-400 bg-purple-950' onClick={handleFilter}>
            Filtrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
