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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Account
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public Address Address { get; set; }
		
		/// <summary>
		/// Unique identifier of the account
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Double> Id { get; set; }
		
		/// <summary>
		/// Name of the account
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Status of the account
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Address
	{
		
		/// <summary>
		/// Street portion of the address
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address_1")]
		public string Address_1 { get; set; }
		
		/// <summary>
		/// Additional address information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address_2")]
		public string Address_2 { get; set; }
		
		/// <summary>
		/// City name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		/// <summary>
		/// Country code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		/// <summary>
		/// Postal code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="postal_code")]
		public string Postal_code { get; set; }
		
		/// <summary>
		/// State/Province code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
	}
	
	/// <summary>
	/// Account object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AccountEmbeddedObject
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Account Data { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AccountHalResponse
	{
		
		/// <summary>
		/// Account object
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public AccountEmbeddedObject _embedded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Links _links { get; set; }
		
		/// <summary>
		/// Current page number
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Double> Page { get; set; }
		
		/// <summary>
		/// Number of records per page
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Double> Page_size { get; set; }
		
		/// <summary>
		/// Total number of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total_items")]
		public System.Nullable<System.Double> Total_items { get; set; }
		
		/// <summary>
		/// Total number of pages
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total_pages")]
		public System.Nullable<System.Double> Total_pages { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Links
	{
		
		/// <summary>
		/// URL to the first page of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="first")]
		public FirstHref First { get; set; }
		
		/// <summary>
		/// URL to the last page of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="last")]
		public LastHref Last { get; set; }
		
		/// <summary>
		/// URL to the next page of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="next")]
		public NextHref Next { get; set; }
		
		/// <summary>
		/// URL to the previous page of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="prev")]
		public PrevHref Prev { get; set; }
		
		/// <summary>
		/// URL to the current page of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="self")]
		public SelfHref Self { get; set; }
	}
	
	/// <summary>
	/// URL to the first page of records
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FirstHref
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	/// <summary>
	/// URL to the last page of records
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LastHref
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	/// <summary>
	/// URL to the next page of records
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class NextHref
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	/// <summary>
	/// URL to the previous page of records
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PrevHref
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	/// <summary>
	/// URL to the current page of records
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SelfHref
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AddressWithTimeZone
	{
		
		/// <summary>
		/// Street portion of the address
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address_1")]
		public string Address_1 { get; set; }
		
		/// <summary>
		/// Additional address information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address_2")]
		public string Address_2 { get; set; }
		
		/// <summary>
		/// City name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		/// <summary>
		/// Country code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		/// <summary>
		/// Postal code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="postal_code")]
		public string Postal_code { get; set; }
		
		/// <summary>
		/// State/Province code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
		
		/// <summary>
		/// Time zone
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="time_zone")]
		public string Time_zone { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Location
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public AddressWithTimeZone Address { get; set; }
		
		/// <summary>
		/// Unique identifier of the location
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Double> Id { get; set; }
		
		/// <summary>
		/// Name of the location
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Location object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LocationEmbeddedObject
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Location Data { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LocationHalResponse
	{
		
		/// <summary>
		/// Location object
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public LocationEmbeddedObject _embedded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Links _links { get; set; }
		
		/// <summary>
		/// Current page number
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Double> Page { get; set; }
		
		/// <summary>
		/// Number of records per page
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Double> Page_size { get; set; }
		
		/// <summary>
		/// Total number of records
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total_items")]
		public System.Nullable<System.Double> Total_items { get; set; }
		
		/// <summary>
		/// Total number of pages
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total_pages")]
		public System.Nullable<System.Double> Total_pages { get; set; }
	}
	
	/// <summary>
	/// Collection of location objects
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LocationsEmbeddedObject
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Location[] Data { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LocationsHalResponse
	{
		
		/// <summary>
		/// Collection of location objects
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public LocationsEmbeddedObject _embedded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Links _links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Double> Page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Double> Page_size { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="total_items")]
		public System.Nullable<System.Double> Total_items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="total_pages")]
		public System.Nullable<System.Double> Total_pages { get; set; }
	}
	
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
		/// Get account data by ID
		/// AccountCtrl_getAccountServicesByAccountID api/accounts/{account_id}
		/// </summary>
		/// <param name="account_id">The Vonage Business Cloud account ID</param>
		/// <returns>Success</returns>
		public async Task<AccountHalResponse> AccountCtrl_getAccountServicesByAccountIDAsync(double account_id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/accounts/"+account_id;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AccountHalResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get account locations data by account ID
		/// AccountCtrl_getLocationsByAccountID api/accounts/{account_id}/locations
		/// </summary>
		/// <param name="account_id">The Vonage Business Cloud account ID</param>
		/// <returns>Success</returns>
		public async Task<LocationsHalResponse> AccountCtrl_getLocationsByAccountIDAsync(double account_id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/accounts/"+account_id+"/locations";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<LocationsHalResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get location data by account ID and location ID
		/// AccountCtrl_getLocationByID api/accounts/{account_id}/locations/{location_id}
		/// </summary>
		/// <param name="account_id">The Vonage Business Cloud account ID</param>
		/// <param name="location_id">The Vonage Business Cloud location ID</param>
		/// <returns>Success</returns>
		public async Task<LocationHalResponse> AccountCtrl_getLocationByIDAsync(double account_id, double location_id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/accounts/"+account_id+"/locations/"+location_id;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<LocationHalResponse>(streamContent, jsonSerializerSettings);
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