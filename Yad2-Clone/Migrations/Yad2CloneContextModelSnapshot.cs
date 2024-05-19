﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Yad2_Clone.Data;

#nullable disable

namespace Yad2_Clone.Migrations
{
    [DbContext(typeof(Yad2CloneContext))]
    partial class Yad2CloneContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "1",
                            ConcurrencyStamp = "35bd8dcb-7c51-4ef4-99eb-f468a9d9e9eb",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "2",
                            ConcurrencyStamp = "ba5808cd-ef70-4b1f-b6f5-1d1063c150d5",
                            NormalizedName = "USER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Yad2_Clone.Domain_Models.Ads.AdvertisementPhotos", b =>
                {
                    b.Property<int>("AdPhotoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdPhotoId"));

                    b.Property<int>("AdvertisementId")
                        .HasColumnType("int");

                    b.Property<bool>("IsMain")
                        .HasColumnType("bit");

                    b.Property<string>("PublicId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AdPhotoId");

                    b.HasIndex("AdvertisementId");

                    b.ToTable("AdvertisementPhoto");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.AdLikes", b =>
                {
                    b.Property<int>("AdLikesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdLikesId"));

                    b.Property<int>("AdvertisementId")
                        .HasColumnType("int");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("AdLikesId");

                    b.HasIndex("AdvertisementId");

                    b.HasIndex("UserId");

                    b.ToTable("AdLikes");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.Advertisement", b =>
                {
                    b.Property<int>("AdvertisementId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdvertisementId"));

                    b.Property<string>("AdditionalContactName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AdditionalContactPhone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactPhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Course")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("HasReadTerms")
                        .HasColumnType("bit");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool?>("WillExceptUpdates")
                        .HasColumnType("bit");

                    b.HasKey("AdvertisementId");

                    b.HasIndex("UserId");

                    b.ToTable("Advertisement", (string)null);

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("ApartmentNumber")
                        .HasColumnType("int");

                    b.Property<string>("Area")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Entrance")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Floor")
                        .HasColumnType("int");

                    b.Property<int>("HouseNumber")
                        .HasColumnType("int");

                    b.Property<bool?>("IsOnColums")
                        .HasColumnType("bit");

                    b.Property<string>("Neighborhood")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalFloors")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("RealEstateForRentAddress");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentFeatures", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("HasAccessForDisabled")
                        .HasColumnType("bit");

                    b.Property<bool>("HasAirConditioning")
                        .HasColumnType("bit");

                    b.Property<bool>("HasBars")
                        .HasColumnType("bit");

                    b.Property<bool>("HasBoiler")
                        .HasColumnType("bit");

                    b.Property<bool>("HasElevator")
                        .HasColumnType("bit");

                    b.Property<bool>("HasFurniture")
                        .HasColumnType("bit");

                    b.Property<bool>("HasMultiLatchDoors")
                        .HasColumnType("bit");

                    b.Property<bool>("HasSafeRoom")
                        .HasColumnType("bit");

                    b.Property<bool>("HasStorage")
                        .HasColumnType("bit");

                    b.Property<bool>("HasTornadoAirConditioning")
                        .HasColumnType("bit");

                    b.Property<bool>("IsForPartners")
                        .HasColumnType("bit");

                    b.Property<bool>("IsKosherKitchen")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPetsAllowed")
                        .HasColumnType("bit");

                    b.Property<bool>("IsRenovated")
                        .HasColumnType("bit");

                    b.Property<bool>("IsUnit")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("RealEstateForRentFeatures");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AirDirections")
                        .HasColumnType("int");

                    b.Property<string>("AssetState")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Balcony")
                        .HasColumnType("int");

                    b.Property<int?>("BathRooms")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(400)
                        .HasColumnType("nvarchar(400)");

                    b.Property<string>("OpenView")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ParkingSpaces")
                        .HasColumnType("int");

                    b.Property<int?>("Rooms")
                        .HasColumnType("int");

                    b.Property<bool?>("isMonthlyUpdated")
                        .HasColumnType("bit");

                    b.Property<bool?>("isRearAsset")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("RealEstateForRentInfo");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentPayments", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<double?>("BuiltSquareMeter")
                        .HasColumnType("float");

                    b.Property<DateTime>("EntryDate")
                        .HasColumnType("datetime2");

                    b.Property<double?>("GardenSquareMeter")
                        .HasColumnType("float");

                    b.Property<double?>("HouseCommitte")
                        .HasColumnType("float");

                    b.Property<bool?>("IsEntryDateFlexable")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsEntryDateImmediate")
                        .HasColumnType("bit");

                    b.Property<double>("PricePerMeter")
                        .HasColumnType("float");

                    b.Property<double?>("PropertyTax")
                        .HasColumnType("float");

                    b.Property<double>("Rent")
                        .HasColumnType("float");

                    b.Property<int>("RentPayments")
                        .HasColumnType("int");

                    b.Property<double>("TotalSquareMeter")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("RealEstateForRentPayments");
                });

            modelBuilder.Entity("Yad2_Clone.Models.User.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("HouseNumber")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Yad2_Clone.Models.User.UsersPhoto", b =>
                {
                    b.Property<int>("UserPhotoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserPhotoId"));

                    b.Property<bool>("IsMain")
                        .HasColumnType("bit");

                    b.Property<string>("PublicId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserPhotoId");

                    b.HasIndex("UserId");

                    b.ToTable("UsersPhotos");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRent", b =>
                {
                    b.HasBaseType("Yad2_Clone.Models.Ads.Advertisement");

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<int>("FeaturesId")
                        .HasColumnType("int");

                    b.Property<int>("InfoId")
                        .HasColumnType("int");

                    b.Property<int>("PaymentsAndDatesId")
                        .HasColumnType("int");

                    b.HasIndex("AddressId");

                    b.HasIndex("FeaturesId");

                    b.HasIndex("InfoId");

                    b.HasIndex("PaymentsAndDatesId");

                    b.ToTable("RealEstateForRent", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Yad2_Clone.Models.User.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Yad2_Clone.Models.User.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.User.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Yad2_Clone.Models.User.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Yad2_Clone.Domain_Models.Ads.AdvertisementPhotos", b =>
                {
                    b.HasOne("Yad2_Clone.Models.Ads.Advertisement", "Advertisement")
                        .WithMany("Photos")
                        .HasForeignKey("AdvertisementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Advertisement");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.AdLikes", b =>
                {
                    b.HasOne("Yad2_Clone.Models.Ads.Advertisement", "Advertisement")
                        .WithMany()
                        .HasForeignKey("AdvertisementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.User.AppUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Advertisement");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.Advertisement", b =>
                {
                    b.HasOne("Yad2_Clone.Models.User.AppUser", "User")
                        .WithMany("Ads")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Yad2_Clone.Models.User.UsersPhoto", b =>
                {
                    b.HasOne("Yad2_Clone.Models.User.AppUser", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRent", b =>
                {
                    b.HasOne("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentAddress", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.Ads.Advertisement", null)
                        .WithOne()
                        .HasForeignKey("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRent", "AdvertisementId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentFeatures", "Features")
                        .WithMany()
                        .HasForeignKey("FeaturesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentInfo", "Info")
                        .WithMany()
                        .HasForeignKey("InfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Yad2_Clone.Models.Ads.RealEstate.RealEstateForRentPayments", "PaymentsAndDates")
                        .WithMany()
                        .HasForeignKey("PaymentsAndDatesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");

                    b.Navigation("Features");

                    b.Navigation("Info");

                    b.Navigation("PaymentsAndDates");
                });

            modelBuilder.Entity("Yad2_Clone.Models.Ads.Advertisement", b =>
                {
                    b.Navigation("Photos");
                });

            modelBuilder.Entity("Yad2_Clone.Models.User.AppUser", b =>
                {
                    b.Navigation("Ads");

                    b.Navigation("Photos");
                });
#pragma warning restore 612, 618
        }
    }
}
