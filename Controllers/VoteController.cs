using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UrnaEletronica.Data;
using UrnaEletronica.Models;

namespace UrnaEletronica.Controllers
{
  [ApiController]
  [Route("v1/votes")]
  public class VoteController : ControllerBase
  {
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Vote>>> Get([FromServices] DataContext context)
    {
      var votes = await context.Votes.Include(v => v.Candidate).ToListAsync();
      return votes;
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<Vote>> GetByCandidateId([FromServices] DataContext context, int id)
    {
      var vote = await context.Votes.Include(v => v.Candidate).AsNoTracking()
        .FirstOrDefaultAsync(v => v.CandidateId == id);
      return vote;
    }

    [HttpGet]
    [Route("candidates/{id:int}")]
    public async Task<ActionResult<List<Vote>>> GetByCandidate([FromServices] DataContext context, int id)
    {
      var votes = await context.Votes.Include(v => v.Candidate).AsNoTracking().Where(v => v.CandidateId == id)
        .ToListAsync();
      return votes;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Vote>> Post([FromServices] DataContext context, [FromBody] Vote model)
    {
      if (ModelState.IsValid)
      {
        context.Votes.Add(model);
        await context.SaveChangesAsync();
        return model;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }
  }
}