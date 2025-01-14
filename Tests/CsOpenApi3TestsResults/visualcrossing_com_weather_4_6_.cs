//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Historical and Forecast Weather API
		/// Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		/// Timeline_Weather_API_15_day_forecast_requestGetByLocationAndContentTypeAndUnitGroupAndIncludeAndLangAndKey VisualCrossingWebServices/rest/services/timeline/{location}
		/// </summary>
		/// <param name="location">Locaton of interest as an address, partial address or decimal latitude,longtude value</param>
		/// <param name="contentType">data format of the output either json or CSV</param>
		/// <param name="include">data to include in the output (required for CSV format - days,hours,alerts,current,events )</param>
		/// <param name="lang">Language to use for weather descriptions</param>
		/// <returns>Auto generated using Swagger Inspector</returns>
		public async Task Timeline_Weather_API_15_day_forecast_requestGetByLocationAndContentTypeAndUnitGroupAndIncludeAndLangAndKeyAsync(string location, string contentType, string unitGroup, string include, string lang, string key, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "VisualCrossingWebServices/rest/services/timeline/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"&contentType=" + (contentType==null? "" : System.Uri.EscapeDataString(contentType))+"&unitGroup=" + (unitGroup==null? "" : System.Uri.EscapeDataString(unitGroup))+"&include=" + (include==null? "" : System.Uri.EscapeDataString(include))+"&lang=" + (lang==null? "" : System.Uri.EscapeDataString(lang))+"&key=" + (key==null? "" : System.Uri.EscapeDataString(key));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Historical and Forecast Weather API
		/// Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		/// Timeline_Weather_API_single_date_requestGetByLocationAndStartdateAndContentTypeAndUnitGroupAndIncludeAndLangAndKey VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}
		/// </summary>
		/// <param name="contentType">data format of the output either json or CSV</param>
		/// <param name="include">data to include in the output (required for CSV format - days,hours,alerts,current,events )</param>
		/// <param name="lang">Language to use for weather descriptions</param>
		/// <returns>Auto generated using Swagger Inspector</returns>
		public async Task Timeline_Weather_API_single_date_requestGetByLocationAndStartdateAndContentTypeAndUnitGroupAndIncludeAndLangAndKeyAsync(string location, string startdate, string contentType, string unitGroup, string include, string lang, string key, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "VisualCrossingWebServices/rest/services/timeline/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/"+ (startdate==null? "" : System.Uri.EscapeDataString(startdate))+"&contentType=" + (contentType==null? "" : System.Uri.EscapeDataString(contentType))+"&unitGroup=" + (unitGroup==null? "" : System.Uri.EscapeDataString(unitGroup))+"&include=" + (include==null? "" : System.Uri.EscapeDataString(include))+"&lang=" + (lang==null? "" : System.Uri.EscapeDataString(lang))+"&key=" + (key==null? "" : System.Uri.EscapeDataString(key));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Historical and Forecast Weather API
		/// Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		/// Timeline_Weather_API_date_range_requestGetByLocationAndStartdateAndEnddateAndContentTypeAndUnitGroupAndIncludeAndLangAndKey VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}/{enddate}
		/// </summary>
		/// <param name="contentType">data format of the output either json or CSV</param>
		/// <param name="include">data to include in the output (required for CSV format - days,hours,alerts,current,events )</param>
		/// <param name="lang">Language to use for weather descriptions</param>
		/// <returns>Auto generated using Swagger Inspector</returns>
		public async Task Timeline_Weather_API_date_range_requestGetByLocationAndStartdateAndEnddateAndContentTypeAndUnitGroupAndIncludeAndLangAndKeyAsync(string location, string startdate, string enddate, string contentType, string unitGroup, string include, string lang, string key, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "VisualCrossingWebServices/rest/services/timeline/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/"+ (startdate==null? "" : System.Uri.EscapeDataString(startdate))+"/"+ (enddate==null? "" : System.Uri.EscapeDataString(enddate))+"&contentType=" + (contentType==null? "" : System.Uri.EscapeDataString(contentType))+"&unitGroup=" + (unitGroup==null? "" : System.Uri.EscapeDataString(unitGroup))+"&include=" + (include==null? "" : System.Uri.EscapeDataString(include))+"&lang=" + (lang==null? "" : System.Uri.EscapeDataString(lang))+"&key=" + (key==null? "" : System.Uri.EscapeDataString(key));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Weather Forecast API
		/// Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
		/// Weather_ForecastGetBySendAsDatasourceAndAllowAsynchAndShortColumnNamesAndLocationsAndAggregateHoursAndContentTypeAndUnitGroupAndKey VisualCrossingWebServices/rest/services/weatherdata/forecast
		/// </summary>
		/// <returns>Auto generated using Swagger Inspector</returns>
		public async Task Weather_ForecastGetBySendAsDatasourceAndAllowAsynchAndShortColumnNamesAndLocationsAndAggregateHoursAndContentTypeAndUnitGroupAndKeyAsync(bool sendAsDatasource, bool allowAsynch, bool shortColumnNames, string locations, string aggregateHours, string contentType, string unitGroup, string key, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "VisualCrossingWebServices/rest/services/weatherdata/forecast?sendAsDatasource="+sendAsDatasource+"&allowAsynch="+allowAsynch+"&shortColumnNames="+shortColumnNames+"&locations=" + (locations==null? "" : System.Uri.EscapeDataString(locations))+"&aggregateHours=" + (aggregateHours==null? "" : System.Uri.EscapeDataString(aggregateHours))+"&contentType=" + (contentType==null? "" : System.Uri.EscapeDataString(contentType))+"&unitGroup=" + (unitGroup==null? "" : System.Uri.EscapeDataString(unitGroup))+"&key=" + (key==null? "" : System.Uri.EscapeDataString(key));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves hourly or daily historical weather records.
		/// The weather history data is suitable for retrieving hourly or daily historical weather records.
		/// Historical_WeatherGetByMaxDistanceAndShortColumnNamesAndEndDateTimeAndAggregateHoursAndCollectStationContributionsAndStartDateTimeAndMaxStationsAndAllowAsynchAndLocationsAndIncludeNormalsAndContentTypeAndUnitGroupAndKey VisualCrossingWebServices/rest/services/weatherdata/history
		/// </summary>
		/// <returns>Auto generated using Swagger Inspector</returns>
		public async Task Historical_WeatherGetByMaxDistanceAndShortColumnNamesAndEndDateTimeAndAggregateHoursAndCollectStationContributionsAndStartDateTimeAndMaxStationsAndAllowAsynchAndLocationsAndIncludeNormalsAndContentTypeAndUnitGroupAndKeyAsync(string maxDistance, bool shortColumnNames, string endDateTime, string aggregateHours, bool collectStationContributions, string startDateTime, string maxStations, bool allowAsynch, string locations, bool includeNormals, string contentType, string unitGroup, string key, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "VisualCrossingWebServices/rest/services/weatherdata/history?maxDistance=" + (maxDistance==null? "" : System.Uri.EscapeDataString(maxDistance))+"&shortColumnNames="+shortColumnNames+"&endDateTime=" + (endDateTime==null? "" : System.Uri.EscapeDataString(endDateTime))+"&aggregateHours=" + (aggregateHours==null? "" : System.Uri.EscapeDataString(aggregateHours))+"&collectStationContributions="+collectStationContributions+"&startDateTime=" + (startDateTime==null? "" : System.Uri.EscapeDataString(startDateTime))+"&maxStations=" + (maxStations==null? "" : System.Uri.EscapeDataString(maxStations))+"&allowAsynch="+allowAsynch+"&locations=" + (locations==null? "" : System.Uri.EscapeDataString(locations))+"&includeNormals="+includeNormals+"&contentType=" + (contentType==null? "" : System.Uri.EscapeDataString(contentType))+"&unitGroup=" + (unitGroup==null? "" : System.Uri.EscapeDataString(unitGroup))+"&key=" + (key==null? "" : System.Uri.EscapeDataString(key));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
