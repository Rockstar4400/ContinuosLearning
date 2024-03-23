using EFCoreInMemoryDemo.Web.DataContext;
using EFCoreInMemoryDemo.Web.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace EFCoreInMemoryDemo.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //1. Get the IWebHost which will host this application.
            var host = CreateWebHostBuilder(args).Build();

            //2. Find the service layer within our scope.
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<DBContext>();

                DataGenerator.Initialize(services);
            }

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
