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
	/// Export database parameters.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExportRequest
	{
		
		/// <summary>
		/// The name of the SQL administrator.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="administratorLogin")]
		public string AdministratorLogin { get; set; }
		
		/// <summary>
		/// The password of the SQL administrator.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="administratorLoginPassword")]
		public string AdministratorLoginPassword { get; set; }
		
		/// <summary>
		/// The authentication type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="authenticationType")]
		public System.Nullable<ExportRequestAuthenticationType> AuthenticationType { get; set; }
		
		/// <summary>
		/// The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?."
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="storageKey")]
		public string StorageKey { get; set; }
		
		/// <summary>
		/// The type of the storage key to use.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="storageKeyType")]
		public ExportRequestStorageKeyType StorageKeyType { get; set; }
		
		/// <summary>
		/// The storage uri to use.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="storageUri")]
		public string StorageUri { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ExportRequestAuthenticationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SQL = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ADPassword = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ExportRequestStorageKeyType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		StorageAccessKey = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SharedAccessKey = 1,
	}
	
	public class ImportExportResponse
	{
	}
	
	/// <summary>
	/// Response for Import/Export Status operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ImportExportResponseProperties
	{
		
		/// <summary>
		/// The blob uri.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="blobUri")]
		public string BlobUri { get; set; }
		
		/// <summary>
		/// The name of the database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="databaseName")]
		public string DatabaseName { get; set; }
		
		/// <summary>
		/// The error message returned from the server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorMessage")]
		public string ErrorMessage { get; set; }
		
		/// <summary>
		/// The operation status last modified time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public string LastModifiedTime { get; set; }
		
		/// <summary>
		/// The operation queued time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="queuedTime")]
		public string QueuedTime { get; set; }
		
		/// <summary>
		/// The request type of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// The request type of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requestType")]
		public string RequestType { get; set; }
		
		/// <summary>
		/// The name of the server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serverName")]
		public string ServerName { get; set; }
		
		/// <summary>
		/// The status message returned from the server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	/// <summary>
	/// Represents the properties for an import operation
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ImportExtensionProperties : ExportRequest
	{
		
		/// <summary>
		/// The type of import operation being performed. This is always Import.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operationMode")]
		public ImportExtensionPropertiesOperationMode OperationMode { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ImportExtensionPropertiesOperationMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Import = 0,
	}
	
	/// <summary>
	/// Import database parameters.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ImportExtensionRequest
	{
		
		/// <summary>
		/// The name of the extension.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Represents the properties for an import operation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ImportExtensionProperties Properties { get; set; }
		
		/// <summary>
		/// The type of the extension.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Import database parameters.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ImportRequest : ExportRequest
	{
		
		/// <summary>
		/// The name of the database to import.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="databaseName")]
		public string DatabaseName { get; set; }
		
		/// <summary>
		/// The edition for the database being created.
		///
		///The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
		///
		///```azurecli
		///az sql db list-editions -l <location> -o table
		///````
		///
		///```powershell
		///Get-AzSqlServerServiceObjective -Location <location>
		///````
		///
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="edition")]
		public ImportRequestEdition Edition { get; set; }
		
		/// <summary>
		/// The maximum size for the newly imported database.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="maxSizeBytes")]
		public string MaxSizeBytes { get; set; }
		
		/// <summary>
		/// The name of the service objective to assign to the database.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="serviceObjectiveName")]
		public ImportRequestServiceObjectiveName ServiceObjectiveName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ImportRequestEdition
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Web = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Business = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basic = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Premium = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PremiumRS = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Free = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Stretch = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DataWarehouse = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="System")]
		_System = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System2 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GeneralPurpose = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BusinessCritical = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hyperscale = 13,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ImportRequestServiceObjectiveName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="System")]
		_System = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System0 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System1 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System2 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System3 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System4 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System2L = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System3L = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		System4L = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Free = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basic = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S0 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S1 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S2 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S3 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S4 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S6 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S7 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S9 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S12 = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P1 = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P2 = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P3 = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P4 = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P6 = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P11 = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P15 = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PRS1 = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PRS2 = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PRS4 = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PRS6 = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW100 = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW200 = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW300 = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW400 = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW500 = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW600 = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW1000 = 37,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW1200 = 38,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW1000c = 39,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW1500 = 40,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW1500c = 41,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW2000 = 42,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW2000c = 43,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW3000 = 44,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW2500c = 45,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW3000c = 46,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW6000 = 47,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW5000c = 48,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW6000c = 49,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW7500c = 50,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW10000c = 51,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW15000c = 52,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DW30000c = 53,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS100 = 54,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS200 = 55,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS300 = 56,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS400 = 57,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS500 = 58,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS600 = 59,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS1000 = 60,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS1200 = 61,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS1500 = 62,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DS2000 = 63,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ElasticPool = 64,
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
		/// Exports a database to a bacpac.
		/// Databases_Export subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/export
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database to be exported.</param>
		/// <param name="requestBody">The required parameters for exporting a database.</param>
		/// <returns>OK</returns>
		public async Task<ImportExportResponse> Databases_ExportAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, ExportRequest requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/export?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ImportExportResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.
		/// Databases_CreateImportOperation subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName}
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="databaseName">The name of the database to import into</param>
		/// <param name="extensionName">The name of the operation to perform</param>
		/// <param name="requestBody">The required parameters for importing a Bacpac into a database.</param>
		public async Task Databases_CreateImportOperationAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, string databaseName, Databases_CreateImportOperationExtensionName extensionName, ImportExtensionRequest requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/extensions/"+extensionName+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
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
		/// Imports a bacpac into a new database.
		/// Databases_Import subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/import
		/// </summary>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="requestBody">The required parameters for importing a Bacpac into a database.</param>
		/// <returns>OK</returns>
		public async Task<ImportExportResponse> Databases_ImportAsync(string api_version, string subscriptionId, string resourceGroupName, string serverName, ImportRequest requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/import?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ImportExportResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Databases_CreateImportOperationExtensionName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		import = 0,
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