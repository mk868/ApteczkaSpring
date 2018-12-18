using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class AddLocationCureResult : BaseResult
    {
        public long Id { get; set; }

        public AddLocationCureResult(bool success, long id)
        {
            this.Success = success;
            this.Id = id;
        }
    }
}