using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Apteczka.Data.DAL
{
    public class APTUserController
    {
        private ApteczkaDbEntities dbEntities = new ApteczkaDbEntities();

        #region GenericController
        public IList<APTUsers> GetAll()
        {
            try
            {
                return dbEntities.APTUsers.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public APTUsers GetOne(long id)
        {
            try
            {
                return dbEntities.APTUsers.Find(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Save(APTUsers item)
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
                    dbEntities.APTUsers.Add(item);
                }
                dbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SaveAll(IList<APTUsers> items)
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

        public void Delete(APTUsers item)
        {
            try
            {
                dbEntities.APTUsers.Remove(item);
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
