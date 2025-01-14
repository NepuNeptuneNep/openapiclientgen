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
	/// Device resource represents an instance of enterprise managed device in the property.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1Device
	{
		
		/// <summary>
		/// Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Assignee details of the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parentRelations")]
		public GoogleHomeEnterpriseSdmV1ParentRelation[] ParentRelations { get; set; }
		
		/// <summary>
		/// Output only. Device traits.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="traits")]
		public System.Collections.Generic.Dictionary<string, object> Traits { get; set; }
		
		/// <summary>
		/// Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Represents device relationships, for instance, structure/room to which the device is assigned to.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ParentRelation
	{
		
		/// <summary>
		/// Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parent")]
		public string Parent { get; set; }
	}
	
	/// <summary>
	/// Request message for SmartDeviceManagementService.ExecuteDeviceCommand
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
	{
		
		/// <summary>
		/// The command name to execute, represented by the fully qualified protobuf message name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="command")]
		public string Command { get; set; }
		
		/// <summary>
		/// The command message to execute, represented as a Struct.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="params")]
		public System.Collections.Generic.Dictionary<string, object> Params { get; set; }
	}
	
	/// <summary>
	/// Response message for SmartDeviceManagementService.ExecuteDeviceCommand
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
	{
		
		/// <summary>
		/// The results of executing the command.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="results")]
		public System.Collections.Generic.Dictionary<string, object> Results { get; set; }
	}
	
	/// <summary>
	/// Response message for SmartDeviceManagementService.ListDevices
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ListDevicesResponse
	{
		
		/// <summary>
		/// The list of devices.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devices")]
		public GoogleHomeEnterpriseSdmV1Device[] Devices { get; set; }
	}
	
	/// <summary>
	/// Response message for SmartDeviceManagementService.ListRooms
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ListRoomsResponse
	{
		
		/// <summary>
		/// The list of rooms.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rooms")]
		public GoogleHomeEnterpriseSdmV1Room[] Rooms { get; set; }
	}
	
	/// <summary>
	/// Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1Room
	{
		
		/// <summary>
		/// Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Room traits.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="traits")]
		public System.Collections.Generic.Dictionary<string, object> Traits { get; set; }
	}
	
	/// <summary>
	/// Response message for SmartDeviceManagementService.ListStructures
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1ListStructuresResponse
	{
		
		/// <summary>
		/// The list of structures.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="structures")]
		public GoogleHomeEnterpriseSdmV1Structure[] Structures { get; set; }
	}
	
	/// <summary>
	/// Structure resource represents an instance of enterprise managed home or hotel room.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleHomeEnterpriseSdmV1Structure
	{
		
		/// <summary>
		/// Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Structure traits.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="traits")]
		public System.Collections.Generic.Dictionary<string, object> Traits { get; set; }
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
		/// Gets a room managed by the enterprise.
		/// Smartdevicemanagement_enterprises_structures_rooms_get v1/{name}
		/// </summary>
		/// <param name="name">The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleHomeEnterpriseSdmV1Room> Smartdevicemanagement_enterprises_structures_rooms_getAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
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
				return JsonSerializer.Deserialize<GoogleHomeEnterpriseSdmV1Room>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Executes a command to device managed by the enterprise.
		/// Smartdevicemanagement_enterprises_devices_executeCommand v1/{name}:executeCommand
		/// </summary>
		/// <param name="name">The name of the device requested. For example: "enterprises/XYZ/devices/123"</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse> Smartdevicemanagement_enterprises_devices_executeCommandAsync(string name, GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+":executeCommand";
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
				return JsonSerializer.Deserialize<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists devices managed by the enterprise.
		/// Smartdevicemanagement_enterprises_devices_list v1/{parent}/devices
		/// </summary>
		/// <param name="parent">The parent enterprise to list devices under. E.g. "enterprises/XYZ".</param>
		/// <param name="filter">Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleHomeEnterpriseSdmV1ListDevicesResponse> Smartdevicemanagement_enterprises_devices_listAsync(string parent, string filter, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/devices&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
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
				return JsonSerializer.Deserialize<GoogleHomeEnterpriseSdmV1ListDevicesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists rooms managed by the enterprise.
		/// Smartdevicemanagement_enterprises_structures_rooms_list v1/{parent}/rooms
		/// </summary>
		/// <param name="parent">The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleHomeEnterpriseSdmV1ListRoomsResponse> Smartdevicemanagement_enterprises_structures_rooms_listAsync(string parent, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rooms";
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
				return JsonSerializer.Deserialize<GoogleHomeEnterpriseSdmV1ListRoomsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists structures managed by the enterprise.
		/// Smartdevicemanagement_enterprises_structures_list v1/{parent}/structures
		/// </summary>
		/// <param name="parent">The parent enterprise to list structures under. E.g. "enterprises/XYZ".</param>
		/// <param name="filter">Optional filter to list structures.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleHomeEnterpriseSdmV1ListStructuresResponse> Smartdevicemanagement_enterprises_structures_listAsync(string parent, string filter, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/structures&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
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
				return JsonSerializer.Deserialize<GoogleHomeEnterpriseSdmV1ListStructuresResponse>(streamContent, jsonSerializerSettings);
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
