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
	public class ArticlesList
	{
		
		[System.Runtime.Serialization.DataMember(Name="articles")]
		public ArticlesListArticles[] ArticlesListArticles { get; set; }
	}
	
	public class ArticlesListArticles
	{
		
		[System.Runtime.Serialization.DataMember(Name="bite")]
		public string Bite { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="featured")]
		public System.Nullable<System.Boolean> Featured { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-description")]
		public string Meta_description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-title")]
		public string Meta_title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="related")]
		public string[] Related { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="seo-keywords")]
		public string Seo_keywords { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title-short")]
		public string Title_short { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="topics")]
		public string[] Topics { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class BlogList
	{
		
		[System.Runtime.Serialization.DataMember(Name="blog")]
		public string[] Blog { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class BlogPage
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-description")]
		public string Meta_description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-title")]
		public string Meta_title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="seo-keywords")]
		public string Seo_keywords { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="topics")]
		public string[] Topics { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class GlossaryList
	{
		
		[System.Runtime.Serialization.DataMember(Name="glossary")]
		public GlossaryListGlossary[] GlossaryListGlossary { get; set; }
	}
	
	public class GlossaryListGlossary
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class GlossaryPage
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class Page
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="experience")]
		public string Experience { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class QuestionPage
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class QuestionsList
	{
		
		[System.Runtime.Serialization.DataMember(Name="questions")]
		public QuestionsListQuestions[] QuestionsListQuestions { get; set; }
	}
	
	public class QuestionsListQuestions
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class StatePage
	{
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="stateurl")]
		public string Stateurl { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class StatesList
	{
		
		[System.Runtime.Serialization.DataMember(Name="states")]
		public string[] States { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class TopicsList
	{
		
		[System.Runtime.Serialization.DataMember(Name="topics")]
		public TopicsListTopics[] TopicsListTopics { get; set; }
	}
	
	public class TopicsListTopics
	{
		
		[System.Runtime.Serialization.DataMember(Name="articleorder")]
		public string[] Articleorder { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="categories")]
		public string[] Categories { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content")]
		public string Content { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="excerpt")]
		public string Excerpt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lang")]
		public string Lang { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layout")]
		public string Layout { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-description")]
		public string Meta_description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta-title")]
		public string Meta_title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="order")]
		public System.Nullable<System.Double> Order { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="published")]
		public System.Nullable<System.Boolean> Published { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sort")]
		public System.Nullable<System.Double> Sort { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
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
		/// Returns pages content.
		/// ApiArticles_mediaTypeExtensionGet api/articles{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiArticles_mediaTypeExtensionGetAsync(ApiArticles_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/articles"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// ApiBlog_mediaTypeExtensionGet api/blog{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiBlog_mediaTypeExtensionGetAsync(ApiBlog_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/blog"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// ApiGlossary_mediaTypeExtensionGet api/glossary{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiGlossary_mediaTypeExtensionGetAsync(ApiGlossary_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/glossary"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// ApiQuestions_mediaTypeExtensionGet api/questions{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiQuestions_mediaTypeExtensionGetAsync(ApiQuestions_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/questions"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// ApiStates_mediaTypeExtensionGet api/states{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiStates_mediaTypeExtensionGetAsync(ApiStates_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/states"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// ApiTopics_mediaTypeExtensionGet api/topics{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task ApiTopics_mediaTypeExtensionGetAsync(ApiTopics_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/topics"+mediaTypeExtension;
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
		
		/// <summary>
		/// Returns pages content.
		/// Blog_pageName_mediaTypeExtensionGet blog/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task Blog_pageName_mediaTypeExtensionGetAsync(Blog_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "blog/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// EsBlog_pageName_mediaTypeExtensionGet es/blog/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task EsBlog_pageName_mediaTypeExtensionGetAsync(EsBlog_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "es/blog/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// EsGlossary_pageName_mediaTypeExtensionGet es/glossary/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task EsGlossary_pageName_mediaTypeExtensionGetAsync(EsGlossary_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "es/glossary/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// EsQuestion_pageName_mediaTypeExtensionGet es/question/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task EsQuestion_pageName_mediaTypeExtensionGetAsync(EsQuestion_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "es/question/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// Es_pageName_mediaTypeExtensionGet es/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task Es_pageName_mediaTypeExtensionGetAsync(Es_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "es/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// Es_stateName_mediaTypeExtensionGet es/{stateName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task Es_stateName_mediaTypeExtensionGetAsync(Es_stateName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string stateName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "es/"+ (stateName==null? "" : System.Uri.EscapeDataString(stateName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// Glossary_pageName_mediaTypeExtensionGet glossary/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task Glossary_pageName_mediaTypeExtensionGetAsync(Glossary_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "glossary/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// Question_pageName_mediaTypeExtensionGet question/{pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task Question_pageName_mediaTypeExtensionGetAsync(Question_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "question/"+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// _pageName_mediaTypeExtensionGet {pageName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task _pageName_mediaTypeExtensionGetAsync(_pageName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string pageName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (pageName==null? "" : System.Uri.EscapeDataString(pageName))+mediaTypeExtension+"";
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
		
		/// <summary>
		/// Returns pages content.
		/// _stateName_mediaTypeExtensionGet {stateName}{mediaTypeExtension}
		/// </summary>
		/// <param name="mediaTypeExtension">Omiting the param causes html to be returned.</param>
		/// <returns>OK</returns>
		public async Task _stateName_mediaTypeExtensionGetAsync(_stateName_mediaTypeExtensionGetMediaTypeExtension mediaTypeExtension, string stateName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (stateName==null? "" : System.Uri.EscapeDataString(stateName))+mediaTypeExtension+"";
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
	
	public enum ApiArticles_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum ApiBlog_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum ApiGlossary_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum ApiQuestions_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum ApiStates_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum ApiTopics_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum Blog_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum EsBlog_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum EsGlossary_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum EsQuestion_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum Es_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum Es_stateName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum Glossary_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum Question_pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum _pageName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
	}
	
	public enum _stateName_mediaTypeExtensionGetMediaTypeExtension
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value=".json")]
		_json = 0,
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