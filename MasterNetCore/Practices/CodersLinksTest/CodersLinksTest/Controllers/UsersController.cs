using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EFCoreInMemoryDemo.Web.Models;
using EFCoreInMemoryDemo.Web.DataContext;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        public string Get()
        {
            return "test";
        }
    }
}
