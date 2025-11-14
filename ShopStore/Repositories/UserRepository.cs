using Microsoft.EntityFrameworkCore;
using ShopStore.Models;

namespace ShopStore.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ShopContext _context;
    public UserRepository(ShopContext context)
    {
        _context = context;
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task AddUserAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }
}
