using UpliftLunchNLearn.BlazorWeb.BlazorWeb.Events.Models;

namespace UpliftLunchNLearn.BlazorWeb.BlazorWeb.Events;

public class EventFormModel
{
  public string Name { get; set; } = "";
  public string Location { get; set; } = "";
  public DateTime? Date { get; set; } = DateTime.Now;

  public static EventFormModel FromModel(EventModel? model)
  {
    if (model == null)
    {
      return new EventFormModel();
    }

    return new EventFormModel
    {
      Date = model.Date,
      Location = model.Location,
      Name = model.Name
    };
  }
}
