import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/**
	 * A Cloud Shell environment, which is defined as the combination of a Docker
	 * image specifying what is installed on the environment and a home directory
	 * containing the user's data that will remain across sessions. Each user has a
	 * single environment with the ID "default".
	 */
	export interface Environment {

		/**
		 * Required. Full path to the Docker image used to run this environment, e.g.
		 * "gcr.io/dev-con/cloud-devshell:latest".
		 */
		dockerImage?: string | null;

		/**
		 * Output only. The environment's identifier, unique among the user's
		 * environments.
		 */
		id?: string | null;

		/**
		 * Output only. Full name of this resource, in the format
		 * `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the
		 * email address of the user to whom this environment belongs, and
		 * `{environment_id}` is the identifier of this environment. For example,
		 * `users/someone@example.com/environments/default`.
		 */
		name?: string | null;

		/**
		 * Output only. Public keys associated with the environment. Clients can
		 * connect to this environment via SSH only if they possess a private key
		 * corresponding to at least one of these public keys. Keys can be added to or
		 * removed from the environment using the CreatePublicKey and DeletePublicKey
		 * methods.
		 */
		publicKeys?: Array<PublicKey>;

		/**
		 * Indicates the size of the backing VM running the environment.  If set to
		 * something other than DEFAULT, it will be reverted to the default VM size
		 * after vm_size_expire_time.
		 */
		size?: EnvironmentSize | null;

		/**
		 * Output only. Host to which clients can connect to initiate SSH sessions
		 * with the environment.
		 */
		sshHost?: string | null;

		/**
		 * Output only. Port to which clients can connect to initiate SSH sessions
		 * with the environment.
		 */
		sshPort?: number | null;

		/**
		 * Output only. Username that clients should use when initiating SSH sessions
		 * with the environment.
		 */
		sshUsername?: string | null;

		/** Output only. Current execution state of this environment. */
		state?: EnvironmentState | null;

		/**
		 * Output only. The time when the Environment will expire back to the default
		 * VM size.
		 */
		vmSizeExpireTime?: string | null;

		/**
		 * Output only. Host to which clients can connect to initiate HTTPS or WSS
		 * connections with the environment.
		 */
		webHost?: string | null;

		/**
		 * Output only. Ports to which clients can connect to initiate HTTPS or WSS
		 * connections with the environment.
		 */
		webPorts?: Array<number>;
	}

	/**
	 * A Cloud Shell environment, which is defined as the combination of a Docker
	 * image specifying what is installed on the environment and a home directory
	 * containing the user's data that will remain across sessions. Each user has a
	 * single environment with the ID "default".
	 */
	export interface EnvironmentFormProperties {

		/**
		 * Required. Full path to the Docker image used to run this environment, e.g.
		 * "gcr.io/dev-con/cloud-devshell:latest".
		 */
		dockerImage: FormControl<string | null | undefined>,

		/**
		 * Output only. The environment's identifier, unique among the user's
		 * environments.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Output only. Full name of this resource, in the format
		 * `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the
		 * email address of the user to whom this environment belongs, and
		 * `{environment_id}` is the identifier of this environment. For example,
		 * `users/someone@example.com/environments/default`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates the size of the backing VM running the environment.  If set to
		 * something other than DEFAULT, it will be reverted to the default VM size
		 * after vm_size_expire_time.
		 */
		size: FormControl<EnvironmentSize | null | undefined>,

		/**
		 * Output only. Host to which clients can connect to initiate SSH sessions
		 * with the environment.
		 */
		sshHost: FormControl<string | null | undefined>,

		/**
		 * Output only. Port to which clients can connect to initiate SSH sessions
		 * with the environment.
		 */
		sshPort: FormControl<number | null | undefined>,

		/**
		 * Output only. Username that clients should use when initiating SSH sessions
		 * with the environment.
		 */
		sshUsername: FormControl<string | null | undefined>,

		/** Output only. Current execution state of this environment. */
		state: FormControl<EnvironmentState | null | undefined>,

		/**
		 * Output only. The time when the Environment will expire back to the default
		 * VM size.
		 */
		vmSizeExpireTime: FormControl<string | null | undefined>,

		/**
		 * Output only. Host to which clients can connect to initiate HTTPS or WSS
		 * connections with the environment.
		 */
		webHost: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			dockerImage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<EnvironmentSize | null | undefined>(undefined),
			sshHost: new FormControl<string | null | undefined>(undefined),
			sshPort: new FormControl<number | null | undefined>(undefined),
			sshUsername: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EnvironmentState | null | undefined>(undefined),
			vmSizeExpireTime: new FormControl<string | null | undefined>(undefined),
			webHost: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A public SSH key, corresponding to a private SSH key held by the client. */
	export interface PublicKey {

		/** Required. Format of this key's content. */
		format?: PublicKeyFormat | null;

		/** Required. Content of this key. */
		key?: string | null;

		/**
		 * Output only. Full name of this resource, in the format
		 * `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`.
		 * `{owner_email}` is the email address of the user to whom the key belongs.
		 * `{environment_id}` is the identifier of the environment to which the key
		 * grants access. `{key_id}` is the unique identifier of the key. For example,
		 * `users/someone@example.com/environments/default/publicKeys/myKey`.
		 */
		name?: string | null;
	}

	/** A public SSH key, corresponding to a private SSH key held by the client. */
	export interface PublicKeyFormProperties {

		/** Required. Format of this key's content. */
		format: FormControl<PublicKeyFormat | null | undefined>,

		/** Required. Content of this key. */
		key: FormControl<string | null | undefined>,

		/**
		 * Output only. Full name of this resource, in the format
		 * `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`.
		 * `{owner_email}` is the email address of the user to whom the key belongs.
		 * `{environment_id}` is the identifier of the environment to which the key
		 * grants access. `{key_id}` is the unique identifier of the key. For example,
		 * `users/someone@example.com/environments/default/publicKeys/myKey`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			format: new FormControl<PublicKeyFormat | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublicKeyFormat { FORMAT_UNSPECIFIED = 0, SSH_DSS = 1, SSH_RSA = 2, ECDSA_SHA2_NISTP256 = 3, ECDSA_SHA2_NISTP384 = 4, ECDSA_SHA2_NISTP521 = 5 }

	export enum EnvironmentSize { VM_SIZE_UNSPECIFIED = 0, DEFAULT = 1, BOOSTED = 2 }

	export enum EnvironmentState { STATE_UNSPECIFIED = 0, DISABLED = 1, STARTING = 2, RUNNING = 3 }


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


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}

	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
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


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Message included in the metadata field of operations returned from
	 * StartEnvironment.
	 */
	export interface StartEnvironmentMetadata {

		/** Current state of the environment being started. */
		state?: StartEnvironmentMetadataState | null;
	}

	/**
	 * Message included in the metadata field of operations returned from
	 * StartEnvironment.
	 */
	export interface StartEnvironmentMetadataFormProperties {

		/** Current state of the environment being started. */
		state: FormControl<StartEnvironmentMetadataState | null | undefined>,
	}
	export function CreateStartEnvironmentMetadataFormGroup() {
		return new FormGroup<StartEnvironmentMetadataFormProperties>({
			state: new FormControl<StartEnvironmentMetadataState | null | undefined>(undefined),
		});

	}

	export enum StartEnvironmentMetadataState { STATE_UNSPECIFIED = 0, STARTING = 1, UNARCHIVING_DISK = 2, AWAITING_VM = 3, AWAITING_COMPUTE_RESOURCES = 4, FINISHED = 5 }


	/**
	 * Message included in the response field of operations returned from
	 * StartEnvironment once the
	 * operation is complete.
	 */
	export interface StartEnvironmentResponse {

		/**
		 * A Cloud Shell environment, which is defined as the combination of a Docker
		 * image specifying what is installed on the environment and a home directory
		 * containing the user's data that will remain across sessions. Each user has a
		 * single environment with the ID "default".
		 */
		environment?: Environment;
	}

	/**
	 * Message included in the response field of operations returned from
	 * StartEnvironment once the
	 * operation is complete.
	 */
	export interface StartEnvironmentResponseFormProperties {
	}
	export function CreateStartEnvironmentResponseFormGroup() {
		return new FormGroup<StartEnvironmentResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Cloudshell_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Cloudshell_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Cloudshell_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

