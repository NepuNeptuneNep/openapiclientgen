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
	/// Definition of hybrid runbook worker.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class HybridRunbookWorker
	{
		
		/// <summary>
		/// Gets or sets the assigned machine IP address.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ip")]
		public string Ip { get; set; }
		
		/// <summary>
		/// Last Heartbeat from the Worker
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastSeenDateTime")]
		public System.Nullable<System.DateTimeOffset> LastSeenDateTime { get; set; }
		
		/// <summary>
		/// Gets or sets the worker machine name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Gets or sets the registration time of the worker machine.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="registrationTime")]
		public System.Nullable<System.DateTimeOffset> RegistrationTime { get; set; }
	}
	
	/// <summary>
	/// Definition of hybrid runbook worker group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class HybridRunbookWorkerGroup
	{
		
		/// <summary>
		/// Definition of RunAs credential to use for hybrid worker.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="credential")]
		public RunAsCredentialAssociationProperty Credential { get; set; }
		
		/// <summary>
		/// Type of the HybridWorkerGroup.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="groupType")]
		public System.Nullable<HybridRunbookWorkerGroupGroupType> GroupType { get; set; }
		
		/// <summary>
		/// Gets or sets the list of hybrid runbook workers.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hybridRunbookWorkers")]
		public HybridRunbookWorker[] HybridRunbookWorkers { get; set; }
		
		/// <summary>
		/// Gets or sets the id of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Gets or sets the name of the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum HybridRunbookWorkerGroupGroupType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		User = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="System")]
		_System = 1,
	}
	
	/// <summary>
	/// Parameters supplied to the update operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class HybridRunbookWorkerGroupUpdateParameters
	{
		
		/// <summary>
		/// Definition of RunAs credential to use for hybrid worker.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="credential")]
		public RunAsCredentialAssociationProperty Credential { get; set; }
	}
	
	/// <summary>
	/// The response model for the list hybrid runbook worker groups.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class HybridRunbookWorkerGroupsListResult
	{
		
		/// <summary>
		/// Gets or sets the next link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Gets or sets a list of hybrid runbook worker groups.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public HybridRunbookWorkerGroup[] Value { get; set; }
	}
	
	/// <summary>
	/// Definition of RunAs credential to use for hybrid worker.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class RunAsCredentialAssociationProperty
	{
		
		/// <summary>
		/// Gets or sets the name of the credential.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
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
		/// Retrieve a list of hybrid runbook worker groups.
		/// HybridRunbookWorkerGroup_ListByAutomationAccount subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="filter">The filter to apply on the operation.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<HybridRunbookWorkerGroupsListResult> HybridRunbookWorkerGroup_ListByAutomationAccountAsync(string resourceGroupName, string automationAccountName, string filter, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/hybridRunbookWorkerGroups&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<HybridRunbookWorkerGroupsListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve a hybrid runbook worker group.
		/// HybridRunbookWorkerGroup_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="hybridRunbookWorkerGroupName">The hybrid runbook worker group name</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<HybridRunbookWorkerGroup> HybridRunbookWorkerGroup_GetAsync(string resourceGroupName, string automationAccountName, string hybridRunbookWorkerGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/hybridRunbookWorkerGroups/"+ (hybridRunbookWorkerGroupName==null? "" : System.Uri.EscapeDataString(hybridRunbookWorkerGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<HybridRunbookWorkerGroup>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete a hybrid runbook worker group.
		/// HybridRunbookWorkerGroup_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="hybridRunbookWorkerGroupName">The hybrid runbook worker group name</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task HybridRunbookWorkerGroup_DeleteAsync(string resourceGroupName, string automationAccountName, string hybridRunbookWorkerGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/hybridRunbookWorkerGroups/"+ (hybridRunbookWorkerGroupName==null? "" : System.Uri.EscapeDataString(hybridRunbookWorkerGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Update a hybrid runbook worker group.
		/// HybridRunbookWorkerGroup_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="hybridRunbookWorkerGroupName">The hybrid runbook worker group name</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The hybrid runbook worker group</param>
		/// <returns>OK</returns>
		public async Task<HybridRunbookWorkerGroup> HybridRunbookWorkerGroup_UpdateAsync(string resourceGroupName, string automationAccountName, string hybridRunbookWorkerGroupName, string subscriptionId, string api_version, HybridRunbookWorkerGroupUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/hybridRunbookWorkerGroups/"+ (hybridRunbookWorkerGroupName==null? "" : System.Uri.EscapeDataString(hybridRunbookWorkerGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<HybridRunbookWorkerGroup>(streamContent, jsonSerializerSettings);
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
