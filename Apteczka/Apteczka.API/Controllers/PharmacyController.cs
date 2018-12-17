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
    public class PharmacyController : ApiController
    {
        [HttpGet]
        public GetPharmaciesResult Get()
        {
            var pharmacies = new APTPharmacyController().GetAll();
            try
            {
                if (pharmacies.Count != 0)
                    return new GetPharmaciesResult(true, pharmacies);
                return new GetPharmaciesResult(false);
            }
            catch
            {
                return new GetPharmaciesResult(false);
            }
        }

        //public GetPharmacyResult GetOne(long id)
        //{

        //}

        [HttpDelete]
        public DeletePharmacyResult Delete(DeletePharmacyModel deletePharmacy)
        {
            try
            {
                APTPharmacy pharmacy = new APTPharmacy();
                pharmacy.Id = deletePharmacy.Id;
                new APTPharmacyController().Delete(pharmacy);
                return new DeletePharmacyResult(true);
            }
            catch
            {
                return new DeletePharmacyResult(false);
            }
        }

        [HttpPut]
        public AddPhramacyResult Add(AddPharmacyModel addPharmacy)
        {
            APTPharmacy pharmacy = new APTPharmacy();
            pharmacy.Name = addPharmacy.Name;
            pharmacy.APTUserId = 1;
            APTLocation location = new APTLocation();
            location.City = addPharmacy.City;
            location.Street = addPharmacy.Street;
            location.Latitude = addPharmacy.Latitude;
            location.Longitude = addPharmacy.Longitude;

            pharmacy.APTLocation.Add(location);
            long id = new APTPharmacyController().Save(pharmacy);
            if (id > 0)
                return new AddPhramacyResult(true, id);
            return new AddPhramacyResult(false, id);
        }
    }
}
