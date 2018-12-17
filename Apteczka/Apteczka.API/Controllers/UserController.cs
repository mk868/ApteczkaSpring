using Apteczka.API.Models;
using Apteczka.API.Models.Results;
using Apteczka.Common;
using Apteczka.Data.DAL;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Web.Http;

namespace Apteczka.API.Controllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        public LoginResult Login(LoginModel login)
        {
            APTUsers user = new APTUsers();
            user.Login = login.Login;
            user.Password = login.Password;

            using (MD5 md5Hash = MD5.Create())
            {
                string hash = Md5Helper.GetMd5Hash(md5Hash, user.Password);

                var dbUser = new APTUserController().GetOneByLogin(user.Login);
                if (dbUser != null && dbUser.Password == hash)
                    return new LoginResult(true, dbUser.Id);


                return new LoginResult(false, -1);

            }
        }
    }
}
