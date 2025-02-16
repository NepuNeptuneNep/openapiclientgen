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
	public class CreateRuleResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RuleStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
	}
	
	/// <summary>
	/// Information about the retention period for which the retention rule is to retain resources.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RetentionPeriod
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public int RetentionPeriodValue { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriodUnit RetentionPeriodUnit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum RetentionPeriodUnit
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DAYS = 0,
	}
	
	/// <summary>
	/// Information about the tags to assign to the retention rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Tag
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Key { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ResourceType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EBS_SNAPSHOT = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EC2_IMAGE = 1,
	}
	
	/// <summary>
	/// Information about the resource tags used to identify resources that are retained by the retention rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceTag
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string ResourceTagKey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ResourceTagValue { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum RuleStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		pending = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		available = 1,
	}
	
	/// <summary>
	/// Information about a retention rule lock configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LockConfiguration
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public UnlockDelay UnlockDelay { get; set; }
	}
	
	/// <summary>
	/// Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UnlockDelay
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public int UnlockDelayValue { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriodUnit UnlockDelayUnit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum LockState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		locked = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		pending_unlock = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		unlocked = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ValidationException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ServiceQuotaExceededException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalServerException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteRuleResponse
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceNotFoundException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ConflictException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetRuleResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RuleStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset LockEndTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListRulesResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public RuleSummary[] Rules { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// Information about a Recycle Bin retention rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RuleSummary
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListTagsForResourceResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LockRuleResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RuleStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TagResourceResponse
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UnlockRuleResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RuleStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset LockEndTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UntagResourceResponse
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateRuleResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RuleStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset LockEndTime { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateRuleRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteRuleRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetRuleRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListRulesRequest
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListTagsForResourceRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LockRuleRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public LockConfiguration LockConfiguration { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TagResourceRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum UnlockDelayUnit
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DAYS = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UnlockRuleRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UntagResourceRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateRuleRequest
	{
		
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriod RetentionPeriod { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResourceTag[] ResourceTags { get; set; }
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
		/// Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		/// CreateRule rules
		/// </summary>
		public async Task CreateRuleAsync(CreateRulePostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules";
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
		/// Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		/// DeleteRule rules/{identifier}
		/// </summary>
		/// <param name="identifier">The unique ID of the retention rule.</param>
		public async Task DeleteRuleAsync(string identifier, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules/"+ (identifier==null? "" : System.Uri.EscapeDataString(identifier));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// Gets information about a Recycle Bin retention rule.
		/// GetRule rules/{identifier}
		/// </summary>
		/// <param name="identifier">The unique ID of the retention rule.</param>
		/// <returns>Success</returns>
		public async Task<GetRuleResponse> GetRuleAsync(string identifier, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules/"+ (identifier==null? "" : System.Uri.EscapeDataString(identifier));
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
				return JsonSerializer.Deserialize<GetRuleResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		/// UpdateRule rules/{identifier}
		/// </summary>
		/// <param name="identifier">The unique ID of the retention rule.</param>
		/// <returns>Success</returns>
		public async Task<UpdateRuleResponse> UpdateRuleAsync(string identifier, UpdateRulePatchBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules/"+ (identifier==null? "" : System.Uri.EscapeDataString(identifier));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
				return JsonSerializer.Deserialize<UpdateRuleResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists the Recycle Bin retention rules in the Region.
		/// ListRules list-rules
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListRulesResponse> ListRulesAsync(string MaxResults, string NextToken, ListRulesPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "list-rules?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<ListRulesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists the tags assigned to a retention rule.
		/// ListTagsForResource tags/{resourceArn}
		/// </summary>
		/// <param name="resourceArn">The Amazon Resource Name (ARN) of the retention rule.
		/// Min length: 0
		/// Max length: 1011
		// </param>
		/// <returns>Success</returns>
		public async Task<ListTagsForResourceResponse> ListTagsForResourceAsync(string resourceArn, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "tags/"+ (resourceArn==null? "" : System.Uri.EscapeDataString(resourceArn));
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
				return JsonSerializer.Deserialize<ListTagsForResourceResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Assigns tags to the specified retention rule.
		/// TagResource tags/{resourceArn}
		/// </summary>
		/// <param name="resourceArn">The Amazon Resource Name (ARN) of the retention rule.
		/// Min length: 0
		/// Max length: 1011
		// </param>
		public async Task TagResourceAsync(string resourceArn, TagResourcePostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "tags/"+ (resourceArn==null? "" : System.Uri.EscapeDataString(resourceArn));
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
		/// Locks a retention rule. A locked retention rule can't be modified or deleted.
		/// LockRule rules/{identifier}/lock
		/// </summary>
		/// <param name="identifier">The unique ID of the retention rule.</param>
		/// <returns>Success</returns>
		public async Task<LockRuleResponse> LockRuleAsync(string identifier, LockRulePatchBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules/"+ (identifier==null? "" : System.Uri.EscapeDataString(identifier))+"/lock";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
				return JsonSerializer.Deserialize<LockRuleResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
		/// UnlockRule rules/{identifier}/unlock
		/// </summary>
		/// <param name="identifier">The unique ID of the retention rule.</param>
		/// <returns>Success</returns>
		public async Task<UnlockRuleResponse> UnlockRuleAsync(string identifier, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "rules/"+ (identifier==null? "" : System.Uri.EscapeDataString(identifier))+"/unlock";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<UnlockRuleResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Unassigns a tag from a retention rule.
		/// UntagResource tags/{resourceArn}#tagKeys
		/// </summary>
		/// <param name="resourceArn">The Amazon Resource Name (ARN) of the retention rule.
		/// Min length: 0
		/// Max length: 1011
		// </param>
		/// <param name="tagKeys">The tag keys of the tags to unassign. All tags that have the specified tag key are unassigned.
		/// Minimum items: 0
		/// Maximum items: 200
		// </param>
		public async Task UntagResourceAsync(string resourceArn, string[] tagKeys, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "tags/"+ (resourceArn==null? "" : System.Uri.EscapeDataString(resourceArn))+"#tagKeys&"+string.Join("&", tagKeys.Select(z => $"tagKeys={System.Uri.EscapeDataString(z.ToString())}"));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
	
	public class CreateRulePostBody
	{
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public CreateRulePostBodyRetentionPeriod RetentionPeriod { get; set; }
		
		/// <summary>
		/// The retention rule description.
		/// Pattern: ^[\S ]{0,255}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[\S ]{0,255}$")]
		public string Description { get; set; }
		
		/// <summary>
		/// Information about the tags to assign to the retention rule.
		/// Minimum items: 0
		/// Maximum items: 200
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(0, 200)]
		public Tag[] Tags { get; set; }
		
		/// <summary>
		/// The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		/// <summary>
		/// <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
		/// Minimum items: 0
		/// Maximum items: 50
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(0, 50)]
		public ResourceTag[] ResourceTags { get; set; }
		
		/// <summary>
		/// Information about a retention rule lock configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CreateRulePostBodyLockConfiguration LockConfiguration { get; set; }
	}
	
	public class CreateRulePostBodyRetentionPeriod
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RetentionPeriodValue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriodUnit RetentionPeriodUnit { get; set; }
	}
	
	public class CreateRulePostBodyLockConfiguration
	{
		
		[System.Runtime.Serialization.DataMember()]
		public UnlockDelay UnlockDelay { get; set; }
	}
	
	public class UpdateRulePatchBody
	{
		
		/// <summary>
		/// Information about the retention period for which the retention rule is to retain resources.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public UpdateRulePatchBodyRetentionPeriod RetentionPeriod { get; set; }
		
		/// <summary>
		/// The retention rule description.
		/// Pattern: ^[\S ]{0,255}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[\S ]{0,255}$")]
		public string Description { get; set; }
		
		/// <summary>
		/// <note> <p>This parameter is currently not supported. You can't update a retention rule's resource type after creation.</p> </note>
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		/// <summary>
		/// <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
		/// Minimum items: 0
		/// Maximum items: 50
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(0, 50)]
		public ResourceTag[] ResourceTags { get; set; }
	}
	
	public class UpdateRulePatchBodyRetentionPeriod
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RetentionPeriodValue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public RetentionPeriodUnit RetentionPeriodUnit { get; set; }
	}
	
	public class ListRulesPostBody
	{
		
		/// <summary>
		/// The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
		/// Minimum: 1
		/// Maximum: 1000
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(1, 1000)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		/// The token for the next page of results.
		/// Pattern: ^[A-Za-z0-9+/=]{1,2048}$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[A-Za-z0-9+/=]{1,2048}$")]
		public string NextToken { get; set; }
		
		/// <summary>
		/// The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ResourceType ResourceType { get; set; }
		
		/// <summary>
		/// Information about the resource tags used to identify resources that are retained by the retention rule.
		/// Minimum items: 0
		/// Maximum items: 50
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(0, 50)]
		public ResourceTag[] ResourceTags { get; set; }
		
		/// <summary>
		/// The lock state of the retention rules to list. Only retention rules with the specified lock state are returned.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public LockState LockState { get; set; }
	}
	
	public class TagResourcePostBody
	{
		
		/// <summary>
		/// Information about the tags to assign to the retention rule.
		/// Required
		/// Minimum items: 0
		/// Maximum items: 200
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(0, 200)]
		public Tag[] Tags { get; set; }
	}
	
	public class LockRulePatchBody
	{
		
		/// <summary>
		/// Information about a retention rule lock configuration.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public LockRulePatchBodyLockConfiguration LockConfiguration { get; set; }
	}
	
	public class LockRulePatchBodyLockConfiguration
	{
		
		[System.Runtime.Serialization.DataMember()]
		public UnlockDelay UnlockDelay { get; set; }
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
