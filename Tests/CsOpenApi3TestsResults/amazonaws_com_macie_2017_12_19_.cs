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
	public class AssociateMemberAccountRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InvalidInputException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LimitExceededException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AssociateS3ResourcesResult
	{
		
		[System.Runtime.Serialization.DataMember(Name="failedS3Resources")]
		public FailedS3Resource[] FailedS3Resources { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) Includes details about the failed S3 resources.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FailedS3Resource
	{
		
		[System.Runtime.Serialization.DataMember(Name="failedItem")]
		public S3Resource FailedItem { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="errorCode")]
		public string ErrorCode { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="errorMessage")]
		public string ErrorMessage { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class S3Resource
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="bucketName")]
		public string BucketName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prefix")]
		public string Prefix { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AssociateS3ResourcesRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="s3Resources")]
		public S3ResourceClassification[] S3Resources { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class S3ResourceClassification
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="bucketName")]
		public string BucketName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prefix")]
		public string Prefix { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="classificationType")]
		public ClassificationType ClassificationType { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ClassificationType
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="oneTime")]
		public S3OneTimeClassificationType OneTime { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="continuous")]
		public S3ContinuousClassificationType Continuous { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum S3OneTimeClassificationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FULL = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NONE = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum S3ContinuousClassificationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FULL = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AccessDeniedException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DisassociateMemberAccountRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DisassociateS3ResourcesResult
	{
		
		[System.Runtime.Serialization.DataMember(Name="failedS3Resources")]
		public FailedS3Resource[] FailedS3Resources { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DisassociateS3ResourcesRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="associatedS3Resources")]
		public S3Resource[] AssociatedS3Resources { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListMemberAccountsResult
	{
		
		[System.Runtime.Serialization.DataMember(Name="memberAccounts")]
		public MemberAccount[] MemberAccounts { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) Contains information about the Amazon Macie Classic member account.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MemberAccount
	{
		
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListMemberAccountsRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="maxResults")]
		public System.Nullable<System.Int32> MaxResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListS3ResourcesResult
	{
		
		[System.Runtime.Serialization.DataMember(Name="s3Resources")]
		public S3ResourceClassification[] S3Resources { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListS3ResourcesRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="maxResults")]
		public System.Nullable<System.Int32> MaxResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateS3ResourcesResult
	{
		
		[System.Runtime.Serialization.DataMember(Name="failedS3Resources")]
		public FailedS3Resource[] FailedS3Resources { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateS3ResourcesRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="memberAccountId")]
		public string MemberAccountId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="s3ResourcesUpdate")]
		public S3ResourceClassificationUpdate[] S3ResourcesUpdate { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class S3ResourceClassificationUpdate
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="bucketName")]
		public string BucketName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prefix")]
		public string Prefix { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="classificationTypeUpdate")]
		public ClassificationTypeUpdate ClassificationTypeUpdate { get; set; }
	}
	
	/// <summary>
	/// (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ClassificationTypeUpdate
	{
		
		[System.Runtime.Serialization.DataMember(Name="oneTime")]
		public S3OneTimeClassificationType OneTime { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="continuous")]
		public S3ContinuousClassificationType Continuous { get; set; }
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
		/// (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
		/// AssociateMemberAccount #X-Amz-Target=MacieService.AssociateMemberAccount
		/// </summary>
		/// <returns>Success</returns>
		public async Task AssociateMemberAccountAsync(AssociateMemberAccountRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.AssociateMemberAccount";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
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
		/// (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
		/// AssociateS3Resources #X-Amz-Target=MacieService.AssociateS3Resources
		/// </summary>
		/// <returns>Success</returns>
		public async Task<AssociateS3ResourcesResult> AssociateS3ResourcesAsync(AssociateS3ResourcesRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.AssociateS3Resources";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
				return JsonSerializer.Deserialize<AssociateS3ResourcesResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// (Discontinued) Removes the specified member account from Amazon Macie Classic.
		/// DisassociateMemberAccount #X-Amz-Target=MacieService.DisassociateMemberAccount
		/// </summary>
		/// <returns>Success</returns>
		public async Task DisassociateMemberAccountAsync(DisassociateMemberAccountRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.DisassociateMemberAccount";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
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
		/// (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
		/// DisassociateS3Resources #X-Amz-Target=MacieService.DisassociateS3Resources
		/// </summary>
		/// <returns>Success</returns>
		public async Task<DisassociateS3ResourcesResult> DisassociateS3ResourcesAsync(DisassociateS3ResourcesRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.DisassociateS3Resources";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
				return JsonSerializer.Deserialize<DisassociateS3ResourcesResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
		/// ListMemberAccounts #X-Amz-Target=MacieService.ListMemberAccounts
		/// </summary>
		/// <param name="maxResults">Pagination limit</param>
		/// <param name="nextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListMemberAccountsResult> ListMemberAccountsAsync(string maxResults, string nextToken, ListMemberAccountsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.ListMemberAccounts?maxResults=" + (maxResults==null? "" : System.Uri.EscapeDataString(maxResults))+"&nextToken=" + (nextToken==null? "" : System.Uri.EscapeDataString(nextToken));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
				return JsonSerializer.Deserialize<ListMemberAccountsResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account.
		/// ListS3Resources #X-Amz-Target=MacieService.ListS3Resources
		/// </summary>
		/// <param name="maxResults">Pagination limit</param>
		/// <param name="nextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListS3ResourcesResult> ListS3ResourcesAsync(string maxResults, string nextToken, ListS3ResourcesRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.ListS3Resources?maxResults=" + (maxResults==null? "" : System.Uri.EscapeDataString(maxResults))+"&nextToken=" + (nextToken==null? "" : System.Uri.EscapeDataString(nextToken));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
				return JsonSerializer.Deserialize<ListS3ResourcesResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
		/// UpdateS3Resources #X-Amz-Target=MacieService.UpdateS3Resources
		/// </summary>
		/// <returns>Success</returns>
		public async Task<UpdateS3ResourcesResult> UpdateS3ResourcesAsync(UpdateS3ResourcesRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=MacieService.UpdateS3Resources";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
				return JsonSerializer.Deserialize<UpdateS3ResourcesResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum AssociateMemberAccountX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.AssociateMemberAccount")]
		MacieService_AssociateMemberAccount = 0,
	}
	
	public enum AssociateS3ResourcesX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.AssociateS3Resources")]
		MacieService_AssociateS3Resources = 0,
	}
	
	public enum DisassociateMemberAccountX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.DisassociateMemberAccount")]
		MacieService_DisassociateMemberAccount = 0,
	}
	
	public enum DisassociateS3ResourcesX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.DisassociateS3Resources")]
		MacieService_DisassociateS3Resources = 0,
	}
	
	public enum ListMemberAccountsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.ListMemberAccounts")]
		MacieService_ListMemberAccounts = 0,
	}
	
	public enum ListS3ResourcesX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.ListS3Resources")]
		MacieService_ListS3Resources = 0,
	}
	
	public enum UpdateS3ResourcesX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="MacieService.UpdateS3Resources")]
		MacieService_UpdateS3Resources = 0,
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
