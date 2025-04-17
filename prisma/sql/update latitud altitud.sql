DO $$
DECLARE
    conductor_id INTEGER;
    nueva_latitud NUMERIC(10, 7);
    nueva_longitud NUMERIC(10, 7);
    ubicacion_aleatoria INTEGER;
BEGIN
    FOR conductor_id IN 1..32 LOOP
        -- Seleccionar una ubicación aleatoria (1, 2 o 3)
        ubicacion_aleatoria := floor(random() * 3) + 1;

        CASE ubicacion_aleatoria
            WHEN 1 THEN
                -- Galería 360
                nueva_latitud := 18.483836;
                nueva_longitud := -69.936550;
            WHEN 2 THEN
                -- Agora Mall
                nueva_latitud := 18.484173;
                nueva_longitud := -69.939837;
            WHEN 3 THEN
                -- MetalDom
                nueva_latitud := 18.555605;
                nueva_longitud := -70.056565;
        END CASE;

        -- Realizar el UPDATE para el conductor actual
        EXECUTE format('
            UPDATE public."Conductores"
            SET "ubicacionLatitud" = %L,
                "ubicacionLongitud" = %L
            WHERE id = %L;', nueva_latitud, nueva_longitud, conductor_id);
    END LOOP;
END$$;