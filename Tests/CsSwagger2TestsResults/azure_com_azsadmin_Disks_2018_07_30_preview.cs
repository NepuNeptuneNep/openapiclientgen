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
	/// Disk Sku.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AccountType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_LRS = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_ZRS = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_GRS = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_RAGRS = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Premium_LRS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		StandardSSD_LRS = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UltraSSD_LRS = 6,
	}
	
	/// <summary>
	/// Managed Disk.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Disk
	{
		
		/// <summary>
		/// Managed disk properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DiskProperties Properties { get; set; }
	}
	
	public class DiskProperties
	{
		
		/// <summary>
		/// The actual size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actualSizeGB")]
		public System.Nullable<System.Int64> ActualSizeGB { get; set; }
		
		/// <summary>
		/// The disk id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskId")]
		public string DiskId { get; set; }
		
		/// <summary>
		/// Disk Sku.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskSku")]
		public AccountType DiskSku { get; set; }
		
		/// <summary>
		/// Disk resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskType")]
		public System.Nullable<DiskPropertiesDiskType> DiskType { get; set; }
		
		/// <summary>
		/// Compute resource Uri which owns this disk.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="managedBy")]
		public string ManagedBy { get; set; }
		
		/// <summary>
		/// The provision size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisionSizeGB")]
		public System.Nullable<System.Int64> ProvisionSizeGB { get; set; }
		
		/// <summary>
		/// The disk share path.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sharePath")]
		public string SharePath { get; set; }
		
		/// <summary>
		/// Disk State.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<DiskPropertiesStatus> Status { get; set; }
		
		/// <summary>
		/// The disk resource Uri from user view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userResourceId")]
		public string UserResourceId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DiskPropertiesDiskType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Undefined = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disk = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Snapshot = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RestorePoint = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ManagedBlob = 4,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DiskPropertiesStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Undefined = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unattached = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Attached = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Reserved = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ActiveSAS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unknown = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		All = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Recommended = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OfflineMigration = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OnlineMigration = 9,
	}
	
	/// <summary>
	/// List of disks.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DiskList
	{
		
		/// <summary>
		/// URI to the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of disks.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public DiskListValue[] DiskListValue { get; set; }
	}
	
	public class DiskListValue
	{
		
		/// <summary>
		/// Managed disk properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public DiskListValueProperties Properties { get; set; }
	}
	
	public class DiskListValueProperties
	{
		
		/// <summary>
		/// The actual size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actualSizeGB")]
		public System.Nullable<System.Int64> ActualSizeGB { get; set; }
		
		/// <summary>
		/// The disk id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskId")]
		public string DiskId { get; set; }
		
		/// <summary>
		/// Disk Sku.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskSku")]
		public AccountType DiskSku { get; set; }
		
		/// <summary>
		/// Disk resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskType")]
		public DiskPropertiesDiskType DiskType { get; set; }
		
		/// <summary>
		/// Compute resource Uri which owns this disk.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="managedBy")]
		public string ManagedBy { get; set; }
		
		/// <summary>
		/// The provision size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisionSizeGB")]
		public System.Nullable<System.Int64> ProvisionSizeGB { get; set; }
		
		/// <summary>
		/// The disk share path.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sharePath")]
		public string SharePath { get; set; }
		
		/// <summary>
		/// Disk State.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public DiskPropertiesStatus Status { get; set; }
		
		/// <summary>
		/// The disk resource Uri from user view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userResourceId")]
		public string UserResourceId { get; set; }
	}
	
	/// <summary>
	/// Disk resource type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DiskResourceType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Undefined = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disk = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Snapshot = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RestorePoint = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ManagedBlob = 4,
	}
	
	/// <summary>
	/// Disk State.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DiskState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Undefined = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unattached = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Attached = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Reserved = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ActiveSAS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unknown = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		All = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Recommended = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OfflineMigration = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OnlineMigration = 9,
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
		/// Returns a list of disks.
		/// Disks_List subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="location">Location of the resource.</param>
		/// <param name="userSubscriptionId">User Subscription Id which the resource belongs to.</param>
		/// <param name="status">The parameters of disk state.</param>
		/// <param name="sharePath">The source share which the resource belongs to.</param>
		/// <param name="count">The maximum number of disks to return.</param>
		/// <param name="start">The start index of disks in query.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK -- The list of disks has been returned.</returns>
		public async Task<Disks_ListReturn> Disks_ListAsync(string subscriptionId, string location, string userSubscriptionId, string status, string sharePath, int count, int start, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Compute.Admin/locations/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/disks&userSubscriptionId=" + (userSubscriptionId==null? "" : System.Uri.EscapeDataString(userSubscriptionId))+"&status=" + (status==null? "" : System.Uri.EscapeDataString(status))+"&sharePath=" + (sharePath==null? "" : System.Uri.EscapeDataString(sharePath))+"&count="+count+"&start="+start+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Disks_ListReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the disk.
		/// Disks_Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks/{DiskId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="location">Location of the resource.</param>
		/// <param name="DiskId">The disk guid as identity.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK -- The disk has been returned.</returns>
		public async Task<Disks_GetReturn> Disks_GetAsync(string subscriptionId, string location, string DiskId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Compute.Admin/locations/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/disks/"+ (DiskId==null? "" : System.Uri.EscapeDataString(DiskId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Disks_GetReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class Disks_ListReturn
	{
		
		/// <summary>
		/// URI to the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of disks.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Disks_ListReturnValue[] Disks_ListReturnValue { get; set; }
	}
	
	public class Disks_ListReturnValue
	{
		
		/// <summary>
		/// Managed disk properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public Disks_ListReturnValueProperties Properties { get; set; }
	}
	
	public class Disks_ListReturnValueProperties
	{
		
		/// <summary>
		/// The actual size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actualSizeGB")]
		public System.Nullable<System.Int64> ActualSizeGB { get; set; }
		
		/// <summary>
		/// The disk id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskId")]
		public string DiskId { get; set; }
		
		/// <summary>
		/// Disk Sku.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskSku")]
		public AccountType DiskSku { get; set; }
		
		/// <summary>
		/// Disk resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskType")]
		public DiskPropertiesDiskType DiskType { get; set; }
		
		/// <summary>
		/// Compute resource Uri which owns this disk.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="managedBy")]
		public string ManagedBy { get; set; }
		
		/// <summary>
		/// The provision size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisionSizeGB")]
		public System.Nullable<System.Int64> ProvisionSizeGB { get; set; }
		
		/// <summary>
		/// The disk share path.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sharePath")]
		public string SharePath { get; set; }
		
		/// <summary>
		/// Disk State.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public DiskPropertiesStatus Status { get; set; }
		
		/// <summary>
		/// The disk resource Uri from user view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userResourceId")]
		public string UserResourceId { get; set; }
	}
	
	public class Disks_GetReturn
	{
		
		/// <summary>
		/// Managed disk properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public Disks_GetReturnProperties Properties { get; set; }
	}
	
	public class Disks_GetReturnProperties
	{
		
		/// <summary>
		/// The actual size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actualSizeGB")]
		public System.Nullable<System.Int64> ActualSizeGB { get; set; }
		
		/// <summary>
		/// The disk id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskId")]
		public string DiskId { get; set; }
		
		/// <summary>
		/// Disk Sku.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskSku")]
		public AccountType DiskSku { get; set; }
		
		/// <summary>
		/// Disk resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskType")]
		public DiskPropertiesDiskType DiskType { get; set; }
		
		/// <summary>
		/// Compute resource Uri which owns this disk.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="managedBy")]
		public string ManagedBy { get; set; }
		
		/// <summary>
		/// The provision size of disk in GB.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisionSizeGB")]
		public System.Nullable<System.Int64> ProvisionSizeGB { get; set; }
		
		/// <summary>
		/// The disk share path.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sharePath")]
		public string SharePath { get; set; }
		
		/// <summary>
		/// Disk State.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public DiskPropertiesStatus Status { get; set; }
		
		/// <summary>
		/// The disk resource Uri from user view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userResourceId")]
		public string UserResourceId { get; set; }
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
