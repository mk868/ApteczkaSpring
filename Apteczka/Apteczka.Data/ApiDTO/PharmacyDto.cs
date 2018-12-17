using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.ApiDTO
{
    public class PharmacyDto
    {
        public long Id { get; set; }
        public long APTUserId { get; set; }
        public string Name { get; set; }

        public PharmacyDto(long id, long aptUserId, string name)
        {
            this.Id = id;
            this.APTUserId = aptUserId;
            this.Name = name;
        }

        public PharmacyDto()
        {

        }
    }
}
