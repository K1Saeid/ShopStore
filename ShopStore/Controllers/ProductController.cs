using Microsoft.AspNetCore.Mvc;
using ShopStore.Repositories;
using ShopStore.Models;
using Microsoft.AspNetCore.Authorization;


namespace ShopStore.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController(IProductRepository repository) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult> GetAll() => Ok(await repository.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<ActionResult> GetById(int id) =>
        await repository.GetByIdAsync(id) is Product product ? Ok(product) : NotFound();

    
    [HttpPost]
    public async Task<ActionResult> Post(Product product)
    {
        await repository.AddAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }
  
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Product product)
    {
        product.Id = id;
        await repository.UpdateAsync(product);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var existing = await repository.GetByIdAsync(id);
        if (existing == null) return NotFound();
        await repository.DeleteAsync(existing);
        return Ok();
    }
}
