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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class BrowserJsonResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hasEmptyImages")]
		public System.Nullable<System.Boolean> HasEmptyImages { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id_search")]
		public string Id_search { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="input")]
		public InputImage[] Input { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="output")]
		public Search_Results Output { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="progress")]
		public System.Nullable<System.Int32> Progress { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class InputImage
	{
		
		[System.Runtime.Serialization.DataMember(Name="base64")]
		public string Base64 { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id_pic")]
		public string Id_pic { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="svg_anim")]
		public string Svg_anim { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url_source")]
		public string Url_source { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class Search_Results
	{
		
		[System.Runtime.Serialization.DataMember(Name="demo")]
		public System.Nullable<System.Boolean> Demo { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="face_per_sec")]
		public System.Nullable<System.Int32> Face_per_sec { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="freeRam")]
		public System.Nullable<System.Double> FreeRam { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="images_in_bundle")]
		public System.Nullable<System.Int32> Images_in_bundle { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public SearchItem[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="max_score")]
		public System.Nullable<System.Int32> Max_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="performance")]
		public string Performance { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="scaned_till_index")]
		public System.Nullable<System.Int32> Scaned_till_index { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="searchedFaces")]
		public System.Nullable<System.Int32> SearchedFaces { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tookSeconds")]
		public System.Nullable<System.Double> TookSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tookSecondsDownload")]
		public System.Nullable<System.Double> TookSecondsDownload { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tookSecondsQueue")]
		public System.Nullable<System.Double> TookSecondsQueue { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class SearchItem
	{
		
		[System.Runtime.Serialization.DataMember(Name="base64")]
		public string Base64 { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="group")]
		public System.Nullable<System.Int32> Group { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="guid")]
		public string Guid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="index")]
		public System.Nullable<System.Int32> Index { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="indexDB")]
		public System.Nullable<System.Int64> IndexDB { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="score")]
		public System.Nullable<System.Int32> Score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="seen")]
		public System.Nullable<System.Int64> Seen { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class InfoResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="faces")]
		public System.Nullable<System.Int32> Faces { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="has_credits_to_search")]
		public System.Nullable<System.Boolean> Has_credits_to_search { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="is_online")]
		public System.Nullable<System.Boolean> Is_online { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="remaining_credits")]
		public System.Nullable<System.Int32> Remaining_credits { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class SearchData
	{
		
		/// <summary>
		/// true = searches only the first 100,000 faces, good for testing/debugging
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="demo")]
		public System.Nullable<System.Boolean> Demo { get; set; }
		
		/// <summary>
		/// captcha is not used
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id_captcha")]
		public string Id_captcha { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id_search")]
		public string Id_search { get; set; }
		
		/// <summary>
		/// true = don't submit a new search
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status_only")]
		public System.Nullable<System.Boolean> Status_only { get; set; }
		
		/// <summary>
		/// true = return imediately with a progress. False waits until search is finished.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="with_progress")]
		public System.Nullable<System.Boolean> With_progress { get; set; }
	}
	
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
		/// Remove an image from a search request
		/// ApiDelete_picPostById_searchAndId_pic api/delete_pic
		/// </summary>
		/// <returns>Success</returns>
		public async Task<BrowserJsonResponse> ApiDelete_picPostById_searchAndId_picAsync(string id_search, string id_pic, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/delete_pic?id_search=" + (id_search==null? "" : System.Uri.EscapeDataString(id_search))+"&id_pic=" + (id_pic==null? "" : System.Uri.EscapeDataString(id_pic));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<BrowserJsonResponse>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns remaining search credits, search engine online status, and number of indexed faces
		/// ApiInfoPost api/info
		/// </summary>
		/// <returns>Success</returns>
		public async Task<InfoResponse> ApiInfoPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/info";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<InfoResponse>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// ApiSearchPost api/search
		/// </summary>
		/// <returns>Success</returns>
		public async Task<BrowserJsonResponse> ApiSearchPostAsync(SearchData requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/search";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
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
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<BrowserJsonResponse>(jsonReader);
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