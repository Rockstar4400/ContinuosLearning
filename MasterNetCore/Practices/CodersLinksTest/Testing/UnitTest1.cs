using NUnit.Framework;
using System.Web.Mvc;
using WebApp.Controllers;
using EFCoreInMemoryDemo.Web.Models;

namespace Testing
{
    public class Tests
    {
        [Test]
        public void TestIndexView()
        {
            var obj = new UsersController();

            var result = obj.Get();

            Assert.NotNull(result);

        }
    }
}