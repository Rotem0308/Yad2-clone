using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;
using Yad2_Clone.Utilities;

namespace Yad2_Clone.Models.Ads.RealEstate
{
    
    public class RealEstateForRentPayments
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int RentPayments { get; set; }

        public double? HouseCommitte { get; set; }

        public double? PropertyTax { get; set; }

        public double? BuiltSquareMeter { get; set; }

        public double? GardenSquareMeter { get; set; }

        [Required]
        public double TotalSquareMeter { get; set; }

        [Required]
        public double PricePerMeter { get; set; }
        [Range(100, int.MaxValue)]
        public double Rent { get; set; }

        [Required]
        [DateGreaterOrEqualThan]
        public DateTime EntryDate { get; set; }

        public bool? IsEntryDateFlexable { get; set; }
        public bool? IsEntryDateImmediate { get; set; }
        public bool? IsForLongTerm { get;}

        
    }
}
