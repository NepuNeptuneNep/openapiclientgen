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
	/// An Application Insights component pricing plan
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationInsightsComponentPricingPlan
	{
		
		/// <summary>
		/// An Application Insights component daily data volume cap
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public PricingPlanProperties Properties { get; set; }
	}
	
	/// <summary>
	/// An Application Insights component daily data volume cap
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PricingPlanProperties
	{
		
		/// <summary>
		/// Daily data volume cap in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cap")]
		public System.Nullable<System.Double> Cap { get; set; }
		
		/// <summary>
		/// Maximum daily data volume cap that the user can set for this component.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxHistoryCap")]
		public System.Nullable<System.Double> MaxHistoryCap { get; set; }
		
		/// <summary>
		/// Pricing Plan Type Name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="planType")]
		public string PlanType { get; set; }
		
		/// <summary>
		/// Daily data volume cap UTC reset hour.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resetHour")]
		public System.Nullable<System.Int32> ResetHour { get; set; }
		
		/// <summary>
		/// Do not send a notification email when the daily data volume cap is met.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stopSendNotificationWhenHitCap")]
		public System.Nullable<System.Boolean> StopSendNotificationWhenHitCap { get; set; }
		
		/// <summary>
		/// Reserved, not used for now.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stopSendNotificationWhenHitThreshold")]
		public System.Nullable<System.Boolean> StopSendNotificationWhenHitThreshold { get; set; }
		
		/// <summary>
		/// Reserved, not used for now.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="warningThreshold")]
		public System.Nullable<System.Int32> WarningThreshold { get; set; }
	}
	
	/// <summary>
	/// An Azure resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Azure resource Id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Azure resource name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Azure resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
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
		/// Returns the current pricing plan setting for an Application Insights component.
		/// ComponentCurrentPricingPlan_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="api_version">The API version to use for this operation.
		/// Min length: 1
		// </param>
		/// <param name="subscriptionId">The ID of the target subscription.
		/// Min length: 1
		// </param>
		/// <param name="resourceName">The name of the Application Insights component resource.</param>
		/// <returns>An Application Insights component pricing plan definition.</returns>
		public async Task<ApplicationInsightsComponentPricingPlan> ComponentCurrentPricingPlan_GetAsync(string resourceGroupName, string api_version, string subscriptionId, string resourceName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/components/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/pricingPlans/current&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ApplicationInsightsComponentPricingPlan>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Replace current pricing plan for an Application Insights component.
		/// ComponentCurrentPricingPlan_CreateAndUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="api_version">The API version to use for this operation.
		/// Min length: 1
		// </param>
		/// <param name="subscriptionId">The ID of the target subscription.
		/// Min length: 1
		// </param>
		/// <param name="resourceName">The name of the Application Insights component resource.</param>
		/// <param name="requestBody">Properties that need to be specified to update current pricing plan for an Application Insights component.</param>
		/// <returns>Successful request when updating billing features for an Application Insights component. The updated current billing features are returned.</returns>
		public async Task<ApplicationInsightsComponentPricingPlan> ComponentCurrentPricingPlan_CreateAndUpdateAsync(string resourceGroupName, string api_version, string subscriptionId, string resourceName, ApplicationInsightsComponentPricingPlan requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/components/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/pricingPlans/current&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ApplicationInsightsComponentPricingPlan>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update current pricing plan for an Application Insights component.
		/// ComponentCurrentPricingPlan_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="api_version">The API version to use for this operation.
		/// Min length: 1
		// </param>
		/// <param name="subscriptionId">The ID of the target subscription.
		/// Min length: 1
		// </param>
		/// <param name="resourceName">The name of the Application Insights component resource.</param>
		/// <param name="requestBody">Properties that need to be specified to update current pricing plan for an Application Insights component.</param>
		/// <returns>Successful request when updating billing features for an Application Insights component. The updated current billing features are returned.</returns>
		public async Task<ApplicationInsightsComponentPricingPlan> ComponentCurrentPricingPlan_UpdateAsync(string resourceGroupName, string api_version, string subscriptionId, string resourceName, ApplicationInsightsComponentPricingPlan requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/components/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"/pricingPlans/current&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ApplicationInsightsComponentPricingPlan>(streamContent, jsonSerializerSettings);
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