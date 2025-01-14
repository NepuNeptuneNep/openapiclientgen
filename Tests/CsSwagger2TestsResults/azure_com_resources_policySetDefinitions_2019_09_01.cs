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
	/// An error response from a policy operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CloudError
	{
		
		/// <summary>
		/// The resource management error response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public object Error { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorResponse
	{
	}
	
	/// <summary>
	/// The policy definition group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PolicyDefinitionGroup
	{
		
		/// <summary>
		/// A resource ID of a resource that contains additional metadata about the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="additionalMetadataId")]
		public string AdditionalMetadataId { get; set; }
		
		/// <summary>
		/// The group's category.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		/// <summary>
		/// The group's description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The group's display name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// The name of the group.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// The policy definition reference.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PolicyDefinitionReference
	{
		
		/// <summary>
		/// The name of the groups that this policy definition reference belongs to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="groupNames")]
		public string[] GroupNames { get; set; }
		
		/// <summary>
		/// The parameter values for the policy rule. The keys are the parameter names.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public System.Collections.Generic.Dictionary<string, object> Parameters { get; set; }
		
		/// <summary>
		/// The ID of the policy definition or policy set definition.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="policyDefinitionId")]
		public string PolicyDefinitionId { get; set; }
		
		/// <summary>
		/// A unique id (within the policy set definition) for this policy definition reference.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policyDefinitionReferenceId")]
		public string PolicyDefinitionReferenceId { get; set; }
	}
	
	/// <summary>
	/// The policy set definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PolicySetDefinition
	{
		
		/// <summary>
		/// The ID of the policy set definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The name of the policy set definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The policy set definition properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public PolicySetDefinitionProperties Properties { get; set; }
		
		/// <summary>
		/// The type of the resource (Microsoft.Authorization/policySetDefinitions).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// List of policy set definitions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PolicySetDefinitionListResult
	{
		
		/// <summary>
		/// The URL to use for getting the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// An array of policy set definitions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public PolicySetDefinition[] Value { get; set; }
	}
	
	/// <summary>
	/// The policy set definition properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PolicySetDefinitionProperties
	{
		
		/// <summary>
		/// The policy set definition description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The display name of the policy set definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public string Metadata { get; set; }
		
		/// <summary>
		/// The parameter definitions for parameters used in the policy. The keys are the parameter names.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public System.Collections.Generic.Dictionary<string, object> Parameters { get; set; }
		
		/// <summary>
		/// The metadata describing groups of policy definition references within the policy set definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policyDefinitionGroups")]
		public PolicyDefinitionGroup[] PolicyDefinitionGroups { get; set; }
		
		/// <summary>
		/// An array of policy definition references.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="policyDefinitions")]
		public PolicyDefinitionReference[] PolicyDefinitions { get; set; }
		
		/// <summary>
		/// The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policyType")]
		public System.Nullable<PolicySetDefinitionPropertiesPolicyType> PolicyType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum PolicySetDefinitionPropertiesPolicyType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BuiltIn = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Custom = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Static = 3,
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
		/// Retrieves built-in policy set definitions.
		/// This operation retrieves a list of all the built-in policy set definitions.
		/// PolicySetDefinitions_ListBuiltIn providers/Microsoft.Authorization/policySetDefinitions
		/// </summary>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK - Returns an array of built in policy set definitions.</returns>
		public async Task<PolicySetDefinitionListResult> PolicySetDefinitions_ListBuiltInAsync(string api_version)
		{
			var requestUri = "providers/Microsoft.Authorization/policySetDefinitions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinitionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves a built in policy set definition.
		/// This operation retrieves the built-in policy set definition with the given name.
		/// PolicySetDefinitions_GetBuiltIn providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to get.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <returns>OK - Returns information about the built in policy set definition.</returns>
		public async Task<PolicySetDefinition> PolicySetDefinitions_GetBuiltInAsync(string policySetDefinitionName, string api_version)
		{
			var requestUri = "providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinition>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves all policy set definitions in management group.
		/// This operation retrieves a list of all the a policy set definition in the given management group.
		/// PolicySetDefinitions_ListByManagementGroup providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions
		/// </summary>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="managementGroupId">The ID of the management group.</param>
		/// <returns>OK - Returns an array of policy set definitions.</returns>
		public async Task<PolicySetDefinitionListResult> PolicySetDefinitions_ListByManagementGroupAsync(string api_version, string managementGroupId)
		{
			var requestUri = "providers/Microsoft.Management/managementgroups/"+ (managementGroupId==null? "" : System.Uri.EscapeDataString(managementGroupId))+"/providers/Microsoft.Authorization/policySetDefinitions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinitionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves a policy set definition.
		/// This operation retrieves the policy set definition in the given management group with the given name.
		/// PolicySetDefinitions_GetAtManagementGroup providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to get.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="managementGroupId">The ID of the management group.</param>
		/// <returns>OK - Returns information about the policy set definition.</returns>
		public async Task<PolicySetDefinition> PolicySetDefinitions_GetAtManagementGroupAsync(string policySetDefinitionName, string api_version, string managementGroupId)
		{
			var requestUri = "providers/Microsoft.Management/managementgroups/"+ (managementGroupId==null? "" : System.Uri.EscapeDataString(managementGroupId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinition>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a policy set definition.
		/// This operation creates or updates a policy set definition in the given management group with the given name.
		/// PolicySetDefinitions_CreateOrUpdateAtManagementGroup providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to create.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="managementGroupId">The ID of the management group.</param>
		/// <param name="requestBody">The policy set definition properties.</param>
		/// <returns>OK - Returns information about the policy set definition.</returns>
		public async Task<PolicySetDefinition> PolicySetDefinitions_CreateOrUpdateAtManagementGroupAsync(string policySetDefinitionName, string api_version, string managementGroupId, PolicySetDefinition requestBody)
		{
			var requestUri = "providers/Microsoft.Management/managementgroups/"+ (managementGroupId==null? "" : System.Uri.EscapeDataString(managementGroupId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinition>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a policy set definition.
		/// This operation deletes the policy set definition in the given management group with the given name.
		/// PolicySetDefinitions_DeleteAtManagementGroup providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to delete.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="managementGroupId">The ID of the management group.</param>
		/// <returns>OK</returns>
		public async Task PolicySetDefinitions_DeleteAtManagementGroupAsync(string policySetDefinitionName, string api_version, string managementGroupId)
		{
			var requestUri = "providers/Microsoft.Management/managementgroups/"+ (managementGroupId==null? "" : System.Uri.EscapeDataString(managementGroupId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Retrieves the policy set definitions for a subscription.
		/// This operation retrieves a list of all the policy set definitions in the given subscription.
		/// PolicySetDefinitions_List subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions
		/// </summary>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="subscriptionId">The ID of the target subscription.</param>
		/// <returns>OK - Returns an array of policy set definitions.</returns>
		public async Task<PolicySetDefinitionListResult> PolicySetDefinitions_ListAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Authorization/policySetDefinitions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinitionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves a policy set definition.
		/// This operation retrieves the policy set definition in the given subscription with the given name.
		/// PolicySetDefinitions_Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to get.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="subscriptionId">The ID of the target subscription.</param>
		/// <returns>OK - Returns information about the policy set definition.</returns>
		public async Task<PolicySetDefinition> PolicySetDefinitions_GetAsync(string policySetDefinitionName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinition>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a policy set definition.
		/// This operation creates or updates a policy set definition in the given subscription with the given name.
		/// PolicySetDefinitions_CreateOrUpdate subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to create.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="subscriptionId">The ID of the target subscription.</param>
		/// <param name="requestBody">The policy set definition properties.</param>
		/// <returns>OK - Returns information about the policy set definition.</returns>
		public async Task<PolicySetDefinition> PolicySetDefinitions_CreateOrUpdateAsync(string policySetDefinitionName, string api_version, string subscriptionId, PolicySetDefinition requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PolicySetDefinition>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a policy set definition.
		/// This operation deletes the policy set definition in the given subscription with the given name.
		/// PolicySetDefinitions_Delete subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		/// </summary>
		/// <param name="policySetDefinitionName">The name of the policy set definition to delete.</param>
		/// <param name="api_version">The API version to use for the operation.</param>
		/// <param name="subscriptionId">The ID of the target subscription.</param>
		/// <returns>OK</returns>
		public async Task PolicySetDefinitions_DeleteAsync(string policySetDefinitionName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Authorization/policySetDefinitions/"+ (policySetDefinitionName==null? "" : System.Uri.EscapeDataString(policySetDefinitionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
