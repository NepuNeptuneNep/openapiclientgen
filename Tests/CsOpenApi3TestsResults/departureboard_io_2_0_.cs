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
		/// getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		/// GetArrivalsAndDeparturesByCRS getArrivalsAndDeparturesByCRS/{CRS}
		/// </summary>
		/// <param name="CRS">The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.
		/// Min length: 3
		/// Max length: 3
		// </param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <param name="numServices">The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.</param>
		/// <param name="timeOffset">The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
		/// Minimum: -239
		/// Maximum: 119
		// </param>
		/// <param name="timeWindow">The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
		/// Minimum: 0
		// </param>
		/// <param name="serviceDetails">Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.</param>
		/// <param name="filterStation">The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.</param>
		/// <param name="filterType">Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetArrivalsAndDeparturesByCRSAsync(string CRS, string apiKey, int numServices, int timeOffset, int timeWindow, bool serviceDetails, string filterStation, string filterType, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getArrivalsAndDeparturesByCRS/"+ (CRS==null? "" : System.Uri.EscapeDataString(CRS))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey))+"&numServices="+numServices+"&timeOffset="+timeOffset+"&timeWindow="+timeWindow+"&serviceDetails="+serviceDetails+"&filterStation=" + (filterStation==null? "" : System.Uri.EscapeDataString(filterStation))+"&filterType=" + (filterType==null? "" : System.Uri.EscapeDataString(filterType));
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
		/// getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		/// GetArrivalsByCRS getArrivalsByCRS/{CRS}
		/// </summary>
		/// <param name="CRS">The CRS (Computer Reservation System) for the Station you wish to get arrival information for, e.g. KGX for London Kings Cross.
		/// Min length: 3
		/// Max length: 3
		// </param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <param name="numServices">The number of arriving train services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running to this station within the time window specified.</param>
		/// <param name="timeOffset">The time window in minutes to offset the arrival information by. For example, a value of 20 will not show services arriving within the next 20 minutes.
		/// Minimum: -239
		/// Maximum: 119
		// </param>
		/// <param name="timeWindow">The time window to show train services for in minutes. For example, a value of 60 will show services arriving to the station in the next 60 minutes.
		/// Minimum: 0
		// </param>
		/// <param name="serviceDetails">Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.</param>
		/// <param name="filterStation">The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services arriving to Paddington that stopped at Reading.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetArrivalsByCRSAsync(string CRS, string apiKey, int numServices, int timeOffset, int timeWindow, bool serviceDetails, string filterStation, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getArrivalsByCRS/"+ (CRS==null? "" : System.Uri.EscapeDataString(CRS))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey))+"&numServices="+numServices+"&timeOffset="+timeOffset+"&timeWindow="+timeWindow+"&serviceDetails="+serviceDetails+"&filterStation=" + (filterStation==null? "" : System.Uri.EscapeDataString(filterStation));
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
		/// getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		/// GetDeparturesByCRS getDeparturesByCRS/{CRS}
		/// </summary>
		/// <param name="CRS">The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		/// Min length: 3
		/// Max length: 3
		// </param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <param name="numServices">The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.</param>
		/// <param name="timeOffset">The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.
		/// Minimum: -239
		/// Maximum: 119
		// </param>
		/// <param name="timeWindow">The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.
		/// Minimum: 0
		// </param>
		/// <param name="serviceDetails">Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.</param>
		/// <param name="filterStation">The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetDeparturesByCRSAsync(string CRS, string apiKey, int numServices, int timeOffset, int timeWindow, bool serviceDetails, string filterStation, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getDeparturesByCRS/"+ (CRS==null? "" : System.Uri.EscapeDataString(CRS))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey))+"&numServices="+numServices+"&timeOffset="+timeOffset+"&timeWindow="+timeWindow+"&serviceDetails="+serviceDetails+"&filterStation=" + (filterStation==null? "" : System.Uri.EscapeDataString(filterStation));
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
		/// getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
		/// GetFastestDeparturesByCRS getFastestDeparturesByCRS/{CRS}
		/// </summary>
		/// <param name="CRS">The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		/// Min length: 3
		/// Max length: 3
		// </param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <param name="filterList">The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.</param>
		/// <param name="timeOffset">The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.
		/// Minimum: -239
		/// Maximum: 119
		// </param>
		/// <param name="timeWindow">The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.
		/// Minimum: 0
		// </param>
		/// <param name="serviceDetails">Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetFastestDeparturesByCRSAsync(string CRS, string apiKey, string filterList, int timeOffset, int timeWindow, bool serviceDetails, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getFastestDeparturesByCRS/"+ (CRS==null? "" : System.Uri.EscapeDataString(CRS))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey))+"&filterList=" + (filterList==null? "" : System.Uri.EscapeDataString(filterList))+"&timeOffset="+timeOffset+"&timeWindow="+timeWindow+"&serviceDetails="+serviceDetails;
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
		/// getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
		/// GetNextDeparturesByCRS getNextDeparturesByCRS/{CRS}
		/// </summary>
		/// <param name="CRS">The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		/// Min length: 3
		/// Max length: 3
		// </param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <param name="filterList">The CRS (Computer Reservation System) codes to show departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.</param>
		/// <param name="timeOffset">The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
		/// Minimum: -239
		/// Maximum: 119
		// </param>
		/// <param name="timeWindow">The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
		/// Minimum: 0
		// </param>
		/// <param name="serviceDetails">Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetNextDeparturesByCRSAsync(string CRS, string apiKey, string filterList, int timeOffset, int timeWindow, bool serviceDetails, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getNextDeparturesByCRS/"+ (CRS==null? "" : System.Uri.EscapeDataString(CRS))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey))+"&filterList=" + (filterList==null? "" : System.Uri.EscapeDataString(filterList))+"&timeOffset="+timeOffset+"&timeWindow="+timeWindow+"&serviceDetails="+serviceDetails;
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
		/// getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
		/// GetServiceDetailsByID getServiceDetailsByID/{serviceID}
		/// </summary>
		/// <param name="serviceID">The Service ID for the Train Service you wish to look up in the URL Safe format. For example "qsec4O8LW7k8ITcOt_ir4Q--".</param>
		/// <param name="apiKey">The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.</param>
		/// <returns>**OK**: The API Request was successful and returned data.</returns>
		public async Task GetServiceDetailsByIDAsync(string serviceID, string apiKey, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getServiceDetailsByID/"+ (serviceID==null? "" : System.Uri.EscapeDataString(serviceID))+"&apiKey=" + (apiKey==null? "" : System.Uri.EscapeDataString(apiKey));
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