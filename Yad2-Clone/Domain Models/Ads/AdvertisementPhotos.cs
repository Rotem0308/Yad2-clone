using System.ComponentModel.DataAnnotations;
using Yad2_Clone.Models.Ads;

namespace Yad2_Clone.Domain_Models.Ads
{
    public class AdvertisementPhotos
    {
        [Key]
        public int AdPhotoId { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public bool IsMain { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
