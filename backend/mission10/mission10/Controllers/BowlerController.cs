using mission10.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _bowlContext;
        
        public BowlerController(BowlerDbContext temp)
        {
            _bowlContext = temp;
        }
        
        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlList = _bowlContext.Bowlers
                .Include(b => b.Team) // Ensure Team is included
                .ToList();
    
            return bowlList;
        }

    }
}