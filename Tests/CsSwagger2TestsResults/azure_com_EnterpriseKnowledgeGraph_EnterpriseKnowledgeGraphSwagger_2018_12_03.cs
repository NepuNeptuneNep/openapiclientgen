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
	/// EnterpriseKnowledgeGraph resource definition
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EnterpriseKnowledgeGraph : Resource
	{
		
		/// <summary>
		/// The parameters to provide for the EnterpriseKnowledgeGraph.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public EnterpriseKnowledgeGraphProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The parameters to provide for the EnterpriseKnowledgeGraph.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EnterpriseKnowledgeGraphProperties
	{
		
		/// <summary>
		/// The description of the EnterpriseKnowledgeGraph
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Specifies the metadata  of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public string Metadata { get; set; }
		
		/// <summary>
		/// The state of EnterpriseKnowledgeGraph provisioning
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<EnterpriseKnowledgeGraphPropertiesProvisioningState> ProvisioningState { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum EnterpriseKnowledgeGraphPropertiesProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Creating = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Succeeded = 3,
	}
	
	/// <summary>
	/// The list of  EnterpriseKnowledgeGraph service operation response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EnterpriseKnowledgeGraphResponseList
	{
		
		/// <summary>
		/// The link used to get the next page of EnterpriseKnowledgeGraph service resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Gets the list of EnterpriseKnowledgeGraph service results and their properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public EnterpriseKnowledgeGraph[] Value { get; set; }
	}
	
	/// <summary>
	/// EnterpriseKnowledgeGraph Service error object.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Error
	{
		
		/// <summary>
		/// EnterpriseKnowledgeGraph Service error body.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public ErrorBody Error1 { get; set; }
	}
	
	/// <summary>
	/// EnterpriseKnowledgeGraph Service error body.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorBody
	{
		
		/// <summary>
		/// error code
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// error message
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The operation supported by EnterpriseKnowledgeGraph Service Management.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OperationDisplayInfo
	{
		
		/// <summary>
		/// The description of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The action that users can perform, based on their permission level.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operation")]
		public string Operation { get; set; }
		
		/// <summary>
		/// Service provider: Microsoft EnterpriseKnowledgeGraph Service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provider")]
		public string Provider { get; set; }
		
		/// <summary>
		/// Resource on which the operation is performed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource")]
		public string Resource { get; set; }
	}
	
	/// <summary>
	/// The operations supported by EnterpriseKnowledgeGraph Service Management.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OperationEntity
	{
		
		/// <summary>
		/// The operation supported by EnterpriseKnowledgeGraph Service Management.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display")]
		public OperationDisplayInfo Display { get; set; }
		
		/// <summary>
		/// Operation name: {provider}/{resource}/{operation}.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The origin of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="origin")]
		public string Origin { get; set; }
		
		/// <summary>
		/// Additional properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public string Properties { get; set; }
	}
	
	/// <summary>
	/// The list of EnterpriseKnowledgeGraph service operation response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OperationEntityListResult
	{
		
		/// <summary>
		/// The link used to get the next page of operations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of operations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public OperationEntity[] Value { get; set; }
	}
	
	/// <summary>
	/// Azure resource
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Specifies the resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Specifies the location of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Specifies the name of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The SKU of the EnterpriseKnowledgeGraph service account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sku")]
		public Sku Sku { get; set; }
		
		/// <summary>
		/// Contains resource tags defined as key/value pairs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
		
		/// <summary>
		/// Specifies the type of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// The SKU of the EnterpriseKnowledgeGraph service account.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Sku
	{
		
		/// <summary>
		/// The name of SKU.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public SkuName Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SkuName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		F0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S1 = 1,
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
		/// Lists all the available EnterpriseKnowledgeGraph services operations.
		/// Operations_List providers/Microsoft.EnterpriseKnowledgeGraph/operations
		/// </summary>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <returns>OK.</returns>
		public async Task<OperationEntityListResult> Operations_ListAsync(string api_version)
		{
			var requestUri = "providers/Microsoft.EnterpriseKnowledgeGraph/operations?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OperationEntityListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns all the resources of a particular type belonging to a subscription.
		/// EnterpriseKnowledgeGraph_List subscriptions/{subscriptionId}/providers/Microsoft.EnterpriseKnowledgeGraph/services
		/// </summary>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <returns>The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		///The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		///For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. </returns>
		public async Task<EnterpriseKnowledgeGraphResponseList> EnterpriseKnowledgeGraph_ListAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EnterpriseKnowledgeGraphResponseList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns all the resources of a particular type belonging to a resource group
		/// EnterpriseKnowledgeGraph_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services
		/// </summary>
		/// <param name="resourceGroupName">The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <returns>The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		///The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		///The nextLink should be implemented using following query parameters:
		///· skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		///· top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		///Implementation details:
		///· NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		///· Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		///Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.</returns>
		public async Task<EnterpriseKnowledgeGraphResponseList> EnterpriseKnowledgeGraph_ListByResourceGroupAsync(string resourceGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EnterpriseKnowledgeGraphResponseList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a EnterpriseKnowledgeGraph service specified by the parameters.
		/// EnterpriseKnowledgeGraph_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="resourceName">The name of the EnterpriseKnowledgeGraph resource.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <returns>The resource provider should return 200 (OK) to indicate that the operation completed successfully. </returns>
		public async Task<EnterpriseKnowledgeGraph> EnterpriseKnowledgeGraph_GetAsync(string resourceGroupName, string resourceName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EnterpriseKnowledgeGraph>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a EnterpriseKnowledgeGraph Service. EnterpriseKnowledgeGraph Service is a resource group wide resource type.
		/// EnterpriseKnowledgeGraph_Create subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="resourceName">The name of the EnterpriseKnowledgeGraph resource.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <param name="requestBody">The parameters to provide for the created EnterpriseKnowledgeGraph.</param>
		/// <returns>The resource provider should return 200 (OK) to indicate that the operation completed successfully. </returns>
		public async Task<EnterpriseKnowledgeGraph> EnterpriseKnowledgeGraph_CreateAsync(string resourceGroupName, string resourceName, string api_version, string subscriptionId, EnterpriseKnowledgeGraph requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EnterpriseKnowledgeGraph>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a EnterpriseKnowledgeGraph Service from the resource group.
		/// EnterpriseKnowledgeGraph_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="resourceName">The name of the EnterpriseKnowledgeGraph resource.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <returns>A 200 (OK) should be returned if the object exists and was deleted successfully;</returns>
		public async Task EnterpriseKnowledgeGraph_DeleteAsync(string resourceGroupName, string resourceName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Updates a EnterpriseKnowledgeGraph Service
		/// EnterpriseKnowledgeGraph_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="resourceName">The name of the EnterpriseKnowledgeGraph resource.
		/// Min length: 2
		/// Max length: 64
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request.</param>
		/// <param name="subscriptionId">Azure Subscription ID.</param>
		/// <param name="requestBody">The parameters to provide for the created EnterpriseKnowledgeGraph.</param>
		/// <returns>The resource provider should return 200 (OK) to indicate that the operation completed successfully. </returns>
		public async Task<EnterpriseKnowledgeGraph> EnterpriseKnowledgeGraph_UpdateAsync(string resourceGroupName, string resourceName, string api_version, string subscriptionId, EnterpriseKnowledgeGraph requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.EnterpriseKnowledgeGraph/services/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EnterpriseKnowledgeGraph>(streamContent, jsonSerializerSettings);
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
