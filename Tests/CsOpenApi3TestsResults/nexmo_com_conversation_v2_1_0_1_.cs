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
	public class All_events
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Conversation_list
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Conversation_list_links _links { get; set; }
		
		/// <summary>
		/// The public facing name of the conversation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display_name")]
		public string Display_name { get; set; }
		
		/// <summary>
		/// The ID of the conversation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// An image URL that you associate with the conversation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="image_url")]
		public string Image_url { get; set; }
		
		/// <summary>
		/// Your internal conversation name. Must be unique
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public Conversation_listTimestamp Timestamp { get; set; }
	}
	
	public class Conversation_list_links
	{
		
		[System.Runtime.Serialization.DataMember(Name="self")]
		public Conversation_list_linksSelf Self { get; set; }
	}
	
	public class Conversation_list_linksSelf
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	public class Conversation_listTimestamp
	{
		
		/// <summary>
		/// The time that the conversation was created
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="created")]
		public string Created { get; set; }
	}
	
	public class Custom_event
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class event_
	{
		
		[System.Runtime.Serialization.DataMember()]
		public event__links _links { get; set; }
		
		/// <summary>
		/// The member ID of the sender
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="from")]
		public string From { get; set; }
		
		/// <summary>
		/// The ID of the event
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int32> Id { get; set; }
		
		/// <summary>
		/// The time that the event happened
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public string Timestamp { get; set; }
	}
	
	public class event__links
	{
		
		[System.Runtime.Serialization.DataMember(Name="self")]
		public event__linksSelf Self { get; set; }
	}
	
	public class event__linksSelf
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Member : Member_list
	{
		
		[System.Runtime.Serialization.DataMember(Name="channel")]
		public MemberChannel Channel { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="initiator")]
		public MemberInitiator Initiator { get; set; }
		
		/// <summary>
		/// The current media state for the member
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="media")]
		public MemberMedia Media { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public MemberTimestamp Timestamp { get; set; }
	}
	
	public class MemberChannel
	{
		
		/// <summary>
		/// The channel that the member joins with
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<MemberChannelType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum MemberChannelType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		app = 0,
	}
	
	public class MemberInitiator
	{
		
		[System.Runtime.Serialization.DataMember(Name="invited")]
		public MemberInitiatorInvited Invited { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="joined")]
		public MemberInitiatorJoined Joined { get; set; }
	}
	
	public class MemberInitiatorInvited
	{
		
		[System.Runtime.Serialization.DataMember(Name="is_system")]
		public System.Nullable<System.Boolean> Is_system { get; set; }
	}
	
	public class MemberInitiatorJoined
	{
		
		[System.Runtime.Serialization.DataMember(Name="is_system")]
		public System.Nullable<System.Boolean> Is_system { get; set; }
	}
	
	public class MemberMedia
	{
		
		/// <summary>
		/// The current audio state for the member
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="audio_settings")]
		public MemberMediaAudio_settings Audio_settings { get; set; }
	}
	
	public class MemberMediaAudio_settings
	{
		
		/// <summary>
		/// Can the member hear other participants?
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="earmuffed")]
		public System.Nullable<System.Boolean> Earmuffed { get; set; }
		
		/// <summary>
		/// Is audio enabled?
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// Can the member speak to other participants?
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="muted")]
		public System.Nullable<System.Boolean> Muted { get; set; }
	}
	
	public class MemberTimestamp
	{
		
		/// <summary>
		/// The time that an invitation was sent
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="invited")]
		public string Invited { get; set; }
		
		/// <summary>
		/// The time that the conversation was joined
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="joined")]
		public string Joined { get; set; }
		
		/// <summary>
		/// The time that the member left the conversation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="left")]
		public string Left { get; set; }
	}
	
	public class Member_invited_event
	{
	}
	
	public class Member_left_event
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Member_list
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Member_list_links _links { get; set; }
		
		/// <summary>
		/// The display name of the User
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display_name")]
		public string Display_name { get; set; }
		
		/// <summary>
		/// Member ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The name of the User
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The state that the member is in for this conversation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public System.Nullable<Member_listState> State { get; set; }
		
		/// <summary>
		/// The ID of the User
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user_id")]
		public string User_id { get; set; }
	}
	
	public class Member_list_links
	{
		
		[System.Runtime.Serialization.DataMember(Name="self")]
		public Member_list_linksSelf Self { get; set; }
	}
	
	public class Member_list_linksSelf
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Member_listState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INVITED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JOINED = 1,
	}
	
	public class Text_event
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class User_links
	{
		
		[System.Runtime.Serialization.DataMember(Name="self")]
		public User_linksSelf Self { get; set; }
	}
	
	public class User_linksSelf
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class User_list
	{
		
		[System.Runtime.Serialization.DataMember()]
		public User_links _links { get; set; }
		
		/// <summary>
		/// The ID of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The name of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
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
		/// List Conversations
		/// Please note that not all data is available in the list endpoint. Once
		/// you've identified the conversation you need to work with, use the
		/// [GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details
		/// 
		/// Get_conversations conversations
		/// </summary>
		/// <param name="page_size">The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		/// Maximum: 100
		// </param>
		/// <param name="order">Show the most (`desc`) / least (`asc`) recently created entries first</param>
		/// <param name="cursor">The cursor to start returning results from.
		///
		///You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		///</param>
		/// <param name="date_start">Search for conversations created after this ISO8601 date</param>
		/// <param name="date_end">Search for conversations created before this ISO8601 date</param>
		/// <returns>OK</returns>
		public async Task<object> Get_conversationsAsync(int page_size, Get_conversationsOrder order, string cursor, string date_start, string date_end, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "conversations?page_size="+page_size+"&order=" + order+"&cursor=" + (cursor==null? "" : System.Uri.EscapeDataString(cursor))+"&date_start=" + (date_start==null? "" : System.Uri.EscapeDataString(date_start))+"&date_end=" + (date_end==null? "" : System.Uri.EscapeDataString(date_end));
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
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Events
		/// Get_events conversations/{conversation_id}/events
		/// </summary>
		/// <param name="conversation_id">The ID of the conversation</param>
		/// <param name="page_size">The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		/// Maximum: 100
		// </param>
		/// <param name="order">Show the most (`desc`) / least (`asc`) recently created entries first</param>
		/// <param name="cursor">The cursor to start returning results from.
		///
		///You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		///</param>
		/// <param name="start_id">The ID to start returning events at</param>
		/// <param name="end_id">The ID to end returning events at</param>
		/// <param name="event_type">The type of event to search for. Does not currently support custom events</param>
		/// <returns>OK</returns>
		public async Task<object> Get_eventsAsync(string conversation_id, int page_size, Get_conversationsOrder order, string cursor, string start_id, string end_id, string event_type, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "conversations/"+ (conversation_id==null? "" : System.Uri.EscapeDataString(conversation_id))+"/events&page_size="+page_size+"&order=" + order+"&cursor=" + (cursor==null? "" : System.Uri.EscapeDataString(cursor))+"&start_id=" + (start_id==null? "" : System.Uri.EscapeDataString(start_id))+"&end_id=" + (end_id==null? "" : System.Uri.EscapeDataString(end_id))+"&event_type=" + (event_type==null? "" : System.Uri.EscapeDataString(event_type));
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
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Members
		/// Get_members conversations/{conversation_id}/members
		/// </summary>
		/// <param name="conversation_id">The ID of the conversation</param>
		/// <param name="page_size">The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		/// Maximum: 100
		// </param>
		/// <param name="order">Show the most (`desc`) / least (`asc`) recently created entries first</param>
		/// <param name="cursor">The cursor to start returning results from.
		///
		///You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		///</param>
		/// <returns>OK</returns>
		public async Task<object> Get_membersAsync(string conversation_id, int page_size, Get_conversationsOrder order, string cursor, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "conversations/"+ (conversation_id==null? "" : System.Uri.EscapeDataString(conversation_id))+"/members&page_size="+page_size+"&order=" + order+"&cursor=" + (cursor==null? "" : System.Uri.EscapeDataString(cursor));
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
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Users
		/// Get_users users
		/// </summary>
		/// <param name="page_size">The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		/// Maximum: 100
		// </param>
		/// <param name="order">Show the most (`desc`) / least (`asc`) recently created entries first</param>
		/// <param name="cursor">The cursor to start returning results from.
		///
		///You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		///</param>
		/// <returns>OK</returns>
		public async Task<object> Get_usersAsync(int page_size, Get_conversationsOrder order, string cursor, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "users?page_size="+page_size+"&order=" + order+"&cursor=" + (cursor==null? "" : System.Uri.EscapeDataString(cursor));
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
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Get_conversationsOrder
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		asc = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		desc = 1,
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
