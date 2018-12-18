using Apteczka.Data.ApiDTO;
using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class GetLocationByCureResult : BaseResult
    {
        public List<LocationDto> CuresList { get; set; }

        public GetLocationByCureResult(bool success, IList<APTLocationCures> locations)
        {
            this.Success = success;
            this.CuresList = new List<LocationDto>();
            foreach(var location in locations)
            {
                this.CuresList.Add(new LocationDto(location.APTLocation));
            }
        }


        public GetLocationByCureResult(bool success = false)
        {
            this.Success = success;
            this.CuresList = new List<LocationDto>();
        }
    }
}