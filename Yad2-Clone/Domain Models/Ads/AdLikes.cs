using System.ComponentModel.DataAnnotations;
using Yad2_Clone.Models.User;

namespace Yad2_Clone.Models.Ads
{
    public class AdLikes
    {
        [Key]
        public int AdLikesId { get; set; }
        public AppUser User { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
