# Modelo Entidade-Relacionamento - ME-R

## Entidades:

* USUARIO
* PUBLICACAO
* IMAGEM
* COMENTARIO
* AVALIACAO
* PROJETO

## Atributos:

* USUARIO (<ins>idUsuario</ins>, email, nomeCompleto, criadoEm, telefone, hashSenha, localidade, categoria, imagemPerfil, descricao, respDeSeguranca)
* PUBLICACAO (<ins>idPublicacao</ins>, descricao, idUsuario, pubCriadaEm)
* IMAGEM (<ins>idImagem</ins>, nomeImagem, url, idPublicacao)
* COMENTARIO (<ins>idComentario</ins>, idUsuario, idDono, conteudo, comentarioCriadoEm)
* AVALIACAO (<ins>idAvaliacao</ins>, idAvaliador, idAvaliado, nota)
* PROJETO (<ins>idProjeto</ins>, tituloProjeto, imagemProjeto, descricaoProjeto, idProprietario, localidaProjeto, descricaoProjeto)

## Relacionamentos:


### USUARIO tem PUBLICACAO
* Um USUARIO pode ter nenhuma, uma ou várias PUBLICACAO mas PUBLICACAO pertence a um e apenas um USUARIO.

 Cardinalidade: 1 : n

### USUARIO gera PROJETO
* Um USUARIO pode definir nenhum, um ou vários PROJETO, mas PROJETO só é definido por um e apenas um USUARIO.

Cardinalidade: 1 : n

### USUARIO candidatase PROJETO
* Um USUARIO pode se candidatar a nenhum, um ou vários PROJETO, assim como um PROJETO pode ter nenhum, um ou vários USUARIO.

Cardinalidade: n : m

### USUARIO faz AVALIACAO
* Um USUARIO pode fazer nenhuma, uma ou várias AVALIACAO, mas cada AVALIACAO só pode ser de um e apenas um USUARIO.

Cardinalidade: 1 : n

### USUARIO ganha AVALIACAO

* Um USUARIO pode receber nenhuma, uma ou várias AVALIACAO, mas cada AVALIACAO é de um e apenas um USUARIO.

Cardinalidade: 1 : n


### PUBLICACAO possui IMAGEM

* Uma PUBLICACAO pode possuir uma e apenas uma IMAGEM

Cardinalidade: 1 : 1

### USUARIO cria COMENTARIO

* Um USUARIO pode criar nenhum, um ou vários COMENTARIO mas cada COMENTARIO é criado por um e apenas um USUARIO.

Cardinalidade: 1 : n

### USUARIO recebe COMENTARIO

* Um USUARIO pode receber nenhum, um ou vários COMENTARIO, mas cada COMENTARIO é de apenas um USUARIO.

# Diagrama Entidade-Relacionamento - DE-R

![ConceitualObraCerta](https://user-images.githubusercontent.com/50925505/101090826-03cc0180-3596-11eb-8d81-418d12e98af5.png)

# Diagrama Lógico de Dados - DLD

![logico_ObraCerta](https://user-images.githubusercontent.com/50925505/101090846-0d556980-3596-11eb-871a-1d3b29553e67.png)




<br/>
<br/>
<br/>


- [Inicio](/index.md)
- [Apresentação](/Apresentacao.MD)
- [Metodologia](/Metodologia.MD)
- [Tecnologias](/Tecnologias.MD)
- [Requisitos](/Requisitos.MD)
- [Protótipo](/Prototipo.MD)
- [Cronograma](/Cronograma.MD)
- [Fluxograma](/Fluxograma.MD)
- [Backlog](/Backlog.MD)
- ModelagemBD
- [Design](/Design.md)
- [Entrega01](/Entrega01.MD)
- [Plaining Sprint 1](/Plaining_Sprint1.MD)
- [Review Sprint 1](/Review01.MD)
- [Plaining Sprint 2](/Plaining_Sprint2.MD)
- [Review Sprint 2](/Review02.MD)
- [Plaining Sprint 3](/Plaining_Sprint3.MD)
- [Review Sprint 3](/Review03.MD)
- [Entrega02](/Entrega02.MD)
