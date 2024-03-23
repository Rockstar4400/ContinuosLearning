using Mailing_List_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Mailing_List_App.DataContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<User> users { get; set; }

    }
}
