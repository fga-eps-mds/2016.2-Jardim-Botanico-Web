[![Build Status](https://travis-ci.org/fga-gpp-mds/2016.2-Jardim-Botanico-Web.svg?branch=development)](https://travis-ci.org/fga-gpp-mds/2016.2-Jardim-Botanico-Web)

[![Test Coverage](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/badges/coverage.svg)](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/coverage)

[![Code Climate](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web/badges/gpa.svg)](https://codeclimate.com/github/fga-gpp-mds/2016.2-Jardim-Botanico-Web)

# [Política de uso do repositório](https://github.com/fga-gpp-mds/2016.2-Time06-Jardim-Botanico-Web/wiki/Pol%C3%ADtica-de-uso-do-repositório)

# Ambiente de desenvolvimento


Para contribuir com o projeto você deve fazer o download dos seguintes arquivos disponíveis neste repositório:
> ***install-ruby.sh***
>
> ***install-rvm.sh***
>
> ***install-postgresql.sh***
>
> ***Vagrantfile***


Após o download e com todos os arquivos salvos no mesmo diretório execute o seguinte comando:
> `vagrant up --provider virtualbox`

Logo após o download da box, já dentro do ambiente de desenvolvimento você deve alterar o ***.bashrc*** para ele entrar na pasta compartilhada entre os SO's sempre que a máquina for iniciada, para isso:

> `vim ~/.bashrc`

No final do arquivo, adicione:

> `cd /vagrant/`

Feito isso salve e feche o arquivo, agora toda vez que o ambiente for ligado ele já estará na pasta compartilhada.

Para configurar o banco de dados execute os seguintes passos:

> `sudo su`

> `cd`

> `nano /etc/postgresql/9.5/main/pg_hba.conf`

Feito isso altere as linhas abaixo:

> local	all	postgres	peer

> local	all	all	peer

para:

> local	all	postgres	trust

> local	all	all	trust

Feito isso ainda no usuário root reinicie o serviço postgresql e saia do modo root:

> `service postgresql reload`

> `exit`

Entre no serviço postgresql com o usuário postgres e crie o usuário travis para a aplicação:

> `psql -U postgres`

> `create user travis with createdb;`

Após isso é só executar os seguintes comandos:

> `bundle install`

> `rake db:setup`
