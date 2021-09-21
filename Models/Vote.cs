using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UrnaEletronica.Models
{
  public class Vote
  {
    public int Id { get; set; }
    public int CandidateId { get; set; }

    [DataType(DataType.Date)] public DateTime VoteDate { get; set; }

    public Candidate Candidate { get; set; }
  }
}