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
	
	
	public class ReplicationLink
	{
	}
	
	/// <summary>
	/// Represents the response to a List database replication link request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ReplicationLinkListResult
	{
		
		/// <summary>
		/// The list of database replication links housed in the database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ReplicationLink[] Value { get; set; }
	}
	
	/// <summary>
	/// Represents the properties of a database replication link.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ReplicationLinkProperties
	{
		
		/// <summary>
		/// Legacy value indicating whether termination is allowed.  Currently always returns true.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isTerminationAllowed")]
		public System.Nullable<System.Boolean> IsTerminationAllowed { get; set; }
		
		/// <summary>
		/// The name of the partner database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="partnerDatabase")]
		public string PartnerDatabase { get; set; }
		
		/// <summary>
		/// The Azure Region of the partner database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="partnerLocation")]
		public string PartnerLocation { get; set; }
		
		/// <summary>
		/// The role of the partner database in the replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="partnerRole")]
		public System.Nullable<ReplicationLinkPropertiesPartnerRole> PartnerRole { get; set; }
		
		/// <summary>
		/// The name of the server hosting the partner database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="partnerServer")]
		public string PartnerServer { get; set; }
		
		/// <summary>
		/// The percentage of seeding complete for the replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="percentComplete")]
		public System.Nullable<System.Int32> PercentComplete { get; set; }
		
		/// <summary>
		/// Replication mode of this replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="replicationMode")]
		public string ReplicationMode { get; set; }
		
		/// <summary>
		/// The replication state for the replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="replicationState")]
		public System.Nullable<ReplicationLinkPropertiesReplicationState> ReplicationState { get; set; }
		
		/// <summary>
		/// The role of the database in the replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="role")]
		public ReplicationLinkPropertiesPartnerRole Role { get; set; }
		
		/// <summary>
		/// The start time for the replication link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ReplicationLinkPropertiesPartnerRole
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Primary = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Secondary = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NonReadableSecondary = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Source = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Copy = 4,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ReplicationLinkPropertiesReplicationState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PENDING = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SEEDING = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CATCH_UP = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUSPENDED = 3,
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
		/// Lists a database's replication links.
		/// ReplicationLinks_ListByDatabase subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database to retrieve links for.</param>
		/// <returns>OK</returns>
		public async Task<ReplicationLinkListResult> ReplicationLinks_ListByDatabaseAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/replicationLinks?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ReplicationLinkListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a database replication link.
		/// ReplicationLinks_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database to get the link for.</param>
		/// <param name="linkId">The replication link ID to be retrieved.</param>
		/// <returns>OK</returns>
		public async Task<ReplicationLink> ReplicationLinks_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, string linkId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/replicationLinks/"+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ReplicationLink>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a database replication link. Cannot be done during failover.
		/// ReplicationLinks_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database that has the replication link to be dropped.</param>
		/// <param name="linkId">The ID of the replication link to be deleted.</param>
		/// <returns>OK</returns>
		public async Task ReplicationLinks_DeleteAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, string linkId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/replicationLinks/"+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Sets which replica database is primary by failing over from the current primary replica database.
		/// ReplicationLinks_Failover subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/failover
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database that has the replication link to be failed over.</param>
		/// <param name="linkId">The ID of the replication link to be failed over.</param>
		public async Task ReplicationLinks_FailoverAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, string linkId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/replicationLinks/"+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"/failover?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss.
		/// ReplicationLinks_FailoverAllowDataLoss subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/forceFailoverAllowDataLoss
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database that has the replication link to be failed over.</param>
		/// <param name="linkId">The ID of the replication link to be failed over.</param>
		public async Task ReplicationLinks_FailoverAllowDataLossAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, string linkId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/replicationLinks/"+ (linkId==null? "" : System.Uri.EscapeDataString(linkId))+"/forceFailoverAllowDataLoss?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
