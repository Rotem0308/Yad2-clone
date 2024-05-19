using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.ViewModels
{
    public class SignupModel
    {
        [Required]
        [EmailAddress(ErrorMessage = " Must Be A Valid Email")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare(nameof(Password),ErrorMessage ="Must Be identical to the password")]
        public string ConfirmPassword { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [Phone(ErrorMessage ="Must be a valid phone")]
        public string PhoneNumber { get; set; }
    }
}
