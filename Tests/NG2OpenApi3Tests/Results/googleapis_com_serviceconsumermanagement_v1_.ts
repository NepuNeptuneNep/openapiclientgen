import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request to add a newly created and configured tenant project to a tenancy unit. */
	export interface AddTenantProjectRequest {

		/** This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal. */
		projectConfig?: TenantProjectConfig;

		/** Required. Tag of the added project. Must be less than 128 characters. Required. */
		tag?: string | null;
	}

	/** Request to add a newly created and configured tenant project to a tenancy unit. */
	export interface AddTenantProjectRequestFormProperties {

		/** Required. Tag of the added project. Must be less than 128 characters. Required. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateAddTenantProjectRequestFormGroup() {
		return new FormGroup<AddTenantProjectRequestFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal. */
	export interface TenantProjectConfig {

		/** Describes the billing configuration for a new tenant project. */
		billingConfig?: BillingConfig;

		/** Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it. Valid folder resource names have the format `folders/{folder_number}` (for example, `folders/123456`). */
		folder?: string | null;

		/** Labels that are applied to this project. */
		labels?: {[id: string]: string };

		/** Describes the service account configuration for the tenant project. */
		serviceAccountConfig?: ServiceAccountConfig;

		/** Google Cloud API names of services that are activated on this project during provisioning. If any of these services can't be activated, the request fails. For example: 'compute.googleapis.com','cloudfunctions.googleapis.com' */
		services?: Array<string>;

		/** Describes policy settings that can be applied to a newly created tenant project. */
		tenantProjectPolicy?: TenantProjectPolicy;
	}

	/** This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal. */
	export interface TenantProjectConfigFormProperties {

		/** Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it. Valid folder resource names have the format `folders/{folder_number}` (for example, `folders/123456`). */
		folder: FormControl<string | null | undefined>,

		/** Labels that are applied to this project. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTenantProjectConfigFormGroup() {
		return new FormGroup<TenantProjectConfigFormProperties>({
			folder: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes the billing configuration for a new tenant project. */
	export interface BillingConfig {

		/** Name of the billing account. For example `billingAccounts/012345-567890-ABCDEF`. */
		billingAccount?: string | null;
	}

	/** Describes the billing configuration for a new tenant project. */
	export interface BillingConfigFormProperties {

		/** Name of the billing account. For example `billingAccounts/012345-567890-ABCDEF`. */
		billingAccount: FormControl<string | null | undefined>,
	}
	export function CreateBillingConfigFormGroup() {
		return new FormGroup<BillingConfigFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the service account configuration for the tenant project. */
	export interface ServiceAccountConfig {

		/** ID of the IAM service account to be created in tenant project. The email format of the service account is "@.iam.gserviceaccount.com". This account ID must be unique within tenant project and service producers have to guarantee it. The ID must be 6-30 characters long, and match the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])`. */
		accountId?: string | null;

		/** Roles for the associated service account for the tenant project. */
		tenantProjectRoles?: Array<string>;
	}

	/** Describes the service account configuration for the tenant project. */
	export interface ServiceAccountConfigFormProperties {

		/** ID of the IAM service account to be created in tenant project. The email format of the service account is "@.iam.gserviceaccount.com". This account ID must be unique within tenant project and service producers have to guarantee it. The ID must be 6-30 characters long, and match the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])`. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountConfigFormGroup() {
		return new FormGroup<ServiceAccountConfigFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes policy settings that can be applied to a newly created tenant project. */
	export interface TenantProjectPolicy {

		/** Policy bindings to be applied to the tenant project, in addition to the 'roles/owner' role granted to the Service Consumer Management service account. */
		policyBindings?: Array<PolicyBinding>;
	}

	/** Describes policy settings that can be applied to a newly created tenant project. */
	export interface TenantProjectPolicyFormProperties {
	}
	export function CreateTenantProjectPolicyFormGroup() {
		return new FormGroup<TenantProjectPolicyFormProperties>({
		});

	}


	/** Translates to IAM Policy bindings (without auditing at this level) */
	export interface PolicyBinding {

		/** Uses the same format as in IAM policy. `member` must include both a prefix and ID. For example, `user:{emailId}`, `serviceAccount:{emailId}`, `group:{emailId}`. */
		members?: Array<string>;

		/** Role. (https://cloud.google.com/iam/docs/understanding-roles) For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Translates to IAM Policy bindings (without auditing at this level) */
	export interface PolicyBindingFormProperties {

		/** Role. (https://cloud.google.com/iam/docs/understanding-roles) For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBindingFormGroup() {
		return new FormGroup<PolicyBindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology. */
	export interface Api {

		/** The methods of this interface, in unspecified order. */
		methods?: Array<Method>;

		/** Included interfaces. See Mixin. */
		mixins?: Array<Mixin>;

		/** The fully qualified name of this interface, including package name followed by the interface's simple name. */
		name?: string | null;

		/** Any metadata attached to the interface. */
		options?: Array<Option>;

		/** `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined. */
		sourceContext?: SourceContext;

		/** The source syntax of the service. */
		syntax?: MethodSyntax | null;

		/** A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in `v`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces. */
		version?: string | null;
	}

	/** Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology. */
	export interface ApiFormProperties {

		/** The fully qualified name of this interface, including package name followed by the interface's simple name. */
		name: FormControl<string | null | undefined>,

		/** The source syntax of the service. */
		syntax: FormControl<MethodSyntax | null | undefined>,

		/** A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in `v`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<MethodSyntax | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Method represents a method of an API interface. */
	export interface Method {

		/** The simple name of this method. */
		name?: string | null;

		/** Any metadata attached to the method. */
		options?: Array<Option>;

		/** If true, the request is streamed. */
		requestStreaming?: boolean | null;

		/** A URL of the input message type. */
		requestTypeUrl?: string | null;

		/** If true, the response is streamed. */
		responseStreaming?: boolean | null;

		/** The URL of the output message type. */
		responseTypeUrl?: string | null;

		/** The source syntax of this method. */
		syntax?: MethodSyntax | null;
	}

	/** Method represents a method of an API interface. */
	export interface MethodFormProperties {

		/** The simple name of this method. */
		name: FormControl<string | null | undefined>,

		/** If true, the request is streamed. */
		requestStreaming: FormControl<boolean | null | undefined>,

		/** A URL of the input message type. */
		requestTypeUrl: FormControl<string | null | undefined>,

		/** If true, the response is streamed. */
		responseStreaming: FormControl<boolean | null | undefined>,

		/** The URL of the output message type. */
		responseTypeUrl: FormControl<string | null | undefined>,

		/** The source syntax of this method. */
		syntax: FormControl<MethodSyntax | null | undefined>,
	}
	export function CreateMethodFormGroup() {
		return new FormGroup<MethodFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			requestStreaming: new FormControl<boolean | null | undefined>(undefined),
			requestTypeUrl: new FormControl<string | null | undefined>(undefined),
			responseStreaming: new FormControl<boolean | null | undefined>(undefined),
			responseTypeUrl: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<MethodSyntax | null | undefined>(undefined),
		});

	}


	/** A protocol buffer option, which can be attached to a message, field, enumeration, etc. */
	export interface Option {

		/** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `"map_entry"`. For custom options, it should be the fully-qualified name. For example, `"google.api.http"`. */
		name?: string | null;

		/** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
		value?: {[id: string]: any };
	}

	/** A protocol buffer option, which can be attached to a message, field, enumeration, etc. */
	export interface OptionFormProperties {

		/** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `"map_entry"`. For custom options, it should be the fully-qualified name. For example, `"google.api.http"`. */
		name: FormControl<string | null | undefined>,

		/** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum MethodSyntax { SYNTAX_PROTO2 = 'SYNTAX_PROTO2', SYNTAX_PROTO3 = 'SYNTAX_PROTO3', SYNTAX_EDITIONS = 'SYNTAX_EDITIONS' }


	/** Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows: - If after comment and whitespace stripping, the documentation string of the redeclared method is empty, it will be inherited from the original method. - Each annotation belonging to the service config (http, visibility) which is not set in the redeclared method will be inherited. - If an http annotation is inherited, the path pattern will be modified as follows. Any version prefix will be replaced by the version of the including interface plus the root path if specified. Example of a simple mixin: package google.acl.v1; service AccessControl { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v1/{resource=**}:getAcl"; } } package google.storage.v2; service Storage { // rpc GetAcl(GetAclRequest) returns (Acl); // Get a data record. rpc GetData(GetDataRequest) returns (Data) { option (google.api.http).get = "/v2/{resource=**}"; } } Example of a mixin configuration: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inherting documentation and annotations as follows: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/{resource=**}:getAcl"; } ... } Note how the version in the path pattern changed from `v1` to `v2`. If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl root: acls This implies the following inherited HTTP annotation: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/acls/{resource=**}:getAcl"; } ... } */
	export interface Mixin {

		/** The fully qualified name of the interface which is included. */
		name?: string | null;

		/** If non-empty specifies a path under which inherited HTTP paths are rooted. */
		root?: string | null;
	}

	/** Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows: - If after comment and whitespace stripping, the documentation string of the redeclared method is empty, it will be inherited from the original method. - Each annotation belonging to the service config (http, visibility) which is not set in the redeclared method will be inherited. - If an http annotation is inherited, the path pattern will be modified as follows. Any version prefix will be replaced by the version of the including interface plus the root path if specified. Example of a simple mixin: package google.acl.v1; service AccessControl { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v1/{resource=**}:getAcl"; } } package google.storage.v2; service Storage { // rpc GetAcl(GetAclRequest) returns (Acl); // Get a data record. rpc GetData(GetDataRequest) returns (Data) { option (google.api.http).get = "/v2/{resource=**}"; } } Example of a mixin configuration: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inherting documentation and annotations as follows: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/{resource=**}:getAcl"; } ... } Note how the version in the path pattern changed from `v1` to `v2`. If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl root: acls This implies the following inherited HTTP annotation: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/acls/{resource=**}:getAcl"; } ... } */
	export interface MixinFormProperties {

		/** The fully qualified name of the interface which is included. */
		name: FormControl<string | null | undefined>,

		/** If non-empty specifies a path under which inherited HTTP paths are rooted. */
		root: FormControl<string | null | undefined>,
	}
	export function CreateMixinFormGroup() {
		return new FormGroup<MixinFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			root: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined. */
	export interface SourceContext {

		/** The path-qualified name of the .proto file that contained the associated protobuf element. For example: `"google/protobuf/source_context.proto"`. */
		fileName?: string | null;
	}

	/** `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined. */
	export interface SourceContextFormProperties {

		/** The path-qualified name of the .proto file that contained the associated protobuf element. For example: `"google/protobuf/source_context.proto"`. */
		fileName: FormControl<string | null | undefined>,
	}
	export function CreateSourceContextFormGroup() {
		return new FormGroup<SourceContextFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to apply configuration to an existing tenant project. */
	export interface ApplyTenantProjectConfigRequest {

		/** This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal. */
		projectConfig?: TenantProjectConfig;

		/** Required. Tag of the project. Must be less than 128 characters. Required. */
		tag?: string | null;
	}

	/** Request to apply configuration to an existing tenant project. */
	export interface ApplyTenantProjectConfigRequestFormProperties {

		/** Required. Tag of the project. Must be less than 128 characters. Required. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateApplyTenantProjectConfigRequestFormGroup() {
		return new FormGroup<ApplyTenantProjectConfigRequestFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to attach an existing project to the tenancy unit as a new tenant resource. */
	export interface AttachTenantProjectRequest {

		/** When attaching an external project, this is in the format of `projects/{project_number}`. */
		externalResource?: string | null;

		/** When attaching a reserved project already in tenancy units, this is the tag of a tenant resource under the tenancy unit for the managed service's service producer project. The reserved tenant resource must be in an active state. */
		reservedResource?: string | null;

		/** Required. Tag of the tenant resource after attachment. Must be less than 128 characters. Required. */
		tag?: string | null;
	}

	/** Request to attach an existing project to the tenancy unit as a new tenant resource. */
	export interface AttachTenantProjectRequestFormProperties {

		/** When attaching an external project, this is in the format of `projects/{project_number}`. */
		externalResource: FormControl<string | null | undefined>,

		/** When attaching a reserved project already in tenancy units, this is the tag of a tenant resource under the tenancy unit for the managed service's service producer project. The reserved tenant resource must be in an active state. */
		reservedResource: FormControl<string | null | undefined>,

		/** Required. Tag of the tenant resource after attachment. Must be less than 128 characters. Required. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateAttachTenantProjectRequestFormGroup() {
		return new FormGroup<AttachTenantProjectRequestFormProperties>({
			externalResource: new FormControl<string | null | undefined>(undefined),
			reservedResource: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32). */
	export interface AuthProvider {

		/** The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - "https://[service.name]/[google.protobuf.Api.name]" - "https://[service.name]/" will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/ Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com */
		audiences?: string | null;

		/** Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec. */
		authorizationUrl?: string | null;

		/** The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`. Example: "bookstore_auth". */
		id?: string | null;

		/** Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address. Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com */
		issuer?: string | null;

		/** URL of the provider's public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document: - can be retrieved from [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account). Example: https://www.googleapis.com/oauth2/v1/certs */
		jwksUri?: string | null;

		/** Defines the locations to extract the JWT. For now it is only used by the Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations] (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations) JWT locations can be one of HTTP headers, URL query parameters or cookies. The rule is that the first match wins. If not specified, default to use following 3 locations: 1) Authorization: Bearer 2) x-goog-iap-jwt-assertion 3) access_token query parameter Default locations can be specified as followings: jwt_locations: - header: Authorization value_prefix: "Bearer " - header: x-goog-iap-jwt-assertion - query: access_token */
		jwtLocations?: Array<JwtLocation>;
	}

	/** Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32). */
	export interface AuthProviderFormProperties {

		/** The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - "https://[service.name]/[google.protobuf.Api.name]" - "https://[service.name]/" will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/ Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com */
		audiences: FormControl<string | null | undefined>,

		/** Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec. */
		authorizationUrl: FormControl<string | null | undefined>,

		/** The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`. Example: "bookstore_auth". */
		id: FormControl<string | null | undefined>,

		/** Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address. Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com */
		issuer: FormControl<string | null | undefined>,

		/** URL of the provider's public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document: - can be retrieved from [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account). Example: https://www.googleapis.com/oauth2/v1/certs */
		jwksUri: FormControl<string | null | undefined>,
	}
	export function CreateAuthProviderFormGroup() {
		return new FormGroup<AuthProviderFormProperties>({
			audiences: new FormControl<string | null | undefined>(undefined),
			authorizationUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			jwksUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a location to extract JWT from an API request. */
	export interface JwtLocation {

		/** Specifies cookie name to extract JWT token. */
		cookie?: string | null;

		/** Specifies HTTP header name to extract JWT token. */
		header?: string | null;

		/** Specifies URL query parameter name to extract JWT token. */
		query?: string | null;

		/** The value prefix. The value format is "value_prefix{token}" Only applies to "in" header type. Must be empty for "in" query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed. For example, for "Authorization: Bearer {JWT}", value_prefix="Bearer " with a space at the end. */
		valuePrefix?: string | null;
	}

	/** Specifies a location to extract JWT from an API request. */
	export interface JwtLocationFormProperties {

		/** Specifies cookie name to extract JWT token. */
		cookie: FormControl<string | null | undefined>,

		/** Specifies HTTP header name to extract JWT token. */
		header: FormControl<string | null | undefined>,

		/** Specifies URL query parameter name to extract JWT token. */
		query: FormControl<string | null | undefined>,

		/** The value prefix. The value format is "value_prefix{token}" Only applies to "in" header type. Must be empty for "in" query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed. For example, for "Authorization: Bearer {JWT}", value_prefix="Bearer " with a space at the end. */
		valuePrefix: FormControl<string | null | undefined>,
	}
	export function CreateJwtLocationFormGroup() {
		return new FormGroup<JwtLocationFormProperties>({
			cookie: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			valuePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32). */
	export interface AuthRequirement {

		/** NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components. The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience "https://Service_name/API_name" will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience "https://library-example.googleapis.com/google.example.library.v1.LibraryService". Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com */
		audiences?: string | null;

		/** id from authentication provider. Example: provider_id: bookstore_auth */
		providerId?: string | null;
	}

	/** User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32). */
	export interface AuthRequirementFormProperties {

		/** NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components. The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience "https://Service_name/API_name" will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience "https://library-example.googleapis.com/google.example.library.v1.LibraryService". Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com */
		audiences: FormControl<string | null | undefined>,

		/** id from authentication provider. Example: provider_id: bookstore_auth */
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateAuthRequirementFormGroup() {
		return new FormGroup<AuthRequirementFormProperties>({
			audiences: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read */
	export interface Authentication {

		/** Defines a set of authentication providers that a service supports. */
		providers?: Array<AuthProvider>;

		/** A list of authentication rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<AuthenticationRule>;
	}

	/** `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read */
	export interface AuthenticationFormProperties {
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
		});

	}


	/** Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored. */
	export interface AuthenticationRule {

		/** If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests. */
		allowWithoutCredential?: boolean | null;

		/** OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions. */
		oauth?: OAuthRequirements;

		/** Requirements for additional authentication providers. */
		requirements?: Array<AuthRequirement>;

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored. */
	export interface AuthenticationRuleFormProperties {

		/** If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests. */
		allowWithoutCredential: FormControl<boolean | null | undefined>,

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationRuleFormGroup() {
		return new FormGroup<AuthenticationRuleFormProperties>({
			allowWithoutCredential: new FormControl<boolean | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions. */
	export interface OAuthRequirements {

		/** The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted. Example: canonical_scopes: https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/calendar.read */
		canonicalScopes?: string | null;
	}

	/** OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions. */
	export interface OAuthRequirementsFormProperties {

		/** The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted. Example: canonical_scopes: https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/calendar.read */
		canonicalScopes: FormControl<string | null | undefined>,
	}
	export function CreateOAuthRequirementsFormGroup() {
		return new FormGroup<OAuthRequirementsFormProperties>({
			canonicalScopes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `Backend` defines the backend configuration for a service. */
	export interface Backend {

		/** A list of API backend rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<BackendRule>;
	}

	/** `Backend` defines the backend configuration for a service. */
	export interface BackendFormProperties {
	}
	export function CreateBackendFormGroup() {
		return new FormGroup<BackendFormProperties>({
		});

	}


	/** A backend rule provides configuration for an individual API element. */
	export interface BackendRule {

		/** The address of the API backend. The scheme is used to determine the backend protocol and security. The following schemes are accepted: SCHEME PROTOCOL SECURITY http:// HTTP None https:// HTTP TLS grpc:// gRPC None grpcs:// gRPC TLS It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms. If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS For HTTP backends, use protocol to specify the protocol version. */
		address?: string | null;

		/**
		 * The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment.
		 * Type: double
		 */
		deadline?: number | null;

		/** When disable_auth is true, a JWT ID token won't be generated and the original "Authorization" HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header. */
		disableAuth?: boolean | null;

		/** The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP "authorization" header, and sent to the backend. */
		jwtAudience?: string | null;

		/**
		 * Deprecated, do not use.
		 * Type: double
		 */
		minDeadline?: number | null;

		/**
		 * The number of seconds to wait for the completion of a long running operation. The default is no deadline.
		 * Type: double
		 */
		operationDeadline?: number | null;

		/** The map between request protocol and the backend address. */
		overridesByRequestProtocol?: {[id: string]: BackendRule };
		pathTranslation?: BackendRulePathTranslation | null;

		/** The protocol used for sending a request to the backend. The supported values are "http/1.1" and "h2". The default value is inferred from the scheme in the address field: SCHEME PROTOCOL http:// http/1.1 https:// http/1.1 grpc:// h2 grpcs:// h2 For secure HTTP backends (https://) that support HTTP/2, set this field to "h2" for improved performance. Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values. */
		protocol?: string | null;

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** A backend rule provides configuration for an individual API element. */
	export interface BackendRuleFormProperties {

		/** The address of the API backend. The scheme is used to determine the backend protocol and security. The following schemes are accepted: SCHEME PROTOCOL SECURITY http:// HTTP None https:// HTTP TLS grpc:// gRPC None grpcs:// gRPC TLS It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms. If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS For HTTP backends, use protocol to specify the protocol version. */
		address: FormControl<string | null | undefined>,

		/**
		 * The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment.
		 * Type: double
		 */
		deadline: FormControl<number | null | undefined>,

		/** When disable_auth is true, a JWT ID token won't be generated and the original "Authorization" HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header. */
		disableAuth: FormControl<boolean | null | undefined>,

		/** The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP "authorization" header, and sent to the backend. */
		jwtAudience: FormControl<string | null | undefined>,

		/**
		 * Deprecated, do not use.
		 * Type: double
		 */
		minDeadline: FormControl<number | null | undefined>,

		/**
		 * The number of seconds to wait for the completion of a long running operation. The default is no deadline.
		 * Type: double
		 */
		operationDeadline: FormControl<number | null | undefined>,

		/** The map between request protocol and the backend address. */
		overridesByRequestProtocol: FormControl<{[id: string]: BackendRule } | null | undefined>,
		pathTranslation: FormControl<BackendRulePathTranslation | null | undefined>,

		/** The protocol used for sending a request to the backend. The supported values are "http/1.1" and "h2". The default value is inferred from the scheme in the address field: SCHEME PROTOCOL http:// http/1.1 https:// http/1.1 grpc:// h2 grpcs:// h2 For secure HTTP backends (https://) that support HTTP/2, set this field to "h2" for improved performance. Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values. */
		protocol: FormControl<string | null | undefined>,

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateBackendRuleFormGroup() {
		return new FormGroup<BackendRuleFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			deadline: new FormControl<number | null | undefined>(undefined),
			disableAuth: new FormControl<boolean | null | undefined>(undefined),
			jwtAudience: new FormControl<string | null | undefined>(undefined),
			minDeadline: new FormControl<number | null | undefined>(undefined),
			operationDeadline: new FormControl<number | null | undefined>(undefined),
			overridesByRequestProtocol: new FormControl<{[id: string]: BackendRule } | null | undefined>(undefined),
			pathTranslation: new FormControl<BackendRulePathTranslation | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackendRulePathTranslation { PATH_TRANSLATION_UNSPECIFIED = 'PATH_TRANSLATION_UNSPECIFIED', CONSTANT_ADDRESS = 'CONSTANT_ADDRESS', APPEND_PATH_TO_ADDRESS = 'APPEND_PATH_TO_ADDRESS' }


	/** Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: "1" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count */
	export interface Billing {

		/** Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination. */
		consumerDestinations?: Array<BillingDestination>;
	}

	/** Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: "1" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count */
	export interface BillingFormProperties {
	}
	export function CreateBillingFormGroup() {
		return new FormGroup<BillingFormProperties>({
		});

	}


	/** Configuration of a specific billing destination (Currently only support bill against consumer project). */
	export interface BillingDestination {

		/** Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section. */
		metrics?: Array<string>;

		/** The monitored resource type. The type must be defined in Service.monitored_resources section. */
		monitoredResource?: string | null;
	}

	/** Configuration of a specific billing destination (Currently only support bill against consumer project). */
	export interface BillingDestinationFormProperties {

		/** The monitored resource type. The type must be defined in Service.monitored_resources section. */
		monitoredResource: FormControl<string | null | undefined>,
	}
	export function CreateBillingDestinationFormGroup() {
		return new FormGroup<BillingDestinationFormProperties>({
			monitoredResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Details about how and where to publish client libraries. */
	export interface ClientLibrarySettings {

		/** Settings for C++ client libraries. */
		cppSettings?: CppSettings;

		/** Settings for Dotnet client libraries. */
		dotnetSettings?: DotnetSettings;

		/** Settings for Go client libraries. */
		goSettings?: GoSettings;

		/** Settings for Java client libraries. */
		javaSettings?: JavaSettings;

		/** Launch stage of this version of the API. */
		launchStage?: ClientLibrarySettingsLaunchStage | null;

		/** Settings for Node client libraries. */
		nodeSettings?: NodeSettings;

		/** Settings for Php client libraries. */
		phpSettings?: PhpSettings;

		/** Settings for Python client libraries. */
		pythonSettings?: PythonSettings;

		/** When using transport=rest, the client request will encode enums as numbers rather than strings. */
		restNumericEnums?: boolean | null;

		/** Settings for Ruby client libraries. */
		rubySettings?: RubySettings;

		/** Version of the API to apply these settings to. This is the full protobuf package for the API, ending in the version element. Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1". */
		version?: string | null;
	}

	/** Details about how and where to publish client libraries. */
	export interface ClientLibrarySettingsFormProperties {

		/** Launch stage of this version of the API. */
		launchStage: FormControl<ClientLibrarySettingsLaunchStage | null | undefined>,

		/** When using transport=rest, the client request will encode enums as numbers rather than strings. */
		restNumericEnums: FormControl<boolean | null | undefined>,

		/** Version of the API to apply these settings to. This is the full protobuf package for the API, ending in the version element. Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateClientLibrarySettingsFormGroup() {
		return new FormGroup<ClientLibrarySettingsFormProperties>({
			launchStage: new FormControl<ClientLibrarySettingsLaunchStage | null | undefined>(undefined),
			restNumericEnums: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for C++ client libraries. */
	export interface CppSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for C++ client libraries. */
	export interface CppSettingsFormProperties {
	}
	export function CreateCppSettingsFormGroup() {
		return new FormGroup<CppSettingsFormProperties>({
		});

	}


	/** Required information for every language. */
	export interface CommonLanguageSettings {

		/** The destination where API teams want this client library to be published. */
		destinations?: Array<string>;

		/** Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest */
		referenceDocsUri?: string | null;
	}

	/** Required information for every language. */
	export interface CommonLanguageSettingsFormProperties {

		/** Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest */
		referenceDocsUri: FormControl<string | null | undefined>,
	}
	export function CreateCommonLanguageSettingsFormGroup() {
		return new FormGroup<CommonLanguageSettingsFormProperties>({
			referenceDocsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for Dotnet client libraries. */
	export interface DotnetSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;

		/** Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision */
		forcedNamespaceAliases?: Array<string>;

		/** Method signatures (in the form "service.method(signature)") which are provided separately, so shouldn't be generated. Snippets *calling* these methods are still generated, however. */
		handwrittenSignatures?: Array<string>;

		/** List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: "documentai.googleapis.com/Location" */
		ignoredResources?: Array<string>;

		/** Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset" */
		renamedResources?: {[id: string]: string };

		/** Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi. */
		renamedServices?: {[id: string]: string };
	}

	/** Settings for Dotnet client libraries. */
	export interface DotnetSettingsFormProperties {

		/** Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset" */
		renamedResources: FormControl<{[id: string]: string } | null | undefined>,

		/** Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi. */
		renamedServices: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDotnetSettingsFormGroup() {
		return new FormGroup<DotnetSettingsFormProperties>({
			renamedResources: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			renamedServices: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Settings for Go client libraries. */
	export interface GoSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for Go client libraries. */
	export interface GoSettingsFormProperties {
	}
	export function CreateGoSettingsFormGroup() {
		return new FormGroup<GoSettingsFormProperties>({
		});

	}


	/** Settings for Java client libraries. */
	export interface JavaSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;

		/** The package name to use in Java. Clobbers the java_package option set in the protobuf. This should be used **only** by APIs who have already set the language_settings.java.package_name" field in gapic.yaml. API teams should use the protobuf java_package option where possible. Example of a YAML configuration:: publishing: java_settings: library_package: com.google.cloud.pubsub.v1 */
		libraryPackage?: string | null;

		/** Configure the Java class name to use instead of the service's for its corresponding generated GAPIC client. Keys are fully-qualified service names as they appear in the protobuf (including the full the language_settings.java.interface_names" field in gapic.yaml. API teams should otherwise use the service name as it appears in the protobuf. Example of a YAML configuration:: publishing: java_settings: service_class_names: - google.pubsub.v1.Publisher: TopicAdmin - google.pubsub.v1.Subscriber: SubscriptionAdmin */
		serviceClassNames?: {[id: string]: string };
	}

	/** Settings for Java client libraries. */
	export interface JavaSettingsFormProperties {

		/** The package name to use in Java. Clobbers the java_package option set in the protobuf. This should be used **only** by APIs who have already set the language_settings.java.package_name" field in gapic.yaml. API teams should use the protobuf java_package option where possible. Example of a YAML configuration:: publishing: java_settings: library_package: com.google.cloud.pubsub.v1 */
		libraryPackage: FormControl<string | null | undefined>,

		/** Configure the Java class name to use instead of the service's for its corresponding generated GAPIC client. Keys are fully-qualified service names as they appear in the protobuf (including the full the language_settings.java.interface_names" field in gapic.yaml. API teams should otherwise use the service name as it appears in the protobuf. Example of a YAML configuration:: publishing: java_settings: service_class_names: - google.pubsub.v1.Publisher: TopicAdmin - google.pubsub.v1.Subscriber: SubscriptionAdmin */
		serviceClassNames: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJavaSettingsFormGroup() {
		return new FormGroup<JavaSettingsFormProperties>({
			libraryPackage: new FormControl<string | null | undefined>(undefined),
			serviceClassNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum ClientLibrarySettingsLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED', UNIMPLEMENTED = 'UNIMPLEMENTED', PRELAUNCH = 'PRELAUNCH', EARLY_ACCESS = 'EARLY_ACCESS', ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED' }


	/** Settings for Node client libraries. */
	export interface NodeSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for Node client libraries. */
	export interface NodeSettingsFormProperties {
	}
	export function CreateNodeSettingsFormGroup() {
		return new FormGroup<NodeSettingsFormProperties>({
		});

	}


	/** Settings for Php client libraries. */
	export interface PhpSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for Php client libraries. */
	export interface PhpSettingsFormProperties {
	}
	export function CreatePhpSettingsFormGroup() {
		return new FormGroup<PhpSettingsFormProperties>({
		});

	}


	/** Settings for Python client libraries. */
	export interface PythonSettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for Python client libraries. */
	export interface PythonSettingsFormProperties {
	}
	export function CreatePythonSettingsFormGroup() {
		return new FormGroup<PythonSettingsFormProperties>({
		});

	}


	/** Settings for Ruby client libraries. */
	export interface RubySettings {

		/** Required information for every language. */
		common?: CommonLanguageSettings;
	}

	/** Settings for Ruby client libraries. */
	export interface RubySettingsFormProperties {
	}
	export function CreateRubySettingsFormGroup() {
		return new FormGroup<RubySettingsFormProperties>({
		});

	}


	/** `Context` defines which contexts an API requests. Example: context: rules: - selector: "*" requested: - google.rpc.context.ProjectContext - google.rpc.context.OriginContext The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`. Available context types are defined in package `google.rpc.context`. This also provides mechanism to allowlist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext--bin” and “x-goog-ext--jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file: Example: context: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allowed_request_extensions: - google.foo.v1.NewExtension allowed_response_extensions: - google.foo.v1.NewExtension You can also specify extension ID instead of fully qualified extension name here. */
	export interface Context {

		/** A list of RPC context rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<ContextRule>;
	}

	/** `Context` defines which contexts an API requests. Example: context: rules: - selector: "*" requested: - google.rpc.context.ProjectContext - google.rpc.context.OriginContext The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`. Available context types are defined in package `google.rpc.context`. This also provides mechanism to allowlist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext--bin” and “x-goog-ext--jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file: Example: context: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allowed_request_extensions: - google.foo.v1.NewExtension allowed_response_extensions: - google.foo.v1.NewExtension You can also specify extension ID instead of fully qualified extension name here. */
	export interface ContextFormProperties {
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
		});

	}


	/** A context rule provides information about the context for an individual API element. */
	export interface ContextRule {

		/** A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend. */
		allowedRequestExtensions?: Array<string>;

		/** A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client. */
		allowedResponseExtensions?: Array<string>;

		/** A list of full type names of provided contexts. */
		provided?: Array<string>;

		/** A list of full type names of requested contexts. */
		requested?: Array<string>;

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** A context rule provides information about the context for an individual API element. */
	export interface ContextRuleFormProperties {

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateContextRuleFormGroup() {
		return new FormGroup<ContextRuleFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com */
	export interface Control {

		/** The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com */
		environment?: string | null;

		/** Defines policies applying to the API methods of the service. */
		methodPolicies?: Array<MethodPolicy>;
	}

	/** Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com */
	export interface ControlFormProperties {

		/** The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateControlFormGroup() {
		return new FormGroup<ControlFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines policies applying to an RPC method. */
	export interface MethodPolicy {

		/** Policies that are applicable to the request message. */
		requestPolicies?: Array<FieldPolicy>;

		/** Selects a method to which these policies should be enforced, for example, "google.pubsub.v1.Subscriber.CreateSubscription". Refer to selector for syntax details. NOTE: This field must not be set in the proto annotation. It will be automatically filled by the service config compiler . */
		selector?: string | null;
	}

	/** Defines policies applying to an RPC method. */
	export interface MethodPolicyFormProperties {

		/** Selects a method to which these policies should be enforced, for example, "google.pubsub.v1.Subscriber.CreateSubscription". Refer to selector for syntax details. NOTE: This field must not be set in the proto annotation. It will be automatically filled by the service config compiler . */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateMethodPolicyFormGroup() {
		return new FormGroup<MethodPolicyFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google API Policy Annotation This message defines a simple API policy annotation that can be used to annotate API request and response message fields with applicable policies. One field may have multiple applicable policies that must all be satisfied before a request can be processed. This policy annotation is used to generate the overall policy that will be used for automatic runtime policy enforcement and documentation generation. */
	export interface FieldPolicy {

		/** Specifies the required permission(s) for the resource referred to by the field. It requires the field contains a valid resource reference, and the request must pass the permission checks to proceed. For example, "resourcemanager.projects.get". */
		resourcePermission?: string | null;

		/** Specifies the resource type for the resource referred to by the field. */
		resourceType?: string | null;

		/** Selects one or more request or response message fields to apply this `FieldPolicy`. When a `FieldPolicy` is used in proto annotation, the selector must be left as empty. The service config generator will automatically fill the correct value. When a `FieldPolicy` is used in service config, the selector must be a comma-separated string with valid request or response field paths, such as "foo.bar" or "foo.bar,foo.baz". */
		selector?: string | null;
	}

	/** Google API Policy Annotation This message defines a simple API policy annotation that can be used to annotate API request and response message fields with applicable policies. One field may have multiple applicable policies that must all be satisfied before a request can be processed. This policy annotation is used to generate the overall policy that will be used for automatic runtime policy enforcement and documentation generation. */
	export interface FieldPolicyFormProperties {

		/** Specifies the required permission(s) for the resource referred to by the field. It requires the field contains a valid resource reference, and the request must pass the permission checks to proceed. For example, "resourcemanager.projects.get". */
		resourcePermission: FormControl<string | null | undefined>,

		/** Specifies the resource type for the resource referred to by the field. */
		resourceType: FormControl<string | null | undefined>,

		/** Selects one or more request or response message fields to apply this `FieldPolicy`. When a `FieldPolicy` is used in proto annotation, the selector must be left as empty. The service config generator will automatically fill the correct value. When a `FieldPolicy` is used in service config, the selector must be a comma-separated string with valid request or response field paths, such as "foo.bar" or "foo.bar,foo.baz". */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateFieldPolicyFormGroup() {
		return new FormGroup<FieldPolicyFormProperties>({
			resourcePermission: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create a tenancy unit for a service consumer of a managed service. */
	export interface CreateTenancyUnitRequest {

		/** Optional. Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn't provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling `CreateTenancyUnit` returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails. */
		tenancyUnitId?: string | null;
	}

	/** Request to create a tenancy unit for a service consumer of a managed service. */
	export interface CreateTenancyUnitRequestFormProperties {

		/** Optional. Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn't provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling `CreateTenancyUnit` returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails. */
		tenancyUnitId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTenancyUnitRequestFormGroup() {
		return new FormGroup<CreateTenancyUnitRequestFormProperties>({
			tenancyUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError */
	export interface CustomError {

		/** The list of custom error rules that apply to individual API messages. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<CustomErrorRule>;

		/** The list of custom error detail types, e.g. 'google.foo.v1.CustomError'. */
		types?: Array<string>;
	}

	/** Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError */
	export interface CustomErrorFormProperties {
	}
	export function CreateCustomErrorFormGroup() {
		return new FormGroup<CustomErrorFormProperties>({
		});

	}


	/** A custom error rule. */
	export interface CustomErrorRule {

		/** Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload. */
		isErrorType?: boolean | null;

		/** Selects messages to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** A custom error rule. */
	export interface CustomErrorRuleFormProperties {

		/** Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload. */
		isErrorType: FormControl<boolean | null | undefined>,

		/** Selects messages to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateCustomErrorRuleFormGroup() {
		return new FormGroup<CustomErrorRuleFormProperties>({
			isErrorType: new FormControl<boolean | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom pattern is used for defining custom HTTP verb. */
	export interface CustomHttpPattern {

		/** The name of this custom HTTP verb. */
		kind?: string | null;

		/** The path matched by this custom verb. */
		path?: string | null;
	}

	/** A custom pattern is used for defining custom HTTP verb. */
	export interface CustomHttpPatternFormProperties {

		/** The name of this custom HTTP verb. */
		kind: FormControl<string | null | undefined>,

		/** The path matched by this custom verb. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateCustomHttpPatternFormGroup() {
		return new FormGroup<CustomHttpPatternFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message to delete tenant project resource from the tenancy unit. */
	export interface DeleteTenantProjectRequest {

		/** Required. Tag of the resource within the tenancy unit. */
		tag?: string | null;
	}

	/** Request message to delete tenant project resource from the tenancy unit. */
	export interface DeleteTenantProjectRequestFormProperties {

		/** Required. Tag of the resource within the tenancy unit. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTenantProjectRequestFormGroup() {
		return new FormGroup<DeleteTenantProjectRequestFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `Documentation` provides the information for describing a service. Example: documentation: summary: > The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages: - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: > ... - selector: google.calendar.Calendar.Put description: > ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation. */
	export interface Documentation {

		/** The URL to the root of documentation. */
		documentationRootUrl?: string | null;

		/** Declares a single overview page. For example: documentation: summary: ... overview: (== include overview.md ==) This is a shortcut for the following declaration (using pages style): documentation: summary: ... pages: - name: Overview content: (== include overview.md ==) Note: you cannot specify both `overview` field and `pages` field. */
		overview?: string | null;

		/** The top level pages for the documentation set. */
		pages?: Array<Page>;

		/** A list of documentation rules that apply to individual API elements. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<DocumentationRule>;

		/** Specifies section and content to override boilerplate content provided by go/api-docgen. Currently overrides following sections: 1. rest.service.client_libraries */
		sectionOverrides?: Array<Page>;

		/** Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to. */
		serviceRootUrl?: string | null;

		/** A short description of what the service does. The summary must be plain text. It becomes the overview of the service displayed in Google Cloud Console. NOTE: This field is equivalent to the standard field `description`. */
		summary?: string | null;
	}

	/** `Documentation` provides the information for describing a service. Example: documentation: summary: > The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages: - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: > ... - selector: google.calendar.Calendar.Put description: > ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation. */
	export interface DocumentationFormProperties {

		/** The URL to the root of documentation. */
		documentationRootUrl: FormControl<string | null | undefined>,

		/** Declares a single overview page. For example: documentation: summary: ... overview: (== include overview.md ==) This is a shortcut for the following declaration (using pages style): documentation: summary: ... pages: - name: Overview content: (== include overview.md ==) Note: you cannot specify both `overview` field and `pages` field. */
		overview: FormControl<string | null | undefined>,

		/** Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to. */
		serviceRootUrl: FormControl<string | null | undefined>,

		/** A short description of what the service does. The summary must be plain text. It becomes the overview of the service displayed in Google Cloud Console. NOTE: This field is equivalent to the standard field `description`. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationFormGroup() {
		return new FormGroup<DocumentationFormProperties>({
			documentationRootUrl: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			serviceRootUrl: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a documentation page. A page can contain subpages to represent nested documentation set structure. */
	export interface Page {

		/** The Markdown content of the page. You can use (== include {path} ==) to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page. */
		content?: string | null;

		/** The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: pages: - name: Tutorial content: (== include tutorial.md ==) subpages: - name: Java content: (== include tutorial_java.md ==) You can reference `Java` page using Markdown reference link syntax: `Java`. */
		name?: string | null;

		/** Subpages of this page. The order of subpages specified here will be honored in the generated docset. */
		subpages?: Array<Page>;
	}

	/** Represents a documentation page. A page can contain subpages to represent nested documentation set structure. */
	export interface PageFormProperties {

		/** The Markdown content of the page. You can use (== include {path} ==) to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page. */
		content: FormControl<string | null | undefined>,

		/** The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: pages: - name: Tutorial content: (== include tutorial.md ==) subpages: - name: Java content: (== include tutorial_java.md ==) You can reference `Java` page using Markdown reference link syntax: `Java`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A documentation rule provides information about individual API elements. */
	export interface DocumentationRule {

		/** Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`. */
		deprecationDescription?: string | null;

		/** Description of the selected proto element (e.g. a message, a method, a 'service' definition, or a field). Defaults to leading & trailing comments taken from the proto source definition of the proto element. */
		description?: string | null;

		/** String of comma or space separated case-sensitive words for which method/field name replacement will be disabled by go/api-docgen. */
		disableReplacementWords?: string | null;

		/** The selector is a comma-separated list of patterns for any element such as a method, a field, an enum value. Each pattern is a qualified name of the element which may end in "*", indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern "*" is used. */
		selector?: string | null;
	}

	/** A documentation rule provides information about individual API elements. */
	export interface DocumentationRuleFormProperties {

		/** Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`. */
		deprecationDescription: FormControl<string | null | undefined>,

		/** Description of the selected proto element (e.g. a message, a method, a 'service' definition, or a field). Defaults to leading & trailing comments taken from the proto source definition of the proto element. */
		description: FormControl<string | null | undefined>,

		/** String of comma or space separated case-sensitive words for which method/field name replacement will be disabled by go/api-docgen. */
		disableReplacementWords: FormControl<string | null | undefined>,

		/** The selector is a comma-separated list of patterns for any element such as a method, a field, an enum value. Each pattern is a qualified name of the element which may end in "*", indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern "*" is used. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationRuleFormGroup() {
		return new FormGroup<DocumentationRuleFormProperties>({
			deprecationDescription: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableReplacementWords: new FormControl<string | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
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


	/** `Endpoint` describes a network address of a service that serves a set of APIs. It is commonly known as a service endpoint. A service may expose any number of service endpoints, and all service endpoints share the same service definition, such as quota limits and monitoring metrics. Example: type: google.api.Service name: library-example.googleapis.com endpoints: # Declares network address `https://library-example.googleapis.com` # for service `library-example.googleapis.com`. The `https` scheme # is implicit for all service endpoints. Other schemes may be # supported in the future. - name: library-example.googleapis.com allow_cors: false - name: content-staging-library-example.googleapis.com # Allows HTTP OPTIONS calls to be passed to the API frontend, for it # to decide whether the subsequent cross-origin request is allowed # to proceed. allow_cors: true */
	export interface Endpoint {

		/** Unimplemented. Dot not use. DEPRECATED: This field is no longer supported. Instead of using aliases, please specify multiple google.api.Endpoint for each of the intended aliases. Additional names that this endpoint will be hosted on. */
		aliases?: Array<string>;

		/** Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed. */
		allowCors?: boolean | null;

		/** The canonical name of this endpoint. */
		name?: string | null;

		/** The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, "8.8.8.8" or "myservice.appspot.com". */
		target?: string | null;
	}

	/** `Endpoint` describes a network address of a service that serves a set of APIs. It is commonly known as a service endpoint. A service may expose any number of service endpoints, and all service endpoints share the same service definition, such as quota limits and monitoring metrics. Example: type: google.api.Service name: library-example.googleapis.com endpoints: # Declares network address `https://library-example.googleapis.com` # for service `library-example.googleapis.com`. The `https` scheme # is implicit for all service endpoints. Other schemes may be # supported in the future. - name: library-example.googleapis.com allow_cors: false - name: content-staging-library-example.googleapis.com # Allows HTTP OPTIONS calls to be passed to the API frontend, for it # to decide whether the subsequent cross-origin request is allowed # to proceed. allow_cors: true */
	export interface EndpointFormProperties {

		/** Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed. */
		allowCors: FormControl<boolean | null | undefined>,

		/** The canonical name of this endpoint. */
		name: FormControl<string | null | undefined>,

		/** The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, "8.8.8.8" or "myservice.appspot.com". */
		target: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			allowCors: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enum type definition. */
	export interface Enum {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition?: string | null;

		/** Enum value definitions. */
		enumvalue?: Array<EnumValue>;

		/** Enum type name. */
		name?: string | null;

		/** Protocol buffer options. */
		options?: Array<Option>;

		/** `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined. */
		sourceContext?: SourceContext;

		/** The source syntax. */
		syntax?: MethodSyntax | null;
	}

	/** Enum type definition. */
	export interface EnumFormProperties {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition: FormControl<string | null | undefined>,

		/** Enum type name. */
		name: FormControl<string | null | undefined>,

		/** The source syntax. */
		syntax: FormControl<MethodSyntax | null | undefined>,
	}
	export function CreateEnumFormGroup() {
		return new FormGroup<EnumFormProperties>({
			edition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<MethodSyntax | null | undefined>(undefined),
		});

	}


	/** Enum value definition. */
	export interface EnumValue {

		/** Enum value name. */
		name?: string | null;

		/**
		 * Enum value number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number?: number | null;

		/** Protocol buffer options. */
		options?: Array<Option>;
	}

	/** Enum value definition. */
	export interface EnumValueFormProperties {

		/** Enum value name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Enum value number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateEnumValueFormGroup() {
		return new FormGroup<EnumValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single field of a message type. */
	export interface Field {

		/** The field cardinality. */
		cardinality?: FieldCardinality | null;

		/** The string value of the default value of this field. Proto2 syntax only. */
		defaultValue?: string | null;

		/** The field JSON name. */
		jsonName?: string | null;

		/** The field type. */
		kind?: FieldKind | null;

		/** The field name. */
		name?: string | null;

		/**
		 * The field number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number?: number | null;

		/**
		 * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oneofIndex?: number | null;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/** Whether to use alternative packed wire representation. */
		packed?: boolean | null;

		/** The field type URL, without the scheme, for message or enumeration types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`. */
		typeUrl?: string | null;
	}

	/** A single field of a message type. */
	export interface FieldFormProperties {

		/** The field cardinality. */
		cardinality: FormControl<FieldCardinality | null | undefined>,

		/** The string value of the default value of this field. Proto2 syntax only. */
		defaultValue: FormControl<string | null | undefined>,

		/** The field JSON name. */
		jsonName: FormControl<string | null | undefined>,

		/** The field type. */
		kind: FormControl<FieldKind | null | undefined>,

		/** The field name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The field number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oneofIndex: FormControl<number | null | undefined>,

		/** Whether to use alternative packed wire representation. */
		packed: FormControl<boolean | null | undefined>,

		/** The field type URL, without the scheme, for message or enumeration types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`. */
		typeUrl: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			cardinality: new FormControl<FieldCardinality | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			jsonName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<FieldKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			oneofIndex: new FormControl<number | null | undefined>(undefined),
			packed: new FormControl<boolean | null | undefined>(undefined),
			typeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldCardinality { CARDINALITY_UNKNOWN = 'CARDINALITY_UNKNOWN', CARDINALITY_OPTIONAL = 'CARDINALITY_OPTIONAL', CARDINALITY_REQUIRED = 'CARDINALITY_REQUIRED', CARDINALITY_REPEATED = 'CARDINALITY_REPEATED' }

	export enum FieldKind { TYPE_UNKNOWN = 'TYPE_UNKNOWN', TYPE_DOUBLE = 'TYPE_DOUBLE', TYPE_FLOAT = 'TYPE_FLOAT', TYPE_INT64 = 'TYPE_INT64', TYPE_UINT64 = 'TYPE_UINT64', TYPE_INT32 = 'TYPE_INT32', TYPE_FIXED64 = 'TYPE_FIXED64', TYPE_FIXED32 = 'TYPE_FIXED32', TYPE_BOOL = 'TYPE_BOOL', TYPE_STRING = 'TYPE_STRING', TYPE_GROUP = 'TYPE_GROUP', TYPE_MESSAGE = 'TYPE_MESSAGE', TYPE_BYTES = 'TYPE_BYTES', TYPE_UINT32 = 'TYPE_UINT32', TYPE_ENUM = 'TYPE_ENUM', TYPE_SFIXED32 = 'TYPE_SFIXED32', TYPE_SFIXED64 = 'TYPE_SFIXED64', TYPE_SINT32 = 'TYPE_SINT32', TYPE_SINT64 = 'TYPE_SINT64' }


	/** Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods. */
	export interface Http {

		/** When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where "%2F" will be left encoded. The default behavior is to not decode RFC 6570 reserved characters in multi segment matches. */
		fullyDecodeReservedExpansion?: boolean | null;

		/** A list of HTTP configuration rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<HttpRule>;
	}

	/** Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods. */
	export interface HttpFormProperties {

		/** When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where "%2F" will be left encoded. The default behavior is to not decode RFC 6570 reserved characters in multi segment matches. */
		fullyDecodeReservedExpansion: FormControl<boolean | null | undefined>,
	}
	export function CreateHttpFormGroup() {
		return new FormGroup<HttpFormProperties>({
			fullyDecodeReservedExpansion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** # gRPC Transcoding gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services. `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method. Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/{name=messages/*}" }; } } message GetMessageRequest { string name = 1; // Mapped to URL path. } message Message { string text = 1; // The resource content. } This enables an HTTP REST to gRPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(name: "messages/123456")` Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get:"/v1/messages/{message_id}" }; } } message GetMessageRequest { message SubMessage { string subfield = 1; } string message_id = 1; // Mapped to URL path. int64 revision = 2; // Mapped to URL query parameter `revision`. SubMessage sub = 3; // Mapped to URL query parameter `sub.subfield`. } This enables a HTTP JSON to RPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield: "foo"))` Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&foo.b=B&foo.c=C`. For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection: service Messaging { rpc UpdateMessage(UpdateMessageRequest) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "message" }; } } message UpdateMessageRequest { string message_id = 1; // mapped to the URL Message message = 2; // mapped to the body } The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" message { text: "Hi!" })` The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body. This enables the following alternative definition of the update method: service Messaging { rpc UpdateMessage(Message) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "*" }; } } message Message { string message_id = 1; string text = 2; } The following HTTP JSON to RPC mapping is enabled: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" text: "Hi!")` Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don't use the URL at all for transferring data. It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/messages/{message_id}" additional_bindings { get: "/v1/users/{user_id}/messages/{message_id}" } }; } } message GetMessageRequest { string message_id = 1; string user_id = 2; } This enables the following two alternative HTTP JSON to RPC mappings: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: "123456")` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123456")` ## Rules for HTTP mapping 1. Leaf request fields (recursive expansion nested messages in the request message) are classified into three categories: - Fields referred by the path template. They are passed via the URL path. - Fields referred by the HttpRule.body. They are passed via the HTTP request body. - All other fields are passed via the URL query parameters, and the parameter name is the field path in the request message. A repeated field can be represented as multiple query parameters under the same name. 2. If HttpRule.body is "*", there is no URL query parameter, all fields are passed via URL path and HTTP request body. 3. If HttpRule.body is omitted, there is no HTTP request body, all fields are passed via URL path and URL query parameters. ### Path template syntax Template = "/" Segments [ Verb ] ; Segments = Segment { "/" Segment } ; Segment = "*" | "**" | LITERAL | Variable ; Variable = "{" FieldPath [ "=" Segments ] "}" ; FieldPath = IDENT { "." IDENT } ; Verb = ":" LITERAL ; The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`. The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var}` is equivalent to `{var=*}`. The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching. If a variable contains exactly one path segment, such as `"{var}"` or `"{var=*}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var}`. If a variable contains multiple path segments, such as `"{var=foo/*}"` or `"{var=**}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except "%2F" and "%2f" are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var}`. ## Using gRPC API Service Configuration gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message. As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto. Example: http: rules: # Selects a gRPC method and applies HttpRule to it. - selector: example.v1.Messaging.GetMessage get: /v1/messages/{message_id}/{sub.subfield} ## Special notes When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json). While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables. The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion. The path variables **must not** capture the leading "/" character. The reason is that the most common use case "{var}" does not capture the leading "/" character. For consistency, all path variables must share the same behavior. Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping. If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature. */
	export interface HttpRule {

		/** Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep). */
		additionalBindings?: Array<HttpRule>;

		/** The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body. NOTE: the referred field must be present at the top-level of the request message type. */
		body?: string | null;

		/** A custom pattern is used for defining custom HTTP verb. */
		custom?: CustomHttpPattern;

		/** Maps to HTTP DELETE. Used for deleting a resource. */
		delete?: string | null;

		/** Maps to HTTP GET. Used for listing and getting information about resources. */
		get?: string | null;

		/** Maps to HTTP PATCH. Used for updating a resource. */
		patch?: string | null;

		/** Maps to HTTP POST. Used for creating a resource or performing an action. */
		post?: string | null;

		/** Maps to HTTP PUT. Used for replacing a resource. */
		put?: string | null;

		/** Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body. NOTE: The referred field must be present at the top-level of the response message type. */
		responseBody?: string | null;

		/** Selects a method to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** # gRPC Transcoding gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services. `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method. Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/{name=messages/*}" }; } } message GetMessageRequest { string name = 1; // Mapped to URL path. } message Message { string text = 1; // The resource content. } This enables an HTTP REST to gRPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(name: "messages/123456")` Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get:"/v1/messages/{message_id}" }; } } message GetMessageRequest { message SubMessage { string subfield = 1; } string message_id = 1; // Mapped to URL path. int64 revision = 2; // Mapped to URL query parameter `revision`. SubMessage sub = 3; // Mapped to URL query parameter `sub.subfield`. } This enables a HTTP JSON to RPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield: "foo"))` Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&foo.b=B&foo.c=C`. For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection: service Messaging { rpc UpdateMessage(UpdateMessageRequest) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "message" }; } } message UpdateMessageRequest { string message_id = 1; // mapped to the URL Message message = 2; // mapped to the body } The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" message { text: "Hi!" })` The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body. This enables the following alternative definition of the update method: service Messaging { rpc UpdateMessage(Message) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id}" body: "*" }; } } message Message { string message_id = 1; string text = 2; } The following HTTP JSON to RPC mapping is enabled: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" text: "Hi!")` Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don't use the URL at all for transferring data. It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/messages/{message_id}" additional_bindings { get: "/v1/users/{user_id}/messages/{message_id}" } }; } } message GetMessageRequest { string message_id = 1; string user_id = 2; } This enables the following two alternative HTTP JSON to RPC mappings: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: "123456")` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123456")` ## Rules for HTTP mapping 1. Leaf request fields (recursive expansion nested messages in the request message) are classified into three categories: - Fields referred by the path template. They are passed via the URL path. - Fields referred by the HttpRule.body. They are passed via the HTTP request body. - All other fields are passed via the URL query parameters, and the parameter name is the field path in the request message. A repeated field can be represented as multiple query parameters under the same name. 2. If HttpRule.body is "*", there is no URL query parameter, all fields are passed via URL path and HTTP request body. 3. If HttpRule.body is omitted, there is no HTTP request body, all fields are passed via URL path and URL query parameters. ### Path template syntax Template = "/" Segments [ Verb ] ; Segments = Segment { "/" Segment } ; Segment = "*" | "**" | LITERAL | Variable ; Variable = "{" FieldPath [ "=" Segments ] "}" ; FieldPath = IDENT { "." IDENT } ; Verb = ":" LITERAL ; The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`. The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var}` is equivalent to `{var=*}`. The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching. If a variable contains exactly one path segment, such as `"{var}"` or `"{var=*}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var}`. If a variable contains multiple path segments, such as `"{var=foo/*}"` or `"{var=**}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except "%2F" and "%2f" are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var}`. ## Using gRPC API Service Configuration gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message. As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto. Example: http: rules: # Selects a gRPC method and applies HttpRule to it. - selector: example.v1.Messaging.GetMessage get: /v1/messages/{message_id}/{sub.subfield} ## Special notes When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json). While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables. The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion. The path variables **must not** capture the leading "/" character. The reason is that the most common use case "{var}" does not capture the leading "/" character. For consistency, all path variables must share the same behavior. Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping. If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature. */
	export interface HttpRuleFormProperties {

		/** The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body. NOTE: the referred field must be present at the top-level of the request message type. */
		body: FormControl<string | null | undefined>,

		/** Maps to HTTP DELETE. Used for deleting a resource. */
		delete: FormControl<string | null | undefined>,

		/** Maps to HTTP GET. Used for listing and getting information about resources. */
		get: FormControl<string | null | undefined>,

		/** Maps to HTTP PATCH. Used for updating a resource. */
		patch: FormControl<string | null | undefined>,

		/** Maps to HTTP POST. Used for creating a resource or performing an action. */
		post: FormControl<string | null | undefined>,

		/** Maps to HTTP PUT. Used for replacing a resource. */
		put: FormControl<string | null | undefined>,

		/** Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body. NOTE: The referred field must be present at the top-level of the response message type. */
		responseBody: FormControl<string | null | undefined>,

		/** Selects a method to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateHttpRuleFormGroup() {
		return new FormGroup<HttpRuleFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			delete: new FormControl<string | null | undefined>(undefined),
			get: new FormControl<string | null | undefined>(undefined),
			patch: new FormControl<string | null | undefined>(undefined),
			post: new FormControl<string | null | undefined>(undefined),
			put: new FormControl<string | null | undefined>(undefined),
			responseBody: new FormControl<string | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a label. */
	export interface LabelDescriptor {

		/** A human-readable description for the label. */
		description?: string | null;

		/** The label key. */
		key?: string | null;

		/** The type of data that can be assigned to the label. */
		valueType?: LabelDescriptorValueType | null;
	}

	/** A description of a label. */
	export interface LabelDescriptorFormProperties {

		/** A human-readable description for the label. */
		description: FormControl<string | null | undefined>,

		/** The label key. */
		key: FormControl<string | null | undefined>,

		/** The type of data that can be assigned to the label. */
		valueType: FormControl<LabelDescriptorValueType | null | undefined>,
	}
	export function CreateLabelDescriptorFormGroup() {
		return new FormGroup<LabelDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<LabelDescriptorValueType | null | undefined>(undefined),
		});

	}

	export enum LabelDescriptorValueType { STRING = 'STRING', BOOL = 'BOOL', INT64 = 'INT64' }


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

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
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the list request. */
	export interface ListTenancyUnitsResponse {

		/** Pagination token for large results. */
		nextPageToken?: string | null;

		/** Tenancy units matching the request. */
		tenancyUnits?: Array<TenancyUnit>;
	}

	/** Response for the list request. */
	export interface ListTenancyUnitsResponseFormProperties {

		/** Pagination token for large results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTenancyUnitsResponseFormGroup() {
		return new FormGroup<ListTenancyUnitsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a tenancy unit. */
	export interface TenancyUnit {

		/** Output only. @OutputOnly Cloud resource name of the consumer of this service. For example 'projects/123456'. */
		consumer?: string | null;

		/** Output only. @OutputOnly The time this tenancy unit was created. */
		createTime?: string | null;

		/** Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}" */
		name?: string | null;

		/** Output only. Google Cloud API name of the managed service owning this tenancy unit. For example 'serviceconsumermanagement.googleapis.com'. */
		service?: string | null;

		/** Resources constituting the tenancy unit. There can be at most 512 tenant resources in a tenancy unit. */
		tenantResources?: Array<TenantResource>;
	}

	/** Representation of a tenancy unit. */
	export interface TenancyUnitFormProperties {

		/** Output only. @OutputOnly Cloud resource name of the consumer of this service. For example 'projects/123456'. */
		consumer: FormControl<string | null | undefined>,

		/** Output only. @OutputOnly The time this tenancy unit was created. */
		createTime: FormControl<string | null | undefined>,

		/** Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Google Cloud API name of the managed service owning this tenancy unit. For example 'serviceconsumermanagement.googleapis.com'. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateTenancyUnitFormGroup() {
		return new FormGroup<TenancyUnitFormProperties>({
			consumer: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource constituting the TenancyUnit. */
	export interface TenantResource {

		/** Output only. @OutputOnly Identifier of the tenant resource. For cloud projects, it is in the form 'projects/{number}'. For example 'projects/123456'. */
		resource?: string | null;

		/** Status of tenant resource. */
		status?: TenantResourceStatus | null;

		/** Unique per single tenancy unit. */
		tag?: string | null;
	}

	/** Resource constituting the TenancyUnit. */
	export interface TenantResourceFormProperties {

		/** Output only. @OutputOnly Identifier of the tenant resource. For cloud projects, it is in the form 'projects/{number}'. For example 'projects/123456'. */
		resource: FormControl<string | null | undefined>,

		/** Status of tenant resource. */
		status: FormControl<TenantResourceStatus | null | undefined>,

		/** Unique per single tenancy unit. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTenantResourceFormGroup() {
		return new FormGroup<TenantResourceFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TenantResourceStatus | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TenantResourceStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', PENDING_CREATE = 'PENDING_CREATE', ACTIVE = 'ACTIVE', PENDING_DELETE = 'PENDING_DELETE', FAILED = 'FAILED', DELETED = 'DELETED' }


	/** A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer */
	export interface LogDescriptor {

		/** A human-readable description of this log. This information appears in the documentation and can contain details. */
		description?: string | null;

		/** The human-readable name for this log. This information appears on the user interface and should be concise. */
		displayName?: string | null;

		/** The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid. */
		labels?: Array<LabelDescriptor>;

		/** The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.]. */
		name?: string | null;
	}

	/** A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer */
	export interface LogDescriptorFormProperties {

		/** A human-readable description of this log. This information appears in the documentation and can contain details. */
		description: FormControl<string | null | undefined>,

		/** The human-readable name for this log. This information appears on the user interface and should be concise. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.]. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogDescriptorFormGroup() {
		return new FormGroup<LogDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history */
	export interface Logging {

		/** Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination. */
		consumerDestinations?: Array<LoggingDestination>;

		/** Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination. */
		producerDestinations?: Array<LoggingDestination>;
	}

	/** Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history */
	export interface LoggingFormProperties {
	}
	export function CreateLoggingFormGroup() {
		return new FormGroup<LoggingFormProperties>({
		});

	}


	/** Configuration of a specific logging destination (the producer project or the consumer project). */
	export interface LoggingDestination {

		/** Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by "/". */
		logs?: Array<string>;

		/** The monitored resource type. The type must be defined in the Service.monitored_resources section. */
		monitoredResource?: string | null;
	}

	/** Configuration of a specific logging destination (the producer project or the consumer project). */
	export interface LoggingDestinationFormProperties {

		/** The monitored resource type. The type must be defined in the Service.monitored_resources section. */
		monitoredResource: FormControl<string | null | undefined>,
	}
	export function CreateLoggingDestinationFormGroup() {
		return new FormGroup<LoggingDestinationFormProperties>({
			monitoredResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)). */
	export interface LongRunning {

		/** Initial delay after which the first poll request will be made. Default value: 5 seconds. */
		initialPollDelay?: string | null;

		/** Maximum time between two subsequent poll requests. Default value: 45 seconds. */
		maxPollDelay?: string | null;

		/**
		 * Multiplier to gradually increase delay between subsequent polls until it reaches max_poll_delay. Default value: 1.5.
		 * Type: float
		 */
		pollDelayMultiplier?: number | null;

		/** Total polling timeout. Default value: 5 minutes. */
		totalPollTimeout?: string | null;
	}

	/** Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)). */
	export interface LongRunningFormProperties {

		/** Initial delay after which the first poll request will be made. Default value: 5 seconds. */
		initialPollDelay: FormControl<string | null | undefined>,

		/** Maximum time between two subsequent poll requests. Default value: 45 seconds. */
		maxPollDelay: FormControl<string | null | undefined>,

		/**
		 * Multiplier to gradually increase delay between subsequent polls until it reaches max_poll_delay. Default value: 1.5.
		 * Type: float
		 */
		pollDelayMultiplier: FormControl<number | null | undefined>,

		/** Total polling timeout. Default value: 5 minutes. */
		totalPollTimeout: FormControl<string | null | undefined>,
	}
	export function CreateLongRunningFormGroup() {
		return new FormGroup<LongRunningFormProperties>({
			initialPollDelay: new FormControl<string | null | undefined>(undefined),
			maxPollDelay: new FormControl<string | null | undefined>(undefined),
			pollDelayMultiplier: new FormControl<number | null | undefined>(undefined),
			totalPollTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the generator configuration for a method. */
	export interface MethodSettings {

		/** List of top-level fields of the request message, that should be automatically populated by the client libraries based on their (google.api.field_info).format. Currently supported format: UUID4. Example of a YAML configuration: publishing: method_settings: - selector: google.example.v1.ExampleService.CreateExample auto_populated_fields: - request_id */
		autoPopulatedFields?: Array<string>;

		/** Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)). */
		longRunning?: LongRunning;

		/** The fully qualified name of the method, for which the options below apply. This is used to find the method to apply the options. */
		selector?: string | null;
	}

	/** Describes the generator configuration for a method. */
	export interface MethodSettingsFormProperties {

		/** The fully qualified name of the method, for which the options below apply. This is used to find the method to apply the options. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateMethodSettingsFormGroup() {
		return new FormGroup<MethodSettingsFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.  */
	export interface MetricDescriptor {

		/** A detailed description of the metric, which can be used in documentation. */
		description?: string | null;

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName?: string | null;

		/** The set of labels that can be used to describe a specific instance of this metric type. For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed. */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the metric definition. */
		launchStage?: ClientLibrarySettingsLaunchStage | null;

		/** Additional annotations that can be used to guide the usage of a metric. */
		metadata?: MetricDescriptorMetadata;

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported. */
		metricKind?: MetricDescriptorMetricKind | null;

		/** Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. */
		monitoredResourceTypes?: Array<string>;

		/** The resource name of the metric descriptor. */
		name?: string | null;

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name `custom.googleapis.com` or `external.googleapis.com`. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type?: string | null;

		/** The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values. Different systems might scale the values to be more easily displayed (so a value of `0.02kBy` _might_ be displayed as `20By`, and a value of `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `kBy`, then the value of the metric is always in thousands of bytes, no matter how it might be displayed. If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`. Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU}` and write `11.723` (which is `12005/1024`). The supported units are a subset of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html) standard: **Basic units (UNIT)** * `bit` bit * `By` byte * `s` second * `min` minute * `h` hour * `d` day * `1` dimensionless **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `E` exa (10^18) * `Z` zetta (10^21) * `Y` yotta (10^24) * `m` milli (10^-3) * `u` micro (10^-6) * `n` nano (10^-9) * `p` pico (10^-12) * `f` femto (10^-15) * `a` atto (10^-18) * `z` zepto (10^-21) * `y` yocto (10^-24) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For examples, `kBy/{email}` or `MiBy/10ms` (although you should almost never have `/s` in a metric `unit`; rates should always be computed at query time from the underlying cumulative or delta value). * `.` multiplication or composition (as an infix operator). For examples, `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: * `Annotation` is just a comment if it follows a `UNIT`. If the annotation is used alone, then the unit is equivalent to `1`. For examples, `{request}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not containing `{` or `}`. * `1` represents a unitary [dimensionless unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in `1/s`. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric value of `5.3` would mean "5300 page views per day"). * `%` represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value `3` means "3 percent"). * `10^2.%` indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value `0.03` means "3 percent"). */
		unit?: string | null;

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported. */
		valueType?: MetricDescriptorValueType | null;
	}

	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.  */
	export interface MetricDescriptorFormProperties {

		/** A detailed description of the metric, which can be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the metric definition. */
		launchStage: FormControl<ClientLibrarySettingsLaunchStage | null | undefined>,

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported. */
		metricKind: FormControl<MetricDescriptorMetricKind | null | undefined>,

		/** The resource name of the metric descriptor. */
		name: FormControl<string | null | undefined>,

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name `custom.googleapis.com` or `external.googleapis.com`. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type: FormControl<string | null | undefined>,

		/** The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values. Different systems might scale the values to be more easily displayed (so a value of `0.02kBy` _might_ be displayed as `20By`, and a value of `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `kBy`, then the value of the metric is always in thousands of bytes, no matter how it might be displayed. If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`. Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU}` and write `11.723` (which is `12005/1024`). The supported units are a subset of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html) standard: **Basic units (UNIT)** * `bit` bit * `By` byte * `s` second * `min` minute * `h` hour * `d` day * `1` dimensionless **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `E` exa (10^18) * `Z` zetta (10^21) * `Y` yotta (10^24) * `m` milli (10^-3) * `u` micro (10^-6) * `n` nano (10^-9) * `p` pico (10^-12) * `f` femto (10^-15) * `a` atto (10^-18) * `z` zepto (10^-21) * `y` yocto (10^-24) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For examples, `kBy/{email}` or `MiBy/10ms` (although you should almost never have `/s` in a metric `unit`; rates should always be computed at query time from the underlying cumulative or delta value). * `.` multiplication or composition (as an infix operator). For examples, `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: * `Annotation` is just a comment if it follows a `UNIT`. If the annotation is used alone, then the unit is equivalent to `1`. For examples, `{request}/s == 1/s`, `By{transmitted}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not containing `{` or `}`. * `1` represents a unitary [dimensionless unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in `1/s`. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric value of `5.3` would mean "5300 page views per day"). * `%` represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value `3` means "3 percent"). * `10^2.%` indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value `0.03` means "3 percent"). */
		unit: FormControl<string | null | undefined>,

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported. */
		valueType: FormControl<MetricDescriptorValueType | null | undefined>,
	}
	export function CreateMetricDescriptorFormGroup() {
		return new FormGroup<MetricDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<ClientLibrarySettingsLaunchStage | null | undefined>(undefined),
			metricKind: new FormControl<MetricDescriptorMetricKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<MetricDescriptorValueType | null | undefined>(undefined),
		});

	}


	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadata {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay?: string | null;

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage?: ClientLibrarySettingsLaunchStage | null;

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod?: string | null;
	}

	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadataFormProperties {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay: FormControl<string | null | undefined>,

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage: FormControl<ClientLibrarySettingsLaunchStage | null | undefined>,

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod: FormControl<string | null | undefined>,
	}
	export function CreateMetricDescriptorMetadataFormGroup() {
		return new FormGroup<MetricDescriptorMetadataFormProperties>({
			ingestDelay: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<ClientLibrarySettingsLaunchStage | null | undefined>(undefined),
			samplePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricDescriptorMetricKind { METRIC_KIND_UNSPECIFIED = 'METRIC_KIND_UNSPECIFIED', GAUGE = 'GAUGE', DELTA = 'DELTA', CUMULATIVE = 'CUMULATIVE' }

	export enum MetricDescriptorValueType { VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED', BOOL = 'BOOL', INT64 = 'INT64', DOUBLE = 'DOUBLE', STRING = 'STRING', DISTRIBUTION = 'DISTRIBUTION', MONEY = 'MONEY' }


	/** Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call. */
	export interface MetricRule {

		/** Metrics to update when the selected methods are called, and the associated cost applied to each metric. The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative. */
		metricCosts?: {[id: string]: string };

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call. */
	export interface MetricRuleFormProperties {

		/** Metrics to update when the selected methods are called, and the associated cost applied to each metric. The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative. */
		metricCosts: FormControl<{[id: string]: string } | null | undefined>,

		/** Selects the methods to which this rule applies. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateMetricRuleFormGroup() {
		return new FormGroup<MetricRuleFormProperties>({
			metricCosts: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.  */
	export interface MonitoredResourceDescriptor {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description?: string | null;

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `"Google Cloud SQL Database"`. */
		displayName?: string | null;

		/** Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `"database_id"` and `"zone"`. */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage?: ClientLibrarySettingsLaunchStage | null;

		/** Optional. The resource name of the monitored resource descriptor: `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format `"monitoredResourceDescriptors/{type}"`. */
		name?: string | null;

		/** Required. The monitored resource type. For example, the type `"cloudsql_database"` represents databases in Google Cloud SQL. For a list of types, see [Monitored resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type?: string | null;
	}

	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.  */
	export interface MonitoredResourceDescriptorFormProperties {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `"Google Cloud SQL Database"`. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage: FormControl<ClientLibrarySettingsLaunchStage | null | undefined>,

		/** Optional. The resource name of the monitored resource descriptor: `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where {type} is the value of the `type` field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format `"monitoredResourceDescriptors/{type}"`. */
		name: FormControl<string | null | undefined>,

		/** Required. The monitored resource type. For example, the type `"cloudsql_database"` represents databases in Google Cloud SQL. For a list of types, see [Monitored resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredResourceDescriptorFormGroup() {
		return new FormGroup<MonitoredResourceDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<ClientLibrarySettingsLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: "Library Branch" description: "A branch of a library." launch_stage: GA labels: - key: resource_container description: "The Cloud container (ie. project id) for the Branch." - key: location description: "The location of the library branch." - key: branch_id description: "The id of the branch." metrics: - name: library.googleapis.com/book/returned_count display_name: "Books Returned" description: "The count of books that have been returned." launch_stage: GA metric_kind: DELTA value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." - name: library.googleapis.com/book/num_overdue display_name: "Books Overdue" description: "The current number of overdue books." launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue */
	export interface Monitoring {

		/** Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration. */
		consumerDestinations?: Array<MonitoringDestination>;

		/** Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration. */
		producerDestinations?: Array<MonitoringDestination>;
	}

	/** Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: "Library Branch" description: "A branch of a library." launch_stage: GA labels: - key: resource_container description: "The Cloud container (ie. project id) for the Branch." - key: location description: "The location of the library branch." - key: branch_id description: "The id of the branch." metrics: - name: library.googleapis.com/book/returned_count display_name: "Books Returned" description: "The count of books that have been returned." launch_stage: GA metric_kind: DELTA value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." - name: library.googleapis.com/book/num_overdue display_name: "Books Overdue" description: "The current number of overdue books." launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue */
	export interface MonitoringFormProperties {
	}
	export function CreateMonitoringFormGroup() {
		return new FormGroup<MonitoringFormProperties>({
		});

	}


	/** Configuration of a specific monitoring destination (the producer project or the consumer project). */
	export interface MonitoringDestination {

		/** Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section. */
		metrics?: Array<string>;

		/** The monitored resource type. The type must be defined in Service.monitored_resources section. */
		monitoredResource?: string | null;
	}

	/** Configuration of a specific monitoring destination (the producer project or the consumer project). */
	export interface MonitoringDestinationFormProperties {

		/** The monitored resource type. The type must be defined in Service.monitored_resources section. */
		monitoredResource: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringDestinationFormGroup() {
		return new FormGroup<MonitoringDestinationFormProperties>({
			monitoredResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config. */
	export interface Publishing {

		/** Used as a tracking tag when collecting data about the APIs developer relations artifacts like docs, packages delivered to package managers, etc. Example: "speech". */
		apiShortName?: string | null;

		/** GitHub teams to be added to CODEOWNERS in the directory in GitHub containing source code for the client libraries for this API. */
		codeownerGithubTeams?: Array<string>;

		/** A prefix used in sample code when demarking regions to be included in documentation. */
		docTagPrefix?: string | null;

		/** Link to product home page. Example: https://cloud.google.com/asset-inventory/docs/overview */
		documentationUri?: string | null;

		/** GitHub label to apply to issues and pull requests opened for this API. */
		githubLabel?: string | null;

		/** Client library settings. If the same version string appears multiple times in this list, then the last one wins. Settings from earlier settings with the same version string are discarded. */
		librarySettings?: Array<ClientLibrarySettings>;

		/** A list of API method settings, e.g. the behavior for methods that use the long-running operation pattern. */
		methodSettings?: Array<MethodSettings>;

		/** Link to a *public* URI where users can report issues. Example: https://issuetracker.google.com/issues/new?component=190865&template=1161103 */
		newIssueUri?: string | null;

		/** For whom the client library is being published. */
		organization?: PublishingOrganization | null;

		/** Optional link to proto reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rpc */
		protoReferenceDocumentationUri?: string | null;

		/** Optional link to REST reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rest */
		restReferenceDocumentationUri?: string | null;
	}

	/** This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config. */
	export interface PublishingFormProperties {

		/** Used as a tracking tag when collecting data about the APIs developer relations artifacts like docs, packages delivered to package managers, etc. Example: "speech". */
		apiShortName: FormControl<string | null | undefined>,

		/** A prefix used in sample code when demarking regions to be included in documentation. */
		docTagPrefix: FormControl<string | null | undefined>,

		/** Link to product home page. Example: https://cloud.google.com/asset-inventory/docs/overview */
		documentationUri: FormControl<string | null | undefined>,

		/** GitHub label to apply to issues and pull requests opened for this API. */
		githubLabel: FormControl<string | null | undefined>,

		/** Link to a *public* URI where users can report issues. Example: https://issuetracker.google.com/issues/new?component=190865&template=1161103 */
		newIssueUri: FormControl<string | null | undefined>,

		/** For whom the client library is being published. */
		organization: FormControl<PublishingOrganization | null | undefined>,

		/** Optional link to proto reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rpc */
		protoReferenceDocumentationUri: FormControl<string | null | undefined>,

		/** Optional link to REST reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rest */
		restReferenceDocumentationUri: FormControl<string | null | undefined>,
	}
	export function CreatePublishingFormGroup() {
		return new FormGroup<PublishingFormProperties>({
			apiShortName: new FormControl<string | null | undefined>(undefined),
			docTagPrefix: new FormControl<string | null | undefined>(undefined),
			documentationUri: new FormControl<string | null | undefined>(undefined),
			githubLabel: new FormControl<string | null | undefined>(undefined),
			newIssueUri: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<PublishingOrganization | null | undefined>(undefined),
			protoReferenceDocumentationUri: new FormControl<string | null | undefined>(undefined),
			restReferenceDocumentationUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublishingOrganization { CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 'CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED', CLOUD = 'CLOUD', ADS = 'ADS', PHOTOS = 'PHOTOS', STREET_VIEW = 'STREET_VIEW', SHOPPING = 'SHOPPING', GEO = 'GEO', GENERATIVE_AI = 'GENERATIVE_AI' }


	/** Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project}" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64  */
	export interface Quota {

		/** List of QuotaLimit definitions for the service. */
		limits?: Array<QuotaLimit>;

		/** List of MetricRule definitions, each one mapping a selected method to one or more metrics. */
		metricRules?: Array<MetricRule>;
	}

	/** Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project}" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64  */
	export interface QuotaFormProperties {
	}
	export function CreateQuotaFormGroup() {
		return new FormGroup<QuotaFormProperties>({
		});

	}


	/** `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`. */
	export interface QuotaLimit {

		/** Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project. Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed. Used by group-based quotas only. */
		defaultLimit?: string | null;

		/** Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit's display name (see: `display_name`). */
		description?: string | null;

		/** User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration. */
		displayName?: string | null;

		/** Duration of this limit in textual notation. Must be "100s" or "1d". Used by group-based quotas only. */
		duration?: string | null;

		/** Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration "1d", in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service. Used by group-based quotas only. */
		freeTier?: string | null;

		/** Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit. To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota. Used by group-based quotas only. */
		maxLimit?: string | null;

		/** The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config. */
		metric?: string | null;

		/** Name of the quota limit. The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as '-'. The maximum length of the limit name is 64 characters. */
		name?: string | null;

		/** Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system. Here are some examples: * "1/min/{project}" for quota per minute per project. Note: the order of unit components is insignificant. The "1" at the beginning is required to follow the metric unit syntax. */
		unit?: string | null;

		/** Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported. */
		values?: {[id: string]: string };
	}

	/** `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`. */
	export interface QuotaLimitFormProperties {

		/** Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project. Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed. Used by group-based quotas only. */
		defaultLimit: FormControl<string | null | undefined>,

		/** Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit's display name (see: `display_name`). */
		description: FormControl<string | null | undefined>,

		/** User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration. */
		displayName: FormControl<string | null | undefined>,

		/** Duration of this limit in textual notation. Must be "100s" or "1d". Used by group-based quotas only. */
		duration: FormControl<string | null | undefined>,

		/** Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration "1d", in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service. Used by group-based quotas only. */
		freeTier: FormControl<string | null | undefined>,

		/** Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit. To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota. Used by group-based quotas only. */
		maxLimit: FormControl<string | null | undefined>,

		/** The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config. */
		metric: FormControl<string | null | undefined>,

		/** Name of the quota limit. The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as '-'. The maximum length of the limit name is 64 characters. */
		name: FormControl<string | null | undefined>,

		/** Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system. Here are some examples: * "1/min/{project}" for quota per minute per project. Note: the order of unit components is insignificant. The "1" at the beginning is required to follow the metric unit syntax. */
		unit: FormControl<string | null | undefined>,

		/** Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported. */
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateQuotaLimitFormGroup() {
		return new FormGroup<QuotaLimitFormProperties>({
			defaultLimit: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			freeTier: new FormControl<string | null | undefined>(undefined),
			maxLimit: new FormControl<string | null | undefined>(undefined),
			metric: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request message to remove a tenant project resource from the tenancy unit. */
	export interface RemoveTenantProjectRequest {

		/** Required. Tag of the resource within the tenancy unit. */
		tag?: string | null;
	}

	/** Request message to remove a tenant project resource from the tenancy unit. */
	export interface RemoveTenantProjectRequestFormProperties {

		/** Required. Tag of the resource within the tenancy unit. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTenantProjectRequestFormGroup() {
		return new FormGroup<RemoveTenantProjectRequestFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the search query. */
	export interface SearchTenancyUnitsResponse {

		/** Pagination token for large results. */
		nextPageToken?: string | null;

		/** Tenancy Units matching the request. */
		tenancyUnits?: Array<TenancyUnit>;
	}

	/** Response for the search query. */
	export interface SearchTenancyUnitsResponseFormProperties {

		/** Pagination token for large results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTenancyUnitsResponseFormGroup() {
		return new FormGroup<SearchTenancyUnitsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth */
	export interface Service {

		/** A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files. */
		apis?: Array<Api>;

		/** `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read */
		authentication?: Authentication;

		/** `Backend` defines the backend configuration for a service. */
		backend?: Backend;

		/** Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: "1" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count */
		billing?: Billing;

		/**
		 * Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.
		 * Type: uint, 0 to 4,294,967,295
		 */
		configVersion?: number | null;

		/** `Context` defines which contexts an API requests. Example: context: rules: - selector: "*" requested: - google.rpc.context.ProjectContext - google.rpc.context.OriginContext The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`. Available context types are defined in package `google.rpc.context`. This also provides mechanism to allowlist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext--bin” and “x-goog-ext--jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file: Example: context: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allowed_request_extensions: - google.foo.v1.NewExtension allowed_response_extensions: - google.foo.v1.NewExtension You can also specify extension ID instead of fully qualified extension name here. */
		context?: Context;

		/** Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com */
		control?: Control;

		/** Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError */
		customError?: CustomError;

		/** `Documentation` provides the information for describing a service. Example: documentation: summary: > The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages: - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: > ... - selector: google.calendar.Calendar.Put description: > ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation. */
		documentation?: Documentation;

		/** Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs. */
		endpoints?: Array<Endpoint>;

		/** A list of all enum types included in this API service. Enums referenced directly or indirectly by the `apis` are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum */
		enums?: Array<Enum>;

		/** Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods. */
		http?: Http;

		/** A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead. */
		id?: string | null;

		/** Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history */
		logging?: Logging;

		/** Defines the logs used by this service. */
		logs?: Array<LogDescriptor>;

		/** Defines the metrics used by this service. */
		metrics?: Array<MetricDescriptor>;

		/** Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations. */
		monitoredResources?: Array<MonitoredResourceDescriptor>;

		/** Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: "Library Branch" description: "A branch of a library." launch_stage: GA labels: - key: resource_container description: "The Cloud container (ie. project id) for the Branch." - key: location description: "The location of the library branch." - key: branch_id description: "The id of the branch." metrics: - name: library.googleapis.com/book/returned_count display_name: "Books Returned" description: "The count of books that have been returned." launch_stage: GA metric_kind: DELTA value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." - name: library.googleapis.com/book/num_overdue display_name: "Books Overdue" description: "The current number of overdue books." launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue */
		monitoring?: Monitoring;

		/** The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name. */
		name?: string | null;

		/** The Google project that owns this service. */
		producerProjectId?: string | null;

		/** This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config. */
		publishing?: Publishing;

		/** Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project}" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64 */
		quota?: Quota;

		/** Source information used to create a Service Config */
		sourceInfo?: SourceInfo;

		/** ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters. */
		systemParameters?: SystemParameters;

		/** A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF. */
		systemTypes?: Array<Type>;

		/** The product title for this service, it is the name displayed in Google Cloud Console. */
		title?: string | null;

		/** A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included. Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32 */
		types?: Array<Type>;

		/** Configuration controlling usage of a service. */
		usage?: Usage;
	}

	/** `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth */
	export interface ServiceFormProperties {

		/**
		 * Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.
		 * Type: uint, 0 to 4,294,967,295
		 */
		configVersion: FormControl<number | null | undefined>,

		/** A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead. */
		id: FormControl<string | null | undefined>,

		/** The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name. */
		name: FormControl<string | null | undefined>,

		/** The Google project that owns this service. */
		producerProjectId: FormControl<string | null | undefined>,

		/** The product title for this service, it is the name displayed in Google Cloud Console. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			configVersion: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			producerProjectId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source information used to create a Service Config */
	export interface SourceInfo {

		/** All files used during config generation. */
		sourceFiles?: Array<string>;
	}

	/** Source information used to create a Service Config */
	export interface SourceInfoFormProperties {
	}
	export function CreateSourceInfoFormGroup() {
		return new FormGroup<SourceInfoFormProperties>({
		});

	}


	/** ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters. */
	export interface SystemParameters {

		/** Define system parameters. The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent. Example: define api key for all methods system_parameters rules: - selector: "*" parameters: - name: api_key url_query_parameter: api_key Example: define 2 api key names for a specific method. system_parameters rules: - selector: "/ListShelves" parameters: - name: api_key http_header: Api-Key1 - name: api_key http_header: Api-Key2 **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<SystemParameterRule>;
	}

	/** ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters. */
	export interface SystemParametersFormProperties {
	}
	export function CreateSystemParametersFormGroup() {
		return new FormGroup<SystemParametersFormProperties>({
		});

	}


	/** Define a system parameter rule mapping system parameter definitions to methods. */
	export interface SystemParameterRule {

		/** Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent. */
		parameters?: Array<SystemParameter>;

		/** Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details. */
		selector?: string | null;
	}

	/** Define a system parameter rule mapping system parameter definitions to methods. */
	export interface SystemParameterRuleFormProperties {

		/** Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateSystemParameterRuleFormGroup() {
		return new FormGroup<SystemParameterRuleFormProperties>({
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent. */
	export interface SystemParameter {

		/** Define the HTTP header name to use for the parameter. It is case insensitive. */
		httpHeader?: string | null;

		/** Define the name of the parameter, such as "api_key" . It is case sensitive. */
		name?: string | null;

		/** Define the URL query parameter name to use for the parameter. It is case sensitive. */
		urlQueryParameter?: string | null;
	}

	/** Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent. */
	export interface SystemParameterFormProperties {

		/** Define the HTTP header name to use for the parameter. It is case insensitive. */
		httpHeader: FormControl<string | null | undefined>,

		/** Define the name of the parameter, such as "api_key" . It is case sensitive. */
		name: FormControl<string | null | undefined>,

		/** Define the URL query parameter name to use for the parameter. It is case sensitive. */
		urlQueryParameter: FormControl<string | null | undefined>,
	}
	export function CreateSystemParameterFormGroup() {
		return new FormGroup<SystemParameterFormProperties>({
			httpHeader: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			urlQueryParameter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A protocol buffer message type. */
	export interface Type {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition?: string | null;

		/** The list of fields. */
		fields?: Array<Field>;

		/** The fully qualified message name. */
		name?: string | null;

		/** The list of types appearing in `oneof` definitions in this type. */
		oneofs?: Array<string>;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/** `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined. */
		sourceContext?: SourceContext;

		/** The source syntax. */
		syntax?: MethodSyntax | null;
	}

	/** A protocol buffer message type. */
	export interface TypeFormProperties {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition: FormControl<string | null | undefined>,

		/** The fully qualified message name. */
		name: FormControl<string | null | undefined>,

		/** The source syntax. */
		syntax: FormControl<MethodSyntax | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			edition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<MethodSyntax | null | undefined>(undefined),
		});

	}


	/** Configuration controlling usage of a service. */
	export interface Usage {

		/** The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview. */
		producerNotificationChannel?: string | null;

		/** Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form /; for example 'serviceusage.googleapis.com/billing-enabled'. For Google APIs, a Terms of Service requirement must be included here. Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud". Other Google APIs should include "serviceusage.googleapis.com/tos/universal". Additional ToS can be included based on the business needs. */
		requirements?: Array<string>;

		/** A list of usage rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order. */
		rules?: Array<UsageRule>;
	}

	/** Configuration controlling usage of a service. */
	export interface UsageFormProperties {

		/** The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview. */
		producerNotificationChannel: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			producerNotificationChannel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: "*" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allow_unregistered_calls: true */
	export interface UsageRule {

		/** If true, the selected method allows unregistered calls, e.g. calls that don't identify any user or application. */
		allowUnregisteredCalls?: boolean | null;

		/** Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details. */
		selector?: string | null;

		/** If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods. */
		skipServiceControl?: boolean | null;
	}

	/** Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: "*" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allow_unregistered_calls: true */
	export interface UsageRuleFormProperties {

		/** If true, the selected method allows unregistered calls, e.g. calls that don't identify any user or application. */
		allowUnregisteredCalls: FormControl<boolean | null | undefined>,

		/** Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details. */
		selector: FormControl<string | null | undefined>,

		/** If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods. */
		skipServiceControl: FormControl<boolean | null | undefined>,
	}
	export function CreateUsageRuleFormGroup() {
		return new FormGroup<UsageRuleFormProperties>({
			allowUnregisteredCalls: new FormControl<boolean | null | undefined>(undefined),
			selector: new FormControl<string | null | undefined>(undefined),
			skipServiceControl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message to undelete tenant project resource previously deleted from the tenancy unit. */
	export interface UndeleteTenantProjectRequest {

		/** Required. Tag of the resource within the tenancy unit. */
		tag?: string | null;
	}

	/** Request message to undelete tenant project resource previously deleted from the tenancy unit. */
	export interface UndeleteTenantProjectRequestFormProperties {

		/** Required. Tag of the resource within the tenancy unit. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteTenantProjectRequestFormGroup() {
		return new FormGroup<UndeleteTenantProjectRequestFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `AddVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1AddVisibilityLabelsResponse {

		/** The updated set of visibility labels for this consumer on this service. */
		labels?: Array<string>;
	}

	/** Response message for the `AddVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1AddVisibilityLabelsResponseFormProperties {
	}
	export function CreateV1AddVisibilityLabelsResponseFormGroup() {
		return new FormGroup<V1AddVisibilityLabelsResponseFormProperties>({
		});

	}


	/** Response message for BatchCreateProducerOverrides */
	export interface V1Beta1BatchCreateProducerOverridesResponse {

		/** The overrides that were created. */
		overrides?: Array<V1Beta1QuotaOverride>;
	}

	/** Response message for BatchCreateProducerOverrides */
	export interface V1Beta1BatchCreateProducerOverridesResponseFormProperties {
	}
	export function CreateV1Beta1BatchCreateProducerOverridesResponseFormGroup() {
		return new FormGroup<V1Beta1BatchCreateProducerOverridesResponseFormProperties>({
		});

	}


	/** A quota override */
	export interface V1Beta1QuotaOverride {

		/** The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only. */
		adminOverrideAncestor?: string | null;

		/** If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map. */
		dimensions?: {[id: string]: string };

		/** The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus` */
		metric?: string | null;

		/** The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d` */
		name?: string | null;

		/** The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). */
		overrideValue?: string | null;

		/** The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string. */
		unit?: string | null;
	}

	/** A quota override */
	export interface V1Beta1QuotaOverrideFormProperties {

		/** The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only. */
		adminOverrideAncestor: FormControl<string | null | undefined>,

		/** If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map. */
		dimensions: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus` */
		metric: FormControl<string | null | undefined>,

		/** The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d` */
		name: FormControl<string | null | undefined>,

		/** The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). */
		overrideValue: FormControl<string | null | undefined>,

		/** The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateV1Beta1QuotaOverrideFormGroup() {
		return new FormGroup<V1Beta1QuotaOverrideFormProperties>({
			adminOverrideAncestor: new FormControl<string | null | undefined>(undefined),
			dimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			metric: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overrideValue: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1DisableConsumerResponse {
	}

	/** Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1DisableConsumerResponseFormProperties {
	}
	export function CreateV1Beta1DisableConsumerResponseFormGroup() {
		return new FormGroup<V1Beta1DisableConsumerResponseFormProperties>({
		});

	}


	/** Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1EnableConsumerResponse {
	}

	/** Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1EnableConsumerResponseFormProperties {
	}
	export function CreateV1Beta1EnableConsumerResponseFormGroup() {
		return new FormGroup<V1Beta1EnableConsumerResponseFormProperties>({
		});

	}


	/** Response message for the `GenerateServiceIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1GenerateServiceIdentityResponse {

		/** A service identity in the Identity and Access Management API. */
		identity?: V1Beta1ServiceIdentity;
	}

	/** Response message for the `GenerateServiceIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1GenerateServiceIdentityResponseFormProperties {
	}
	export function CreateV1Beta1GenerateServiceIdentityResponseFormGroup() {
		return new FormGroup<V1Beta1GenerateServiceIdentityResponseFormProperties>({
		});

	}


	/** A service identity in the Identity and Access Management API. */
	export interface V1Beta1ServiceIdentity {

		/** The email address of the service identity. */
		email?: string | null;

		/** P4 service identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default` */
		name?: string | null;

		/** The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default". */
		tag?: string | null;

		/** The unique and stable id of the service identity. */
		uniqueId?: string | null;
	}

	/** A service identity in the Identity and Access Management API. */
	export interface V1Beta1ServiceIdentityFormProperties {

		/** The email address of the service identity. */
		email: FormControl<string | null | undefined>,

		/** P4 service identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default` */
		name: FormControl<string | null | undefined>,

		/** The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default". */
		tag: FormControl<string | null | undefined>,

		/** The unique and stable id of the service identity. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateV1Beta1ServiceIdentityFormGroup() {
		return new FormGroup<V1Beta1ServiceIdentityFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ImportProducerOverrides */
	export interface V1Beta1ImportProducerOverridesResponse {

		/** The overrides that were created from the imported data. */
		overrides?: Array<V1Beta1QuotaOverride>;
	}

	/** Response message for ImportProducerOverrides */
	export interface V1Beta1ImportProducerOverridesResponseFormProperties {
	}
	export function CreateV1Beta1ImportProducerOverridesResponseFormGroup() {
		return new FormGroup<V1Beta1ImportProducerOverridesResponseFormProperties>({
		});

	}


	/** Response message for ImportProducerQuotaPolicies */
	export interface V1Beta1ImportProducerQuotaPoliciesResponse {

		/** The policies that were created from the imported data. */
		policies?: Array<V1Beta1ProducerQuotaPolicy>;
	}

	/** Response message for ImportProducerQuotaPolicies */
	export interface V1Beta1ImportProducerQuotaPoliciesResponseFormProperties {
	}
	export function CreateV1Beta1ImportProducerQuotaPoliciesResponseFormGroup() {
		return new FormGroup<V1Beta1ImportProducerQuotaPoliciesResponseFormProperties>({
		});

	}


	/** Quota policy created by service producer. */
	export interface V1Beta1ProducerQuotaPolicy {

		/** The cloud resource container at which the quota policy is created. The format is {container_type}/{container_number} */
		container?: string | null;

		/** If this map is nonempty, then this policy applies only to specific values for dimensions defined in the limit unit. For example, a policy on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the policy is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota polcies that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map. */
		dimensions?: {[id: string]: string };

		/** The name of the metric to which this policy applies. An example name would be: `compute.googleapis.com/cpus` */
		metric?: string | null;

		/** The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d` */
		name?: string | null;

		/** The quota policy value. Can be any nonnegative integer, or -1 (unlimited quota). */
		policyValue?: string | null;

		/** The limit unit of the limit to which this policy applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string. */
		unit?: string | null;
	}

	/** Quota policy created by service producer. */
	export interface V1Beta1ProducerQuotaPolicyFormProperties {

		/** The cloud resource container at which the quota policy is created. The format is {container_type}/{container_number} */
		container: FormControl<string | null | undefined>,

		/** If this map is nonempty, then this policy applies only to specific values for dimensions defined in the limit unit. For example, a policy on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the policy is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota polcies that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map. */
		dimensions: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the metric to which this policy applies. An example name would be: `compute.googleapis.com/cpus` */
		metric: FormControl<string | null | undefined>,

		/** The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d` */
		name: FormControl<string | null | undefined>,

		/** The quota policy value. Can be any nonnegative integer, or -1 (unlimited quota). */
		policyValue: FormControl<string | null | undefined>,

		/** The limit unit of the limit to which this policy applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateV1Beta1ProducerQuotaPolicyFormGroup() {
		return new FormGroup<V1Beta1ProducerQuotaPolicyFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			dimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			metric: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyValue: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1RefreshConsumerResponse {
	}

	/** Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1Beta1RefreshConsumerResponseFormProperties {
	}
	export function CreateV1Beta1RefreshConsumerResponseFormGroup() {
		return new FormGroup<V1Beta1RefreshConsumerResponseFormProperties>({
		});

	}


	/** A default identity in the Identity and Access Management API. */
	export interface V1DefaultIdentity {

		/** The email address of the default identity. */
		email?: string | null;

		/** Default identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity` */
		name?: string | null;

		/** The Default Identity tag. If specified when creating the account, the tag must be present in activation_grants. If not specified when creating the account, the tag is set to the tag specified in activation_grants. */
		tag?: string | null;

		/** The unique and stable id of the default identity. */
		uniqueId?: string | null;
	}

	/** A default identity in the Identity and Access Management API. */
	export interface V1DefaultIdentityFormProperties {

		/** The email address of the default identity. */
		email: FormControl<string | null | undefined>,

		/** Default identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity` */
		name: FormControl<string | null | undefined>,

		/** The Default Identity tag. If specified when creating the account, the tag must be present in activation_grants. If not specified when creating the account, the tag is set to the tag specified in activation_grants. */
		tag: FormControl<string | null | undefined>,

		/** The unique and stable id of the default identity. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateV1DefaultIdentityFormGroup() {
		return new FormGroup<V1DefaultIdentityFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1DisableConsumerResponse {
	}

	/** Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1DisableConsumerResponseFormProperties {
	}
	export function CreateV1DisableConsumerResponseFormGroup() {
		return new FormGroup<V1DisableConsumerResponseFormProperties>({
		});

	}


	/** Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1EnableConsumerResponse {
	}

	/** Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1EnableConsumerResponseFormProperties {
	}
	export function CreateV1EnableConsumerResponseFormGroup() {
		return new FormGroup<V1EnableConsumerResponseFormProperties>({
		});

	}


	/** Response message for the `GenerateDefaultIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1GenerateDefaultIdentityResponse {

		/** Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED) */
		attachStatus?: V1GenerateDefaultIdentityResponseAttachStatus | null;

		/** A default identity in the Identity and Access Management API. */
		identity?: V1DefaultIdentity;

		/** Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.) */
		role?: string | null;
	}

	/** Response message for the `GenerateDefaultIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1GenerateDefaultIdentityResponseFormProperties {

		/** Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED) */
		attachStatus: FormControl<V1GenerateDefaultIdentityResponseAttachStatus | null | undefined>,

		/** Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.) */
		role: FormControl<string | null | undefined>,
	}
	export function CreateV1GenerateDefaultIdentityResponseFormGroup() {
		return new FormGroup<V1GenerateDefaultIdentityResponseFormProperties>({
			attachStatus: new FormControl<V1GenerateDefaultIdentityResponseAttachStatus | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1GenerateDefaultIdentityResponseAttachStatus { ATTACH_STATUS_UNSPECIFIED = 'ATTACH_STATUS_UNSPECIFIED', ATTACHED = 'ATTACHED', ATTACH_SKIPPED = 'ATTACH_SKIPPED', PREVIOUSLY_ATTACHED = 'PREVIOUSLY_ATTACHED', ATTACH_DENIED_BY_ORG_POLICY = 'ATTACH_DENIED_BY_ORG_POLICY' }


	/** Response message for the `GenerateServiceAccount` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1GenerateServiceAccountResponse {

		/** A service account in the Identity and Access Management API. */
		account?: V1ServiceAccount;
	}

	/** Response message for the `GenerateServiceAccount` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1GenerateServiceAccountResponseFormProperties {
	}
	export function CreateV1GenerateServiceAccountResponseFormGroup() {
		return new FormGroup<V1GenerateServiceAccountResponseFormProperties>({
		});

	}


	/** A service account in the Identity and Access Management API. */
	export interface V1ServiceAccount {

		/** The email address of the service account. */
		email?: string | null;

		/** Deprecated. See b/136209818. */
		iamAccountName?: string | null;

		/** P4 SA resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default` */
		name?: string | null;

		/** The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default". */
		tag?: string | null;

		/** The unique and stable id of the service account. */
		uniqueId?: string | null;
	}

	/** A service account in the Identity and Access Management API. */
	export interface V1ServiceAccountFormProperties {

		/** The email address of the service account. */
		email: FormControl<string | null | undefined>,

		/** Deprecated. See b/136209818. */
		iamAccountName: FormControl<string | null | undefined>,

		/** P4 SA resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default` */
		name: FormControl<string | null | undefined>,

		/** The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default". */
		tag: FormControl<string | null | undefined>,

		/** The unique and stable id of the service account. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateV1ServiceAccountFormGroup() {
		return new FormGroup<V1ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			iamAccountName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1RefreshConsumerResponse {
	}

	/** Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1RefreshConsumerResponseFormProperties {
	}
	export function CreateV1RefreshConsumerResponseFormGroup() {
		return new FormGroup<V1RefreshConsumerResponseFormProperties>({
		});

	}


	/** Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1RemoveVisibilityLabelsResponse {

		/** The updated set of visibility labels for this consumer on this service. */
		labels?: Array<string>;
	}

	/** Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done. */
	export interface V1RemoveVisibilityLabelsResponseFormProperties {
	}
	export function CreateV1RemoveVisibilityLabelsResponseFormGroup() {
		return new FormGroup<V1RemoveVisibilityLabelsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the tenancy unit to be deleted.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Serviceconsumermanagement_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
		 * Post v1/{name}:applyProjectConfig
		 * @param {string} name Required. Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_applyProjectConfig(name: string, requestBody: ApplyTenantProjectConfigRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':applyProjectConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
		 * Post v1/{name}:attachProject
		 * @param {string} name Required. Name of the tenancy unit that the project will be attached to. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_attachProject(name: string, requestBody: AttachTenantProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':attachProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Serviceconsumermanagement_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
		 * Post v1/{name}:deleteProject
		 * @param {string} name Required. Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_deleteProject(name: string, requestBody: DeleteTenantProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':deleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
		 * Post v1/{name}:removeProject
		 * @param {string} name Required. Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_removeProject(name: string, requestBody: RemoveTenantProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':removeProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.
		 * Post v1/{name}:undeleteProject
		 * @param {string} name Required. Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_undeleteProject(name: string, requestBody: UndeleteTenantProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
		 * Get v1/{parent}/tenancyUnits
		 * @param {string} parent Required. Managed service and service consumer. Required. services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a service, such as 'service.googleapis.com'.
		 * @param {string} filter Optional. Filter expression over tenancy resources field. Optional.
		 * @param {number} pageSize Optional. The maximum number of results returned by this request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
		 * @return {ListTenancyUnitsResponse} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTenancyUnitsResponse> {
			return this.http.get<ListTenancyUnitsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenancyUnits&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
		 * Post v1/{parent}/tenancyUnits
		 * @param {string} parent Required. services/{service}/{collection id}/{resource id} {collection id} is the cloud resource collection type representing the service consumer, for example 'projects', or 'organizations'. {resource id} is the consumer numeric id, such as project number: '123456'. {service} the name of a managed service, such as 'service.googleapis.com'. Enables service binding using the new tenancy unit.
		 * @return {TenancyUnit} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_create(parent: string, requestBody: CreateTenancyUnitRequest): Observable<TenancyUnit> {
			return this.http.post<TenancyUnit>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenancyUnits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
		 * Post v1/{parent}:addProject
		 * @param {string} parent Required. Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
		 * @return {Operation} Successful response
		 */
		Serviceconsumermanagement_services_tenancyUnits_addProject(parent: string, requestBody: AddTenantProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':addProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search tenancy units for a managed service.
		 * Get v1/{parent}:search
		 * @param {string} parent Required. Service for which search is performed. services/{service} {service} the name of a service, for example 'service.googleapis.com'.
		 * @param {number} pageSize Optional. The maximum number of results returned by this request. Currently, the default maximum is set to 1000. If `page_size` isn't provided or the size provided is a number larger than 1000, it's automatically set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
		 * @param {string} query Optional. Set a query `{expression}` for querying tenancy units. Your `{expression}` must be in the format: `field_name=literal_string`. The `field_name` is the name of the field you want to compare. Supported fields are `tenant_resources.tag` and `tenant_resources.resource`. For example, to search tenancy units that contain at least one tenant resource with a given tag 'xyz', use the query `tenant_resources.tag=xyz`. To search tenancy units that contain at least one tenant resource with a given resource name 'projects/123456', use the query `tenant_resources.resource=projects/123456`. Multiple expressions can be joined with `AND`s. Tenancy units must match all expressions to be included in the result set. For example, `tenant_resources.tag=xyz AND tenant_resources.resource=projects/123456`
		 * @return {SearchTenancyUnitsResponse} Successful response
		 */
		Serviceconsumermanagement_services_search(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchTenancyUnitsResponse> {
			return this.http.get<SearchTenancyUnitsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':search&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}
	}

}

