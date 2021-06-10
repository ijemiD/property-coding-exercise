namespace RS.Properties.Api.Controllers.v1
{
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/v{}/[controller]")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {

        public PropertiesController()
        {

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            return Ok();
        }
    }
}