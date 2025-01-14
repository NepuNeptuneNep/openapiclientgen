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
	/// Microsoft.Resources operation
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Operation
	{
		
		/// <summary>
		/// The object that represents the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display")]
		public object Display { get; set; }
		
		/// <summary>
		/// Operation name: {provider}/{resource}/{operation}
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OperationListResult
	{
		
		/// <summary>
		/// URL to get the next set of operation list results if there are any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of Microsoft.Resources operations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Operation[] Value { get; set; }
	}
	
	/// <summary>
	/// The resource link.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceLink
	{
		
		/// <summary>
		/// The fully qualified ID of the resource link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The name of the resource link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The resource link properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ResourceLinkProperties Properties { get; set; }
		
		/// <summary>
		/// The resource link object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Resource link filter.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceLinkFilter
	{
		
		/// <summary>
		/// The ID of the target resource.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetId")]
		public string TargetId { get; set; }
	}
	
	/// <summary>
	/// The resource link properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceLinkProperties
	{
		
		/// <summary>
		/// Notes about the resource link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="notes")]
		public string Notes { get; set; }
		
		/// <summary>
		/// The fully qualified ID of the source resource in the link. 
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceId")]
		public string SourceId { get; set; }
		
		/// <summary>
		/// The fully qualified ID of the target resource in the link.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetId")]
		public string TargetId { get; set; }
	}
	
	/// <summary>
	/// List of resource links.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceLinkResult
	{
		
		/// <summary>
		/// The URL to use for getting the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// An array of resource links.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ResourceLink[] Value { get; set; }
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
		/// Lists all of the available Microsoft.Resources REST API operations.
		/// Operations_List providers/Microsoft.Resources/operations
		/// </summary>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK. The request has succeeded.</returns>
		public async Task<OperationListResult> Operations_ListAsync(string api_version)
		{
			var requestUri = "providers/Microsoft.Resources/operations?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OperationListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets all the linked resources for the subscription.
		/// ResourceLinks_ListAtSubscription subscriptions/{subscriptionId}/providers/Microsoft.Resources/links
		/// </summary>
		/// <param name="filter">The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value}</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="subscriptionId">The ID of the target subscription.</param>
		/// <returns>Returns an array of resource links for the subscription.</returns>
		public async Task<ResourceLinkResult> ResourceLinks_ListAtSubscriptionAsync(string filter, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Resources/links?$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceLinkResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a resource link with the specified ID.
		/// ResourceLinks_Get {linkId}
		/// </summary>
		/// <param name="linkId">The fully qualified Id of the resource link. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK - Returns information about the resource link.</returns>
		public async Task<ResourceLink> ResourceLinks_GetAsync(string linkId, string api_version)
		{
			var requestUri = ""+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceLink>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a resource link between the specified resources.
		/// ResourceLinks_CreateOrUpdate {linkId}
		/// </summary>
		/// <param name="linkId">The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="requestBody">Parameters for creating or updating a resource link.</param>
		/// <returns>OK - Returns information about the link.</returns>
		public async Task<ResourceLink> ResourceLinks_CreateOrUpdateAsync(string linkId, string api_version, ResourceLink requestBody)
		{
			var requestUri = ""+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceLink>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a resource link with the specified ID.
		/// ResourceLinks_Delete {linkId}
		/// </summary>
		/// <param name="linkId">The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK</returns>
		public async Task ResourceLinks_DeleteAsync(string linkId, string api_version)
		{
			var requestUri = ""+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// Gets a list of resource links at and below the specified source scope.
		/// ResourceLinks_ListAtSourceScope {scope}/providers/Microsoft.Resources/links
		/// </summary>
		/// <param name="scope">The fully qualified ID of the scope for getting the resource links. For example, to list resource links at and under a resource group, set the scope to /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.</param>
		/// <param name="filter">The filter to apply when getting resource links. To get links only at the specified scope (not below the scope), use Filter.atScope().</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK - Returns an array of links at the specified scope.</returns>
		public async Task<ResourceLinkResult> ResourceLinks_ListAtSourceScopeAsync(string scope, ResourceLinks_ListAtSourceScopeFilter filter, string api_version)
		{
			var requestUri = ""+ (scope==null? "" : System.Uri.EscapeDataString(scope))+"/providers/Microsoft.Resources/links&$filter=" + filter+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceLinkResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum ResourceLinks_ListAtSourceScopeFilter
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="atScope()")]
		atScope = 0,
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
