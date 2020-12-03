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

### USUARIO define PROJETO
* Um USUARIO pode definir nenhum, um ou vários PROJETO, mas PROJETO só é definido por um e apenas um USUARIO.

Cardinalidade: 1 : n

### USUARIO candidata-se PROJETO
* Um USUARIO pode se candidatar a nenhum, um ou vários PROJETO, assim como um PROJETO pode ter nenhum, um ou vários USUARIO.

Cardinalidade: n : m

### USUARIO faz AVALIACAO
* Um USUARIO pode fazer nenhuma, uma ou várias AVALIACAO, mas cada AVALIACAO só pode ser de um e apenas um USUARIO.

Cardinalidade: 1 : n

### USUARIO recebe AVALIACAO

* Um USUARIO pode receber nenhuma, uma ou várias AVALIACAO, mas cada AVALIACAO é de um e apenas um USUARIO.

Cardinalidade: 1 : n

### PUBLICACAO possui COMENTARIO

* Uma PUBLICACAO pode possuir nenhum, um ou vários COMENTARIO, mas cada COMENTARIO pertence a uma e apenas uma PUBLICACAO.

Cardinalidade: 1 : n

### USUARIO cria COMENTARIO

* Um USUARIO pode criar nenhum, um ou vários COMENTARIO mas cada COMENTARIO é criado por um e apenas um USUARIO.

Cardinalidade: 1 : n

# Diagrama Entidade-Relacionamento - DE-R

![ConceitualObraCerta](https://user-images.githubusercontent.com/50925505/101090826-03cc0180-3596-11eb-8d81-418d12e98af5.png)

# Diagrama Lógico de Dados - DLD

![logico_ObraCerta](https://user-images.githubusercontent.com/50925505/101090846-0d556980-3596-11eb-871a-1d3b29553e67.png)

<br/>
<br/>
<br/>

# DICIONÁRIO DE DADOS

|Entidade: USUARIO|
|--|
|Descrição: Define os dados do Usuário que serão cadastrados no banco de dados do ObraCerta|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|
|idUsuario|chave primária / obrigatório  | int | -- | número que identifica o usuário do ObraCerta| 
|email|obrigatório |VARCHAR|50 |e-mail do usuário cadastrado no ObraCerta|
|nomeCompleto|obrigatório|VARCHAR|100| |
|criadoEm|obrigatório|DATE|--|Data de criação do usuário no ObraCerta|
|telefone|obrigatório|VARCHAR|11|Número de telefone do usuário cadastrado no ObraCerta|

<br/>

|Entidade: PROJETO|
|--|
|Descrição: Define os dados do Projeto que serão cadastrados no banco de dados do ObraCerta|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|
|idProjeto|
|tituloProjeto|
|imagemProjeto|
|descicaoProjeto|
|localidadeProjeto|
|idProprietario|


<br/>


|Entidade: PUBLICACAO|
|--|
|Descrição: Define os dados da Publicação que serão cadastrados no banco de dados do ObraCerta|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|


<br/>

|Entidade: COMENTARIO|
|--|
|Descrição: Define os dados do Comentário que serão salvos no banco de dados do ObraCerta|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|


<br/>

|Entidade: AVALIACAO|
|--|
|Descrição: Define os dados da Avaliação que serão salvos no banco de dados do ObraCerta|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|



<br/>

|Relacionamento: candidata-se|
|--|
|Descrição: Define os dados do relacionamento entre o usuário e o projeto|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|

<br/>

|Atributo Multivalorado: imagem|
|--|
|Descrição: Imagens cadastradas pelo usuário na publicação|

|Atributo| Propriedades do atributo| Tipo de dado| Tamanho| Descrição|
|--|--|--|--|--|
|idImagem|chave Primária / obrigatório| INT| --| número de identificação da imagem|
|idUsuario| chave primaria / chave estrangeira/ obrigatório| INT| -- | número de identificação do usuário|
|urlImagem|obrigatório / único| VARCHAR| 200| url para a imagem na Amazon|


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
