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
	/// Contains the localized display information for this particular operation / action.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Display
	{
		
		/// <summary>
		/// The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The localized friendly name for the operation, as it should be shown to the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operation")]
		public string Operation { get; set; }
		
		/// <summary>
		/// The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provider")]
		public string Provider { get; set; }
		
		/// <summary>
		/// The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource")]
		public string Resource { get; set; }
	}
	
	/// <summary>
	/// The error response for request which failed.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorResponse
	{
		
		/// <summary>
		/// The error description code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// The error details information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public string[] Details { get; set; }
		
		/// <summary>
		/// The error description message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// The error target description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
	}
	
	/// <summary>
	/// Describes the supported REST operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Operation
	{
		
		/// <summary>
		/// Contains the localized display information for this particular operation / action.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display")]
		public Display Display { get; set; }
		
		/// <summary>
		/// The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Pageable list of supported operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OperationList
	{
		
		/// <summary>
		/// List of operations
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Operation[] Value { get; set; }
	}
	
	/// <summary>
	/// Base resource object.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource Location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Resource Name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource Type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
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
		/// Get the list of support rest operations.
		/// Operations_List providers/Microsoft.Storage.Admin/operations
		/// </summary>
		/// <param name="api_version">REST Api Version.</param>
		/// <returns>OK -- The list of operations has been returned.</returns>
		public async Task<OperationList> Operations_ListAsync(string api_version)
		{
			var requestUri = "providers/Microsoft.Storage.Admin/operations?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OperationList>(streamContent, jsonSerializerSettings);
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