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
	
	
	public class DataSetList
	{
		
		public System.Nullable<System.Int32> Total { get; set; }
		
		public DataSetListApis[] DataSetListApis { get; set; }
	}
	
	public class DataSetListApis
	{
		
		/// <summary>
		/// To be used as a dataset parameter value
		/// </summary>
		public string ApiKey { get; set; }
		
		/// <summary>
		/// To be used as a version parameter value
		/// </summary>
		public string ApiVersionNumber { get; set; }
		
		/// <summary>
		/// The URL describing the dataset's fields
		/// </summary>
		public string ApiUrl { get; set; }
		
		/// <summary>
		/// A URL to the API console for each API
		/// </summary>
		public string ApiDocumentationUrl { get; set; }
	}
	
	public partial class MetadataClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MetadataClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// List available data sets
		/// ListDataSets 
		/// </summary>
		/// <returns>Returns a list of data sets</returns>
		public async Task<DataSetList> ListDataSetsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<DataSetList>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Provides the general information about the API and the list of fields that can be used to query the dataset.
		/// This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.
		/// ListSearchableFields {dataset}/{version}/fields
		/// </summary>
		/// <param name="dataset">Name of the dataset.</param>
		/// <param name="version">Version of the dataset.</param>
		/// <returns>The dataset API for the given version is found and it is accessible to consume.</returns>
		public async Task<string> ListSearchableFieldsAsync(string dataset, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (dataset==null? "" : System.Uri.EscapeDataString(dataset))+"/"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/fields";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				return jsonReader.ReadAsString();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public partial class SearchClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public SearchClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
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