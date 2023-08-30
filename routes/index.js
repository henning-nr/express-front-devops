var express = require('express');
var router = express.Router();
var axios = require('axios')
var fetch = require('fetch')


/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

/* GET home page. */
router.get('/person', function(req, res, next) {
	axios.get('https://devops-rest-api-fnr.up.railway.app/pessoas')
	.then((r)=>{
		// aqui eu mostro meus dados
		pessoaAux = r.data.map((pessoa)=>{
			pessoa = {
				id: pessoa.id,
				nome: pessoa.nome,
				signo: pessoa.signo,
				sangue: pessoa.tipo_sanguineo
			}
			return pessoa
		})
		// Colunas da tabela
		let cols = ['ID','NOME','SIGNO','SANGUE', 'AÇÕES']
		// renderizando index e passando o objeto pessoas
  	res.render('person', { pessoas: pessoaAux, cols:cols });
	})	
});


/* GET home page. */
router.get('/person/:id', function(req, res, next) {
	let id = req.params.id
	console.log('id do server', id)

	axios.get('https://devops-rest-api-fnr.up.railway.app/pessoas/'+id)
	.then((pessoa)=>{
		// aqui eu mostro meus dados
		console.log('resposta', pessoa.data)

		pessoaAux = {
				id: pessoa.data.id,
				nome: pessoa.data.nome,
				signo: pessoa.data.signo,
				sangue: pessoa.data.tipo_sanguineo
			}
		
		// renderizando index e passando o objeto pessoas
  	res.send(pessoaAux);
	})	
});

router.patch('/person/:id', function(req, res, next) {
	let dados = req.body
	let id = req.params.id
	console.log('id patch', req.params.id)
	console.log('dados body', dados.signo)
	
	axios.patch('https://devops-rest-api-fnr.up.railway.app/pessoas/'+id, dados)
	.then((pessoa)=>{

		console.log('resposta', pessoa.data)
		// renderizando index e passando o objeto pessoas
	}) .catch(function (error) {
    console.log('ERRO AQUI', error);
  });

	axios.get('https://devops-rest-api-fnr.up.railway.app/pessoas')
	.then((r)=>{
		// aqui eu mostro meus dados
		pessoaAux = r.data.map((pessoa)=>{
			pessoa = {
				id: pessoa.id,
				nome: pessoa.nome,
				signo: pessoa.signo,
				sangue: pessoa.tipo_sanguineo
			}
			return pessoa
		})
		// Colunas da tabela
		let cols = ['ID','NOME','SIGNO','SANGUE', 'AÇÕES']
		// renderizando index e passando o objeto pessoas
  	res.render('person', { pessoas: pessoaAux, cols:cols });
	})	
});


router.post('/person', function(req, res, next) {
	let dados = req.body
	let id = req.params.id
	console.log('id patch', req.params.id)
	console.log('dados body', dados.signo)
	
	axios.post('https://devops-rest-api-fnr.up.railway.app/pessoas/', dados)
	.then((pessoa)=>{

		console.log('resposta', pessoa.data)
		// renderizando index e passando o objeto pessoas
	}) .catch(function (error) {
    console.log('ERRO AQUI', error);
  });

	axios.get('https://devops-rest-api-fnr.up.railway.app/pessoas')
	.then((r)=>{
		// aqui eu mostro meus dados
		pessoaAux = r.data.map((pessoa)=>{
			pessoa = {
				id: pessoa.id,
				nome: pessoa.nome,
				signo: pessoa.signo,
				sangue: pessoa.tipo_sanguineo
			}
			return pessoa
		})
		// Colunas da tabela
		let cols = ['ID','NOME','SIGNO','SANGUE', 'AÇÕES']
		// renderizando index e passando o objeto pessoas
  	res.render('person', { pessoas: pessoaAux, cols:cols });
	})	
});


router.delete('/person/:id', function(req, res, next) {
	let id = req.params.id
		axios.delete('https://devops-rest-api-fnr.up.railway.app/pessoas/'+id)
	.then((r)=>{
		
	})

	axios.get('https://devops-rest-api-fnr.up.railway.app/pessoas')
	.then((r)=>{
		// aqui eu mostro meus dados
		pessoaAux = r.data.map((pessoa)=>{
			pessoa = {
				id: pessoa.id,
				nome: pessoa.nome,
				signo: pessoa.signo,
				sangue: pessoa.tipo_sanguineo
			}
			return pessoa
		})
		// Colunas da tabela
		let cols = ['ID','NOME','SIGNO','SANGUE', 'AÇÕES']
		// renderizando index e passando o objeto pessoas
  	res.render('person', { pessoas: pessoaAux, cols:cols });
	})	
})

module.exports = router;
