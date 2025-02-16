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
	/// Represents the API profile.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApiProfile
	{
		
		/// <summary>
		/// The API version.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiVersion")]
		public string ApiVersion { get; set; }
		
		/// <summary>
		/// The profile version.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileVersion")]
		public string ProfileVersion { get; set; }
	}
	
	/// <summary>
	/// List of the API profiles.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApiProfileList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the API profiles.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ApiProfile[] Value { get; set; }
	}
	
	/// <summary>
	/// The linked resource access checks.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AuthorizationActionMapping
	{
		
		/// <summary>
		/// The desired action name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="desired")]
		public string Desired { get; set; }
		
		/// <summary>
		/// The original action name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="original")]
		public string Original { get; set; }
	}
	
	/// <summary>
	/// List of the read-only actions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AuthorizationActionMappingList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the read-only actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public AuthorizationActionMapping[] Value { get; set; }
	}
	
	/// <summary>
	/// The API versions supported by the endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureResourceHydrationAccount
	{
		
		/// <summary>
		/// The account name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountName")]
		public string AccountName { get; set; }
		
		/// <summary>
		/// The encrypted key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="encryptedKey")]
		public string EncryptedKey { get; set; }
		
		/// <summary>
		/// The next child resource consistency job limit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxChildResourceConsistencyJobLimit")]
		public System.Nullable<System.Int32> MaxChildResourceConsistencyJobLimit { get; set; }
		
		/// <summary>
		/// The subscription identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subscriptionId")]
		public string SubscriptionId { get; set; }
	}
	
	/// <summary>
	/// List of the resource hydration accounts.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureResourceHydrationAccountList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the resource hydration accounts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public AzureResourceHydrationAccount[] Value { get; set; }
	}
	
	/// <summary>
	/// The manifest extension collection definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExtensionCollectionDefinition
	{
		
		/// <summary>
		/// List of the extensions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="extensions")]
		public ExtensionList Extensions { get; set; }
		
		/// <summary>
		/// The version of the format a.b[.c[.d]]. see System.Version documentation for more details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
	}
	
	/// <summary>
	/// The data contract for specifying extensions in resource provider manifests.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExtensionDefinition
	{
		
		/// <summary>
		/// The name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The obsolete bundles bitmask.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="obsoleteBundlesBitmask")]
		public System.Nullable<System.Int32> ObsoleteBundlesBitmask { get; set; }
		
		/// <summary>
		/// The extension properties definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ExtensionPropertiesDefinition Properties { get; set; }
		
		/// <summary>
		/// List of the resource access.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceAccess")]
		public ResourceAccessList ResourceAccess { get; set; }
		
		/// <summary>
		/// The Uri
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
	}
	
	/// <summary>
	/// The extension properties definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExtensionPropertiesDefinition
	{
		
		/// <summary>
		/// The quota create blade.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="quotaCreateBladeName")]
		public string QuotaCreateBladeName { get; set; }
		
		/// <summary>
		/// The resource provider dashboard blade.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceProviderDashboardBladeName")]
		public string ResourceProviderDashboardBladeName { get; set; }
	}
	
	/// <summary>
	/// List of the extensions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ExtensionList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the extensions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ExtensionDefinition[] Value { get; set; }
	}
	
	/// <summary>
	/// The fan-out linked notification rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FanoutLinkedNotificationRule
	{
		
		/// <summary>
		/// The list of actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public string[] Actions { get; set; }
		
		/// <summary>
		/// List of the resource provider endpoints.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endpoints")]
		public ResourceProviderEndpointList Endpoints { get; set; }
	}
	
	/// <summary>
	/// List of the linked notification rules.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FanoutLinkedNotificationRuleList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the linked notification rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public FanoutLinkedNotificationRule[] Value { get; set; }
	}
	
	/// <summary>
	/// The linked resource access checks.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedAccessCheck
	{
		
		/// <summary>
		/// The action name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actionName")]
		public string ActionName { get; set; }
		
		/// <summary>
		/// The linked action.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedAction")]
		public string LinkedAction { get; set; }
		
		/// <summary>
		/// The linked action verb.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedActionVerb")]
		public string LinkedActionVerb { get; set; }
		
		/// <summary>
		/// The linked property.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedProperty")]
		public string LinkedProperty { get; set; }
		
		/// <summary>
		/// The linked type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedType")]
		public string LinkedType { get; set; }
	}
	
	/// <summary>
	/// List of the linked access checks.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedAccessCheckList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the linked access checks.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public LinkedAccessCheck[] Value { get; set; }
	}
	
	/// <summary>
	/// The resource type linked action.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum LinkedAction
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Blocked = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Validate = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 3,
	}
	
	/// <summary>
	/// The linked notification rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedNotificationRule
	{
		
		/// <summary>
		/// List of actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public string[] Actions { get; set; }
	}
	
	/// <summary>
	/// List of the linked notification rules.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedNotificationRuleList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the linked notification rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public LinkedNotificationRule[] Value { get; set; }
	}
	
	/// <summary>
	/// The linked operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum LinkedOperation
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CrossResourceGroupResourceMove = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CrossSubscriptionResourceMove = 2,
	}
	
	/// <summary>
	/// The linked resource access checks.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedOperationRule
	{
		
		/// <summary>
		/// The list of resource types this rule depends on.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dependsOnTypes")]
		public string[] DependsOnTypes { get; set; }
		
		/// <summary>
		/// The resource type linked action.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedAction")]
		public LinkedAction LinkedAction { get; set; }
		
		/// <summary>
		/// The linked operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedOperation")]
		public LinkedOperation LinkedOperation { get; set; }
	}
	
	/// <summary>
	/// List of the linked operation rules.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LinkedOperationRuleList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the linked operation rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public LinkedOperationRule[] Value { get; set; }
	}
	
	/// <summary>
	/// The manifest.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Manifest
	{
		
		/// <summary>
		/// A value indicating whether the manifest is always routable by all subscriptions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alwaysRoutable")]
		public System.Nullable<System.Boolean> AlwaysRoutable { get; set; }
		
		/// <summary>
		/// The display name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// A value indicating whether this resource provider is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// The manifest extension collection definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="extensionCollection")]
		public ExtensionCollectionDefinition ExtensionCollection { get; set; }
		
		/// <summary>
		/// List of the linked notification rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedNotificationRules")]
		public FanoutLinkedNotificationRuleList LinkedNotificationRules { get; set; }
		
		/// <summary>
		/// The metadata.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public string Metadata { get; set; }
		
		/// <summary>
		/// The unique identifier of the registration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The namespace.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="namespace")]
		public string Namespace { get; set; }
		
		/// <summary>
		/// The resource provider authorization information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="providerAuthorization")]
		public ResourceProviderAuthorization ProviderAuthorization { get; set; }
		
		/// <summary>
		/// The location of the provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="providerLocation")]
		public string ProviderLocation { get; set; }
		
		/// <summary>
		/// The resource provider type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="providerType")]
		public System.Nullable<ManifestProviderType> ProviderType { get; set; }
		
		/// <summary>
		/// The provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<ManifestProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// The name of the resource group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceGroupName")]
		public string ResourceGroupName { get; set; }
		
		/// <summary>
		/// List of the resource hydration accounts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceHydrationAccounts")]
		public AzureResourceHydrationAccountList ResourceHydrationAccounts { get; set; }
		
		/// <summary>
		/// The location of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceLocation")]
		public string ResourceLocation { get; set; }
		
		/// <summary>
		/// The resource tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceTags")]
		public string ResourceTags { get; set; }
		
		/// <summary>
		/// List of the resource types.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceTypes")]
		public ResourceTypeList ResourceTypes { get; set; }
		
		/// <summary>
		/// Resource manager type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="routingResourceManagerType")]
		public System.Nullable<ManifestRoutingResourceManagerType> RoutingResourceManagerType { get; set; }
		
		/// <summary>
		/// The subscription ID under which RP is registered.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subscriptionId")]
		public string SubscriptionId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManifestProviderType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Internal = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		External = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RegistrationFree = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TenantOnly = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AlwaysRoutable = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManifestProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Accepted = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Creating = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Moving = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Succeeded = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ManifestRoutingResourceManagerType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Admin = 1,
	}
	
	/// <summary>
	/// List of manifests.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManifestList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of manifests.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Manifest[] Value { get; set; }
	}
	
	/// <summary>
	/// The type of marketplace behavior for the resource type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum MarketplaceType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AddOn = 1,
	}
	
	/// <summary>
	/// Extension Client Access Section.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceAccess
	{
		
		/// <summary>
		/// The name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource")]
		public string Resource { get; set; }
	}
	
	/// <summary>
	/// List of the resource access.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceAccessList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the resource access.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ResourceAccess[] Value { get; set; }
	}
	
	/// <summary>
	/// The resource deletion policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ResourceDeletionPolicy
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cascade = 1,
	}
	
	/// <summary>
	/// The resource provider authorization information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceProviderAuthorization
	{
		
		/// <summary>
		/// The application id of resource provider in AAD.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="applicationId")]
		public string ApplicationId { get; set; }
		
		/// <summary>
		/// The role definition identifier against which a role assignment is created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="roleDefinitionId")]
		public string RoleDefinitionId { get; set; }
	}
	
	/// <summary>
	/// The API versions supported by the endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceProviderEndpoint
	{
		
		/// <summary>
		/// The API versions supported by the endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiVersions")]
		public string[] ApiVersions { get; set; }
		
		/// <summary>
		/// The enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// The endpoint uri.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endpointUri")]
		public string EndpointUri { get; set; }
		
		/// <summary>
		/// The timeout.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeout")]
		public string Timeout { get; set; }
	}
	
	/// <summary>
	/// List of the resource provider endpoints.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceProviderEndpointList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the resource provider endpoints.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ResourceProviderEndpoint[] Value { get; set; }
	}
	
	/// <summary>
	/// The resource provider type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ResourceProviderType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Internal = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		External = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RegistrationFree = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TenantOnly = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AlwaysRoutable = 5,
	}
	
	/// <summary>
	/// The resource type definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceType
	{
		
		/// <summary>
		/// The allowed unauthorized actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowedUnauthorizedActions")]
		public string[] AllowedUnauthorizedActions { get; set; }
		
		/// <summary>
		/// List of the API profiles.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiProfiles")]
		public ApiProfileList ApiProfiles { get; set; }
		
		/// <summary>
		/// List of the read-only actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="authorizationActionMappings")]
		public AuthorizationActionMappingList AuthorizationActionMappings { get; set; }
		
		/// <summary>
		/// List of the resource provider endpoints.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endpoints")]
		public ResourceProviderEndpointList Endpoints { get; set; }
		
		/// <summary>
		/// A value indicating whether the resource type is in global location.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="inGlobalLocation")]
		public System.Nullable<System.Boolean> InGlobalLocation { get; set; }
		
		/// <summary>
		/// List of the linked access checks.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedAccessChecks")]
		public LinkedAccessCheckList LinkedAccessChecks { get; set; }
		
		/// <summary>
		/// List of the linked notification rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedNotificationRules")]
		public LinkedNotificationRuleList LinkedNotificationRules { get; set; }
		
		/// <summary>
		/// List of the linked operation rules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedOperationRules")]
		public LinkedOperationRuleList LinkedOperationRules { get; set; }
		
		/// <summary>
		/// The type of marketplace behavior for the resource type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marketplaceType")]
		public MarketplaceType MarketplaceType { get; set; }
		
		/// <summary>
		/// The metered resource ids.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meteredResourceIds")]
		public string[] MeteredResourceIds { get; set; }
		
		/// <summary>
		/// The name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The resource deletion policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceDeletionPolicy")]
		public ResourceDeletionPolicy ResourceDeletionPolicy { get; set; }
		
		/// <summary>
		/// The resource routing type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="routingType")]
		public System.Nullable<ResourceTypeRoutingType> RoutingType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ResourceTypeRoutingType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ProxyOnly = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HostBased = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Extension = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tenant = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fanout = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LocationBased = 6,
	}
	
	/// <summary>
	/// List of the resource types.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceTypeList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of the resource types.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ResourceType[] Value { get; set; }
	}
	
	/// <summary>
	/// The resource routing type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum RoutingType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ProxyOnly = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HostBased = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Extension = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tenant = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fanout = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LocationBased = 6,
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
		/// Get a list of all manifests.
		/// Manifests_List subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<ManifestList> Manifests_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Subscriptions.Admin/manifests&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManifestList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get the specified manifest.
		/// Manifests_Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests/{manifestName}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="manifestName">The manifest name.</param>
		/// <returns>OK</returns>
		public async Task<Manifest> Manifests_GetAsync(string subscriptionId, string api_version, string manifestName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Subscriptions.Admin/manifests/"+ (manifestName==null? "" : System.Uri.EscapeDataString(manifestName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Manifest>(streamContent, jsonSerializerSettings);
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
