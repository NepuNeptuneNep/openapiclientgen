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
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// Contains information about the progress or result of an async operation.
	/// </summary>
	public class Operation
	{
		
		/// <summary>
		/// The class to represent a collection of REST reference links.
		/// </summary>
		public ReferenceLinks _links { get; set; }
		
		/// <summary>
		/// Detailed messaged about the status of an operation.
		/// </summary>
		public string DetailedMessage { get; set; }
		
		/// <summary>
		/// Result message for an operation.
		/// </summary>
		public string ResultMessage { get; set; }
		
		public OperationResultReference ResultUrl { get; set; }
	}
	
	/// <summary>
	/// The class to represent a collection of REST reference links.
	/// </summary>
	public class ReferenceLinks
	{
		
		/// <summary>
		/// The readonly view of the links.  Because Reference links are readonly, we only want to expose them as read only.
		/// </summary>
		public System.Collections.Generic.Dictionary<string, object> Links { get; set; }
	}
	
	public class OperationResultReference
	{
		
		/// <summary>
		/// URL to the operation result.
		/// </summary>
		public string ResultUrl { get; set; }
	}
	
	/// <summary>
	/// Reference for an async operation.
	/// </summary>
	public class OperationReference
	{
		
		/// <summary>
		/// Unique identifier for the operation.
		/// </summary>
		public string Id { get; set; }
		
		/// <summary>
		/// Unique identifier for the plugin.
		/// </summary>
		public string PluginId { get; set; }
		
		/// <summary>
		/// The current status of the operation.
		/// </summary>
		public System.Nullable<OperationReferenceStatus> Status { get; set; }
		
		/// <summary>
		/// URL to get the full operation object.
		/// </summary>
		public string Url { get; set; }
	}
	
	public enum OperationReferenceStatus
	{
		
		notSet = 0,
		
		queued = 1,
		
		inProgress = 2,
		
		cancelled = 3,
		
		succeeded = 4,
		
		failed = 5,
	}
	
	public partial class MyClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MyClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Gets an operation from the the operationId using the given pluginId.
		/// 
		/// Some scenarios don’t require a pluginId. If a pluginId is not included in the call then just the operationId will be used to find an operation.
		/// Operations_Get {organization}/_apis/operations/{operationId}
		/// </summary>
		/// <param name="operationId">The ID for the operation.</param>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="pluginId">The ID for the plugin.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<Operation> Operations_GetAsync(string operationId, string organization, string pluginId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/operations/"+ (operationId==null? "" : System.Uri.EscapeDataString(operationId))+"&pluginId=" + (pluginId==null? "" : System.Uri.EscapeDataString(pluginId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Operation>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets an operation from the the operationId using the given pluginId.
		/// 
		/// Some scenarios don’t require a pluginId. If a pluginId is not included in the call then just the operationId will be used to find an operation.
		/// Operations_Get {organization}/_apis/operations/{operationId}
		/// </summary>
		/// <param name="operationId">The ID for the operation.</param>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="pluginId">The ID for the plugin.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public Operation Operations_Get(string operationId, string organization, string pluginId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/operations/"+ (operationId==null? "" : System.Uri.EscapeDataString(operationId))+"&pluginId=" + (pluginId==null? "" : System.Uri.EscapeDataString(pluginId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.SendAsync(httpRequestMessage).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Operation>(jsonReader);
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
