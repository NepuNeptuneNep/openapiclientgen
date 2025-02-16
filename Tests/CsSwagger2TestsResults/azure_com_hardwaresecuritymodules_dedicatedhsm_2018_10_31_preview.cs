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
	/// The API entity reference.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApiEntityReference
	{
		
		/// <summary>
		/// The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	/// <summary>
	/// Resource information with extended details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DedicatedHsm : Resource
	{
		
		/// <summary>
		/// Properties of the dedicated hsm
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DedicatedHsmProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The error exception.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DedicatedHsmError
	{
		
		/// <summary>
		/// The key vault server error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public Error Error { get; set; }
	}
	
	/// <summary>
	/// List of dedicated HSMs
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DedicatedHsmListResult
	{
		
		/// <summary>
		/// The URL to get the next set of dedicated hsms.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of dedicated HSMs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public DedicatedHsm[] Value { get; set; }
	}
	
	/// <summary>
	/// Patchable properties of the dedicated HSM
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DedicatedHsmPatchParameters
	{
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
	}
	
	/// <summary>
	/// Properties of the dedicated hsm
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DedicatedHsmProperties
	{
		
		[System.Runtime.Serialization.DataMember(Name="networkProfile")]
		public NetworkProfile NetworkProfile { get; set; }
		
		/// <summary>
		/// Provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<DedicatedHsmPropertiesProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// This field will be used when RP does not support Availability zones.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stampId")]
		public string StampId { get; set; }
		
		/// <summary>
		/// Resource Status Message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="statusMessage")]
		public string StatusMessage { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DedicatedHsmPropertiesProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Succeeded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Provisioning = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Allocating = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connecting = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CheckingQuota = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 6,
	}
	
	/// <summary>
	/// The key vault server error.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Error
	{
		
		/// <summary>
		/// The error code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// The key vault server error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="innererror")]
		public Error Innererror { get; set; }
		
		/// <summary>
		/// The error message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The network interface definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class NetworkInterface
	{
		
		/// <summary>
		/// The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Private Ip address of the interface
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="privateIpAddress")]
		public string PrivateIpAddress { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class NetworkProfile
	{
		
		/// <summary>
		/// Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="networkInterfaces")]
		public NetworkInterface[] NetworkInterfaces { get; set; }
		
		/// <summary>
		/// The API entity reference.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subnet")]
		public ApiEntityReference Subnet { get; set; }
	}
	
	/// <summary>
	/// Dedicated HSM resource
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// The Azure Resource Manager resource ID for the dedicated HSM.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The supported Azure location where the dedicated HSM should be created.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// The name of the dedicated HSM.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sku")]
		public Sku Sku { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
		
		/// <summary>
		/// The resource type of the dedicated HSM.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		/// <summary>
		/// The Dedicated Hsm zones.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="zones")]
		public string[] Zones { get; set; }
	}
	
	/// <summary>
	/// List of dedicated HSM resources.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceListResult
	{
		
		/// <summary>
		/// The URL to get the next set of dedicated HSM resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of dedicated HSM resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Resource[] Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Sku
	{
		
		/// <summary>
		/// SKU of the dedicated HSM
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public System.Nullable<SkuName> Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SkuName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SafeNet Luna Network HSM A790")]
		SafeNet_Luna_Network_HSM_A790 = 0,
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
		/// The List operation gets information about the dedicated HSMs associated with the subscription.
		/// DedicatedHsm_ListBySubscription subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs
		/// </summary>
		/// <param name="top">Maximum number of results to return.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Get information about all dedicated HSMs in the specified subscription.</returns>
		public async Task<DedicatedHsmListResult> DedicatedHsm_ListBySubscriptionAsync(int top, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs?$top="+top+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DedicatedHsmListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
		/// DedicatedHsm_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs
		/// </summary>
		/// <param name="resourceGroupName">The name of the Resource Group to which the dedicated HSM belongs.</param>
		/// <param name="top">Maximum number of results to return.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Get information about all dedicated HSMs in the specified resource group.</returns>
		public async Task<DedicatedHsmListResult> DedicatedHsm_ListByResourceGroupAsync(string resourceGroupName, int top, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs&$top="+top+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DedicatedHsmListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the specified Azure dedicated HSM.
		/// DedicatedHsm_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		/// </summary>
		/// <param name="resourceGroupName">The name of the Resource Group to which the dedicated hsm belongs.</param>
		/// <param name="name">The name of the dedicated HSM.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Retrieved dedicated HSM</returns>
		public async Task<DedicatedHsm> DedicatedHsm_GetAsync(string resourceGroupName, string name, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DedicatedHsm>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create or Update a dedicated HSM in the specified subscription.
		/// DedicatedHsm_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		/// </summary>
		/// <param name="resourceGroupName">The name of the Resource Group to which the resource belongs.</param>
		/// <param name="name">Name of the dedicated Hsm</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters to create or update the dedicated hsm</param>
		/// <returns>Created dedicated HSM</returns>
		public async Task<DedicatedHsm> DedicatedHsm_CreateOrUpdateAsync(string resourceGroupName, string name, string api_version, string subscriptionId, DedicatedHsm requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DedicatedHsm>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified Azure Dedicated HSM.
		/// DedicatedHsm_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		/// </summary>
		/// <param name="resourceGroupName">The name of the Resource Group to which the dedicated HSM belongs.</param>
		/// <param name="name">The name of the dedicated HSM to delete</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>OK Response.</returns>
		public async Task DedicatedHsm_DeleteAsync(string resourceGroupName, string name, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Update a dedicated HSM in the specified subscription.
		/// DedicatedHsm_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		/// </summary>
		/// <param name="resourceGroupName">The name of the Resource Group to which the server belongs.</param>
		/// <param name="name">Name of the dedicated HSM</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters to patch the dedicated HSM</param>
		/// <returns>Patched dedicated HSM</returns>
		public async Task<DedicatedHsm> DedicatedHsm_UpdateAsync(string resourceGroupName, string name, string api_version, string subscriptionId, DedicatedHsmPatchParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DedicatedHsm>(streamContent, jsonSerializerSettings);
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
