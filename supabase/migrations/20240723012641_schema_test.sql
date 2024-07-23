drop table if exists projects;
drop type if exists current_status;
create type current_status as enum('in-progress', 'completed', 'not started');
create table projects(id bigint primary key generated always as identity not null, created_at timestamp default now() not null, name text not null, slug text not null, status current_status default 'not started' not null, colaborators text array default array[]::varchar[] not null );

