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
	/// ARM resource.
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
		/// Resource name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// A restorable dropped managed database resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class RestorableDroppedManagedDatabase
	{
		
		/// <summary>
		/// The restorable dropped managed database's properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public RestorableDroppedManagedDatabaseProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The restorable dropped managed database's properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class RestorableDroppedManagedDatabaseProperties
	{
		
		/// <summary>
		/// The creation date of the database (ISO8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationDate")]
		public System.Nullable<System.DateTimeOffset> CreationDate { get; set; }
		
		/// <summary>
		/// The name of the database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="databaseName")]
		public string DatabaseName { get; set; }
		
		/// <summary>
		/// The deletion date of the database (ISO8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deletionDate")]
		public System.Nullable<System.DateTimeOffset> DeletionDate { get; set; }
		
		/// <summary>
		/// The earliest restore date of the database (ISO8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="earliestRestoreDate")]
		public System.Nullable<System.DateTimeOffset> EarliestRestoreDate { get; set; }
	}
	
	/// <summary>
	/// A list of restorable dropped managed databases.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class RestorableDroppedManagedDatabaseListResult
	{
		
		/// <summary>
		/// Link to retrieve next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public RestorableDroppedManagedDatabase[] Value { get; set; }
	}
	
	/// <summary>
	/// ARM tracked top level resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TrackedResource
	{
		
		/// <summary>
		/// Resource location.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Resource tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
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
		/// Gets a list of restorable dropped managed databases.
		/// RestorableDroppedManagedDatabases_ListByInstance subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the list of restorable dropped databases.</returns>
		public async Task<RestorableDroppedManagedDatabaseListResult> RestorableDroppedManagedDatabases_ListByInstanceAsync(string resourceGroupName, string managedInstanceName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"/restorableDroppedDatabases&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<RestorableDroppedManagedDatabaseListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a restorable dropped managed database.
		/// RestorableDroppedManagedDatabases_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the specified restorable dropped database.</returns>
		public async Task<RestorableDroppedManagedDatabase> RestorableDroppedManagedDatabases_GetAsync(string resourceGroupName, string managedInstanceName, string restorableDroppedDatabaseId, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"/restorableDroppedDatabases/"+ (restorableDroppedDatabaseId==null? "" : System.Uri.EscapeDataString(restorableDroppedDatabaseId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<RestorableDroppedManagedDatabase>(streamContent, jsonSerializerSettings);
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