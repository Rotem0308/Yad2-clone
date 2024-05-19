using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Yad2_Clone.Models.User;
using Yad2_Clone.ViewModels;

namespace Yad2_Clone.Repositories
{
    public class AccountRepository
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signinManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AccountRepository(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IMapper mapper)
        {
            _signinManager = signInManager;
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<string> SignupAsync(SignupModel signupForm)
        {
            var user = _mapper.Map<AppUser>(signupForm);
            var res = await _userManager.CreateAsync(user,signupForm.Password);
            if (!res.Succeeded) throw new Exception(res.Errors.FirstOrDefault().Description);

            var token = this.NewToken(user);
            if (string.IsNullOrEmpty(token)) throw new Exception("Error Accured While generating a new token");
            return token;
        }
        public  string NewToken(AppUser user)
        {
            var authClaims = new List<Claim>
            {
                //The JwtBearer/OpenID Connect gets claims from id_token or fetches user information from the AuthServer,
                //and then maps/adds it to the current ClaimsIdentity.
                new Claim(ClaimTypes.Name,user.UserName),
                new Claim(ClaimTypes.NameIdentifier,user.Id),
                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
            };
            var authSigninKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));
            var token = new JwtSecurityToken(
            issuer: _configuration["JWT:ValidIssuer"],
            audience: _configuration["JWT:ValidAudience"],
            expires: DateTime.UtcNow.AddDays(1),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256Signature)
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<AppUser> GetUserByIdAsync(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) throw new Exception("User Was Not Found");
            return user;
        }
    }
}
