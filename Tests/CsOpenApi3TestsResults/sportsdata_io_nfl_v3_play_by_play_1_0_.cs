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
	public class Play
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Distance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Down { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsScoringPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public PlayStat[] PlayStats { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PlayTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> QuarterID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string QuarterName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ScoringPlay ScoringPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Type { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YardLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string YardLineTerritory { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YardsGained { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YardsToEndZone { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayStat
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedTackles { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockedKickReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockedKickReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockedKickReturns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockedKicks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Direction { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ExtraPointsAttempted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ExtraPointsHadBlocked { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ExtraPointsMade { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalReturns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalsAttempted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalsHadBlocked { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalsMade { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FieldGoalsYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FumbleReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FumbleReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Fumbles { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FumblesForced { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FumblesLost { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FumblesRecovered { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeOrAway { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> InterceptionReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> InterceptionReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Interceptions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> KickReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> KickReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> KickReturns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> KickoffTouchbacks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> KickoffYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Kickoffs { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassesDefended { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingAttempts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingCompletions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingInterceptions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingSackYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingSacks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PassingYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Penalties { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenaltyYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayStatID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntReturnTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntReturnYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntReturns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntTouchbacks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Punts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PuntsHadBlocked { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ReceivingTargets { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ReceivingTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ReceivingYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Receptions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RushingAttempts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RushingTouchdowns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RushingYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> SackYards { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Sacks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Safeties { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SoloTackles { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TacklesForLoss { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TwoPointConversionAttempts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TwoPointConversionPasses { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TwoPointConversionReceptions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TwoPointConversionReturns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TwoPointConversionRuns { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayByPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Play[] Plays { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Quarter[] Quarters { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Score Score { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Quarter
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Number { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> QuarterID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoreID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Score
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Attendance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScoreOvertime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScoreQuarter1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScoreQuarter2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScoreQuarter3 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScoreQuarter4 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTimeouts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Canceled { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Channel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Closed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTimeUTC { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Distance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Down { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DownAndDistance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ForecastDescription { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ForecastTempHigh { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ForecastTempLow { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ForecastWindChill { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ForecastWindSpeed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameEndDateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameKey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GeoLat { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GeoLong { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalAwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalHomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Has1stQuarterStarted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Has2ndQuarterStarted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Has3rdQuarterStarted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Has4thQuarterStarted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> HasStarted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScoreOvertime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScoreQuarter1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScoreQuarter2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScoreQuarter3 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScoreQuarter4 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTimeouts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsInProgress { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsOver { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsOvertime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastUpdated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> NeutralVenue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OverPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OverUnder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PointSpread { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadAwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadHomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Possession { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Quarter { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string QuarterDescription { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string RedZone { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RefereeID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoreID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Stadium StadiumDetails { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StadiumID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string TimeRemaining { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UnderPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Week { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YardLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string YardLineTerritory { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ScoringPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameKey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PlayDescription { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Quarter { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoreID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoringPlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string TimeRemaining { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Week { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Stadium
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Capacity { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string City { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Country { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GeoLat { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GeoLong { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PlayingSurface { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StadiumID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string State { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Type { get; set; }
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
		/// PlayByPlay {format}/PlayByPlay/{season}/{week}/{hometeam}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season.
		///          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		///        </param>
		/// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		///          Example: <code>1</code>
		///        </param>
		/// <param name="hometeam">Abbreviation of the home team. Example: <code>WAS</code>.</param>
		public async Task<PlayByPlay> PlayByPlayAsync(PlayByPlayFormat format, string season, string week, string hometeam, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayByPlay/"+ (season==null? "" : System.Uri.EscapeDataString(season))+"/"+ (week==null? "" : System.Uri.EscapeDataString(week))+"/"+ (hometeam==null? "" : System.Uri.EscapeDataString(hometeam));
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
		/// PlayByPlayDelta {format}/PlayByPlayDelta/{season}/{week}/{minutes}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season.
		///          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		///        </param>
		/// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		///          Example: <code>1</code>
		///        </param>
		/// <param name="minutes">Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>
		///          <code>1</code> or <code>2</code>.
		///        </param>
		public async Task<PlayByPlay[]> PlayByPlayDeltaAsync(PlayByPlayFormat format, string season, string week, string minutes, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayByPlayDelta/"+ (season==null? "" : System.Uri.EscapeDataString(season))+"/"+ (week==null? "" : System.Uri.EscapeDataString(week))+"/"+ (minutes==null? "" : System.Uri.EscapeDataString(minutes));
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
		
		/// <summary>
		/// Play By Play Simulation
		/// Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.
		/// PlayByPlaySimulation {format}/SimulatedPlayByPlay/{numberofplays}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="numberofplays">The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.</param>
		public async Task<PlayByPlay[]> PlayByPlaySimulationAsync(PlayByPlayFormat format, string numberofplays, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/SimulatedPlayByPlay/"+ (numberofplays==null? "" : System.Uri.EscapeDataString(numberofplays));
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