using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCoreInMemoryDemo.Web.DataContext;
using EFCoreInMemoryDemo.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace EFCoreInMemoryDemo.Web.Controllers
{
    public class UserController : Controller
    {
        private DBContext _context;

        public UserController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var users = _context.User.ToList();
            return View(users);
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(User user)
        {

            bool any = _context.User.Any(x => x.ID == 1);
            var newID = 0;
            if (!any)
            {
                newID = 1;
            }
            else
            {
                newID = _context.User.Select(x => x.ID).Max() + 1;
            }

            user.ID = newID;

            _context.User.Add(user);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            _context.User.Remove(_context.User.Find(id));
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var user = _context.User.Find(id);
            return View(user);
        }

        [HttpPost]
        public IActionResult Edit(User user)
        {
            _context.User.Update(user);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

    }
}