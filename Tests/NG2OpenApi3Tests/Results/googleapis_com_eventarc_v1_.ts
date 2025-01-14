import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider. */
	export interface Channel {

		/** Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing. */
		activationToken?: string | null;

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/locations/keyRings/cryptoKeys/*`. */
		cryptoKeyName?: string | null;

		/** Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format. */
		name?: string | null;

		/** The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`. */
		provider?: string | null;

		/** Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`. */
		pubsubTopic?: string | null;

		/** Output only. The state of a Channel. */
		state?: ChannelState | null;

		/** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider. */
	export interface ChannelFormProperties {

		/** Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing. */
		activationToken: FormControl<string | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/locations/keyRings/cryptoKeys/*`. */
		cryptoKeyName: FormControl<string | null | undefined>,

		/** Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format. */
		name: FormControl<string | null | undefined>,

		/** The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`. */
		provider: FormControl<string | null | undefined>,

		/** Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`. */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Output only. The state of a Channel. */
		state: FormControl<ChannelState | null | undefined>,

		/** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			activationToken: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			cryptoKeyName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ChannelState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel. */
	export interface ChannelConnection {

		/** Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to bind the channel with the provider project. This field will not be stored in the provider resource. */
		activationToken?: string | null;

		/** Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross accounts references. This must be in `projects/{project}/location/{location}/channels/{channel_id}` format. */
		channel?: string | null;

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Required. The name of the connection. */
		name?: string | null;

		/** Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel. */
	export interface ChannelConnectionFormProperties {

		/** Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to bind the channel with the provider project. This field will not be stored in the provider resource. */
		activationToken: FormControl<string | null | undefined>,

		/** Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross accounts references. This must be in `projects/{project}/location/{location}/channels/{channel_id}` format. */
		channel: FormControl<string | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The name of the connection. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateChannelConnectionFormGroup() {
		return new FormGroup<ChannelConnectionFormProperties>({
			activationToken: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Cloud Run destination. */
	export interface CloudRun {

		/** Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
		path?: string | null;

		/** Required. The region the Cloud Run service is deployed in. */
		region?: string | null;

		/** Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project as the trigger object can be addressed. */
		service?: string | null;
	}

	/** Represents a Cloud Run destination. */
	export interface CloudRunFormProperties {

		/** Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
		path: FormControl<string | null | undefined>,

		/** Required. The region the Cloud Run service is deployed in. */
		region: FormControl<string | null | undefined>,

		/** Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project as the trigger object can be addressed. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunFormGroup() {
		return new FormGroup<CloudRunFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a target of an invocation over HTTP. */
	export interface Destination {

		/** The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format: `projects/{project}/locations/{location}/functions/{function}` This is a read-only field. Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value. */
		cloudFunction?: string | null;

		/** Represents a Cloud Run destination. */
		cloudRun?: CloudRun;

		/** Represents a GKE destination. */
		gke?: GKE;

		/** Represents a HTTP endpoint destination. */
		httpEndpoint?: HttpEndpoint;

		/** Represents a network config to be used for destination resolution and connectivity. */
		networkConfig?: NetworkConfig;

		/** The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}` */
		workflow?: string | null;
	}

	/** Represents a target of an invocation over HTTP. */
	export interface DestinationFormProperties {

		/** The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format: `projects/{project}/locations/{location}/functions/{function}` This is a read-only field. Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value. */
		cloudFunction: FormControl<string | null | undefined>,

		/** The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}` */
		workflow: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			cloudFunction: new FormControl<string | null | undefined>(undefined),
			workflow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a GKE destination. */
	export interface GKE {

		/** Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created. */
		cluster?: string | null;

		/** Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters. */
		location?: string | null;

		/** Required. The namespace the GKE service is running in. */
		namespace?: string | null;

		/** Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
		path?: string | null;

		/** Required. Name of the GKE service. */
		service?: string | null;
	}

	/** Represents a GKE destination. */
	export interface GKEFormProperties {

		/** Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created. */
		cluster: FormControl<string | null | undefined>,

		/** Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters. */
		location: FormControl<string | null | undefined>,

		/** Required. The namespace the GKE service is running in. */
		namespace: FormControl<string | null | undefined>,

		/** Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
		path: FormControl<string | null | undefined>,

		/** Required. Name of the GKE service. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGKEFormGroup() {
		return new FormGroup<GKEFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a HTTP endpoint destination. */
	export interface HttpEndpoint {

		/** Required. The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS. */
		uri?: string | null;
	}

	/** Represents a HTTP endpoint destination. */
	export interface HttpEndpointFormProperties {

		/** Required. The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateHttpEndpointFormGroup() {
		return new FormGroup<HttpEndpointFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a network config to be used for destination resolution and connectivity. */
	export interface NetworkConfig {

		/** Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}` */
		networkAttachment?: string | null;
	}

	/** Represents a network config to be used for destination resolution and connectivity. */
	export interface NetworkConfigFormProperties {

		/** Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}` */
		networkAttachment: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			networkAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Filters events based on exact matches on the CloudEvents attributes. */
	export interface EventFilter {

		/** Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. You can [retrieve a specific provider's supported event types](/eventarc/docs/list-providers#describe-provider). All triggers MUST provide a filter for the 'type' attribute. */
		attribute?: string | null;

		/** Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The allowed values are `path_pattern` and `match-path-pattern`. `path_pattern` is only allowed for GCFv1 triggers. */
		operator?: string | null;

		/** Required. The value for the attribute. */
		value?: string | null;
	}

	/** Filters events based on exact matches on the CloudEvents attributes. */
	export interface EventFilterFormProperties {

		/** Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. You can [retrieve a specific provider's supported event types](/eventarc/docs/list-providers#describe-provider). All triggers MUST provide a filter for the 'type' attribute. */
		attribute: FormControl<string | null | undefined>,

		/** Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The allowed values are `path_pattern` and `match-path-pattern`. `path_pattern` is only allowed for GCFv1 triggers. */
		operator: FormControl<string | null | undefined>,

		/** Required. The value for the attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			attribute: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the event type resource. */
	export interface EventType {

		/** Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud Storage". */
		description?: string | null;

		/** Output only. URI for the event schema. For example "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto" */
		eventSchemaUri?: string | null;

		/** Output only. Filtering attributes for the event type. */
		filteringAttributes?: Array<FilteringAttribute>;

		/** Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match. */
		type?: string | null;
	}

	/** A representation of the event type resource. */
	export interface EventTypeFormProperties {

		/** Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud Storage". */
		description: FormControl<string | null | undefined>,

		/** Output only. URI for the event schema. For example "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto" */
		eventSchemaUri: FormControl<string | null | undefined>,

		/** Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			eventSchemaUri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the FilteringAttribute resource. Filtering attributes are per event type. */
	export interface FilteringAttribute {

		/** Output only. Attribute used for filtering the event type. */
		attribute?: string | null;

		/** Output only. Description of the purpose of the attribute. */
		description?: string | null;

		/** Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format. */
		pathPatternSupported?: boolean | null;

		/** Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise. */
		required?: boolean | null;
	}

	/** A representation of the FilteringAttribute resource. Filtering attributes are per event type. */
	export interface FilteringAttributeFormProperties {

		/** Output only. Attribute used for filtering the event type. */
		attribute: FormControl<string | null | undefined>,

		/** Output only. Description of the purpose of the attribute. */
		description: FormControl<string | null | undefined>,

		/** Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format. */
		pathPatternSupported: FormControl<boolean | null | undefined>,

		/** Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateFilteringAttributeFormGroup() {
		return new FormGroup<FilteringAttributeFormProperties>({
			attribute: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			pathPatternSupported: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region. Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. */
	export interface GoogleChannelConfig {

		/** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/locations/keyRings/cryptoKeys/*`. */
		cryptoKeyName?: string | null;

		/** Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. */
		name?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region. Once configured, first-party event data will be protected using the specified custom managed encryption key instead of Google-managed encryption keys. */
	export interface GoogleChannelConfigFormProperties {

		/** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/locations/keyRings/cryptoKeys/*`. */
		cryptoKeyName: FormControl<string | null | undefined>,

		/** Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChannelConfigFormGroup() {
		return new FormGroup<GoogleChannelConfigFormProperties>({
			cryptoKeyName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the `ListChannelConnections` method. */
	export interface ListChannelConnectionsResponse {

		/** The requested channel connections, up to the number specified in `page_size`. */
		channelConnections?: Array<ChannelConnection>;

		/** A page token that can be sent to `ListChannelConnections` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken?: string | null;

		/** Unreachable resources, if any. */
		unreachable?: Array<string>;
	}

	/** The response message for the `ListChannelConnections` method. */
	export interface ListChannelConnectionsResponseFormProperties {

		/** A page token that can be sent to `ListChannelConnections` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelConnectionsResponseFormGroup() {
		return new FormGroup<ListChannelConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the `ListChannels` method. */
	export interface ListChannelsResponse {

		/** The requested channels, up to the number specified in `page_size`. */
		channels?: Array<Channel>;

		/** A page token that can be sent to `ListChannels` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken?: string | null;

		/** Unreachable resources, if any. */
		unreachable?: Array<string>;
	}

	/** The response message for the `ListChannels` method. */
	export interface ListChannelsResponseFormProperties {

		/** A page token that can be sent to `ListChannels` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the `ListProviders` method. */
	export interface ListProvidersResponse {

		/** A page token that can be sent to `ListProviders` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken?: string | null;

		/** The requested providers, up to the number specified in `page_size`. */
		providers?: Array<Provider>;

		/** Unreachable resources, if any. */
		unreachable?: Array<string>;
	}

	/** The response message for the `ListProviders` method. */
	export interface ListProvidersResponseFormProperties {

		/** A page token that can be sent to `ListProviders` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvidersResponseFormGroup() {
		return new FormGroup<ListProvidersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the Provider resource. */
	export interface Provider {

		/** Output only. Human friendly name for the Provider. For example "Cloud Storage". */
		displayName?: string | null;

		/** Output only. Event types for this provider. */
		eventTypes?: Array<EventType>;

		/** Output only. In `projects/{project}/locations/{location}/providers/{provider_id}` format. */
		name?: string | null;
	}

	/** A representation of the Provider resource. */
	export interface ProviderFormProperties {

		/** Output only. Human friendly name for the Provider. For example "Cloud Storage". */
		displayName: FormControl<string | null | undefined>,

		/** Output only. In `projects/{project}/locations/{location}/providers/{provider_id}` format. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the `ListTriggers` method. */
	export interface ListTriggersResponse {

		/** A page token that can be sent to `ListTriggers` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken?: string | null;

		/** The requested triggers, up to the number specified in `page_size`. */
		triggers?: Array<Trigger>;

		/** Unreachable resources, if any. */
		unreachable?: Array<string>;
	}

	/** The response message for the `ListTriggers` method. */
	export interface ListTriggersResponseFormProperties {

		/** A page token that can be sent to `ListTriggers` to request the next page. If this is empty, then there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTriggersResponseFormGroup() {
		return new FormGroup<ListTriggersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of the trigger resource. */
	export interface Trigger {

		/** Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners. */
		channel?: string | null;

		/** Output only. The reason(s) why a trigger is in FAILED state. */
		conditions?: {[id: string]: StateCondition };

		/** Output only. The creation time. */
		createTime?: string | null;

		/** Represents a target of an invocation over HTTP. */
		destination?: Destination;

		/** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined. */
		eventDataContentType?: string | null;

		/** Required. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination. */
		eventFilters?: Array<EventFilter>;

		/** Optional. User labels attached to the triggers that can be used to group resources. */
		labels?: {[id: string]: string };

		/** Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format. */
		name?: string | null;

		/** Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The `iam.serviceAccounts.actAs` permission must be granted on the service account to allow a principal to impersonate the service account. For more information, see the [Roles and permissions](/eventarc/docs/all-roles-permissions) page specific to the trigger destination. */
		serviceAccount?: string | null;

		/** Represents the transport intermediaries created for the trigger to deliver events. */
		transport?: Transport;

		/** Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid?: string | null;

		/** Output only. The last-modified time. */
		updateTime?: string | null;
	}

	/** A representation of the trigger resource. */
	export interface TriggerFormProperties {

		/** Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners. */
		channel: FormControl<string | null | undefined>,

		/** Output only. The reason(s) why a trigger is in FAILED state. */
		conditions: FormControl<{[id: string]: StateCondition } | null | undefined>,

		/** Output only. The creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined. */
		eventDataContentType: FormControl<string | null | undefined>,

		/** Optional. User labels attached to the triggers that can be used to group resources. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format. */
		name: FormControl<string | null | undefined>,

		/** Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The `iam.serviceAccounts.actAs` permission must be granted on the service account to allow a principal to impersonate the service account. For more information, see the [Roles and permissions](/eventarc/docs/all-roles-permissions) page specific to the trigger destination. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last-modified time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			conditions: new FormControl<{[id: string]: StateCondition } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			eventDataContentType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A condition that is part of the trigger state computation. */
	export interface StateCondition {

		/** The canonical code of the condition. */
		code?: StateConditionCode | null;

		/** Human-readable message. */
		message?: string | null;
	}

	/** A condition that is part of the trigger state computation. */
	export interface StateConditionFormProperties {

		/** The canonical code of the condition. */
		code: FormControl<StateConditionCode | null | undefined>,

		/** Human-readable message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStateConditionFormGroup() {
		return new FormGroup<StateConditionFormProperties>({
			code: new FormControl<StateConditionCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateConditionCode { OK = 'OK', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', ALREADY_EXISTS = 'ALREADY_EXISTS', PERMISSION_DENIED = 'PERMISSION_DENIED', UNAUTHENTICATED = 'UNAUTHENTICATED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', ABORTED = 'ABORTED', OUT_OF_RANGE = 'OUT_OF_RANGE', UNIMPLEMENTED = 'UNIMPLEMENTED', INTERNAL = 'INTERNAL', UNAVAILABLE = 'UNAVAILABLE', DATA_LOSS = 'DATA_LOSS' }


	/** Represents the transport intermediaries created for the trigger to deliver events. */
	export interface Transport {

		/** Represents a Pub/Sub transport. */
		pubsub?: Pubsub;
	}

	/** Represents the transport intermediaries created for the trigger to deliver events. */
	export interface TransportFormProperties {
	}
	export function CreateTransportFormGroup() {
		return new FormGroup<TransportFormProperties>({
		});

	}


	/** Represents a Pub/Sub transport. */
	export interface Pubsub {

		/** Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`. */
		subscription?: string | null;

		/** Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you provide here is not deleted by Eventarc at trigger deletion. */
		topic?: string | null;
	}

	/** Represents a Pub/Sub transport. */
	export interface PubsubFormProperties {

		/** Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`. */
		subscription: FormControl<string | null | undefined>,

		/** Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you provide here is not deleted by Eventarc at trigger deletion. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubFormGroup() {
		return new FormGroup<PubsubFormProperties>({
			subscription: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete a single trigger.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the trigger to be deleted.
		 * @param {boolean} allowMissing If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server.
		 * @param {string} etag If provided, the trigger will only be deleted if the etag matches the current etag on the resource.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not post it.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Eventarc_projects_locations_triggers_delete(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Get a single trigger.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the trigger to get.
		 * @return {Trigger} Successful response
		 */
		Eventarc_projects_locations_triggers_get(name: string): Observable<Trigger> {
			return this.http.get<Trigger>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a single trigger.
		 * Patch v1/{name}
		 * @param {string} name Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
		 * @param {boolean} allowMissing If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored.
		 * @param {string} updateMask The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not post it.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Eventarc_projects_locations_triggers_patch(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Trigger): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Eventarc_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Eventarc_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Eventarc_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List channel connections.
		 * Get v1/{parent}/channelConnections
		 * @param {string} parent Required. The parent collection from which to list channel connections.
		 * @param {number} pageSize The maximum number of channel connections to return on each page. Note: The service may send fewer responses.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token.
		 * @return {ListChannelConnectionsResponse} Successful response
		 */
		Eventarc_projects_locations_channelConnections_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListChannelConnectionsResponse> {
			return this.http.get<ListChannelConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelConnections&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new ChannelConnection in a particular project and location.
		 * Post v1/{parent}/channelConnections
		 * @param {string} parent Required. The parent collection in which to add this channel connection.
		 * @param {string} channelConnectionId Required. The user-provided ID to be assigned to the channel connection.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Eventarc_projects_locations_channelConnections_create(parent: string, channelConnectionId: string | null | undefined, requestBody: ChannelConnection): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelConnections&channelConnectionId=' + (channelConnectionId == null ? '' : encodeURIComponent(channelConnectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List channels.
		 * Get v1/{parent}/channels
		 * @param {string} parent Required. The parent collection to list channels on.
		 * @param {string} orderBy The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`.
		 * @param {number} pageSize The maximum number of channels to return on each page. Note: The service may send fewer.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token.
		 * @return {ListChannelsResponse} Successful response
		 */
		Eventarc_projects_locations_channels_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channels&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new channel in a particular project and location.
		 * Post v1/{parent}/channels
		 * @param {string} parent Required. The parent collection in which to add this channel.
		 * @param {string} channelId Required. The user-provided ID to be assigned to the channel.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not post it.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Eventarc_projects_locations_channels_create(parent: string, channelId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Channel): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channels&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List providers.
		 * Get v1/{parent}/providers
		 * @param {string} parent Required. The parent of the provider to get.
		 * @param {string} filter The filter field that the list request will filter on.
		 * @param {string} orderBy The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`.
		 * @param {number} pageSize The maximum number of providers to return on each page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token.
		 * @return {ListProvidersResponse} Successful response
		 */
		Eventarc_projects_locations_providers_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProvidersResponse> {
			return this.http.get<ListProvidersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/providers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List triggers.
		 * Get v1/{parent}/triggers
		 * @param {string} parent Required. The parent collection to list triggers on.
		 * @param {string} filter Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination.
		 * @param {string} orderBy The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`.
		 * @param {number} pageSize The maximum number of triggers to return on each page. Note: The service may send fewer.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token.
		 * @return {ListTriggersResponse} Successful response
		 */
		Eventarc_projects_locations_triggers_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTriggersResponse> {
			return this.http.get<ListTriggersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new trigger in a particular project and location.
		 * Post v1/{parent}/triggers
		 * @param {string} parent Required. The parent collection in which to add this trigger.
		 * @param {string} triggerId Required. The user-provided ID to be assigned to the trigger.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not post it.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Eventarc_projects_locations_triggers_create(parent: string, triggerId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Trigger): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers&triggerId=' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Eventarc_projects_locations_triggers_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Eventarc_projects_locations_triggers_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Eventarc_projects_locations_triggers_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

