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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Extension
	{
		
		[System.Runtime.Serialization.DataMember(Name="avg_rating")]
		public System.Nullable<System.Single> Avg_rating { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="extension_id")]
		public System.Nullable<System.Int64> Extension_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="install_count")]
		public System.Nullable<System.Int64> Install_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prev_avg_rating")]
		public System.Nullable<System.Single> Prev_avg_rating { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prev_install_count")]
		public System.Nullable<System.Int64> Prev_install_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prev_rating_count")]
		public System.Nullable<System.Int64> Prev_rating_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rating_count")]
		public System.Nullable<System.Int64> Rating_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="update_ts")]
		public System.Nullable<System.DateTimeOffset> Update_ts { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
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
		/// Get User Extensions
		/// This endpoint allows you to get list of your extensions including extensions from the watchlist.
		/// GetUserExtensions user-extensions
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<Extension[]> GetUserExtensionsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user-extensions";
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
				return JsonSerializer.Deserialize<Extension[]>(streamContent, jsonSerializerSettings);
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
