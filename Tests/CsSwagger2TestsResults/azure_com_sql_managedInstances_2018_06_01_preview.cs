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
	/// An Azure SQL managed instance.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedInstance
	{
		
		/// <summary>
		/// Azure Active Directory identity configuration for a resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="identity")]
		public ManagedInstanceIdentity Identity { get; set; }
		
		/// <summary>
		/// The properties of a managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ManagedInstanceProperties Properties { get; set; }
		
		/// <summary>
		/// An ARM Resource SKU.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sku")]
		public ManagedInstanceSku Sku { get; set; }
	}
	
	public class ManagedInstanceIdentity
	{
		
		/// <summary>
		/// The Azure Active Directory principal id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="principalId")]
		public string PrincipalId { get; set; }
		
		/// <summary>
		/// The Azure Active Directory tenant id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantId")]
		public string TenantId { get; set; }
		
		/// <summary>
		/// The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<ManagedInstanceIdentityType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManagedInstanceIdentityType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SystemAssigned = 0,
	}
	
	/// <summary>
	/// The properties of a managed instance.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedInstanceProperties
	{
		
		/// <summary>
		/// Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="administratorLogin")]
		public string AdministratorLogin { get; set; }
		
		/// <summary>
		/// The administrator login password (required for managed instance creation).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="administratorLoginPassword")]
		public string AdministratorLoginPassword { get; set; }
		
		/// <summary>
		/// Collation of the managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="collation")]
		public string Collation { get; set; }
		
		/// <summary>
		/// The Dns Zone that the managed instance is in.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dnsZone")]
		public string DnsZone { get; set; }
		
		/// <summary>
		/// The resource id of another managed instance whose DNS zone this managed instance will share after creation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dnsZonePartner")]
		public string DnsZonePartner { get; set; }
		
		/// <summary>
		/// The fully qualified domain name of the managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullyQualifiedDomainName")]
		public string FullyQualifiedDomainName { get; set; }
		
		/// <summary>
		/// The Id of the instance pool this managed server belongs to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="instancePoolId")]
		public string InstancePoolId { get; set; }
		
		/// <summary>
		/// The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="licenseType")]
		public System.Nullable<ManagedInstancePropertiesLicenseType> LicenseType { get; set; }
		
		/// <summary>
		/// Specifies the mode of database creation.
		///
		///Default: Regular instance creation.
		///
		///Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="managedInstanceCreateMode")]
		public System.Nullable<ManagedInstancePropertiesManagedInstanceCreateMode> ManagedInstanceCreateMode { get; set; }
		
		/// <summary>
		/// Connection type used for connecting to the instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxyOverride")]
		public System.Nullable<ManagedInstancePropertiesProxyOverride> ProxyOverride { get; set; }
		
		/// <summary>
		/// Whether or not the public data endpoint is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicDataEndpointEnabled")]
		public System.Nullable<System.Boolean> PublicDataEndpointEnabled { get; set; }
		
		/// <summary>
		/// Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="restorePointInTime")]
		public System.Nullable<System.DateTimeOffset> RestorePointInTime { get; set; }
		
		/// <summary>
		/// The resource identifier of the source managed instance associated with create operation of this instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceManagedInstanceId")]
		public string SourceManagedInstanceId { get; set; }
		
		/// <summary>
		/// The state of the managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
		
		/// <summary>
		/// Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageSizeInGB")]
		public System.Nullable<System.Int32> StorageSizeInGB { get; set; }
		
		/// <summary>
		/// Subnet resource ID for the managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subnetId")]
		public string SubnetId { get; set; }
		
		/// <summary>
		/// Id of the timezone. Allowed values are timezones supported by Windows.
		///Windows keeps details on supported timezones, including the id, in registry under
		///KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
		///You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
		///List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
		///An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timezoneId")]
		public string TimezoneId { get; set; }
		
		/// <summary>
		/// The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="vCores")]
		public System.Nullable<System.Int32> VCores { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManagedInstancePropertiesLicenseType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LicenseIncluded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BasePrice = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManagedInstancePropertiesManagedInstanceCreateMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PointInTimeRestore = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManagedInstancePropertiesProxyOverride
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Proxy = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Redirect = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 2,
	}
	
	public class ManagedInstanceSku
	{
		
		/// <summary>
		/// Capacity of the particular SKU.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="capacity")]
		public System.Nullable<System.Int32> Capacity { get; set; }
		
		/// <summary>
		/// If the service has different generations of hardware, for the same SKU, then that can be captured here.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="family")]
		public string Family { get; set; }
		
		/// <summary>
		/// The name of the SKU, typically, a letter + Number code, e.g. P3.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Size of the particular SKU
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public string Size { get; set; }
		
		/// <summary>
		/// The tier or edition of the particular SKU, e.g. Basic, Premium.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tier")]
		public string Tier { get; set; }
	}
	
	/// <summary>
	/// A list of managed instances.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedInstanceListResult
	{
		
		/// <summary>
		/// Link to retrieve next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ManagedInstance[] Value { get; set; }
	}
	
	/// <summary>
	/// An update request for an Azure SQL Database managed instance.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedInstanceUpdate
	{
		
		/// <summary>
		/// The properties of a managed instance.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ManagedInstanceProperties Properties { get; set; }
		
		/// <summary>
		/// An ARM Resource SKU.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sku")]
		public ManagedInstanceUpdateSku Sku { get; set; }
		
		/// <summary>
		/// Resource tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
	}
	
	public class ManagedInstanceUpdateSku
	{
		
		/// <summary>
		/// Capacity of the particular SKU.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="capacity")]
		public System.Nullable<System.Int32> Capacity { get; set; }
		
		/// <summary>
		/// If the service has different generations of hardware, for the same SKU, then that can be captured here.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="family")]
		public string Family { get; set; }
		
		/// <summary>
		/// The name of the SKU, typically, a letter + Number code, e.g. P3.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Size of the particular SKU
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public string Size { get; set; }
		
		/// <summary>
		/// The tier or edition of the particular SKU, e.g. Basic, Premium.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tier")]
		public string Tier { get; set; }
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
		/// Gets a list of all managed instances in the subscription.
		/// ManagedInstances_List subscriptions/{subscriptionId}/providers/Microsoft.Sql/managedInstances
		/// </summary>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the list of managed instances.</returns>
		public async Task<ManagedInstanceListResult> ManagedInstances_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Sql/managedInstances&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstanceListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a list of all managed instances in an instance pool.
		/// ManagedInstances_ListByInstancePool subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/managedInstances
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="instancePoolName">The instance pool name.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the list of managed instances.</returns>
		public async Task<ManagedInstanceListResult> ManagedInstances_ListByInstancePoolAsync(string resourceGroupName, string instancePoolName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/instancePools/"+ (instancePoolName==null? "" : System.Uri.EscapeDataString(instancePoolName))+"/managedInstances&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstanceListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a list of managed instances in a resource group.
		/// ManagedInstances_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the list of managed instances.</returns>
		public async Task<ManagedInstanceListResult> ManagedInstances_ListByResourceGroupAsync(string resourceGroupName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstanceListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a managed instance.
		/// ManagedInstances_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the specified managed instance.</returns>
		public async Task<ManagedInstance> ManagedInstances_GetAsync(string resourceGroupName, string managedInstanceName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstance>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a managed instance.
		/// ManagedInstances_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The requested managed instance resource state.</param>
		/// <returns>Successfully updated the managed instance.</returns>
		public async Task<ManagedInstance> ManagedInstances_CreateOrUpdateAsync(string resourceGroupName, string managedInstanceName, string subscriptionId, string api_version, ManagedInstance requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstance>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a managed instance.
		/// ManagedInstances_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully deleted the managed instance.</returns>
		public async Task ManagedInstances_DeleteAsync(string resourceGroupName, string managedInstanceName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Updates a managed instance.
		/// ManagedInstances_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The requested managed instance resource state.</param>
		/// <returns>Successfully updated the managed instance.</returns>
		public async Task<ManagedInstance> ManagedInstances_UpdateAsync(string resourceGroupName, string managedInstanceName, string subscriptionId, string api_version, ManagedInstanceUpdate requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedInstance>(streamContent, jsonSerializerSettings);
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