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
	public class CalculateItineraryProgramResult
	{
		
		/// <summary>
		/// Two-letter IATA carrier codes that are associated with the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="airlines")]
		public string[] Airlines { get; set; }
		
		/// <summary>
		/// Unique identifier for the frequent flyer program. See <code>Programs</code> API.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Frequent flyer program name. See <code>Programs</code> API.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Indicates that the itinerary includes revenue-based miles earnings.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="revenueBased")]
		public System.Nullable<System.Boolean> RevenueBased { get; set; }
		
		/// <summary>
		/// Indicates that the itinerary may be missing miles due to unpublished earning rates from the program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unpublished")]
		public System.Nullable<System.Boolean> Unpublished { get; set; }
		
		/// <summary>
		/// Total redeemable miles or points earned for the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Int32> Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CalculateItineraryResult
	{
		
		/// <summary>
		/// Unique identifier provided for this itinerary.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Total miles earned for each frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="totals")]
		public CalculateItineraryProgramResult[] Totals { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CalculateResult
	{
		
		/// <summary>
		/// Error message if the API call was not successful.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorMessage")]
		public string ErrorMessage { get; set; }
		
		/// <summary>
		/// Indicates whether the API call was successful.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public CalculateItineraryResult Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Itinerary
	{
		
		/// <summary>
		/// Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="baseFareUSD")]
		public System.Nullable<System.Double> BaseFareUSD { get; set; }
		
		/// <summary>
		/// Unique identifier for this itinerary that will be passed back to help correlate a result.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Every flight transfer or stopover should be considered a separate segment.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="segments")]
		public Segment[] Segments { get; set; }
		
		/// <summary>
		/// Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ticketingCarrier")]
		public string TicketingCarrier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Segment
	{
		
		/// <summary>
		/// Single-letter booking class used to determine the earning rate for the flight segment.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="bookingClass")]
		public string BookingClass { get; set; }
		
		/// <summary>
		/// Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.
		///NOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="carrier")]
		public string Carrier { get; set; }
		
		/// <summary>
		/// The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="departure")]
		public System.Nullable<System.DateTimeOffset> Departure { get; set; }
		
		/// <summary>
		/// Three-letter IATA airport code to which the flight is going.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="destination")]
		public string Destination { get; set; }
		
		/// <summary>
		/// The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="distance")]
		public System.Nullable<System.Double> Distance { get; set; }
		
		/// <summary>
		/// The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="flightNumber")]
		public System.Nullable<System.Int32> FlightNumber { get; set; }
		
		/// <summary>
		/// Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operatingCarrier")]
		public string OperatingCarrier { get; set; }
		
		/// <summary>
		/// Three-letter IATA airport code from which the flight will depart.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="origin")]
		public string Origin { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Program
	{
		
		/// <summary>
		/// Two-letter IATA carrier codes that are associated with the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="airlines")]
		public string[] Airlines { get; set; }
		
		/// <summary>
		/// Name of the unit of a mile or point.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="denomination")]
		public string Denomination { get; set; }
		
		/// <summary>
		/// Full name of the frequent flyer program including the airline, if applicable.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullName")]
		public string FullName { get; set; }
		
		/// <summary>
		/// Unique identifier for the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Name of the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="programName")]
		public string ProgramName { get; set; }
		
		/// <summary>
		/// Name of each tier level for the frequent flyer program.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tierNames")]
		public string[] TierNames { get; set; }
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
		/// Calculates the number of miles earned for every frequent flyer program.
		/// CalculatePost api/1.0/calculate
		/// </summary>
		/// <param name="requestBody">Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.</param>
		/// <returns>Success.  However individual <code>CalculateResults</code> in the response could have failed.</returns>
		public async Task<CalculateResult[]> CalculatePostAsync(Itinerary[] requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/1.0/calculate";
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
				return JsonSerializer.Deserialize<CalculateResult[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists all supported frequent flyer programs.
		/// ProgramsGet api/1.0/programs
		/// </summary>
		/// <returns>Success</returns>
		public async Task<Program[]> ProgramsGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/1.0/programs";
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
				return JsonSerializer.Deserialize<Program[]>(streamContent, jsonSerializerSettings);
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