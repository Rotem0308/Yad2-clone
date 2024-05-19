using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.Models.User
{
    public class UsersPhoto
    {
        [Key]
        public int UserPhotoId { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public bool IsMain { get; set; }
        public AppUser User { get; set; }
        
    }
}
