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
	/// Information about the principal, resource, and permission to check.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1AccessTuple
	{
		
		/// <summary>
		/// Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullResourceName")]
		public string FullResourceName { get; set; }
		
		/// <summary>
		/// Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="permission")]
		public string Permission { get; set; }
		
		/// <summary>
		/// Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="principal")]
		public string Principal { get; set; }
	}
	
	/// <summary>
	/// Details about how a binding in a policy affects a principal's ability to use a permission.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1BindingExplanation
	{
		
		/// <summary>
		/// Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="access")]
		public System.Nullable<GoogleCloudPolicytroubleshooterV1BindingExplanationAccess> Access { get; set; }
		
		/// <summary>
		/// Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="condition")]
		public GoogleTypeExpr Condition { get; set; }
		
		/// <summary>
		/// Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` You want to troubleshoot access for `user:bob@example.com`. This user is a principal of the group `group:product-eng@example.com`. For the first principal in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second principal in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="memberships")]
		public System.Collections.Generic.Dictionary<string, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership> Memberships { get; set; }
		
		/// <summary>
		/// The relevance of this binding to the overall determination for the entire policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relevance")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevance Relevance { get; set; }
		
		/// <summary>
		/// The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="role")]
		public string Role { get; set; }
		
		/// <summary>
		/// Indicates whether the role granted by this binding contains the specified permission.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rolePermission")]
		public System.Nullable<GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermission> RolePermission { get; set; }
		
		/// <summary>
		/// The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rolePermissionRelevance")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevance RolePermissionRelevance { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudPolicytroubleshooterV1BindingExplanationAccess
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACCESS_STATE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GRANTED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOT_GRANTED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UNKNOWN_CONDITIONAL = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UNKNOWN_INFO_DENIED = 4,
	}
	
	/// <summary>
	/// Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleTypeExpr
	{
		
		/// <summary>
		/// Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Textual representation of an expression in Common Expression Language syntax.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expression")]
		public string Expression { get; set; }
		
		/// <summary>
		/// Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	/// <summary>
	/// Details about whether the binding includes the principal.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership
	{
		
		/// <summary>
		/// Indicates whether the binding includes the principal.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="membership")]
		public System.Nullable<GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembership> Membership { get; set; }
		
		/// <summary>
		/// The relevance of the principal's status to the overall determination for the binding.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relevance")]
		public System.Nullable<GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevance> Relevance { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembership
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MEMBERSHIP_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MEMBERSHIP_INCLUDED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MEMBERSHIP_NOT_INCLUDED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MEMBERSHIP_UNKNOWN_INFO_DENIED = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevance
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HEURISTIC_RELEVANCE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NORMAL = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HIGH = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermission
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ROLE_PERMISSION_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ROLE_PERMISSION_INCLUDED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ROLE_PERMISSION_NOT_INCLUDED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ROLE_PERMISSION_UNKNOWN_INFO_DENIED = 3,
	}
	
	/// <summary>
	/// Details about how a specific IAM Policy contributed to the access check.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1ExplainedPolicy
	{
		
		/// <summary>
		/// Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="access")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanationAccess Access { get; set; }
		
		/// <summary>
		/// Details about how each binding in the policy affects the principal's ability, or inability, to use the permission for the resource. If the sender of the request does not have access to the policy, this field is omitted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindingExplanations")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanation[] BindingExplanations { get; set; }
		
		/// <summary>
		/// The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the sender of the request does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullResourceName")]
		public string FullResourceName { get; set; }
		
		/// <summary>
		/// An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policy")]
		public GoogleIamV1Policy Policy { get; set; }
		
		/// <summary>
		/// The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is omitted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relevance")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevance Relevance { get; set; }
	}
	
	/// <summary>
	/// An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1Policy
	{
		
		/// <summary>
		/// Specifies cloud audit logging configuration for this policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="auditConfigs")]
		public GoogleIamV1AuditConfig[] AuditConfigs { get; set; }
		
		/// <summary>
		/// Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindings")]
		public GoogleIamV1Binding[] Bindings { get; set; }
		
		/// <summary>
		/// `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public System.Nullable<System.Int32> Version { get; set; }
	}
	
	/// <summary>
	/// Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1AuditConfig
	{
		
		/// <summary>
		/// The configuration for logging of each type of permission.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="auditLogConfigs")]
		public GoogleIamV1AuditLogConfig[] AuditLogConfigs { get; set; }
		
		/// <summary>
		/// Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="service")]
		public string Service { get; set; }
	}
	
	/// <summary>
	/// Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1AuditLogConfig
	{
		
		/// <summary>
		/// Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="exemptedMembers")]
		public string[] ExemptedMembers { get; set; }
		
		/// <summary>
		/// The log type that this config enables.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="logType")]
		public System.Nullable<GoogleIamV1AuditLogConfigLogType> LogType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleIamV1AuditLogConfigLogType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LOG_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ADMIN_READ = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DATA_WRITE = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DATA_READ = 3,
	}
	
	/// <summary>
	/// Associates `members`, or principals, with a `role`.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1Binding
	{
		
		/// <summary>
		/// Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="condition")]
		public GoogleTypeExpr Condition { get; set; }
		
		/// <summary>
		/// Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="members")]
		public string[] Members { get; set; }
		
		/// <summary>
		/// Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="role")]
		public string Role { get; set; }
	}
	
	/// <summary>
	/// Request for TroubleshootIamPolicy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest
	{
		
		/// <summary>
		/// Information about the principal, resource, and permission to check.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accessTuple")]
		public GoogleCloudPolicytroubleshooterV1AccessTuple AccessTuple { get; set; }
	}
	
	/// <summary>
	/// Response for TroubleshootIamPolicy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
	{
		
		/// <summary>
		/// Indicates whether the principal has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="access")]
		public GoogleCloudPolicytroubleshooterV1BindingExplanationAccess Access { get; set; }
		
		/// <summary>
		/// The general errors contained in the troubleshooting response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public GoogleRpcStatus[] Errors { get; set; }
		
		/// <summary>
		/// List of IAM policies that were evaluated to check the principal's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="explainedPolicies")]
		public GoogleCloudPolicytroubleshooterV1ExplainedPolicy[] ExplainedPolicies { get; set; }
	}
	
	/// <summary>
	/// The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleRpcStatus
	{
		
		/// <summary>
		/// The status code, which should be an enum value of google.rpc.Code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		/// <summary>
		/// A list of messages that carry the error details. There is a common set of message types for APIs to use.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public string[] Details { get; set; }
		
		/// <summary>
		/// A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
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
		/// Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.
		/// Policytroubleshooter_iam_troubleshoot v1/iam:troubleshoot
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse> Policytroubleshooter_iam_troubleshootAsync(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/iam:troubleshoot";
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
				return JsonSerializer.Deserialize<GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse>(streamContent, jsonSerializerSettings);
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