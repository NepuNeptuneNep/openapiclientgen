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
	/// Database metrics.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Metric
	{
		
		/// <summary>
		/// The end time for the metric (ISO-8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		/// <summary>
		/// The metric values for the specified time window and timestep.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricValues")]
		public MetricValue[] MetricValues { get; set; }
		
		/// <summary>
		/// A database metric name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public MetricName Name { get; set; }
		
		/// <summary>
		/// The start time for the metric (ISO-8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// The time step to be used to summarize the metric values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeGrain")]
		public string TimeGrain { get; set; }
		
		/// <summary>
		/// The unit of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unit")]
		public System.Nullable<MetricUnit> Unit { get; set; }
	}
	
	/// <summary>
	/// Represents database metrics.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricValue
	{
		
		/// <summary>
		/// The average value of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="average")]
		public System.Nullable<System.Double> Average { get; set; }
		
		/// <summary>
		/// The number of values for the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public string Count { get; set; }
		
		/// <summary>
		/// The max value of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maximum")]
		public System.Nullable<System.Double> Maximum { get; set; }
		
		/// <summary>
		/// The min value of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="minimum")]
		public System.Nullable<System.Double> Minimum { get; set; }
		
		/// <summary>
		/// The metric timestamp (ISO-8601 format).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
		
		/// <summary>
		/// The total value of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total")]
		public System.Nullable<System.Double> Total { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum MetricUnit
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		count = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		bytes = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		seconds = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		percent = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		countPerSecond = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		bytesPerSecond = 5,
	}
	
	/// <summary>
	/// A metric availability value.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricAvailability
	{
		
		/// <summary>
		/// The length of retention for the database metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retention")]
		public string Retention { get; set; }
		
		/// <summary>
		/// The granularity of the database metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeGrain")]
		public string TimeGrain { get; set; }
	}
	
	/// <summary>
	/// A database metric definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricDefinition
	{
		
		/// <summary>
		/// The list of database metric availabilities for the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricAvailabilities")]
		public MetricAvailability[] MetricAvailabilities { get; set; }
		
		/// <summary>
		/// A database metric name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public MetricName Name { get; set; }
		
		/// <summary>
		/// The primary aggregation type defining how metric values are displayed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="primaryAggregationType")]
		public System.Nullable<MetricDefinitionPrimaryAggregationType> PrimaryAggregationType { get; set; }
		
		/// <summary>
		/// The resource uri of the database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceUri")]
		public string ResourceUri { get; set; }
		
		/// <summary>
		/// The unit of the metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unit")]
		public System.Nullable<MetricDefinitionUnit> Unit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum MetricDefinitionPrimaryAggregationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Average = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Count = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minimum = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Maximum = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Total = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum MetricDefinitionUnit
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Count = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bytes = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Seconds = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Percent = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CountPerSecond = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BytesPerSecond = 5,
	}
	
	/// <summary>
	/// The response to a list database metric definitions request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricDefinitionListResult
	{
		
		/// <summary>
		/// The list of metric definitions for the database.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public MetricDefinition[] Value { get; set; }
	}
	
	/// <summary>
	/// The response to a list database metrics request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricListResult
	{
		
		/// <summary>
		/// The list of metrics for the database.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Metric[] Value { get; set; }
	}
	
	/// <summary>
	/// A database metric name.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MetricName
	{
		
		/// <summary>
		/// The friendly name of the database metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizedValue")]
		public string LocalizedValue { get; set; }
		
		/// <summary>
		/// The name of the database metric.
		/// </summary>
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
		/// Returns database metric definitions.
		/// Databases_ListMetricDefinitions subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/metricDefinitions
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database.</param>
		/// <returns>OK</returns>
		public async Task<MetricDefinitionListResult> Databases_ListMetricDefinitionsAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/metricDefinitions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<MetricDefinitionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns database metrics.
		/// Databases_ListMetrics subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/metrics
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database.</param>
		/// <param name="filter">An OData filter expression that describes a subset of metrics to return.</param>
		/// <returns>OK</returns>
		public async Task<MetricListResult> Databases_ListMetricsAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/metrics?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<MetricListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns elastic pool metric definitions.
		/// ElasticPools_ListMetricDefinitions subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="elasticPoolName">The name of the elastic pool.</param>
		/// <returns>OK</returns>
		public async Task<MetricDefinitionListResult> ElasticPools_ListMetricDefinitionsAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string elasticPoolName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/elasticPools/"+ (elasticPoolName==null? "" : System.Uri.EscapeDataString(elasticPoolName))+"/metricDefinitions?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<MetricDefinitionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns elastic pool  metrics.
		/// ElasticPools_ListMetrics subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="elasticPoolName">The name of the elastic pool.</param>
		/// <param name="filter">An OData filter expression that describes a subset of metrics to return.</param>
		/// <returns>OK</returns>
		public async Task<MetricListResult> ElasticPools_ListMetricsAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string elasticPoolName, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/elasticPools/"+ (elasticPoolName==null? "" : System.Uri.EscapeDataString(elasticPoolName))+"/metrics?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<MetricListResult>(streamContent, jsonSerializerSettings);
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
