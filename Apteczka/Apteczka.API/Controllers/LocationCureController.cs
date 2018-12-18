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
    public class LocationCureController : ApiController
    {
        [HttpPut]
        public AddLocationCureResult Add(AddLocationCureModel addLocationCure)
        {
            APTLocationCures locationCure = new APTLocationCures();
            locationCure.APTLocationId = addLocationCure.LocationId;
            locationCure.APTCuresId = addLocationCure.CureId;
            long id = new APTLocationCuresController().Save(locationCure);
            if (id > 0)
                return new AddLocationCureResult(true, id);
            return new AddLocationCureResult(false, id);
        }


    }
}
