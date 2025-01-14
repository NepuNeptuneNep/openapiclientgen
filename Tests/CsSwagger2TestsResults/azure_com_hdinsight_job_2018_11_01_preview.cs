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
	/// The State of the application.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AppState
	{
		
		/// <summary>
		/// The State of the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public System.Nullable<AppStateState> State { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AppStateState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NEW = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NEW_SAVING = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUBMITTED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCEPTED = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RUNNING = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FINISHED = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FINISHING = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FAILED = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KILLED = 8,
	}
	
	/// <summary>
	/// The object containing the job ACLs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobACLs
	{
	}
	
	/// <summary>
	/// The object containing the job details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobDetailRootJsonObject
	{
		
		/// <summary>
		/// The callback URL, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callback")]
		public string Callback { get; set; }
		
		/// <summary>
		/// The string representing completed status, for example 'done'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="completed")]
		public string Completed { get; set; }
		
		/// <summary>
		/// The job's exit value.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="exitValue")]
		public System.Nullable<System.Int32> ExitValue { get; set; }
		
		/// <summary>
		/// The job ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The message returned.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="msg")]
		public string Msg { get; set; }
		
		/// <summary>
		/// The parent job ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parentId")]
		public string ParentId { get; set; }
		
		/// <summary>
		/// The job completion percentage, for example '75% complete'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="percentComplete")]
		public string PercentComplete { get; set; }
		
		/// <summary>
		/// The object containing the job profile information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile")]
		public Profile Profile { get; set; }
		
		/// <summary>
		/// Gets or sets the object containing the job status information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public Status Status { get; set; }
		
		/// <summary>
		/// The user name of the job creator.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user")]
		public string User { get; set; }
		
		/// <summary>
		/// Gets or sets the object containing the user arguments.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userargs")]
		public Userargs Userargs { get; set; }
	}
	
	/// <summary>
	/// The object with the Job ID.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobID
	{
		
		/// <summary>
		/// The job number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		/// <summary>
		/// The jobTracker identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jtIdentifier")]
		public string JtIdentifier { get; set; }
	}
	
	/// <summary>
	/// The List Job operation response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobListJsonObject
	{
		
		/// <summary>
		/// The object containing the job details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public JobDetailRootJsonObject Detail { get; set; }
		
		/// <summary>
		/// The Id of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	/// <summary>
	/// Describes the format of Error response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobOperationsErrorResponse
	{
		
		/// <summary>
		/// Error message indicating why the operation failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
	}
	
	/// <summary>
	/// The job submission json response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JobSubmissionJsonResponse
	{
		
		/// <summary>
		/// The Id of the created job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	/// <summary>
	/// The object containing the job profile information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Profile
	{
		
		/// <summary>
		/// The job configuration file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobFile")]
		public string JobFile { get; set; }
		
		/// <summary>
		/// The object with the Job ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobID")]
		public JobID JobID { get; set; }
		
		/// <summary>
		/// The full ID of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobId")]
		public string JobId { get; set; }
		
		/// <summary>
		/// The user-specified job name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobName")]
		public string JobName { get; set; }
		
		/// <summary>
		/// The name of the queue to which the job is submitted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="queueName")]
		public string QueueName { get; set; }
		
		/// <summary>
		/// The link to the web-ui for details of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// The userid of the person who submitted the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user")]
		public string User { get; set; }
	}
	
	/// <summary>
	/// Gets or sets the object containing the job status information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Status
	{
		
		/// <summary>
		/// The progress made on the cleanup.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cleanupProgress")]
		public System.Nullable<System.Double> CleanupProgress { get; set; }
		
		/// <summary>
		/// The information about any failures that have occurred.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="failureInfo")]
		public string FailureInfo { get; set; }
		
		/// <summary>
		/// The time at which the job completed. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="finishTime")]
		public System.Nullable<System.Int64> FinishTime { get; set; }
		
		/// <summary>
		/// The history file of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="historyFile")]
		public string HistoryFile { get; set; }
		
		/// <summary>
		/// The object containing the job ACLs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobACLs")]
		public JobACLs JobACLs { get; set; }
		
		/// <summary>
		/// Whether or not the job has completed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobComplete")]
		public System.Nullable<System.Boolean> JobComplete { get; set; }
		
		/// <summary>
		/// The job configuration file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobFile")]
		public string JobFile { get; set; }
		
		/// <summary>
		/// The object with the Job ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobID")]
		public JobID JobID { get; set; }
		
		/// <summary>
		/// The full ID of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobId")]
		public string JobId { get; set; }
		
		/// <summary>
		/// The user-specified job name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobName")]
		public string JobName { get; set; }
		
		/// <summary>
		/// The priority of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jobPriority")]
		public string JobPriority { get; set; }
		
		/// <summary>
		/// The progress made on the maps.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mapProgress")]
		public System.Nullable<System.Double> MapProgress { get; set; }
		
		/// <summary>
		/// The amount of memory needed for the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="neededMem")]
		public System.Nullable<System.Int64> NeededMem { get; set; }
		
		/// <summary>
		/// The number of slots reserved.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numReservedSlots")]
		public System.Nullable<System.Int32> NumReservedSlots { get; set; }
		
		/// <summary>
		/// The number of slots used for the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numUsedSlots")]
		public System.Nullable<System.Int32> NumUsedSlots { get; set; }
		
		/// <summary>
		/// The priority of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="priority")]
		public string Priority { get; set; }
		
		/// <summary>
		/// The job queue name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="queue")]
		public string Queue { get; set; }
		
		/// <summary>
		/// The progress made on the reduces.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reduceProgress")]
		public System.Nullable<System.Double> ReduceProgress { get; set; }
		
		/// <summary>
		/// The amount of memory reserved for the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reservedMem")]
		public System.Nullable<System.Int64> ReservedMem { get; set; }
		
		/// <summary>
		/// Whether or not the job has been retired. 
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retired")]
		public System.Nullable<System.Boolean> Retired { get; set; }
		
		/// <summary>
		/// The current state of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="runState")]
		public System.Nullable<System.Int32> RunState { get; set; }
		
		/// <summary>
		/// The information about the scheduling of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="schedulingInfo")]
		public string SchedulingInfo { get; set; }
		
		/// <summary>
		/// The progress made on the setup.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="setupProgress")]
		public System.Nullable<System.Double> SetupProgress { get; set; }
		
		/// <summary>
		/// The time at which the job started. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.Int64> StartTime { get; set; }
		
		/// <summary>
		/// The state of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
		
		/// <summary>
		/// The link to the web-ui for details of the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="trackingUrl")]
		public string TrackingUrl { get; set; }
		
		/// <summary>
		/// Whether job running in uber mode.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uber")]
		public System.Nullable<System.Boolean> Uber { get; set; }
		
		/// <summary>
		/// The amount of memory used by the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="usedMem")]
		public System.Nullable<System.Int64> UsedMem { get; set; }
		
		/// <summary>
		/// The userid of the person who submitted the job.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
	}
	
	/// <summary>
	/// Gets or sets the object containing the user arguments.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Userargs
	{
		
		/// <summary>
		/// The list of args defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="arg")]
		public string[] Arg { get; set; }
		
		/// <summary>
		/// The callback URL, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callback")]
		public string Callback { get; set; }
		
		/// <summary>
		/// The define properties defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="define")]
		public string[] Define { get; set; }
		
		/// <summary>
		/// Whether or not the user enabled logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enablelog")]
		public string Enablelog { get; set; }
		
		/// <summary>
		/// The query defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="execute")]
		public string Execute { get; set; }
		
		/// <summary>
		/// The query file provided by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="file")]
		public string File { get; set; }
		
		/// <summary>
		/// The files defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="files")]
		public string Files { get; set; }
		
		/// <summary>
		/// The JAR file provided by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="jar")]
		public string Jar { get; set; }
		
		/// <summary>
		/// The status directory defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="statusdir")]
		public string Statusdir { get; set; }
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
		/// Gets the list of jobs from the specified HDInsight cluster.
		/// Job_List templeton/v1/jobs
		/// </summary>
		/// <param name="user_name">The user name used for running job.</param>
		/// <param name="showall">If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.</param>
		/// <param name="fields">If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.</param>
		/// <returns>OK response definition.</returns>
		public async Task<JobListJsonObject[]> Job_ListAsync(string user_name, Job_ListShowall showall, Job_ListFields fields)
		{
			var requestUri = "templeton/v1/jobs?user.name=" + (user_name==null? "" : System.Uri.EscapeDataString(user_name))+"&showall=" + showall+"&fields=" + fields;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<JobListJsonObject[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets job details from the specified HDInsight cluster.
		/// Job_Get templeton/v1/jobs/{jobId}
		/// </summary>
		/// <param name="user_name">The user name used for running job.</param>
		/// <param name="jobId">The id of the job.</param>
		/// <param name="fields">If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.</param>
		/// <returns>OK response definition.</returns>
		public async Task<JobDetailRootJsonObject> Job_GetAsync(string user_name, string jobId, Job_GetFields fields)
		{
			var requestUri = "templeton/v1/jobs/"+ (jobId==null? "" : System.Uri.EscapeDataString(jobId))+"?user.name=" + (user_name==null? "" : System.Uri.EscapeDataString(user_name))+"&fields=" + fields;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<JobDetailRootJsonObject>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Initiates cancel on given running job in the specified HDInsight.
		/// Job_Kill templeton/v1/jobs/{jobId}
		/// </summary>
		/// <param name="user_name">The user name used for running job.</param>
		/// <param name="jobId">The id of the job.
		/// Min length: 1
		// </param>
		/// <returns>OK response definition.</returns>
		public async Task<JobDetailRootJsonObject> Job_KillAsync(string user_name, string jobId)
		{
			var requestUri = "templeton/v1/jobs/"+ (jobId==null? "" : System.Uri.EscapeDataString(jobId))+"?user.name=" + (user_name==null? "" : System.Uri.EscapeDataString(user_name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<JobDetailRootJsonObject>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets numrecords Of Jobs after jobid from the specified HDInsight cluster.
		/// Job_ListAfterJobId templeton/v1/jobs?op=LISTAFTERID
		/// </summary>
		/// <param name="user_name">The user name used for running job.</param>
		/// <param name="jobid">JobId from where to list jobs.</param>
		/// <param name="numrecords">Number of jobs to fetch.
		/// Minimum: 1
		// </param>
		/// <param name="showall">If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.</param>
		/// <param name="fields">If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.</param>
		/// <returns>OK response definition.</returns>
		public async Task<JobListJsonObject[]> Job_ListAfterJobIdAsync(string user_name, string jobid, int numrecords, Job_ListAfterJobIdShowall showall, Job_ListAfterJobIdFields fields)
		{
			var requestUri = "templeton/v1/jobs?op=LISTAFTERID&user.name=" + (user_name==null? "" : System.Uri.EscapeDataString(user_name))+"&jobid=" + (jobid==null? "" : System.Uri.EscapeDataString(jobid))+"&numrecords="+numrecords+"&showall=" + showall+"&fields=" + fields;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<JobListJsonObject[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets application state from the specified HDInsight cluster.
		/// Job_GetAppState ws/v1/cluster/apps/{appId}/state
		/// </summary>
		/// <param name="appId">The id of the job.</param>
		/// <returns>OK response definition.</returns>
		public async Task<AppState> Job_GetAppStateAsync(string appId)
		{
			var requestUri = "ws/v1/cluster/apps/"+ (appId==null? "" : System.Uri.EscapeDataString(appId))+"/state";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AppState>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Job_ListShowall
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="true")]
		_true = 0,
	}
	
	public enum Job_ListFields
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="*")]
		_ = 0,
	}
	
	public enum Job_GetFields
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="*")]
		_ = 0,
	}
	
	public enum Job_ListAfterJobIdShowall
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="true")]
		_true = 0,
	}
	
	public enum Job_ListAfterJobIdFields
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="*")]
		_ = 0,
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
