IF DB_NAME()<>'master' AND
   NOT EXISTS (	SELECT * FROM information_schema.tables
		WHERE table_name='APTUsers' AND table_type='BASE TABLE')
BEGIN
	PRINT 'Tworze tabele APTUsers';
	CREATE TABLE [dbo].[APTUsers](
	[Id] [BIGINT] IDENTITY(1,10) NOT NULL,	-- primary key
	[Login] [NVARCHAR](50) NOT NULL,	
	[Password] [NVARCHAR](50) NOT NULL,
	[Name] [NVARCHAR](50) NOT NULL
	CONSTRAINT [PK_APTUsers] PRIMARY KEY NONCLUSTERED ([Id]))
END;
--- koniec APTUsers

IF DB_NAME()<>'master' AND
   NOT EXISTS (	SELECT * FROM information_schema.tables
		WHERE table_name='APTPharmacy' AND table_type='BASE TABLE')
BEGIN
	PRINT 'Tworze tabele APTPharmacy';
	CREATE TABLE [dbo].[APTPharmacy](
	[Id] [BIGINT] IDENTITY(1,10) NOT NULL,	-- primary key
	[APTUserId] [BIGINT] NOT NULL,	-- FK to table APTUsers references column Id
	[Name] [NVARCHAR](50) NOT NULL
	CONSTRAINT [PK_APTPharmacy] PRIMARY KEY NONCLUSTERED ([Id]),
	CONSTRAINT [FK_APTPharmacy_APTUsers] FOREIGN KEY([APTUserId]) REFERENCES [dbo].[APTUsers] ([Id])
	);
END;
--- koniec APTPharmacy

IF DB_NAME()<>'master' AND
   NOT EXISTS (	SELECT * FROM information_schema.tables
		WHERE table_name='APTLocation' AND table_type='BASE TABLE')
BEGIN
	PRINT 'Tworze tabele APTLocation';
	CREATE TABLE [dbo].[APTLocation](
	[Id] [BIGINT] IDENTITY(1,10) NOT NULL,	-- primary key
	[APTPharmacyId] [BIGINT] NOT NULL,	-- FK to table APTPharmacy references column Id
	[City] [NVARCHAR](50) NOT NULL,
	[Street] [NVARCHAR](50) NOT NULL,
	[Latitude] [DECIMAL] NULL,
	[Longitude] [DECIMAL] NULL,
	CONSTRAINT [PK_APTLocation] PRIMARY KEY NONCLUSTERED ([Id]),
	CONSTRAINT [FK_APTLocation_APTPharmacy] FOREIGN KEY([APTPharmacyId]) REFERENCES [dbo].[APTPharmacy] ([Id])
	);
END;
--- koniec APTLocation

IF DB_NAME()<>'master' AND
   NOT EXISTS (	SELECT * FROM information_schema.tables
		WHERE table_name='APTCures' AND table_type='BASE TABLE')
BEGIN
	PRINT 'Tworze tabele APTCures';
	CREATE TABLE [dbo].[APTCures](
	[Id] [BIGINT] IDENTITY(1,10) NOT NULL,	-- primary key
	[Name] [NVARCHAR](50) NOT NULL,
	[Description] [NVARCHAR](50) NOT NULL
	CONSTRAINT [PK_APTCures] PRIMARY KEY NONCLUSTERED ([Id]),
	);
END;
--- koniec APTCures

IF DB_NAME()<>'master' AND
   NOT EXISTS (	SELECT * FROM information_schema.tables
		WHERE table_name='APTPharmacyCures' AND table_type='BASE TABLE')
BEGIN
	PRINT 'Tworze tabele APTPharmacyCures';
	CREATE TABLE [dbo].[APTPharmacyCures](
	[Id] [BIGINT] IDENTITY(1,10) NOT NULL,	-- primary key
	[APTPharmacyId] [BIGINT] NOT NULL,	-- FK to table APTPharmacy references column Id
	[APTCuresId] [BIGINT] NOT NULL,	-- FK to table APTPharmacy references column Id
	CONSTRAINT [PK_APTPharmacyCures] PRIMARY KEY NONCLUSTERED ([Id]),
	CONSTRAINT [FK_APTPharmacyCures_APTPharmacy] FOREIGN KEY([APTPharmacyId]) REFERENCES [dbo].[APTPharmacy] ([Id]),
	CONSTRAINT [FK_APTPharmacyCures_APTCures] FOREIGN KEY([APTCuresId]) REFERENCES [dbo].[APTCures] ([Id])
	);
END;
--- koniec APTPharmacyCures

