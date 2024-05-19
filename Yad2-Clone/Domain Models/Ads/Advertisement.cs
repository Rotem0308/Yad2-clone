using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Yad2_Clone.Domain_Models.Ads;
using Yad2_Clone.Models.Ads.RealEstate;
using Yad2_Clone.Models.User;

namespace Yad2_Clone.Models.Ads
{
    public abstract class Advertisement
    {
        [Key]
        public int AdvertisementId { get; set; }
       
        [Required]
        public string ContactName { get; set; }
        [Required]
        public string ContactPhone { get; set; }
        public string? AdditionalContactName { get; set; }
        public string? AdditionalContactPhone { get; set; }
        [Required]
        public bool HasReadTerms { get; set; }
        public bool? WillExceptUpdates { get; set; }
        [Required]
        public string Course { get; set; }
        
        public AppUser User { get; set; }
        [Column("Photos")]
        public ICollection<AdvertisementPhotos>? Photos { get; set; }

    }
}
// Example: Retrieve a specific real estate advertisement by its Id

//var realEstateAd = dbContext.Advertisements
//    .OfType<RealEstateAdvertisement>() // Filter by the specific subclass type
//    .FirstOrDefault(ad => ad.Id == realEstateAdId);