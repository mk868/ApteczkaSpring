using Apteczka.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.ApiDTO
{
    public class LocationDto
    {
        public long Id { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public LocationDto(APTLocation location)
        {
            this.Id = location.Id;
            this.City = location.City;
            this.Street = location.Street;
            this.Latitude = location.Latitude;
            this.Longitude = location.Longitude;
        }
    }
}
