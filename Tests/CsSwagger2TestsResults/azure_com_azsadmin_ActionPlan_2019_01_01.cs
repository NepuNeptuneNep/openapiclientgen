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
	/// Action Plan Properties
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActionPlanAdminProperties
	{
		
		/// <summary>
		/// Action plan instance identifier
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actionPlanInstanceId")]
		public string ActionPlanInstanceId { get; set; }
		
		/// <summary>
		/// Action plan uri
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actionPlanUri")]
		public string ActionPlanUri { get; set; }
		
		/// <summary>
		/// Blob container name storing the deployment data
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="blobContainerName")]
		public string BlobContainerName { get; set; }
		
		/// <summary>
		/// The deployment end time
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		/// <summary>
		/// Error information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public ActionPlanAdminPropertiesError Error { get; set; }
		
		/// <summary>
		/// Error information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public ActionPlanAdminPropertiesParameters Parameters { get; set; }
		
		/// <summary>
		/// The provisioning state
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
		
		/// <summary>
		/// The target resource group name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceGroupName")]
		public string ResourceGroupName { get; set; }
		
		/// <summary>
		/// The deployment start time
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// The target subscription identifier
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subscriptionId")]
		public string SubscriptionId { get; set; }
	}
	
	public class ActionPlanAdminPropertiesError
	{
		
		/// <summary>
		/// Error Code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="details")]
		public ExtendedErrorInfo Details { get; set; }
		
		/// <summary>
		/// Error Message
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	public class ActionPlanAdminPropertiesParameters
	{
		
		/// <summary>
		/// Parameters as JToken string
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	/// <summary>
	/// List of action plans
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActionPlanList
	{
		
		/// <summary>
		/// Continuation token
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of action plans.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ActionPlanResourceEntity[] Value { get; set; }
	}
	
	/// <summary>
	/// Action Plan Resource Entity
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActionPlanResourceEntity
	{
		
		/// <summary>
		/// Entity tag of the resource
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="eTag")]
		public string ETag { get; set; }
		
		/// <summary>
		/// Action Plan Properties
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ActionPlanAdminProperties Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExtendedErrorInfo
	{
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
		/// Gets the list of action plans
		/// ActionPlans_List subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<ActionPlanList> ActionPlans_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/actionPlans&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActionPlanList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the specified action plan
		/// ActionPlans_Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/{planId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="planId">Identifier of the action plan.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<ActionPlanResourceEntity> ActionPlans_GetAsync(string subscriptionId, string planId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/"+ (planId==null? "" : System.Uri.EscapeDataString(planId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActionPlanResourceEntity>(streamContent, jsonSerializerSettings);
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