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
		/// Posts the user's review to Stellastra
		/// Post_reviewPostByUser_emailAndUser_nameAndRating post-review
		/// </summary>
		/// <param name="user_email">User's email to which the review verification will be sent. </param>
		/// <param name="user_name">The user's name, defaults to empty string "".  Thus, if this is omitted, the email to the user will not use the user's name. </param>
		/// <param name="rating">The user's star rating, must be a single integer from [1, 2, 3, 4, 5]</param>
		/// <param name="requestBody">The request body requires the user_email and rating. The parameter use_name is optional. </param>
		/// <returns>A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.</returns>
		public async Task<Post_reviewPostByUser_emailAndUser_nameAndRatingReturn> Post_reviewPostByUser_emailAndUser_nameAndRatingAsync(string user_email, string user_name, Post_reviewPostByUser_emailAndUser_nameAndRatingRating rating, Post_reviewPostByUser_emailAndUser_nameAndRatingPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "post-review?user_email=" + (user_email==null? "" : System.Uri.EscapeDataString(user_email))+"&user_name=" + (user_name==null? "" : System.Uri.EscapeDataString(user_name))+"&rating="+rating;
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
				return serializer.Deserialize<Post_reviewPostByUser_emailAndUser_nameAndRatingReturn>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Post_reviewPostByUser_emailAndUser_nameAndRatingRating
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_3 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_4 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_5 = 5,
	}
	
	public class Post_reviewPostByUser_emailAndUser_nameAndRatingPostBody
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="rating")]
		public int Rating { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="user_email")]
		public string User_email { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="user_name")]
		public string User_name { get; set; }
	}
	
	public class Post_reviewPostByUser_emailAndUser_nameAndRatingReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public string Data { get; set; }
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
