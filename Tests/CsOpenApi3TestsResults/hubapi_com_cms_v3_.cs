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
	public class CollectionResponseWithTotalDomainForwardPaging
	{
		
		[System.Runtime.Serialization.DataMember(Name="paging")]
		public ForwardPaging Paging { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="results")]
		public Domain[] Results { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="total")]
		public int Total { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ForwardPaging
	{
		
		[System.Runtime.Serialization.DataMember(Name="next")]
		public NextPage Next { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class NextPage
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="after")]
		public string After { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="link")]
		public string Link { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Domain
	{
		
		[System.Runtime.Serialization.DataMember(Name="correctCname")]
		public string CorrectCname { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="created")]
		public System.Nullable<System.DateTimeOffset> Created { get; set; }
		
		/// <summary>
		/// The actual domain or sub-domain. e.g. www.hubspot.com
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain1 { get; set; }
		
		/// <summary>
		/// The unique ID of this domain.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Whether the DNS for this domain is optimally configured for use with HubSpot.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isResolving")]
		public bool IsResolving { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isSslEnabled")]
		public System.Nullable<System.Boolean> IsSslEnabled { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isSslOnly")]
		public System.Nullable<System.Boolean> IsSslOnly { get; set; }
		
		/// <summary>
		/// Whether the domain is used for CMS blog posts.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isUsedForBlogPost")]
		public bool IsUsedForBlogPost { get; set; }
		
		/// <summary>
		/// Whether the domain is used for CMS email web pages.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isUsedForEmail")]
		public bool IsUsedForEmail { get; set; }
		
		/// <summary>
		/// Whether the domain is used for CMS knowledge pages.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isUsedForKnowledge")]
		public bool IsUsedForKnowledge { get; set; }
		
		/// <summary>
		/// Whether the domain is used for CMS landing pages.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isUsedForLandingPage")]
		public bool IsUsedForLandingPage { get; set; }
		
		/// <summary>
		/// Whether the domain is used for CMS site pages.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isUsedForSitePage")]
		public bool IsUsedForSitePage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="manuallyMarkedAsResolving")]
		public System.Nullable<System.Boolean> ManuallyMarkedAsResolving { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="primaryBlogPost")]
		public System.Nullable<System.Boolean> PrimaryBlogPost { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="primaryEmail")]
		public System.Nullable<System.Boolean> PrimaryEmail { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="primaryKnowledge")]
		public System.Nullable<System.Boolean> PrimaryKnowledge { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="primaryLandingPage")]
		public System.Nullable<System.Boolean> PrimaryLandingPage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="primarySitePage")]
		public System.Nullable<System.Boolean> PrimarySitePage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="secondaryToDomain")]
		public string SecondaryToDomain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.Nullable<System.DateTimeOffset> Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error
	{
		
		/// <summary>
		/// The error category
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		/// <summary>
		/// Context about the error condition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="context")]
		public System.Collections.Generic.Dictionary<string, string[]> Context { get; set; }
		
		/// <summary>
		/// A unique identifier for the request. Include this value with any error reports or support tickets
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="correlationId")]
		public string CorrelationId { get; set; }
		
		/// <summary>
		/// further information about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public ErrorDetail[] Errors { get; set; }
		
		/// <summary>
		/// A map of link names to associated URIs containing documentation about the error or recommended remediation steps
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="links")]
		public System.Collections.Generic.Dictionary<string, string> Links { get; set; }
		
		/// <summary>
		/// A human readable message describing the error along with remediation steps where appropriate
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// A specific category that contains more specific detail about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subCategory")]
		public string SubCategory { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorDetail
	{
		
		/// <summary>
		/// The status code associated with the error detail
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Context about the error condition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="context")]
		public System.Collections.Generic.Dictionary<string, string[]> Context { get; set; }
		
		/// <summary>
		/// The name of the field or parameter in which the error was found.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="in")]
		public string In { get; set; }
		
		/// <summary>
		/// A human readable message describing the error along with remediation steps where appropriate
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// A specific category that contains more specific detail about the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subCategory")]
		public string SubCategory { get; set; }
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
		/// Get current domains
		/// Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
		/// Get_SlashcmsSlashv3SlashdomainsSlash_getPage cms/v3/domains/
		/// </summary>
		/// <param name="createdAt">Only return domains created at this date.</param>
		/// <param name="createdAfter">Only return domains created after this date.</param>
		/// <param name="createdBefore">Only return domains created before this date.</param>
		/// <param name="updatedAt">Only return domains updated at this date.</param>
		/// <param name="updatedAfter">Only return domains updated after this date.</param>
		/// <param name="updatedBefore">Only return domains updated before this date.</param>
		/// <param name="after">The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.</param>
		/// <param name="limit">Maximum number of results per page.</param>
		/// <param name="archived">Whether to return only results that have been archived.</param>
		/// <returns>successful operation</returns>
		public async Task<CollectionResponseWithTotalDomainForwardPaging> Get_SlashcmsSlashv3SlashdomainsSlash_getPageAsync(System.DateTimeOffset createdAt, System.DateTimeOffset createdAfter, System.DateTimeOffset createdBefore, System.DateTimeOffset updatedAt, System.DateTimeOffset updatedAfter, System.DateTimeOffset updatedBefore, string[] sort, string after, int limit, bool archived, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "cms/v3/domains/?createdAt=" + createdAt.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&createdAfter=" + createdAfter.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&createdBefore=" + createdBefore.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&updatedAt=" + updatedAt.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&updatedAfter=" + updatedAfter.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&updatedBefore=" + updatedBefore.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")+"&"+string.Join("&", sort.Select(z => $"sort={System.Uri.EscapeDataString(z.ToString())}"))+"&after=" + (after==null? "" : System.Uri.EscapeDataString(after))+"&limit="+limit+"&archived="+archived;
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
				return JsonSerializer.Deserialize<CollectionResponseWithTotalDomainForwardPaging>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a single domain
		/// Returns a single domains with the id specified.
		/// Get_SlashcmsSlashv3SlashdomainsSlashdomainId_getById cms/v3/domains/{domainId}
		/// </summary>
		/// <param name="domainId">The unique ID of the domain.</param>
		/// <returns>successful operation</returns>
		public async Task<Domain> Get_SlashcmsSlashv3SlashdomainsSlashdomainId_getByIdAsync(string domainId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "cms/v3/domains/"+ (domainId==null? "" : System.Uri.EscapeDataString(domainId));
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
				return JsonSerializer.Deserialize<Domain>(streamContent, jsonSerializerSettings);
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