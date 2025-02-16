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
	public class DisableControlOutput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operationIdentifier")]
		public string OperationIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ValidationException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ConflictException
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
	public class AccessDeniedException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ThrottlingException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceNotFoundException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EnableControlOutput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operationIdentifier")]
		public string OperationIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetControlOperationOutput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="controlOperation")]
		public ControlOperation ControlOperation { get; set; }
	}
	
	/// <summary>
	/// An operation performed by the control.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ControlOperation
	{
		
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.DateTimeOffset EndTime { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="operationType")]
		public ControlOperationType OperationType { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.DateTimeOffset StartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public ControlOperationStatus Status { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="statusMessage")]
		public string StatusMessage { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ControlOperationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ENABLE_CONTROL = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISABLE_CONTROL = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ControlOperationStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUCCEEDED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FAILED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		IN_PROGRESS = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListEnabledControlsOutput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="enabledControls")]
		public EnabledControlSummary[] EnabledControls { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// A summary of enabled controls.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EnabledControlSummary
	{
		
		[System.Runtime.Serialization.DataMember(Name="controlIdentifier")]
		public string ControlIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DisableControlInput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="controlIdentifier")]
		public string ControlIdentifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		public string TargetIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EnableControlInput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="controlIdentifier")]
		public string ControlIdentifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		public string TargetIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetControlOperationInput
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operationIdentifier")]
		public string OperationIdentifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListEnabledControlsInput
	{
		
		[System.Runtime.Serialization.DataMember(Name="maxResults")]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		public string TargetIdentifier { get; set; }
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
		/// This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
		/// DisableControl disable-control
		/// </summary>
		/// <returns>Success</returns>
		public async Task<DisableControlOutput> DisableControlAsync(DisableControlPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "disable-control";
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
				return JsonSerializer.Deserialize<DisableControlOutput>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
		/// EnableControl enable-control
		/// </summary>
		/// <returns>Success</returns>
		public async Task<EnableControlOutput> EnableControlAsync(EnableControlPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "enable-control";
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
				return JsonSerializer.Deserialize<EnableControlOutput>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.
		/// GetControlOperation get-control-operation
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GetControlOperationOutput> GetControlOperationAsync(GetControlOperationPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "get-control-operation";
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
				return JsonSerializer.Deserialize<GetControlOperationOutput>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.
		/// ListEnabledControls list-enabled-controls
		/// </summary>
		/// <param name="maxResults">Pagination limit</param>
		/// <param name="nextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListEnabledControlsOutput> ListEnabledControlsAsync(string maxResults, string nextToken, ListEnabledControlsPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "list-enabled-controls?maxResults=" + (maxResults==null? "" : System.Uri.EscapeDataString(maxResults))+"&nextToken=" + (nextToken==null? "" : System.Uri.EscapeDataString(nextToken));
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
				return JsonSerializer.Deserialize<ListEnabledControlsOutput>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class DisableControlPostBody
	{
		
		/// <summary>
		/// The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		/// Required
		/// Min length: 20
		/// Max length: 2048
		/// Pattern: ^arn:aws[0-9a-zA-Z_\-:\/]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="controlIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(20, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^arn:aws[0-9a-zA-Z_\-:\/]+$")]
		public string ControlIdentifier { get; set; }
		
		/// <summary>
		/// The ARN of the organizational unit.
		/// Required
		/// Min length: 20
		/// Max length: 2048
		/// Pattern: ^arn:aws[0-9a-zA-Z_\-:\/]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(20, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^arn:aws[0-9a-zA-Z_\-:\/]+$")]
		public string TargetIdentifier { get; set; }
	}
	
	public class EnableControlPostBody
	{
		
		/// <summary>
		/// The ARN of the control. Only <b>Strongly recommended</b> and <b>Elective</b> controls are permitted, with the exception of the <b>Region deny</b> guardrail.
		/// Required
		/// Min length: 20
		/// Max length: 2048
		/// Pattern: ^arn:aws[0-9a-zA-Z_\-:\/]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="controlIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(20, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^arn:aws[0-9a-zA-Z_\-:\/]+$")]
		public string ControlIdentifier { get; set; }
		
		/// <summary>
		/// The ARN of the organizational unit.
		/// Required
		/// Min length: 20
		/// Max length: 2048
		/// Pattern: ^arn:aws[0-9a-zA-Z_\-:\/]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(20, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^arn:aws[0-9a-zA-Z_\-:\/]+$")]
		public string TargetIdentifier { get; set; }
	}
	
	public class GetControlOperationPostBody
	{
		
		/// <summary>
		/// The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
		/// Required
		/// Min length: 36
		/// Max length: 36
		/// Pattern: ^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operationIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(36, 36)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$")]
		public string OperationIdentifier { get; set; }
	}
	
	public class ListEnabledControlsPostBody
	{
		
		/// <summary>
		/// How many results to return per API call.
		/// Minimum: 1
		/// Maximum: 100
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxResults")]
		[System.ComponentModel.DataAnnotations.Range(1, 100)]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		/// <summary>
		/// The token to continue the list from a previous API call with the same parameters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextToken")]
		public string NextToken { get; set; }
		
		/// <summary>
		/// The ARN of the organizational unit.
		/// Required
		/// Min length: 20
		/// Max length: 2048
		/// Pattern: ^arn:aws[0-9a-zA-Z_\-:\/]+$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="targetIdentifier")]
		[System.ComponentModel.DataAnnotations.Length(20, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^arn:aws[0-9a-zA-Z_\-:\/]+$")]
		public string TargetIdentifier { get; set; }
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
