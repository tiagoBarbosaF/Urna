using System;
using System.ComponentModel.DataAnnotations;

namespace UrnaEletronica.Models
{
  public class Candidate
  {
    [Key] public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    public string FullName { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    public string ViceName { get; set; }

    [DataType(DataType.Date)] public DateTime RegisterDate { get; set; }

    public int Label { get; set; }
  }
}