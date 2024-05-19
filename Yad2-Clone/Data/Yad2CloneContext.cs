using AutoMapper.Features;
using CloudinaryDotNet;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection.Emit;
using Yad2_Clone.Domain_Models.Ads;
using Yad2_Clone.Models.Ads;
using Yad2_Clone.Models.Ads.RealEstate;
using Yad2_Clone.Models.User;
using static Azure.Core.HttpHeader;

namespace Yad2_Clone.Data
{
    public class Yad2CloneContext : IdentityDbContext<AppUser>
    {
        // What this constructor do?
        //  This constructor for the BookStoreContext class is used to initialize
        //  an instance of the context with the provided DbContextOptions
        private readonly IConfiguration _configuration;
        
        public Yad2CloneContext(DbContextOptions<Yad2CloneContext> options, IConfiguration configuration) : base(options)
        {
            //This constructor takes an argument of type DbContextOptions<BookStoreContext>.
            //This argument represents the options that will be used to configure the context.
            //This allows you to configure various aspects of how the context interacts with the underlying database,
            //such as the connection string, database provider, and other settings.
            _configuration = configuration;
        }


        public DbSet<AdLikes> AdLikes { get; set; }
        public DbSet<UsersPhoto> UsersPhotos { get; set; }
        //Since RealEstateForRent inherits from Advertisement, Entity Framework Core will store all types of advertisements,
        //including RealEstateForRent, in the Advertisements table using table per hierarchy (TPH) mapping.

        
        //EXPLANATION FOR WHY OTHER ADS FIELDS WONT SHOW ON SAVE!!!!!!
        //No, when you create an instance of RealEstateForRent and save it to the database using Entity Framework Core,
        //only the properties specific to RealEstateForRent will be stored in the database. The properties from other types
        //of advertisements will not be present in the database record for the RealEstateForRent advertisement.

        //Each advertisement type will share the common properties defined in the Advertisement base class,
        //but only the properties specific to each advertisement type will be populated and stored in the database.
        //This is a key feature of inheritance mapping with Entity Framework Core's TPH approach.
        public DbSet<Advertisement> Advertisement { get; set; }
        public DbSet<AdvertisementPhotos> AdvertisementPhoto { get; set; }

        public DbSet<RealEstateForRent> RealEstateForRent { get; set; }
        //public DbSet<RealEstateForRentAddress> RealEstateForRentAddress { get; set; }
        //public DbSet<RealEstateForRentFeatures> RealEstateForRentFeature { get; set; }
        //public DbSet<RealEstateForRentInfo> RealEstateForRentInfo { get; set; }
        //public DbSet<RealEstateForRentPayments> RealEstateForRentPayment { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //EF Core inheritance
            //Since RealEstateForRent inherits from Advertisement, EF Core will use inheritance mapping to store information about
            //the RealEstateForRent entity in both the Advertisement table and its own table (RealEstatesForRent according to your DbContext configuration).
            //This mapping is typically done using a discriminator column to distinguish between different types of entities in the inheritance hierarchy. 


            //Configure discriminator for Advertisement entity

            builder.Entity<Advertisement>().ToTable("Advertisement");
            builder.Entity<RealEstateForRent>().ToTable("RealEstateForRent");

            //builder.Entity<RealEstateForRentAddress>().ToTable("RealEstateForRentAddress");
            //builder.Entity<RealEstateForRentFeatures>().ToTable("RealEstateForRentFeatures");
            //builder.Entity<RealEstateForRentInfo>().ToTable("RealEstateForRentInfo");
            //builder.Entity<RealEstateForRentPayments>().ToTable("RealEstateForRentPayments");


            //builder.Entity<Advertisement>()
            //    .HasDiscriminator<string>("advertisementType")
            //    .HasValue<RealEstateForRent>("RealEstateForRent"); // Map "RealEstateForRent" type to discriminator value "RealEstate"


            // Predefine roles

            //ConcurrencyStamp is used to prevent concurrency update conflict.
            //When working with GUIDs in .NET, it's common to convert them to strings
            //before storing them in a database. This is because many database systems,
            //including SQL Server, PostgreSQL, and MySQL, typically store GUIDs as strings
            //rather than binary data.



            var AdminRole = new IdentityRole
            {
                Id = "1",
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                Name = _configuration["Roles:Admin"],
                NormalizedName = "ADMIN"
            };
            var UserRole = new IdentityRole
            {
                Id = "2",
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                Name = _configuration["Roles:User"],
                NormalizedName = "USER"
            };


            //inserting the roles into our database
            builder.Entity<IdentityRole>().HasData(new List<IdentityRole>
            {
              AdminRole,UserRole
            });
        }
    }
}
