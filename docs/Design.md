# Design das aplicações

## Design da API
![DesignBack](DesignObraCertaback.png)

A API da aplicação possui um módulo principal `src`, onde fica toda a lógica do programa. Nela há os arquivos `server`, `app` e `routes` que, respectivamente, são responsáveis por: ser a porta de entrada do servidor; configurar a API e listar as rotas com os métodos dos controllers.

No módulo `controller` ficam localizados os `controllers`, que são responsáveis por gerenciar os dados dos servidores à medida que uma rota é chamada. Os arquivos `multer` e `authServices` dentro de `Config` e `Services` são responsáveis por, respectivamente, configurar o upload de imagens e lidar com a autenticação de usuários.

O módulo `Database` é onde ficam armazenadas as `migrations` do banco de dados, as quais são necessárias durante a produção para se manter o controle de mudanças, e também as seeds que povoam o banco de dados.

O módulo `tests` é onde ficam armazenados os testes automatizados unitários e de integração os quais são usados apenas durante a fase de desenvolvimento, mas podendo também ser utilizados para o trabalho de integração contínua.

## Design da aplicação

![Classe UML](https://user-images.githubusercontent.com/50925505/101095117-337e0800-359c-11eb-98d0-779d3cb02d91.png)

No módulo `components` ficam localizado o menor elemento da aplicação, esse são retulizaveis em um ou mais páginas, como botões, links e mensagens de alerta.

No módulo `pages` ficam localizados o codigo responsável pela exibição do conteudo e do uso dos componentes.

No módulo `routes` está localizado as rotas para encaminhar para qualquer página da aplicação.

No módulo `styles` fica localizado os estilso globais da aplicação apesar de cada page e components carregar seu própio estilo, porém, tratando-se de estilos que não se encontra na maioria das páginas.

No `services` há funções que fazem requisições fora da aplicação.

No `assets` ficam armazenado os arquivos utilizados na aplicação.

- [Inicio](/index.md)
- [Apresentação](/Apresentacao.MD)
- [Metodologia](/Metodologia.MD)
- [Tecnologias](/Tecnologias.MD)
- [Requisitos](/Requisitos.MD)
- [Protótipo](/Prototipo.MD)
- [Cronograma](/Cronograma.MD)
- [Fluxograma](/Fluxograma.MD)
- [Backlog](/Backlog.md)
- [ModelagemBD](/DER-DLD.MD)
- Design
- [Entrega01](/Entrega01.MD)
- [Plaining Sprint 1](/Plaining_Sprint1.MD)
- [Review Sprint 1](/Review01.MD)
- [Plaining Sprint 2](/Plaining_Sprint2.MD)
- [Review Sprint 2](/Review02.MD)
- [Plaining Sprint 3](/Plaining_Sprint3.MD)
- [Review Sprint 3](/Review03.MD)
- [Entrega02](/Entrega02.MD)
