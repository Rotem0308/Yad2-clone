using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using Yad2_Clone.Models.Ads;

namespace Yad2_Clone.Models.User
{
    public class AppUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public override string PhoneNumber {  get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
        public int? HouseNumber { get; set; }
        public ICollection<UsersPhoto>? Photos { get; set; }
        public ICollection<Advertisement>? Ads { get; set; }
        public DateTime Created_At { get; } = DateTime.Now;

    }
}
