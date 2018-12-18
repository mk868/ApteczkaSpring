using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.DAL
{
    public class APTLocationCuresController
    {
        private Entities dbEntities = new Entities();

        #region GenericController
        public IList<APTLocationCures> GetAll()
        {
            try
            {
                return dbEntities.APTLocationCures.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTLocationCures GetOne(long id)
        {
            try
            {
                return dbEntities.APTLocationCures.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTLocationCures> GetOneByAPTLocationId(long id)
        {
            try
            {
                return dbEntities.APTLocationCures.Where(x => x.APTLocation.Id == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<APTLocationCures> GetOneByAPTCuresId(long id)
        {
            try
            {
                return dbEntities.APTLocationCures.Where(x => x.APTCuresId == id).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Save(APTLocationCures item)
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
                    dbEntities.APTLocationCures.Add(item);
                }
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SaveAll(IList<APTLocationCures> items)
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

        public void Delete(APTLocationCures item)
        {
            try
            {
                dbEntities.APTLocationCures.Remove(item);
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
