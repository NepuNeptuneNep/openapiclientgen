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
	/// A database blob auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseBlobAuditingPolicy
	{
		
		/// <summary>
		/// Resource kind.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// Properties of a database blob auditing policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DatabaseBlobAuditingPolicyProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a database blob auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseBlobAuditingPolicyProperties
	{
		
		/// <summary>
		/// Specifies the Actions and Actions-Groups to audit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="auditActionsAndGroups")]
		public string[] AuditActionsAndGroups { get; set; }
		
		/// <summary>
		/// Specifies whether storageAccountAccessKey value is the storage’s secondary key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isStorageSecondaryKeyInUse")]
		public System.Nullable<System.Boolean> IsStorageSecondaryKeyInUse { get; set; }
		
		/// <summary>
		/// Specifies the number of days to keep in the audit logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retentionDays")]
		public System.Nullable<System.Int32> RetentionDays { get; set; }
		
		/// <summary>
		/// Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="state")]
		public DatabaseBlobAuditingPolicyPropertiesState State { get; set; }
		
		/// <summary>
		/// Specifies the identifier key of the auditing storage account. If state is Enabled, storageAccountAccessKey is required.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountAccessKey")]
		public string StorageAccountAccessKey { get; set; }
		
		/// <summary>
		/// Specifies the blob storage subscription Id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountSubscriptionId")]
		public string StorageAccountSubscriptionId { get; set; }
		
		/// <summary>
		/// Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageEndpoint")]
		public string StorageEndpoint { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DatabaseBlobAuditingPolicyPropertiesState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disabled = 1,
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
		/// Gets a database's blob auditing policy.
		/// DatabaseBlobAuditingPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the blob audit policy is defined.</param>
		/// <param name="blobAuditingPolicyName">The name of the blob auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the database blob auditing policy.</returns>
		public async Task<DatabaseBlobAuditingPolicy> DatabaseBlobAuditingPolicies_GetAsync(string resourceGroupName, string serverName, string databaseName, DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName blobAuditingPolicyName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/auditingSettings/"+blobAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseBlobAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a database's blob auditing policy.
		/// DatabaseBlobAuditingPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the blob auditing policy will be defined.</param>
		/// <param name="blobAuditingPolicyName">The name of the blob auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The database blob auditing policy.</param>
		/// <returns>Successfully set the database blob auditing policy.</returns>
		public async Task<DatabaseBlobAuditingPolicy> DatabaseBlobAuditingPolicies_CreateOrUpdateAsync(string resourceGroupName, string serverName, string databaseName, DatabaseBlobAuditingPolicies_CreateOrUpdateBlobAuditingPolicyName blobAuditingPolicyName, string subscriptionId, string api_version, DatabaseBlobAuditingPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/auditingSettings/"+blobAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseBlobAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum DatabaseBlobAuditingPolicies_CreateOrUpdateBlobAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
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