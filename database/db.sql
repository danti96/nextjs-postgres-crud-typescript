CREATE TABLE IF NOT EXISTS tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE public.mapapi (
	id serial4 NOT NULL,
	address varchar(200) NULL,
	business_status varchar(200) NULL,
	icon varchar(200) NULL,
	icon_background_color varchar(200) NULL,
	icon_mask_base_uri varchar(200) NULL,
	lat varchar(200) NULL,
	lng varchar(200) NULL,
	"name" varchar(200) NULL,
	place_id varchar(200) NULL,
	plus_code_compound_code varchar(200) NULL,
	plus_code_global_code varchar(200) NULL,
	rating varchar(200) NULL,
	telephone varchar(200) NULL,
	tojson varchar(200) NULL,
	"types" varchar(200) NULL,
	vicinity varchar(200) NULL,
	website varchar(200) NULL,
	created_on timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT mapapi_pkey PRIMARY KEY (id)
);