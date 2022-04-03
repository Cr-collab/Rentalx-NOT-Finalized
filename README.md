<!-- **_ Requisitos funcionais _**
São as funcionalidade da nosso aplicação.

**_ Requisitos não funcionais _**
São requisitos que não estão ligados com a aplicação.
por exemplo os dados devem ser salvo no banco de dados postgres.

**_ Regra de Negocios _**
Regras baseado nas requisitos funcinais

--- -->

# Cadastro de carros

**_ Requisitos não funcionais _**
Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**_ Regra de Negocios _**
Não deve ser possivel cadastrar um carro com uma placa já existente
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastardo, por padrão com disponibilidade .
O usuário responsavel pelo cadastro deve der usuario adminitrador.

# Listagem de carros

**_ Requisitos funcionais _**
Deve ser possivel listar todos os carros disponivel.
Deve ser possivel listar todos os carros disponivel pelo nome da categoria.
Deve ser possivel listar todos os carros disponivel pelo nome da marca .

**_ Regra de Negocios _**
O usuario não precisa estar logado no sistema.

# Cadastro de especificação dos carros

**_ Requisitos funcionais _**
Deve ser possivel cadastrar uma especificação para um carro
Deve ser possivel listar todas especificações.
Deve ser possivel listar todos os carros.

**_ Regra de Negocios _**
Não deve ser possivel cadastra uma especificação para um carro não cadastrado.
Não deve ser posssivel cadastar um especificação ja existente para o mesmo carro.
O usuário responsavel pelo cadastro deve der usuario adminitrador.

# Cadastro de imagens do carro

**_ Requisitos funcionais _**
Deve ser possivel cadastra a imagen do carro.
Deve ser psoivel listar todos os carros.

**_ Requisitos não funcionais _**
utilizar o multer para uploads de arquivos

**_ Regra de Negocios _**
O usuario pode cadastra mais uma imagem para o mesmo carro.
O usuário responsavel pelo cadastro deve der usuario adminitrador.
Não deve ser possivel cadastra uma imagem para um carro não cadastrado.

# Aluguel de carros.

**_ Requisitos funcionais _**
Deve ser possivel casdastra um aluguel.
**_ Requisitos não funcionais _**

**_ Regra de Negocios _**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastra um novo aluguel caso já exista um aberto para o mesmo usuario.
Não deve ser possivel cadastra um novo aluguel caso já exista um aberto para o mesmo carro.
