using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.Models.Ads.RealEstate
{
  
    public class RealEstateForRentFeatures
    {
        [Key]
        public int Id { get; set; }
        public bool HasAccessForDisabled { get; set; }
        public bool HasAirConditioning { get; set; }
        public bool HasBars { get; set; }
        public bool HasBoiler { get; set; }
        public bool HasElevator { get; set; }
        public bool IsForPartners { get; set; }
        public bool HasFurniture { get; set; }
        public bool IsUnit { get; set; }
        public bool IsKosherKitchen { get; set; }
        public bool IsPetsAllowed { get; set; }
        public bool IsRenovated { get; set; }
        public bool HasSafeRoom { get; set; }
        public bool HasMultiLatchDoors { get; set; }
        public bool HasTornadoAirConditioning { get; set; }
        public bool HasStorage { get; set; }

    
    }
}
