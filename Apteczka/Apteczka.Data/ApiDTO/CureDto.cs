using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apteczka.Data.ApiDTO
{
    public class CureDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public CureDto(long id, string name, string description)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
        }
    }
}
