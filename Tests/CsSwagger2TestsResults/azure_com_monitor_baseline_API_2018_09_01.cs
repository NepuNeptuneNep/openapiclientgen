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
	/// The baseline values for a single sensitivity value.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Baseline
	{
		
		/// <summary>
		/// The high thresholds of the baseline.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="highThresholds")]
		public double[] HighThresholds { get; set; }
		
		/// <summary>
		/// The low thresholds of the baseline.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="lowThresholds")]
		public double[] LowThresholds { get; set; }
		
		/// <summary>
		/// The sensitivity of the baseline.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="sensitivity")]
		public BaselineSensitivity Sensitivity { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum BaselineSensitivity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Low = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Medium = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		High = 2,
	}
	
	/// <summary>
	/// Represents a baseline metadata value.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BaselineMetadataValue
	{
		
		/// <summary>
		/// The localizable string class.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public LocalizableString Name { get; set; }
		
		/// <summary>
		/// The value of the metadata.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	/// <summary>
	/// The baseline properties class.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BaselineProperties
	{
		
		/// <summary>
		/// The aggregation type of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="aggregation")]
		public string Aggregation { get; set; }
		
		/// <summary>
		/// The baseline values for each sensitivity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="baseline")]
		public Baseline[] Baseline { get; set; }
		
		/// <summary>
		/// The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="interval")]
		public string Interval { get; set; }
		
		/// <summary>
		/// The baseline metadata values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public BaselineMetadataValue[] Metadata { get; set; }
		
		/// <summary>
		/// The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timespan")]
		public string Timespan { get; set; }
		
		/// <summary>
		/// The array of timestamps of the baselines.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timestamps")]
		public string[] Timestamps { get; set; }
	}
	
	/// <summary>
	/// The response to a baseline query.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BaselineResponse
	{
		
		/// <summary>
		/// The metric baseline ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The localizable string class.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public LocalizableString Name { get; set; }
		
		/// <summary>
		/// The baseline properties class.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public BaselineProperties Properties { get; set; }
		
		/// <summary>
		/// The resource type of the baseline resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Describes the format of Error response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorResponse
	{
		
		/// <summary>
		/// Error code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Error message indicating why the operation failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// The localizable string class.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LocalizableString
	{
		
		/// <summary>
		/// The locale specific value.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizedValue")]
		public string LocalizedValue { get; set; }
		
		/// <summary>
		/// The invariant value.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
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
		/// **Gets the baseline values for a resource**.
		/// Baseline_Get {resourceUri}/providers/microsoft.insights/baseline
		/// </summary>
		/// <param name="resourceUri">The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1</param>
		/// <param name="metricnames">The names of the metrics (comma separated) to retrieve.</param>
		/// <param name="timespan">The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.</param>
		/// <param name="interval">The interval (i.e. timegrain) of the query.</param>
		/// <param name="aggregation">The aggregation type of the metric to retrieve the baseline for.</param>
		/// <param name="sensitivities">The list of sensitivities (comma separated) to retrieve.</param>
		/// <param name="resultType">Allows retrieving only metadata of the baseline. On data request all information is retrieved.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="metricnamespace">Metric namespace to query metric definitions for.</param>
		/// <param name="filter">The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.</param>
		/// <returns>Successful request to get the list of metric values.</returns>
		public async Task<BaselineResponse> Baseline_GetAsync(string resourceUri, string metricnames, string timespan, string interval, string aggregation, string sensitivities, Baseline_GetResultType resultType, string api_version, string metricnamespace, string filter)
		{
			var requestUri = ""+ (resourceUri==null? "" : System.Uri.EscapeDataString(resourceUri))+"/providers/microsoft.insights/baseline&metricnames=" + (metricnames==null? "" : System.Uri.EscapeDataString(metricnames))+"&timespan=" + (timespan==null? "" : System.Uri.EscapeDataString(timespan))+"&interval=" + (interval==null? "" : System.Uri.EscapeDataString(interval))+"&aggregation=" + (aggregation==null? "" : System.Uri.EscapeDataString(aggregation))+"&sensitivities=" + (sensitivities==null? "" : System.Uri.EscapeDataString(sensitivities))+"&resultType=" + resultType+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&metricnamespace=" + (metricnamespace==null? "" : System.Uri.EscapeDataString(metricnamespace))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BaselineResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// **Gets the baseline values for a specific metric**.
		/// MetricBaseline_Get {resourceUri}/providers/microsoft.insights/baseline/{metricName}
		/// </summary>
		/// <param name="resourceUri">The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1</param>
		/// <param name="metricName">The name of the metric to retrieve the baseline for.</param>
		/// <param name="timespan">The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.</param>
		/// <param name="interval">The interval (i.e. timegrain) of the query.</param>
		/// <param name="aggregation">The aggregation type of the metric to retrieve the baseline for.</param>
		/// <param name="sensitivities">The list of sensitivities (comma separated) to retrieve.</param>
		/// <param name="resultType">Allows retrieving only metadata of the baseline. On data request all information is retrieved.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="metricnamespace">Metric namespace to query metric definitions for.</param>
		/// <param name="filter">The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.</param>
		/// <returns>Successful request to get the list of metric values.</returns>
		public async Task<BaselineResponse> MetricBaseline_GetAsync(string resourceUri, string metricName, string timespan, string interval, string aggregation, string sensitivities, Baseline_GetResultType resultType, string api_version, string metricnamespace, string filter)
		{
			var requestUri = ""+ (resourceUri==null? "" : System.Uri.EscapeDataString(resourceUri))+"/providers/microsoft.insights/baseline/"+ (metricName==null? "" : System.Uri.EscapeDataString(metricName))+"&timespan=" + (timespan==null? "" : System.Uri.EscapeDataString(timespan))+"&interval=" + (interval==null? "" : System.Uri.EscapeDataString(interval))+"&aggregation=" + (aggregation==null? "" : System.Uri.EscapeDataString(aggregation))+"&sensitivities=" + (sensitivities==null? "" : System.Uri.EscapeDataString(sensitivities))+"&resultType=" + resultType+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&metricnamespace=" + (metricnamespace==null? "" : System.Uri.EscapeDataString(metricnamespace))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BaselineResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Baseline_GetResultType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Data = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Metadata = 1,
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
