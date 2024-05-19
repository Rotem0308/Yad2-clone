using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Yad2_Clone.Data;

using Microsoft.AspNetCore.Identity;
using Yad2_Clone.Repositories;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication;

namespace Yad2_Clone.Controllers
{
    [Route("Yad2/[controller]")]
    [ApiController]
    public class UserPhotoController : ControllerBase
    {
        private readonly IUserImageService _userImageService;
        private readonly AccountRepository _accountRepository;
        private readonly Yad2CloneContext _context;

        public UserPhotoController(IUserImageService userImageService, Yad2CloneContext yad2CloneContext, AccountRepository accountRepository) 
        {
            _userImageService = userImageService;
            _context = yad2CloneContext;
            _accountRepository = accountRepository;
        }


        [HttpPost("user/image")]
        public async Task<IActionResult> Upload([FromForm(Name = "ImageFile")] IFormFile file)
        {

            try
            {
                
                var user = await _accountRepository.GetUserByIdAsync(User.Identity.GetUserId());
                var result = await _userImageService.UploadImageAsync(user, file);
               
                return Ok(result);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
