using bmibackend.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using bmibackend.Models;

namespace bmibackend.Data
{
   
    
       
        public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            {
            }

            
            public DbSet<User> Users { get; set; }
        }
    
}
