-- Script para inicializar 60 pasajeros con ubicaciones aleatorias en el Distrito Nacional

-- Asegúrate de que la tabla "Pasajeros" existe según tu schema.prisma.
-- Este script asume que estás usando PostgreSQL.

-- Eliminar datos existentes (Opcional, descomentar si necesitas resetear)
-- DELETE FROM public."Pasajeros";
-- ALTER SEQUENCE public."Pasajeros_id_seq" RESTART WITH 1; -- Resetear el ID de secuencia si usas autoincrement

-- Definir 5 ubicaciones en el Distrito Nacional (Latitud, Longitud y Nombre)
-- Ubicación 1: Ciudad Colonial
-- Ubicación 2: Centro Olímpico Juan Pablo Duarte
-- Ubicación 3: Agora Mall
-- Ubicación 4: Blue Mall
-- Ubicación 5: Jardín Botánico Nacional

delete from public."Pasajeros";

INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Andres', 'Soto');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Brenda', 'Tapia');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Cristian', 'Ureña');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Denise', 'Valera');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ernesto', 'Wilson');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Fabiola', 'Xavier');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Gustavo', 'Yañez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Hilda', 'Zapata');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ivan', 'Abreu');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Jessica', 'Batista');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Kevin', 'Camilo');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Laura', 'De Leon');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Marco', 'Encarnacion');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Natalia', 'Frias');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Oscar', 'Garcia');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Paola', 'Hidalgo');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Quentin', 'Isidro');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Rebeca', 'Jaquez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Saul', 'King');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Tania', 'Lembert');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Uriel', 'Mercedes');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Viviana', 'Nova');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Walter', 'Ochoa');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ximena', 'Pacheco');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Yago', 'Quintero');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Zoe', 'Rivas');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Alan', 'Sosa');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Britney', 'Tejeda');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Cesar', 'Urbanez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Daisy', 'Velez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ethan', 'Washington');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Fiona', 'Xavier'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('George', 'Yanguez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Hannah', 'Zapata'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ian', 'Acosta');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Julia', 'Bello');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Kyle', 'Collado');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Luna', 'Duarte');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Mason', 'Estevez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Nora', 'Feliz');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Owen', 'Gil');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Penelope', 'Heredia');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Quinn', 'Isla');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Riley', 'Jara');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Sebastian', 'Kerr');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Taylor', 'Leon');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Uriah', 'Montero');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Victoria', 'Nunez');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('William', 'Oliver');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Xander', 'Pena');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Yara', 'Quiroz');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Zachary', 'Rosario');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Amelia', 'Silverio');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Benjamin', 'Tejada'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Chloe', 'Urbina'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Daniel', 'Vargas'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Ella', 'Wakefield');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Finn', 'Yates');
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Grace', 'Zayas'); -- Apellido repetido
INSERT INTO public."Pasajeros"(nombre, apellido) VALUES ('Henry', 'Almonte');


DO $$
DECLARE
    pasajero_record RECORD; -- Cambiado a pasajero_record
    ubicacion_aleatoria INTEGER;
    nueva_latitud NUMERIC(10, 7);
    nueva_longitud NUMERIC(10, 7);
    nueva_ubicacion_nombre VARCHAR;

    -- Definir las 5 ubicaciones (Lat, Lon) - IGUAL QUE ANTES
    ubicaciones NUMERIC(10, 7)[5][2] := '{{18.4755,-69.8932},{18.477367, -69.920243},{18.4842,-69.9398},{18.472611, -69.941468},{18.4885,-69.9606}}';

    -- Definir los nombres correspondientes a las 5 ubicaciones - IGUAL QUE ANTES
    nombres_ubicaciones VARCHAR[5] := '{"Ciudad Colonial", "Centro Olimpico Juan Pablo Duarte", "Agora Mall", "Blue Mall", "Jardin Botanico Nacional"}';

BEGIN
    -- Iterar sobre los primeros 60 pasajeros
    FOR pasajero_record IN SELECT id FROM public."Pasajeros" ORDER BY id LIMIT 60 LOOP -- Cambiado a Pasajeros

        -- Seleccionar un índice de ubicación aleatorio (0 a 4 para ambos arrays)
        ubicacion_aleatoria := floor(random() * 5);

        -- Asignar las coordenadas y el nombre de la ubicación seleccionada
        nueva_latitud := ubicaciones[ubicacion_aleatoria + 1][1];
        nueva_longitud := ubicaciones[ubicacion_aleatoria + 1][2];
        nueva_ubicacion_nombre := nombres_ubicaciones[ubicacion_aleatoria + 1];


        -- Realizar el UPDATE para el pasajero actual
        UPDATE public."Pasajeros" -- Cambiado a Pasajeros
        SET "ubicacionLatitud" = nueva_latitud,
            "ubicacionLongitud" = nueva_longitud,
            "nombreUbicacion" = nueva_ubicacion_nombre
        WHERE id = pasajero_record.id; -- Cambiado a pasajero_record

    END LOOP;

END $$;