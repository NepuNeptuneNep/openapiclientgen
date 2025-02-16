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
	/// A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Empty
	{
	}
	
	/// <summary>
	/// A response message for importing an SSH public key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ImportSshPublicKeyResponse
	{
		
		/// <summary>
		/// Detailed information about import results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public string Details { get; set; }
		
		/// <summary>
		/// The user profile information used for logging in to a virtual machine on Google Compute Engine.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="loginProfile")]
		public LoginProfile LoginProfile { get; set; }
	}
	
	/// <summary>
	/// The user profile information used for logging in to a virtual machine on Google Compute Engine.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LoginProfile
	{
		
		/// <summary>
		/// Required. A unique user ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The list of POSIX accounts associated with the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="posixAccounts")]
		public PosixAccount[] PosixAccounts { get; set; }
		
		/// <summary>
		/// A map from SSH public key fingerprint to the associated key object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sshPublicKeys")]
		public System.Collections.Generic.Dictionary<string, SshPublicKey> SshPublicKeys { get; set; }
	}
	
	/// <summary>
	/// The POSIX account information associated with a Google account.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PosixAccount
	{
		
		/// <summary>
		/// Output only. A POSIX account identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The GECOS (user information) entry for this account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="gecos")]
		public string Gecos { get; set; }
		
		/// <summary>
		/// The default group ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="gid")]
		public string Gid { get; set; }
		
		/// <summary>
		/// The path to the home directory for this account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="homeDirectory")]
		public string HomeDirectory { get; set; }
		
		/// <summary>
		/// Output only. The canonical resource name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The operating system type where this account applies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operatingSystemType")]
		public System.Nullable<PosixAccountOperatingSystemType> OperatingSystemType { get; set; }
		
		/// <summary>
		/// Only one POSIX account can be marked as primary.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="primary")]
		public System.Nullable<System.Boolean> Primary { get; set; }
		
		/// <summary>
		/// The path to the logic shell for this account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="shell")]
		public string Shell { get; set; }
		
		/// <summary>
		/// System identifier for which account the username or uid applies to. By default, the empty value is used.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="systemId")]
		public string SystemId { get; set; }
		
		/// <summary>
		/// The user ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uid")]
		public string Uid { get; set; }
		
		/// <summary>
		/// The username of the POSIX account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum PosixAccountOperatingSystemType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OPERATING_SYSTEM_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LINUX = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WINDOWS = 2,
	}
	
	/// <summary>
	/// The SSH public key information associated with a Google account.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SshPublicKey
	{
		
		/// <summary>
		/// An expiration time in microseconds since epoch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expirationTimeUsec")]
		public string ExpirationTimeUsec { get; set; }
		
		/// <summary>
		/// Output only. The SHA-256 fingerprint of the SSH public key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fingerprint")]
		public string Fingerprint { get; set; }
		
		/// <summary>
		/// Public key text in SSH format, defined by RFC4253 section 6.6.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		/// <summary>
		/// Output only. The canonical resource name.
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
		/// Deletes an SSH public key.
		/// Oslogin_users_sshPublicKeys_delete v1/{name}
		/// </summary>
		/// <param name="name">Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.</param>
		/// <returns>Successful response</returns>
		public async Task<Empty> Oslogin_users_sshPublicKeys_deleteAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
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
				return JsonSerializer.Deserialize<Empty>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves an SSH public key.
		/// Oslogin_users_sshPublicKeys_get v1/{name}
		/// </summary>
		/// <param name="name">Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.</param>
		/// <returns>Successful response</returns>
		public async Task<SshPublicKey> Oslogin_users_sshPublicKeys_getAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
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
				return JsonSerializer.Deserialize<SshPublicKey>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates an SSH public key and returns the profile information. This method supports patch semantics.
		/// Oslogin_users_sshPublicKeys_patch v1/{name}
		/// </summary>
		/// <param name="name">Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.</param>
		/// <param name="updateMask">Mask to control which fields get updated. Updates all if not present.</param>
		/// <returns>Successful response</returns>
		public async Task<SshPublicKey> Oslogin_users_sshPublicKeys_patchAsync(string name, string updateMask, SshPublicKey requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&updateMask=" + (updateMask==null? "" : System.Uri.EscapeDataString(updateMask));
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
				return JsonSerializer.Deserialize<SshPublicKey>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
		/// Oslogin_users_getLoginProfile v1/{name}/loginProfile
		/// </summary>
		/// <param name="name">Required. The unique ID for the user in format `users/{user}`.</param>
		/// <param name="projectId">The project ID of the Google Cloud Platform project.</param>
		/// <param name="systemId">A system ID for filtering the results of the request.</param>
		/// <returns>Successful response</returns>
		public async Task<LoginProfile> Oslogin_users_getLoginProfileAsync(string name, string projectId, string systemId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"/loginProfile&projectId=" + (projectId==null? "" : System.Uri.EscapeDataString(projectId))+"&systemId=" + (systemId==null? "" : System.Uri.EscapeDataString(systemId));
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
				return JsonSerializer.Deserialize<LoginProfile>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create an SSH public key
		/// Oslogin_users_sshPublicKeys_create v1/{parent}/sshPublicKeys
		/// </summary>
		/// <param name="parent">Required. The unique ID for the user in format `users/{user}`.</param>
		/// <returns>Successful response</returns>
		public async Task<SshPublicKey> Oslogin_users_sshPublicKeys_createAsync(string parent, SshPublicKey requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/sshPublicKeys";
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
				return JsonSerializer.Deserialize<SshPublicKey>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
		/// Oslogin_users_importSshPublicKey v1/{parent}:importSshPublicKey
		/// </summary>
		/// <param name="parent">Required. The unique ID for the user in format `users/{user}`.</param>
		/// <param name="projectId">The project ID of the Google Cloud Platform project.</param>
		/// <param name="regions">Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.</param>
		/// <returns>Successful response</returns>
		public async Task<ImportSshPublicKeyResponse> Oslogin_users_importSshPublicKeyAsync(string parent, string projectId, string[] regions, SshPublicKey requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+":importSshPublicKey&projectId=" + (projectId==null? "" : System.Uri.EscapeDataString(projectId))+"&"+string.Join("&", regions.Select(z => $"regions={System.Uri.EscapeDataString(z.ToString())}"));
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
				return JsonSerializer.Deserialize<ImportSshPublicKeyResponse>(streamContent, jsonSerializerSettings);
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
