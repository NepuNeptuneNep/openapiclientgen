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
	/// The properties of the create Advanced Schedule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedSchedule
	{
		
		/// <summary>
		/// Days of the month that the job should execute on. Must be between 1 and 31.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthDays")]
		public int[] MonthDays { get; set; }
		
		/// <summary>
		/// Occurrences of days within a month.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthlyOccurrences")]
		public AdvancedScheduleMonthlyOccurrence[] MonthlyOccurrences { get; set; }
		
		/// <summary>
		/// Days of the week that the job should execute on.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="weekDays")]
		public string[] WeekDays { get; set; }
	}
	
	/// <summary>
	/// The properties of the create advanced schedule monthly occurrence.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedScheduleMonthlyOccurrence
	{
		
		/// <summary>
		/// Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public System.Nullable<AdvancedScheduleMonthlyOccurrenceDay> Day { get; set; }
		
		/// <summary>
		/// Occurrence of the week within the month. Must be between 1 and 5
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="occurrence")]
		public System.Nullable<System.Int32> Occurrence { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AdvancedScheduleMonthlyOccurrenceDay
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Monday = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tuesday = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Wednesday = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Thursday = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Friday = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Saturday = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sunday = 6,
	}
	
	/// <summary>
	/// Azure query for the update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureQueryProperties
	{
		
		/// <summary>
		/// List of locations to scope the query to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="locations")]
		public string[] Locations { get; set; }
		
		/// <summary>
		/// List of Subscription or Resource Group ARM Ids.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="scope")]
		public string[] Scope { get; set; }
		
		/// <summary>
		/// Tag filter information for the VM.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tagSettings")]
		public TagSettingsProperties TagSettings { get; set; }
	}
	
	/// <summary>
	/// Tag filter information for the VM.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TagSettingsProperties
	{
		
		/// <summary>
		/// Filter VMs by Any or All specified tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="filterOperator")]
		public System.Nullable<TagSettingsPropertiesFilterOperator> FilterOperator { get; set; }
		
		/// <summary>
		/// Dictionary of tags with its list of values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string[]> Tags { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum TagSettingsPropertiesFilterOperator
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		All = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Any = 1,
	}
	
	/// <summary>
	/// Linux specific update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinuxProperties
	{
		
		/// <summary>
		/// packages excluded from the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="excludedPackageNameMasks")]
		public string[] ExcludedPackageNameMasks { get; set; }
		
		/// <summary>
		/// Update classifications included in the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includedPackageClassifications")]
		public System.Nullable<LinuxPropertiesIncludedPackageClassifications> IncludedPackageClassifications { get; set; }
		
		/// <summary>
		/// packages included from the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includedPackageNameMasks")]
		public string[] IncludedPackageNameMasks { get; set; }
		
		/// <summary>
		/// Reboot setting for the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rebootSetting")]
		public string RebootSetting { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum LinuxPropertiesIncludedPackageClassifications
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unclassified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Critical = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Security = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 3,
	}
	
	/// <summary>
	/// Non Azure query for the update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class NonAzureQueryProperties
	{
		
		/// <summary>
		/// Log Analytics Saved Search name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="functionAlias")]
		public string FunctionAlias { get; set; }
		
		/// <summary>
		/// Workspace Id for Log Analytics in which the saved Search is resided.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="workspaceId")]
		public string WorkspaceId { get; set; }
	}
	
	/// <summary>
	/// Definition of schedule parameters.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleProperties
	{
		
		/// <summary>
		/// The properties of the create Advanced Schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="advancedSchedule")]
		public AdvancedSchedule AdvancedSchedule { get; set; }
		
		/// <summary>
		/// Gets or sets the creation time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets the end time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expiryTime")]
		public System.Nullable<System.DateTimeOffset> ExpiryTime { get; set; }
		
		/// <summary>
		/// Gets or sets the expiry time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expiryTimeOffsetMinutes")]
		public System.Nullable<System.Double> ExpiryTimeOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the frequency of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		public System.Nullable<SchedulePropertiesFrequency> Frequency { get; set; }
		
		/// <summary>
		/// Gets or sets the interval of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="interval")]
		public System.Nullable<System.Int32> Interval { get; set; }
		
		/// <summary>
		/// Gets or sets a value indicating whether this schedule is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isEnabled")]
		public System.Nullable<System.Boolean> IsEnabled { get; set; }
		
		/// <summary>
		/// Gets or sets the last modified time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public System.Nullable<System.DateTimeOffset> LastModifiedTime { get; set; }
		
		/// <summary>
		/// Gets or sets the next run time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextRun")]
		public System.Nullable<System.DateTimeOffset> NextRun { get; set; }
		
		/// <summary>
		/// Gets or sets the next run time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextRunOffsetMinutes")]
		public System.Nullable<System.Double> NextRunOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the start time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// Gets the start time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTimeOffsetMinutes")]
		public System.Nullable<System.Double> StartTimeOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the time zone of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeZone")]
		public string TimeZone { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SchedulePropertiesFrequency
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneTime = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Day = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hour = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Week = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Month = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minute = 5,
	}
	
	/// <summary>
	/// Group specific to the update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TargetProperties
	{
		
		/// <summary>
		/// List of Azure queries in the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="azureQueries")]
		public AzureQueryProperties[] AzureQueries { get; set; }
		
		/// <summary>
		/// List of non Azure queries in the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nonAzureQueries")]
		public NonAzureQueryProperties[] NonAzureQueries { get; set; }
	}
	
	/// <summary>
	/// Windows specific update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class WindowsProperties
	{
		
		/// <summary>
		/// KB numbers excluded from the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="excludedKbNumbers")]
		public string[] ExcludedKbNumbers { get; set; }
		
		/// <summary>
		/// KB numbers included from the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includedKbNumbers")]
		public string[] IncludedKbNumbers { get; set; }
		
		/// <summary>
		/// Update classification included in the software update configuration. A comma separated string with required values
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="includedUpdateClassifications")]
		public System.Nullable<WindowsPropertiesIncludedUpdateClassifications> IncludedUpdateClassifications { get; set; }
		
		/// <summary>
		/// Reboot setting for the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rebootSetting")]
		public string RebootSetting { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum WindowsPropertiesIncludedUpdateClassifications
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unclassified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Critical = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Security = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UpdateRollup = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FeaturePack = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ServicePack = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Definition = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tools = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Updates = 8,
	}
	
	/// <summary>
	/// object returned when requesting a collection of software update configuration
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CollectionItemUpdateConfiguration
	{
		
		/// <summary>
		/// List of azure resource Ids for azure virtual machines targeted by the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="azureVirtualMachines")]
		public string[] AzureVirtualMachines { get; set; }
		
		/// <summary>
		/// Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="duration")]
		public string Duration { get; set; }
	}
	
	/// <summary>
	/// Target operating system for the software update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum OperatingSystemType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Windows = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Linux = 1,
	}
	
	/// <summary>
	/// Software update configuration properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfiguration
	{
		
		/// <summary>
		/// Resource Id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Software update configuration properties.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SoftwareUpdateConfigurationProperties Properties { get; set; }
		
		/// <summary>
		/// Resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Software update configuration collection item properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfigurationCollectionItem
	{
		
		/// <summary>
		/// Resource Id of the software update configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Name of the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Software update configuration collection item properties.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SoftwareUpdateConfigurationCollectionItemProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Software update configuration collection item properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfigurationCollectionItemProperties
	{
		
		/// <summary>
		/// Creation time of the software update configuration, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Gets or sets the frequency of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		public SchedulePropertiesFrequency Frequency { get; set; }
		
		/// <summary>
		/// Last time software update configuration was modified, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public System.Nullable<System.DateTimeOffset> LastModifiedTime { get; set; }
		
		/// <summary>
		/// ext run time of the update.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextRun")]
		public System.Nullable<System.DateTimeOffset> NextRun { get; set; }
		
		/// <summary>
		/// Provisioning state for the software update configuration, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
		
		/// <summary>
		/// the start time of the update.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// object returned when requesting a collection of software update configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateConfiguration")]
		public CollectionItemUpdateConfiguration UpdateConfiguration { get; set; }
	}
	
	/// <summary>
	/// result of listing all software update configuration
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfigurationListResult
	{
		
		/// <summary>
		/// outer object returned when listing all software update configurations
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SoftwareUpdateConfigurationCollectionItem[] Value { get; set; }
	}
	
	/// <summary>
	/// Software update configuration properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfigurationProperties
	{
		
		/// <summary>
		/// CreatedBy property, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createdBy")]
		public string CreatedBy { get; set; }
		
		/// <summary>
		/// Creation time of the resource, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Error response of an operation failure
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public SoftwareUpdateConfigurationPropertiesError Error { get; set; }
		
		/// <summary>
		/// LastModifiedBy property, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedBy")]
		public string LastModifiedBy { get; set; }
		
		/// <summary>
		/// Last time resource was modified, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public System.Nullable<System.DateTimeOffset> LastModifiedTime { get; set; }
		
		/// <summary>
		/// Provisioning state for the software update configuration, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
		
		/// <summary>
		/// Definition of schedule parameters.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="scheduleInfo")]
		public ScheduleProperties ScheduleInfo { get; set; }
		
		/// <summary>
		/// Task properties of the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tasks")]
		public SoftwareUpdateConfigurationTasks Tasks { get; set; }
		
		/// <summary>
		/// Update specific properties of the software update configuration.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="updateConfiguration")]
		public UpdateConfiguration UpdateConfiguration { get; set; }
	}
	
	public class SoftwareUpdateConfigurationPropertiesError
	{
		
		/// <summary>
		/// Error code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Error message indicating why the operation failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Task properties of the software update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SoftwareUpdateConfigurationTasks
	{
		
		/// <summary>
		/// Task properties of the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="postTask")]
		public TaskProperties PostTask { get; set; }
		
		/// <summary>
		/// Task properties of the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="preTask")]
		public TaskProperties PreTask { get; set; }
	}
	
	/// <summary>
	/// Task properties of the software update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TaskProperties
	{
		
		/// <summary>
		/// Gets or sets the parameters of the task.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public System.Collections.Generic.Dictionary<string, string> Parameters { get; set; }
		
		/// <summary>
		/// Gets or sets the name of the runbook.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public string Source { get; set; }
	}
	
	/// <summary>
	/// Update specific properties of the software update configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class UpdateConfiguration
	{
		
		/// <summary>
		/// List of azure resource Ids for azure virtual machines targeted by the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="azureVirtualMachines")]
		public string[] AzureVirtualMachines { get; set; }
		
		/// <summary>
		/// Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="duration")]
		public string Duration { get; set; }
		
		/// <summary>
		/// Linux specific update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linux")]
		public LinuxProperties Linux { get; set; }
		
		/// <summary>
		/// List of names of non-azure machines targeted by the software update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nonAzureComputerNames")]
		public string[] NonAzureComputerNames { get; set; }
		
		/// <summary>
		/// Target operating system for the software update configuration.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operatingSystem")]
		public OperatingSystemType OperatingSystem { get; set; }
		
		/// <summary>
		/// Group specific to the update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="targets")]
		public TargetProperties Targets { get; set; }
		
		/// <summary>
		/// Windows specific update configuration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="windows")]
		public WindowsProperties Windows { get; set; }
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
		/// Get all software update configurations for the account.
		/// SoftwareUpdateConfigurations_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations
		/// </summary>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="filter">The filter to apply on the operation.</param>
		/// <returns>Return list of software update configurations.</returns>
		public async Task<SoftwareUpdateConfigurationListResult> SoftwareUpdateConfigurations_ListAsync(string subscriptionId, string resourceGroupName, string automationAccountName, string api_version, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/softwareUpdateConfigurations&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SoftwareUpdateConfigurationListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a single software update configuration by name.
		/// SoftwareUpdateConfigurations_GetByName subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		/// </summary>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="softwareUpdateConfigurationName">The name of the software update configuration to be created.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>A single software update configuration.</returns>
		public async Task<SoftwareUpdateConfiguration> SoftwareUpdateConfigurations_GetByNameAsync(string subscriptionId, string resourceGroupName, string automationAccountName, string softwareUpdateConfigurationName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/softwareUpdateConfigurations/"+ (softwareUpdateConfigurationName==null? "" : System.Uri.EscapeDataString(softwareUpdateConfigurationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SoftwareUpdateConfiguration>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a new software update configuration with the name given in the URI.
		/// SoftwareUpdateConfigurations_Create subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		/// </summary>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="softwareUpdateConfigurationName">The name of the software update configuration to be created.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">Request body.</param>
		/// <returns>Software update configuration with the same name and properties already exists.</returns>
		public async Task<SoftwareUpdateConfiguration> SoftwareUpdateConfigurations_CreateAsync(string subscriptionId, string resourceGroupName, string automationAccountName, string softwareUpdateConfigurationName, string api_version, SoftwareUpdateConfiguration requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/softwareUpdateConfigurations/"+ (softwareUpdateConfigurationName==null? "" : System.Uri.EscapeDataString(softwareUpdateConfigurationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SoftwareUpdateConfiguration>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// delete a specific software update configuration.
		/// SoftwareUpdateConfigurations_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}
		/// </summary>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="softwareUpdateConfigurationName">The name of the software update configuration to be created.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The software update configuration has been deleted.</returns>
		public async Task SoftwareUpdateConfigurations_DeleteAsync(string subscriptionId, string resourceGroupName, string automationAccountName, string softwareUpdateConfigurationName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/softwareUpdateConfigurations/"+ (softwareUpdateConfigurationName==null? "" : System.Uri.EscapeDataString(softwareUpdateConfigurationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
