using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using UpliftLunchNLearn.BlazorWeb.BlazorWeb;
using UpliftLunchNLearn.BlazorWeb.BlazorWeb.Events;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddMudServices();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("http://localhost:5001") });
builder.Services.AddScoped<EventsClient>();

await builder.Build().RunAsync();
