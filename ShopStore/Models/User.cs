using System.ComponentModel.DataAnnotations;

namespace ShopStore.Models;

public class User
{
    public int Id { get; set; }

    [Required, StringLength(100)]
    public string FullName { get; set; }

    [Required, EmailAddress, StringLength(150)]
    public string Email { get; set; }

    [Required]
    public string PasswordHash { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
