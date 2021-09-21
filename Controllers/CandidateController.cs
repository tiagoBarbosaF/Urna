using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UrnaEletronica.Data;
using UrnaEletronica.Models;

namespace UrnaEletronica.Controllers
{
  [ApiController]
  [Route("v1/candidates")]
  public class CandidateController : ControllerBase
  {
    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Candidate>>> Get([FromServices] DataContext context)
    {
      var candidates = await context.Candidates.ToListAsync();
      return candidates;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Candidate>> Post([FromServices] DataContext context, [FromBody] Candidate model)
    {
      if (ModelState.IsValid)
      {
        context.Candidates.Add(model);
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