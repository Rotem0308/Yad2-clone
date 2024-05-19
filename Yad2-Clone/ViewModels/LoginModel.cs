using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.ViewModels
{
    public class LoginModel
    {
        [Required]
        [EmailAddress(ErrorMessage = " Must Be A Valid Email")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
