import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An `Action` captures all the information about an execution which is required to reproduce it. `Action`s are the core component of the [Execution] service. A single `Action` represents a repeatable action that can be performed by the execution service. `Action`s can be succinctly identified by the digest of their wire format encoding and, once an `Action` has been executed, will be cached in the action cache. Future requests can then use the cached result rather than needing to run afresh. When a server completes execution of an Action, it MAY choose to cache the result in the ActionCache unless `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By default, future calls to Execute the same `Action` will also serve their results from the cache. Clients must take care to understand the caching behaviour. Ideally, all `Action`s will be reproducible so that serving a result from cache is always desirable and correct. */
	export interface BuildBazelRemoteExecutionV2Action {

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		commandDigest?: BuildBazelRemoteExecutionV2Digest;

		/** If true, then the `Action`'s result cannot be cached, and in-flight requests for the same `Action` may not be merged. */
		doNotCache?: boolean | null;

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		inputRootDigest?: BuildBazelRemoteExecutionV2Digest;

		/** A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform. */
		platform?: BuildBazelRemoteExecutionV2Platform;

		/** An optional additional salt value used to place this `Action` into a separate cache namespace from other instances having the same field contents. This salt typically comes from operational configuration specific to sources such as repo and service configuration, and allows disowning an entire set of ActionResults that might have been poisoned by buggy software or tool failures. */
		salt?: string | null;

		/** A timeout after which the execution should be killed. If the timeout is absent, then the client is specifying that the execution should continue as long as the server will let it. The server SHOULD impose a timeout if the client does not specify one, however, if the client does specify a timeout that is longer than the server's maximum timeout, the server MUST reject the request. The timeout is only intended to cover the "execution" of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn't have control over, and MAY extend or reduce the timeout to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The timeout is a part of the Action message, and therefore two `Actions` with different timeouts are different, even if they are otherwise identical. This is because, if they were not, running an `Action` with a lower timeout than is required might result in a cache hit from an execution run with a longer timeout, hiding the fact that the timeout is too short. By encoding it directly in the `Action`, a lower timeout will result in a cache miss and the execution timeout will fail immediately, rather than whenever the cache entry gets evicted. */
		timeout?: string | null;
	}

	/** An `Action` captures all the information about an execution which is required to reproduce it. `Action`s are the core component of the [Execution] service. A single `Action` represents a repeatable action that can be performed by the execution service. `Action`s can be succinctly identified by the digest of their wire format encoding and, once an `Action` has been executed, will be cached in the action cache. Future requests can then use the cached result rather than needing to run afresh. When a server completes execution of an Action, it MAY choose to cache the result in the ActionCache unless `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By default, future calls to Execute the same `Action` will also serve their results from the cache. Clients must take care to understand the caching behaviour. Ideally, all `Action`s will be reproducible so that serving a result from cache is always desirable and correct. */
	export interface BuildBazelRemoteExecutionV2ActionFormProperties {

		/** If true, then the `Action`'s result cannot be cached, and in-flight requests for the same `Action` may not be merged. */
		doNotCache: FormControl<boolean | null | undefined>,

		/** An optional additional salt value used to place this `Action` into a separate cache namespace from other instances having the same field contents. This salt typically comes from operational configuration specific to sources such as repo and service configuration, and allows disowning an entire set of ActionResults that might have been poisoned by buggy software or tool failures. */
		salt: FormControl<string | null | undefined>,

		/** A timeout after which the execution should be killed. If the timeout is absent, then the client is specifying that the execution should continue as long as the server will let it. The server SHOULD impose a timeout if the client does not specify one, however, if the client does specify a timeout that is longer than the server's maximum timeout, the server MUST reject the request. The timeout is only intended to cover the "execution" of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn't have control over, and MAY extend or reduce the timeout to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The timeout is a part of the Action message, and therefore two `Actions` with different timeouts are different, even if they are otherwise identical. This is because, if they were not, running an `Action` with a lower timeout than is required might result in a cache hit from an execution run with a longer timeout, hiding the fact that the timeout is too short. By encoding it directly in the `Action`, a lower timeout will result in a cache miss and the execution timeout will fail immediately, rather than whenever the cache entry gets evicted. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ActionFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ActionFormProperties>({
			doNotCache: new FormControl<boolean | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
	export interface BuildBazelRemoteExecutionV2Digest {

		/** The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long. */
		hash?: string | null;

		/** The size of the blob, in bytes. */
		sizeBytes?: string | null;
	}

	/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
	export interface BuildBazelRemoteExecutionV2DigestFormProperties {

		/** The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long. */
		hash: FormControl<string | null | undefined>,

		/** The size of the blob, in bytes. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2DigestFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2DigestFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform. */
	export interface BuildBazelRemoteExecutionV2Platform {

		/** The properties that make up this platform. In order to ensure that equivalent `Platform`s always hash to the same value, the properties MUST be lexicographically sorted by name, and then by value. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes. */
		properties?: Array<BuildBazelRemoteExecutionV2PlatformProperty>;
	}

	/** A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform. */
	export interface BuildBazelRemoteExecutionV2PlatformFormProperties {
	}
	export function CreateBuildBazelRemoteExecutionV2PlatformFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2PlatformFormProperties>({
		});

	}


	/** A single property for the environment. The server is responsible for specifying the property `name`s that it accepts. If an unknown `name` is provided in the requirements for an Action, the server SHOULD reject the execution request. If permitted by the server, the same `name` may occur multiple times. The server is also responsible for specifying the interpretation of property `value`s. For instance, a property describing how much RAM must be available may be interpreted as allowing a worker with 16GB to fulfill a request for 8GB, while a property describing the OS environment on which the action must be performed may require an exact match with the worker's OS. The server MAY use the `value` of one or more properties to determine how it sets up the execution environment, such as by making specific system files available to the worker. Both names and values are typically case-sensitive. Note that the platform is implicitly part of the action digest, so even tiny changes in the names or values (like changing case) may result in different action cache entries. */
	export interface BuildBazelRemoteExecutionV2PlatformProperty {

		/** The property name. */
		name?: string | null;

		/** The property value. */
		value?: string | null;
	}

	/** A single property for the environment. The server is responsible for specifying the property `name`s that it accepts. If an unknown `name` is provided in the requirements for an Action, the server SHOULD reject the execution request. If permitted by the server, the same `name` may occur multiple times. The server is also responsible for specifying the interpretation of property `value`s. For instance, a property describing how much RAM must be available may be interpreted as allowing a worker with 16GB to fulfill a request for 8GB, while a property describing the OS environment on which the action must be performed may require an exact match with the worker's OS. The server MAY use the `value` of one or more properties to determine how it sets up the execution environment, such as by making specific system files available to the worker. Both names and values are typically case-sensitive. Note that the platform is implicitly part of the action digest, so even tiny changes in the names or values (like changing case) may result in different action cache entries. */
	export interface BuildBazelRemoteExecutionV2PlatformPropertyFormProperties {

		/** The property name. */
		name: FormControl<string | null | undefined>,

		/** The property value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2PlatformPropertyFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2PlatformPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ActionResult represents the result of an Action being run. It is advised that at least one field (for example `ActionResult.execution_metadata.Worker`) have a non-default value, to ensure that the serialized value is non-empty, which can then be used as a basic data sanity check. */
	export interface BuildBazelRemoteExecutionV2ActionResult {

		/** ExecutedActionMetadata contains details about a completed execution. */
		executionMetadata?: BuildBazelRemoteExecutionV2ExecutedActionMetadata;

		/**
		 * The exit code of the command.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;

		/** The output directories of the action. For each output directory requested in the `output_directories` or `output_paths` field of the Action, if the corresponding directory existed after the action completed, a single entry will be present in the output list, which will contain the digest of a Tree message containing the directory tree, and the path equal exactly to the corresponding Action output_directories member. As an example, suppose the Action had an output directory `a/b/dir` and the execution produced the following contents in `a/b/dir`: a file named `bar` and a directory named `foo` with an executable file named `baz`. Then, output_directory will contain (hashes shortened for readability): ```json // OutputDirectory proto: { path: "a/b/dir" tree_digest: { hash: "4a73bc9d03...", size: 55 } } // Tree proto with hash "4a73bc9d03..." and size 55: { root: { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 } } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } children : { // (Directory proto with hash "4cf2eda940..." and size 43) files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } } ``` If an output of the same name as listed in `output_files` of the Command was found in `output_directories`, but was not a directory, the server will return a FAILED_PRECONDITION. */
		outputDirectories?: Array<BuildBazelRemoteExecutionV2OutputDirectory>;

		/** The output directories of the action that are symbolic links to other directories. Those may be links to other output directories, or input directories, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output directory requested in the `output_directories` field of the Action, if the directory existed after the action completed, a single entry will be present either in this field, or in the `output_directories` field, if the directory was not a symbolic link. If an output of the same name was found, but was a symbolic link to a file instead of a directory, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API should still populate this field in addition to `output_symlinks`. */
		outputDirectorySymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/** The output files of the action that are symbolic links to other files. Those may be links to other output files, or input files, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output file requested in the `output_files` or `output_paths` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or in the `output_files` field, if the file was not a symbolic link. If an output symbolic link of the same name as listed in `output_files` of the Command was found, but its target type was not a regular file, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API should still populate this field in addition to `output_symlinks`. */
		outputFileSymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/** The output files of the action. For each output file requested in the `output_files` or `output_paths` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or the `output_file_symlinks` field if the file was a symbolic link to another file (`output_symlinks` field after v2.1). If an output listed in `output_files` was found, but was a directory rather than a regular file, the server will return a FAILED_PRECONDITION. If the action does not produce the requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. */
		outputFiles?: Array<BuildBazelRemoteExecutionV2OutputFile>;

		/** New in v2.1: this field will only be populated if the command `output_paths` field was used, and not the pre v2.1 `output_files` or `output_directories` fields. The output paths of the action that are symbolic links to other paths. Those may be links to other outputs, or inputs, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. A single entry for each output requested in `output_paths` field of the Action, if the corresponding path existed after the action completed and was a symbolic link. If the action does not produce a requested output, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted. */
		outputSymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		stderrDigest?: BuildBazelRemoteExecutionV2Digest;

		/** The standard error buffer of the action. The server SHOULD NOT inline stderr unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		stderrRaw?: string | null;

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		stdoutDigest?: BuildBazelRemoteExecutionV2Digest;

		/** The standard output buffer of the action. The server SHOULD NOT inline stdout unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		stdoutRaw?: string | null;
	}

	/** An ActionResult represents the result of an Action being run. It is advised that at least one field (for example `ActionResult.execution_metadata.Worker`) have a non-default value, to ensure that the serialized value is non-empty, which can then be used as a basic data sanity check. */
	export interface BuildBazelRemoteExecutionV2ActionResultFormProperties {

		/**
		 * The exit code of the command.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** The standard error buffer of the action. The server SHOULD NOT inline stderr unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		stderrRaw: FormControl<string | null | undefined>,

		/** The standard output buffer of the action. The server SHOULD NOT inline stdout unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		stdoutRaw: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ActionResultFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ActionResultFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
			stderrRaw: new FormControl<string | null | undefined>(undefined),
			stdoutRaw: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExecutedActionMetadata contains details about a completed execution. */
	export interface BuildBazelRemoteExecutionV2ExecutedActionMetadata {

		/** Details that are specific to the kind of worker used. For example, on POSIX-like systems this could contain a message with getrusage(2) statistics. */
		auxiliaryMetadata?: Array<string>;

		/** When the worker completed executing the action command. */
		executionCompletedTimestamp?: string | null;

		/** When the worker started executing the action command. */
		executionStartTimestamp?: string | null;

		/** When the worker finished fetching action inputs. */
		inputFetchCompletedTimestamp?: string | null;

		/** When the worker started fetching action inputs. */
		inputFetchStartTimestamp?: string | null;

		/** When the worker finished uploading action outputs. */
		outputUploadCompletedTimestamp?: string | null;

		/** When the worker started uploading action outputs. */
		outputUploadStartTimestamp?: string | null;

		/** When was the action added to the queue. */
		queuedTimestamp?: string | null;

		/** New in v2.3: the amount of time the worker spent executing the action command, potentially computed using a worker-specific virtual clock. The virtual execution duration is only intended to cover the "execution" of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn't have control over, and MAY extend or reduce the execution duration to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The method of timekeeping used to compute the virtual execution duration MUST be consistent with what is used to enforce the Action's `timeout`. There is no relationship between the virtual execution duration and the values of `execution_start_timestamp` and `execution_completed_timestamp`. */
		virtualExecutionDuration?: string | null;

		/** The name of the worker which ran the execution. */
		worker?: string | null;

		/** When the worker completed the action, including all stages. */
		workerCompletedTimestamp?: string | null;

		/** When the worker received the action. */
		workerStartTimestamp?: string | null;
	}

	/** ExecutedActionMetadata contains details about a completed execution. */
	export interface BuildBazelRemoteExecutionV2ExecutedActionMetadataFormProperties {

		/** When the worker completed executing the action command. */
		executionCompletedTimestamp: FormControl<string | null | undefined>,

		/** When the worker started executing the action command. */
		executionStartTimestamp: FormControl<string | null | undefined>,

		/** When the worker finished fetching action inputs. */
		inputFetchCompletedTimestamp: FormControl<string | null | undefined>,

		/** When the worker started fetching action inputs. */
		inputFetchStartTimestamp: FormControl<string | null | undefined>,

		/** When the worker finished uploading action outputs. */
		outputUploadCompletedTimestamp: FormControl<string | null | undefined>,

		/** When the worker started uploading action outputs. */
		outputUploadStartTimestamp: FormControl<string | null | undefined>,

		/** When was the action added to the queue. */
		queuedTimestamp: FormControl<string | null | undefined>,

		/** New in v2.3: the amount of time the worker spent executing the action command, potentially computed using a worker-specific virtual clock. The virtual execution duration is only intended to cover the "execution" of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn't have control over, and MAY extend or reduce the execution duration to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The method of timekeeping used to compute the virtual execution duration MUST be consistent with what is used to enforce the Action's `timeout`. There is no relationship between the virtual execution duration and the values of `execution_start_timestamp` and `execution_completed_timestamp`. */
		virtualExecutionDuration: FormControl<string | null | undefined>,

		/** The name of the worker which ran the execution. */
		worker: FormControl<string | null | undefined>,

		/** When the worker completed the action, including all stages. */
		workerCompletedTimestamp: FormControl<string | null | undefined>,

		/** When the worker received the action. */
		workerStartTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ExecutedActionMetadataFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ExecutedActionMetadataFormProperties>({
			executionCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			executionStartTimestamp: new FormControl<string | null | undefined>(undefined),
			inputFetchCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			inputFetchStartTimestamp: new FormControl<string | null | undefined>(undefined),
			outputUploadCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			outputUploadStartTimestamp: new FormControl<string | null | undefined>(undefined),
			queuedTimestamp: new FormControl<string | null | undefined>(undefined),
			virtualExecutionDuration: new FormControl<string | null | undefined>(undefined),
			worker: new FormControl<string | null | undefined>(undefined),
			workerCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			workerStartTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory's full contents rather than a single file. */
	export interface BuildBazelRemoteExecutionV2OutputDirectory {

		/** If set, consumers MAY make the following assumptions about the directories contained in the the Tree, so that it may be instantiated on a local file system by scanning through it sequentially: - All directories with the same binary representation are stored exactly once. - All directories, apart from the root directory, are referenced by at least one parent directory. - Directories are stored in topological order, with parents being stored before the child. The root directory is thus the first to be stored. Additionally, the Tree MUST be encoded as a stream of records, where each record has the following format: - A tag byte, having one of the following two values: - (1 << 3) | 2 == 0x0a: First record (the root directory). - (2 << 3) | 2 == 0x12: Any subsequent records (child directories). - The size of the directory, encoded as a base 128 varint. - The contents of the directory, encoded as a binary serialized Protobuf message. This encoding is a subset of the Protobuf wire format of the Tree message. As it is only permitted to store data associated with field numbers 1 and 2, the tag MUST be encoded as a single byte. More details on the Protobuf wire format can be found here: https://developers.google.com/protocol-buffers/docs/encoding It is recommended that implementations using this feature construct Tree objects manually using the specification given above, as opposed to using a Protobuf library to marshal a full Tree message. As individual Directory messages already need to be marshaled to compute their digests, constructing the Tree object manually avoids redundant marshaling. */
		isTopologicallySorted?: boolean | null;

		/** The full path of the directory relative to the working directory. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory. */
		path?: string | null;

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		treeDigest?: BuildBazelRemoteExecutionV2Digest;
	}

	/** An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory's full contents rather than a single file. */
	export interface BuildBazelRemoteExecutionV2OutputDirectoryFormProperties {

		/** If set, consumers MAY make the following assumptions about the directories contained in the the Tree, so that it may be instantiated on a local file system by scanning through it sequentially: - All directories with the same binary representation are stored exactly once. - All directories, apart from the root directory, are referenced by at least one parent directory. - Directories are stored in topological order, with parents being stored before the child. The root directory is thus the first to be stored. Additionally, the Tree MUST be encoded as a stream of records, where each record has the following format: - A tag byte, having one of the following two values: - (1 << 3) | 2 == 0x0a: First record (the root directory). - (2 << 3) | 2 == 0x12: Any subsequent records (child directories). - The size of the directory, encoded as a base 128 varint. - The contents of the directory, encoded as a binary serialized Protobuf message. This encoding is a subset of the Protobuf wire format of the Tree message. As it is only permitted to store data associated with field numbers 1 and 2, the tag MUST be encoded as a single byte. More details on the Protobuf wire format can be found here: https://developers.google.com/protocol-buffers/docs/encoding It is recommended that implementations using this feature construct Tree objects manually using the specification given above, as opposed to using a Protobuf library to marshal a full Tree message. As individual Directory messages already need to be marshaled to compute their digests, constructing the Tree object manually avoids redundant marshaling. */
		isTopologicallySorted: FormControl<boolean | null | undefined>,

		/** The full path of the directory relative to the working directory. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2OutputDirectoryFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2OutputDirectoryFormProperties>({
			isTopologicallySorted: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`. `OutputSymlink` is binary-compatible with `SymlinkNode`. */
	export interface BuildBazelRemoteExecutionV2OutputSymlink {

		/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
		nodeProperties?: BuildBazelRemoteExecutionV2NodeProperties;

		/** The full path of the symlink relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. */
		path?: string | null;

		/** The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. `..` components are allowed anywhere in the target path. */
		target?: string | null;
	}

	/** An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`. `OutputSymlink` is binary-compatible with `SymlinkNode`. */
	export interface BuildBazelRemoteExecutionV2OutputSymlinkFormProperties {

		/** The full path of the symlink relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. */
		path: FormControl<string | null | undefined>,

		/** The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. `..` components are allowed anywhere in the target path. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2OutputSymlinkFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2OutputSymlinkFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
	export interface BuildBazelRemoteExecutionV2NodeProperties {

		/** The file's last modification timestamp. */
		mtime?: string | null;

		/** A list of string-based NodeProperties. */
		properties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;

		/**
		 * The UNIX file mode, e.g., 0755.
		 * Type: uint, 0 to 4,294,967,295
		 */
		unixMode?: number | null;
	}

	/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
	export interface BuildBazelRemoteExecutionV2NodePropertiesFormProperties {

		/** The file's last modification timestamp. */
		mtime: FormControl<string | null | undefined>,

		/**
		 * The UNIX file mode, e.g., 0755.
		 * Type: uint, 0 to 4,294,967,295
		 */
		unixMode: FormControl<number | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2NodePropertiesFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2NodePropertiesFormProperties>({
			mtime: new FormControl<string | null | undefined>(undefined),
			unixMode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single property for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the property `name`s that it accepts. If permitted by the server, the same `name` may occur multiple times. */
	export interface BuildBazelRemoteExecutionV2NodeProperty {

		/** The property name. */
		name?: string | null;

		/** The property value. */
		value?: string | null;
	}

	/** A single property for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the property `name`s that it accepts. If permitted by the server, the same `name` may occur multiple times. */
	export interface BuildBazelRemoteExecutionV2NodePropertyFormProperties {

		/** The property name. */
		name: FormControl<string | null | undefined>,

		/** The property value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2NodePropertyFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2NodePropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name. */
	export interface BuildBazelRemoteExecutionV2OutputFile {

		/** The contents of the file if inlining was requested. The server SHOULD NOT inline file contents unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		contents?: string | null;

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** True if file is executable, false otherwise. */
		isExecutable?: boolean | null;

		/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
		nodeProperties?: BuildBazelRemoteExecutionV2NodeProperties;

		/** The full path of the file relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. */
		path?: string | null;
	}

	/** An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name. */
	export interface BuildBazelRemoteExecutionV2OutputFileFormProperties {

		/** The contents of the file if inlining was requested. The server SHOULD NOT inline file contents unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. */
		contents: FormControl<string | null | undefined>,

		/** True if file is executable, false otherwise. */
		isExecutable: FormControl<boolean | null | undefined>,

		/** The full path of the file relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2OutputFileFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2OutputFileFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			isExecutable: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Command` is the actual command executed by a worker running an Action and specifications of its environment. Except as otherwise required, the environment (such as which system libraries or binaries are available, and what filesystems are mounted where) is defined by and specific to the implementation of the remote execution API. */
	export interface BuildBazelRemoteExecutionV2Command {

		/** The arguments to the command. The first argument specifies the command to run, which may be either an absolute path, a path relative to the working directory, or an unqualified path (without path separators) which will be resolved using the operating system's equivalent of the PATH environment variable. Path separators native to the operating system running on the worker SHOULD be used. If the `environment_variables` list contains an entry for the PATH environment variable, it SHOULD be respected. If not, the resolution process is implementation-defined. Changed in v2.3. v2.2 and older require that no PATH lookups are performed, and that relative paths are resolved relative to the input root. This behavior can, however, not be relied upon, as most implementations already followed the rules described above. */
		arguments?: Array<string>;

		/** The environment variables to set when running the program. The worker may provide its own default environment variables; these defaults can be overridden using this field. Additional variables can also be specified. In order to ensure that equivalent Commands always hash to the same value, the environment variables MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes. */
		environmentVariables?: Array<BuildBazelRemoteExecutionV2CommandEnvironmentVariable>;

		/** A list of the output directories that the client expects to retrieve from the action. Only the listed directories will be returned (an entire directory structure will be returned as a Tree message digest, see OutputDirectory), as well as files listed in `output_files`. Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. The special value of empty string is allowed, although not recommended, and can be used to capture the entire working directory tree, including inputs. In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). An output directory cannot be duplicated or have the same path as any of the listed output files. An output directory is allowed to be a parent of another output directory. Directories leading up to the output directories (but not the output directories themselves) are created by the worker prior to execution, even if they are not explicitly part of the input root. DEPRECATED since 2.1: Use `output_paths` instead. */
		outputDirectories?: Array<string>;

		/** A list of the output files that the client expects to retrieve from the action. Only the listed files, as well as directories listed in `output_directories`, will be returned to the client as output. Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). An output file cannot be duplicated, be a parent of another output file, or have the same path as any of the listed output directories. Directories leading up to the output files are created by the worker prior to execution, even if they are not explicitly part of the input root. DEPRECATED since v2.1: Use `output_paths` instead. */
		outputFiles?: Array<string>;

		/** A list of keys for node properties the client expects to retrieve for output files and directories. Keys are either names of string-based NodeProperty or names of fields in NodeProperties. In order to ensure that equivalent `Action`s always hash to the same value, the node properties MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes. The interpretation of string-based properties is server-dependent. If a property is not recognized by the server, the server will return an `INVALID_ARGUMENT`. */
		outputNodeProperties?: Array<string>;

		/** A list of the output paths that the client expects to retrieve from the action. Only the listed paths will be returned to the client as output. The type of the output (file or directory) is not specified, and will be determined by the server after action execution. If the resulting path is a file, it will be returned in an OutputFile typed field. If the path is a directory, the entire directory structure will be returned as a Tree message digest, see OutputDirectory Other files or directories that may be created during command execution are discarded. The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. In order to ensure consistent hashing of the same Action, the output paths MUST be deduplicated and sorted lexicographically by code point (or, equivalently, by UTF-8 bytes). Directories leading up to the output paths are created by the worker prior to execution, even if they are not explicitly part of the input root. New in v2.1: this field supersedes the DEPRECATED `output_files` and `output_directories` fields. If `output_paths` is used, `output_files` and `output_directories` will be ignored! */
		outputPaths?: Array<string>;

		/** A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform. */
		platform?: BuildBazelRemoteExecutionV2Platform;

		/** The working directory, relative to the input root, for the command to run in. It must be a directory which exists in the input tree. If it is left empty, then the action is run in the input root. */
		workingDirectory?: string | null;
	}

	/** A `Command` is the actual command executed by a worker running an Action and specifications of its environment. Except as otherwise required, the environment (such as which system libraries or binaries are available, and what filesystems are mounted where) is defined by and specific to the implementation of the remote execution API. */
	export interface BuildBazelRemoteExecutionV2CommandFormProperties {

		/** The working directory, relative to the input root, for the command to run in. It must be a directory which exists in the input tree. If it is left empty, then the action is run in the input root. */
		workingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2CommandFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2CommandFormProperties>({
			workingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `EnvironmentVariable` is one variable to set in the running program's environment. */
	export interface BuildBazelRemoteExecutionV2CommandEnvironmentVariable {

		/** The variable name. */
		name?: string | null;

		/** The variable value. */
		value?: string | null;
	}

	/** An `EnvironmentVariable` is one variable to set in the running program's environment. */
	export interface BuildBazelRemoteExecutionV2CommandEnvironmentVariableFormProperties {

		/** The variable name. */
		name: FormControl<string | null | undefined>,

		/** The variable value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2CommandEnvironmentVariableFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2CommandEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both "Foo" and "foo" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): ```json // (Directory proto) { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 }, node_properties: [ { "name": "MTime", "value": "2017-01-15T01:30:15.01Z" } ] } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } // (Directory proto with hash "4cf2eda940..." and size 43) { files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } ``` */
	export interface BuildBazelRemoteExecutionV2Directory {

		/** The subdirectories in the directory. */
		directories?: Array<BuildBazelRemoteExecutionV2DirectoryNode>;

		/** The files in the directory. */
		files?: Array<BuildBazelRemoteExecutionV2FileNode>;

		/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
		nodeProperties?: BuildBazelRemoteExecutionV2NodeProperties;

		/** The symlinks in the directory. */
		symlinks?: Array<BuildBazelRemoteExecutionV2SymlinkNode>;
	}

	/** A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both "Foo" and "foo" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): ```json // (Directory proto) { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 }, node_properties: [ { "name": "MTime", "value": "2017-01-15T01:30:15.01Z" } ] } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } // (Directory proto with hash "4cf2eda940..." and size 43) { files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } ``` */
	export interface BuildBazelRemoteExecutionV2DirectoryFormProperties {
	}
	export function CreateBuildBazelRemoteExecutionV2DirectoryFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2DirectoryFormProperties>({
		});

	}


	/** A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata. */
	export interface BuildBazelRemoteExecutionV2DirectoryNode {

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** The name of the directory. */
		name?: string | null;
	}

	/** A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata. */
	export interface BuildBazelRemoteExecutionV2DirectoryNodeFormProperties {

		/** The name of the directory. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2DirectoryNodeFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2DirectoryNodeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `FileNode` represents a single file and associated metadata. */
	export interface BuildBazelRemoteExecutionV2FileNode {

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** True if file is executable, false otherwise. */
		isExecutable?: boolean | null;

		/** The name of the file. */
		name?: string | null;

		/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
		nodeProperties?: BuildBazelRemoteExecutionV2NodeProperties;
	}

	/** A `FileNode` represents a single file and associated metadata. */
	export interface BuildBazelRemoteExecutionV2FileNodeFormProperties {

		/** True if file is executable, false otherwise. */
		isExecutable: FormControl<boolean | null | undefined>,

		/** The name of the file. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2FileNodeFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2FileNodeFormProperties>({
			isExecutable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `SymlinkNode` represents a symbolic link. */
	export interface BuildBazelRemoteExecutionV2SymlinkNode {

		/** The name of the symlink. */
		name?: string | null;

		/** Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts. */
		nodeProperties?: BuildBazelRemoteExecutionV2NodeProperties;

		/** The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. `..` components are allowed anywhere in the target path as logical canonicalization may lead to different behavior in the presence of directory symlinks (e.g. `foo/../bar` may not be the same as `bar`). To reduce potential cache misses, canonicalization is still recommended where this is possible without impacting correctness. */
		target?: string | null;
	}

	/** A `SymlinkNode` represents a symbolic link. */
	export interface BuildBazelRemoteExecutionV2SymlinkNodeFormProperties {

		/** The name of the symlink. */
		name: FormControl<string | null | undefined>,

		/** The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. `..` components are allowed anywhere in the target path as logical canonicalization may lead to different behavior in the presence of directory symlinks (e.g. `foo/../bar` may not be the same as `bar`). To reduce potential cache misses, canonicalization is still recommended where this is possible without impacting correctness. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2SymlinkNodeFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2SymlinkNodeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about an ongoing execution, which will be contained in the metadata field of the Operation. */
	export interface BuildBazelRemoteExecutionV2ExecuteOperationMetadata {

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		actionDigest?: BuildBazelRemoteExecutionV2Digest;

		/** ExecutedActionMetadata contains details about a completed execution. */
		partialExecutionMetadata?: BuildBazelRemoteExecutionV2ExecutedActionMetadata;

		/** The current stage of execution. */
		stage?: BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage | null;

		/** If set, the client can use this resource name with ByteStream.Read to stream the standard error from the endpoint hosting streamed responses. */
		stderrStreamName?: string | null;

		/** If set, the client can use this resource name with ByteStream.Read to stream the standard output from the endpoint hosting streamed responses. */
		stdoutStreamName?: string | null;
	}

	/** Metadata about an ongoing execution, which will be contained in the metadata field of the Operation. */
	export interface BuildBazelRemoteExecutionV2ExecuteOperationMetadataFormProperties {

		/** The current stage of execution. */
		stage: FormControl<BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage | null | undefined>,

		/** If set, the client can use this resource name with ByteStream.Read to stream the standard error from the endpoint hosting streamed responses. */
		stderrStreamName: FormControl<string | null | undefined>,

		/** If set, the client can use this resource name with ByteStream.Read to stream the standard output from the endpoint hosting streamed responses. */
		stdoutStreamName: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ExecuteOperationMetadataFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ExecuteOperationMetadataFormProperties>({
			stage: new FormControl<BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage | null | undefined>(undefined),
			stderrStreamName: new FormControl<string | null | undefined>(undefined),
			stdoutStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage { UNKNOWN = 'UNKNOWN', CACHE_CHECK = 'CACHE_CHECK', QUEUED = 'QUEUED', EXECUTING = 'EXECUTING', COMPLETED = 'COMPLETED' }


	/** The response message for Execution.Execute, which will be contained in the response field of the Operation. */
	export interface BuildBazelRemoteExecutionV2ExecuteResponse {

		/** True if the result was served from cache, false if it was executed. */
		cachedResult?: boolean | null;

		/** Freeform informational message with details on the execution of the action that may be displayed to the user upon failure or when requested explicitly. */
		message?: string | null;

		/** An ActionResult represents the result of an Action being run. It is advised that at least one field (for example `ActionResult.execution_metadata.Worker`) have a non-default value, to ensure that the serialized value is non-empty, which can then be used as a basic data sanity check. */
		result?: BuildBazelRemoteExecutionV2ActionResult;

		/** An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker's setup phase. The keys SHOULD be human readable so that a client can display them to a user. */
		serverLogs?: {[id: string]: BuildBazelRemoteExecutionV2LogFile };

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The response message for Execution.Execute, which will be contained in the response field of the Operation. */
	export interface BuildBazelRemoteExecutionV2ExecuteResponseFormProperties {

		/** True if the result was served from cache, false if it was executed. */
		cachedResult: FormControl<boolean | null | undefined>,

		/** Freeform informational message with details on the execution of the action that may be displayed to the user upon failure or when requested explicitly. */
		message: FormControl<string | null | undefined>,

		/** An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker's setup phase. The keys SHOULD be human readable so that a client can display them to a user. */
		serverLogs: FormControl<{[id: string]: BuildBazelRemoteExecutionV2LogFile } | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ExecuteResponseFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ExecuteResponseFormProperties>({
			cachedResult: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			serverLogs: new FormControl<{[id: string]: BuildBazelRemoteExecutionV2LogFile } | null | undefined>(undefined),
		});

	}


	/** A `LogFile` is a log stored in the CAS. */
	export interface BuildBazelRemoteExecutionV2LogFile {

		/** A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields. */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file. */
		humanReadable?: boolean | null;
	}

	/** A `LogFile` is a log stored in the CAS. */
	export interface BuildBazelRemoteExecutionV2LogFileFormProperties {

		/** This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file. */
		humanReadable: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2LogFileFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2LogFileFormProperties>({
			humanReadable: new FormControl<boolean | null | undefined>(undefined),
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


	/** An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization: * name: `build.bazel.remote.execution.v2.requestmetadata-bin` * contents: the base64 encoded binary `RequestMetadata` message. Note: the gRPC library serializes binary headers encoded in base64 by default (https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests). Therefore, if the gRPC library is used to pass/retrieve this metadata, the user may ignore the base64 encoding and assume it is simply serialized as a binary message. */
	export interface BuildBazelRemoteExecutionV2RequestMetadata {

		/** An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc. */
		actionId?: string | null;

		/** A brief description of the kind of action, for example, CppCompile or GoLink. There is no standard agreed set of values for this, and they are expected to vary between different client tools. */
		actionMnemonic?: string | null;

		/** An identifier for the configuration in which the target was built, e.g. for differentiating building host tools or different target platforms. There is no expectation that this value will have any particular structure, or equality across invocations, though some client tools may offer these guarantees. */
		configurationId?: string | null;

		/** An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch. */
		correlatedInvocationsId?: string | null;

		/** An identifier for the target which produced this action. No guarantees are made around how many actions may relate to a single target. */
		targetId?: string | null;

		/** Details for the tool used to call the API. */
		toolDetails?: BuildBazelRemoteExecutionV2ToolDetails;

		/** An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test. */
		toolInvocationId?: string | null;
	}

	/** An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization: * name: `build.bazel.remote.execution.v2.requestmetadata-bin` * contents: the base64 encoded binary `RequestMetadata` message. Note: the gRPC library serializes binary headers encoded in base64 by default (https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests). Therefore, if the gRPC library is used to pass/retrieve this metadata, the user may ignore the base64 encoding and assume it is simply serialized as a binary message. */
	export interface BuildBazelRemoteExecutionV2RequestMetadataFormProperties {

		/** An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc. */
		actionId: FormControl<string | null | undefined>,

		/** A brief description of the kind of action, for example, CppCompile or GoLink. There is no standard agreed set of values for this, and they are expected to vary between different client tools. */
		actionMnemonic: FormControl<string | null | undefined>,

		/** An identifier for the configuration in which the target was built, e.g. for differentiating building host tools or different target platforms. There is no expectation that this value will have any particular structure, or equality across invocations, though some client tools may offer these guarantees. */
		configurationId: FormControl<string | null | undefined>,

		/** An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch. */
		correlatedInvocationsId: FormControl<string | null | undefined>,

		/** An identifier for the target which produced this action. No guarantees are made around how many actions may relate to a single target. */
		targetId: FormControl<string | null | undefined>,

		/** An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test. */
		toolInvocationId: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2RequestMetadataFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2RequestMetadataFormProperties>({
			actionId: new FormControl<string | null | undefined>(undefined),
			actionMnemonic: new FormControl<string | null | undefined>(undefined),
			configurationId: new FormControl<string | null | undefined>(undefined),
			correlatedInvocationsId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			toolInvocationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for the tool used to call the API. */
	export interface BuildBazelRemoteExecutionV2ToolDetails {

		/** Name of the tool, e.g. bazel. */
		toolName?: string | null;

		/** Version of the tool used for the request, e.g. 5.0.3. */
		toolVersion?: string | null;
	}

	/** Details for the tool used to call the API. */
	export interface BuildBazelRemoteExecutionV2ToolDetailsFormProperties {

		/** Name of the tool, e.g. bazel. */
		toolName: FormControl<string | null | undefined>,

		/** Version of the tool used for the request, e.g. 5.0.3. */
		toolVersion: FormControl<string | null | undefined>,
	}
	export function CreateBuildBazelRemoteExecutionV2ToolDetailsFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2ToolDetailsFormProperties>({
			toolName: new FormControl<string | null | undefined>(undefined),
			toolVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message. */
	export interface BuildBazelRemoteExecutionV2Tree {

		/** All the child directories: the directories referred to by the root and, recursively, all its children. In order to reconstruct the directory tree, the client must take the digests of each of the child directories and then build up a tree starting from the `root`. Servers SHOULD ensure that these are ordered consistently such that two actions producing equivalent output directories on the same server implementation also produce Tree messages with matching digests. */
		children?: Array<BuildBazelRemoteExecutionV2Directory>;

		/** A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both "Foo" and "foo" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): ```json // (Directory proto) { files: [ { name: "bar", digest: { hash: "4a73bc9d03...", size: 65534 }, node_properties: [ { "name": "MTime", "value": "2017-01-15T01:30:15.01Z" } ] } ], directories: [ { name: "foo", digest: { hash: "4cf2eda940...", size: 43 } } ] } // (Directory proto with hash "4cf2eda940..." and size 43) { files: [ { name: "baz", digest: { hash: "b2c941073e...", size: 1294, }, is_executable: true } ] } ``` */
		root?: BuildBazelRemoteExecutionV2Directory;
	}

	/** A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message. */
	export interface BuildBazelRemoteExecutionV2TreeFormProperties {
	}
	export function CreateBuildBazelRemoteExecutionV2TreeFormGroup() {
		return new FormGroup<BuildBazelRemoteExecutionV2TreeFormProperties>({
		});

	}


	/** CommandDuration contains the various duration metrics tracked when a bot performs a command. */
	export interface GoogleDevtoolsRemotebuildbotCommandDurations {

		/** The time spent to release the CAS blobs used by the task. */
		casRelease?: string | null;

		/** The time spent waiting for Container Manager to assign an asynchronous container for execution. */
		cmWaitForAssignment?: string | null;

		/** The time spent preparing the command to be run in a Docker container (includes pulling the Docker image, if necessary). */
		dockerPrep?: string | null;

		/** The timestamp when docker preparation begins. */
		dockerPrepStartTime?: string | null;

		/** The time spent downloading the input files and constructing the working directory. */
		download?: string | null;

		/** The timestamp when downloading the input files begins. */
		downloadStartTime?: string | null;

		/** The timestamp when execution begins. */
		execStartTime?: string | null;

		/** The time spent executing the command (i.e., doing useful work). */
		execution?: string | null;

		/** The timestamp when preparation is done and bot starts downloading files. */
		isoPrepDone?: string | null;

		/** The time spent completing the command, in total. */
		overall?: string | null;

		/** The time spent uploading the stderr logs. */
		stderr?: string | null;

		/** The time spent uploading the stdout logs. */
		stdout?: string | null;

		/** The time spent uploading the output files. */
		upload?: string | null;

		/** The timestamp when uploading the output files begins. */
		uploadStartTime?: string | null;
	}

	/** CommandDuration contains the various duration metrics tracked when a bot performs a command. */
	export interface GoogleDevtoolsRemotebuildbotCommandDurationsFormProperties {

		/** The time spent to release the CAS blobs used by the task. */
		casRelease: FormControl<string | null | undefined>,

		/** The time spent waiting for Container Manager to assign an asynchronous container for execution. */
		cmWaitForAssignment: FormControl<string | null | undefined>,

		/** The time spent preparing the command to be run in a Docker container (includes pulling the Docker image, if necessary). */
		dockerPrep: FormControl<string | null | undefined>,

		/** The timestamp when docker preparation begins. */
		dockerPrepStartTime: FormControl<string | null | undefined>,

		/** The time spent downloading the input files and constructing the working directory. */
		download: FormControl<string | null | undefined>,

		/** The timestamp when downloading the input files begins. */
		downloadStartTime: FormControl<string | null | undefined>,

		/** The timestamp when execution begins. */
		execStartTime: FormControl<string | null | undefined>,

		/** The time spent executing the command (i.e., doing useful work). */
		execution: FormControl<string | null | undefined>,

		/** The timestamp when preparation is done and bot starts downloading files. */
		isoPrepDone: FormControl<string | null | undefined>,

		/** The time spent completing the command, in total. */
		overall: FormControl<string | null | undefined>,

		/** The time spent uploading the stderr logs. */
		stderr: FormControl<string | null | undefined>,

		/** The time spent uploading the stdout logs. */
		stdout: FormControl<string | null | undefined>,

		/** The time spent uploading the output files. */
		upload: FormControl<string | null | undefined>,

		/** The timestamp when uploading the output files begins. */
		uploadStartTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotCommandDurationsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotCommandDurationsFormProperties>({
			casRelease: new FormControl<string | null | undefined>(undefined),
			cmWaitForAssignment: new FormControl<string | null | undefined>(undefined),
			dockerPrep: new FormControl<string | null | undefined>(undefined),
			dockerPrepStartTime: new FormControl<string | null | undefined>(undefined),
			download: new FormControl<string | null | undefined>(undefined),
			downloadStartTime: new FormControl<string | null | undefined>(undefined),
			execStartTime: new FormControl<string | null | undefined>(undefined),
			execution: new FormControl<string | null | undefined>(undefined),
			isoPrepDone: new FormControl<string | null | undefined>(undefined),
			overall: new FormControl<string | null | undefined>(undefined),
			stderr: new FormControl<string | null | undefined>(undefined),
			stdout: new FormControl<string | null | undefined>(undefined),
			upload: new FormControl<string | null | undefined>(undefined),
			uploadStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CommandEvents contains counters for the number of warnings and errors that occurred during the execution of a command. */
	export interface GoogleDevtoolsRemotebuildbotCommandEvents {

		/** Indicates if and how Container Manager is being used for task execution. */
		cmUsage?: GoogleDevtoolsRemotebuildbotCommandEventsCmUsage | null;

		/** Indicates whether we are using a cached Docker image (true) or had to pull the Docker image (false) for this command. */
		dockerCacheHit?: boolean | null;

		/** Docker Image name. */
		dockerImageName?: string | null;

		/**
		 * The input cache miss rate as a fraction of the total size of input files.
		 * Type: float
		 */
		inputCacheMissBytes?: number | null;

		/**
		 * The input cache miss rate as a fraction of the number of input files.
		 * Type: float
		 */
		inputCacheMissFiles?: number | null;

		/** The number of errors reported. */
		numErrors?: string | null;

		/** The number of warnings reported. */
		numWarnings?: string | null;

		/** Indicates whether output files and/or output directories were found relative to the execution root or to the user provided work directory or both or none. */
		outputLocation?: GoogleDevtoolsRemotebuildbotCommandEventsOutputLocation | null;

		/** Indicates whether an asynchronous container was used for execution. */
		usedAsyncContainer?: boolean | null;
	}

	/** CommandEvents contains counters for the number of warnings and errors that occurred during the execution of a command. */
	export interface GoogleDevtoolsRemotebuildbotCommandEventsFormProperties {

		/** Indicates if and how Container Manager is being used for task execution. */
		cmUsage: FormControl<GoogleDevtoolsRemotebuildbotCommandEventsCmUsage | null | undefined>,

		/** Indicates whether we are using a cached Docker image (true) or had to pull the Docker image (false) for this command. */
		dockerCacheHit: FormControl<boolean | null | undefined>,

		/** Docker Image name. */
		dockerImageName: FormControl<string | null | undefined>,

		/**
		 * The input cache miss rate as a fraction of the total size of input files.
		 * Type: float
		 */
		inputCacheMissBytes: FormControl<number | null | undefined>,

		/**
		 * The input cache miss rate as a fraction of the number of input files.
		 * Type: float
		 */
		inputCacheMissFiles: FormControl<number | null | undefined>,

		/** The number of errors reported. */
		numErrors: FormControl<string | null | undefined>,

		/** The number of warnings reported. */
		numWarnings: FormControl<string | null | undefined>,

		/** Indicates whether output files and/or output directories were found relative to the execution root or to the user provided work directory or both or none. */
		outputLocation: FormControl<GoogleDevtoolsRemotebuildbotCommandEventsOutputLocation | null | undefined>,

		/** Indicates whether an asynchronous container was used for execution. */
		usedAsyncContainer: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotCommandEventsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotCommandEventsFormProperties>({
			cmUsage: new FormControl<GoogleDevtoolsRemotebuildbotCommandEventsCmUsage | null | undefined>(undefined),
			dockerCacheHit: new FormControl<boolean | null | undefined>(undefined),
			dockerImageName: new FormControl<string | null | undefined>(undefined),
			inputCacheMissBytes: new FormControl<number | null | undefined>(undefined),
			inputCacheMissFiles: new FormControl<number | null | undefined>(undefined),
			numErrors: new FormControl<string | null | undefined>(undefined),
			numWarnings: new FormControl<string | null | undefined>(undefined),
			outputLocation: new FormControl<GoogleDevtoolsRemotebuildbotCommandEventsOutputLocation | null | undefined>(undefined),
			usedAsyncContainer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildbotCommandEventsCmUsage { CONFIG_NONE = 'CONFIG_NONE', CONFIG_MATCH = 'CONFIG_MATCH', CONFIG_MISMATCH = 'CONFIG_MISMATCH' }

	export enum GoogleDevtoolsRemotebuildbotCommandEventsOutputLocation { LOCATION_UNDEFINED = 'LOCATION_UNDEFINED', LOCATION_NONE = 'LOCATION_NONE', LOCATION_EXEC_ROOT_RELATIVE = 'LOCATION_EXEC_ROOT_RELATIVE', LOCATION_WORKING_DIR_RELATIVE = 'LOCATION_WORKING_DIR_RELATIVE', LOCATION_EXEC_ROOT_AND_WORKING_DIR_RELATIVE = 'LOCATION_EXEC_ROOT_AND_WORKING_DIR_RELATIVE', LOCATION_EXEC_ROOT_RELATIVE_OUTPUT_OUTSIDE_WORKING_DIR = 'LOCATION_EXEC_ROOT_RELATIVE_OUTPUT_OUTSIDE_WORKING_DIR', LOCATION_EXEC_ROOT_AND_WORKING_DIR_RELATIVE_OUTPUT_OUTSIDE_WORKING_DIR = 'LOCATION_EXEC_ROOT_AND_WORKING_DIR_RELATIVE_OUTPUT_OUTSIDE_WORKING_DIR' }


	/** The internal status of the command result. */
	export interface GoogleDevtoolsRemotebuildbotCommandStatus {

		/** The status code. */
		code?: GoogleDevtoolsRemotebuildbotCommandStatusCode | null;

		/** The error message. */
		message?: string | null;
	}

	/** The internal status of the command result. */
	export interface GoogleDevtoolsRemotebuildbotCommandStatusFormProperties {

		/** The status code. */
		code: FormControl<GoogleDevtoolsRemotebuildbotCommandStatusCode | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotCommandStatusFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotCommandStatusFormProperties>({
			code: new FormControl<GoogleDevtoolsRemotebuildbotCommandStatusCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildbotCommandStatusCode { OK = 'OK', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', PERMISSION_DENIED = 'PERMISSION_DENIED', INTERNAL = 'INTERNAL', ABORTED = 'ABORTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', CLEANUP_ERROR = 'CLEANUP_ERROR', DOWNLOAD_INPUTS_ERROR = 'DOWNLOAD_INPUTS_ERROR', UNKNOWN = 'UNKNOWN', UPLOAD_OUTPUTS_ERROR = 'UPLOAD_OUTPUTS_ERROR', UPLOAD_OUTPUTS_BYTES_LIMIT_EXCEEDED = 'UPLOAD_OUTPUTS_BYTES_LIMIT_EXCEEDED', DOCKER_LOGIN_ERROR = 'DOCKER_LOGIN_ERROR', DOCKER_IMAGE_PULL_ERROR = 'DOCKER_IMAGE_PULL_ERROR', DOCKER_IMAGE_EXIST_ERROR = 'DOCKER_IMAGE_EXIST_ERROR', DUPLICATE_INPUTS = 'DUPLICATE_INPUTS', DOCKER_IMAGE_PERMISSION_DENIED = 'DOCKER_IMAGE_PERMISSION_DENIED', DOCKER_IMAGE_NOT_FOUND = 'DOCKER_IMAGE_NOT_FOUND', WORKING_DIR_NOT_FOUND = 'WORKING_DIR_NOT_FOUND', WORKING_DIR_NOT_IN_BASE_DIR = 'WORKING_DIR_NOT_IN_BASE_DIR', DOCKER_UNAVAILABLE = 'DOCKER_UNAVAILABLE', NO_CUDA_CAPABLE_DEVICE = 'NO_CUDA_CAPABLE_DEVICE', REMOTE_CAS_DOWNLOAD_ERROR = 'REMOTE_CAS_DOWNLOAD_ERROR', REMOTE_CAS_UPLOAD_ERROR = 'REMOTE_CAS_UPLOAD_ERROR', LOCAL_CASPROXY_NOT_RUNNING = 'LOCAL_CASPROXY_NOT_RUNNING', DOCKER_CREATE_CONTAINER_ERROR = 'DOCKER_CREATE_CONTAINER_ERROR', DOCKER_INVALID_ULIMIT = 'DOCKER_INVALID_ULIMIT', DOCKER_UNKNOWN_RUNTIME = 'DOCKER_UNKNOWN_RUNTIME', DOCKER_UNKNOWN_CAPABILITY = 'DOCKER_UNKNOWN_CAPABILITY', DOCKER_UNKNOWN_ERROR = 'DOCKER_UNKNOWN_ERROR', DOCKER_CREATE_COMPUTE_SYSTEM_ERROR = 'DOCKER_CREATE_COMPUTE_SYSTEM_ERROR', DOCKER_PREPARELAYER_ERROR = 'DOCKER_PREPARELAYER_ERROR', DOCKER_INCOMPATIBLE_OS_ERROR = 'DOCKER_INCOMPATIBLE_OS_ERROR', DOCKER_CREATE_RUNTIME_FILE_NOT_FOUND = 'DOCKER_CREATE_RUNTIME_FILE_NOT_FOUND', DOCKER_CREATE_RUNTIME_PERMISSION_DENIED = 'DOCKER_CREATE_RUNTIME_PERMISSION_DENIED', DOCKER_CREATE_PROCESS_FILE_NOT_FOUND = 'DOCKER_CREATE_PROCESS_FILE_NOT_FOUND', DOCKER_CREATE_COMPUTE_SYSTEM_INCORRECT_PARAMETER_ERROR = 'DOCKER_CREATE_COMPUTE_SYSTEM_INCORRECT_PARAMETER_ERROR', DOCKER_TOO_MANY_SYMBOLIC_LINK_LEVELS = 'DOCKER_TOO_MANY_SYMBOLIC_LINK_LEVELS', LOCAL_CONTAINER_MANAGER_NOT_RUNNING = 'LOCAL_CONTAINER_MANAGER_NOT_RUNNING', DOCKER_IMAGE_VPCSC_PERMISSION_DENIED = 'DOCKER_IMAGE_VPCSC_PERMISSION_DENIED', WORKING_DIR_NOT_RELATIVE = 'WORKING_DIR_NOT_RELATIVE', DOCKER_MISSING_CONTAINER = 'DOCKER_MISSING_CONTAINER', DOCKER_MISSING_BLOB_IN_IMAGE = 'DOCKER_MISSING_BLOB_IN_IMAGE', DOCKER_INVALID_VOLUME = 'DOCKER_INVALID_VOLUME', DOCKER_CREATE_RUNTIME_CANNOT_MOUNT_TO_PROC = 'DOCKER_CREATE_RUNTIME_CANNOT_MOUNT_TO_PROC', DOCKER_START_RUNTIME_FILE_NOT_FOUND = 'DOCKER_START_RUNTIME_FILE_NOT_FOUND', DOCKER_CREATE_INVALID_LAYERCHAIN_JSON = 'DOCKER_CREATE_INVALID_LAYERCHAIN_JSON', INCOMPATIBLE_CUDA_VERSION = 'INCOMPATIBLE_CUDA_VERSION', LOCAL_WORKER_MANAGER_NOT_RUNNING = 'LOCAL_WORKER_MANAGER_NOT_RUNNING', DOCKER_START_RUNTIME_FILE_FORMAT_ERROR = 'DOCKER_START_RUNTIME_FILE_FORMAT_ERROR' }


	/** ResourceUsage is the system resource usage of the host machine. */
	export interface GoogleDevtoolsRemotebuildbotResourceUsage {
		botState?: GoogleDevtoolsRemotebuildbotResourceUsageBotState | null;

		/** Type: double */
		cpuUsedPercent?: number | null;
		diskUsage?: GoogleDevtoolsRemotebuildbotResourceUsageStat;
		memoryUsage?: GoogleDevtoolsRemotebuildbotResourceUsageStat;
		totalDiskIoStats?: GoogleDevtoolsRemotebuildbotResourceUsageIOStats;
	}

	/** ResourceUsage is the system resource usage of the host machine. */
	export interface GoogleDevtoolsRemotebuildbotResourceUsageFormProperties {
		botState: FormControl<GoogleDevtoolsRemotebuildbotResourceUsageBotState | null | undefined>,

		/** Type: double */
		cpuUsedPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotResourceUsageFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotResourceUsageFormProperties>({
			botState: new FormControl<GoogleDevtoolsRemotebuildbotResourceUsageBotState | null | undefined>(undefined),
			cpuUsedPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildbotResourceUsageBotState { UNSPECIFIED = 'UNSPECIFIED', IDLE = 'IDLE', BUSY = 'BUSY' }

	export interface GoogleDevtoolsRemotebuildbotResourceUsageStat {
		total?: string | null;
		used?: string | null;
	}
	export interface GoogleDevtoolsRemotebuildbotResourceUsageStatFormProperties {
		total: FormControl<string | null | undefined>,
		used: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotResourceUsageStatFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotResourceUsageStatFormProperties>({
			total: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleDevtoolsRemotebuildbotResourceUsageIOStats {
		readBytesCount?: string | null;
		readCount?: string | null;
		readTimeMs?: string | null;
		writeBytesCount?: string | null;
		writeCount?: string | null;
		writeTimeMs?: string | null;
	}
	export interface GoogleDevtoolsRemotebuildbotResourceUsageIOStatsFormProperties {
		readBytesCount: FormControl<string | null | undefined>,
		readCount: FormControl<string | null | undefined>,
		readTimeMs: FormControl<string | null | undefined>,
		writeBytesCount: FormControl<string | null | undefined>,
		writeCount: FormControl<string | null | undefined>,
		writeTimeMs: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildbotResourceUsageIOStatsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildbotResourceUsageIOStatsFormProperties>({
			readBytesCount: new FormControl<string | null | undefined>(undefined),
			readCount: new FormControl<string | null | undefined>(undefined),
			readTimeMs: new FormControl<string | null | undefined>(undefined),
			writeBytesCount: new FormControl<string | null | undefined>(undefined),
			writeCount: new FormControl<string | null | undefined>(undefined),
			writeTimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AcceleratorConfig defines the accelerator cards to attach to the VM. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig {

		/** The number of guest accelerator cards exposed to each VM. */
		acceleratorCount?: string | null;

		/** The type of accelerator to attach to each VM, e.g. "nvidia-tesla-k80" for nVidia Tesla K80. */
		acceleratorType?: string | null;
	}

	/** AcceleratorConfig defines the accelerator cards to attach to the VM. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfigFormProperties {

		/** The number of guest accelerator cards exposed to each VM. */
		acceleratorCount: FormControl<string | null | undefined>,

		/** The type of accelerator to attach to each VM, e.g. "nvidia-tesla-k80" for nVidia Tesla K80. */
		acceleratorType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfigFormProperties>({
			acceleratorCount: new FormControl<string | null | undefined>(undefined),
			acceleratorType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Autoscale defines the autoscaling policy of a worker pool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale {

		/** Optional. The maximal number of workers. Must be equal to or greater than min_size. */
		maxSize?: string | null;

		/** Optional. The minimum number of idle workers the autoscaler will aim to have in the pool at all times that are immediately available to accept a surge in build traffic. The pool size will still be constrained by min_size and max_size. */
		minIdleWorkers?: string | null;

		/** Optional. The minimal number of workers. Must be greater than 0. */
		minSize?: string | null;
	}

	/** Autoscale defines the autoscaling policy of a worker pool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscaleFormProperties {

		/** Optional. The maximal number of workers. Must be equal to or greater than min_size. */
		maxSize: FormControl<string | null | undefined>,

		/** Optional. The minimum number of idle workers the autoscaler will aim to have in the pool at all times that are immediately available to accept a surge in build traffic. The pool size will still be constrained by min_size and max_size. */
		minIdleWorkers: FormControl<string | null | undefined>,

		/** Optional. The minimal number of workers. Must be greater than 0. */
		minSize: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscaleFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscaleFormProperties>({
			maxSize: new FormControl<string | null | undefined>(undefined),
			minIdleWorkers: new FormControl<string | null | undefined>(undefined),
			minSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for `CreateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest {

		/** Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance. */
		instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

		/** Required. ID of the created instance. A valid `instance_id` must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. */
		instanceId?: string | null;

		/** Required. Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`. */
		parent?: string | null;
	}

	/** The request used for `CreateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestFormProperties {

		/** Required. ID of the created instance. A valid `instance_id` must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. */
		instanceId: FormControl<string | null | undefined>,

		/** Required. Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance {

		/** FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time. */
		featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;

		/** The location is a GCP region. Currently only `us-central1` is supported. */
		location?: string | null;

		/** Output only. Whether stack driver logging is enabled for the instance. */
		loggingEnabled?: boolean | null;

		/** Output only. Instance resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. Name should not be populated when creating an instance since it is provided in the `instance_id` field. */
		name?: string | null;

		/** Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance. */
		schedulerNotificationConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;

		/** Output only. State of the instance. */
		state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState | null;
	}

	/** Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceFormProperties {

		/** The location is a GCP region. Currently only `us-central1` is supported. */
		location: FormControl<string | null | undefined>,

		/** Output only. Whether stack driver logging is enabled for the instance. */
		loggingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Instance resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. Name should not be populated when creating an instance since it is provided in the `instance_id` field. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the instance. */
		state: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			loggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState | null | undefined>(undefined),
		});

	}


	/** FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy {

		/** Defines the hermeticity policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. */
		actionHermeticity?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticity | null;

		/** Defines the isolation policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. */
		actionIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolation | null;

		/** Defines whether a feature can be used or what values are accepted. */
		containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines whether a feature can be used or what values are accepted. */
		dockerUlimits?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

		/** Defines how Linux actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		linuxExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecution | null;

		/** linux_isolation allows overriding the docker runtime used for containers started on Linux. */
		linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolation | null;

		/** Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		macExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecution | null;

		/** Whether to verify CreateBotSession and UpdateBotSession from the bot. */
		vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerification | null;

		/** Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		windowsExecution?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecution | null;
	}

	/** FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFormProperties {

		/** Defines the hermeticity policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. */
		actionHermeticity: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticity | null | undefined>,

		/** Defines the isolation policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. */
		actionIsolation: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolation | null | undefined>,

		/** Defines how Linux actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		linuxExecution: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecution | null | undefined>,

		/** linux_isolation allows overriding the docker runtime used for containers started on Linux. */
		linuxIsolation: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolation | null | undefined>,

		/** Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		macExecution: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecution | null | undefined>,

		/** Whether to verify CreateBotSession and UpdateBotSession from the bot. */
		vmVerification: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerification | null | undefined>,

		/** Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. */
		windowsExecution: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecution | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFormProperties>({
			actionHermeticity: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticity | null | undefined>(undefined),
			actionIsolation: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolation | null | undefined>(undefined),
			linuxExecution: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecution | null | undefined>(undefined),
			linuxIsolation: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolation | null | undefined>(undefined),
			macExecution: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecution | null | undefined>(undefined),
			vmVerification: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerification | null | undefined>(undefined),
			windowsExecution: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecution | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticity { ACTION_HERMETICITY_UNSPECIFIED = 'ACTION_HERMETICITY_UNSPECIFIED', ACTION_HERMETICITY_OFF = 'ACTION_HERMETICITY_OFF', ACTION_HERMETICITY_ENFORCED = 'ACTION_HERMETICITY_ENFORCED', ACTION_HERMETICITY_BEST_EFFORT = 'ACTION_HERMETICITY_BEST_EFFORT' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolation { ACTION_ISOLATION_UNSPECIFIED = 'ACTION_ISOLATION_UNSPECIFIED', ACTION_ISOLATION_OFF = 'ACTION_ISOLATION_OFF', ACTION_ISOLATION_ENFORCED = 'ACTION_ISOLATION_ENFORCED' }


	/** Defines whether a feature can be used or what values are accepted. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature {

		/** A list of acceptable values. Only effective when the policy is `RESTRICTED`. */
		allowedValues?: Array<string>;

		/** The policy of the feature. */
		policy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicy | null;
	}

	/** Defines whether a feature can be used or what values are accepted. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeatureFormProperties {

		/** The policy of the feature. */
		policy: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicy | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeatureFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeatureFormProperties>({
			policy: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicy | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicy { POLICY_UNSPECIFIED = 'POLICY_UNSPECIFIED', ALLOWED = 'ALLOWED', FORBIDDEN = 'FORBIDDEN', RESTRICTED = 'RESTRICTED' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecution { LINUX_EXECUTION_UNSPECIFIED = 'LINUX_EXECUTION_UNSPECIFIED', LINUX_EXECUTION_FORBIDDEN = 'LINUX_EXECUTION_FORBIDDEN', LINUX_EXECUTION_UNRESTRICTED = 'LINUX_EXECUTION_UNRESTRICTED', LINUX_EXECUTION_HARDENED_GVISOR = 'LINUX_EXECUTION_HARDENED_GVISOR', LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL = 'LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolation { LINUX_ISOLATION_UNSPECIFIED = 'LINUX_ISOLATION_UNSPECIFIED', GVISOR = 'GVISOR', OFF = 'OFF' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecution { MAC_EXECUTION_UNSPECIFIED = 'MAC_EXECUTION_UNSPECIFIED', MAC_EXECUTION_FORBIDDEN = 'MAC_EXECUTION_FORBIDDEN' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerification { VM_VERIFICATION_UNSPECIFIED = 'VM_VERIFICATION_UNSPECIFIED', VM_VERIFICATION_GCP_TOKEN = 'VM_VERIFICATION_GCP_TOKEN', VM_VERIFICATION_OFF = 'VM_VERIFICATION_OFF' }

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecution { WINDOWS_EXECUTION_UNSPECIFIED = 'WINDOWS_EXECUTION_UNSPECIFIED', WINDOWS_EXECUTION_FORBIDDEN = 'WINDOWS_EXECUTION_FORBIDDEN', WINDOWS_EXECUTION_UNRESTRICTED = 'WINDOWS_EXECUTION_UNRESTRICTED', WINDOWS_EXECUTION_TERMINAL = 'WINDOWS_EXECUTION_TERMINAL' }


	/** Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig {

		/** The Pub/Sub topic resource name to issue notifications to. Note that the topic does not need to be owned by the same project as this instance. Format: `projects//topics/`. */
		topic?: string | null;
	}

	/** Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfigFormProperties {

		/** The Pub/Sub topic resource name to issue notifications to. Note that the topic does not need to be owned by the same project as this instance. Format: `projects//topics/`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfigFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', RUNNING = 'RUNNING', INACTIVE = 'INACTIVE' }


	/** The request used for `CreateWorkerPool`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest {

		/** Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		parent?: string | null;

		/** ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. */
		poolId?: string | null;

		/** A worker pool resource in the Remote Build Execution API. */
		workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
	}

	/** The request used for `CreateWorkerPool`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequestFormProperties {

		/** Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		parent: FormControl<string | null | undefined>,

		/** ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit. */
		poolId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			poolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A worker pool resource in the Remote Build Execution API. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool {

		/** Autoscale defines the autoscaling policy of a worker pool. */
		autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;

		/** Channel specifies the release channel of the pool. */
		channel?: string | null;

		/** HostOS specifies the OS version of the image for the worker VMs. */
		hostOs?: string | null;

		/** WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field. */
		name?: string | null;

		/** Output only. State of the worker pool. */
		state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState | null;

		/** Defines the configuration to be used for creating workers in the worker pool. */
		workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;

		/** The desired number of workers in the worker pool. Must be a value between 0 and 15000. */
		workerCount?: string | null;
	}

	/** A worker pool resource in the Remote Build Execution API. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolFormProperties {

		/** Channel specifies the release channel of the pool. */
		channel: FormControl<string | null | undefined>,

		/** HostOS specifies the OS version of the image for the worker VMs. */
		hostOs: FormControl<string | null | undefined>,

		/** WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the worker pool. */
		state: FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState | null | undefined>,

		/** The desired number of workers in the worker pool. Must be a value between 0 and 15000. */
		workerCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			hostOs: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState | null | undefined>(undefined),
			workerCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', RUNNING = 'RUNNING', UPDATING = 'UPDATING', DELETING = 'DELETING', INACTIVE = 'INACTIVE' }


	/** Defines the configuration to be used for creating workers in the worker pool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig {

		/** AcceleratorConfig defines the accelerator cards to attach to the VM. */
		accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;

		/** Disks defines the disks that would be attached to the workers. */
		attachedDisks?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks;

		/** Required. Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ */
		diskSizeGb?: string | null;

		/** Required. Disk Type to use for the worker. See [Storage options](https://cloud.google.com/compute/docs/disks/#introduction). Currently only `pd-standard` and `pd-ssd` are supported. */
		diskType?: string | null;

		/** Labels associated with the workers. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International letters are permitted. Label keys must start with a letter. Label values are optional. There can not be more than 64 labels per resource. */
		labels?: {[id: string]: string };

		/** Required. Machine type of the worker, such as `e2-standard-2`. See https://cloud.google.com/compute/docs/machine-types for a list of supported machine types. Note that `f1-micro` and `g1-small` are not yet supported. */
		machineType?: string | null;

		/** The maximum number of actions a worker can execute concurrently. */
		maxConcurrentActions?: string | null;

		/** Minimum CPU platform to use when creating the worker. See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms). */
		minCpuPlatform?: string | null;

		/** Determines the type of network access granted to workers. Possible values: - "public": Workers can connect to the public internet. - "private": Workers can only connect to Google APIs and services. - "restricted-private": Workers can only connect to Google APIs that are reachable through `restricted.googleapis.com` (`199.36.153.4/30`). */
		networkAccess?: string | null;

		/** Determines whether the worker is reserved (equivalent to a Compute Engine on-demand VM and therefore won't be preempted). See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more details. */
		reserved?: boolean | null;

		/** The node type name to be used for sole-tenant nodes. */
		soleTenantNodeType?: string | null;

		/** The name of the image used by each VM. */
		vmImage?: string | null;

		/** Optional. Zones in the region where the pool VMs should be. Leave empty for no restrictions. */
		zones?: Array<string>;
	}

	/** Defines the configuration to be used for creating workers in the worker pool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfigFormProperties {

		/** Required. Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Required. Disk Type to use for the worker. See [Storage options](https://cloud.google.com/compute/docs/disks/#introduction). Currently only `pd-standard` and `pd-ssd` are supported. */
		diskType: FormControl<string | null | undefined>,

		/** Labels associated with the workers. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International letters are permitted. Label keys must start with a letter. Label values are optional. There can not be more than 64 labels per resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Machine type of the worker, such as `e2-standard-2`. See https://cloud.google.com/compute/docs/machine-types for a list of supported machine types. Note that `f1-micro` and `g1-small` are not yet supported. */
		machineType: FormControl<string | null | undefined>,

		/** The maximum number of actions a worker can execute concurrently. */
		maxConcurrentActions: FormControl<string | null | undefined>,

		/** Minimum CPU platform to use when creating the worker. See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms). */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** Determines the type of network access granted to workers. Possible values: - "public": Workers can connect to the public internet. - "private": Workers can only connect to Google APIs and services. - "restricted-private": Workers can only connect to Google APIs that are reachable through `restricted.googleapis.com` (`199.36.153.4/30`). */
		networkAccess: FormControl<string | null | undefined>,

		/** Determines whether the worker is reserved (equivalent to a Compute Engine on-demand VM and therefore won't be preempted). See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more details. */
		reserved: FormControl<boolean | null | undefined>,

		/** The node type name to be used for sole-tenant nodes. */
		soleTenantNodeType: FormControl<string | null | undefined>,

		/** The name of the image used by each VM. */
		vmImage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfigFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxConcurrentActions: new FormControl<string | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			networkAccess: new FormControl<string | null | undefined>(undefined),
			reserved: new FormControl<boolean | null | undefined>(undefined),
			soleTenantNodeType: new FormControl<string | null | undefined>(undefined),
			vmImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disks defines the disks that would be attached to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks {

		/** PersistentDisk specifies how to attach a persistent disk to the workers. */
		dockerRootDisk?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk;

		/** LocalSSD specifies how to attach local SSD to the workers. */
		localSsd?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD;
	}

	/** Disks defines the disks that would be attached to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksFormProperties {
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksFormProperties>({
		});

	}


	/** PersistentDisk specifies how to attach a persistent disk to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk {

		/** Required. Size of the disk in GB. */
		diskSizeGb?: string | null;

		/** Required. Type of disk attached (supported types are pd-standard and pd-ssd). */
		diskType?: string | null;

		/** Required. VM image to use for the disk. */
		sourceImage?: string | null;
	}

	/** PersistentDisk specifies how to attach a persistent disk to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDiskFormProperties {

		/** Required. Size of the disk in GB. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Required. Type of disk attached (supported types are pd-standard and pd-ssd). */
		diskType: FormControl<string | null | undefined>,

		/** Required. VM image to use for the disk. */
		sourceImage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDiskFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDiskFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			sourceImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LocalSSD specifies how to attach local SSD to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD {

		/** Optional. The number of Local SSDs to be attached. */
		count?: string | null;

		/** Output only. The size of the local SSD in gb. Intended for informational purposes only. */
		sizeGb?: string | null;
	}

	/** LocalSSD specifies how to attach local SSD to the workers. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSDFormProperties {

		/** Optional. The number of Local SSDs to be attached. */
		count: FormControl<string | null | undefined>,

		/** Output only. The size of the local SSD in gb. Intended for informational purposes only. */
		sizeGb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSDFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSDFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for `DeleteInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest {

		/** Required. Name of the instance to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name?: string | null;
	}

	/** The request used for `DeleteInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequestFormProperties {

		/** Required. Name of the instance to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for DeleteWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest {

		/** Name of the worker pool to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. */
		name?: string | null;
	}

	/** The request used for DeleteWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequestFormProperties {

		/** Name of the worker pool to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for `GetInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest {

		/** Required. Name of the instance to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name?: string | null;
	}

	/** The request used for `GetInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequestFormProperties {

		/** Required. Name of the instance to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for GetWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequest {

		/** Name of the worker pool to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. */
		name?: string | null;
	}

	/** The request used for GetWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequestFormProperties {

		/** Name of the worker pool to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for `ListInstances`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest {

		/** Required. Resource name of the project. Format: `projects/[PROJECT_ID]`. */
		parent?: string | null;
	}

	/** The request used for `ListInstances`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequestFormProperties {

		/** Required. Resource name of the project. Format: `projects/[PROJECT_ID]`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response used for `ListInstances`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse {

		/** The list of instances in a given project. */
		instances?: Array<GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance>;

		/** Unreachable regions. */
		unreachable?: Array<string>;
	}

	/** The response used for `ListInstances`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponseFormProperties {
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponseFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponseFormProperties>({
		});

	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest {

		/** Optional. A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. String values are case-insensitive. The comparison operator must be either `:`, `=`, `!=`, `>`, `>=`, `<=` or `<`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. You can also filter on nested fields. To filter on multiple expressions, you can separate expression using `AND` and `OR` operators, using parentheses to specify precedence. If neither operator is specified, `AND` is assumed. Examples: Include only pools with more than 100 reserved workers: `(worker_count > 100) (worker_config.reserved = true)` Include only pools with a certain label or machines of the e2-standard family: `worker_config.labels.key1 : * OR worker_config.machine_type: e2-standard` */
		filter?: string | null;

		/** Resource name of the instance. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		parent?: string | null;
	}
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequestFormProperties {

		/** Optional. A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. String values are case-insensitive. The comparison operator must be either `:`, `=`, `!=`, `>`, `>=`, `<=` or `<`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. You can also filter on nested fields. To filter on multiple expressions, you can separate expression using `AND` and `OR` operators, using parentheses to specify precedence. If neither operator is specified, `AND` is assumed. Examples: Include only pools with more than 100 reserved workers: `(worker_count > 100) (worker_config.reserved = true)` Include only pools with a certain label or machines of the e2-standard family: `worker_config.labels.key1 : * OR worker_config.machine_type: e2-standard` */
		filter: FormControl<string | null | undefined>,

		/** Resource name of the instance. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse {

		/** The list of worker pools in a given instance. */
		workerPools?: Array<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool>;
	}
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponseFormProperties {
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponseFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponseFormProperties>({
		});

	}


	/** The request used for `TestNotifyInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequest {
	}

	/** The request used for `TestNotifyInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequestFormProperties {
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequestFormProperties>({
		});

	}


	/** The request used for `UpdateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest {

		/** Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance. */
		instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

		/** Deprecated, use instance.logging_enabled instead. Whether to enable Stackdriver logging for this instance. */
		loggingEnabled?: boolean | null;

		/** Deprecated, use instance.Name instead. Name of the instance to update. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name?: string | null;

		/** The update mask applies to instance. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. */
		updateMask?: string | null;
	}

	/** The request used for `UpdateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequestFormProperties {

		/** Deprecated, use instance.logging_enabled instead. Whether to enable Stackdriver logging for this instance. */
		loggingEnabled: FormControl<boolean | null | undefined>,

		/** Deprecated, use instance.Name instead. Name of the instance to update. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. */
		name: FormControl<string | null | undefined>,

		/** The update mask applies to instance. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequestFormProperties>({
			loggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request used for UpdateWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest {

		/** The update mask applies to worker_pool. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. */
		updateMask?: string | null;

		/** A worker pool resource in the Remote Build Execution API. */
		workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
	}

	/** The request used for UpdateWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequestFormProperties {

		/** The update mask applies to worker_pool. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AdminTemp is a prelimiary set of administration tasks. It's called "Temp" because we do not yet know the best way to represent admin tasks; it's possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API. This message (suitably marshalled into a protobuf.Any) can be used as the inline_assignment field in a lease; the lease assignment field should simply be `"admin"` in these cases. This message is heavily based on Swarming administration tasks from the LUCI project (http://github.com/luci/luci-py/appengine/swarming). */
	export interface GoogleDevtoolsRemoteworkersV1test2AdminTemp {

		/** The argument to the admin action; see `Command` for semantics. */
		arg?: string | null;

		/** The admin action; see `Command` for legal values. */
		command?: GoogleDevtoolsRemoteworkersV1test2AdminTempCommand | null;
	}

	/** AdminTemp is a prelimiary set of administration tasks. It's called "Temp" because we do not yet know the best way to represent admin tasks; it's possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API. This message (suitably marshalled into a protobuf.Any) can be used as the inline_assignment field in a lease; the lease assignment field should simply be `"admin"` in these cases. This message is heavily based on Swarming administration tasks from the LUCI project (http://github.com/luci/luci-py/appengine/swarming). */
	export interface GoogleDevtoolsRemoteworkersV1test2AdminTempFormProperties {

		/** The argument to the admin action; see `Command` for semantics. */
		arg: FormControl<string | null | undefined>,

		/** The admin action; see `Command` for legal values. */
		command: FormControl<GoogleDevtoolsRemoteworkersV1test2AdminTempCommand | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2AdminTempFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2AdminTempFormProperties>({
			arg: new FormControl<string | null | undefined>(undefined),
			command: new FormControl<GoogleDevtoolsRemoteworkersV1test2AdminTempCommand | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsRemoteworkersV1test2AdminTempCommand { UNSPECIFIED = 'UNSPECIFIED', BOT_UPDATE = 'BOT_UPDATE', BOT_RESTART = 'BOT_RESTART', BOT_TERMINATE = 'BOT_TERMINATE', HOST_RESTART = 'HOST_RESTART' }


	/** Describes a blob of binary content with its digest. */
	export interface GoogleDevtoolsRemoteworkersV1test2Blob {

		/** The contents of the blob. */
		contents?: string | null;

		/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;
	}

	/** Describes a blob of binary content with its digest. */
	export interface GoogleDevtoolsRemoteworkersV1test2BlobFormProperties {

		/** The contents of the blob. */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2BlobFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2BlobFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
	export interface GoogleDevtoolsRemoteworkersV1test2Digest {

		/** A string-encoded hash (eg "1a2b3c", not the byte array [0x1a, 0x2b, 0x3c]) using an implementation-defined hash algorithm (eg SHA-256). */
		hash?: string | null;

		/** The size of the contents. While this is not strictly required as part of an identifier (after all, any given hash will have exactly one canonical size), it's useful in almost all cases when one might want to send or retrieve blobs of content and is included here for this reason. */
		sizeBytes?: string | null;
	}

	/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
	export interface GoogleDevtoolsRemoteworkersV1test2DigestFormProperties {

		/** A string-encoded hash (eg "1a2b3c", not the byte array [0x1a, 0x2b, 0x3c]) using an implementation-defined hash algorithm (eg SHA-256). */
		hash: FormControl<string | null | undefined>,

		/** The size of the contents. While this is not strictly required as part of an identifier (after all, any given hash will have exactly one canonical size), it's useful in almost all cases when one might want to send or retrieve blobs of content and is included here for this reason. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2DigestFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2DigestFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DEPRECATED - use CommandResult instead. Describes the actual outputs from the task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOutputs {

		/**
		 * exit_code is only fully reliable if the status' code is OK. If the task exceeded its deadline or was cancelled, the process may still produce an exit code as it is cancelled, and this will be populated, but a successful (zero) is unlikely to be correct unless the status code is OK.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;

		/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
		outputs?: GoogleDevtoolsRemoteworkersV1test2Digest;
	}

	/** DEPRECATED - use CommandResult instead. Describes the actual outputs from the task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOutputsFormProperties {

		/**
		 * exit_code is only fully reliable if the status' code is OK. If the task exceeded its deadline or was cancelled, the process may still produce an exit code as it is cancelled, and this will be populated, but a successful (zero) is unlikely to be correct unless the status code is OK.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandOutputsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandOutputsFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOverhead {

		/** The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. */
		duration?: string | null;

		/** The amount of time *not* spent executing the command (ie uploading/downloading files). */
		overhead?: string | null;
	}

	/** DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOverheadFormProperties {

		/** The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. */
		duration: FormControl<string | null | undefined>,

		/** The amount of time *not* spent executing the command (ie uploading/downloading files). */
		overhead: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandOverheadFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandOverheadFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			overhead: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All information about the execution of a command, suitable for providing as the Bots interface's `Lease.result` field. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandResult {

		/** The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. */
		duration?: string | null;

		/**
		 * The exit code of the process. An exit code of "0" should only be trusted if `status` has a code of OK (otherwise it may simply be unset).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;

		/** Implementation-dependent metadata about the task. Both servers and bots may define messages which can be encoded here; bots are free to provide metadata in multiple formats, and servers are free to choose one or more of the values to process and ignore others. In particular, it is *not* considered an error for the bot to provide the server with a field that it doesn't know about. */
		metadata?: Array<string>;

		/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
		outputs?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/** The amount of time *not* spent executing the command (ie uploading/downloading files). */
		overhead?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** All information about the execution of a command, suitable for providing as the Bots interface's `Lease.result` field. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandResultFormProperties {

		/** The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. */
		duration: FormControl<string | null | undefined>,

		/**
		 * The exit code of the process. An exit code of "0" should only be trusted if `status` has a code of OK (otherwise it may simply be unset).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** The amount of time *not* spent executing the command (ie uploading/downloading files). */
		overhead: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandResultFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandResultFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			overhead: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a shell-style task to execute, suitable for providing as the Bots interface's `Lease.payload` field. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTask {

		/** Describes the expected outputs of the command. */
		expectedOutputs?: GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs;

		/** Describes the inputs to a shell-style task. */
		inputs?: GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs;

		/** Describes the timeouts associated with this task. */
		timeouts?: GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts;
	}

	/** Describes a shell-style task to execute, suitable for providing as the Bots interface's `Lease.payload` field. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskFormProperties {
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandTaskFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandTaskFormProperties>({
		});

	}


	/** Describes the expected outputs of the command. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs {

		/** A list of expected directories, relative to the execution root. All paths MUST be delimited by forward slashes. */
		directories?: Array<string>;

		/** A list of expected files, relative to the execution root. All paths MUST be delimited by forward slashes. */
		files?: Array<string>;

		/** The destination to which any stderr should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API. */
		stderrDestination?: string | null;

		/** The destination to which any stdout should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API. */
		stdoutDestination?: string | null;
	}

	/** Describes the expected outputs of the command. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputsFormProperties {

		/** The destination to which any stderr should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API. */
		stderrDestination: FormControl<string | null | undefined>,

		/** The destination to which any stdout should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API. */
		stdoutDestination: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandTaskOutputsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputsFormProperties>({
			stderrDestination: new FormControl<string | null | undefined>(undefined),
			stdoutDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the inputs to a shell-style task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs {

		/** The command itself to run (e.g., argv). This field should be passed directly to the underlying operating system, and so it must be sensible to that operating system. For example, on Windows, the first argument might be "C:\Windows\System32\ping.exe" - that is, using drive letters and backslashes. A command for a *nix system, on the other hand, would use forward slashes. All other fields in the RWAPI must consistently use forward slashes, since those fields may be interpretted by both the service and the bot. */
		arguments?: Array<string>;

		/** All environment variables required by the task. */
		environmentVariables?: Array<GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable>;

		/** The input filesystem to be set up prior to the task beginning. The contents should be a repeated set of FileMetadata messages though other formats are allowed if better for the implementation (eg, a LUCI-style .isolated file). This field is repeated since implementations might want to cache the metadata, in which case it may be useful to break up portions of the filesystem that change frequently (eg, specific input files) from those that don't (eg, standard header files). */
		files?: Array<GoogleDevtoolsRemoteworkersV1test2Digest>;

		/** Inline contents for blobs expected to be needed by the bot to execute the task. For example, contents of entries in `files` or blobs that are indirectly referenced by an entry there. The bot should check against this list before downloading required task inputs to reduce the number of communications between itself and the remote CAS server. */
		inlineBlobs?: Array<GoogleDevtoolsRemoteworkersV1test2Blob>;

		/** Directory from which a command is executed. It is a relative directory with respect to the bot's working directory (i.e., "./"). If it is non-empty, then it must exist under "./". Otherwise, "./" will be used. */
		workingDirectory?: string | null;
	}

	/** Describes the inputs to a shell-style task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsFormProperties {

		/** Directory from which a command is executed. It is a relative directory with respect to the bot's working directory (i.e., "./"). If it is non-empty, then it must exist under "./". Otherwise, "./" will be used. */
		workingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandTaskInputsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsFormProperties>({
			workingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment variable required by this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable {

		/** The envvar name. */
		name?: string | null;

		/** The envvar value. */
		value?: string | null;
	}

	/** An environment variable required by this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariableFormProperties {

		/** The envvar name. */
		name: FormControl<string | null | undefined>,

		/** The envvar value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariableFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the timeouts associated with this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts {

		/** This specifies the maximum time that the task can run, excluding the time required to download inputs or upload outputs. That is, the worker will terminate the task if it runs longer than this. */
		execution?: string | null;

		/** This specifies the maximum amount of time the task can be idle - that is, go without generating some output in either stdout or stderr. If the process is silent for more than the specified time, the worker will terminate the task. */
		idle?: string | null;

		/** If the execution or IO timeouts are exceeded, the worker will try to gracefully terminate the task and return any existing logs. However, tasks may be hard-frozen in which case this process will fail. This timeout specifies how long to wait for a terminated task to shut down gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g. SIGKILL on *nix, CTRL_BREAK_EVENT on Windows). */
		shutdown?: string | null;
	}

	/** Describes the timeouts associated with this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeoutsFormProperties {

		/** This specifies the maximum time that the task can run, excluding the time required to download inputs or upload outputs. That is, the worker will terminate the task if it runs longer than this. */
		execution: FormControl<string | null | undefined>,

		/** This specifies the maximum amount of time the task can be idle - that is, go without generating some output in either stdout or stderr. If the process is silent for more than the specified time, the worker will terminate the task. */
		idle: FormControl<string | null | undefined>,

		/** If the execution or IO timeouts are exceeded, the worker will try to gracefully terminate the task and return any existing logs. However, tasks may be hard-frozen in which case this process will fail. This timeout specifies how long to wait for a terminated task to shut down gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g. SIGKILL on *nix, CTRL_BREAK_EVENT on Windows). */
		shutdown: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2CommandTaskTimeoutsFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeoutsFormProperties>({
			execution: new FormControl<string | null | undefined>(undefined),
			idle: new FormControl<string | null | undefined>(undefined),
			shutdown: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The contents of a directory. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2Directory {

		/** Any subdirectories */
		directories?: Array<GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata>;

		/** The files in this directory */
		files?: Array<GoogleDevtoolsRemoteworkersV1test2FileMetadata>;
	}

	/** The contents of a directory. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2DirectoryFormProperties {
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2DirectoryFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2DirectoryFormProperties>({
		});

	}


	/** The metadata for a directory. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata {

		/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/** The path of the directory, as in FileMetadata.path. */
		path?: string | null;
	}

	/** The metadata for a directory. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2DirectoryMetadataFormProperties {

		/** The path of the directory, as in FileMetadata.path. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2DirectoryMetadataFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2DirectoryMetadataFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for a file. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2FileMetadata {

		/** If the file is small enough, its contents may also or alternatively be listed here. */
		contents?: string | null;

		/** The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a "digest." The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's "ContentAddressibleStorage" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message. */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/** Properties of the file */
		isExecutable?: boolean | null;

		/** The path of this file. If this message is part of the CommandOutputs.outputs fields, the path is relative to the execution root and must correspond to an entry in CommandTask.outputs.files. If this message is part of a Directory message, then the path is relative to the root of that directory. All paths MUST be delimited by forward slashes. */
		path?: string | null;
	}

	/** The metadata for a file. Similar to the equivalent message in the Remote Execution API. */
	export interface GoogleDevtoolsRemoteworkersV1test2FileMetadataFormProperties {

		/** If the file is small enough, its contents may also or alternatively be listed here. */
		contents: FormControl<string | null | undefined>,

		/** Properties of the file */
		isExecutable: FormControl<boolean | null | undefined>,

		/** The path of this file. If this message is part of the CommandOutputs.outputs fields, the path is relative to the execution root and must correspond to an entry in CommandTask.outputs.files. If this message is part of a Directory message, then the path is relative to the root of that directory. All paths MUST be delimited by forward slashes. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsRemoteworkersV1test2FileMetadataFormGroup() {
		return new FormGroup<GoogleDevtoolsRemoteworkersV1test2FileMetadataFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			isExecutable: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
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


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
		 * Delete v1alpha/{name}
		 * @param {string} name Name of the worker pool to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Remotebuildexecution_projects_instances_workerpools_delete(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1alpha/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Remotebuildexecution_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
		 * Patch v1alpha/{name}
		 * @param {string} name WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field.
		 * @param {boolean} loggingEnabled Deprecated, use instance.logging_enabled instead. Whether to enable Stackdriver logging for this instance.
		 * @param {string} name1 Deprecated, use instance.Name instead. Name of the instance to update. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 * @param {string} updateMask The update mask applies to instance. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Remotebuildexecution_projects_instances_workerpools_patch(name: string, loggingEnabled: boolean | null | undefined, name1: string | null | undefined, updateMask: string | null | undefined, requestBody: GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&loggingEnabled=' + loggingEnabled + '&name1=' + (name1 == null ? '' : encodeURIComponent(name1)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
		 * Post v1alpha/{name}:testNotify
		 * @param {string} name Name of the instance for which to send a test notification. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Remotebuildexecution_projects_instances_testNotify(name: string, requestBody: GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':testNotify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists instances in a project.
		 * Get v1alpha/{parent}/instances
		 * @param {string} parent Required. Resource name of the project. Format: `projects/[PROJECT_ID]`.
		 * @return {GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse} Successful response
		 */
		Remotebuildexecution_projects_instances_list(parent: string): Observable<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse> {
			return this.http.get<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', {});
		}

		/**
		 * Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
		 * Post v1alpha/{parent}/instances
		 * @param {string} parent Required. Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Remotebuildexecution_projects_instances_create(parent: string, requestBody: GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists worker pools in an instance.
		 * Get v1alpha/{parent}/workerpools
		 * @param {string} parent Resource name of the instance. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 * @param {string} filter Optional. A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. String values are case-insensitive. The comparison operator must be either `:`, `=`, `!=`, `>`, `>=`, `<=` or `<`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. You can also filter on nested fields. To filter on multiple expressions, you can separate expression using `AND` and `OR` operators, using parentheses to specify precedence. If neither operator is specified, `AND` is assumed. Examples: Include only pools with more than 100 reserved workers: `(worker_count > 100) (worker_config.reserved = true)` Include only pools with a certain label or machines of the e2-standard family: `worker_config.labels.key1 : * OR worker_config.machine_type: e2-standard`
		 * @return {GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse} Successful response
		 */
		Remotebuildexecution_projects_instances_workerpools_list(parent: string, filter: string | null | undefined): Observable<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse> {
			return this.http.get<GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerpools&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
		 * Post v1alpha/{parent}/workerpools
		 * @param {string} parent Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Remotebuildexecution_projects_instances_workerpools_create(parent: string, requestBody: GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerpools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

