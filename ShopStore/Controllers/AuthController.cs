using Microsoft.AspNetCore.Mvc;
using ShopStore.DTOs;
using ShopStore.Models;
using ShopStore.Repositories;
using System.Security.Cryptography;
using System.Text;

namespace ShopStore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    public AuthController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    [HttpPost("signup")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        if (await _userRepository.GetByEmailAsync(user.Email) != null)
            return BadRequest("Email already exists");

        // هش رمز قبل از ذخیره
        user.PasswordHash = HashPassword(user.PasswordHash);
        await _userRepository.AddUserAsync(user);

        return Ok(new { message = "User registered successfully" });
    }

    [HttpPost("signin")]
    public async Task<IActionResult> Login([FromBody] UserLoginDto login)
    {
        var user = await _userRepository.GetByEmailAsync(login.Email);
        if (user == null)
            return Unauthorized("User not found");

        if (user.PasswordHash != HashPassword(login.PasswordHash))
            return Unauthorized("Invalid password");

        HttpContext.Session.SetString("User", System.Text.Json.JsonSerializer.Serialize(new
        {
            user.Id,
            user.FullName,
            user.Email
        }));

        return Ok(new { user.FullName, user.Email });
    }



    [HttpPost("signout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return Ok(new { message = "Signed out successfully" });
    }

    private string HashPassword(string password)
    {
        using var sha = SHA256.Create();
        var bytes = sha.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
    [HttpGet("current-user")]
    public IActionResult GetCurrentUser()
    {
        // خواندن داده‌ی کاربر از سشن
        var userJson = HttpContext.Session.GetString("User");

        if (userJson == null)
            return Unauthorized("No user is currently logged in.");

        // تبدیل JSON به شیء User
        var user = System.Text.Json.JsonSerializer.Deserialize<User>(userJson);

        return Ok(user);
    }

}
