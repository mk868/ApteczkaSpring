using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class AddCureResult : BaseResult
    {
        public long Id { get; set; }

        public AddCureResult(bool success, long id)
        {
            this.Success = success;
            this.Id = id;
        }
    }
}