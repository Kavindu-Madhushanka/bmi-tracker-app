using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bmibackend.Models
{
    [Table("users")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("User_ID")]
        public int UserId { get; set; }

        [Required]
        [StringLength(100)]
        [Column("Full_Name")]
        public string FullName { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(255)]
        public string Password { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
