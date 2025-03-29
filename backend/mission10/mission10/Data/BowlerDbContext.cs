namespace mission10.Data;
using Microsoft.EntityFrameworkCore;

public class BowlerDbContext : DbContext
{
    public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options) {}
    
    public DbSet<Team> Teams { get; set; }
    public DbSet<Bowler> Bowlers { get; set; }
}