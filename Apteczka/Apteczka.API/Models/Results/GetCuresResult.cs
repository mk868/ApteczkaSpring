using Apteczka.Data.ApiDTO;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class GetCuresResult : BaseResult
    {
        public List<CureDto> CuresList { get; set; }

        public GetCuresResult(bool success, IList<APTCures> cures)
        {
            this.Success = success;
            this.CuresList = new List<CureDto>();
            foreach (var cure in cures)
                this.CuresList.Add(new CureDto(cure.Id, cure.Description, cure.Name));
        }

        public GetCuresResult(bool success = false)
        {
            this.Success = success;
            this.CuresList = new List<CureDto>();
        }
    }
}