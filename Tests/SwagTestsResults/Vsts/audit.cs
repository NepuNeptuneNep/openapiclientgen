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
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	public class AuditActionInfo
	{
		
		/// <summary>
		/// The action id for the event, i.e Git.CreateRepo, Project.RenameProject
		/// </summary>
		public string ActionId { get; set; }
		
		/// <summary>
		/// Area of Azure DevOps the action occurred
		/// </summary>
		public string Area { get; set; }
		
		/// <summary>
		/// Type of action executed
		/// </summary>
		public System.Nullable<AuditActionInfoCategory> Category { get; set; }
	}
	
	public enum AuditActionInfoCategory
	{
		
		unknown = 0,
		
		modify = 1,
		
		remove = 2,
		
		create = 3,
		
		access = 4,
		
		execute = 5,
	}
	
	public class AuditLogEntry
	{
		
		/// <summary>
		/// The action if for the event, i.e Git.CreateRepo, Project.RenameProject
		/// </summary>
		public string ActionId { get; set; }
		
		/// <summary>
		/// ActivityId
		/// </summary>
		public string ActivityId { get; set; }
		
		/// <summary>
		/// The Actor's CUID
		/// </summary>
		public string ActorCUID { get; set; }
		
		/// <summary>
		/// The Actor's User Id
		/// </summary>
		public string ActorUserId { get; set; }
		
		/// <summary>
		/// Type of authentication used by the author
		/// </summary>
		public string AuthenticationMechanism { get; set; }
		
		/// <summary>
		/// This allows us to group things together, like one user action that caused a cascade of event entries (project creation).
		/// </summary>
		public string CorrelationId { get; set; }
		
		/// <summary>
		/// External data such as CUIDs, item names, etc.
		/// </summary>
		public System.Collections.Generic.Dictionary<string, object> Data { get; set; }
		
		/// <summary>
		/// EventId, should be unique
		/// </summary>
		public string Id { get; set; }
		
		/// <summary>
		/// IP Address where the event was originated
		/// </summary>
		public string IpAddress { get; set; }
		
		/// <summary>
		/// When specified, the id of the project this event is associated to
		/// </summary>
		public string ProjectId { get; set; }
		
		/// <summary>
		/// The organization Id (Organization is the only scope currently supported)
		/// </summary>
		public string ScopeId { get; set; }
		
		/// <summary>
		/// The type of the scope (Organization is only scope currently supported)
		/// </summary>
		public System.Nullable<AuditLogEntryScopeType> ScopeType { get; set; }
		
		/// <summary>
		/// The time when the event occurred in UTC
		/// </summary>
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
		
		/// <summary>
		/// The user agent from the request
		/// </summary>
		public string UserAgent { get; set; }
	}
	
	public enum AuditLogEntryScopeType
	{
		
		unknown = 0,
		
		deployment = 1,
		
		enterprise = 2,
		
		organization = 3,
		
		project = 4,
	}
	
	/// <summary>
	/// The object returned when the audit log is queried. It contains the log and the information needed to query more audit entries.
	/// </summary>
	public class AuditLogQueryResult
	{
		
		/// <summary>
		/// The continuation token to pass to get the next set of results
		/// </summary>
		public string ContinuationToken { get; set; }
		
		/// <summary>
		/// The list of audit log entries
		/// </summary>
		public DecoratedAuditLogEntry[] DecoratedAuditLogEntries { get; set; }
		
		/// <summary>
		/// True when there are more matching results to be fetched, false otherwise.
		/// </summary>
		public System.Nullable<System.Boolean> HasMore { get; set; }
	}
	
	public class DecoratedAuditLogEntry
	{
		
		/// <summary>
		/// The action id for the event, i.e Git.CreateRepo, Project.RenameProject
		/// </summary>
		public string ActionId { get; set; }
		
		/// <summary>
		/// ActivityId
		/// </summary>
		public string ActivityId { get; set; }
		
		/// <summary>
		/// The Actor's CUID
		/// </summary>
		public string ActorCUID { get; set; }
		
		/// <summary>
		/// DisplayName of the user who initiated the action
		/// </summary>
		public string ActorDisplayName { get; set; }
		
		/// <summary>
		/// URL of Actor's Profile image
		/// </summary>
		public string ActorImageUrl { get; set; }
		
		/// <summary>
		/// The Actor's User Id
		/// </summary>
		public string ActorUserId { get; set; }
		
		/// <summary>
		/// Area of Azure DevOps the action occurred
		/// </summary>
		public string Area { get; set; }
		
		/// <summary>
		/// Type of authentication used by the actor
		/// </summary>
		public string AuthenticationMechanism { get; set; }
		
		/// <summary>
		/// Type of action executed
		/// </summary>
		public System.Nullable<DecoratedAuditLogEntryCategory> Category { get; set; }
		
		/// <summary>
		/// DisplayName of the category
		/// </summary>
		public string CategoryDisplayName { get; set; }
		
		/// <summary>
		/// This allows related audit entries to be grouped together. Generally this occurs when a single action causes a cascade of audit entries. For example, project creation.
		/// </summary>
		public string CorrelationId { get; set; }
		
		/// <summary>
		/// External data such as CUIDs, item names, etc.
		/// </summary>
		public System.Collections.Generic.Dictionary<string, object> Data { get; set; }
		
		/// <summary>
		/// Decorated details
		/// </summary>
		public string Details { get; set; }
		
		/// <summary>
		/// EventId - Needs to be unique per service
		/// </summary>
		public string Id { get; set; }
		
		/// <summary>
		/// IP Address where the event was originated
		/// </summary>
		public string IpAddress { get; set; }
		
		/// <summary>
		/// When specified, the id of the project this event is associated to
		/// </summary>
		public string ProjectId { get; set; }
		
		/// <summary>
		/// When specified, the name of the project this event is associated to
		/// </summary>
		public string ProjectName { get; set; }
		
		/// <summary>
		/// DisplayName of the scope
		/// </summary>
		public string ScopeDisplayName { get; set; }
		
		/// <summary>
		/// The organization Id (Organization is the only scope currently supported)
		/// </summary>
		public string ScopeId { get; set; }
		
		/// <summary>
		/// The type of the scope (Organization is only scope currently supported)
		/// </summary>
		public System.Nullable<DecoratedAuditLogEntryScopeType> ScopeType { get; set; }
		
		/// <summary>
		/// The time when the event occurred in UTC
		/// </summary>
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
		
		/// <summary>
		/// The user agent from the request
		/// </summary>
		public string UserAgent { get; set; }
	}
	
	public enum DecoratedAuditLogEntryCategory
	{
		
		unknown = 0,
		
		modify = 1,
		
		remove = 2,
		
		create = 3,
		
		access = 4,
		
		execute = 5,
	}
	
	public enum DecoratedAuditLogEntryScopeType
	{
		
		unknown = 0,
		
		deployment = 1,
		
		enterprise = 2,
		
		organization = 3,
		
		project = 4,
	}
	
	/// <summary>
	/// This class represents an audit stream
	/// </summary>
	public class AuditStream
	{
		
		/// <summary>
		/// Inputs used to communicate with external service. Inputs could be url, a connection string, a token, etc.
		/// </summary>
		public System.Collections.Generic.Dictionary<string, string> ConsumerInputs { get; set; }
		
		/// <summary>
		/// Type of the consumer, i.e. splunk, azureEventHub, etc.
		/// </summary>
		public string ConsumerType { get; set; }
		
		/// <summary>
		/// The time when the stream was created
		/// </summary>
		public System.Nullable<System.DateTimeOffset> CreatedTime { get; set; }
		
		/// <summary>
		/// Used to identify individual streams
		/// </summary>
		public string DisplayName { get; set; }
		
		/// <summary>
		/// Unique stream identifier
		/// </summary>
		public System.Nullable<System.Int32> Id { get; set; }
		
		/// <summary>
		/// Status of the stream, Enabled, Disabled
		/// </summary>
		public System.Nullable<AuditStreamStatus> Status { get; set; }
		
		/// <summary>
		/// Reason for the current stream status, i.e. Disabled by the system, Invalid credentials, etc.
		/// </summary>
		public string StatusReason { get; set; }
		
		/// <summary>
		/// The time when the stream was last updated
		/// </summary>
		public System.Nullable<System.DateTimeOffset> UpdatedTime { get; set; }
	}
	
	public enum AuditStreamStatus
	{
		
		unknown = 0,
		
		enabled = 1,
		
		disabledByUser = 2,
		
		disabledBySystem = 3,
		
		deleted = 4,
		
		backfilling = 5,
	}
	
	/// <summary>
	/// This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole
	/// </summary>
	public class VssJsonCollectionWrapper
	{
		
		public string Value { get; set; }
	}
	
	public class VssJsonCollectionWrapperBase
	{
		
		public System.Nullable<System.Int32> Count { get; set; }
	}
	
	public partial class MyClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MyClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Get all auditable actions filterable by area.
		/// Actions_List {organization}/_apis/audit/actions
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="areaName">Optional. Get actions scoped to area</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<AuditActionInfo[]> Actions_ListAsync(string organization, string areaName, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/actions&areaName=" + (areaName==null? "" : System.Uri.EscapeDataString(areaName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditActionInfo[]>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get all auditable actions filterable by area.
		/// Actions_List {organization}/_apis/audit/actions
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="areaName">Optional. Get actions scoped to area</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public AuditActionInfo[] Actions_List(string organization, string areaName, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/actions&areaName=" + (areaName==null? "" : System.Uri.EscapeDataString(areaName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditActionInfo[]>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Queries audit log entries
		/// Audit_Log_Query {organization}/_apis/audit/auditlog
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="startTime">Start time of download window. Optional</param>
		/// <param name="endTime">End time of download window. Optional</param>
		/// <param name="batchSize">Max number of results to return. Optional</param>
		/// <param name="continuationToken">Token used for returning next set of results from previous query. Optional</param>
		/// <param name="skipAggregation">Skips aggregating events and leaves them as individual entries instead. By default events are aggregated. Event types that are aggregated: AuditLog.AccessLog.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<AuditLogQueryResult> Audit_Log_QueryAsync(string organization, System.DateTimeOffset startTime, System.DateTimeOffset endTime, int batchSize, string continuationToken, bool skipAggregation, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/auditlog&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&batchSize="+batchSize+"&continuationToken=" + (continuationToken==null? "" : System.Uri.EscapeDataString(continuationToken))+"&skipAggregation="+skipAggregation+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditLogQueryResult>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Queries audit log entries
		/// Audit_Log_Query {organization}/_apis/audit/auditlog
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="startTime">Start time of download window. Optional</param>
		/// <param name="endTime">End time of download window. Optional</param>
		/// <param name="batchSize">Max number of results to return. Optional</param>
		/// <param name="continuationToken">Token used for returning next set of results from previous query. Optional</param>
		/// <param name="skipAggregation">Skips aggregating events and leaves them as individual entries instead. By default events are aggregated. Event types that are aggregated: AuditLog.AccessLog.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public AuditLogQueryResult Audit_Log_Query(string organization, System.DateTimeOffset startTime, System.DateTimeOffset endTime, int batchSize, string continuationToken, bool skipAggregation, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/auditlog&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&batchSize="+batchSize+"&continuationToken=" + (continuationToken==null? "" : System.Uri.EscapeDataString(continuationToken))+"&skipAggregation="+skipAggregation+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditLogQueryResult>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Downloads audit log entries.
		/// Download_Log_Download_Log {organization}/_apis/audit/downloadlog
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="format">File format for download. Can be "json" or "csv".</param>
		/// <param name="startTime">Start time of download window. Optional</param>
		/// <param name="endTime">End time of download window. Optional</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task Download_Log_Download_LogAsync(string organization, string format, System.DateTimeOffset startTime, System.DateTimeOffset endTime, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/downloadlog&format=" + (format==null? "" : System.Uri.EscapeDataString(format))+"&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
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
		/// Downloads audit log entries.
		/// Download_Log_Download_Log {organization}/_apis/audit/downloadlog
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="format">File format for download. Can be "json" or "csv".</param>
		/// <param name="startTime">Start time of download window. Optional</param>
		/// <param name="endTime">End time of download window. Optional</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public void Download_Log_Download_Log(string organization, string format, System.DateTimeOffset startTime, System.DateTimeOffset endTime, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/downloadlog&format=" + (format==null? "" : System.Uri.EscapeDataString(format))+"&startTime=" + startTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&endTime=" + endTime.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
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
		/// Return all Audit Streams scoped to an organization
		/// Streams_Query_All_Streams {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<AuditStream[]> Streams_Query_All_StreamsAsync(string organization, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream[]>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return all Audit Streams scoped to an organization
		/// Streams_Query_All_Streams {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public AuditStream[] Streams_Query_All_Streams(string organization, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream[]>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update existing Audit Stream
		/// Streams_Update_Stream {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">Stream entry</param>
		/// <returns>successful operation</returns>
		public async Task<AuditStream> Streams_Update_StreamAsync(string organization, string api_version, AuditStream requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update existing Audit Stream
		/// Streams_Update_Stream {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">Stream entry</param>
		/// <returns>successful operation</returns>
		public AuditStream Streams_Update_Stream(string organization, string api_version, AuditStream requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create new Audit Stream
		/// Streams_Create {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="daysToBackfill">The number of days of previously recorded audit data that will be replayed into the stream. A value of zero will result in only new events being streamed.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">Stream entry</param>
		/// <returns>successful operation</returns>
		public async Task<AuditStream> Streams_CreateAsync(string organization, int daysToBackfill, string api_version, AuditStream requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&daysToBackfill="+daysToBackfill+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create new Audit Stream
		/// Streams_Create {organization}/_apis/audit/streams
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="daysToBackfill">The number of days of previously recorded audit data that will be replayed into the stream. A value of zero will result in only new events being streamed.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">Stream entry</param>
		/// <returns>successful operation</returns>
		public AuditStream Streams_Create(string organization, int daysToBackfill, string api_version, AuditStream requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams&daysToBackfill="+daysToBackfill+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return Audit Stream with id of streamId if one exists otherwise throw
		/// Streams_Query_Stream_By_Id {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to retrieve</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<AuditStream> Streams_Query_Stream_By_IdAsync(string organization, int streamId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return Audit Stream with id of streamId if one exists otherwise throw
		/// Streams_Query_Stream_By_Id {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to retrieve</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public AuditStream Streams_Query_Stream_By_Id(string organization, int streamId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update existing Audit Stream status
		/// Streams_Update_Status {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to be updated</param>
		/// <param name="status">Status of the stream</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<AuditStream> Streams_Update_StatusAsync(string organization, int streamId, AuditStreamStatus status, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&status=" + status+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update existing Audit Stream status
		/// Streams_Update_Status {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to be updated</param>
		/// <param name="status">Status of the stream</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public AuditStream Streams_Update_Status(string organization, int streamId, AuditStreamStatus status, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&status=" + status+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<AuditStream>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete Audit Stream
		/// Streams_Delete {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to delete</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task Streams_DeleteAsync(string organization, int streamId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Delete Audit Stream
		/// Streams_Delete {organization}/_apis/audit/streams/{streamId}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="streamId">Id of stream entry to delete</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public void Streams_Delete(string organization, int streamId, string api_version)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/_apis/audit/streams/"+streamId+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
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