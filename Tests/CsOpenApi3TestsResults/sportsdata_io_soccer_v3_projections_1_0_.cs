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
	public class DfsSlate
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> CompetitionId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DfsSlateGame[] DfsSlateGames { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DfsSlatePlayer[] DfsSlatePlayers { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsMultiDaySlate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> NumberOfGames { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Operator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorDay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorGameType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorSlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorStartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SalaryCap { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] SlateRosterSlots { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DfsSlateGame
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Game Game { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DfsSlatePlayer
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPlayerName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] OperatorRosterSlots { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorSlatePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerGameProjectionStatID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlatePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Game
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Attendance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeamCountryCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeamFormation { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeamKey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeamName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamPointSpreadPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScoreExtraTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScorePenalty { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScorePeriod1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScorePeriod2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Clock { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ClockDisplay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ClockExtra { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DrawMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalAwayTeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalHomeTeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Group { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeamCountryCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeamFormation { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeamKey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeamName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamPointSpreadPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScoreExtraTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScorePenalty { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScorePeriod1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScorePeriod2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsClosed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OverPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OverUnder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Period { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public PlayoffAggregateScore PlayoffAggregateScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PointSpread { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RoundId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UnderPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UpdatedUtc { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> VenueId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string VenueType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Week { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Winner { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Player
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthCity { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthCountry { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string CommonName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DraftKingsPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FirstName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Foot { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Gender { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Height { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryBodyPart { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryNotes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStartDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStatus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Jersey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Nationality { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PhotoUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Position { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PositionCategory { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RotoWirePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ShortName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotNoBackgroundUpdated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotNoBackgroundUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotUpdated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UsaTodayPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Weight { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayerGameProjection
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Assists { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> BlockedShots { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Captain { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> CornersWon { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Crosses { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> DefenderCleanSheets { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DraftKingsPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DraftKingsSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FanDuelPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FanDuelSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPoints { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsDraftKings { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsFanDuel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsMondogoal { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsYahoo { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Fouled { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Fouls { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Games { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalOpponentId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalTeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoalkeeperCleanSheets { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoalkeeperGoalsAgainst { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoalkeeperSaves { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoalkeeperSingleGoalAgainst { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoalkeeperWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Goals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeOrAway { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryBodyPart { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryNotes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStartDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStatus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Interceptions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsGameOver { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Jersey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> LastManTackle { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Minutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string MondogoalPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MondogoalSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Offsides { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OpponentScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OwnGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Passes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PassesCompleted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltiesConceded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltiesWon { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltyKickGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltyKickMisses { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltyKickSaves { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Position { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PositionCategory { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> RedCards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RoundId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Score { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ShortName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Shots { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> ShotsOnGoal { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Started { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StatId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Suspension { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string SuspensionReason { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Tackles { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> TacklesWon { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Touches { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UpdatedUtc { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string YahooPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YahooSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> YellowCards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> YellowRedCards { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayoffAggregateScore
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamA_AggregateScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamA_Id { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamB_AggregateScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamB_Id { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> WinningTeamId { get; set; }
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
		/// Dfs Slates By Date
		/// DfsSlatesByDate {format}/DfsSlatesByDate/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2020-02-18</code>
		///</param>
		public async Task<DfsSlate[]> DfsSlatesByDateAsync(DfsSlatesByDateFormat format, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/DfsSlatesByDate/"+ (date==null? "" : System.Uri.EscapeDataString(date));
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
				return JsonSerializer.Deserialize<DfsSlate[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Injured Players By Competition
		/// This endpoint provides all currently injured soccer players by competition, along with injury details.
		/// InjuredPlayersByCompetition {format}/InjuredPlayers/{competition}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
		public async Task<Player[]> InjuredPlayersByCompetitionAsync(InjuredPlayersByCompetitionFormat format, string competition, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/InjuredPlayers/"+ (competition==null? "" : System.Uri.EscapeDataString(competition));
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
				return JsonSerializer.Deserialize<Player[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Projected Player Game Stats by Competition (w/ DFS Salaries)
		/// ProjectedPlayerGameStatsByCompetitionWDfsSalaries {format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
		public async Task<PlayerGameProjection[]> ProjectedPlayerGameStatsByCompetitionWDfsSalariesAsync(InjuredPlayersByCompetitionFormat format, string competition, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayerGameProjectionStatsByCompetition/"+ (competition==null? "" : System.Uri.EscapeDataString(competition))+"/"+ (date==null? "" : System.Uri.EscapeDataString(date));
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
				return JsonSerializer.Deserialize<PlayerGameProjection[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Projected Player Game Stats by Date (w/ DFS Salaries)
		/// ProjectedPlayerGameStatsByDateWDfsSalaries {format}/PlayerGameProjectionStatsByDate/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
		public async Task<PlayerGameProjection[]> ProjectedPlayerGameStatsByDateWDfsSalariesAsync(InjuredPlayersByCompetitionFormat format, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayerGameProjectionStatsByDate/"+ (date==null? "" : System.Uri.EscapeDataString(date));
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
				return JsonSerializer.Deserialize<PlayerGameProjection[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Projected Player Game Stats by Player (w/ DFS Salaries)
		/// ProjectedPlayerGameStatsByPlayerWDfsSalaries {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
		/// <param name="playerid">Unique FantasyData Player ID.
		///Example:<code>90026231</code>.</param>
		public async Task<PlayerGameProjection[]> ProjectedPlayerGameStatsByPlayerWDfsSalariesAsync(InjuredPlayersByCompetitionFormat format, string date, string playerid, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayerGameProjectionStatsByPlayer/"+ (date==null? "" : System.Uri.EscapeDataString(date))+"/"+ (playerid==null? "" : System.Uri.EscapeDataString(playerid));
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
				return JsonSerializer.Deserialize<PlayerGameProjection[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Upcoming Dfs Slates By Competition
		/// UpcomingDfsSlatesByCompetition {format}/UpcomingDfsSlatesByCompetition/{competitionId}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="competitionId">The Competition Id.
		///<br>Examples: <code>3</code></param>
		public async Task<DfsSlate[]> UpcomingDfsSlatesByCompetitionAsync(DfsSlatesByDateFormat format, string competitionId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/UpcomingDfsSlatesByCompetition/"+ (competitionId==null? "" : System.Uri.EscapeDataString(competitionId));
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
				return JsonSerializer.Deserialize<DfsSlate[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum DfsSlatesByDateFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		json = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		xml = 1,
	}
	
	public enum InjuredPlayersByCompetitionFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		xml = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		json = 1,
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