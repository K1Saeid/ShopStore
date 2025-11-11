using Microsoft.EntityFrameworkCore;
using ShopStore.Models;

namespace ShopStore.Repositories;

public class ProductRepository(ShopContext context) : IProductRepository
{
    public async Task<List<Product>> GetAllAsync() =>
        await context.Products.AsNoTracking().ToListAsync();

    public async Task<Product?> GetByIdAsync(int id) =>
        await context.Products.FindAsync(id);

    public async Task AddAsync(Product product)
    {
        await context.Products.AddAsync(product);
        await context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Product product)
    {
        context.Products.Update(product);
        await context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Product product)
    {
        context.Products.Remove(product);
        await context.SaveChangesAsync();
    }
}