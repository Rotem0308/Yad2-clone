using System.ComponentModel.DataAnnotations;

namespace Yad2_Clone.Utilities
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    public class DateGreaterOrEqualThanAttribute : ValidationAttribute
    {

        private readonly DateTime _currentDate;
        public DateGreaterOrEqualThanAttribute()
        {
            _currentDate = DateTime.Now.Date;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var currentValue = (DateTime)value;

            if (currentValue < _currentDate)
            {
                return new ValidationResult(ErrorMessage = "Date Must Be Later Than or Equal to Current Date");
            }

            return ValidationResult.Success;
        }
    }
}
