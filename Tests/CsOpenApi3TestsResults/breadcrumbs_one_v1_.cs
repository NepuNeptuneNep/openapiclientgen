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
	public class BreadcrumbsAPIModelsAddressAddressResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsAddressAddressRiskResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="entity_tags")]
		public string[] Entity_tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="risk_score")]
		public string Risk_score { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsAddressExposureResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="entity_attributes")]
		public string[] Entity_attributes { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hop")]
		public System.Nullable<System.Int32> Hop { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsAddressRiskExposureResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="closest_incoming_exposure")]
		public BreadcrumbsAPIModelsAddressExposureResponse Closest_incoming_exposure { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="closest_outgoing_exposure")]
		public BreadcrumbsAPIModelsAddressExposureResponse Closest_outgoing_exposure { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="entity_tags")]
		public string[] Entity_tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="risk_score")]
		public string Risk_score { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsNodeNodeRequest
	{
		
		/// <summary>
		/// Blockchain address
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="address")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Address { get; set; }
		
		/// <summary>
		/// Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DefaultValue(BreadcrumbsAPIModelsNodeNodeRequestChain.ETH)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="chain")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public BreadcrumbsAPIModelsNodeNodeRequestChain Chain { get; set; } = BreadcrumbsAPIModelsNodeNodeRequestChain.ETH;
		
		/// <summary>
		/// If set, will only show transactions from this token
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="token_address")]
		public string Token_address { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BreadcrumbsAPIModelsNodeNodeRequestChain
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ETH = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BTC = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MATIC = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RON = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SOL = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TRX = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsNodeNodeResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="entity_tags")]
		public string[] Entity_tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="incoming")]
		public BreadcrumbsAPIModelsAddressAddressResponse[] Incoming { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="outgoing")]
		public BreadcrumbsAPIModelsAddressAddressResponse[] Outgoing { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsPathfinderPathfinderRequest
	{
		
		/// <summary>
		/// Blockchain eg: ETH, BTC, SOL
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DefaultValue(BreadcrumbsAPIModelsPathfinderPathfinderRequestChain.ETH)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="chain")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public BreadcrumbsAPIModelsPathfinderPathfinderRequestChain Chain { get; set; } = BreadcrumbsAPIModelsPathfinderPathfinderRequestChain.ETH;
		
		/// <summary>
		/// Required if search_type is either Shortest/Multiple Path.
		///If you know where did the money went or come from.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destination_addresses")]
		public string[] Destination_addresses { get; set; }
		
		/// <summary>
		/// Direction type is what direction it should go. Accepts: 0 = Incoming and 1 = Outgoing only
		/// Required
		/// </summary>
		[System.ComponentModel.DefaultValue(BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type.Incoming)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="direction_type")]
		public BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type Direction_type { get; set; } = BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type.Incoming;
		
		/// <summary>
		/// Required if search_type is Closest Entity.
		///Available values are: Exchange, DEX, Mining, ICO, Mixer
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="entity_tags")]
		public string[] Entity_tags { get; set; }
		
		/// <summary>
		/// Search type values: 1 = Shortest Path, 2 = Multiple Path, 3 = Closest Entity and 4 = Closest Illicit
		/// Required
		/// </summary>
		[System.ComponentModel.DefaultValue(BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type.ShortestPath)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="search_type")]
		public BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type Search_type { get; set; } = BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type.ShortestPath;
		
		/// <summary>
		/// Source address is where you want to start your search
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="source_address")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Source_address { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BreadcrumbsAPIModelsPathfinderPathfinderRequestChain
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ETH = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BTC = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SOL = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Incoming = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Outgoing = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ShortestPath = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MultiplePath = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ClosestEntity = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ClosestIllicit = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsPathfinderPathfinderResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="path_found")]
		public System.Nullable<System.Boolean> Path_found { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="result_hops")]
		public System.Nullable<System.Int32> Result_hops { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="result_paths")]
		public string[] Result_paths { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsSanctionSanctionedRequest
	{
		
		/// <summary>
		/// Blockchain address
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="address")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Address { get; set; }
		
		/// <summary>
		/// Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DefaultValue(BreadcrumbsAPIModelsNodeNodeRequestChain.ETH)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="chain")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public BreadcrumbsAPIModelsNodeNodeRequestChain Chain { get; set; } = BreadcrumbsAPIModelsNodeNodeRequestChain.ETH;
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsSanctionSanctionedResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="chain")]
		public BreadcrumbsAPIModelsNodeNodeRequestChain Chain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isSanctioned")]
		public System.Nullable<System.Boolean> IsSanctioned { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsAPIModelsTransactionRiskResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="addresses")]
		public BreadcrumbsAPIModelsAddressAddressRiskResponse[] Addresses { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsResponseUnauthorizedResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<System.Int32> Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BreadcrumbsResponseUnprocessableResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<System.Int32> Status { get; set; }
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
		/// Shows the incoming and outgoing transactions from blockchain address
		/// NodePost node
		/// </summary>
		/// <returns>Success</returns>
		public async Task<BreadcrumbsAPIModelsNodeNodeResponse> NodePostAsync(BreadcrumbsAPIModelsNodeNodeRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "node";
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
				return JsonSerializer.Deserialize<BreadcrumbsAPIModelsNodeNodeResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Automatically find path between crypto addresses
		/// PathfinderPost pathfinder
		/// </summary>
		/// <returns>Success</returns>
		public async Task<BreadcrumbsAPIModelsPathfinderPathfinderResponse> PathfinderPostAsync(BreadcrumbsAPIModelsPathfinderPathfinderRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pathfinder";
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
				return JsonSerializer.Deserialize<BreadcrumbsAPIModelsPathfinderPathfinderResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Will check the risk score for single address
		/// RiskGetByChainAndAddressAndInclude_exposure risk/address
		/// </summary>
		/// <param name="chain">Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX</param>
		/// <param name="address">Blockchain address</param>
		/// <param name="include_exposure">If set to `true`, will search the one nearest illicit address (incoming and outgoing) from the specified address</param>
		/// <returns>Success</returns>
		public async Task<BreadcrumbsAPIModelsAddressRiskExposureResponse> RiskGetByChainAndAddressAndInclude_exposureAsync(BreadcrumbsAPIModelsNodeNodeRequestChain chain, string address, bool include_exposure, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "risk/address?chain=" + chain+"&address=" + (address==null? "" : System.Uri.EscapeDataString(address))+"&include_exposure="+include_exposure;
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
				return JsonSerializer.Deserialize<BreadcrumbsAPIModelsAddressRiskExposureResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Will check the risk score for every addresses in a transaction
		/// RiskGetByChainAndHash risk/transaction
		/// </summary>
		/// <param name="chain">Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX</param>
		/// <param name="hash">Blockchain hash</param>
		/// <returns>Success</returns>
		public async Task<BreadcrumbsAPIModelsTransactionRiskResponse> RiskGetByChainAndHashAsync(BreadcrumbsAPIModelsNodeNodeRequestChain chain, string hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "risk/transaction?chain=" + chain+"&hash=" + (hash==null? "" : System.Uri.EscapeDataString(hash));
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
				return JsonSerializer.Deserialize<BreadcrumbsAPIModelsTransactionRiskResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Verify if the addresses provided are in our sanctioned lists
		/// SanctionPost sanctioned_address
		/// </summary>
		/// <returns>Success</returns>
		public async Task<BreadcrumbsAPIModelsSanctionSanctionedResponse> SanctionPostAsync(BreadcrumbsAPIModelsSanctionSanctionedRequest[] requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "sanctioned_address";
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
				return JsonSerializer.Deserialize<BreadcrumbsAPIModelsSanctionSanctionedResponse>(streamContent, jsonSerializerSettings);
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
