using bmibackend.Data;
using bmibackend.Models;
using Microsoft.EntityFrameworkCore;
namespace bmibackend.Services;

public interface IAuthService

     {
    Task<User> Register(RegisterModel model);
    Task<User> Login(LoginModel model);
    Task<bool> UserExists(string email);
}
public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _context;

    public AuthService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User> Register(RegisterModel model)
    {

        var existingUser = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == model.Email);

        if (existingUser != null)
            throw new Exception("Email already exists. Please use a different email.");


        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password);

        var user = new User
        {
            FullName = model.FullName,
            Email = model.Email,
            Password = hashedPassword,
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<User> Login(LoginModel model)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == model.Email);

        if (user == null)
            throw new Exception("Invalid email or password");

        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(model.Password, user.Password);

        if (!isPasswordValid)
            throw new Exception("Invalid email or password");

        return user;
    }

    public async Task<bool> UserExists(string email)
    {
        return await _context.Users.AnyAsync(u => u.Email == email);
    }

}

