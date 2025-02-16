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
	public class BehavioralEventHttpCompletionRequest
	{
		
		/// <summary>
		/// Email of visitor
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Internal name of the event-type to trigger
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="eventName")]
		public string EventName { get; set; }
		
		/// <summary>
		/// The object id that this event occurred on. Could be a contact id or a visitor id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="objectId")]
		public string ObjectId { get; set; }
		
		/// <summary>
		/// The time when this event occurred (if any). If this isn't set, the current time will be used
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="occurredAt")]
		public System.Nullable<System.DateTimeOffset> OccurredAt { get; set; }
		
		/// <summary>
		/// Map of properties for the event in the format property internal name - property value
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public System.Collections.Generic.Dictionary<string, string> Properties { get; set; }
		
		/// <summary>
		/// User token
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="utk")]
		public string Utk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error
	{
		
		/// <summary>
		/// The error category
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		/// <summary>
		/// Context about the error condition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="context")]
		public System.Collections.Generic.Dictionary<string, string[]> Context { get; set; }
		
		/// <summary>
		/// A unique identifier for the request. Include this value with any error reports or support tickets
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="correlationId")]
		public string CorrelationId { get; set; }
		
		/// <summary>
		/// further information about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public ErrorDetail[] Errors { get; set; }
		
		/// <summary>
		/// A map of link names to associated URIs containing documentation about the error or recommended remediation steps
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="links")]
		public System.Collections.Generic.Dictionary<string, string> Links { get; set; }
		
		/// <summary>
		/// A human readable message describing the error along with remediation steps where appropriate
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// A specific category that contains more specific detail about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subCategory")]
		public string SubCategory { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorDetail
	{
		
		/// <summary>
		/// The status code associated with the error detail
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Context about the error condition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="context")]
		public System.Collections.Generic.Dictionary<string, string[]> Context { get; set; }
		
		/// <summary>
		/// The name of the field or parameter in which the error was found.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="in")]
		public string In { get; set; }
		
		/// <summary>
		/// A human readable message describing the error along with remediation steps where appropriate
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// A specific category that contains more specific detail about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subCategory")]
		public string SubCategory { get; set; }
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
		/// Sends Custom Behavioral Event
		/// Endpoint to send an instance of a behavioral event
		/// Post_SlasheventsSlashv3Slashsend events/v3/send
		/// </summary>
		public async Task Post_SlasheventsSlashv3SlashsendAsync(BehavioralEventHttpCompletionRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "events/v3/send";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
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
