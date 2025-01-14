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
		/// Returns all regions present in Tanzania
		/// Fetches all regions present in Tanzania and then return a response as json
		/// Tanzania_regions {country}
		/// </summary>
		/// <param name="country">Country name in lowercase eg (Tanzania)</param>
		/// <returns>Successful response</returns>
		public async Task Tanzania_regionsAsync(string country, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (country==null? "" : System.Uri.EscapeDataString(country));
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
		/// Returns all districts in region
		/// Returns a post code and all districts in a specified region
		/// Districts_in_a_region {country}/{region}
		/// </summary>
		/// <param name="country">Country name in lowercase eg( tanzania)</param>
		/// <param name="region">Name of the region eg (Mbeya)</param>
		/// <returns>Successful response</returns>
		public async Task Districts_in_a_regionAsync(string country, string region, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (country==null? "" : System.Uri.EscapeDataString(country))+"/"+ (region==null? "" : System.Uri.EscapeDataString(region));
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
		/// Returns all wards in a district
		/// Returns all wards in a  specified district and district postcode
		/// Wards_in_a_district {country}/{region}/{district}
		/// </summary>
		/// <param name="country">Country name in lowercase eg( tanzania)</param>
		/// <param name="region">Name of the region eg (Mbeya)</param>
		/// <param name="district">Name of the District eg (Rungwe)</param>
		/// <returns>Successful response</returns>
		public async Task Wards_in_a_districtAsync(string country, string region, string district, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (country==null? "" : System.Uri.EscapeDataString(country))+"/"+ (region==null? "" : System.Uri.EscapeDataString(region))+"/"+ (district==null? "" : System.Uri.EscapeDataString(district));
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
		/// Returns all streets in a ward
		/// Returns all streets in a specified ward and ward postcode
		/// Streets_in_a_ward {country}/{region}/{district}/{ward}
		/// </summary>
		/// <param name="country">Country name in lowercase eg( tanzania)</param>
		/// <param name="region">Name of the region eg (Mbeya)</param>
		/// <param name="district">Name of the District eg (Rungwe)</param>
		/// <param name="ward">Name of the Ward eg (Kiwira)</param>
		/// <returns>Successful response</returns>
		public async Task Streets_in_a_wardAsync(string country, string region, string district, string ward, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (country==null? "" : System.Uri.EscapeDataString(country))+"/"+ (region==null? "" : System.Uri.EscapeDataString(region))+"/"+ (district==null? "" : System.Uri.EscapeDataString(district))+"/"+ (ward==null? "" : System.Uri.EscapeDataString(ward));
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
		/// Returns all neighborhood in a street
		/// Returns all neighborhood in a specified street
		/// Neighborhood_in_a_street_ {country}/{region}/{district}/{ward}/{street}
		/// </summary>
		/// <param name="country">Country name in lowercase eg( tanzania)</param>
		/// <param name="region">Name of the region eg (Mbeya)</param>
		/// <param name="district">Name of the District eg (Rungwe)</param>
		/// <param name="ward">Name of the Ward eg (Kiwira)</param>
		/// <param name="street">Name of the Street eg (Ilundo)</param>
		/// <returns>Successful response</returns>
		public async Task Neighborhood_in_a_street_Async(string country, string region, string district, string ward, string street, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (country==null? "" : System.Uri.EscapeDataString(country))+"/"+ (region==null? "" : System.Uri.EscapeDataString(region))+"/"+ (district==null? "" : System.Uri.EscapeDataString(district))+"/"+ (ward==null? "" : System.Uri.EscapeDataString(ward))+"/"+ (street==null? "" : System.Uri.EscapeDataString(street));
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
