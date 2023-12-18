const years = []
for (let i = 1987; i <= new Date().getFullYear(); i++) {
  years.push(i);
}

const regions = [
  'Centro-Oeste',
  'Nordeste',
  'Norte',
  'Sudeste',
  'Sul',
];

const uf = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO',
]

const grauAcademico = [
  'Mestrado',
  'Doutorado',
]

module.exports = {
  years,
  regions,
  uf,
  grauAcademico,
};