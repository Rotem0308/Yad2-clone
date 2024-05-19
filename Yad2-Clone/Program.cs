
using CloudinaryDotNet;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;

using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Yad2_Clone.Data;
using Yad2_Clone.Mapper;
using Yad2_Clone.Models.User;
using Yad2_Clone.Repositories;

namespace Yad2_Clone
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            // In summary, this code configures BookStoreContext to use SQL Server as the database
            // provider and provides the connection string from the application's configuration.
            // Then, it adds BookStoreContext to the dependency injection container so that it
            // can be injected into other components of the application, such as controllers or services, where needed.

            //Cloudinary configuration start
            Cloudinary cloudinary = new Cloudinary(builder.Configuration["CLOUDINARY_URL"]);
            cloudinary.Api.Secure = true;
            //Cloudinary configuration end

            //Database Configuration and Context injection Start
            builder.Services.AddDbContext<Yad2CloneContext>(
                opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("Yad2ClonePublic")));
            builder.Services.AddIdentity<AppUser,IdentityRole>().AddEntityFrameworkStores<Yad2CloneContext>().AddDefaultTokenProviders();
            //AddEntityFrameworkStores is a method provided by ASP.NET Core Identity that adds the Entity Framework Core implementation of
            //the identity stores to the dependency injection (DI) container.
            //Database Configuration End


            //autoMapper configuration Start
            builder.Services.AddAutoMapper(typeof(AutoMapperProfile));
            //autoMapper configuration end

            //Configure the authentication Start
            builder.Services.AddAuthentication(options =>
            {  
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>//This method adds the JWT bearer authentication handler to the authentication services.
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ClockSkew = TimeSpan.Zero,//cancel ClockSkew
                    ValidateIssuer = true,//Specifies whether to validate the issuer of the token.
                    ValidateAudience = true,//Specifies whether to validate the audience of the token.
                    ValidateLifetime = true,//check exparation date of the token
                    ValidAudience = builder.Configuration["JWT:ValidAudience"],
                    ValidIssuer = builder.Configuration["JST:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
                };
            });
            //Configure the authentication End



            //              What *builder.Services.AddControllers()* Actually Does???
            // registers everything that is needed for Web API Development. The services include Support for Controllers,
            // Model Binding, API Explorer, Authorization, CORS, Validations, Formatter Mapping, etc
            // It sets up services required for handling HTTP requests and responses.

            //This code snippet configures ASP.NET Core to use Newtonsoft.Json as the JSON serializer
            //for controllers and specifies settings to ignore reference loops during serialization.
            //This can be useful in scenarios where you have complex object graphs with circular references.

            //Configuration to prevent db entities infinit loop Start
            builder.Services.AddControllers().AddNewtonsoftJson(opt =>
            {//Serializer = סידורי
                opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });
            //Configuration to prevent db entities infinit loop End

            //Cors Configuration Start
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                });
            });
            //Cors Configuration End

            //password setting in identity
            builder.Services.Configure<IdentityOptions>(options =>
            {

                // Default Password settings(only changed the min length to be 8)
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 8;
                options.Password.RequiredUniqueChars = 1;

            });



            //Services Injection Start
            builder.Services.AddTransient<IUserImageService, UserImageService>();
            builder.Services.AddTransient<Cloudinary>();
            //Services Injection End

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
