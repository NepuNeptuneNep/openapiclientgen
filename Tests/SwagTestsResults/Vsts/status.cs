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
	
	
	public class EnterpriseStatus
	{
		
		public OrganizationHealth[] Organizations { get; set; }
	}
	
	public class OrganizationHealth
	{
		
		public string Id { get; set; }
		
		public string Name { get; set; }
		
		public ServiceWithHealth[] Services { get; set; }
	}
	
	public class ServiceWithHealth
	{
		
		public System.Nullable<ServiceWithHealthHealth> Health { get; set; }
	}
	
	public enum ServiceWithHealthHealth
	{
		
		unknown = 0,
		
		unhealthy = 1,
		
		degraded = 2,
		
		advisory = 3,
		
		healthy = 4,
	}
	
	public class Geography
	{
		
		public string Id { get; set; }
		
		public string Name { get; set; }
	}
	
	public class GeographyWithHealth
	{
		
		public System.Nullable<GeographyWithHealthHealth> Health { get; set; }
	}
	
	public enum GeographyWithHealthHealth
	{
		
		unknown = 0,
		
		unhealthy = 1,
		
		degraded = 2,
		
		advisory = 3,
		
		healthy = 4,
	}
	
	public class LiveSiteEvent
	{
		
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		public System.Nullable<System.Int64> Id { get; set; }
		
		public LiveSiteEventImpact[] Impact { get; set; }
		
		public string IncidentUri { get; set; }
		
		public LiveSiteEventLog[] Logs { get; set; }
		
		public System.Nullable<System.DateTimeOffset> NextUpdateTime { get; set; }
		
		public System.Nullable<LiveSiteEventSeverity> Severity { get; set; }
		
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		public System.Nullable<LiveSiteEventState> State { get; set; }
		
		public string Title { get; set; }
	}
	
	public class LiveSiteEventImpact
	{
		
		public string ScopeName { get; set; }
		
		public System.Nullable<LiveSiteEventImpactScopeType> ScopeType { get; set; }
		
		public string ServiceId { get; set; }
	}
	
	public enum LiveSiteEventImpactScopeType
	{
		
		geography = 0,
		
		organization = 1,
	}
	
	public class LiveSiteEventLog
	{
		
		public LiveSiteEventAuthor Author { get; set; }
		
		public System.Nullable<System.DateTimeOffset> CreationDateTime { get; set; }
		
		public string Description { get; set; }
		
		public string DescriptionMd { get; set; }
		
		public System.Nullable<System.Int32> Id { get; set; }
		
		public System.Nullable<System.Boolean> IsDeleted { get; set; }
		
		public System.Nullable<System.DateTimeOffset> LastUpdatedDateTime { get; set; }
		
		public System.Nullable<LiveSiteEventLogScopeType> ScopeType { get; set; }
		
		public System.Nullable<LiveSiteEventLogType> Type { get; set; }
	}
	
	public class LiveSiteEventAuthor
	{
		
		public string DisplayName { get; set; }
		
		public string Id { get; set; }
	}
	
	public enum LiveSiteEventLogScopeType
	{
		
		geography = 0,
		
		organization = 1,
	}
	
	public enum LiveSiteEventLogType
	{
		
		_event = 0,
		
		postmortem = 1,
		
		notification = 2,
	}
	
	public enum LiveSiteEventSeverity
	{
		
		unhealthy = 0,
		
		degraded = 1,
		
		advisory = 2,
	}
	
	public enum LiveSiteEventState
	{
		
		active = 0,
		
		resolved = 1,
	}
	
	public class LiveSiteEventLogAttachment
	{
		
		public LiveSiteEventAuthor Author { get; set; }
		
		public System.Nullable<System.DateTimeOffset> CreationDateTime { get; set; }
		
		public string DisplayName { get; set; }
		
		public System.Nullable<System.Int64> EventId { get; set; }
		
		public System.Nullable<System.Int32> FileId { get; set; }
		
		public string FileName { get; set; }
		
		public System.Nullable<LiveSiteEventLogAttachmentScopeType> ScopeType { get; set; }
	}
	
	public enum LiveSiteEventLogAttachmentScopeType
	{
		
		geography = 0,
		
		organization = 1,
	}
	
	public class LiveSiteEventTemplate
	{
		
		public string Id { get; set; }
		
		public string InitialDescription { get; set; }
		
		public string Title { get; set; }
	}
	
	public class LiveSiteEventTemplateData
	{
		
		public string DefaultId { get; set; }
		
		public string FinalDescription { get; set; }
		
		public string IntermediateDescription { get; set; }
		
		public LiveSiteEventTemplate[] Templates { get; set; }
	}
	
	public class MicroService
	{
		
		public string Id { get; set; }
		
		public string Name { get; set; }
		
		public MicroServiceScaleUnit[] ScaleUnits { get; set; }
		
		public Service[] Services { get; set; }
	}
	
	public class MicroServiceScaleUnit
	{
		
		public Geography Geography { get; set; }
		
		public string Id { get; set; }
		
		public System.Nullable<System.Boolean> IsInternal { get; set; }
	}
	
	public class Service
	{
		
		public string Id { get; set; }
		
		public System.Nullable<System.Boolean> IsInternal { get; set; }
		
		public System.Nullable<ServiceState> State { get; set; }
	}
	
	public enum ServiceState
	{
		
		active = 0,
		
		hidden = 1,
		
		deleted = 2,
	}
	
	public class ServiceHealth
	{
		
		public GeographyWithHealth[] Geographies { get; set; }
		
		public string Id { get; set; }
	}
	
	public class ServiceStatus
	{
		
		public ServiceHealth[] Services { get; set; }
	}
	
	public class Status
	{
		
		public System.Nullable<System.DateTimeOffset> LastUpdated { get; set; }
		
		public StatusSummary Status1 { get; set; }
	}
	
	public class StatusSummary
	{
		
		public System.Nullable<StatusSummaryHealth> Health { get; set; }
		
		public string Message { get; set; }
	}
	
	public enum StatusSummaryHealth
	{
		
		unknown = 0,
		
		unhealthy = 1,
		
		degraded = 2,
		
		advisory = 3,
		
		healthy = 4,
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
		/// Queries status information for the service all-up, or scoped to a particular service and/or geography
		/// Health_Get _apis/status/health
		/// </summary>
		/// <param name="services">A comma-separated list of services for which to get status information for. Supported values: Artifacts, Boards, Core services, Other services, Pipelines, Repos, Test Plans.</param>
		/// <param name="geographies">A comma-separated list of geographies for which to get status information for. Supported values: APAC, AU, BR, CA, EU, IN, UK, US.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public async Task<ServiceStatus> Health_GetAsync(string services, string geographies, string api_version)
		{
			var requestUri = "_apis/status/health?services=" + (services==null? "" : System.Uri.EscapeDataString(services))+"&geographies=" + (geographies==null? "" : System.Uri.EscapeDataString(geographies))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<ServiceStatus>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Queries status information for the service all-up, or scoped to a particular service and/or geography
		/// Health_Get _apis/status/health
		/// </summary>
		/// <param name="services">A comma-separated list of services for which to get status information for. Supported values: Artifacts, Boards, Core services, Other services, Pipelines, Repos, Test Plans.</param>
		/// <param name="geographies">A comma-separated list of geographies for which to get status information for. Supported values: APAC, AU, BR, CA, EU, IN, UK, US.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <returns>successful operation</returns>
		public ServiceStatus Health_Get(string services, string geographies, string api_version)
		{
			var requestUri = "_apis/status/health?services=" + (services==null? "" : System.Uri.EscapeDataString(services))+"&geographies=" + (geographies==null? "" : System.Uri.EscapeDataString(geographies))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<ServiceStatus>(jsonReader);
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