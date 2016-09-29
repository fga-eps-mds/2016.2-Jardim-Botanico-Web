[![Build Status](https://travis-ci.org/fga-gpp-mds/2016.2-Jardim-Botanico-Web.svg?branch=development)](https://travis-ci.org/fga-gpp-mds/2016.2-Jardim-Botanico-Web)

[![Test Coverage](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/badges/coverage.svg)](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/coverage)

[![Code Climate](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/badges/gpa.svg)](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web)

# [Política de uso do repositório](https://github.com/fga-gpp-mds/2016.2-Time06-Jardim-Botanico-Web/wiki/Pol%C3%ADtica-de-uso-do-repositório)

# Ambiente de desenvolvimento

Para contribuir com o projeto faça o download do repositório e na pasta raiz do projeto execute:

`vagrant up --provider virtualbox`

Quando a box estiver ativa use:

`vagrant ssh`

Siga os comandos a seguir para configurar o banco de dados com os requisitos do projeto:

`sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main' > /etc/apt/sources.list.d/pgdg.list"`

`wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -`

`sudo apt-get update`

Entre no modo root:

`sudo su`

vá para a pasta base:

`cd`

encontre o arquivo pg_hba.conf

`nano /etc/postgresql/9.5/pg_hba.conf`

modifique as linhas no documento:

local	all	postgres	peer

local	all	all	peer

para:

local	all	postgres	trust

local	all	all	trust

Feito isso ainda no usuário root reinicie o serviço postgresql:

`service postgresql reload`

Saia do usuário root:

`exit`

Entre no serviço postgresql com o usuário postgres e crie o usuário travis para a aplicação:

`psql -U postgres`

`create user travis with createdb;`

Então o banco de dados estará devidamente instalado e configurado. Para sair execute \q.

Entre na pasta do projeto e execute:

`bundle install`

`rake db:setup`

E por fim:

`rails s`
