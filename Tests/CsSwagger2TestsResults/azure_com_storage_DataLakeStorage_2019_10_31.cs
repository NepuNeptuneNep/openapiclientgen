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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataLakeStorageError
	{
		
		/// <summary>
		/// The service error response object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public object Error { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Filesystem
	{
		
		[System.Runtime.Serialization.DataMember(Name="eTag")]
		public string ETag { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastModified")]
		public string LastModified { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FilesystemList
	{
		
		[System.Runtime.Serialization.DataMember(Name="filesystems")]
		public Filesystem[] Filesystems { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Path
	{
		
		[System.Runtime.Serialization.DataMember(Name="contentLength")]
		public System.Nullable<System.Int64> ContentLength { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="eTag")]
		public string ETag { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="group")]
		public string Group { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isDirectory")]
		public System.Nullable<System.Boolean> IsDirectory { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastModified")]
		public string LastModified { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="owner")]
		public string Owner { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="permissions")]
		public string Permissions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PathList
	{
		
		[System.Runtime.Serialization.DataMember(Name="paths")]
		public Path[] Paths { get; set; }
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
		/// List Filesystems
		/// List filesystems and their properties in given account.
		/// Filesystem_List 
		/// </summary>
		/// <param name="resource">The value must be "account" for all account operations.</param>
		/// <param name="prefix">Filters results to filesystems within the specified prefix.</param>
		/// <param name="continuation">The number of filesystems returned with each invocation is limited. If the number of filesystems to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the filesystems.</param>
		/// <param name="maxResults">An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
		/// Minimum: 1
		// </param>
		/// <param name="timeout">An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
		/// Minimum: 1
		// </param>
		/// <returns>OK</returns>
		public async Task<FilesystemList> Filesystem_ListAsync(Filesystem_ListResource resource, string prefix, string continuation, int maxResults, int timeout)
		{
			var requestUri = "?resource=" + resource+"&prefix=" + (prefix==null? "" : System.Uri.EscapeDataString(prefix))+"&continuation=" + (continuation==null? "" : System.Uri.EscapeDataString(continuation))+"&maxResults="+maxResults+"&timeout="+timeout;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FilesystemList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Paths
		/// List filesystem paths and their properties.
		/// Path_List {filesystem}
		/// </summary>
		/// <param name="directory">Filters results to paths within the specified directory. An error occurs if the directory does not exist.</param>
		/// <param name="recursive">If "true", all paths are listed; otherwise, only paths at the root of the filesystem are listed.  If "directory" is specified, the list will only include paths that share the same root.</param>
		/// <param name="continuation">The number of paths returned with each invocation is limited. If the number of paths to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the paths.</param>
		/// <param name="maxResults">An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
		/// Minimum: 1
		// </param>
		/// <param name="upn">Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the user identity values returned in the owner and group fields of each list entry will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names.</param>
		/// <returns>Ok</returns>
		public async Task<PathList> Path_ListAsync(string directory, bool recursive, string continuation, int maxResults, bool upn)
		{
			var requestUri = "{filesystem}?directory=" + (directory==null? "" : System.Uri.EscapeDataString(directory))+"&recursive="+recursive+"&continuation=" + (continuation==null? "" : System.Uri.EscapeDataString(continuation))+"&maxResults="+maxResults+"&upn="+upn;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PathList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create Filesystem
		/// Create a filesystem rooted at the specified location. If the filesystem already exists, the operation fails.  This operation does not support conditional HTTP requests.
		/// Filesystem_Create {filesystem}
		/// </summary>
		public async Task Filesystem_CreateAsync()
		{
			var requestUri = "{filesystem}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
		/// Delete Filesystem
		/// Marks the filesystem for deletion.  When a filesystem is deleted, a filesystem with the same identifier cannot be created for at least 30 seconds. While the filesystem is being deleted, attempts to create a filesystem with the same identifier will fail with status code 409 (Conflict), with the service returning additional error information indicating that the filesystem is being deleted. All other operations, including operations on any files or directories within the filesystem, will fail with status code 404 (Not Found) while the filesystem is being deleted. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		/// Filesystem_Delete {filesystem}
		/// </summary>
		public async Task Filesystem_DeleteAsync()
		{
			var requestUri = "{filesystem}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// Set Filesystem Properties
		/// Set properties for the filesystem.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		/// Filesystem_SetProperties {filesystem}
		/// </summary>
		/// <returns>Ok</returns>
		public async Task Filesystem_SetPropertiesAsync()
		{
			var requestUri = "{filesystem}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
		/// Read File
		/// Read the contents of a file.  For read operations, range requests are supported. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		/// Path_Read {filesystem}/{path}
		/// </summary>
		/// <returns>Ok</returns>
		public async Task<string> Path_ReadAsync()
		{
			var requestUri = "{filesystem}/{path}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<string>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create File | Create Directory | Rename File | Rename Directory
		/// Create or rename a file or directory.    By default, the destination is overwritten and if the destination already exists and has a lease the lease is broken.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).  To fail if the destination already exists, use a conditional request with If-None-Match: "*".
		/// Path_Create {filesystem}/{path}
		/// </summary>
		/// <param name="resource">Required only for Create File and Create Directory. The value must be "file" or "directory".</param>
		/// <param name="continuation">Optional.  When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory.</param>
		/// <param name="mode">Optional. Valid only when namespace is enabled. This parameter determines the behavior of the rename operation. The value must be "legacy" or "posix", and the default value will be "posix". </param>
		public async Task Path_CreateAsync(Path_CreateResource resource, string continuation, Path_CreateMode mode)
		{
			var requestUri = "{filesystem}/{path}?resource=" + resource+"&continuation=" + (continuation==null? "" : System.Uri.EscapeDataString(continuation))+"&mode=" + mode;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
		/// Lease Path
		/// Create and manage a lease to restrict write and delete access to the path. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		/// Path_Lease {filesystem}/{path}
		/// </summary>
		/// <returns>The "renew", "change" or "release" action was successful.</returns>
		public async Task Path_LeaseAsync()
		{
			var requestUri = "{filesystem}/{path}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Delete File | Delete Directory
		/// Delete the file or directory. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		/// Path_Delete {filesystem}/{path}
		/// </summary>
		/// <param name="recursive">Required and valid only when the resource is a directory.  If "true", all paths beneath the directory will be deleted. If "false" and the directory is non-empty, an error occurs.</param>
		/// <param name="continuation">Optional.  When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory.</param>
		/// <returns>The file was deleted.</returns>
		public async Task Path_DeleteAsync(bool recursive, string continuation)
		{
			var requestUri = "{filesystem}/{path}?recursive="+recursive+"&continuation=" + (continuation==null? "" : System.Uri.EscapeDataString(continuation));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
	
	public enum Filesystem_ListResource
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		account = 0,
	}
	
	public enum Path_CreateResource
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		directory = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		file = 1,
	}
	
	public enum Path_CreateMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		legacy = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		posix = 1,
	}
	
	public enum Path_LeaseX_ms_lease_action
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		acquire = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="break")]
		_break = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		change = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		renew = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		release = 4,
	}
	
	public enum Path_UpdateAction
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		append = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		flush = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		setProperties = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		setAccessControl = 3,
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