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
	/// An Azure activity log alert.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlert
	{
		
		/// <summary>
		/// A list of activity log alert actions.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public ActivityLogAlertActionList Actions { get; set; }
		
		/// <summary>
		/// An Activity Log alert condition that is met when all its member conditions are met.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="condition")]
		public ActivityLogAlertAllOfCondition Condition { get; set; }
		
		/// <summary>
		/// A description of this activity log alert.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="scopes")]
		public string[] Scopes { get; set; }
	}
	
	/// <summary>
	/// A pointer to an Azure Action Group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertActionGroup
	{
		
		/// <summary>
		/// The resourceId of the action group. This cannot be null or empty.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="actionGroupId")]
		public string ActionGroupId { get; set; }
		
		/// <summary>
		/// the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhookProperties")]
		public object WebhookProperties { get; set; }
	}
	
	/// <summary>
	/// A list of activity log alert actions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertActionList
	{
		
		/// <summary>
		/// The list of activity log alerts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actionGroups")]
		public ActivityLogAlertActionGroup[] ActionGroups { get; set; }
	}
	
	/// <summary>
	/// An Activity Log alert condition that is met when all its member conditions are met.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertAllOfCondition
	{
		
		/// <summary>
		/// The list of activity log alert conditions.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="allOf")]
		public ActivityLogAlertLeafCondition[] AllOf { get; set; }
	}
	
	/// <summary>
	/// An Activity Log alert condition that is met by comparing an activity log field and value.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertLeafCondition
	{
		
		/// <summary>
		/// The field value will be compared to this value (case-insensitive) to determine if the condition is met.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="equals")]
		public string Equals { get; set; }
		
		/// <summary>
		/// The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="field")]
		public string Field { get; set; }
	}
	
	/// <summary>
	/// A list of activity log alerts.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertList
	{
		
		/// <summary>
		/// Provides the link to retrieve the next set of elements.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of activity log alerts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ActivityLogAlertResource[] Value { get; set; }
	}
	
	/// <summary>
	/// An activity log alert resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertResource : Resource
	{
		
		/// <summary>
		/// An Azure activity log alert.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ActivityLogAlert Properties { get; set; }
	}
	
	/// <summary>
	/// An Azure activity log alert for patch operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertPatch
	{
		
		/// <summary>
		/// Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
	}
	
	/// <summary>
	/// An activity log alert object for the body of patch operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ActivityLogAlertPatchBody
	{
		
		/// <summary>
		/// An Azure activity log alert for patch operations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ActivityLogAlertPatch Properties { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public object Tags { get; set; }
	}
	
	/// <summary>
	/// Describes the format of Error response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorResponse
	{
		
		/// <summary>
		/// Error code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Error message indicating why the operation failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// An azure resource object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Azure resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource location
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Azure resource name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public object Tags { get; set; }
		
		/// <summary>
		/// Azure resource type
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
		/// Get a list of all activity log alerts in a subscription.
		/// ActivityLogAlerts_ListBySubscriptionId subscriptions/{subscriptionId}/providers/microsoft.insights/activityLogAlerts
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<ActivityLogAlertList> ActivityLogAlerts_ListBySubscriptionIdAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/microsoft.insights/activityLogAlerts&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActivityLogAlertList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a list of all activity log alerts in a resource group.
		/// ActivityLogAlerts_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<ActivityLogAlertList> ActivityLogAlerts_ListByResourceGroupAsync(string subscriptionId, string resourceGroupName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/activityLogAlerts&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActivityLogAlertList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get an activity log alert.
		/// ActivityLogAlerts_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="activityLogAlertName">The name of the activity log alert.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<ActivityLogAlertResource> ActivityLogAlerts_GetAsync(string subscriptionId, string resourceGroupName, string activityLogAlertName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/activityLogAlerts/"+ (activityLogAlertName==null? "" : System.Uri.EscapeDataString(activityLogAlertName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActivityLogAlertResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a new activity log alert or update an existing one.
		/// ActivityLogAlerts_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="activityLogAlertName">The name of the activity log alert.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The activity log alert to create or use for the update.</param>
		/// <returns>An existing activity log alert was successfully updated.</returns>
		public async Task<ActivityLogAlertResource> ActivityLogAlerts_CreateOrUpdateAsync(string subscriptionId, string resourceGroupName, string activityLogAlertName, string api_version, ActivityLogAlertResource requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/activityLogAlerts/"+ (activityLogAlertName==null? "" : System.Uri.EscapeDataString(activityLogAlertName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActivityLogAlertResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete an activity log alert.
		/// ActivityLogAlerts_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="activityLogAlertName">The name of the activity log alert.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The activity log alert was successfully deleted.</returns>
		public async Task ActivityLogAlerts_DeleteAsync(string subscriptionId, string resourceGroupName, string activityLogAlertName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/activityLogAlerts/"+ (activityLogAlertName==null? "" : System.Uri.EscapeDataString(activityLogAlertName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Updates an existing ActivityLogAlertResource's tags. To update other fields use the CreateOrUpdate method.
		/// ActivityLogAlerts_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="activityLogAlertName">The name of the activity log alert.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">Parameters supplied to the operation.</param>
		/// <returns>An existing activity log alert was successfully updated.</returns>
		public async Task<ActivityLogAlertResource> ActivityLogAlerts_UpdateAsync(string subscriptionId, string resourceGroupName, string activityLogAlertName, string api_version, ActivityLogAlertPatchBody requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/activityLogAlerts/"+ (activityLogAlertName==null? "" : System.Uri.EscapeDataString(activityLogAlertName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ActivityLogAlertResource>(streamContent, jsonSerializerSettings);
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