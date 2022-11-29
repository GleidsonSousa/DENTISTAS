drop database if exists dentistas;
create database dentistas charset=UTF8 collate utf8_general_ci;

use dentistas;

create table profissionais(
    id_profissional integer  auto_increment not null primary key,
    nome varchar(100) not null,
    especialidade varchar(50) not null
);
 
create table consultas(
    id_consulta integer  auto_increment not null primary key,
    paciente varchar(100) not null,
    data varchar(10) not null,
    horario time  not null,
    profissional integer not null,
    foreign key (profissional) references profissionais(id_profissional)
);
create table tratamentos(
    id_tratamento integer  auto_increment not null primary key,
    consulta integer not null,
    tratamento varchar(50) not null,
    valor numeric(8,2) not null,
    foreign key (consulta) references consultas(id_consulta)
 );


create view vw_info_tratamentos as
select p.id_profissional, p.nome, p.especialidade, c.id_consulta, c.paciente, c.data, c.horario, t.id_tratamento, t.tratamento, t.valor from profissionais p
inner join consultas c on c.profissional = p.id_profissional
inner join tratamentos t on t.consulta = c.id_consulta;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/GITHUB/DENTISTAS/docs/src/csv/profissionais.csv'
INTO TABLE profissionais
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/GITHUB/DENTISTAS/docs/src/csv/consultas.csv'
INTO TABLE consultas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/GITHUB/DENTISTAS/docs/src/csv/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from profissionais;
select * from consultas;
select * from tratamentos;
select * from vw_info_tratamentos;


