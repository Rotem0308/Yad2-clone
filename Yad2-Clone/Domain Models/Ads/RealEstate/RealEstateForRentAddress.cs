using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.Models.Ads.RealEstate
{
 
    public class RealEstateForRentAddress
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public int HouseNumber { get; set; }
        public int? ApartmentNumber { get; set; }
        public string? Entrance { get; set; }
        [Required]
        public int Floor { get; set; }
        [Required]
        public int TotalFloors { get; set; }
        public bool? IsOnColums { get; set; } = false;
        [Required]
        public string Neighborhood { get; set; }
        [Required]
        public string Area { get; set; }

        

    }
}
