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
	/// Definition of the source control sync job.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJob
	{
		
		/// <summary>
		/// Resource id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Definition of source control sync job properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SourceControlSyncJobProperties Properties { get; set; }
		
		/// <summary>
		/// Resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Definition of the source control sync job.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobById
	{
		
		/// <summary>
		/// The id of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Definition of source control sync job properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SourceControlSyncJobByIdProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Definition of source control sync job properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobByIdProperties
	{
		
		/// <summary>
		/// The creation time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// The end time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		/// <summary>
		/// The exceptions that occurred while running the sync job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="exception")]
		public string Exception { get; set; }
		
		/// <summary>
		/// The provisioning state of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<SourceControlSyncJobByIdPropertiesProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// The source control sync job id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceControlSyncJobId")]
		public string SourceControlSyncJobId { get; set; }
		
		/// <summary>
		/// The start time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// The sync type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="syncType")]
		public System.Nullable<SourceControlSyncJobByIdPropertiesSyncType> SyncType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SourceControlSyncJobByIdPropertiesProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Running = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SourceControlSyncJobByIdPropertiesSyncType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PartialSync = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FullSync = 1,
	}
	
	/// <summary>
	/// The parameters supplied to the create source control sync job operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobCreateParameters
	{
		
		/// <summary>
		/// Definition of create source control sync job properties.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SourceControlSyncJobCreateProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Definition of create source control sync job properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobCreateProperties
	{
		
		/// <summary>
		/// The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
		/// Required
		/// Min length: 0
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="commitId")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		public string CommitId { get; set; }
	}
	
	/// <summary>
	/// The response model for the list source control sync jobs operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobListResult
	{
		
		/// <summary>
		/// The next link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of source control sync jobs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SourceControlSyncJob[] Value { get; set; }
	}
	
	/// <summary>
	/// Definition of source control sync job properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SourceControlSyncJobProperties
	{
		
		/// <summary>
		/// The creation time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// The end time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		/// <summary>
		/// The provisioning state of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public SourceControlSyncJobByIdPropertiesProvisioningState ProvisioningState { get; set; }
		
		/// <summary>
		/// The source control sync job id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceControlSyncJobId")]
		public string SourceControlSyncJobId { get; set; }
		
		/// <summary>
		/// The start time of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// The sync type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="syncType")]
		public SourceControlSyncJobByIdPropertiesSyncType SyncType { get; set; }
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
		/// Retrieve a list of source control sync jobs.
		/// SourceControlSyncJob_ListByAutomationAccount subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="sourceControlName">The source control name.</param>
		/// <param name="filter">The filter to apply on the operation.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<SourceControlSyncJobListResult> SourceControlSyncJob_ListByAutomationAccountAsync(string resourceGroupName, string automationAccountName, string sourceControlName, string filter, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/sourceControls/"+ (sourceControlName==null? "" : System.Uri.EscapeDataString(sourceControlName))+"/sourceControlSyncJobs&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SourceControlSyncJobListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve the source control sync job identified by job id.
		/// SourceControlSyncJob_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="sourceControlName">The source control name.</param>
		/// <param name="sourceControlSyncJobId">The source control sync job id.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<SourceControlSyncJobById> SourceControlSyncJob_GetAsync(string resourceGroupName, string automationAccountName, string sourceControlName, string sourceControlSyncJobId, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/sourceControls/"+ (sourceControlName==null? "" : System.Uri.EscapeDataString(sourceControlName))+"/sourceControlSyncJobs/"+ (sourceControlSyncJobId==null? "" : System.Uri.EscapeDataString(sourceControlSyncJobId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SourceControlSyncJobById>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates the sync job for a source control.
		/// SourceControlSyncJob_Create subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="sourceControlName">The source control name.</param>
		/// <param name="sourceControlSyncJobId">The source control sync job id.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The parameters supplied to the create source control sync job operation.</param>
		public async Task SourceControlSyncJob_CreateAsync(string resourceGroupName, string automationAccountName, string sourceControlName, string sourceControlSyncJobId, string subscriptionId, string api_version, SourceControlSyncJobCreateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/sourceControls/"+ (sourceControlName==null? "" : System.Uri.EscapeDataString(sourceControlName))+"/sourceControlSyncJobs/"+ (sourceControlSyncJobId==null? "" : System.Uri.EscapeDataString(sourceControlSyncJobId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
