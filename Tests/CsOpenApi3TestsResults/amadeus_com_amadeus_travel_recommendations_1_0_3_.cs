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
	/// A set of errors
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error_400
	{
		
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Error_400Errors[] Error_400Errors { get; set; }
	}
	
	public class Error_400Errors
	{
		
		/// <summary>
		/// A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		/// <summary>
		/// An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="source")]
		public Error_400ErrorsSource Source { get; set; }
		
		/// <summary>
		/// The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<System.Int32> Status { get; set; }
		
		/// <summary>
		/// An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	public class Error_400ErrorsSource
	{
		
		/// <summary>
		/// A sample input to guide the user when resolving this issue
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="example")]
		public string Example { get; set; }
		
		/// <summary>
		/// The key of the URI path or query parameter that caused the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameter")]
		public string Parameter { get; set; }
		
		/// <summary>
		/// A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pointer")]
		public string Pointer { get; set; }
	}
	
	/// <summary>
	/// A set of errors
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error_500
	{
		
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Error_500Errors[] Error_500Errors { get; set; }
	}
	
	public class Error_500Errors
	{
		
		/// <summary>
		/// A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		/// <summary>
		/// An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="source")]
		public Error_500ErrorsSource Source { get; set; }
		
		/// <summary>
		/// The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<System.Int32> Status { get; set; }
		
		/// <summary>
		/// An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	public class Error_500ErrorsSource
	{
		
		/// <summary>
		/// A sample input to guide the user when resolving this issue
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="example")]
		public string Example { get; set; }
		
		/// <summary>
		/// The key of the URI path or query parameter that caused the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameter")]
		public string Parameter { get; set; }
		
		/// <summary>
		/// A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pointer")]
		public string Pointer { get; set; }
	}
	
	/// <summary>
	/// Meta information about the returned object(s) in "data"
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Meta
	{
		
		/// <summary>
		/// Total number of object(s) retrieved
		/// Minimum: 0
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		[System.ComponentModel.DataAnnotations.Range(0, System.Int64.MaxValue)]
		public System.Nullable<System.Int64> Count { get; set; }
		
		/// <summary>
		/// Links related to the returned object(s)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="links")]
		public MetaLinks Links { get; set; }
	}
	
	public class MetaLinks
	{
		
		/// <summary>
		/// Link to the same page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="self")]
		public string Self { get; set; }
	}
	
	public class RecommendedLocation
	{
	}
	
	/// <summary>
	/// The Warning Definition
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Warning
	{
		
		/// <summary>
		/// A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public int Code { get; set; }
		
		/// <summary>
		/// An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		/// <summary>
		/// The Warning Source Definition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public WarningSource Source { get; set; }
		
		/// <summary>
		/// An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	public class WarningSource
	{
		
		/// <summary>
		/// A sample input to guide the user when resolving this issu
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="example")]
		public string Example { get; set; }
		
		/// <summary>
		/// The key of the URI path or query parameter that caused the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameter")]
		public string Parameter { get; set; }
		
		/// <summary>
		/// A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pointer")]
		public string Pointer { get; set; }
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
		/// GET recommended destinations
		/// GetRecommendedLocation reference-data/recommended-locations
		/// </summary>
		/// <param name="cityCodes">City used by the algorythm to recommend new destination. Several cities can be specified using comma.
		///
		///City codes follow [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx)</param>
		/// <param name="travelerCountryCode">Origin country of the traveler following [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)
		/// Min length: 2
		/// Max length: 2
		// </param>
		/// <param name="destinationCountryCodes">List of country the traveler want to visit, separated with comma.
		///
		///Country codes follow [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)</param>
		/// <returns>Successful reply</returns>
		public async Task GetRecommendedLocationAsync(string cityCodes, string travelerCountryCode, string destinationCountryCodes, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reference-data/recommended-locations?cityCodes=" + (cityCodes==null? "" : System.Uri.EscapeDataString(cityCodes))+"&travelerCountryCode=" + (travelerCountryCode==null? "" : System.Uri.EscapeDataString(travelerCountryCode))+"&destinationCountryCodes=" + (destinationCountryCodes==null? "" : System.Uri.EscapeDataString(destinationCountryCodes));
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