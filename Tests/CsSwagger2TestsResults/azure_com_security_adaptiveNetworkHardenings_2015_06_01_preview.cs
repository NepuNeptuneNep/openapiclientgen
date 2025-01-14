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
	
	
	public class AdaptiveNetworkHardening
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdaptiveNetworkHardeningEnforceRequest
	{
		
		/// <summary>
		/// The Azure resource IDs of the effective network security groups that will be updated with the created security rules from the Adaptive Network Hardening rules
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="networkSecurityGroups")]
		public string[] NetworkSecurityGroups { get; set; }
		
		/// <summary>
		/// The rules to enforce
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="rules")]
		public Rule[] Rules { get; set; }
	}
	
	/// <summary>
	/// Describes remote addresses that is recommended to communicate with the Azure resource on some (Protocol, Port, Direction). All other remote addresses are recommended to be blocked
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Rule
	{
		
		/// <summary>
		/// Minimum: 0
		/// Maximum: 65535
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationPort")]
		[System.ComponentModel.DataAnnotations.Range(0, 65535)]
		public System.Nullable<System.Int32> DestinationPort { get; set; }
		
		/// <summary>
		/// The rule's direction
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="direction")]
		public System.Nullable<RuleDirection> Direction { get; set; }
		
		/// <summary>
		/// The remote IP addresses that should be able to communicate with the Azure resource on the rule's destination port and protocol
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ipAddresses")]
		public string[] IpAddresses { get; set; }
		
		/// <summary>
		/// The name of the rule
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The rule's transport protocols
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="protocols")]
		public string[] Protocols { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum RuleDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inbound = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Outbound = 1,
	}
	
	/// <summary>
	/// Adaptive Network Hardening resource properties
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdaptiveNetworkHardeningProperties
	{
		
		/// <summary>
		/// The Network Security Groups effective on the network interfaces of the protected resource
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="effectiveNetworkSecurityGroups")]
		public EffectiveNetworkSecurityGroups[] EffectiveNetworkSecurityGroups { get; set; }
		
		/// <summary>
		/// The security rules which are recommended to be effective on the VM
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rules")]
		public Rule[] Rules { get; set; }
		
		/// <summary>
		/// The UTC time on which the rules were calculated
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rulesCalculationTime")]
		public System.Nullable<System.DateTimeOffset> RulesCalculationTime { get; set; }
	}
	
	/// <summary>
	/// Describes the Network Security Groups effective on a network interface
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EffectiveNetworkSecurityGroups
	{
		
		/// <summary>
		/// The Azure resource ID of the network interface
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="networkInterface")]
		public string NetworkInterface { get; set; }
		
		/// <summary>
		/// The Network Security Groups effective on the network interface
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="networkSecurityGroups")]
		public string[] NetworkSecurityGroups { get; set; }
	}
	
	/// <summary>
	/// Response for ListAdaptiveNetworkHardenings API service call
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdaptiveNetworkHardeningsList
	{
		
		/// <summary>
		/// The URL to get the next set of results
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// A list of Adaptive Network Hardenings resources
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public AdaptiveNetworkHardening[] Value { get; set; }
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
		/// Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
		/// AdaptiveNetworkHardenings_ListByExtendedResource subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="resourceNamespace">The Namespace of the resource.</param>
		/// <param name="resourceType">The type of the resource.</param>
		/// <param name="resourceName">Name of the resource.</param>
		/// <param name="api_version">API version for the operation</param>
		/// <returns>OK</returns>
		public async Task<AdaptiveNetworkHardeningsList> AdaptiveNetworkHardenings_ListByExtendedResourceAsync(string subscriptionId, string resourceGroupName, string resourceNamespace, string resourceType, string resourceName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/"+ (resourceNamespace==null? "" : System.Uri.EscapeDataString(resourceNamespace))+"/"+ (resourceType==null? "" : System.Uri.EscapeDataString(resourceType))+"/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/providers/Microsoft.Security/adaptiveNetworkHardenings&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AdaptiveNetworkHardeningsList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a single Adaptive Network Hardening resource
		/// AdaptiveNetworkHardenings_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="resourceNamespace">The Namespace of the resource.</param>
		/// <param name="resourceType">The type of the resource.</param>
		/// <param name="resourceName">Name of the resource.</param>
		/// <param name="adaptiveNetworkHardeningResourceName">The name of the Adaptive Network Hardening resource.</param>
		/// <param name="api_version">API version for the operation</param>
		/// <returns>OK</returns>
		public async Task<AdaptiveNetworkHardening> AdaptiveNetworkHardenings_GetAsync(string subscriptionId, string resourceGroupName, string resourceNamespace, string resourceType, string resourceName, string adaptiveNetworkHardeningResourceName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/"+ (resourceNamespace==null? "" : System.Uri.EscapeDataString(resourceNamespace))+"/"+ (resourceType==null? "" : System.Uri.EscapeDataString(resourceType))+"/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/providers/Microsoft.Security/adaptiveNetworkHardenings/"+ (adaptiveNetworkHardeningResourceName==null? "" : System.Uri.EscapeDataString(adaptiveNetworkHardeningResourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AdaptiveNetworkHardening>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Enforces the given rules on the NSG(s) listed in the request
		/// AdaptiveNetworkHardenings_Enforce subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}/{adaptiveNetworkHardeningEnforceAction}
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="resourceNamespace">The Namespace of the resource.</param>
		/// <param name="resourceType">The type of the resource.</param>
		/// <param name="resourceName">Name of the resource.</param>
		/// <param name="adaptiveNetworkHardeningResourceName">The name of the Adaptive Network Hardening resource.</param>
		/// <param name="adaptiveNetworkHardeningEnforceAction">Enforces the given rules on the NSG(s) listed in the request</param>
		/// <param name="api_version">API version for the operation</param>
		/// <returns>OK.</returns>
		public async Task AdaptiveNetworkHardenings_EnforceAsync(string subscriptionId, string resourceGroupName, string resourceNamespace, string resourceType, string resourceName, string adaptiveNetworkHardeningResourceName, AdaptiveNetworkHardenings_EnforceAdaptiveNetworkHardeningEnforceAction adaptiveNetworkHardeningEnforceAction, string api_version, AdaptiveNetworkHardeningEnforceRequest requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/"+ (resourceNamespace==null? "" : System.Uri.EscapeDataString(resourceNamespace))+"/"+ (resourceType==null? "" : System.Uri.EscapeDataString(resourceType))+"/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/providers/Microsoft.Security/adaptiveNetworkHardenings/"+ (adaptiveNetworkHardeningResourceName==null? "" : System.Uri.EscapeDataString(adaptiveNetworkHardeningResourceName))+"/"+adaptiveNetworkHardeningEnforceAction+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
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
	
	public enum AdaptiveNetworkHardenings_EnforceAdaptiveNetworkHardeningEnforceAction
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		enforce = 0,
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
