using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Yad2_Clone.Models.User;
using Yad2_Clone.Repositories;
using Yad2_Clone.ViewModels;

namespace Yad2_Clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly AccountRepository _accountRepository;
        //[HttpPost("")]
        //public async Task<IActionResult> SignUp([FromBody] SignupModel signupForm)
        //{
        //    try
        //    {

        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //}
       
    }
}
