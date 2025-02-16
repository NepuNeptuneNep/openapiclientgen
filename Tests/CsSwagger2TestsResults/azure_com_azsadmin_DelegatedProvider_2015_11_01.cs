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
		/// Get the list of delegatedProviders.
		/// DelegatedProviders_List subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<object> DelegatedProviders_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Subscriptions.Admin/delegatedProviders&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get the specified delegated provider.
		/// DelegatedProviders_Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProvider}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.</param>
		/// <param name="delegatedProvider">DelegatedProvider identifier.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<DelegatedProviders_GetReturn> DelegatedProviders_GetAsync(string subscriptionId, string delegatedProvider, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Subscriptions.Admin/delegatedProviders/"+ (delegatedProvider==null? "" : System.Uri.EscapeDataString(delegatedProvider))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DelegatedProviders_GetReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class DelegatedProviders_GetReturn
	{
		
		/// <summary>
		/// Parent DelegatedProvider subscription identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="delegatedProviderSubscriptionId")]
		public string DelegatedProviderSubscriptionId { get; set; }
		
		/// <summary>
		/// Subscription name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// External reference identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="externalReferenceId")]
		public string ExternalReferenceId { get; set; }
		
		/// <summary>
		/// Fully qualified identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Identifier of the offer under the scope of a delegated provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="offerId")]
		public string OfferId { get; set; }
		
		/// <summary>
		/// Subscription owner.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="owner")]
		public string Owner { get; set; }
		
		/// <summary>
		/// Resource manager type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="routingResourceManagerType")]
		public System.Nullable<DelegatedProviders_GetReturnRoutingResourceManagerType> RoutingResourceManagerType { get; set; }
		
		/// <summary>
		/// Subscription notification state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public System.Nullable<DelegatedProviders_GetReturnState> State { get; set; }
		
		/// <summary>
		/// Subscription identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subscriptionId")]
		public string SubscriptionId { get; set; }
		
		/// <summary>
		/// Directory tenant identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantId")]
		public string TenantId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DelegatedProviders_GetReturnRoutingResourceManagerType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Admin = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DelegatedProviders_GetReturnState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotDefined = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Warned = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PastDue = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disabled = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleted = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PartiallyDeleted = 7,
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
