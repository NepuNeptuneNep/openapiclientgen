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
	/// Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataSource
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="configuration")]
		public DataSourceConfiguration Configuration { get; set; }
		
		/// <summary>
		/// Datasource kind
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public DataSourceKind Kind { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="sinks")]
		public SinkConfiguration[] Sinks { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataSourceConfiguration
	{
		
		/// <summary>
		/// Windows event logs configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="eventLogs")]
		public EventLogConfiguration[] EventLogs { get; set; }
		
		/// <summary>
		/// Performance counter configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="perfCounters")]
		public PerformanceCounterConfiguration[] PerfCounters { get; set; }
		
		/// <summary>
		/// ETW providers configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="providers")]
		public EtwProviderConfiguration[] Providers { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EventLogConfiguration
	{
		
		[System.Runtime.Serialization.DataMember(Name="filter")]
		public string Filter { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="logName")]
		public string LogName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PerformanceCounterConfiguration
	{
		
		[System.Runtime.Serialization.DataMember(Name="instance")]
		public string Instance { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="samplingPeriod")]
		public string SamplingPeriod { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EtwProviderConfiguration
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="events")]
		public EtwEventConfiguration[] Events { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EtwEventConfiguration
	{
		
		[System.Runtime.Serialization.DataMember(Name="filter")]
		public string Filter { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public int Id { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DataSourceKind
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PerformanceCounter = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ETWProviders = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WindowsEventLogs = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SinkConfiguration
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public SinkConfigurationKind Kind { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SinkConfigurationKind
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EventHub = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ApplicationInsights = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LogAnalytics = 2,
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
	/// Virtual machine diagnostic settings
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GuestDiagnosticSettings
	{
		
		/// <summary>
		/// the array of data source object which are configured to collect and send data
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataSources")]
		public DataSource[] DataSources { get; set; }
		
		/// <summary>
		/// Operating system type for the configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="osType")]
		public System.Nullable<GuestDiagnosticSettingsOsType> OsType { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="proxySetting")]
		public string ProxySetting { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum GuestDiagnosticSettingsOsType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Windows = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Linux = 1,
	}
	
	/// <summary>
	/// A list of guest diagnostic settings.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GuestDiagnosticSettingsList
	{
		
		/// <summary>
		/// Provides the link to retrieve the next set of elements.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of guest diagnostic settings.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public GuestDiagnosticSettingsResource[] Value { get; set; }
	}
	
	/// <summary>
	/// Virtual machine guest diagnostics settings resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GuestDiagnosticSettingsResource
	{
		
		/// <summary>
		/// Virtual machine diagnostic settings
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public GuestDiagnosticSettings Properties { get; set; }
	}
	
	/// <summary>
	/// An diagnostic settings object for the body of patch operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GuestDiagnosticSettingsPatchResource
	{
		
		/// <summary>
		/// Virtual machine diagnostic settings
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public GuestDiagnosticSettings Properties { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public object Tags { get; set; }
	}
	
	/// <summary>
	/// An azure resource object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Azure resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource location
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Azure resource name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public object Tags { get; set; }
		
		/// <summary>
		/// Azure resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
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
		/// Get a list of all guest diagnostic settings in a subscription.
		/// GuestDiagnosticsSettings_List subscriptions/{subscriptionId}/providers/microsoft.insights/guestDiagnosticSettings
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<GuestDiagnosticSettingsList> GuestDiagnosticsSettings_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/microsoft.insights/guestDiagnosticSettings&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GuestDiagnosticSettingsList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a list of all guest diagnostic settings in a resource group.
		/// GuestDiagnosticsSettings_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<GuestDiagnosticSettingsList> GuestDiagnosticsSettings_ListByResourceGroupAsync(string resourceGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/guestDiagnosticSettings&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GuestDiagnosticSettingsList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets guest diagnostics settings.
		/// GuestDiagnosticsSettings_Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="diagnosticSettingsName">The name of the diagnostic setting.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The request succeeded.</returns>
		public async Task<GuestDiagnosticSettingsResource> GuestDiagnosticsSettings_GetAsync(string resourceGroupName, string diagnosticSettingsName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/guestDiagnosticSettings/"+ (diagnosticSettingsName==null? "" : System.Uri.EscapeDataString(diagnosticSettingsName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GuestDiagnosticSettingsResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates guest diagnostics settings.
		/// GuestDiagnosticsSettings_CreateOrUpdate subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="diagnosticSettingsName">The name of the diagnostic setting.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="requestBody">The configuration to create or update.</param>
		/// <returns>An existing guest diagnostic settings was successfully updated.</returns>
		public async Task<GuestDiagnosticSettingsResource> GuestDiagnosticsSettings_CreateOrUpdateAsync(string resourceGroupName, string diagnosticSettingsName, string api_version, string subscriptionId, GuestDiagnosticSettingsResource requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/guestDiagnosticSettings/"+ (diagnosticSettingsName==null? "" : System.Uri.EscapeDataString(diagnosticSettingsName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GuestDiagnosticSettingsResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete guest diagnostics settings.
		/// GuestDiagnosticsSettings_Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="diagnosticSettingsName">The name of the diagnostic setting.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The diagnostic settings was successfully deleted.</returns>
		public async Task GuestDiagnosticsSettings_DeleteAsync(string resourceGroupName, string diagnosticSettingsName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/guestDiagnosticSettings/"+ (diagnosticSettingsName==null? "" : System.Uri.EscapeDataString(diagnosticSettingsName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Updates guest diagnostics settings.
		/// GuestDiagnosticsSettings_Update subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettings/{diagnosticSettingsName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="diagnosticSettingsName">The name of the diagnostic setting.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="requestBody">The configuration to patch.</param>
		/// <returns>An existing guest diagnostic settings was successfully updated.</returns>
		public async Task<GuestDiagnosticSettingsResource> GuestDiagnosticsSettings_UpdateAsync(string resourceGroupName, string diagnosticSettingsName, string api_version, string subscriptionId, GuestDiagnosticSettingsPatchResource requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/guestDiagnosticSettings/"+ (diagnosticSettingsName==null? "" : System.Uri.EscapeDataString(diagnosticSettingsName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GuestDiagnosticSettingsResource>(streamContent, jsonSerializerSettings);
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
