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
	/// The organization the resource belongs to
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SharedOrganization
	{
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Profile image (640x640)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile_image")]
		public string Profile_image { get; set; }
		
		/// <summary>
		/// Profile image (90x90)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile_image_90")]
		public string Profile_image_90 { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="slug")]
		public string Slug { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
	}
	
	/// <summary>
	/// The author
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SharedUser
	{
		
		[System.Runtime.Serialization.DataMember(Name="github_username")]
		public string Github_username { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Profile image (640x640)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile_image")]
		public string Profile_image { get; set; }
		
		/// <summary>
		/// Profile image (90x90)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile_image_90")]
		public string Profile_image_90 { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="twitter_username")]
		public string Twitter_username { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="website_url")]
		public string Website_url { get; set; }
	}
	
	/// <summary>
	/// Representation of an article returned in a list
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetArticlesResponse
	{
		
		/// <summary>
		/// The body of the article
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="body_markdown")]
		public string Body_markdown { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="canonical_url")]
		public string Canonical_url { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="cover_image")]
		public string Cover_image { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="created_at")]
		public System.DateTimeOffset Created_at { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="crossposted_at")]
		public System.Nullable<System.DateTimeOffset> Crossposted_at { get; set; }
		
		/// <summary>
		/// A description of the article
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="edited_at")]
		public System.Nullable<System.DateTimeOffset> Edited_at { get; set; }
		
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
		[System.Runtime.Serialization.DataMember(Name="last_comment_at")]
		public System.DateTimeOffset Last_comment_at { get; set; }
		
		/// <summary>
		/// The organization the resource belongs to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="organization")]
		public SharedOrganization Organization { get; set; }
		
		/// <summary>
		/// A relative path of the article.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="positive_reactions_count")]
		public int Positive_reactions_count { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="public_reactions_count")]
		public int Public_reactions_count { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="published_at")]
		public System.DateTimeOffset Published_at { get; set; }
		
		/// <summary>
		/// Crossposting or published date time
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="published_timestamp")]
		public System.DateTimeOffset Published_timestamp { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="readable_publish_date")]
		public string Readable_publish_date { get; set; }
		
		/// <summary>
		/// Reading time, in minutes
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="reading_time_minutes")]
		public int Reading_time_minutes { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="slug")]
		public string Slug { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="social_image")]
		public string Social_image { get; set; }
		
		/// <summary>
		/// An array representation of the tags that are associated with an article
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="tag_list")]
		public string[] Tag_list { get; set; }
		
		/// <summary>
		/// An array representation of the tags that are associated with an article
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string Tags { get; set; }
		
		/// <summary>
		/// The article title
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="type_of")]
		public string Type_of { get; set; }
		
		/// <summary>
		/// The url of the article. Can be used to link to the article.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// The author
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="user")]
		public SharedUser User { get; set; }
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
		/// Get a list of filtered articles
		/// GetArticles api/articles/search
		/// </summary>
		/// <param name="q">Accepts keywords to use as a search query.</param>
		/// <param name="page">Pagination Page
		/// Minimum: 0
		// </param>
		/// <param name="per_page">Page size (the number of items to return per page).
		/// Minimum: 1
		/// Maximum: 100
		// </param>
		/// <param name="top">Returns the most popular articles in the last N days. 'top' indicates the number of days since publication of the articles returned. This param can be used in conjuction with q or tag.</param>
		/// <returns>OK</returns>
		public async Task GetArticlesAsync(string q, int page, int per_page, string top, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/articles/search?q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&page="+page+"&per_page="+per_page+"&top=" + (top==null? "" : System.Uri.EscapeDataString(top));
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
