using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.DAL
{
    public class APTLocationController
    {
        private ApteczkaDbEntities dbEntities = new ApteczkaDbEntities();

        #region GenericController
        public IList<APTLocation> GetAll()
        {
            try
            {
                return dbEntities.APTLocation.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTLocation GetOne(long id)
        {
            try
            {
                return dbEntities.APTLocation.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTLocation> GetOneByAPTPharmacyId(long id)
        {
            try
            {
                return dbEntities.APTLocation.Where(x => x.APTPharmacyId == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Save(APTLocation item)
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
                    dbEntities.APTLocation.Add(item);
                }
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SaveAll(IList<APTLocation> items)
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

        public void Delete(APTLocation item)
        {
            try
            {
                dbEntities.APTLocation.Remove(item);
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
