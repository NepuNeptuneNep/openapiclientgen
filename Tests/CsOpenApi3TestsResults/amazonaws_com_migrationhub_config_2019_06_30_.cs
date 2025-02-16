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
	public class CreateHomeRegionControlResult
	{
		
		[System.Runtime.Serialization.DataMember()]
		public HomeRegionControl HomeRegionControl { get; set; }
	}
	
	/// <summary>
	/// A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class HomeRegionControl
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string ControlId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeRegion { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Target Target { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset RequestedTime { get; set; }
	}
	
	/// <summary>
	/// The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Target
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public TargetType Type { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum TargetType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCOUNT = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateHomeRegionControlRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string HomeRegion { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public Target Target { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> DryRun { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalServerError
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ServiceUnavailableException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AccessDeniedException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ThrottlingException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DryRunOperation
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InvalidInputException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DescribeHomeRegionControlsResult
	{
		
		[System.Runtime.Serialization.DataMember()]
		public HomeRegionControl[] HomeRegionControls { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DescribeHomeRegionControlsRequest
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string ControlId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeRegion { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Target Target { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetHomeRegionResult
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeRegion { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetHomeRegionRequest
	{
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
		/// This API sets up the home region for the calling account only.
		/// CreateHomeRegionControl #X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl
		/// </summary>
		/// <returns>Success</returns>
		public async Task<CreateHomeRegionControlResult> CreateHomeRegionControlAsync(CreateHomeRegionControlRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
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
				return JsonSerializer.Deserialize<CreateHomeRegionControlResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
		/// DescribeHomeRegionControls #X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<DescribeHomeRegionControlsResult> DescribeHomeRegionControlsAsync(string MaxResults, string NextToken, DescribeHomeRegionControlsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<DescribeHomeRegionControlsResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
		/// GetHomeRegion #X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GetHomeRegionResult> GetHomeRegionAsync(GetHomeRegionRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion";
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
				return JsonSerializer.Deserialize<GetHomeRegionResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum CreateHomeRegionControlX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="AWSMigrationHubMultiAccountService.CreateHomeRegionControl")]
		AWSMigrationHubMultiAccountService_CreateHomeRegionControl = 0,
	}
	
	public enum DescribeHomeRegionControlsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="AWSMigrationHubMultiAccountService.DescribeHomeRegionControls")]
		AWSMigrationHubMultiAccountService_DescribeHomeRegionControls = 0,
	}
	
	public enum GetHomeRegionX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="AWSMigrationHubMultiAccountService.GetHomeRegion")]
		AWSMigrationHubMultiAccountService_GetHomeRegion = 0,
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
