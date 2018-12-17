using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class BaseResult
    {
        public bool Success { get; set; }

        public BaseResult(bool success = false)
        {
            Success = success;
        }
    }
}