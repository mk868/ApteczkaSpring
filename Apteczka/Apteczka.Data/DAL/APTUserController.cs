using Apteczka.Common;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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

        public bool Login(APTUsers user)
        {
            using (MD5 md5Hash = MD5.Create())
            {
                string hash = Md5Helper.GetMd5Hash(md5Hash, source);
            }
            var dbUser = GetOneByLogin(user.Login);
            if (dbUser != null && dbUser.Password == hash)
                return true;

            return false;
        }

        public APTUsers GetOneByLogin(string login)
        {
            try
            {
                return dbEntities.APTUsers.Where(x => x.Login == login).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
