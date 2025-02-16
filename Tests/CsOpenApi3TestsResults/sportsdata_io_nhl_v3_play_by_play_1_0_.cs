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
	public class Game
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Attendance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Channel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTimeUTC { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameEndDateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalAwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalHomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsClosed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> NeutralVenue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OverPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OverUnder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Period { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Period[] Periods { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PointSpread { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadAwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadHomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Series SeriesInfo { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StadiumID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UnderPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Period
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Penalty[] Penalties { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ScoringPlay[] ScoringPlays { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Penalty
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BenchPenaltyServedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DrawnByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DrawnByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsBenchPenalty { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenalizedPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenalizedTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenaltyID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenaltyMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ScoringPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AllowedByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedByPlayerID1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedByPlayerID2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> EmptyNet { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> PowerPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoredByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoredByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoringPlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> ShortHanded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Play
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Category { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ClockMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ClockSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FirstAssistedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpposingPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PeriodName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PowerPlayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PowerPlayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SecondAssistedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Type { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayByPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Game Game { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Play[] Plays { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Series
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxLength { get; set; }
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
		/// Play By Play
		/// PlayByPlay {format}/PlayByPlay/{gameid}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="gameid">The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code></param>
		public async Task<PlayByPlay> PlayByPlayAsync(PlayByPlayFormat format, string gameid, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayByPlay/"+ (gameid==null? "" : System.Uri.EscapeDataString(gameid));
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
				return JsonSerializer.Deserialize<PlayByPlay>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Play By Play Delta
		/// PlayByPlayDelta {format}/PlayByPlayDelta/{date}/{minutes}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
		/// <param name="minutes">Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		///<code>1</code>, <code>2</code> ... <code>all</code>.</param>
		public async Task<PlayByPlay[]> PlayByPlayDeltaAsync(PlayByPlayFormat format, string date, string minutes, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayByPlayDelta/"+ (date==null? "" : System.Uri.EscapeDataString(date))+"/"+ (minutes==null? "" : System.Uri.EscapeDataString(minutes));
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
				return JsonSerializer.Deserialize<PlayByPlay[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum PlayByPlayFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		XML = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JSON = 1,
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
