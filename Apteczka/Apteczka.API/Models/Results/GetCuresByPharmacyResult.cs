using Apteczka.Data.ApiDTO;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class GetCuresByPharmacyResult : BaseResult
    {
        public List<CureDto> CuresList { get; set; }
        public PharmacyDto Pharmacy { get; set; }

        public GetCuresByPharmacyResult(bool success, IList<APTCures> cures, APTPharmacy pharmacy)
        {
            this.Success = success;
            this.Pharmacy = new PharmacyDto(pharmacy.Id, pharmacy.APTUserId, pharmacy.Name);
            this.CuresList = new List<CureDto>();
            foreach (var cure in cures)
                this.CuresList.Add(new CureDto(cure.Id, cure.Description, cure.Name));
        }

        public GetCuresByPharmacyResult(bool success = false)
        {
            this.Success = success;
            this.CuresList = new List<CureDto>();
            this.Pharmacy = new PharmacyDto();
        }
    }
}