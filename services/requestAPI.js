const fetchData = async () => {
  try {
    const projects = await fetch('http://localhost:3001/projects');
    const projectsData = await projects.json();
    setData(projectsData);
  } catch (error) {
    console.error(error);
  }
};
fetchData();

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

module.export = {
  fetchData,
  fetchEntidadeEnsino,
  fetchPrograma,
  fetchGrandeAreaConhecimento,
  fetchAreaConhecimento,
  fetchAreaAvaliacao,
};
