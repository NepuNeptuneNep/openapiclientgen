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
	/// Rule condition of type application.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationRuleCondition : FirewallPolicyRuleCondition
	{
		
		/// <summary>
		/// List of destination IP addresses or Service Tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationAddresses")]
		public string[] DestinationAddresses { get; set; }
		
		/// <summary>
		/// List of FQDN Tags for this rule condition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fqdnTags")]
		public string[] FqdnTags { get; set; }
		
		/// <summary>
		/// Array of Application Protocols.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="protocols")]
		public FirewallPolicyRuleConditionApplicationProtocol[] Protocols { get; set; }
		
		/// <summary>
		/// List of source IP addresses for this rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceAddresses")]
		public string[] SourceAddresses { get; set; }
		
		/// <summary>
		/// List of FQDNs for this rule condition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="targetFqdns")]
		public string[] TargetFqdns { get; set; }
	}
	
	/// <summary>
	/// Properties of the application rule protocol.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyRuleConditionApplicationProtocol
	{
		
		/// <summary>
		/// Port number for the protocol, cannot be greater than 64000.
		/// Minimum: 0
		/// Maximum: 64000
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="port")]
		[System.ComponentModel.DataAnnotations.Range(0, 64000)]
		public System.Nullable<System.Int32> Port { get; set; }
		
		/// <summary>
		/// The application protocol type of a Rule condition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="protocolType")]
		public System.Nullable<FirewallPolicyRuleConditionApplicationProtocolProtocolType> ProtocolType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyRuleConditionApplicationProtocolProtocolType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Http = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Https = 1,
	}
	
	public class FirewallPolicy
	{
	}
	
	/// <summary>
	/// Firewall Policy Filter Rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyFilterRule : FirewallPolicyRule
	{
		
		/// <summary>
		/// Properties of the FirewallPolicyFilterRuleAction.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="action")]
		public FirewallPolicyFilterRuleAction Action { get; set; }
		
		/// <summary>
		/// Collection of rule conditions used by a rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ruleConditions")]
		public FirewallPolicyRuleCondition[] RuleConditions { get; set; }
	}
	
	/// <summary>
	/// Properties of a rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyRuleCondition
	{
		
		/// <summary>
		/// Description of the rule condition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Name of the rule condition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Rule Condition Type.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="ruleConditionType")]
		public FirewallPolicyRuleConditionRuleConditionType RuleConditionType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyRuleConditionRuleConditionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ApplicationRuleCondition = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NetworkRuleCondition = 1,
	}
	
	/// <summary>
	/// Properties of the FirewallPolicyFilterRuleAction.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyFilterRuleAction
	{
		
		/// <summary>
		/// The action type of a rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<FirewallPolicyFilterRuleActionType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyFilterRuleActionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Allow = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deny = 1,
	}
	
	/// <summary>
	/// Response for ListFirewallPolicies API service call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyListResult
	{
		
		/// <summary>
		/// URL to get the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of Firewall Policies in a resource group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public FirewallPolicy[] Value { get; set; }
	}
	
	/// <summary>
	/// Firewall Policy NAT Rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyNatRule : FirewallPolicyRule
	{
		
		/// <summary>
		/// Properties of the FirewallPolicyNatRuleAction.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="action")]
		public FirewallPolicyNatRuleAction Action { get; set; }
		
		/// <summary>
		/// Properties of a rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ruleCondition")]
		public FirewallPolicyRuleCondition RuleCondition { get; set; }
		
		/// <summary>
		/// The translated address for this NAT rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="translatedAddress")]
		public string TranslatedAddress { get; set; }
		
		/// <summary>
		/// The translated port for this NAT rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="translatedPort")]
		public string TranslatedPort { get; set; }
	}
	
	/// <summary>
	/// Properties of the FirewallPolicyNatRuleAction.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyNatRuleAction
	{
		
		/// <summary>
		/// The action type of a rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<FirewallPolicyNatRuleActionType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyNatRuleActionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DNAT = 0,
	}
	
	/// <summary>
	/// Firewall Policy definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyPropertiesFormat
	{
		
		/// <summary>
		/// Reference to another subresource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="basePolicy")]
		public object BasePolicy { get; set; }
		
		/// <summary>
		/// List of references to Child Firewall Policies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="childPolicies")]
		public FirewallPolicyPropertiesFormatChildPolicies[] FirewallPolicyPropertiesFormatChildPolicies { get; set; }
		
		/// <summary>
		/// List of references to Azure Firewalls that this Firewall Policy is associated with.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="firewalls")]
		public FirewallPolicyPropertiesFormatFirewalls[] FirewallPolicyPropertiesFormatFirewalls { get; set; }
		
		/// <summary>
		/// The current provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<FirewallPolicyPropertiesFormatProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// List of references to FirewallPolicyRuleGroups.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ruleGroups")]
		public FirewallPolicyPropertiesFormatRuleGroups[] FirewallPolicyPropertiesFormatRuleGroups { get; set; }
		
		/// <summary>
		/// The operation mode for Threat Intel.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="threatIntelMode")]
		public System.Nullable<FirewallPolicyPropertiesFormatThreatIntelMode> ThreatIntelMode { get; set; }
	}
	
	public class FirewallPolicyPropertiesFormatChildPolicies
	{
		
		/// <summary>
		/// Resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	public class FirewallPolicyPropertiesFormatFirewalls
	{
		
		/// <summary>
		/// Resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyPropertiesFormatProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Succeeded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Updating = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 3,
	}
	
	public class FirewallPolicyPropertiesFormatRuleGroups
	{
		
		/// <summary>
		/// Resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyPropertiesFormatThreatIntelMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Alert = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deny = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Off = 2,
	}
	
	/// <summary>
	/// Properties of the rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyRule
	{
		
		/// <summary>
		/// The name of the rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Priority of the Firewall Policy Rule resource.
		/// Minimum: 100
		/// Maximum: 65000
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="priority")]
		[System.ComponentModel.DataAnnotations.Range(100, 65000)]
		public System.Nullable<System.Int32> Priority { get; set; }
		
		/// <summary>
		/// The type of the rule.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="ruleType")]
		public FirewallPolicyRuleRuleType RuleType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyRuleRuleType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FirewallPolicyNatRule = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FirewallPolicyFilterRule = 1,
	}
	
	/// <summary>
	/// The application protocol type of a Rule condition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyRuleConditionApplicationProtocolType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Http = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Https = 1,
	}
	
	/// <summary>
	/// The Network protocol of a Rule condition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FirewallPolicyRuleConditionNetworkProtocol
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TCP = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UDP = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Any = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ICMP = 3,
	}
	
	public class FirewallPolicyRuleGroup
	{
	}
	
	/// <summary>
	/// Response for ListFirewallPolicyRuleGroups API service call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyRuleGroupListResult
	{
		
		/// <summary>
		/// URL to get the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of FirewallPolicyRuleGroups in a FirewallPolicy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public FirewallPolicyRuleGroup[] Value { get; set; }
	}
	
	/// <summary>
	/// Properties of the rule group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FirewallPolicyRuleGroupProperties
	{
		
		/// <summary>
		/// Priority of the Firewall Policy Rule Group resource.
		/// Minimum: 100
		/// Maximum: 65000
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="priority")]
		[System.ComponentModel.DataAnnotations.Range(100, 65000)]
		public System.Nullable<System.Int32> Priority { get; set; }
		
		/// <summary>
		/// The current provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public FirewallPolicyPropertiesFormatProvisioningState ProvisioningState { get; set; }
		
		/// <summary>
		/// Group of Firewall Policy rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rules")]
		public FirewallPolicyRule[] Rules { get; set; }
	}
	
	/// <summary>
	/// Rule condition of type network.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class NetworkRuleCondition : FirewallPolicyRuleCondition
	{
		
		/// <summary>
		/// List of destination IP addresses or Service Tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationAddresses")]
		public string[] DestinationAddresses { get; set; }
		
		/// <summary>
		/// List of destination ports.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationPorts")]
		public string[] DestinationPorts { get; set; }
		
		/// <summary>
		/// Array of FirewallPolicyRuleConditionNetworkProtocols.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ipProtocols")]
		public FirewallPolicyRuleConditionNetworkProtocol[] IpProtocols { get; set; }
		
		/// <summary>
		/// List of source IP addresses for this rule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceAddresses")]
		public string[] SourceAddresses { get; set; }
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
		/// Gets all the Firewall Policies in a subscription.
		/// FirewallPolicies_ListAll subscriptions/{subscriptionId}/providers/Microsoft.Network/firewallPolicies
		/// </summary>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Success. The operation returns a list of FirewallPolicy resources.</returns>
		public async Task<FirewallPolicyListResult> FirewallPolicies_ListAllAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Network/firewallPolicies?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicyListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists all Firewall Policies in a resource group.
		/// FirewallPolicies_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Success. The operation returns a list of FirewallPolicy resources.</returns>
		public async Task<FirewallPolicyListResult> FirewallPolicies_ListAsync(string resourceGroupName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicyListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the specified Firewall Policy.
		/// FirewallPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="expand">Expands referenced resources.</param>
		/// <returns>Request successful. The operation returns a Firewall Policy resource.</returns>
		public async Task<FirewallPolicy> FirewallPolicies_GetAsync(string resourceGroupName, string firewallPolicyName, string api_version, string subscriptionId, string expand)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$expand=" + (expand==null? "" : System.Uri.EscapeDataString(expand));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates the specified Firewall Policy.
		/// FirewallPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters supplied to the create or update Firewall Policy operation.</param>
		/// <returns>Request successful. The operation returns the resulting FirewallPolicy resource.</returns>
		public async Task<FirewallPolicy> FirewallPolicies_CreateOrUpdateAsync(string resourceGroupName, string firewallPolicyName, string api_version, string subscriptionId, FirewallPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified Firewall Policy.
		/// FirewallPolicies_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Delete successful.</returns>
		public async Task FirewallPolicies_DeleteAsync(string resourceGroupName, string firewallPolicyName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		
		/// <summary>
		/// Updates a Firewall Policy Tags.
		/// FirewallPolicies_UpdateTags subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		/// </summary>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The resource group name of the Firewall Policy.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy being updated.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="requestBody">Parameters supplied to Update Firewall Policy tags.</param>
		/// <returns>Request successful. Returns the details of the Firewall Policy updated.</returns>
		public async Task<FirewallPolicy> FirewallPolicies_UpdateTagsAsync(string subscriptionId, string resourceGroupName, string firewallPolicyName, string api_version, object requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
		/// FirewallPolicyRuleGroups_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Success. The operation returns a list of FirewallPolicyRuleGroup resources.</returns>
		public async Task<FirewallPolicyRuleGroupListResult> FirewallPolicyRuleGroups_ListAsync(string resourceGroupName, string firewallPolicyName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"/ruleGroups&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicyRuleGroupListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the specified FirewallPolicyRuleGroup.
		/// FirewallPolicyRuleGroups_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="ruleGroupName">The name of the FirewallPolicyRuleGroup.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Request successful. The operation returns a FirewallPolicyRuleGroup resource.</returns>
		public async Task<FirewallPolicyRuleGroup> FirewallPolicyRuleGroups_GetAsync(string resourceGroupName, string firewallPolicyName, string ruleGroupName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"/ruleGroups/"+ (ruleGroupName==null? "" : System.Uri.EscapeDataString(ruleGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicyRuleGroup>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates the specified FirewallPolicyRuleGroup.
		/// FirewallPolicyRuleGroups_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="ruleGroupName">The name of the FirewallPolicyRuleGroup.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters supplied to the create or update FirewallPolicyRuleGroup operation.</param>
		/// <returns>Request successful. The operation returns the resulting FirewallPolicyRuleGroup resource.</returns>
		public async Task<FirewallPolicyRuleGroup> FirewallPolicyRuleGroups_CreateOrUpdateAsync(string resourceGroupName, string firewallPolicyName, string ruleGroupName, string api_version, string subscriptionId, FirewallPolicyRuleGroup requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"/ruleGroups/"+ (ruleGroupName==null? "" : System.Uri.EscapeDataString(ruleGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FirewallPolicyRuleGroup>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified FirewallPolicyRuleGroup.
		/// FirewallPolicyRuleGroups_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="firewallPolicyName">The name of the Firewall Policy.</param>
		/// <param name="ruleGroupName">The name of the FirewallPolicyRuleGroup.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Delete successful.</returns>
		public async Task FirewallPolicyRuleGroups_DeleteAsync(string resourceGroupName, string firewallPolicyName, string ruleGroupName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/firewallPolicies/"+ (firewallPolicyName==null? "" : System.Uri.EscapeDataString(firewallPolicyName))+"/ruleGroups/"+ (ruleGroupName==null? "" : System.Uri.EscapeDataString(ruleGroupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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