IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[APTPharmacyCures]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
BEGIN
	DROP TABLE [dbo].APTPharmacyCures
	PRINT 'Delete table APTPharmacyCures'
END