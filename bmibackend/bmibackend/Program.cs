using Microsoft.EntityFrameworkCore;
using bmibackend.Data;
var builder = WebApplication.CreateBuilder(args);

// 1. appsettings.json එකෙන් Connection String එක කියවා ගැනීම
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// 2. DbContext එක MySQL (Pomelo) සමඟ සම්බන්ධ කර Register කිරීම
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
