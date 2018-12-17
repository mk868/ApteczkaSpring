using Apteczka.API.Models;
using Apteczka.API.Models.Results;
using Apteczka.Data.DAL;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Apteczka.API.Controllers
{
    public class UserController : ApiController
    {
        public LoginResult Login(LoginModel login)
        {
            APTUsers user = new APTUsers();
            user.Login = login.Login;
            user.Password = login.Password;

            return new LoginResult(new APTUserController().Login(user));
        }
    }
}
