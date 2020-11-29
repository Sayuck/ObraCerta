# Modelo Entidade-Relacionamento - ME-R

## Entidades:

* USUARIO
* PUBLICACAO
* COMENTARIO
* PROJETO
* AVALIACAO

## Atributos:

* USUARIO (<ins>idUsuario</ins>, email, nomeCompleto, criadoEm, {telefone})
* PUBLICACAO (<ins>idPublicacao</ins>, idUsuario, {imagem}, pubCriadaEm)
* PROJETO (<ins>idProjeto</ins>, tituloProjeto, imagemProjeto, descricaoProjeto, idProprietario)
* AVALIACAO (<ins>idAvaliacao</ins>, idAvaliador, idAvaliado, nota)
* COMENTARIO (<ins>idComentario</ins>, idUsuario, idPublicacao, conteudo, comentarioCriadoEm)

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

![ME-R Krimps](https://user-images.githubusercontent.com/50925505/100556590-21d9ef00-3282-11eb-872e-5986a182056a.png)

# Diagrama Lógico de Dados - DLD

![Logico-Krimps](https://user-images.githubusercontent.com/50925505/100556618-52ba2400-3282-11eb-9cf9-861718c6259b.png)