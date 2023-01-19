const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  academia: ['01-17', '01-18', '01-19', '01-20', '01-21', '01-22'],
  estudos: ['01-16', '01-17', '01-18'],
  alimentaçãoSaudável: ['01-16', '01-17', '01-18']
}

nlwSetup.setData(data)
nlwSetup.load()
