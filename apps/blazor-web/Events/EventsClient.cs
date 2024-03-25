using UpliftLunchNLearn.BlazorWeb.BlazorWeb.Events.Models;
using UpliftLunchNLearn.BlazorWeb.BlazorWeb.Shared;
using UpliftLunchNLearn.BlazorWeb.BlazorWeb.Shared.Models;

namespace UpliftLunchNLearn.BlazorWeb.BlazorWeb.Events;

public class EventsClient(HttpClient client) : ApiClient(client)
{
  public async Task<PagedResultModel<EventModel>> GetEventsAsync(PagedQuery query)
  {
    return await GetAsync<PagedResultModel<EventModel>>(
      $"events?pageSize={query.PageSize}&pageNumber={query.PageNumber}"
    );
  }

  public async Task UpdateEvent(EventModel evt)
  {
    await PutAsync($"events/{evt.Id}", evt);
  }

  public async Task<EventModel> CreateEvent(EventModel evt)
  {
    return await PostAsync("events", evt);
  }
}
