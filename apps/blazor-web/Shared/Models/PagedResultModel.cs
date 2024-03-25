namespace UpliftLunchNLearn.BlazorWeb.BlazorWeb.Shared.Models;

public record PagedResultModel<T>(T[] Items, int PageSize, int PageNumber, int TotalCount)
{
  public static PagedResultModel<T> Empty()
  {
    return new PagedResultModel<T>(Array.Empty<T>(), 10, 1, 0);
  }
}

public record PagedQuery(int PageSize, int PageNumber);
