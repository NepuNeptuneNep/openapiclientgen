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
	/// Metrics aggregated over the input time range.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AggregateMetrics
	{
		
		/// <summary>
		/// Total count of answered calls.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="answeredCallsCount")]
		public System.Nullable<System.Int32> AnsweredCallsCount { get; set; }
		
		/// <summary>
		/// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endDate")]
		public Date EndDate { get; set; }
		
		/// <summary>
		/// A list of metrics by hour of day.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hourlyMetrics")]
		public HourlyMetrics[] HourlyMetrics { get; set; }
		
		/// <summary>
		/// Total count of missed calls.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="missedCallsCount")]
		public System.Nullable<System.Int32> MissedCallsCount { get; set; }
		
		/// <summary>
		/// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startDate")]
		public Date StartDate { get; set; }
		
		/// <summary>
		/// A list of metrics by day of week.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="weekdayMetrics")]
		public WeekDayMetrics[] WeekdayMetrics { get; set; }
	}
	
	/// <summary>
	/// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Date
	{
		
		/// <summary>
		/// Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public System.Nullable<System.Int32> Day { get; set; }
		
		/// <summary>
		/// Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="month")]
		public System.Nullable<System.Int32> Month { get; set; }
		
		/// <summary>
		/// Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="year")]
		public System.Nullable<System.Int32> Year { get; set; }
	}
	
	/// <summary>
	/// Metrics for an hour.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class HourlyMetrics
	{
		
		/// <summary>
		/// Hour of the day. Allowed values are 0-23.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hour")]
		public System.Nullable<System.Int32> Hour { get; set; }
		
		/// <summary>
		/// Total count of missed calls for this hour.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="missedCallsCount")]
		public System.Nullable<System.Int32> MissedCallsCount { get; set; }
	}
	
	/// <summary>
	/// Metrics for a week day.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class WeekDayMetrics
	{
		
		/// <summary>
		/// Day of the week. Allowed values are Sunday - Saturday.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public System.Nullable<WeekDayMetricsDay> Day { get; set; }
		
		/// <summary>
		/// Total count of missed calls for this hour.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="missedCallsCount")]
		public System.Nullable<System.Int32> MissedCallsCount { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum WeekDayMetricsDay
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DAY_OF_WEEK_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MONDAY = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TUESDAY = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WEDNESDAY = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		THURSDAY = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FRIDAY = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SATURDAY = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUNDAY = 7,
	}
	
	/// <summary>
	/// Insights for calls made to a location.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessCallsInsights
	{
		
		/// <summary>
		/// Metrics aggregated over the input time range.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="aggregateMetrics")]
		public AggregateMetrics AggregateMetrics { get; set; }
		
		/// <summary>
		/// The metric for which the value applies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricType")]
		public System.Nullable<BusinessCallsInsightsMetricType> MetricType { get; set; }
		
		/// <summary>
		/// Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BusinessCallsInsightsMetricType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		METRIC_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AGGREGATE_COUNT = 1,
	}
	
	/// <summary>
	/// Business calls settings for a location.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessCallsSettings
	{
		
		/// <summary>
		/// Required. The state of this location's enrollment in Business calls.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callsState")]
		public System.Nullable<BusinessCallsSettingsCallsState> CallsState { get; set; }
		
		/// <summary>
		/// Input only. Time when the end user provided consent to the API user to enable business calls.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="consentTime")]
		public string ConsentTime { get; set; }
		
		/// <summary>
		/// Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BusinessCallsSettingsCallsState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CALLS_STATE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ENABLED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISABLED = 2,
	}
	
	/// <summary>
	/// Response message for ListBusinessCallsInsights.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListBusinessCallsInsightsResponse
	{
		
		/// <summary>
		/// A collection of business calls insights for the location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="businessCallsInsights")]
		public BusinessCallsInsights[] BusinessCallsInsights { get; set; }
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
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
		/// Returns the Business calls settings resource for the given location.
		/// Mybusinessbusinesscalls_locations_getBusinesscallssettings v1/{name}
		/// </summary>
		/// <param name="name">Required. The BusinessCallsSettings to get. The `name` field is used to identify the business call settings to get. Format: locations/{location_id}/businesscallssettings.</param>
		/// <returns>Successful response</returns>
		public async Task<BusinessCallsSettings> Mybusinessbusinesscalls_locations_getBusinesscallssettingsAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BusinessCallsSettings>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates the Business call settings for the specified location.
		/// Mybusinessbusinesscalls_locations_updateBusinesscallssettings v1/{name}
		/// </summary>
		/// <param name="name">Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings</param>
		/// <param name="updateMask">Required. The list of fields to update.</param>
		/// <returns>Successful response</returns>
		public async Task<BusinessCallsSettings> Mybusinessbusinesscalls_locations_updateBusinesscallssettingsAsync(string name, string updateMask, BusinessCallsSettings requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&updateMask=" + (updateMask==null? "" : System.Uri.EscapeDataString(updateMask));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BusinessCallsSettings>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns insights for Business calls for a location.
		/// Mybusinessbusinesscalls_locations_businesscallsinsights_list v1/{parent}/businesscallsinsights
		/// </summary>
		/// <param name="parent">Required. The parent location to fetch calls insights for. Format: locations/{location_id}</param>
		/// <param name="filter">Optional. A filter constraining the calls insights to return. The response includes only entries that match the filter. If the MetricType is not provided, AGGREGATE_COUNT is returned. If no end_date is provided, the last date for which data is available is used. If no start_date is provided, we will default to the first date for which data is available, which is currently 6 months. If start_date is before the date when data is available, data is returned starting from the date when it is available. At this time we support following filters. 1. start_date="DATE" where date is in YYYY-MM-DD format. 2. end_date="DATE" where date is in YYYY-MM-DD format. 3. metric_type=XYZ where XYZ is a valid MetricType. 4. Conjunctions(AND) of all of the above. e.g., "start_date=2021-08-01 AND end_date=2021-08-10 AND metric_type=AGGREGATE_COUNT" The AGGREGATE_COUNT metric_type ignores the DD part of the date.</param>
		/// <param name="pageSize">Optional. The maximum number of BusinessCallsInsights to return. If unspecified, at most 20 will be returned. Some of the metric_types(e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the page_size is ignored.</param>
		/// <param name="pageToken">Optional. A page token, received from a previous `ListBusinessCallsInsights` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBusinessCallsInsights` must match the call that provided the page token. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the pake_token is ignored.</param>
		/// <returns>Successful response</returns>
		public async Task<ListBusinessCallsInsightsResponse> Mybusinessbusinesscalls_locations_businesscallsinsights_listAsync(string parent, string filter, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/businesscallsinsights&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ListBusinessCallsInsightsResponse>(streamContent, jsonSerializerSettings);
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