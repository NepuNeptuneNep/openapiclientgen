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
	/// Input definition for the ComputeFlightEmissions request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ComputeFlightEmissionsRequest
	{
		
		/// <summary>
		/// Required. Direct flights to return emission estimates for.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="flights")]
		public Flight[] Flights { get; set; }
	}
	
	/// <summary>
	/// All details related to a single request item for a direct flight emission estimates.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Flight
	{
		
		/// <summary>
		/// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="departureDate")]
		public Date DepartureDate { get; set; }
		
		/// <summary>
		/// Required. IATA airport code for flight destination, e.g. "JFK".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destination")]
		public string Destination { get; set; }
		
		/// <summary>
		/// Required. Flight number, e.g. 324.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="flightNumber")]
		public System.Nullable<System.Int32> FlightNumber { get; set; }
		
		/// <summary>
		/// Required. IATA carrier code, e.g. "AA".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operatingCarrierCode")]
		public string OperatingCarrierCode { get; set; }
		
		/// <summary>
		/// Required. IATA airport code for flight origin, e.g. "LHR".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="origin")]
		public string Origin { get; set; }
	}
	
	/// <summary>
	/// Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Date
	{
		
		/// <summary>
		/// Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public System.Nullable<System.Int32> Day { get; set; }
		
		/// <summary>
		/// Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="month")]
		public System.Nullable<System.Int32> Month { get; set; }
		
		/// <summary>
		/// Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="year")]
		public System.Nullable<System.Int32> Year { get; set; }
	}
	
	/// <summary>
	/// Output definition for the ComputeFlightEmissions response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ComputeFlightEmissionsResponse
	{
		
		/// <summary>
		/// List of flight legs with emission estimates.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="flightEmissions")]
		public FlightWithEmissions[] FlightEmissions { get; set; }
		
		/// <summary>
		/// Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="modelVersion")]
		public ModelVersion ModelVersion { get; set; }
	}
	
	/// <summary>
	/// Direct flight with emission estimates.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FlightWithEmissions
	{
		
		/// <summary>
		/// Grouped emissions per seating class results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="emissionsGramsPerPax")]
		public EmissionsGramsPerPax EmissionsGramsPerPax { get; set; }
		
		/// <summary>
		/// All details related to a single request item for a direct flight emission estimates.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="flight")]
		public Flight Flight { get; set; }
	}
	
	/// <summary>
	/// Grouped emissions per seating class results.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EmissionsGramsPerPax
	{
		
		/// <summary>
		/// Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="business")]
		public System.Nullable<System.Int32> Business { get; set; }
		
		/// <summary>
		/// Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="economy")]
		public System.Nullable<System.Int32> Economy { get; set; }
		
		/// <summary>
		/// Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="first")]
		public System.Nullable<System.Int32> First { get; set; }
		
		/// <summary>
		/// Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="premiumEconomy")]
		public System.Nullable<System.Int32> PremiumEconomy { get; set; }
	}
	
	/// <summary>
	/// Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ModelVersion
	{
		
		/// <summary>
		/// Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dated")]
		public string Dated { get; set; }
		
		/// <summary>
		/// Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="major")]
		public System.Nullable<System.Int32> Major { get; set; }
		
		/// <summary>
		/// Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="minor")]
		public System.Nullable<System.Int32> Minor { get; set; }
		
		/// <summary>
		/// Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="patch")]
		public System.Nullable<System.Int32> Patch { get; set; }
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
		/// Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
		/// Travelimpactmodel_flights_computeFlightEmissions v1/flights:computeFlightEmissions
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<ComputeFlightEmissionsResponse> Travelimpactmodel_flights_computeFlightEmissionsAsync(ComputeFlightEmissionsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/flights:computeFlightEmissions";
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
				return JsonSerializer.Deserialize<ComputeFlightEmissionsResponse>(streamContent, jsonSerializerSettings);
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