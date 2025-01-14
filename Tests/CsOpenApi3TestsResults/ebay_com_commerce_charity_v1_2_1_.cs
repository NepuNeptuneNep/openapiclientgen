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
	
	
	/// <summary>
	/// The physical location of the item.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Address
	{
		
		/// <summary>
		/// The city of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		/// <summary>
		/// The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		/// <summary>
		/// The postal code of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="postalCode")]
		public string PostalCode { get; set; }
		
		/// <summary>
		/// The state or province of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stateOrProvince")]
		public string StateOrProvince { get; set; }
	}
	
	/// <summary>
	/// The full location, ID, logo and other details of the charity organization.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CharityOrg
	{
		
		/// <summary>
		/// The ID of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="charityOrgId")]
		public string CharityOrgId { get; set; }
		
		/// <summary>
		/// The description of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="location")]
		public Location Location { get; set; }
		
		/// <summary>
		/// The logo of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="logoImage")]
		public Image LogoImage { get; set; }
		
		/// <summary>
		/// The mission statement of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="missionStatement")]
		public string MissionStatement { get; set; }
		
		/// <summary>
		/// The name of the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="registrationId")]
		public string RegistrationId { get; set; }
		
		/// <summary>
		/// The link to the website for the charitable organization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="website")]
		public string Website { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Location
	{
		
		/// <summary>
		/// The physical location of the item.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address")]
		public Address Address { get; set; }
		
		/// <summary>
		/// Defines the format of a geographic coordinate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="geoCoordinates")]
		public GeoCoordinates GeoCoordinates { get; set; }
	}
	
	/// <summary>
	/// Defines the format of a geographic coordinate.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoCoordinates
	{
		
		/// <summary>
		/// The latitude component of the geographic coordinate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="latitude")]
		public System.Nullable<System.Double> Latitude { get; set; }
		
		/// <summary>
		/// The longitude component of the geographic coordinate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="longitude")]
		public System.Nullable<System.Double> Longitude { get; set; }
	}
	
	/// <summary>
	/// The logo of the charitable organization.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Image
	{
		
		/// <summary>
		/// The height of the logo image.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="height")]
		public string Height { get; set; }
		
		/// <summary>
		/// The URL to the logo image location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="imageUrl")]
		public string ImageUrl { get; set; }
		
		/// <summary>
		/// The width of the logo image.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="width")]
		public string Width { get; set; }
	}
	
	/// <summary>
	/// A single set of search results, with information for accessing other sets.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CharitySearchResponse
	{
		
		/// <summary>
		/// The list of charitable organizations that match the search criteria.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="charityOrgs")]
		public CharityOrg[] CharityOrgs { get; set; }
		
		/// <summary>
		/// The relative path to the current set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
		
		/// <summary>
		/// The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="limit")]
		public System.Nullable<System.Int32> Limit { get; set; }
		
		/// <summary>
		/// The relative path to the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="next")]
		public string Next { get; set; }
		
		/// <summary>
		/// The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="offset")]
		public System.Nullable<System.Int32> Offset { get; set; }
		
		/// <summary>
		/// The relative path to the previous set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="prev")]
		public string Prev { get; set; }
		
		/// <summary>
		/// The total number of matches for the search criteria.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total")]
		public System.Nullable<System.Int32> Total { get; set; }
	}
	
	/// <summary>
	/// This type defines the fields that can be returned in an error.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error
	{
		
		/// <summary>
		/// Identifies the type of erro.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		/// <summary>
		/// Name for the primary system where the error occurred. This is relevant for application errors.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
		
		/// <summary>
		/// A unique number to identify the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorId")]
		public System.Nullable<System.Int32> ErrorId { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="inputRefIds")]
		public string[] InputRefIds { get; set; }
		
		/// <summary>
		/// A more detailed explanation of the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="longMessage")]
		public string LongMessage { get; set; }
		
		/// <summary>
		/// Information on how to correct the problem, in the end user's terms and language where applicable.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="outputRefIds")]
		public string[] OutputRefIds { get; set; }
		
		/// <summary>
		/// An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public ErrorParameter[] Parameters { get; set; }
		
		/// <summary>
		/// Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subdomain")]
		public string Subdomain { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorParameter
	{
		
		/// <summary>
		/// The object of the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The value of the object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
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
		/// This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.
		/// GetCharityOrgs charity_org
		/// </summary>
		/// <param name="limit">The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code></param>
		/// <param name="offset">The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code></param>
		/// <param name="q">A query string that matches the keywords in name, mission statement, or description.</param>
		/// <param name="registration_ids">A comma-separated list of charitable organization registration IDs.<br /><br /><span class="tablenote"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code></param>
		/// <returns>OK</returns>
		public async Task<CharitySearchResponse> GetCharityOrgsAsync(string limit, string offset, string q, string registration_ids, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "charity_org?limit=" + (limit==null? "" : System.Uri.EscapeDataString(limit))+"&offset=" + (offset==null? "" : System.Uri.EscapeDataString(offset))+"&q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&registration_ids=" + (registration_ids==null? "" : System.Uri.EscapeDataString(registration_ids));
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
				return JsonSerializer.Deserialize<CharitySearchResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
		/// GetCharityOrg charity_org/{charity_org_id}
		/// </summary>
		/// <param name="charity_org_id">The unique ID of the charitable organization.</param>
		/// <returns>OK</returns>
		public async Task<CharityOrg> GetCharityOrgAsync(string charity_org_id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "charity_org/"+ (charity_org_id==null? "" : System.Uri.EscapeDataString(charity_org_id));
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
				return JsonSerializer.Deserialize<CharityOrg>(streamContent, jsonSerializerSettings);
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
