DROP DATABASE provabot;

CREATE DATABASE provabot;
USE provabot;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
cpf VARCHAR(14) NOT NULL,
senha VARCHAR(255) NOT NULL,
is_admin BOOLEAN NOT NULL DEFAULT FALSE,
logado BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE perguntas(
id INT AUTO_INCREMENT PRIMARY KEY,
pergunta LONGTEXT NOT NULL,
alternativa1 LONGTEXT,
alternativa2 LONGTEXT,
alternativa3 LONGTEXT,
alternativa4 LONGTEXT,
alternativa5 LONGTEXT,
resposta VARCHAR(1) NOT NULL
);

CREATE TABLE disciplinas (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL
);

CREATE INDEX idx_users_cpf ON users (cpf);
CREATE INDEX idx_disciplina_nome ON disciplinas (nome);

CREATE TABLE notas (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
valor FLOAT NOT NULL,
user_cpf VARCHAR(14) NOT NULL,
disciplina_nome VARCHAR(255) NOT NULL,
FOREIGN KEY (user_cpf) REFERENCES users(cpf),
FOREIGN KEY (disciplina_nome) REFERENCES disciplinas(nome)
);
CREATE TABLE verificacao(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cpf_user VARCHAR(14) NOT NULL,
verificacao_user BOOLEAN DEFAULT FALSE,
FOREIGN KEY (cpf_user) REFERENCES users(cpf)
);

INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes linguagens é comumente usada no desenvolvimento de backend?", "HTML", "CSS", "JavaScript", "Python", "jQuery", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes ferramentas pode ser usada para criar APIs no backend?", "Postman", "React", "Bootstrap", "Angular", "Vue.js", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("O que é um servidor web no contexto do desenvolvimento de backend?", "Um computador que hospeda um site", "Um software que processa as solicitações de um aplicativo da web", "Um programa que permite a criação de modelos de dados", "Um serviço que facilita a comunicação entre servidores", "Um tipo de banco de dados", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de um banco de dados relacional?", "MongoDB", "Redis", "Elasticsearch", "MySQL", "Cassandra", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma abordagem comum para autenticação em um backend?", "Criptografia", "Armazenamento em cache", "API RESTful", "Token JWT", "MVC", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma linguagem de programação frequentemente usada para escrever código em um servidor web?", "Java", "Swift", "Objective-C", "Ruby", "JavaScript", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para melhorar o desempenho de um aplicativo da web?", "Armazenamento de dados em arquivos", "Uso de muitas bibliotecas de terceiros", "Usando muitos frameworks", "Cache de resultados de consulta de banco de dados", "Ignorando completamente o front-end", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um software comumente usado para hospedar aplicativos web em um servidor?", "Apache", "Nginx", "IIS", "Tomcat", "Lighttpd", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma abordagem comum para o armazenamento de senhas em um aplicativo web?", "Armazenamento em texto simples", "Hashing de senha com um algoritmo como SHA-256", "Codificação de senha com um algoritmo como ROT13", "Nenhuma codificação necessária", "Armazenamento de senha em um arquivo separado no servidor", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estratégia comum para lidar com o tráfego intenso em um aplicativo web?", "Comprar um servidor maior", "Limitar o número de usuários que podem usar o aplicativo ao mesmo tempo", "Ocultar recursos que não são necessários no momento", "Dividir a carga de trabalho em vários servidores", "Desligar o aplicativo durante os períodos de pico de tráfego", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um método comum para se comunicar com um banco de dados em um aplicativo web?", "HTTP", "SSH", "FTP", "SMTP", "SQL", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma forma comum de representar dados em um aplicativo web?", "HTML", "SVG", "XML", "PNG", "MP4", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para proteger um aplicativo web contra ataques de SQL injection?", "Usar uma conexão de banco de dados não criptografada", "Usar consultas de banco de dados dinâmicas", "Usar funções de escape de string ao construir consultas de banco de dados", "Permitir caracteres especiais em todas as entradas do usuário", "Não sanitizar entradas do usuário em nenhuma circunstância", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma forma comum de testar a integridade de um aplicativo web?", "Testes de integração", "Testes de unidade", "Testes de aceitação", "Testes de regressão", "Testes de carga", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma abordagem comum para lidar com erros em um aplicativo web?", "Não lidar com erros", "Log de erros e relatórios de falhas", "Encerrar o aplicativo após cada erro", "Reiniciar o servidor após cada erro", "Ignorar os erros e continuar a execução do aplicativo", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estrutura comum de dados usada para armazenar informações em um banco de dados relacional?", "Array", "Pilha", "Fila", "Árvore", "Tabela", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma forma comum de gerenciar o acesso a recursos em um aplicativo web?", "Permitir acesso total a todos os usuários", "Negar acesso a todos os usuários", "Atribuir um único nível de acesso para todos os usuários", "Usar autenticação e autorização para controlar o acesso dos usuários", "Depender de recursos físicos para limitar o acesso dos usuários", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma abordagem comum para lidar com cache em um aplicativo web?", "Não usar cache em nenhum momento", "Armazenar todas as informações em cache permanentemente", "Armazenar todas as informações em cache apenas temporariamente", "Armazenar algumas informações em cache com base em um critério específico", "Usar cache para todas as informações, independentemente da relevância", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para melhorar a escalabilidade de um aplicativo web?", "Usar um único servidor para todos os usuários", "Manter todos os dados em um único banco de dados", "Usar balanceamento de carga para distribuir o tráfego entre vários servidores", "Permitir que o tráfego do usuário aumente sem limitações", "Executar o aplicativo web em um único thread", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma prática comum de segurança para proteger um aplicativo web?", "Permitir que qualquer pessoa possa acessar o código-fonte do aplicativo", "Usar senhas simples para todas as contas de usuário", "Permitir que os usuários enviem comandos diretamente para o servidor", "Usar conexões de rede não seguras", "Usar um firewall para controlar o acesso ao servidor", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para otimizar consultas em um banco de dados relacional?", "Não usar índices", "Usar muitos índices para cada tabela", "Usar um único índice para todas as tabelas", "Usar índices apenas para colunas muito grandes", "Usar índices apenas para colunas frequentemente consultadas", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma linguagem comum para consultar bancos de dados relacionais?", "Java", "HTML", "Python", "SQL", "C++", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para proteger um banco de dados relacional contra ameaças externas?", "Não usar autenticação ou autorização", "Permitir acesso completo a todos os usuários", "Manter todas as senhas do usuário em texto claro", "Usar conexões de rede seguras", "Armazenar todas as informações do banco de dados em cache", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um tipo comum de banco de dados usado para armazenar grandes quantidades de dados não estruturados?", "Banco de dados relacional", "Banco de dados em memória", "Banco de dados em nuvem", "Banco de dados de coluna larga", "Banco de dados NoSQL", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para fazer backup de um banco de dados?", "Nunca fazer backup de um banco de dados", "Fazer backup apenas uma vez por ano", "Fazer backup em discos rígidos externos", "Fazer backup em fitas magnéticas", "Fazer backup regularmente em locais diferentes", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma linguagem de programação usada para desenvolver aplicações em tempo real?", "Java", "PHP", "Python", "Ruby", "Elixir", "e");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para proteger um site contra ataques de injeção de SQL?", "Validar todos os dados de entrada", "Não fazer validação de dados", "Usar senhas fracas para as contas de usuário", "Não atualizar o software do servidor", "Não usar criptografia nos dados armazenados", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um protocolo comum usado para comunicação entre servidores web e aplicativos back-end?", "TCP", "HTTP", "FTP", "SMTP", "POP3", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para otimizar o desempenho de um site?", "Usar muitas imagens grandes", "Não fazer o cache de recursos do site", "Não usar técnicas de compactação de arquivos", "Usar CDN para servir conteúdo estático", "Não fazer a minificação de arquivos CSS e JavaScript", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um serviço comum usado para hospedar aplicativos back-end?", "Google Drive", "Dropbox", "Amazon Web Services", "OneDrive", "iCloud", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma ferramenta comum para gerenciar dependências de pacotes em aplicativos back-end?", "npm", "Babel", "Webpack", "React", "Vue", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para armazenar informações confidenciais em um aplicativo back-end?", "Salvar as senhas como texto claro no banco de dados", "Armazenar as senhas em arquivos de texto plano no servidor", "Usar algoritmos de criptografia fortes para armazenar as senhas", "Permitir que os usuários escolham senhas fracas para facilitar a memorização", "Usar a mesma senha para todos os usuários", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estratégia comum para escalonar um aplicativo back-end?", "Adicionar recursos de hardware a um único servidor", "Executar várias cópias do aplicativo em diferentes servidores", "Não fazer nada e esperar o tráfego diminuir", "Eliminar recursos de hardware do servidor para economizar dinheiro", "Executar o aplicativo em um único servidor com recursos mínimos", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de uma ferramenta de virtualização comumente usada para desenvolver e implantar aplicativos back-end?", "Docker", "Kubernetes", "Ansible", "Puppet", "Chef", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estratégia comum para lidar com solicitações de entrada em um aplicativo back-end?", "Bloquear a solicitação imediatamente", "Executar a solicitação em um thread de processo separado", "Não executar a solicitação para economizar recursos", "Executar a solicitação na mesma thread de processo que o servidor principal", "Executar a solicitação em um servidor diferente", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de um banco de dados relacional comumente usado para aplicativos back-end?", "MySQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um protocolo comum para comunicação entre cliente e servidor em um aplicativo back-end?", "HTTP", "SSH", "FTP", "SMTP", "POP3", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para melhorar a performance de um aplicativo back-end?", "Minimizar o número de testes automatizados", "Usar hardware antigo para economizar dinheiro", "Usar estruturas de dados eficientes para armazenar informações", "Usar nomes de variáveis ​​longos e descritivos", "Não se preocupar com a legibilidade do código", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de um servidor web comumente usado para hospedar aplicativos back-end?", "Apache", "Nginx", "IIS", "Node.js", "Tomcat", "b");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estratégia comum para gerenciar cache em um aplicativo back-end?", "Não usar cache", "Armazenar o cache em um arquivo de texto simples no disco", "Armazenar o cache em um banco de dados relacional", "Usar um servidor de cache dedicado como o Redis", "Executar o cache no mesmo servidor que o aplicativo", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um método comum para implementar autenticação em um aplicativo back-end?", "Token JWT", "Criptografia RSA", "Auth0", "SAML", "OAuth", "a");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma estratégia comum para escalonar um aplicativo back-end?", "Adicionar mais hardware ao servidor existente", "Executar o aplicativo em um único servidor", "Não se preocupar com a escalabilidade", "Dividir o aplicativo em microserviços", "Reduzir a quantidade de tráfego na rede", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de uma biblioteca comumente usada para criar interfaces de programação de aplicativos (APIs) em um aplicativo back-end?", "React", "Angular", "Vue", "Express", "Flask", "d");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é uma técnica comum para melhorar a segurança em um aplicativo back-end?", "Armazenar senhas em texto simples no banco de dados", "Permitir que todos os usuários tenham acesso total ao aplicativo", "Usar HTTPS em vez de HTTP", "Não se preocupar com a validação de entrada do usuário", "Tornar todas as rotas públicas", "c");
INSERT INTO perguntas (pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, resposta) 
VALUES ("Qual das seguintes opções é um exemplo de uma linguagem de programação comumente usada para escrever aplicativos back-end?", "Java", "Swift", "Kotlin", "Objective-C", "JavaScript", "a");


INSERT INTO users (nome, cpf, senha, is_admin) VALUES ("Vinicius Oliveira", "13446382011", "12345", true);

INSERT INTO disciplinas (nome) VALUES ("Back-End");

SELECT * FROM users;
SELECT * FROM perguntas;
SELECT * FROM notas;
SELECT *FROM verificacao;

drop table verificacao;