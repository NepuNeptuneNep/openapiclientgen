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
	/// Represents the metadata of the long-running operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudCommonOperationMetadata
	{
		
		/// <summary>
		/// Output only. API version used to start the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiVersion")]
		public string ApiVersion { get; set; }
		
		/// <summary>
		/// Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cancelRequested")]
		public System.Nullable<System.Boolean> CancelRequested { get; set; }
		
		/// <summary>
		/// Output only. The time the operation was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The time the operation finished running.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public string EndTime { get; set; }
		
		/// <summary>
		/// Output only. Human-readable status of the operation, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="statusDetail")]
		public string StatusDetail { get; set; }
		
		/// <summary>
		/// Output only. Server-defined resource path for the target of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
		
		/// <summary>
		/// Output only. Name of the verb executed by the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="verb")]
		public string Verb { get; set; }
	}
	
	/// <summary>
	/// Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamAdminV1AuditData
	{
		
		/// <summary>
		/// A PermissionDelta message to record the added_permissions and removed_permissions inside a role.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="permissionDelta")]
		public GoogleIamAdminV1AuditDataPermissionDelta PermissionDelta { get; set; }
	}
	
	/// <summary>
	/// A PermissionDelta message to record the added_permissions and removed_permissions inside a role.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamAdminV1AuditDataPermissionDelta
	{
		
		/// <summary>
		/// Added permissions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="addedPermissions")]
		public string[] AddedPermissions { get; set; }
		
		/// <summary>
		/// Removed permissions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="removedPermissions")]
		public string[] RemovedPermissions { get; set; }
	}
	
	/// <summary>
	/// One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1BindingDelta
	{
		
		/// <summary>
		/// The action that was performed on a Binding. Required
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="action")]
		public System.Nullable<GoogleIamV1BindingDeltaAction> Action { get; set; }
		
		/// <summary>
		/// Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="condition")]
		public GoogleTypeExpr Condition { get; set; }
		
		/// <summary>
		/// A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="member")]
		public string Member { get; set; }
		
		/// <summary>
		/// Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="role")]
		public string Role { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleIamV1BindingDeltaAction
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ACTION_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ADD = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REMOVE = 2,
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
	/// Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1LoggingAuditData
	{
		
		/// <summary>
		/// The difference delta between two policies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policyDelta")]
		public GoogleIamV1PolicyDelta PolicyDelta { get; set; }
	}
	
	/// <summary>
	/// The difference delta between two policies.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1PolicyDelta
	{
		
		/// <summary>
		/// The delta for Bindings between two policies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindingDeltas")]
		public GoogleIamV1BindingDelta[] BindingDeltas { get; set; }
	}
	
	/// <summary>
	/// Metadata for long-running WorkloadIdentityPool operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV1betaWorkloadIdentityPoolOperationMetadata
	{
	}
	
	/// <summary>
	/// A deny rule in an IAM deny policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV2DenyRule
	{
		
		/// <summary>
		/// Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="denialCondition")]
		public GoogleTypeExpr DenialCondition { get; set; }
		
		/// <summary>
		/// The permissions that are explicitly denied by this rule. Each permission uses the format `{service_fqdn}/{resource}.{verb}`, where `{service_fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deniedPermissions")]
		public string[] DeniedPermissions { get; set; }
		
		/// <summary>
		/// The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * `principal://goog/subject/{email_id}`: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, `principal://goog/subject/alice@example.com`. * `principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}`: A Google Cloud service account. For example, `principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com`. * `principalSet://goog/group/{group_id}`: A Google group. For example, `principalSet://goog/group/admins@example.com`. * `principalSet://goog/public:all`: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * `principalSet://goog/cloudIdentityCustomerId/{customer_id}`: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, `principalSet://goog/cloudIdentityCustomerId/C01Abc35`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:principal://goog/subject/{email_id}?uid={uid}`: A specific Google Account that was deleted recently. For example, `deleted:principal://goog/subject/alice@example.com?uid=1234567890`. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * `deleted:principalSet://goog/group/{group_id}?uid={uid}`: A Google group that was deleted recently. For example, `deleted:principalSet://goog/group/admins@example.com?uid=1234567890`. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}`: A Google Cloud service account that was deleted recently. For example, `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890`. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deniedPrincipals")]
		public string[] DeniedPrincipals { get; set; }
		
		/// <summary>
		/// Specifies the permissions that this rule excludes from the set of denied permissions given by `denied_permissions`. If a permission appears in `denied_permissions` _and_ in `exception_permissions` then it will _not_ be denied. The excluded permissions can be specified using the same syntax as `denied_permissions`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="exceptionPermissions")]
		public string[] ExceptionPermissions { get; set; }
		
		/// <summary>
		/// The identities that are excluded from the deny rule, even if they are listed in the `denied_principals`. For example, you could add a Google group to the `denied_principals`, then exclude specific users who belong to that group. This field can contain the same values as the `denied_principals` field, excluding `principalSet://goog/public:all`, which represents all users on the internet.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="exceptionPrincipals")]
		public string[] ExceptionPrincipals { get; set; }
	}
	
	/// <summary>
	/// Response message for `ListPolicies`.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV2ListPoliciesResponse
	{
		
		/// <summary>
		/// A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// Metadata for the policies that are attached to the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="policies")]
		public GoogleIamV2Policy[] Policies { get; set; }
	}
	
	/// <summary>
	/// Data for an IAM policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV2Policy
	{
		
		/// <summary>
		/// A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="annotations")]
		public System.Collections.Generic.Dictionary<string, string> Annotations { get; set; }
		
		/// <summary>
		/// Output only. The time when the `Policy` was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deleteTime")]
		public string DeleteTime { get; set; }
		
		/// <summary>
		/// A user-specified description of the `Policy`. This value can be up to 63 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
		
		/// <summary>
		/// Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rules")]
		public GoogleIamV2PolicyRule[] Rules { get; set; }
		
		/// <summary>
		/// Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uid")]
		public string Uid { get; set; }
		
		/// <summary>
		/// Output only. The time when the `Policy` was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
	}
	
	/// <summary>
	/// A single rule in a `Policy`.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV2PolicyRule
	{
		
		/// <summary>
		/// A deny rule in an IAM deny policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="denyRule")]
		public GoogleIamV2DenyRule DenyRule { get; set; }
		
		/// <summary>
		/// A user-specified description of the rule. This value can be up to 256 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
	}
	
	/// <summary>
	/// Metadata for long-running `Policy` operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleIamV2PolicyOperationMetadata
	{
		
		/// <summary>
		/// Timestamp when the `google.longrunning.Operation` was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
	}
	
	/// <summary>
	/// This resource represents a long-running operation that is the result of a network API call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleLongrunningOperation
	{
		
		/// <summary>
		/// If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="done")]
		public System.Nullable<System.Boolean> Done { get; set; }
		
		/// <summary>
		/// The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public GoogleRpcStatus Error { get; set; }
		
		/// <summary>
		/// Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public System.Collections.Generic.Dictionary<string, object> Metadata { get; set; }
		
		/// <summary>
		/// The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="response")]
		public System.Collections.Generic.Dictionary<string, object> Response { get; set; }
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
		/// Deletes a policy. This action is permanent.
		/// Iam_policies_delete v2/{name}
		/// </summary>
		/// <param name="name">Required. The resource name of the policy to delete. Format: `policies/{attachment_point}/denypolicies/{policy_id}` Use the URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.</param>
		/// <param name="etag">Optional. The expected `etag` of the policy to delete. If the value does not match the value that is stored in IAM, the request fails with a `409` error code and `ABORTED` status. If you omit this field, the policy is deleted regardless of its current `etag`.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleLongrunningOperation> Iam_policies_deleteAsync(string name, string etag, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&etag=" + (etag==null? "" : System.Uri.EscapeDataString(etag));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GoogleLongrunningOperation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		/// Iam_policies_operations_get v2/{name}
		/// </summary>
		/// <param name="name">The name of the operation resource.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleLongrunningOperation> Iam_policies_operations_getAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name));
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
				return JsonSerializer.Deserialize<GoogleLongrunningOperation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.
		/// Iam_policies_update v2/{name}
		/// </summary>
		/// <param name="name">Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleLongrunningOperation> Iam_policies_updateAsync(string name, GoogleIamV2Policy requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
				return JsonSerializer.Deserialize<GoogleLongrunningOperation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.
		/// Iam_policies_listPolicies v2/{parent}
		/// </summary>
		/// <param name="parent">Required. The resource that the policy is attached to, along with the kind of policy to list. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.</param>
		/// <param name="pageSize">The maximum number of policies to return. IAM ignores this value and uses the value 1000.</param>
		/// <param name="pageToken">A page token received in a ListPoliciesResponse. Provide this token to retrieve the next page.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleIamV2ListPoliciesResponse> Iam_policies_listPoliciesAsync(string parent, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<GoogleIamV2ListPoliciesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a policy.
		/// Iam_policies_createPolicy v2/{parent}
		/// </summary>
		/// <param name="parent">Required. The resource that the policy is attached to, along with the kind of policy to create. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.</param>
		/// <param name="policyId">The ID to use for this policy, which will become the final component of the policy's resource name. The ID must contain 3 to 63 characters. It can contain lowercase letters and numbers, as well as dashes (`-`) and periods (`.`). The first character must be a lowercase letter.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleLongrunningOperation> Iam_policies_createPolicyAsync(string parent, string policyId, GoogleIamV2Policy requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"&policyId=" + (policyId==null? "" : System.Uri.EscapeDataString(policyId));
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
				return JsonSerializer.Deserialize<GoogleLongrunningOperation>(streamContent, jsonSerializerSettings);
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
