IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[APTPharmacyCures]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
BEGIN
	DROP TABLE [dbo].APTPharmacyCures
	PRINT 'Usuwam tabele APTPharmacyCures'
END


--IF EXISTS(
--	SELECT * FROM sys.foreign_keys WHERE name = 'FK_APTLocation_APTPharmacy'
--)
--BEGIN
--	ALTER TABLE APTLocation
--	DROP CONSTRAINT FK_APTLocation_APTPharmacy
--	PRINT 'Usuwam FK_APTLocation_APTPharmacy' 
--END