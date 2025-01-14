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
	/// Azure Data Factory nested object which contains a flow with data movements and transformations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataFlow
	{
		
		/// <summary>
		/// List of tags that can be used for describing the data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="annotations")]
		public string[] Annotations { get; set; }
		
		/// <summary>
		/// The description of the data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The folder that this data flow is in. If not specified, Data flow will appear at the root level.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="folder")]
		public DataFlowFolder Folder { get; set; }
		
		/// <summary>
		/// Type of data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	public class DataFlowFolder
	{
		
		/// <summary>
		/// The name of the folder that this data flow is in.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Transformation for data flow sink.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataFlowSink : Transformation
	{
		
		/// <summary>
		/// Dataset reference type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataset")]
		public object Dataset { get; set; }
	}
	
	/// <summary>
	/// Transformation for data flow source.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataFlowSource : Transformation
	{
		
		/// <summary>
		/// Dataset reference type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataset")]
		public object Dataset { get; set; }
	}
	
	/// <summary>
	/// Mapping data flow.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MappingDataFlow
	{
		
		/// <summary>
		/// Mapping data flow type properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="typeProperties")]
		public MappingDataFlowTypeProperties TypeProperties { get; set; }
	}
	
	/// <summary>
	/// Mapping data flow type properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class MappingDataFlowTypeProperties
	{
		
		/// <summary>
		/// DataFlow script.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="script")]
		public string Script { get; set; }
		
		/// <summary>
		/// List of sinks in data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sinks")]
		public DataFlowSink[] Sinks { get; set; }
		
		/// <summary>
		/// List of sources in data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sources")]
		public DataFlowSource[] Sources { get; set; }
		
		/// <summary>
		/// List of transformations in data flow.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="transformations")]
		public Transformation[] Transformations { get; set; }
	}
	
	/// <summary>
	/// A data flow transformation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Transformation
	{
		
		/// <summary>
		/// Transformation description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Transformation name.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
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
