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
    [RoutePrefix("api/Cures")]
    public class CuresController : ApiController
    {
        [HttpPost]
        [Route("GetByPharmacy")]
        public GetCuresByPharmacyResult GetByPharmacy(GetCuresByPharmacyModel getCuresByPharmacy)
        {
            var locations = new APTLocationController().GetOneByAPTPharmacyId(getCuresByPharmacy.Id);
            var cures = new APTCuresController().GetAll();
            foreach(var location in locations)
            {
                var locationCures = new APTLocationCuresController().GetOneByAPTLocationId(location.Id);
                foreach(var locationCure in locationCures)
                {
                    foreach(var cure in cures)
                    {

                        if (cure.Id != locationCure.APTCuresId)
                            cures.Remove(cure);
                    }
                }
            }
            var pharmacy = new APTPharmacyController().GetOne(getCuresByPharmacy.Id);
            try
            {
                if (cures.Count != 0)
                    return new GetCuresByPharmacyResult(true, cures, pharmacy);
                return new GetCuresByPharmacyResult(false);
            }
            catch
            {
                return new GetCuresByPharmacyResult(false);
            }
        }

        [HttpPost]
        [Route("GetByName")]
        public GetCuresResult GetByName(GetCuresByNameModel getCuresByName)
        {
            var cures = new APTCuresController().GetAll().Where(x=>x.Name.Contains(getCuresByName.Name) || x.Description.Contains(getCuresByName.Name)).ToList();
            try
            {
                if (cures.Count != 0)
                    return new GetCuresResult(true, cures);
                return new GetCuresResult(false);
            }
            catch
            {
                return new GetCuresResult(false);
            }

        }

        [HttpPut]
        public AddCureResult Add(AddCureModel addCure)
        {
            APTCures cure = new APTCures();
            cure.Name = addCure.Name;
            cure.Description = addCure.Description;
            long id = new APTCuresController().Save(cure);
            if (id > 0)
                return new AddCureResult(true, id);
            return new AddCureResult(false, id);
        }
    }
}
