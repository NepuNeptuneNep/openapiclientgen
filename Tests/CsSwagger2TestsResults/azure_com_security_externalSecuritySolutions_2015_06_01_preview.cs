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
	/// Describes an Azure resource with kind
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AadConnectivityState
	{
		
		[System.Runtime.Serialization.DataMember(Name="connectivityState")]
		public System.Nullable<AadConnectivityStateConnectivityState> ConnectivityState { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AadConnectivityStateConnectivityState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Discovered = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotLicensed = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connected = 2,
	}
	
	/// <summary>
	/// Represents an AAD identity protection solution which sends logs to an OMS workspace.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AadExternalSecuritySolution
	{
		
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public AadSolutionProperties Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AadSolutionProperties
	{
	}
	
	/// <summary>
	/// Represents an ATA security solution which sends logs to an OMS workspace
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AtaExternalSecuritySolution
	{
		
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public AtaSolutionProperties Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AtaSolutionProperties
	{
		
		[System.Runtime.Serialization.DataMember(Name="lastEventReceived")]
		public string LastEventReceived { get; set; }
	}
	
	/// <summary>
	/// Represents a security solution which sends CEF logs to an OMS workspace
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CefExternalSecuritySolution
	{
		
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public CefSolutionProperties Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CefSolutionProperties
	{
		
		[System.Runtime.Serialization.DataMember(Name="agent")]
		public string Agent { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hostname")]
		public string Hostname { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastEventReceived")]
		public string LastEventReceived { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectedWorkspace
	{
		
		/// <summary>
		/// Azure resource ID of the connected OMS workspace
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	/// <summary>
	/// Represents a security solution external to Azure Security Center which sends information to an OMS workspace and whose data is displayed by Azure Security Center.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExternalSecuritySolution
	{
	}
	
	/// <summary>
	/// Describes an Azure resource with kind
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExternalSecuritySolutionKind
	{
		
		/// <summary>
		/// The kind of the external solution
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public System.Nullable<ExternalSecuritySolutionKindKind> Kind { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ExternalSecuritySolutionKindKind
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CEF = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ATA = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AAD = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExternalSecuritySolutionList
	{
		
		/// <summary>
		/// The URI to fetch the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ExternalSecuritySolution[] Value { get; set; }
	}
	
	/// <summary>
	/// The solution properties (correspond to the solution kind)
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExternalSecuritySolutionProperties
	{
		
		[System.Runtime.Serialization.DataMember(Name="deviceType")]
		public string DeviceType { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="deviceVendor")]
		public string DeviceVendor { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="workspace")]
		public ConnectedWorkspace Workspace { get; set; }
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
		/// Gets a list of external security solutions for the subscription.
		/// ExternalSecuritySolutions_List subscriptions/{subscriptionId}/providers/Microsoft.Security/externalSecuritySolutions
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <returns>OK</returns>
		public async Task<ExternalSecuritySolutionList> ExternalSecuritySolutions_ListAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Security/externalSecuritySolutions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExternalSecuritySolutionList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a list of external Security Solutions for the subscription and location.
		/// ExternalSecuritySolutions_ListByHomeRegion subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="ascLocation">The location where ASC stores the data of the subscription. can be retrieved from Get locations</param>
		/// <param name="api_version">API version for the operation</param>
		/// <returns>OK</returns>
		public async Task<ExternalSecuritySolutionList> ExternalSecuritySolutions_ListByHomeRegionAsync(string subscriptionId, string ascLocation, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Security/locations/"+ (ascLocation==null? "" : System.Uri.EscapeDataString(ascLocation))+"/ExternalSecuritySolutions&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExternalSecuritySolutionList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a specific external Security Solution.
		/// ExternalSecuritySolutions_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions/{externalSecuritySolutionsName}
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="ascLocation">The location where ASC stores the data of the subscription. can be retrieved from Get locations</param>
		/// <param name="externalSecuritySolutionsName">Name of an external security solution.</param>
		/// <param name="api_version">API version for the operation</param>
		/// <returns>OK</returns>
		public async Task<ExternalSecuritySolution> ExternalSecuritySolutions_GetAsync(string subscriptionId, string resourceGroupName, string ascLocation, string externalSecuritySolutionsName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/locations/"+ (ascLocation==null? "" : System.Uri.EscapeDataString(ascLocation))+"/ExternalSecuritySolutions/"+ (externalSecuritySolutionsName==null? "" : System.Uri.EscapeDataString(externalSecuritySolutionsName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExternalSecuritySolution>(streamContent, jsonSerializerSettings);
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