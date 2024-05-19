using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Yad2_Clone.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HouseNumber = table.Column<int>(type: "int", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RealEstateForRentAddress",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HouseNumber = table.Column<int>(type: "int", nullable: false),
                    ApartmentNumber = table.Column<int>(type: "int", nullable: true),
                    Entrance = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Floor = table.Column<int>(type: "int", nullable: false),
                    TotalFloors = table.Column<int>(type: "int", nullable: false),
                    IsOnColums = table.Column<bool>(type: "bit", nullable: true),
                    Neighborhood = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Area = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RealEstateForRentAddress", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RealEstateForRentFeatures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HasAccessForDisabled = table.Column<bool>(type: "bit", nullable: false),
                    HasAirConditioning = table.Column<bool>(type: "bit", nullable: false),
                    HasBars = table.Column<bool>(type: "bit", nullable: false),
                    HasBoiler = table.Column<bool>(type: "bit", nullable: false),
                    HasElevator = table.Column<bool>(type: "bit", nullable: false),
                    IsForPartners = table.Column<bool>(type: "bit", nullable: false),
                    HasFurniture = table.Column<bool>(type: "bit", nullable: false),
                    IsUnit = table.Column<bool>(type: "bit", nullable: false),
                    IsKosherKitchen = table.Column<bool>(type: "bit", nullable: false),
                    IsPetsAllowed = table.Column<bool>(type: "bit", nullable: false),
                    IsRenovated = table.Column<bool>(type: "bit", nullable: false),
                    HasSafeRoom = table.Column<bool>(type: "bit", nullable: false),
                    HasMultiLatchDoors = table.Column<bool>(type: "bit", nullable: false),
                    HasTornadoAirConditioning = table.Column<bool>(type: "bit", nullable: false),
                    HasStorage = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RealEstateForRentFeatures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RealEstateForRentInfo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssetType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AssetState = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AirDirections = table.Column<int>(type: "int", nullable: true),
                    OpenView = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isRearAsset = table.Column<bool>(type: "bit", nullable: true),
                    isMonthlyUpdated = table.Column<bool>(type: "bit", nullable: true),
                    Rooms = table.Column<int>(type: "int", nullable: true),
                    BathRooms = table.Column<int>(type: "int", nullable: true),
                    ParkingSpaces = table.Column<int>(type: "int", nullable: true),
                    Balcony = table.Column<int>(type: "int", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(400)", maxLength: 400, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RealEstateForRentInfo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RealEstateForRentPayments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RentPayments = table.Column<int>(type: "int", nullable: false),
                    HouseCommitte = table.Column<double>(type: "float", nullable: true),
                    PropertyTax = table.Column<double>(type: "float", nullable: true),
                    BuiltSquareMeter = table.Column<double>(type: "float", nullable: true),
                    GardenSquareMeter = table.Column<double>(type: "float", nullable: true),
                    TotalSquareMeter = table.Column<double>(type: "float", nullable: false),
                    PricePerMeter = table.Column<double>(type: "float", nullable: false),
                    Rent = table.Column<double>(type: "float", nullable: false),
                    EntryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsEntryDateFlexable = table.Column<bool>(type: "bit", nullable: true),
                    IsEntryDateImmediate = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RealEstateForRentPayments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Advertisement",
                columns: table => new
                {
                    AdvertisementId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContactName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdditionalContactName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AdditionalContactPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HasReadTerms = table.Column<bool>(type: "bit", nullable: false),
                    WillExceptUpdates = table.Column<bool>(type: "bit", nullable: true),
                    Course = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Advertisement", x => x.AdvertisementId);
                    table.ForeignKey(
                        name: "FK_Advertisement_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UsersPhotos",
                columns: table => new
                {
                    UserPhotoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PublicId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsMain = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersPhotos", x => x.UserPhotoId);
                    table.ForeignKey(
                        name: "FK_UsersPhotos_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AdLikes",
                columns: table => new
                {
                    AdLikesId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    AdvertisementId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdLikes", x => x.AdLikesId);
                    table.ForeignKey(
                        name: "FK_AdLikes_Advertisement_AdvertisementId",
                        column: x => x.AdvertisementId,
                        principalTable: "Advertisement",
                        principalColumn: "AdvertisementId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdLikes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AdvertisementPhoto",
                columns: table => new
                {
                    AdPhotoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PublicId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsMain = table.Column<bool>(type: "bit", nullable: false),
                    AdvertisementId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdvertisementPhoto", x => x.AdPhotoId);
                    table.ForeignKey(
                        name: "FK_AdvertisementPhoto_Advertisement_AdvertisementId",
                        column: x => x.AdvertisementId,
                        principalTable: "Advertisement",
                        principalColumn: "AdvertisementId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RealEstateForRent",
                columns: table => new
                {
                    AdvertisementId = table.Column<int>(type: "int", nullable: false),
                    InfoId = table.Column<int>(type: "int", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: false),
                    PaymentsAndDatesId = table.Column<int>(type: "int", nullable: false),
                    FeaturesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RealEstateForRent", x => x.AdvertisementId);
                    table.ForeignKey(
                        name: "FK_RealEstateForRent_Advertisement_AdvertisementId",
                        column: x => x.AdvertisementId,
                        principalTable: "Advertisement",
                        principalColumn: "AdvertisementId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RealEstateForRent_RealEstateForRentAddress_AddressId",
                        column: x => x.AddressId,
                        principalTable: "RealEstateForRentAddress",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RealEstateForRent_RealEstateForRentFeatures_FeaturesId",
                        column: x => x.FeaturesId,
                        principalTable: "RealEstateForRentFeatures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RealEstateForRent_RealEstateForRentInfo_InfoId",
                        column: x => x.InfoId,
                        principalTable: "RealEstateForRentInfo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RealEstateForRent_RealEstateForRentPayments_PaymentsAndDatesId",
                        column: x => x.PaymentsAndDatesId,
                        principalTable: "RealEstateForRentPayments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1", "35bd8dcb-7c51-4ef4-99eb-f468a9d9e9eb", null, "ADMIN" },
                    { "2", "ba5808cd-ef70-4b1f-b6f5-1d1063c150d5", null, "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdLikes_AdvertisementId",
                table: "AdLikes",
                column: "AdvertisementId");

            migrationBuilder.CreateIndex(
                name: "IX_AdLikes_UserId",
                table: "AdLikes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Advertisement_UserId",
                table: "Advertisement",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AdvertisementPhoto_AdvertisementId",
                table: "AdvertisementPhoto",
                column: "AdvertisementId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateForRent_AddressId",
                table: "RealEstateForRent",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateForRent_FeaturesId",
                table: "RealEstateForRent",
                column: "FeaturesId");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateForRent_InfoId",
                table: "RealEstateForRent",
                column: "InfoId");

            migrationBuilder.CreateIndex(
                name: "IX_RealEstateForRent_PaymentsAndDatesId",
                table: "RealEstateForRent",
                column: "PaymentsAndDatesId");

            migrationBuilder.CreateIndex(
                name: "IX_UsersPhotos_UserId",
                table: "UsersPhotos",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdLikes");

            migrationBuilder.DropTable(
                name: "AdvertisementPhoto");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "RealEstateForRent");

            migrationBuilder.DropTable(
                name: "UsersPhotos");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Advertisement");

            migrationBuilder.DropTable(
                name: "RealEstateForRentAddress");

            migrationBuilder.DropTable(
                name: "RealEstateForRentFeatures");

            migrationBuilder.DropTable(
                name: "RealEstateForRentInfo");

            migrationBuilder.DropTable(
                name: "RealEstateForRentPayments");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
