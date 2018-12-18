USE [ApteczkaDb]
GO

INSERT INTO [dbo].[APTUsers]
           ([Login]
           ,[Password]
           ,[Name])
     VALUES
           ('Lucato'
           ,'202cb962ac59075b964b07152d234b70'
           ,'Lucato')
GO

INSERT INTO [dbo].[APTPharmacy]
           ([APTUserId]
           ,[Name])
		   VALUES
		   (1,
		   'Cefarm')

INSERT INTO [dbo].[APTLocation]
           ([APTPharmacyId]
           ,[City]
           ,[Street]
           ,[Latitude]
           ,[Longitude])
     VALUES
           (1
           ,'Bia³ystok'
           ,'Suraska 3'
           ,53.13282
           ,23.157286)
GO

INSERT INTO [dbo].[APTPharmacy]
           ([APTUserId]
           ,[Name])
		   VALUES
		   (1,
		   'Pod Lwem')

INSERT INTO [dbo].[APTLocation]
           ([APTPharmacyId]
           ,[City]
           ,[Street]
           ,[Latitude]
           ,[Longitude])
     VALUES
           (11
           ,'Bia³ystok'
           ,'Antoniukowska 56'
           ,53.144767
		   ,23.131930)
GO
