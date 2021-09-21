using Microsoft.EntityFrameworkCore;
using UrnaEletronica.Models;

namespace UrnaEletronica.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<Candidate> Candidates { get; set; }
    public DbSet<Vote> Votes { get; set; }
  }
}