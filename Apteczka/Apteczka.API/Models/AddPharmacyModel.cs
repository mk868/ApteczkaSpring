using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models
{
    public class AddPharmacyModel
    {
        public string Name { get; set; }

        public string City { get; set; }
        public string Street { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}