using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.DAL
{
    public class APTCuresController
    {
        private ApteczkaDbEntities dbEntities = new ApteczkaDbEntities();

        #region GenericController
        public IList<APTCures> GetAll()
        {
            try
            {
                return dbEntities.APTCures.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTCures GetOne(long id)
        {
            try
            {
                return dbEntities.APTCures.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public long Save(APTCures item)
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
                    dbEntities.APTCures.Add(item);
                }
                dbEntities.SaveChanges();
                return item.Id;
            }
            catch (Exception ex)
            {
                throw ex;
                return -1;
            }
        }

        public void SaveAll(IList<APTCures> items)
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

        public void Delete(APTCures item)
        {
            try
            {
                dbEntities.APTCures.Remove(item);
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
