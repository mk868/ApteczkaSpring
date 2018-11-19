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
    public class PharmacyController : ApiController
    {
        public IEnumerable<APTPharmacy> Get()
        {
            return new APTPharmacyController().GetAll();
        }
    }
}
