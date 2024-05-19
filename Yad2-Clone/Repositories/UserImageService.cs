using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;
using Yad2_Clone.Data;
using Yad2_Clone.Models.User;

namespace Yad2_Clone.Repositories
{
    public class UserImageService : IUserImageService
    {

        private readonly Cloudinary _cloudinary;
        private readonly Yad2CloneContext _context;
        public UserImageService(Cloudinary cloudinary, Yad2CloneContext context)
        {
            _cloudinary = cloudinary;
            _context = context;
        }
        
        public async Task<ImageUploadResult> UploadImageAsync(AppUser user, IFormFile file)
        {
            var uploadResult = new ImageUploadResult();
            if(file.Length > 0)
            {
                using var stream = file.OpenReadStream();
                //This method opens a Stream to read the contents of the uploaded file.
                //This statement ensures proper disposal of resources by automatically calling Dispose() on the Stream object (stream) when it's no longer needed.
                var uploadParams = new ImageUploadParams()
                {
                    File = new FileDescription(file.FileName, stream),
                    Transformation = new Transformation().Width(100).Height(100)  // Specify the desired width and height for the image
                                            .Gravity("face").Crop("thumb").Radius("max"),  // Apply face detection, crop to thumbnail, and round corners
                    Folder = "Users_Photos",
                    Tags = $"userId_{user.Id}",
                    UseFilename = true,
                    UniqueFilename = true,// Cloudinary will automatically add a unique identifier to the filename.
                    Overwrite = false
                };
                uploadResult = await _cloudinary.UploadAsync(uploadParams);
                Console.WriteLine(uploadResult.JsonObj);
            }

            if (uploadResult.Error != null) throw new Exception(uploadResult.Error.Message);

            UsersPhoto photo = new()
            {
                Url = uploadResult.SecureUrl.AbsoluteUri,
                PublicId = uploadResult.PublicId,
                IsMain = true,              
            };
            user.Photos.Add(photo);
            await _context.SaveChangesAsync();

            return uploadResult;
        }

        public async Task<DeletionResult> DeleteImageAsync(string publicId)
        {
            var deleteParams = new DeletionParams(publicId);
            var result = await _cloudinary.DestroyAsync(deleteParams);
            return result;
        }
    }
}
