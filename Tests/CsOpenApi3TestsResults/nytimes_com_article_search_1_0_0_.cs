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
	public class Doc
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string _id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="abstract")]
		public string Abstract { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="blog")]
		public string[] Blog { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="byline")]
		public DocByline Byline { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="document_type")]
		public string Document_type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="headline")]
		public DocHeadline Headline { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="keywords")]
		public DocKeywords Keywords { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lead_paragraph")]
		public string Lead_paragraph { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="multimedia")]
		public DocMultimedia[] DocMultimedia { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="news_desk")]
		public string News_desk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="print_page")]
		public string Print_page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pub_date")]
		public string Pub_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="section_name")]
		public string Section_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="slideshow_credits")]
		public string Slideshow_credits { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="snippet")]
		public string Snippet { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="source")]
		public string Source { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="subsection_name")]
		public string Subsection_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type_of_material")]
		public string Type_of_material { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="web_url")]
		public string Web_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="word_count")]
		public string Word_count { get; set; }
	}
	
	public class DocByline
	{
		
		[System.Runtime.Serialization.DataMember(Name="organization")]
		public string Organization { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="original")]
		public string Original { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="person")]
		public string[] Person { get; set; }
	}
	
	public class DocHeadline
	{
		
		[System.Runtime.Serialization.DataMember(Name="kicker")]
		public string Kicker { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="main")]
		public string Main { get; set; }
	}
	
	public class DocKeywords
	{
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rank")]
		public string Rank { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	public class DocMultimedia
	{
		
		[System.Runtime.Serialization.DataMember(Name="caption")]
		public string Caption { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="copyright")]
		public string Copyright { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="format")]
		public string Format { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="height")]
		public System.Nullable<System.Int32> Height { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="subtype")]
		public string Subtype { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="width")]
		public System.Nullable<System.Int32> Width { get; set; }
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
		/// Article Search
		/// Article Search requests use the following URI structure:
		/// 
		/// StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filter articlesearch.json
		/// </summary>
		/// <param name="q">Search query term. Search is performed on the article body, headline and byline.
		///</param>
		/// <param name="fq">"Filtered search query using standard Lucene syntax. 
		///
		///The filter query can be specified with or without a limiting field: label. 
		///
		///See Filtering Your Search for more information about filtering."
		///</param>
		/// <param name="begin_date">"Format: YYYYMMDD 
		///
		///Restricts responses to results with publication dates of the date specified or later."
		///</param>
		/// <param name="end_date">"Format: YYYYMMDD 
		///
		///Restricts responses to results with publication dates of the date specified or earlier."
		///</param>
		/// <param name="sort">"By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."
		///</param>
		/// <param name="fl">"Comma-delimited list of fields (no limit)
		///
		///  Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned: 
		///  
		///  web_url
		///  
		///  snippet
		///  
		///  lead_paragraph
		///  
		///  abstract
		///  
		///  print_page
		///  
		///  blog
		///  
		///  source
		///  
		///  multimedia
		///  
		///  headline
		///  
		///  keywords
		///  
		///  pub_date
		///  
		///  document_type
		///  
		///  news_desk
		///  
		///  byline
		///  
		///  type_of_material
		///  
		///  _id
		///  
		///  word_count"
		///</param>
		/// <param name="hl">Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.
		///
		///Note: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."
		///</param>
		/// <param name="page">"The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."
		///
		/// Minimum: 0
		/// Maximum: 10
		// </param>
		/// <param name="facet_field">Comma-delimited list of facets
		///
		///Specifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:
		///
		///section_name
		///
		///document_type
		///
		///type_of_material
		///
		///source
		///
		///day_of_week
		///
		///To learn more about using facets, see Using Facets.
		///</param>
		/// <param name="facet_filter">When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.
		///</param>
		/// <returns>The docs requested by the article search.</returns>
		public async Task<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn> StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterAsync(string q, string fq, string begin_date, string end_date, StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterSort sort, string fl, bool hl, int page, string facet_field, bool facet_filter, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "articlesearch.json?q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&fq=" + (fq==null? "" : System.Uri.EscapeDataString(fq))+"&begin_date=" + (begin_date==null? "" : System.Uri.EscapeDataString(begin_date))+"&end_date=" + (end_date==null? "" : System.Uri.EscapeDataString(end_date))+"&sort=" + sort+"&fl=" + (fl==null? "" : System.Uri.EscapeDataString(fl))+"&hl="+hl+"&page="+page+"&facet_field=" + (facet_field==null? "" : System.Uri.EscapeDataString(facet_field))+"&facet_filter="+facet_filter;
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
				return JsonSerializer.Deserialize<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterSort
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		newest = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		oldest = 1,
	}
	
	public class StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="response")]
		public StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponse Response { get; set; }
	}
	
	public class StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="docs")]
		public Doc[] Docs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMeta Meta { get; set; }
	}
	
	public class StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMeta
	{
		
		[System.Runtime.Serialization.DataMember(Name="hits")]
		public System.Nullable<System.Int32> Hits { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="offset")]
		public System.Nullable<System.Int32> Offset { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="time")]
		public System.Nullable<System.Int32> Time { get; set; }
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