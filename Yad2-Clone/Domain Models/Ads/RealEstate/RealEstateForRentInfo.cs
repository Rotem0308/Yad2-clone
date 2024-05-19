using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.Models.Ads.RealEstate
{
  
    public class RealEstateForRentInfo
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string AssetType { get; set; }
        [Required]
        public string AssetState { get; set; }
        [Range(1,4)]
        public int? AirDirections { get; set; }
        public string? OpenView { get; set; } 
        public bool? isRearAsset { get; set; }
        public bool? isMonthlyUpdated { get; set; }
        public int? Rooms { get; set; }
        [Range(1, 4)]
        public int? BathRooms { get; set; }
        [Range(0, 3)]
        public int? ParkingSpaces { get; set; }
        [Range(0, 4)]
        public int? Balcony {  get; set; }     

        [StringLength(400,ErrorMessage = "Must Be Under 400 Characters")]
        public string Description { get; set; }

    

    }
}
