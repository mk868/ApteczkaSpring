using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models
{
    public class AddLocationCureModel
    {
        public long LocationId { get; set; }
        public long CureId { get; set; }
    }
}