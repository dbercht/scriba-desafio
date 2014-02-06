--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: scriba; Type: COMMENT; Schema: -; Owner: scriba
--

COMMENT ON DATABASE scriba IS 'Mock db da scriba';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tbl_exames; Type: TABLE; Schema: public; Owner: scriba; Tablespace: 
--

CREATE TABLE tbl_exames (
    id bigint NOT NULL,
    titulo character(64),
    so_sexo character(1)
);


ALTER TABLE public.tbl_exames OWNER TO scriba;

--
-- Name: tbl_exames_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_exames_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_exames_id_seq OWNER TO scriba;

--
-- Name: tbl_exames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_exames_id_seq OWNED BY tbl_exames.id;


--
-- Name: tbl_pac_exame_fotos; Type: TABLE; Schema: public; Owner: scriba; Tablespace: 
--

CREATE TABLE tbl_pac_exame_fotos (
    paciente_id bigint NOT NULL,
    dia timestamp without time zone,
    exame_id bigint NOT NULL,
    foto_loc character(255),
    legenda text
);


ALTER TABLE public.tbl_pac_exame_fotos OWNER TO scriba;

--
-- Name: tbl_pac_exame_fotos_exame_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pac_exame_fotos_exame_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pac_exame_fotos_exame_id_seq OWNER TO scriba;

--
-- Name: tbl_pac_exame_fotos_exame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pac_exame_fotos_exame_id_seq OWNED BY tbl_pac_exame_fotos.exame_id;


--
-- Name: tbl_pac_exame_fotos_paciente_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pac_exame_fotos_paciente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pac_exame_fotos_paciente_id_seq OWNER TO scriba;

--
-- Name: tbl_pac_exame_fotos_paciente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pac_exame_fotos_paciente_id_seq OWNED BY tbl_pac_exame_fotos.paciente_id;


--
-- Name: tbl_pac_exames; Type: TABLE; Schema: public; Owner: scriba; Tablespace: 
--

CREATE TABLE tbl_pac_exames (
    paciente_id bigint NOT NULL,
    dia timestamp without time zone,
    exame_id bigint NOT NULL,
    peso double precision,
    altura double precision,
    laudo text,
    id bigint NOT NULL
);


ALTER TABLE public.tbl_pac_exames OWNER TO scriba;

--
-- Name: tbl_pac_exames_exame_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pac_exames_exame_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pac_exames_exame_id_seq OWNER TO scriba;

--
-- Name: tbl_pac_exames_exame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pac_exames_exame_id_seq OWNED BY tbl_pac_exames.exame_id;


--
-- Name: tbl_pac_exames_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pac_exames_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pac_exames_id_seq OWNER TO scriba;

--
-- Name: tbl_pac_exames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pac_exames_id_seq OWNED BY tbl_pac_exames.id;


--
-- Name: tbl_pac_exames_paciente_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pac_exames_paciente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pac_exames_paciente_id_seq OWNER TO scriba;

--
-- Name: tbl_pac_exames_paciente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pac_exames_paciente_id_seq OWNED BY tbl_pac_exames.paciente_id;


--
-- Name: tbl_pacientes; Type: TABLE; Schema: public; Owner: scriba; Tablespace: 
--

CREATE TABLE tbl_pacientes (
    id bigint NOT NULL,
    nome character(64),
    ddn date,
    sexo character(1)
);


ALTER TABLE public.tbl_pacientes OWNER TO scriba;

--
-- Name: tbl_pacientes_id_seq; Type: SEQUENCE; Schema: public; Owner: scriba
--

CREATE SEQUENCE tbl_pacientes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_pacientes_id_seq OWNER TO scriba;

--
-- Name: tbl_pacientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: scriba
--

ALTER SEQUENCE tbl_pacientes_id_seq OWNED BY tbl_pacientes.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_exames ALTER COLUMN id SET DEFAULT nextval('tbl_exames_id_seq'::regclass);


--
-- Name: paciente_id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exame_fotos ALTER COLUMN paciente_id SET DEFAULT nextval('tbl_pac_exame_fotos_paciente_id_seq'::regclass);


--
-- Name: exame_id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exame_fotos ALTER COLUMN exame_id SET DEFAULT nextval('tbl_pac_exame_fotos_exame_id_seq'::regclass);


--
-- Name: paciente_id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exames ALTER COLUMN paciente_id SET DEFAULT nextval('tbl_pac_exames_paciente_id_seq'::regclass);


--
-- Name: exame_id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exames ALTER COLUMN exame_id SET DEFAULT nextval('tbl_pac_exames_exame_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exames ALTER COLUMN id SET DEFAULT nextval('tbl_pac_exames_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pacientes ALTER COLUMN id SET DEFAULT nextval('tbl_pacientes_id_seq'::regclass);


--
-- Data for Name: tbl_exames; Type: TABLE DATA; Schema: public; Owner: scriba
--

COPY tbl_exames (id, titulo, so_sexo) FROM stdin;
1	Enema                                                           	 
2	Mamografia                                                      	F
3	XYZ                                                             	 
4	Urologia                                                        	M
\.


--
-- Name: tbl_exames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_exames_id_seq', 4, true);


--
-- Data for Name: tbl_pac_exame_fotos; Type: TABLE DATA; Schema: public; Owner: scriba
--

COPY tbl_pac_exame_fotos (paciente_id, dia, exame_id, foto_loc, legenda) FROM stdin;
2	2014-02-14 00:00:01	1	1.jpg                                                                                                                                                                                                                                                          	foto 1
2	2014-02-14 00:00:02	1	2.jpg                                                                                                                                                                                                                                                          	foto 2
2	2014-02-14 00:00:03	1	3.jpg                                                                                                                                                                                                                                                          	foto 3
2	2014-02-14 00:00:01	1	1.jpg                                                                                                                                                                                                                                                          	foto 1
2	2014-02-14 00:00:02	1	2.jpg                                                                                                                                                                                                                                                          	foto 2
2	2014-02-14 00:00:03	1	3.jpg                                                                                                                                                                                                                                                          	foto 3
2	2014-02-14 00:00:01	2	54.jpg                                                                                                                                                                                                                                                         	foto 1
2	2014-02-14 00:00:02	2	55.jpg                                                                                                                                                                                                                                                         	foto 2
2	2014-02-14 00:00:03	4	32.jpg                                                                                                                                                                                                                                                         	foto 1
\.


--
-- Name: tbl_pac_exame_fotos_exame_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pac_exame_fotos_exame_id_seq', 1, false);


--
-- Name: tbl_pac_exame_fotos_paciente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pac_exame_fotos_paciente_id_seq', 1, false);


--
-- Data for Name: tbl_pac_exames; Type: TABLE DATA; Schema: public; Owner: scriba
--

COPY tbl_pac_exames (paciente_id, dia, exame_id, peso, altura, laudo, id) FROM stdin;
2	1989-02-14 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	1
2	1989-02-14 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	2
2	2014-02-14 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	3
2	2013-11-14 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	4
2	2011-04-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	5
2	1998-06-12 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	6
2	1997-05-13 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	7
3	2013-04-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	8
3	2011-07-10 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	9
3	2011-08-09 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	10
4	2011-01-10 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	11
5	2011-03-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	12
4	2011-06-12 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	13
3	2011-07-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	14
3	2011-08-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	15
4	2011-06-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	16
5	2011-05-11 00:00:00	1	77.4000000000000057	188	Bla blababla blaxb blabl balabl	17
\.


--
-- Name: tbl_pac_exames_exame_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pac_exames_exame_id_seq', 1, false);


--
-- Name: tbl_pac_exames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pac_exames_id_seq', 17, true);


--
-- Name: tbl_pac_exames_paciente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pac_exames_paciente_id_seq', 1, false);


--
-- Data for Name: tbl_pacientes; Type: TABLE DATA; Schema: public; Owner: scriba
--

COPY tbl_pacientes (id, nome, ddn, sexo) FROM stdin;
2	Daniel Bercht                                                   	1989-02-15	M
3	Stephanie Bercht                                                	1987-07-12	F
4	Lucas Bercht                                                    	1958-05-03	M
5	John Doe                                                        	1958-05-03	M
6	Jane Doe                                                        	1958-05-03	F
7	George Bush                                                     	1951-11-03	M
\.


--
-- Name: tbl_pacientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: scriba
--

SELECT pg_catalog.setval('tbl_pacientes_id_seq', 7, true);


--
-- Name: tbl_exames_pkey; Type: CONSTRAINT; Schema: public; Owner: scriba; Tablespace: 
--

ALTER TABLE ONLY tbl_exames
    ADD CONSTRAINT tbl_exames_pkey PRIMARY KEY (id);


--
-- Name: tbl_pac_exames_pkey; Type: CONSTRAINT; Schema: public; Owner: scriba; Tablespace: 
--

ALTER TABLE ONLY tbl_pac_exames
    ADD CONSTRAINT tbl_pac_exames_pkey PRIMARY KEY (id);


--
-- Name: tbl_pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: scriba; Tablespace: 
--

ALTER TABLE ONLY tbl_pacientes
    ADD CONSTRAINT tbl_pacientes_pkey PRIMARY KEY (id);


--
-- Name: tbl_pac_exame_fotos_exame_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exame_fotos
    ADD CONSTRAINT tbl_pac_exame_fotos_exame_id_fkey FOREIGN KEY (exame_id) REFERENCES tbl_exames(id);


--
-- Name: tbl_pac_exame_fotos_paciente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exame_fotos
    ADD CONSTRAINT tbl_pac_exame_fotos_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES tbl_pacientes(id);


--
-- Name: tbl_pac_exames_exame_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exames
    ADD CONSTRAINT tbl_pac_exames_exame_id_fkey FOREIGN KEY (exame_id) REFERENCES tbl_exames(id);


--
-- Name: tbl_pac_exames_paciente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: scriba
--

ALTER TABLE ONLY tbl_pac_exames
    ADD CONSTRAINT tbl_pac_exames_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES tbl_pacientes(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: scriba
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM scriba;
GRANT ALL ON SCHEMA public TO scriba;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

