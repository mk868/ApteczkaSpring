using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.DAL
{
    public class APTPharmacyController
    {
        private ApteczkaDbEntities dbEntities = new ApteczkaDbEntities();

        #region GenericController
        public IList<APTPharmacy> GetAll()
        {
            try
            {
                return dbEntities.APTPharmacy.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTPharmacy GetOne(long id)
        {
            try
            {
                return dbEntities.APTPharmacy.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTPharmacy> GetOneByAPTUserId(long id)
        {
            try
            {
                return dbEntities.APTPharmacy.Where(x => x.APTUserId == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Save(APTPharmacy item)
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
                    dbEntities.APTPharmacy.Add(item);
                }
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SaveAll(IList<APTPharmacy> items)
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

        public void Delete(APTPharmacy item)
        {
            try
            {
                dbEntities.APTPharmacy.Remove(item);
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
