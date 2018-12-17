using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class AddPhramacyResult : BaseResult
    {
        public long Id { get; set; }

        public AddPhramacyResult(bool success, long id)
        {
            this.Success = success;
            this.Id = id;
        }
    }
}