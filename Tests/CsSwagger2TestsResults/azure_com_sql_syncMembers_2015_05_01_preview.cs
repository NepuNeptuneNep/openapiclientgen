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
	/// Properties of the database full schema.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncFullSchemaProperties
	{
		
		/// <summary>
		/// Last update time of the database schema.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastUpdateTime")]
		public System.Nullable<System.DateTimeOffset> LastUpdateTime { get; set; }
		
		/// <summary>
		/// List of tables in the database full schema.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tables")]
		public SyncFullSchemaTable[] Tables { get; set; }
	}
	
	/// <summary>
	/// Properties of the table in the database full schema.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncFullSchemaTable
	{
		
		/// <summary>
		/// List of columns in the table of database full schema.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="columns")]
		public SyncFullSchemaTableColumn[] Columns { get; set; }
		
		/// <summary>
		/// Error id of the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorId")]
		public string ErrorId { get; set; }
		
		/// <summary>
		/// If there is error in the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hasError")]
		public System.Nullable<System.Boolean> HasError { get; set; }
		
		/// <summary>
		/// Name of the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Quoted name of the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="quotedName")]
		public string QuotedName { get; set; }
	}
	
	/// <summary>
	/// Properties of the column in the table of database full schema.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncFullSchemaTableColumn
	{
		
		/// <summary>
		/// Data size of the column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataSize")]
		public string DataSize { get; set; }
		
		/// <summary>
		/// Data type of the column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// Error id of the column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorId")]
		public string ErrorId { get; set; }
		
		/// <summary>
		/// If there is error in the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hasError")]
		public System.Nullable<System.Boolean> HasError { get; set; }
		
		/// <summary>
		/// If it is the primary key of the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isPrimaryKey")]
		public System.Nullable<System.Boolean> IsPrimaryKey { get; set; }
		
		/// <summary>
		/// Name of the column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Quoted name of the column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="quotedName")]
		public string QuotedName { get; set; }
	}
	
	/// <summary>
	/// A list of sync schema properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncFullSchemaPropertiesListResult
	{
		
		/// <summary>
		/// Link to retrieve next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SyncFullSchemaProperties[] Value { get; set; }
	}
	
	/// <summary>
	/// An Azure SQL Database sync member.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncMember
	{
		
		/// <summary>
		/// Properties of a sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SyncMemberProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a sync member.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncMemberProperties
	{
		
		/// <summary>
		/// Database name of the member database in the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="databaseName")]
		public string DatabaseName { get; set; }
		
		/// <summary>
		/// Database type of the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="databaseType")]
		public System.Nullable<SyncMemberPropertiesDatabaseType> DatabaseType { get; set; }
		
		/// <summary>
		/// Password of the member database in the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="password")]
		public string Password { get; set; }
		
		/// <summary>
		/// Server name of the member database in the sync member
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serverName")]
		public string ServerName { get; set; }
		
		/// <summary>
		/// SQL Server database id of the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sqlServerDatabaseId")]
		public string SqlServerDatabaseId { get; set; }
		
		/// <summary>
		/// ARM resource id of the sync agent in the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="syncAgentId")]
		public string SyncAgentId { get; set; }
		
		/// <summary>
		/// Sync direction of the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="syncDirection")]
		public System.Nullable<SyncMemberPropertiesSyncDirection> SyncDirection { get; set; }
		
		/// <summary>
		/// Sync state of the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="syncState")]
		public System.Nullable<SyncMemberPropertiesSyncState> SyncState { get; set; }
		
		/// <summary>
		/// User name of the member database in the sync member.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userName")]
		public string UserName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SyncMemberPropertiesDatabaseType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AzureSqlDatabase = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SqlServerDatabase = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SyncMemberPropertiesSyncDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bidirectional = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneWayMemberToHub = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneWayHubToMember = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SyncMemberPropertiesSyncState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncInProgress = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncSucceeded = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncFailed = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisabledTombstoneCleanup = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisabledBackupRestore = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncSucceededWithWarnings = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncCancelling = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SyncCancelled = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UnProvisioned = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Provisioning = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Provisioned = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ProvisionFailed = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeProvisioning = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeProvisioned = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeProvisionFailed = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Reprovisioning = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReprovisionFailed = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UnReprovisioned = 17,
	}
	
	/// <summary>
	/// A list of Azure SQL Database sync members.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SyncMemberListResult
	{
		
		/// <summary>
		/// Link to retrieve next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SyncMember[] Value { get; set; }
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
		/// Lists sync members in the given sync group.
		/// SyncMembers_ListBySyncGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the list of sync members.</returns>
		public async Task<SyncMemberListResult> SyncMembers_ListBySyncGroupAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SyncMemberListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a sync member.
		/// SyncMembers_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the specified sync member.</returns>
		public async Task<SyncMember> SyncMembers_GetAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SyncMember>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a sync member.
		/// SyncMembers_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The requested sync member resource state.</param>
		/// <returns>Successfully updated the sync member.</returns>
		public async Task<SyncMember> SyncMembers_CreateOrUpdateAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version, SyncMember requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SyncMember>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a sync member.
		/// SyncMembers_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully deleted the sync member.</returns>
		public async Task SyncMembers_DeleteAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Updates an existing sync member.
		/// SyncMembers_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The requested sync member resource state.</param>
		/// <returns>Successfully updated the sync member.</returns>
		public async Task<SyncMember> SyncMembers_UpdateAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version, SyncMember requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SyncMember>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Refreshes a sync member database schema.
		/// SyncMembers_RefreshMemberSchema subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/refreshSchema
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully refreshed a sync member schema.</returns>
		public async Task SyncMembers_RefreshMemberSchemaAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"/refreshSchema&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Gets a sync member database schema.
		/// SyncMembers_ListMemberSchemas subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/schemas
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database on which the sync group is hosted.</param>
		/// <param name="syncGroupName">The name of the sync group on which the sync member is hosted.</param>
		/// <param name="syncMemberName">The name of the sync member.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully get a sync member schema.</returns>
		public async Task<SyncFullSchemaPropertiesListResult> SyncMembers_ListMemberSchemasAsync(string resourceGroupName, string serverName, string databaseName, string syncGroupName, string syncMemberName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/syncGroups/"+ (syncGroupName==null? "" : System.Uri.EscapeDataString(syncGroupName))+"/syncMembers/"+ (syncMemberName==null? "" : System.Uri.EscapeDataString(syncMemberName))+"/schemas&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SyncFullSchemaPropertiesListResult>(streamContent, jsonSerializerSettings);
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