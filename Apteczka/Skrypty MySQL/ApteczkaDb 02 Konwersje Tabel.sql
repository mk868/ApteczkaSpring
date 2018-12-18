IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
			WHERE TABLE_NAME = 'APTLocation'
			AND COLUMN_NAME = 'Latitude'
			AND DATA_TYPE = 'decimal'
		)
		BEGIN
			print 'Zmiana typu kolumn Latitude and Longitude to REAL in table APTLocation'

			ALTER TABLE APTLocation ALTER COLUMN Latitude FLOAT NULL;

			ALTER TABLE APTLocation ALTER COLUMN Longitude FLOAT NULL;
		END