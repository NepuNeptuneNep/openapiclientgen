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
	/// This resource represents an SLB MUX (software load balancing multiplexer, which distributes the tenant and tenant customer network traffic).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SlbMuxInstance
	{
		
		/// <summary>
		/// Properties of a SLB MUX.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SlbMuxInstanceModel Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a SLB MUX.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SlbMuxInstanceModel
	{
		
		/// <summary>
		/// List of BGP peers.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bgpPeers")]
		public string[] BgpPeers { get; set; }
		
		/// <summary>
		/// Configuration state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="configurationState")]
		public string ConfigurationState { get; set; }
		
		/// <summary>
		/// Virtual server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="virtualServer")]
		public string VirtualServer { get; set; }
	}
	
	/// <summary>
	/// A pageable list of SLB MUX instances.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SlbMuxInstanceList
	{
		
		/// <summary>
		/// URI to the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of SLB MUX instances.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SlbMuxInstance[] Value { get; set; }
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
		/// Returns a list of all software load balancer instances at a location.
		/// SlbMuxInstances_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of the resource group.</param>
		/// <param name="location">Location of the resource.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <param name="filter">OData filter parameter.</param>
		/// <returns>OK</returns>
		public async Task<SlbMuxInstanceList> SlbMuxInstances_ListAsync(string subscriptionId, string resourceGroupName, string location, string api_version, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Fabric.Admin/fabricLocations/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/slbMuxInstances&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SlbMuxInstanceList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the requested software load balancer multiplexer instance.
		/// SlbMuxInstances_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances/{slbMuxInstance}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of the resource group.</param>
		/// <param name="location">Location of the resource.</param>
		/// <param name="slbMuxInstance">Name of a SLB MUX instance.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<SlbMuxInstance> SlbMuxInstances_GetAsync(string subscriptionId, string resourceGroupName, string location, string slbMuxInstance, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Fabric.Admin/fabricLocations/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/slbMuxInstances/"+ (slbMuxInstance==null? "" : System.Uri.EscapeDataString(slbMuxInstance))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SlbMuxInstance>(streamContent, jsonSerializerSettings);
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