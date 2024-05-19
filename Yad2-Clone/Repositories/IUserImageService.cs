using CloudinaryDotNet.Actions;
using Yad2_Clone.Models.User;

namespace Yad2_Clone.Repositories
{
    public interface IUserImageService
    {
        Task<DeletionResult> DeleteImageAsync(string publicId);
        Task<ImageUploadResult> UploadImageAsync(AppUser user, IFormFile file);
    }
}