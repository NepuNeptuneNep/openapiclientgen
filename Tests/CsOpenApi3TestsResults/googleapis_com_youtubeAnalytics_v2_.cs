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
	/// Empty response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EmptyResponse
	{
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
	}
	
	/// <summary>
	/// Request Error information. The presence of an error field signals that the operation has failed.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Errors
	{
		
		/// <summary>
		/// Global error code. Deprecated and ignored. Set custom error codes in ErrorProto.domain and ErrorProto.code instead.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<ErrorsCode> Code { get; set; }
		
		/// <summary>
		/// Specific error description and codes
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public ErrorProto[] Error { get; set; }
		
		/// <summary>
		/// Request identifier generated by the service, which can be used to identify the error in the logs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ErrorsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BAD_REQUEST = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FORBIDDEN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOT_FOUND = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONFLICT = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GONE = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PRECONDITION_FAILED = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INTERNAL_ERROR = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SERVICE_UNAVAILABLE = 7,
	}
	
	/// <summary>
	/// Describes one specific error.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorProto
	{
		
		/// <summary>
		/// Error arguments, to be used when building user-friendly error messages given the error domain and code. Different error codes require different arguments.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="argument")]
		public string[] Argument { get; set; }
		
		/// <summary>
		/// Error code in the error domain. This should correspond to a value of the enum type whose name is in domain. See the core error domain in error_domain.proto.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Debugging information, which should not be shared externally.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="debugInfo")]
		public string DebugInfo { get; set; }
		
		/// <summary>
		/// Error domain. RoSy services can define their own domain and error codes. This should normally be the name of an enum type, such as: gdata.CoreErrorDomain
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
		
		/// <summary>
		/// A short explanation for the error, which can be shared outside Google. Please set domain, code and arguments whenever possible instead of this error message so that external APIs can build safe error messages themselves. External messages built in a RoSy interface will most likely refer to information and concepts that are not available externally and should not be exposed. It is safer if external APIs can understand the errors and decide what the error message should look like.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="externalErrorMessage")]
		public string ExternalErrorMessage { get; set; }
		
		/// <summary>
		/// Location of the error, as specified by the location type. If location_type is PATH, this should be a path to a field that's relative to the request, using FieldPath notation (net/proto2/util/public/field_path.h). Examples: authenticated_user.gaia_id resource.address[2].country
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="locationType")]
		public System.Nullable<ErrorProtoLocationType> LocationType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ErrorProtoLocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PATH = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OTHER = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PARAMETER = 2,
	}
	
	/// <summary>
	/// A group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Group
	{
		
		/// <summary>
		/// A group's content details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="contentDetails")]
		public GroupContentDetails ContentDetails { get; set; }
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
		
		/// <summary>
		/// The Etag of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// The ID that YouTube uses to uniquely identify the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Identifies the API resource's type. The value will be `youtube#group`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// A group snippet.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="snippet")]
		public GroupSnippet Snippet { get; set; }
	}
	
	/// <summary>
	/// A group's content details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GroupContentDetails
	{
		
		/// <summary>
		/// The number of items in the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="itemCount")]
		public string ItemCount { get; set; }
		
		/// <summary>
		/// The type of resources that the group contains. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="itemType")]
		public string ItemType { get; set; }
	}
	
	/// <summary>
	/// A group snippet.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GroupSnippet
	{
		
		/// <summary>
		/// The date and time that the group was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publishedAt")]
		public string PublishedAt { get; set; }
		
		/// <summary>
		/// The group name. The value must be a non-empty string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	/// <summary>
	/// A group item.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GroupItem
	{
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
		
		/// <summary>
		/// The Etag of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// The ID that YouTube uses to uniquely identify the group that contains the item.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="groupId")]
		public string GroupId { get; set; }
		
		/// <summary>
		/// The ID that YouTube uses to uniquely identify the `channel`, `video`, `playlist`, or `asset` resource that is included in the group. Note that this ID refers specifically to the inclusion of that resource in a particular group and is different than the channel ID, video ID, playlist ID, or asset ID that uniquely identifies the resource itself. The `resource.id` property's value specifies the unique channel, video, playlist, or asset ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Identifies the API resource's type. The value will be `youtube#groupItem`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="resource")]
		public GroupItemResource Resource { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GroupItemResource
	{
		
		/// <summary>
		/// The channel, video, playlist, or asset ID that YouTube uses to uniquely identify the item that is being added to the group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Identifies the type of resource being added to the group. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
	}
	
	/// <summary>
	/// Response message for GroupsService.ListGroupItems.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListGroupItemsResponse
	{
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
		
		/// <summary>
		/// The Etag of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// A list of groups that match the API request parameters. Each item in the list represents a `groupItem` resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="items")]
		public GroupItem[] Items { get; set; }
		
		/// <summary>
		/// Identifies the API resource's type. The value will be `youtube#groupItemListResponse`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
	}
	
	/// <summary>
	/// Response message for GroupsService.ListGroups.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListGroupsResponse
	{
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
		
		/// <summary>
		/// The Etag of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// A list of groups that match the API request parameters. Each item in the list represents a `group` resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="items")]
		public Group[] Items { get; set; }
		
		/// <summary>
		/// Identifies the API resource's type. The value will be `youtube#groupListResponse`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
	}
	
	/// <summary>
	/// Response message for TargetedQueriesService.Query.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class QueryResponse
	{
		
		/// <summary>
		/// This value specifies information about the data returned in the `rows` fields. Each item in the `columnHeaders` list identifies a field returned in the `rows` value, which contains a list of comma-delimited data. The `columnHeaders` list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters `dimensions=ageGroup,gender&metrics=viewerPercentage`, the API response will return columns in this order: `ageGroup`, `gender`, `viewerPercentage`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="columnHeaders")]
		public ResultTableColumnHeader[] ColumnHeaders { get; set; }
		
		/// <summary>
		/// Request Error information. The presence of an error field signals that the operation has failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors Errors { get; set; }
		
		/// <summary>
		/// This value specifies the type of data included in the API response. For the query method, the kind property value will be `youtubeAnalytics#resultTable`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the `columnHeaders` field. If no data is available for the given query, the `rows` element will be omitted from the response. The response for a query with the `day` dimension will not contain rows for the most recent days.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rows")]
		public string[] Rows { get; set; }
	}
	
	/// <summary>
	/// The description of a column of the result table.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResultTableColumnHeader
	{
		
		/// <summary>
		/// The type of the column (`DIMENSION` or `METRIC`).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="columnType")]
		public string ColumnType { get; set; }
		
		/// <summary>
		/// The type of the data in the column (`STRING`, `INTEGER`, `FLOAT`, etc.).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// The name of the dimension or metric.
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
		/// Removes an item from a group.
		/// YoutubeAnalytics_groupItems_delete v2/groupItems
		/// </summary>
		/// <param name="id">The `id` parameter specifies the YouTube group item ID of the group item that is being deleted.</param>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<EmptyResponse> YoutubeAnalytics_groupItems_deleteAsync(string id, string onBehalfOfContentOwner, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groupItems?id=" + (id==null? "" : System.Uri.EscapeDataString(id))+"&onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EmptyResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a collection of group items that match the API request parameters.
		/// YoutubeAnalytics_groupItems_list v2/groupItems
		/// </summary>
		/// <param name="groupId">The `groupId` parameter specifies the unique ID of the group for which you want to retrieve group items.</param>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<ListGroupItemsResponse> YoutubeAnalytics_groupItems_listAsync(string groupId, string onBehalfOfContentOwner, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groupItems?groupId=" + (groupId==null? "" : System.Uri.EscapeDataString(groupId))+"&onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
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
				return JsonSerializer.Deserialize<ListGroupItemsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a group item.
		/// YoutubeAnalytics_groupItems_insert v2/groupItems
		/// </summary>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<GroupItem> YoutubeAnalytics_groupItems_insertAsync(string onBehalfOfContentOwner, GroupItem requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groupItems?onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
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
				return JsonSerializer.Deserialize<GroupItem>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a group.
		/// YoutubeAnalytics_groups_delete v2/groups
		/// </summary>
		/// <param name="id">The `id` parameter specifies the YouTube group ID of the group that is being deleted.</param>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<EmptyResponse> YoutubeAnalytics_groups_deleteAsync(string id, string onBehalfOfContentOwner, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groups?id=" + (id==null? "" : System.Uri.EscapeDataString(id))+"&onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EmptyResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
		/// YoutubeAnalytics_groups_list v2/groups
		/// </summary>
		/// <param name="id">The `id` parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. Each group must be owned by the authenticated user. In a `group` resource, the `id` property specifies the group's YouTube group ID. Note that if you do not specify a value for the `id` parameter, then you must set the `mine` parameter to `true`.</param>
		/// <param name="mine">This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve all groups owned by the authenticated user.</param>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <param name="pageToken">The `pageToken` parameter identifies a specific page in the result set that should be returned. In an API response, the `nextPageToken` property identifies the next page that can be retrieved.</param>
		/// <returns>Successful response</returns>
		public async Task<ListGroupsResponse> YoutubeAnalytics_groups_listAsync(string id, bool mine, string onBehalfOfContentOwner, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groups?id=" + (id==null? "" : System.Uri.EscapeDataString(id))+"&mine="+mine+"&onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner))+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListGroupsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a group.
		/// YoutubeAnalytics_groups_insert v2/groups
		/// </summary>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<Group> YoutubeAnalytics_groups_insertAsync(string onBehalfOfContentOwner, Group requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groups?onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
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
				return JsonSerializer.Deserialize<Group>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Modifies a group. For example, you could change a group's title.
		/// YoutubeAnalytics_groups_update v2/groups
		/// </summary>
		/// <param name="onBehalfOfContentOwner">This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.</param>
		/// <returns>Successful response</returns>
		public async Task<Group> YoutubeAnalytics_groups_updateAsync(string onBehalfOfContentOwner, Group requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/groups?onBehalfOfContentOwner=" + (onBehalfOfContentOwner==null? "" : System.Uri.EscapeDataString(onBehalfOfContentOwner));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
				return JsonSerializer.Deserialize<Group>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve your YouTube Analytics reports.
		/// YoutubeAnalytics_reports_query v2/reports
		/// </summary>
		/// <param name="currency">The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.", pattern: [A-Z]{3}</param>
		/// <param name="dimensions">A comma-separated list of YouTube Analytics dimensions, such as `views` or `ageGroup,gender`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document for definitions of those dimensions." pattern: [0-9a-zA-Z,]+</param>
		/// <param name="endDate">The end date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: [0-9]{4}-[0-9]{2}-[0-9]{2}</param>
		/// <param name="filters">A list of filters that should be applied when retrieving YouTube Analytics data. The [Available Reports](/youtube/analytics/v2/available_reports) document identifies the dimensions that can be used to filter each report, and the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (`;`), and the returned result table will satisfy both filters. For example, a filters parameter value of `video==dMH0bHeiRNg;country==IT` restricts the result set to include data for the given video in Italy.",</param>
		/// <param name="ids">Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the `ids` parameter value to `channel==CHANNEL_ID`, where `CHANNEL_ID` specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the `ids` parameter value to `contentOwner==OWNER_NAME`, where `OWNER_NAME` is the CMS name of the content owner. required: true, pattern: [a-zA-Z]+==[a-zA-Z0-9_+-]+</param>
		/// <param name="includeHistoricalChannelData">If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.",</param>
		/// <param name="maxResults">The maximum number of rows to include in the response.", minValue: 1</param>
		/// <param name="metrics">A comma-separated list of YouTube Analytics metrics, such as `views` or `likes,dislikes`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the metrics available in each report, and see the [Metrics](/youtube/analytics/v2/dimsmets/mets) document for definitions of those metrics. required: true, pattern: [0-9a-zA-Z,]+</param>
		/// <param name="sort">A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '`-`' prefix causes descending sort order.", pattern: [-0-9a-zA-Z,]+</param>
		/// <param name="startDate">The start date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}</param>
		/// <param name="startIndex">An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).", minValue: 1</param>
		/// <returns>Successful response</returns>
		public async Task<QueryResponse> YoutubeAnalytics_reports_queryAsync(string currency, string dimensions, string endDate, string filters, string ids, bool includeHistoricalChannelData, int maxResults, string metrics, string sort, string startDate, int startIndex, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/reports?currency=" + (currency==null? "" : System.Uri.EscapeDataString(currency))+"&dimensions=" + (dimensions==null? "" : System.Uri.EscapeDataString(dimensions))+"&endDate=" + (endDate==null? "" : System.Uri.EscapeDataString(endDate))+"&filters=" + (filters==null? "" : System.Uri.EscapeDataString(filters))+"&ids=" + (ids==null? "" : System.Uri.EscapeDataString(ids))+"&includeHistoricalChannelData="+includeHistoricalChannelData+"&maxResults="+maxResults+"&metrics=" + (metrics==null? "" : System.Uri.EscapeDataString(metrics))+"&sort=" + (sort==null? "" : System.Uri.EscapeDataString(sort))+"&startDate=" + (startDate==null? "" : System.Uri.EscapeDataString(startDate))+"&startIndex="+startIndex;
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
				return JsonSerializer.Deserialize<QueryResponse>(streamContent, jsonSerializerSettings);
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
