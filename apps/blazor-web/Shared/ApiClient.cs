using System.Net.Http.Json;

namespace UpliftLunchNLearn.BlazorWeb.BlazorWeb.Shared;

public class ApiClient(HttpClient client)
{
  protected async Task<T> GetAsync<T>(string path)
  {
    var response = await client.GetAsync(path).ConfigureAwait(false);
    response.EnsureSuccessStatusCode();
    var data = await response.Content.ReadFromJsonAsync<T>().ConfigureAwait(false);
    if (data != null)
      return data;

    throw new Exception($"returned 'null' from {path} on GET");
  }

  protected async Task PutAsync<T>(string path, T model)
  {
    var response = await client.PutAsJsonAsync(path, model).ConfigureAwait(false);
    response.EnsureSuccessStatusCode();
  }

  protected async Task<T> PostAsync<T>(string path, T model)
  {
    var response = await client.PostAsJsonAsync(path, model).ConfigureAwait(false);
    response.EnsureSuccessStatusCode();
    var result = await response.Content.ReadFromJsonAsync<T>().ConfigureAwait(false);
    if (result != null)
    {
      return result;
    }
    throw new Exception($"returned 'null' from {path} on POST");
  }
}
