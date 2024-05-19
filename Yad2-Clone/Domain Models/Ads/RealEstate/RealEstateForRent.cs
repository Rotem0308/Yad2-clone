using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yad2_Clone.Models.Ads.RealEstate
{
    public class RealEstateForRent : Advertisement
    {
        [Required]
        public RealEstateForRentInfo Info {  get; set; }
        [Required]     
        public RealEstateForRentAddress Address { get; set; }
        [Required]      
        public RealEstateForRentPayments PaymentsAndDates { get; set; }
        [Required]    
        public RealEstateForRentFeatures Features { get; set; }
      
    }
}
