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
	/// The Advanced Threat Protection settings.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedThreatProtectionProperties
	{
		
		/// <summary>
		/// Indicates whether Advanced Threat Protection is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isEnabled")]
		public System.Nullable<System.Boolean> IsEnabled { get; set; }
	}
	
	/// <summary>
	/// The Advanced Threat Protection resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedThreatProtectionSetting
	{
		
		/// <summary>
		/// The Advanced Threat Protection settings.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public AdvancedThreatProtectionProperties Properties { get; set; }
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
		/// Gets the Advanced Threat Protection settings for the specified resource.
		/// AdvancedThreatProtection_Get {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="resourceId">The identifier of the resource.</param>
		/// <param name="settingName">Advanced Threat Protection setting name.</param>
		/// <returns>Successful request to get Advanced Threat Protection settings.</returns>
		public async Task<AdvancedThreatProtectionSetting> AdvancedThreatProtection_GetAsync(string api_version, string resourceId, AdvancedThreatProtection_GetSettingName settingName)
		{
			var requestUri = ""+ (resourceId==null? "" : System.Uri.EscapeDataString(resourceId))+"/providers/Microsoft.Security/advancedThreatProtectionSettings/"+settingName+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AdvancedThreatProtectionSetting>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates the Advanced Threat Protection settings on a specified resource.
		/// AdvancedThreatProtection_Create {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="resourceId">The identifier of the resource.</param>
		/// <param name="settingName">Advanced Threat Protection setting name.</param>
		/// <param name="requestBody">Advanced Threat Protection Settings</param>
		/// <returns>Successful request to put Advanced Threat Protection settings.</returns>
		public async Task<AdvancedThreatProtectionSetting> AdvancedThreatProtection_CreateAsync(string api_version, string resourceId, AdvancedThreatProtection_GetSettingName settingName, AdvancedThreatProtectionSetting requestBody)
		{
			var requestUri = ""+ (resourceId==null? "" : System.Uri.EscapeDataString(resourceId))+"/providers/Microsoft.Security/advancedThreatProtectionSettings/"+settingName+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AdvancedThreatProtectionSetting>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum AdvancedThreatProtection_GetSettingName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		current = 0,
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
