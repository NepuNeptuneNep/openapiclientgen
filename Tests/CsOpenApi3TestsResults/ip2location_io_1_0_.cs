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
	
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Geolocate user's location information via IP address
		/// GetByKeyAndIpAndFormatAndLang 
		/// </summary>
		/// <param name="key">API key.</param>
		/// <param name="ip">IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.</param>
		/// <param name="format">Format of the response message.</param>
		/// <param name="lang">Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.</param>
		/// <returns>Get response from IP lookup</returns>
		public async Task GetByKeyAndIpAndFormatAndLangAsync(string key, string ip, GetByKeyAndIpAndFormatAndLangFormat format, GetByKeyAndIpAndFormatAndLangLang lang, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "?key=" + (key==null? "" : System.Uri.EscapeDataString(key))+"&ip=" + (ip==null? "" : System.Uri.EscapeDataString(ip))+"&format=" + format+"&lang=" + lang;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

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
	}
	
	public enum GetByKeyAndIpAndFormatAndLangFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="json")]
		json = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="xml")]
		xml = 1,
	}
	
	public enum GetByKeyAndIpAndFormatAndLangLang
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ar")]
		ar = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="cs")]
		cs = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="da")]
		da = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="de")]
		de = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="en")]
		en = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="es")]
		es = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="et")]
		et = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="fi")]
		fi = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="fr")]
		fr = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ga")]
		ga = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="it")]
		it = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ja")]
		ja = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ko")]
		ko = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ms")]
		ms = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="nl")]
		nl = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pt")]
		pt = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ru")]
		ru = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="sv")]
		sv = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="tr")]
		tr = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="vi")]
		vi = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="zh-cn")]
		zhMinuscn = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="zh-tw")]
		zhMinustw = 21,
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
