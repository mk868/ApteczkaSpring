using Apteczka.Data.ApiDTO;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class GetPharmaciesResult : BaseResult
    {
        public List<PharmacyDto> PharmacyList { get; set; }

        public GetPharmaciesResult(bool success, IList<APTPharmacy> pharmacies)
        {
            this.Success = success;
            this.PharmacyList = new List<PharmacyDto>();
            foreach (var pharmacy in pharmacies)
                this.PharmacyList.Add(new PharmacyDto(pharmacy.Id, pharmacy.APTUserId, pharmacy.Name));
        }

        public GetPharmaciesResult(bool success = false)
        {
            this.Success = success;
            this.PharmacyList = new List<PharmacyDto>();
        }
    }

}