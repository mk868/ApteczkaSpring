using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.DAL
{
    public class APTPharmacyCuresController
    {
        private ApteczkaDbEntities dbEntities = new ApteczkaDbEntities();

        #region GenericController
        public IList<APTPharmacyCures> GetAll()
        {
            try
            {
                return dbEntities.APTPharmacyCures.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTPharmacyCures GetOne(long id)
        {
            try
            {
                return dbEntities.APTPharmacyCures.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTPharmacyCures> GetOneByAPTPharmacyId(long id)
        {
            try
            {
                return dbEntities.APTPharmacyCures.Where(x => x.APTPharmacyId == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTPharmacyCures> GetOneByAPTCuresId(long id)
        {
            try
            {
                return dbEntities.APTPharmacyCures.Where(x => x.APTCuresId == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Save(APTPharmacyCures item)
        {
            try
            {
                if (item.Id != 0)
                {
                    var dbItem = GetOne(item.Id);
                    dbEntities.Entry(dbItem).CurrentValues.SetValues(item);
                }
                else
                {
                    dbEntities.APTPharmacyCures.Add(item);
                }
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SaveAll(IList<APTPharmacyCures> items)
        {
            try
            {
                foreach (var item in items)
                {
                    Save(item);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Delete(APTPharmacyCures item)
        {
            try
            {
                dbEntities.APTPharmacyCures.Remove(item);
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        } 
        #endregion
    }
}
