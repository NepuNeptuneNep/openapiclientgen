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
	/// A database connection policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseConnectionPolicy
	{
		
		/// <summary>
		/// Resource kind.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// Resource location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Properties of a database connection policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DatabaseConnectionPolicyProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a database connection policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseConnectionPolicyProperties
	{
		
		/// <summary>
		/// The fully qualified host name of the auditing proxy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxyDnsName")]
		public string ProxyDnsName { get; set; }
		
		/// <summary>
		/// The port number of the auditing proxy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxyPort")]
		public string ProxyPort { get; set; }
		
		/// <summary>
		/// The state of proxy redirection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="redirectionState")]
		public string RedirectionState { get; set; }
		
		/// <summary>
		/// The state of security access.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="securityEnabledAccess")]
		public string SecurityEnabledAccess { get; set; }
		
		/// <summary>
		/// The connection policy state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
		
		/// <summary>
		/// Whether server default is enabled or disabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="useServerDefault")]
		public string UseServerDefault { get; set; }
		
		/// <summary>
		/// The visibility of the auditing proxy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="visibility")]
		public string Visibility { get; set; }
	}
	
	/// <summary>
	/// A database table auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseTableAuditingPolicy
	{
		
		/// <summary>
		/// Resource kind.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// Resource location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Properties of a database table auditing policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DatabaseTableAuditingPolicyProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Represents the response to a list database table auditing policies request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseTableAuditingPolicyListResult
	{
		
		/// <summary>
		/// The list of database table auditing policies.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public DatabaseTableAuditingPolicy[] Value { get; set; }
	}
	
	/// <summary>
	/// Properties of a database table auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DatabaseTableAuditingPolicyProperties : TableAuditingPolicyProperties
	{
		
		/// <summary>
		/// Whether server default is enabled or disabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="useServerDefault")]
		public string UseServerDefault { get; set; }
	}
	
	/// <summary>
	/// A server table auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ServerTableAuditingPolicy
	{
		
		/// <summary>
		/// Resource kind.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// Resource location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Properties of a server table auditing policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ServerTableAuditingPolicyProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Represents the response to a list server table auditing policies request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ServerTableAuditingPolicyListResult
	{
		
		/// <summary>
		/// The list of server table auditing policies.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ServerTableAuditingPolicy[] Value { get; set; }
	}
	
	/// <summary>
	/// Properties of a server table auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ServerTableAuditingPolicyProperties
	{
	}
	
	/// <summary>
	/// Properties of a table auditing policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TableAuditingPolicyProperties
	{
		
		/// <summary>
		/// The audit logs table name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="auditLogsTableName")]
		public string AuditLogsTableName { get; set; }
		
		/// <summary>
		/// The state of the policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="auditingState")]
		public string AuditingState { get; set; }
		
		/// <summary>
		/// Comma-separated list of event types to audit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="eventTypesToAudit")]
		public string EventTypesToAudit { get; set; }
		
		/// <summary>
		/// The full audit logs table name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullAuditLogsTableName")]
		public string FullAuditLogsTableName { get; set; }
		
		/// <summary>
		/// The number of days to keep in the audit logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retentionDays")]
		public string RetentionDays { get; set; }
		
		/// <summary>
		/// The key of the auditing storage account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountKey")]
		public string StorageAccountKey { get; set; }
		
		/// <summary>
		/// The table storage account name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountName")]
		public string StorageAccountName { get; set; }
		
		/// <summary>
		/// The table storage account resource group name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountResourceGroupName")]
		public string StorageAccountResourceGroupName { get; set; }
		
		/// <summary>
		/// The secondary key of the auditing storage account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountSecondaryKey")]
		public string StorageAccountSecondaryKey { get; set; }
		
		/// <summary>
		/// The table storage subscription Id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountSubscriptionId")]
		public string StorageAccountSubscriptionId { get; set; }
		
		/// <summary>
		/// The storage table endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageTableEndpoint")]
		public string StorageTableEndpoint { get; set; }
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
		/// Lists a server's table auditing policies. Table auditing is deprecated, use blob auditing instead.
		/// ServerTableAuditingPolicies_ListByServer subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the server table auditing policies.</returns>
		public async Task<ServerTableAuditingPolicyListResult> ServerTableAuditingPolicies_ListByServerAsync(string resourceGroupName, string serverName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/auditingPolicies&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ServerTableAuditingPolicyListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		/// ServerTableAuditingPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="tableAuditingPolicyName">The name of the table auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the server table auditing policy.</returns>
		public async Task<ServerTableAuditingPolicy> ServerTableAuditingPolicies_GetAsync(string resourceGroupName, string serverName, ServerTableAuditingPolicies_GetTableAuditingPolicyName tableAuditingPolicyName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/auditingPolicies/"+tableAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ServerTableAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		/// ServerTableAuditingPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="tableAuditingPolicyName">The name of the table auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The server table auditing policy.</param>
		/// <returns>Successfully set the server table auditing policy.</returns>
		public async Task<ServerTableAuditingPolicy> ServerTableAuditingPolicies_CreateOrUpdateAsync(string resourceGroupName, string serverName, ServerTableAuditingPolicies_CreateOrUpdateTableAuditingPolicyName tableAuditingPolicyName, string subscriptionId, string api_version, ServerTableAuditingPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/auditingPolicies/"+tableAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ServerTableAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists a database's table auditing policies. Table auditing is deprecated, use blob auditing instead.
		/// DatabaseTableAuditingPolicies_ListByDatabase subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the table audit policy is defined.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the database table auditing policies.</returns>
		public async Task<DatabaseTableAuditingPolicyListResult> DatabaseTableAuditingPolicies_ListByDatabaseAsync(string resourceGroupName, string serverName, string databaseName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/auditingPolicies&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseTableAuditingPolicyListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		/// DatabaseTableAuditingPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the table audit policy is defined.</param>
		/// <param name="tableAuditingPolicyName">The name of the table auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the database table auditing policy.</returns>
		public async Task<DatabaseTableAuditingPolicy> DatabaseTableAuditingPolicies_GetAsync(string resourceGroupName, string serverName, string databaseName, DatabaseTableAuditingPolicies_GetTableAuditingPolicyName tableAuditingPolicyName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/auditingPolicies/"+tableAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseTableAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		/// DatabaseTableAuditingPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the table auditing policy will be defined.</param>
		/// <param name="tableAuditingPolicyName">The name of the table auditing policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The database table auditing policy.</param>
		/// <returns>Successfully set the database table auditing policy.</returns>
		public async Task<DatabaseTableAuditingPolicy> DatabaseTableAuditingPolicies_CreateOrUpdateAsync(string resourceGroupName, string serverName, string databaseName, DatabaseTableAuditingPolicies_CreateOrUpdateTableAuditingPolicyName tableAuditingPolicyName, string subscriptionId, string api_version, DatabaseTableAuditingPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/auditingPolicies/"+tableAuditingPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseTableAuditingPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.
		/// DatabaseConnectionPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the connection policy is defined.</param>
		/// <param name="connectionPolicyName">The name of the connection policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the database connection policy.</returns>
		public async Task<DatabaseConnectionPolicy> DatabaseConnectionPolicies_GetAsync(string resourceGroupName, string serverName, string databaseName, DatabaseConnectionPolicies_GetConnectionPolicyName connectionPolicyName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/connectionPolicies/"+connectionPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseConnectionPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.
		/// DatabaseConnectionPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database for which the connection policy will be defined.</param>
		/// <param name="connectionPolicyName">The name of the connection policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The database connection policy.</param>
		/// <returns>Successfully set the database connection policy.</returns>
		public async Task<DatabaseConnectionPolicy> DatabaseConnectionPolicies_CreateOrUpdateAsync(string resourceGroupName, string serverName, string databaseName, DatabaseConnectionPolicies_CreateOrUpdateConnectionPolicyName connectionPolicyName, string subscriptionId, string api_version, DatabaseConnectionPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/connectionPolicies/"+connectionPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DatabaseConnectionPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum ServerTableAuditingPolicies_GetTableAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum ServerTableAuditingPolicies_CreateOrUpdateTableAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum DatabaseTableAuditingPolicies_GetTableAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum DatabaseTableAuditingPolicies_CreateOrUpdateTableAuditingPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum DatabaseConnectionPolicies_GetConnectionPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum DatabaseConnectionPolicies_CreateOrUpdateConnectionPolicyName
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
