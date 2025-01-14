import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An entry for an Access Control list. */
	export interface AclEntry {

		/**
		 * The time when this access control entry expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime?: string | null;

		/** This is always <code>sql#aclEntry</code>. */
		kind?: string | null;

		/** Optional. A label to identify this entry. */
		name?: string | null;

		/** The whitelisted value for the access control list. */
		value?: string | null;
	}

	/** An entry for an Access Control list. */
	export interface AclEntryFormProperties {

		/**
		 * The time when this access control entry expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime: FormControl<string | null | undefined>,

		/** This is always <code>sql#aclEntry</code>. */
		kind: FormControl<string | null | undefined>,

		/** Optional. A label to identify this entry. */
		name: FormControl<string | null | undefined>,

		/** The whitelisted value for the access control list. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAclEntryFormGroup() {
		return new FormGroup<AclEntryFormProperties>({
			expirationTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Admin API warning message. */
	export interface ApiWarning {

		/** Code to uniquely identify the warning type. */
		code?: ApiWarningCode | null;

		/** The warning message. */
		message?: string | null;
	}

	/** An Admin API warning message. */
	export interface ApiWarningFormProperties {

		/** Code to uniquely identify the warning type. */
		code: FormControl<ApiWarningCode | null | undefined>,

		/** The warning message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiWarningFormGroup() {
		return new FormGroup<ApiWarningFormProperties>({
			code: new FormControl<ApiWarningCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiWarningCode { SQL_API_WARNING_CODE_UNSPECIFIED = 0, REGION_UNREACHABLE = 1 }


	/** Database instance backup configuration. */
	export interface BackupConfiguration {

		/**
		 * (MySQL only) Whether binary log is enabled. If backup configuration is
		 * disabled, binarylog must be disabled as well.
		 */
		binaryLogEnabled?: boolean | null;

		/** Whether this configuration is enabled. */
		enabled?: boolean | null;

		/** This is always <code>sql#backupConfiguration</code>. */
		kind?: string | null;

		/** Location of the backup */
		location?: string | null;

		/** Reserved for future use. */
		pointInTimeRecoveryEnabled?: boolean | null;

		/** Reserved for future use. */
		replicationLogArchivingEnabled?: boolean | null;

		/**
		 * Start time for the daily backup configuration in UTC timezone in the 24
		 * hour format - <code>HH:MM</code>.
		 */
		startTime?: string | null;
	}

	/** Database instance backup configuration. */
	export interface BackupConfigurationFormProperties {

		/**
		 * (MySQL only) Whether binary log is enabled. If backup configuration is
		 * disabled, binarylog must be disabled as well.
		 */
		binaryLogEnabled: FormControl<boolean | null | undefined>,

		/** Whether this configuration is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** This is always <code>sql#backupConfiguration</code>. */
		kind: FormControl<string | null | undefined>,

		/** Location of the backup */
		location: FormControl<string | null | undefined>,

		/** Reserved for future use. */
		pointInTimeRecoveryEnabled: FormControl<boolean | null | undefined>,

		/** Reserved for future use. */
		replicationLogArchivingEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Start time for the daily backup configuration in UTC timezone in the 24
		 * hour format - <code>HH:MM</code>.
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupConfigurationFormGroup() {
		return new FormGroup<BackupConfigurationFormProperties>({
			binaryLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pointInTimeRecoveryEnabled: new FormControl<boolean | null | undefined>(undefined),
			replicationLogArchivingEnabled: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A BackupRun resource. */
	export interface BackupRun {

		/** The description of this run, only applicable to on-demand backups. */
		description?: string | null;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/**
		 * The time the backup operation completed in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime?: string | null;

		/**
		 * The time the run was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		enqueuedTime?: string | null;

		/** Database instance operation error. */
		error?: OperationError;

		/**
		 * The identifier for this backup run. Unique only for a specific Cloud SQL
		 * instance.
		 */
		id?: string | null;

		/** Name of the database instance. */
		instance?: string | null;

		/** This is always <code>sql#backupRun</code>. */
		kind?: string | null;

		/** Location of the backups. */
		location?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/**
		 * The time the backup operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime?: string | null;

		/** The status of this run. */
		status?: BackupRunStatus | null;

		/** The type of this run; can be either "AUTOMATED" or "ON_DEMAND". */
		type?: BackupRunType | null;

		/**
		 * The start time of the backup window during which this the backup was
		 * attempted in <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a>
		 * format, for example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		windowStartTime?: string | null;
	}

	/** A BackupRun resource. */
	export interface BackupRunFormProperties {

		/** The description of this run, only applicable to on-demand backups. */
		description: FormControl<string | null | undefined>,

		/**
		 * The time the backup operation completed in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The time the run was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		enqueuedTime: FormControl<string | null | undefined>,

		/**
		 * The identifier for this backup run. Unique only for a specific Cloud SQL
		 * instance.
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the database instance. */
		instance: FormControl<string | null | undefined>,

		/** This is always <code>sql#backupRun</code>. */
		kind: FormControl<string | null | undefined>,

		/** Location of the backups. */
		location: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The time the backup operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime: FormControl<string | null | undefined>,

		/** The status of this run. */
		status: FormControl<BackupRunStatus | null | undefined>,

		/** The type of this run; can be either "AUTOMATED" or "ON_DEMAND". */
		type: FormControl<BackupRunType | null | undefined>,

		/**
		 * The start time of the backup window during which this the backup was
		 * attempted in <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a>
		 * format, for example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		windowStartTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupRunFormGroup() {
		return new FormGroup<BackupRunFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			enqueuedTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BackupRunStatus | null | undefined>(undefined),
			type: new FormControl<BackupRunType | null | undefined>(undefined),
			windowStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk encryption configuration for an instance. */
	export interface DiskEncryptionConfiguration {

		/** This is always <code>sql#diskEncryptionConfiguration</code>. */
		kind?: string | null;

		/** Resource name of KMS key for disk encryption */
		kmsKeyName?: string | null;
	}

	/** Disk encryption configuration for an instance. */
	export interface DiskEncryptionConfigurationFormProperties {

		/** This is always <code>sql#diskEncryptionConfiguration</code>. */
		kind: FormControl<string | null | undefined>,

		/** Resource name of KMS key for disk encryption */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionConfigurationFormGroup() {
		return new FormGroup<DiskEncryptionConfigurationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk encryption status for an instance. */
	export interface DiskEncryptionStatus {

		/** This is always <code>sql#diskEncryptionStatus</code>. */
		kind?: string | null;

		/** KMS key version used to encrypt the Cloud SQL instance resource */
		kmsKeyVersionName?: string | null;
	}

	/** Disk encryption status for an instance. */
	export interface DiskEncryptionStatusFormProperties {

		/** This is always <code>sql#diskEncryptionStatus</code>. */
		kind: FormControl<string | null | undefined>,

		/** KMS key version used to encrypt the Cloud SQL instance resource */
		kmsKeyVersionName: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionStatusFormGroup() {
		return new FormGroup<DiskEncryptionStatusFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance operation error. */
	export interface OperationError {

		/** Identifies the specific error that occurred. */
		code?: string | null;

		/** This is always <code>sql#operationError</code>. */
		kind?: string | null;

		/** Additional information about the error encountered. */
		message?: string | null;
	}

	/** Database instance operation error. */
	export interface OperationErrorFormProperties {

		/** Identifies the specific error that occurred. */
		code: FormControl<string | null | undefined>,

		/** This is always <code>sql#operationError</code>. */
		kind: FormControl<string | null | undefined>,

		/** Additional information about the error encountered. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorFormGroup() {
		return new FormGroup<OperationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupRunStatus { SQL_BACKUP_RUN_STATUS_UNSPECIFIED = 0, ENQUEUED = 1, OVERDUE = 2, RUNNING = 3, FAILED = 4, SUCCESSFUL = 5, SKIPPED = 6, DELETION_PENDING = 7, DELETION_FAILED = 8, DELETED = 9 }

	export enum BackupRunType { SQL_BACKUP_RUN_TYPE_UNSPECIFIED = 0, AUTOMATED = 1, ON_DEMAND = 2 }


	/** Backup run list results. */
	export interface BackupRunsListResponse {

		/** A list of backup runs in reverse chronological order of the enqueued time. */
		items?: Array<BackupRun>;

		/** This is always <code>sql#backupRunsList</code>. */
		kind?: string | null;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string | null;
	}

	/** Backup run list results. */
	export interface BackupRunsListResponseFormProperties {

		/** This is always <code>sql#backupRunsList</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBackupRunsListResponseFormGroup() {
		return new FormGroup<BackupRunsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binary log coordinates. */
	export interface BinLogCoordinates {

		/** Name of the binary log file for a Cloud SQL instance. */
		binLogFileName?: string | null;

		/** Position (offset) within the binary log file. */
		binLogPosition?: string | null;

		/** This is always <code>sql#binLogCoordinates</code>. */
		kind?: string | null;
	}

	/** Binary log coordinates. */
	export interface BinLogCoordinatesFormProperties {

		/** Name of the binary log file for a Cloud SQL instance. */
		binLogFileName: FormControl<string | null | undefined>,

		/** Position (offset) within the binary log file. */
		binLogPosition: FormControl<string | null | undefined>,

		/** This is always <code>sql#binLogCoordinates</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBinLogCoordinatesFormGroup() {
		return new FormGroup<BinLogCoordinatesFormProperties>({
			binLogFileName: new FormControl<string | null | undefined>(undefined),
			binLogPosition: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance clone context. */
	export interface CloneContext {

		/** Binary log coordinates. */
		binLogCoordinates?: BinLogCoordinates;

		/** Name of the Cloud SQL instance to be created as a clone. */
		destinationInstanceName?: string | null;

		/** This is always <code>sql#cloneContext</code>. */
		kind?: string | null;

		/** Reserved for future use. */
		pitrTimestampMs?: string | null;

		/** Reserved for future use. */
		pointInTime?: string | null;
	}

	/** Database instance clone context. */
	export interface CloneContextFormProperties {

		/** Name of the Cloud SQL instance to be created as a clone. */
		destinationInstanceName: FormControl<string | null | undefined>,

		/** This is always <code>sql#cloneContext</code>. */
		kind: FormControl<string | null | undefined>,

		/** Reserved for future use. */
		pitrTimestampMs: FormControl<string | null | undefined>,

		/** Reserved for future use. */
		pointInTime: FormControl<string | null | undefined>,
	}
	export function CreateCloneContextFormGroup() {
		return new FormGroup<CloneContextFormProperties>({
			destinationInstanceName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pitrTimestampMs: new FormControl<string | null | undefined>(undefined),
			pointInTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a SQL database on the Cloud SQL instance. */
	export interface Database {

		/** The MySQL charset value. */
		charset?: string | null;

		/** The MySQL collation value. */
		collation?: string | null;

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag?: string | null;

		/** The name of the Cloud SQL instance. This does not include the project ID. */
		instance?: string | null;

		/** This is always <code>sql#database</code>. */
		kind?: string | null;

		/**
		 * The name of the database in the Cloud SQL instance. This does not include
		 * the project ID or instance name.
		 */
		name?: string | null;

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable.
		 */
		project?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** Represents a Sql Server database on the Cloud SQL instance. */
		sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
	}

	/** Represents a SQL database on the Cloud SQL instance. */
	export interface DatabaseFormProperties {

		/** The MySQL charset value. */
		charset: FormControl<string | null | undefined>,

		/** The MySQL collation value. */
		collation: FormControl<string | null | undefined>,

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag: FormControl<string | null | undefined>,

		/** The name of the Cloud SQL instance. This does not include the project ID. */
		instance: FormControl<string | null | undefined>,

		/** This is always <code>sql#database</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The name of the database in the Cloud SQL instance. This does not include
		 * the project ID or instance name.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable.
		 */
		project: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			charset: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Sql Server database on the Cloud SQL instance. */
	export interface SqlServerDatabaseDetails {

		/** The version of SQL Server with which the database is to be made compatible */
		compatibilityLevel?: number | null;

		/** The recovery model of a SQL Server database */
		recoveryModel?: string | null;
	}

	/** Represents a Sql Server database on the Cloud SQL instance. */
	export interface SqlServerDatabaseDetailsFormProperties {

		/** The version of SQL Server with which the database is to be made compatible */
		compatibilityLevel: FormControl<number | null | undefined>,

		/** The recovery model of a SQL Server database */
		recoveryModel: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerDatabaseDetailsFormGroup() {
		return new FormGroup<SqlServerDatabaseDetailsFormProperties>({
			compatibilityLevel: new FormControl<number | null | undefined>(undefined),
			recoveryModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database flags for Cloud SQL instances. */
	export interface DatabaseFlags {

		/**
		 * The name of the flag. These flags are passed at instance startup, so
		 * include both server options and system variables for MySQL. Flags should be
		 * specified with underscores, not hyphens. For more information, see <a
		 * href="/sql/docs/mysql/flags">Configuring Database Flags</a> in the Cloud
		 * SQL documentation.
		 */
		name?: string | null;

		/**
		 * The value of the flag. Booleans should be set to <code>on</code> for true
		 * and <code>off</code> for false. This field must be omitted if the flag
		 * doesn't take a value.
		 */
		value?: string | null;
	}

	/** Database flags for Cloud SQL instances. */
	export interface DatabaseFlagsFormProperties {

		/**
		 * The name of the flag. These flags are passed at instance startup, so
		 * include both server options and system variables for MySQL. Flags should be
		 * specified with underscores, not hyphens. For more information, see <a
		 * href="/sql/docs/mysql/flags">Configuring Database Flags</a> in the Cloud
		 * SQL documentation.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the flag. Booleans should be set to <code>on</code> for true
		 * and <code>off</code> for false. This field must be omitted if the flag
		 * doesn't take a value.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFlagsFormGroup() {
		return new FormGroup<DatabaseFlagsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud SQL instance resource. */
	export interface DatabaseInstance {

		/**
		 * <code>FIRST_GEN</code>: First Generation instance. MySQL only. <br
		 * /><code>SECOND_GEN</code>: Second Generation instance or PostgreSQL
		 * instance. <br /><code>EXTERNAL</code>: A database server that is not
		 * managed by Google. <br>This property is read-only; use the
		 * <code>tier</code> property in the <code>settings</code> object to determine
		 * the database type and Second or First Generation.
		 */
		backendType?: DatabaseInstanceBackendType | null;

		/** Connection name of the Cloud SQL instance used in connection strings. */
		connectionName?: string | null;

		/**
		 * The current disk usage of the instance in bytes. This property has been
		 * deprecated. Users should use the
		 * "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud
		 * Monitoring API instead. Please see <a
		 * href="https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ">this
		 * announcement</a> for details.
		 */
		currentDiskSize?: string | null;

		/**
		 * The database engine type and version. The <code>databaseVersion</code>
		 * field can not be changed after instance creation.  MySQL Second Generation
		 * instances: <code>MYSQL_5_7</code> (default) or <code>MYSQL_5_6</code>.
		 * PostgreSQL instances: <code>POSTGRES_9_6</code> (default) or
		 * <code>POSTGRES_11 Beta</code> MySQL First Generation
		 * instances: <code>MYSQL_5_6</code> (default) or <code>MYSQL_5_5</code>
		 */
		databaseVersion?: DatabaseInstanceDatabaseVersion | null;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API. Use the <code>settings.settingsVersion</code> field instead.
		 */
		etag?: string | null;

		/**
		 * The name and status of the failover replica. This property is applicable
		 * only to Second Generation instances.
		 */
		failoverReplica?: DatabaseInstanceFailoverReplica;

		/**
		 * The Compute Engine zone that the instance is currently serving from. This
		 * value could be different from the zone that was specified when the instance
		 * was created if the instance has failed over to its secondary zone.
		 */
		gceZone?: string | null;

		/**
		 * The instance type. This can be one of the following.
		 * <br><code>CLOUD_SQL_INSTANCE</code>: A Cloud SQL instance that is not
		 * replicating from a master. <br><code>ON_PREMISES_INSTANCE</code>: An
		 * instance running on the
		 * customer's premises. <br><code>READ_REPLICA_INSTANCE</code>: A Cloud SQL
		 * instance configured as a read-replica.
		 */
		instanceType?: DatabaseInstanceInstanceType | null;

		/** The assigned IP addresses for the instance. */
		ipAddresses?: Array<IpMapping>;

		/**
		 * The IPv6 address assigned to the instance. This property is applicable only
		 * to First Generation instances.
		 */
		ipv6Address?: string | null;

		/** This is always <code>sql#instance</code>. */
		kind?: string | null;

		/** The name of the instance which will act as master in the replication setup. */
		masterInstanceName?: string | null;

		/** The maximum disk size of the instance in bytes. */
		maxDiskSize?: string | null;

		/** Name of the Cloud SQL instance. This does not include the project ID. */
		name?: string | null;

		/** On-premises instance configuration. */
		onPremisesConfiguration?: OnPremisesConfiguration;

		/**
		 * The project ID of the project containing the Cloud SQL instance. The Google
		 * apps domain is prefixed if applicable.
		 */
		project?: string | null;

		/**
		 * The geographical region. Can be <code>us-central</code>
		 * (<code>FIRST_GEN</code> instances only), <code>us-central1</code>
		 * (<code>SECOND_GEN</code> instances only), <code>asia-east1</code> or
		 * <code>europe-west1</code>. Defaults to <code>us-central</code> or
		 * <code>us-central1</code> depending on the instance type (First Generation
		 * or Second Generation). The region can not be changed after instance
		 * creation.
		 */
		region?: string | null;

		/** Read-replica configuration for connecting to the master. */
		replicaConfiguration?: ReplicaConfiguration;

		/** The replicas of the instance. */
		replicaNames?: Array<string>;

		/** Initial root password. Use only on creation. */
		rootPassword?: string | null;

		/** Any scheduled maintenancce for this instance. */
		scheduledMaintenance?: SqlScheduledMaintenance;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** SslCerts Resource */
		serverCaCert?: SslCert;

		/**
		 * The service account email address assigned to the instance. This property
		 * is applicable only to Second Generation instances.
		 */
		serviceAccountEmailAddress?: string | null;

		/** Database instance settings. */
		settings?: Settings;

		/**
		 * The current serving state of the Cloud SQL instance. This can be one of the
		 * following. <br><code>RUNNABLE</code>: The instance is running, or is ready
		 * to run when accessed. <br><code>SUSPENDED</code>: The instance is not
		 * available, for example due to problems with billing.
		 * <br><code>PENDING_CREATE</code>: The instance is being created.
		 * <br><code>MAINTENANCE</code>: The instance is down for maintenance.
		 * <br><code>FAILED</code>: The instance creation failed.
		 * <br><code>UNKNOWN_STATE</code>: The state of the instance is unknown.
		 */
		state?: DatabaseInstanceState | null;

		/** If the instance state is SUSPENDED, the reason for the suspension. */
		suspensionReason?: Array<string>;
	}

	/** A Cloud SQL instance resource. */
	export interface DatabaseInstanceFormProperties {

		/**
		 * <code>FIRST_GEN</code>: First Generation instance. MySQL only. <br
		 * /><code>SECOND_GEN</code>: Second Generation instance or PostgreSQL
		 * instance. <br /><code>EXTERNAL</code>: A database server that is not
		 * managed by Google. <br>This property is read-only; use the
		 * <code>tier</code> property in the <code>settings</code> object to determine
		 * the database type and Second or First Generation.
		 */
		backendType: FormControl<DatabaseInstanceBackendType | null | undefined>,

		/** Connection name of the Cloud SQL instance used in connection strings. */
		connectionName: FormControl<string | null | undefined>,

		/**
		 * The current disk usage of the instance in bytes. This property has been
		 * deprecated. Users should use the
		 * "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud
		 * Monitoring API instead. Please see <a
		 * href="https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ">this
		 * announcement</a> for details.
		 */
		currentDiskSize: FormControl<string | null | undefined>,

		/**
		 * The database engine type and version. The <code>databaseVersion</code>
		 * field can not be changed after instance creation.  MySQL Second Generation
		 * instances: <code>MYSQL_5_7</code> (default) or <code>MYSQL_5_6</code>.
		 * PostgreSQL instances: <code>POSTGRES_9_6</code> (default) or
		 * <code>POSTGRES_11 Beta</code> MySQL First Generation
		 * instances: <code>MYSQL_5_6</code> (default) or <code>MYSQL_5_5</code>
		 */
		databaseVersion: FormControl<DatabaseInstanceDatabaseVersion | null | undefined>,

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API. Use the <code>settings.settingsVersion</code> field instead.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * The Compute Engine zone that the instance is currently serving from. This
		 * value could be different from the zone that was specified when the instance
		 * was created if the instance has failed over to its secondary zone.
		 */
		gceZone: FormControl<string | null | undefined>,

		/**
		 * The instance type. This can be one of the following.
		 * <br><code>CLOUD_SQL_INSTANCE</code>: A Cloud SQL instance that is not
		 * replicating from a master. <br><code>ON_PREMISES_INSTANCE</code>: An
		 * instance running on the
		 * customer's premises. <br><code>READ_REPLICA_INSTANCE</code>: A Cloud SQL
		 * instance configured as a read-replica.
		 */
		instanceType: FormControl<DatabaseInstanceInstanceType | null | undefined>,

		/**
		 * The IPv6 address assigned to the instance. This property is applicable only
		 * to First Generation instances.
		 */
		ipv6Address: FormControl<string | null | undefined>,

		/** This is always <code>sql#instance</code>. */
		kind: FormControl<string | null | undefined>,

		/** The name of the instance which will act as master in the replication setup. */
		masterInstanceName: FormControl<string | null | undefined>,

		/** The maximum disk size of the instance in bytes. */
		maxDiskSize: FormControl<string | null | undefined>,

		/** Name of the Cloud SQL instance. This does not include the project ID. */
		name: FormControl<string | null | undefined>,

		/**
		 * The project ID of the project containing the Cloud SQL instance. The Google
		 * apps domain is prefixed if applicable.
		 */
		project: FormControl<string | null | undefined>,

		/**
		 * The geographical region. Can be <code>us-central</code>
		 * (<code>FIRST_GEN</code> instances only), <code>us-central1</code>
		 * (<code>SECOND_GEN</code> instances only), <code>asia-east1</code> or
		 * <code>europe-west1</code>. Defaults to <code>us-central</code> or
		 * <code>us-central1</code> depending on the instance type (First Generation
		 * or Second Generation). The region can not be changed after instance
		 * creation.
		 */
		region: FormControl<string | null | undefined>,

		/** Initial root password. Use only on creation. */
		rootPassword: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The service account email address assigned to the instance. This property
		 * is applicable only to Second Generation instances.
		 */
		serviceAccountEmailAddress: FormControl<string | null | undefined>,

		/**
		 * The current serving state of the Cloud SQL instance. This can be one of the
		 * following. <br><code>RUNNABLE</code>: The instance is running, or is ready
		 * to run when accessed. <br><code>SUSPENDED</code>: The instance is not
		 * available, for example due to problems with billing.
		 * <br><code>PENDING_CREATE</code>: The instance is being created.
		 * <br><code>MAINTENANCE</code>: The instance is down for maintenance.
		 * <br><code>FAILED</code>: The instance creation failed.
		 * <br><code>UNKNOWN_STATE</code>: The state of the instance is unknown.
		 */
		state: FormControl<DatabaseInstanceState | null | undefined>,
	}
	export function CreateDatabaseInstanceFormGroup() {
		return new FormGroup<DatabaseInstanceFormProperties>({
			backendType: new FormControl<DatabaseInstanceBackendType | null | undefined>(undefined),
			connectionName: new FormControl<string | null | undefined>(undefined),
			currentDiskSize: new FormControl<string | null | undefined>(undefined),
			databaseVersion: new FormControl<DatabaseInstanceDatabaseVersion | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			gceZone: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<DatabaseInstanceInstanceType | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			masterInstanceName: new FormControl<string | null | undefined>(undefined),
			maxDiskSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			rootPassword: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmailAddress: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DatabaseInstanceState | null | undefined>(undefined),
		});

	}

	export enum DatabaseInstanceBackendType { SQL_BACKEND_TYPE_UNSPECIFIED = 0, FIRST_GEN = 1, SECOND_GEN = 2, EXTERNAL = 3 }

	export enum DatabaseInstanceDatabaseVersion { SQL_DATABASE_VERSION_UNSPECIFIED = 0, MYSQL_5_1 = 1, MYSQL_5_5 = 2, MYSQL_5_6 = 3, MYSQL_5_7 = 4, POSTGRES_9_6 = 5, POSTGRES_11 = 6, SQLSERVER_2017_STANDARD = 7, SQLSERVER_2017_ENTERPRISE = 8, SQLSERVER_2017_EXPRESS = 9, SQLSERVER_2017_WEB = 10, POSTGRES_10 = 11, POSTGRES_12 = 12 }

	export interface DatabaseInstanceFailoverReplica {

		/**
		 * The availability status of the failover replica. A false status indicates
		 * that the failover replica is out of sync. The master can only failover to
		 * the failover replica when the status is true.
		 */
		available?: boolean | null;

		/**
		 * The name of the failover replica. If specified at instance creation, a
		 * failover replica is created for the instance. The name
		 * doesn't include the project ID. This property is applicable only to
		 * Second Generation instances.
		 */
		name?: string | null;
	}
	export interface DatabaseInstanceFailoverReplicaFormProperties {

		/**
		 * The availability status of the failover replica. A false status indicates
		 * that the failover replica is out of sync. The master can only failover to
		 * the failover replica when the status is true.
		 */
		available: FormControl<boolean | null | undefined>,

		/**
		 * The name of the failover replica. If specified at instance creation, a
		 * failover replica is created for the instance. The name
		 * doesn't include the project ID. This property is applicable only to
		 * Second Generation instances.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInstanceFailoverReplicaFormGroup() {
		return new FormGroup<DatabaseInstanceFailoverReplicaFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseInstanceInstanceType { SQL_INSTANCE_TYPE_UNSPECIFIED = 0, CLOUD_SQL_INSTANCE = 1, ON_PREMISES_INSTANCE = 2, READ_REPLICA_INSTANCE = 3 }


	/** Database instance IP Mapping. */
	export interface IpMapping {

		/** The IP address assigned. */
		ipAddress?: string | null;

		/**
		 * The due time for this IP to be retired in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>. This field is only available when
		 * the IP is scheduled to be retired.
		 */
		timeToRetire?: string | null;

		/**
		 * The type of this IP address. A <code>PRIMARY</code> address is a public
		 * address that can accept incoming connections. A <code>PRIVATE</code>
		 * address is a private address that can accept incoming connections. An
		 * <code>OUTGOING</code> address is the source address of connections
		 * originating from the instance, if supported.
		 */
		type?: IpMappingType | null;
	}

	/** Database instance IP Mapping. */
	export interface IpMappingFormProperties {

		/** The IP address assigned. */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * The due time for this IP to be retired in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>. This field is only available when
		 * the IP is scheduled to be retired.
		 */
		timeToRetire: FormControl<string | null | undefined>,

		/**
		 * The type of this IP address. A <code>PRIMARY</code> address is a public
		 * address that can accept incoming connections. A <code>PRIVATE</code>
		 * address is a private address that can accept incoming connections. An
		 * <code>OUTGOING</code> address is the source address of connections
		 * originating from the instance, if supported.
		 */
		type: FormControl<IpMappingType | null | undefined>,
	}
	export function CreateIpMappingFormGroup() {
		return new FormGroup<IpMappingFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			timeToRetire: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IpMappingType | null | undefined>(undefined),
		});

	}

	export enum IpMappingType { SQL_IP_ADDRESS_TYPE_UNSPECIFIED = 0, PRIMARY = 1, OUTGOING = 2, PRIVATE = 3, MIGRATED_1ST_GEN = 4 }


	/** On-premises instance configuration. */
	export interface OnPremisesConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string | null;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey?: string | null;

		/** The dump file to create the Cloud SQL replica. */
		dumpFilePath?: string | null;

		/** The host and port of the on-premises instance in host:port format */
		hostPort?: string | null;

		/** This is always <code>sql#onPremisesConfiguration</code>. */
		kind?: string | null;

		/** The password for connecting to on-premises instance. */
		password?: string | null;

		/** The username for connecting to on-premises instance. */
		username?: string | null;
	}

	/** On-premises instance configuration. */
	export interface OnPremisesConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey: FormControl<string | null | undefined>,

		/** The dump file to create the Cloud SQL replica. */
		dumpFilePath: FormControl<string | null | undefined>,

		/** The host and port of the on-premises instance in host:port format */
		hostPort: FormControl<string | null | undefined>,

		/** This is always <code>sql#onPremisesConfiguration</code>. */
		kind: FormControl<string | null | undefined>,

		/** The password for connecting to on-premises instance. */
		password: FormControl<string | null | undefined>,

		/** The username for connecting to on-premises instance. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOnPremisesConfigurationFormGroup() {
		return new FormGroup<OnPremisesConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			dumpFilePath: new FormControl<string | null | undefined>(undefined),
			hostPort: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration for connecting to the master. */
	export interface ReplicaConfiguration {

		/**
		 * Specifies if the replica is the failover target. If the field is set to
		 * <code>true</code> the replica will be designated as a failover replica. In
		 * case the master instance fails, the replica instance will be promoted as
		 * the new master instance.  <p>Only one replica can be specified as failover
		 * target, and the replica has to be in different zone with the master
		 * instance.
		 */
		failoverTarget?: boolean | null;

		/** This is always <code>sql#replicaConfiguration</code>. */
		kind?: string | null;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
	}

	/** Read-replica configuration for connecting to the master. */
	export interface ReplicaConfigurationFormProperties {

		/**
		 * Specifies if the replica is the failover target. If the field is set to
		 * <code>true</code> the replica will be designated as a failover replica. In
		 * case the master instance fails, the replica instance will be promoted as
		 * the new master instance.  <p>Only one replica can be specified as failover
		 * target, and the replica has to be in different zone with the master
		 * instance.
		 */
		failoverTarget: FormControl<boolean | null | undefined>,

		/** This is always <code>sql#replicaConfiguration</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReplicaConfigurationFormGroup() {
		return new FormGroup<ReplicaConfigurationFormProperties>({
			failoverTarget: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface MySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string | null;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey?: string | null;

		/** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
		connectRetryInterval?: number | null;

		/**
		 * Path to a SQL dump file in Google Cloud Storage from which the slave
		 * instance is to be created. The URI is in the form gs:
		 * //bucketName/fileName. Compressed gzip files (.gz) are also supported.
		 * // Dumps should have the binlog co-ordinates from which replication should
		 * // begin. This can be accomplished by setting --master-data to 1 when using
		 * // mysqldump.
		 */
		dumpFilePath?: string | null;

		/** This is always <code>sql#mysqlReplicaConfiguration</code>. */
		kind?: string | null;

		/** Interval in milliseconds between replication heartbeats. */
		masterHeartbeatPeriod?: string | null;

		/** The password for the replication connection. */
		password?: string | null;

		/** A list of permissible ciphers to use for SSL encryption. */
		sslCipher?: string | null;

		/** The username for the replication connection. */
		username?: string | null;

		/**
		 * Whether or not to check the master's Common Name value in the certificate
		 * that it sends during the SSL handshake.
		 */
		verifyServerCertificate?: boolean | null;
	}

	/** Read-replica configuration specific to MySQL databases. */
	export interface MySqlReplicaConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey: FormControl<string | null | undefined>,

		/** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
		connectRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Path to a SQL dump file in Google Cloud Storage from which the slave
		 * instance is to be created. The URI is in the form gs:
		 * //bucketName/fileName. Compressed gzip files (.gz) are also supported.
		 * // Dumps should have the binlog co-ordinates from which replication should
		 * // begin. This can be accomplished by setting --master-data to 1 when using
		 * // mysqldump.
		 */
		dumpFilePath: FormControl<string | null | undefined>,

		/** This is always <code>sql#mysqlReplicaConfiguration</code>. */
		kind: FormControl<string | null | undefined>,

		/** Interval in milliseconds between replication heartbeats. */
		masterHeartbeatPeriod: FormControl<string | null | undefined>,

		/** The password for the replication connection. */
		password: FormControl<string | null | undefined>,

		/** A list of permissible ciphers to use for SSL encryption. */
		sslCipher: FormControl<string | null | undefined>,

		/** The username for the replication connection. */
		username: FormControl<string | null | undefined>,

		/**
		 * Whether or not to check the master's Common Name value in the certificate
		 * that it sends during the SSL handshake.
		 */
		verifyServerCertificate: FormControl<boolean | null | undefined>,
	}
	export function CreateMySqlReplicaConfigurationFormGroup() {
		return new FormGroup<MySqlReplicaConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			connectRetryInterval: new FormControl<number | null | undefined>(undefined),
			dumpFilePath: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			masterHeartbeatPeriod: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sslCipher: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			verifyServerCertificate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Any scheduled maintenancce for this instance. */
	export interface SqlScheduledMaintenance {
		canDefer?: boolean | null;

		/** If the scheduled maintenance can be rescheduled. */
		canReschedule?: boolean | null;

		/** The start time of any upcoming scheduled maintenance for this instance. */
		startTime?: string | null;
	}

	/** Any scheduled maintenancce for this instance. */
	export interface SqlScheduledMaintenanceFormProperties {
		canDefer: FormControl<boolean | null | undefined>,

		/** If the scheduled maintenance can be rescheduled. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** The start time of any upcoming scheduled maintenance for this instance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateSqlScheduledMaintenanceFormGroup() {
		return new FormGroup<SqlScheduledMaintenanceFormProperties>({
			canDefer: new FormControl<boolean | null | undefined>(undefined),
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts Resource */
	export interface SslCert {

		/** PEM representation. */
		cert?: string | null;

		/** Serial number, as extracted from the certificate. */
		certSerialNumber?: string | null;

		/** User supplied name.  Constrained to [a-zA-Z.-_ ]+. */
		commonName?: string | null;

		/**
		 * The time when the certificate was created in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>
		 */
		createTime?: string | null;

		/**
		 * The time when the certificate expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime?: string | null;

		/** Name of the database instance. */
		instance?: string | null;

		/** This is always <code>sql#sslCert</code>. */
		kind?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** Sha1 Fingerprint. */
		sha1Fingerprint?: string | null;
	}

	/** SslCerts Resource */
	export interface SslCertFormProperties {

		/** PEM representation. */
		cert: FormControl<string | null | undefined>,

		/** Serial number, as extracted from the certificate. */
		certSerialNumber: FormControl<string | null | undefined>,

		/** User supplied name.  Constrained to [a-zA-Z.-_ ]+. */
		commonName: FormControl<string | null | undefined>,

		/**
		 * The time when the certificate was created in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>
		 */
		createTime: FormControl<string | null | undefined>,

		/**
		 * The time when the certificate expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime: FormControl<string | null | undefined>,

		/** Name of the database instance. */
		instance: FormControl<string | null | undefined>,

		/** This is always <code>sql#sslCert</code>. */
		kind: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Sha1 Fingerprint. */
		sha1Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateSslCertFormGroup() {
		return new FormGroup<SslCertFormProperties>({
			cert: new FormControl<string | null | undefined>(undefined),
			certSerialNumber: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			sha1Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance settings. */
	export interface Settings {

		/**
		 * The activation policy specifies when the instance is activated; it is
		 * applicable only when the instance state is <code>RUNNABLE</code>. Valid
		 * values: <br><code>ALWAYS</code>: The instance is on, and remains so even in
		 * the absence of connection requests. <br><code>NEVER</code>: The instance is
		 * off; it is not activated, even if a connection request arrives.
		 * <br><code>ON_DEMAND</code>: First Generation instances only. The instance
		 * responds to incoming requests, and turns itself off when not in use.
		 * Instances with <code>PER_USE</code> pricing turn off after 15 minutes of
		 * inactivity. Instances with <code>PER_PACKAGE</code> pricing turn off after
		 * 12 hours of inactivity.
		 */
		activationPolicy?: SettingsActivationPolicy | null;

		/**
		 * The App Engine app IDs that can access this instance. First Generation
		 * instances only.
		 */
		authorizedGaeApplications?: Array<string>;

		/**
		 * Availability type (PostgreSQL and MySQL instances only). Potential values:
		 * <br><code>ZONAL</code>: The instance serves data from only one zone.
		 * Outages in that zone affect data accessibility. <br><code>REGIONAL</code>:
		 * The instance can serve data from more than one zone in a region (it is
		 * highly available). <br>For more information, see <a
		 * href="https://cloud.google.com/sql/docs/postgres/high-availability">Overview
		 * of the High Availability Configuration</a>.
		 */
		availabilityType?: SettingsAvailabilityType | null;

		/** Database instance backup configuration. */
		backupConfiguration?: BackupConfiguration;

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * database flags for crash-safe replication are enabled. This property is
		 * only applicable to First Generation instances.
		 */
		crashSafeReplicationEnabled?: boolean | null;

		/**
		 * The size of data disk, in GB. The data disk size minimum is 10GB. Not used
		 * for First Generation instances.
		 */
		dataDiskSizeGb?: string | null;

		/**
		 * The type of data disk: <code>PD_SSD</code> (default) or
		 * <code>PD_HDD</code>. Not used for First Generation instances.
		 */
		dataDiskType?: SettingsDataDiskType | null;

		/** The database flags passed to the instance at startup. */
		databaseFlags?: Array<DatabaseFlags>;

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * replication is enabled or not.
		 */
		databaseReplicationEnabled?: boolean | null;

		/** IP Management configuration. */
		ipConfiguration?: IpConfiguration;

		/** This is always <code>sql#settings</code>. */
		kind?: string | null;

		/**
		 * Preferred location. This specifies where a Cloud SQL instance should
		 * preferably be located, either in a specific Compute Engine zone, or
		 * co-located with an App Engine application. Note that if the preferred
		 * location is not available, the instance will be located as close as possible
		 * within the region. Only one location may be specified.
		 */
		locationPreference?: LocationPreference;

		/**
		 * Maintenance window. This specifies when a v2 Cloud SQL instance should
		 * preferably be restarted for system maintenance purposes.
		 */
		maintenanceWindow?: MaintenanceWindow;

		/**
		 * The pricing plan for this instance. This can be either <code>PER_USE</code>
		 * or <code>PACKAGE</code>. Only <code>PER_USE</code> is supported for Second
		 * Generation instances.
		 */
		pricingPlan?: SettingsPricingPlan | null;

		/**
		 * The type of replication this instance uses. This can be either
		 * <code>ASYNCHRONOUS</code> or <code>SYNCHRONOUS</code>. This property is
		 * only applicable to First Generation instances.
		 */
		replicationType?: SettingsReplicationType | null;

		/**
		 * The version of instance settings. This is a required field for update
		 * method to make sure concurrent updates are handled properly. During update,
		 * use the most recent settingsVersion value for this instance and do not try
		 * to update this value.
		 */
		settingsVersion?: string | null;

		/**
		 * Configuration to increase storage size automatically. The default value is
		 * true. Not used for First Generation instances.
		 */
		storageAutoResize?: boolean | null;

		/**
		 * The maximum size to which storage capacity can be automatically increased.
		 * The default value is 0, which specifies that there is no limit. Not used
		 * for First Generation instances.
		 */
		storageAutoResizeLimit?: string | null;

		/**
		 * The tier (or machine type) for this instance, for example
		 * <code>db-n1-standard-1</code> (MySQL instances) or
		 * <code>db-custom-1-3840</code> (PostgreSQL instances). For MySQL instances,
		 * this property determines whether the instance is First or Second
		 * Generation. For more information, see <a
		 * href="/sql/docs/db_path/instance-settings">Instance Settings</a>.
		 */
		tier?: string | null;

		/**
		 * User-provided labels, represented as a dictionary where each label is a
		 * single key value pair.
		 */
		userLabels?: {[id: string]: string };
	}

	/** Database instance settings. */
	export interface SettingsFormProperties {

		/**
		 * The activation policy specifies when the instance is activated; it is
		 * applicable only when the instance state is <code>RUNNABLE</code>. Valid
		 * values: <br><code>ALWAYS</code>: The instance is on, and remains so even in
		 * the absence of connection requests. <br><code>NEVER</code>: The instance is
		 * off; it is not activated, even if a connection request arrives.
		 * <br><code>ON_DEMAND</code>: First Generation instances only. The instance
		 * responds to incoming requests, and turns itself off when not in use.
		 * Instances with <code>PER_USE</code> pricing turn off after 15 minutes of
		 * inactivity. Instances with <code>PER_PACKAGE</code> pricing turn off after
		 * 12 hours of inactivity.
		 */
		activationPolicy: FormControl<SettingsActivationPolicy | null | undefined>,

		/**
		 * Availability type (PostgreSQL and MySQL instances only). Potential values:
		 * <br><code>ZONAL</code>: The instance serves data from only one zone.
		 * Outages in that zone affect data accessibility. <br><code>REGIONAL</code>:
		 * The instance can serve data from more than one zone in a region (it is
		 * highly available). <br>For more information, see <a
		 * href="https://cloud.google.com/sql/docs/postgres/high-availability">Overview
		 * of the High Availability Configuration</a>.
		 */
		availabilityType: FormControl<SettingsAvailabilityType | null | undefined>,

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * database flags for crash-safe replication are enabled. This property is
		 * only applicable to First Generation instances.
		 */
		crashSafeReplicationEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The size of data disk, in GB. The data disk size minimum is 10GB. Not used
		 * for First Generation instances.
		 */
		dataDiskSizeGb: FormControl<string | null | undefined>,

		/**
		 * The type of data disk: <code>PD_SSD</code> (default) or
		 * <code>PD_HDD</code>. Not used for First Generation instances.
		 */
		dataDiskType: FormControl<SettingsDataDiskType | null | undefined>,

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * replication is enabled or not.
		 */
		databaseReplicationEnabled: FormControl<boolean | null | undefined>,

		/** This is always <code>sql#settings</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The pricing plan for this instance. This can be either <code>PER_USE</code>
		 * or <code>PACKAGE</code>. Only <code>PER_USE</code> is supported for Second
		 * Generation instances.
		 */
		pricingPlan: FormControl<SettingsPricingPlan | null | undefined>,

		/**
		 * The type of replication this instance uses. This can be either
		 * <code>ASYNCHRONOUS</code> or <code>SYNCHRONOUS</code>. This property is
		 * only applicable to First Generation instances.
		 */
		replicationType: FormControl<SettingsReplicationType | null | undefined>,

		/**
		 * The version of instance settings. This is a required field for update
		 * method to make sure concurrent updates are handled properly. During update,
		 * use the most recent settingsVersion value for this instance and do not try
		 * to update this value.
		 */
		settingsVersion: FormControl<string | null | undefined>,

		/**
		 * Configuration to increase storage size automatically. The default value is
		 * true. Not used for First Generation instances.
		 */
		storageAutoResize: FormControl<boolean | null | undefined>,

		/**
		 * The maximum size to which storage capacity can be automatically increased.
		 * The default value is 0, which specifies that there is no limit. Not used
		 * for First Generation instances.
		 */
		storageAutoResizeLimit: FormControl<string | null | undefined>,

		/**
		 * The tier (or machine type) for this instance, for example
		 * <code>db-n1-standard-1</code> (MySQL instances) or
		 * <code>db-custom-1-3840</code> (PostgreSQL instances). For MySQL instances,
		 * this property determines whether the instance is First or Second
		 * Generation. For more information, see <a
		 * href="/sql/docs/db_path/instance-settings">Instance Settings</a>.
		 */
		tier: FormControl<string | null | undefined>,

		/**
		 * User-provided labels, represented as a dictionary where each label is a
		 * single key value pair.
		 */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			activationPolicy: new FormControl<SettingsActivationPolicy | null | undefined>(undefined),
			availabilityType: new FormControl<SettingsAvailabilityType | null | undefined>(undefined),
			crashSafeReplicationEnabled: new FormControl<boolean | null | undefined>(undefined),
			dataDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			dataDiskType: new FormControl<SettingsDataDiskType | null | undefined>(undefined),
			databaseReplicationEnabled: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pricingPlan: new FormControl<SettingsPricingPlan | null | undefined>(undefined),
			replicationType: new FormControl<SettingsReplicationType | null | undefined>(undefined),
			settingsVersion: new FormControl<string | null | undefined>(undefined),
			storageAutoResize: new FormControl<boolean | null | undefined>(undefined),
			storageAutoResizeLimit: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum SettingsActivationPolicy { SQL_ACTIVATION_POLICY_UNSPECIFIED = 0, ALWAYS = 1, NEVER = 2, ON_DEMAND = 3 }

	export enum SettingsAvailabilityType { SQL_AVAILABILITY_TYPE_UNSPECIFIED = 0, ZONAL = 1, REGIONAL = 2 }

	export enum SettingsDataDiskType { SQL_DATA_DISK_TYPE_UNSPECIFIED = 0, PD_SSD = 1, PD_HDD = 2, OBSOLETE_LOCAL_SSD = 3 }


	/** IP Management configuration. */
	export interface IpConfiguration {

		/**
		 * The list of external networks that are allowed to connect to the instance
		 * using the IP. In <a
		 * href="http://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation">CIDR
		 * notation</a>, also known as 'slash' notation (e.g.
		 * <code>192.168.100.0/24</code>).
		 */
		authorizedNetworks?: Array<AclEntry>;

		/** Whether the instance should be assigned an IP address or not. */
		ipv4Enabled?: boolean | null;

		/**
		 * The resource link for the VPC network from which the Cloud SQL instance is
		 * accessible for private IP. For example,
		 * <code>/projects/myProject/global/networks/default</code>. This setting can
		 * be updated, but it cannot be removed after it is set.
		 */
		privateNetwork?: string | null;

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl?: boolean | null;
	}

	/** IP Management configuration. */
	export interface IpConfigurationFormProperties {

		/** Whether the instance should be assigned an IP address or not. */
		ipv4Enabled: FormControl<boolean | null | undefined>,

		/**
		 * The resource link for the VPC network from which the Cloud SQL instance is
		 * accessible for private IP. For example,
		 * <code>/projects/myProject/global/networks/default</code>. This setting can
		 * be updated, but it cannot be removed after it is set.
		 */
		privateNetwork: FormControl<string | null | undefined>,

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateIpConfigurationFormGroup() {
		return new FormGroup<IpConfigurationFormProperties>({
			ipv4Enabled: new FormControl<boolean | null | undefined>(undefined),
			privateNetwork: new FormControl<string | null | undefined>(undefined),
			requireSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Preferred location. This specifies where a Cloud SQL instance should
	 * preferably be located, either in a specific Compute Engine zone, or
	 * co-located with an App Engine application. Note that if the preferred
	 * location is not available, the instance will be located as close as possible
	 * within the region. Only one location may be specified.
	 */
	export interface LocationPreference {

		/**
		 * The AppEngine application to follow, it must be in the same region as the
		 * Cloud SQL instance.
		 */
		followGaeApplication?: string | null;

		/** This is always <code>sql#locationPreference</code>. */
		kind?: string | null;

		/**
		 * The preferred Compute Engine zone (e.g. us-central1-a, us-central1-b,
		 * etc.).
		 */
		zone?: string | null;
	}

	/**
	 * Preferred location. This specifies where a Cloud SQL instance should
	 * preferably be located, either in a specific Compute Engine zone, or
	 * co-located with an App Engine application. Note that if the preferred
	 * location is not available, the instance will be located as close as possible
	 * within the region. Only one location may be specified.
	 */
	export interface LocationPreferenceFormProperties {

		/**
		 * The AppEngine application to follow, it must be in the same region as the
		 * Cloud SQL instance.
		 */
		followGaeApplication: FormControl<string | null | undefined>,

		/** This is always <code>sql#locationPreference</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The preferred Compute Engine zone (e.g. us-central1-a, us-central1-b,
		 * etc.).
		 */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateLocationPreferenceFormGroup() {
		return new FormGroup<LocationPreferenceFormProperties>({
			followGaeApplication: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Maintenance window. This specifies when a v2 Cloud SQL instance should
	 * preferably be restarted for system maintenance purposes.
	 */
	export interface MaintenanceWindow {

		/** day of week (1-7), starting on Monday. */
		day?: number | null;

		/** hour of day - 0 to 23. */
		hour?: number | null;

		/** This is always <code>sql#maintenanceWindow</code>. */
		kind?: string | null;

		/**
		 * Maintenance timing setting: <code>canary</code> (Earlier) or
		 * <code>stable</code> (Later). <br /><a
		 * href="/sql/docs/db_path/instance-settings#maintenance-timing-2ndgen">
		 * Learn more</a>.
		 */
		updateTrack?: MaintenanceWindowUpdateTrack | null;
	}

	/**
	 * Maintenance window. This specifies when a v2 Cloud SQL instance should
	 * preferably be restarted for system maintenance purposes.
	 */
	export interface MaintenanceWindowFormProperties {

		/** day of week (1-7), starting on Monday. */
		day: FormControl<number | null | undefined>,

		/** hour of day - 0 to 23. */
		hour: FormControl<number | null | undefined>,

		/** This is always <code>sql#maintenanceWindow</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * Maintenance timing setting: <code>canary</code> (Earlier) or
		 * <code>stable</code> (Later). <br /><a
		 * href="/sql/docs/db_path/instance-settings#maintenance-timing-2ndgen">
		 * Learn more</a>.
		 */
		updateTrack: FormControl<MaintenanceWindowUpdateTrack | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updateTrack: new FormControl<MaintenanceWindowUpdateTrack | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowUpdateTrack { SQL_UPDATE_TRACK_UNSPECIFIED = 0, canary = 1, stable = 2 }

	export enum SettingsPricingPlan { SQL_PRICING_PLAN_UNSPECIFIED = 0, PACKAGE = 1, PER_USE = 2 }

	export enum SettingsReplicationType { SQL_REPLICATION_TYPE_UNSPECIFIED = 0, SYNCHRONOUS = 1, ASYNCHRONOUS = 2 }

	export enum DatabaseInstanceState { SQL_INSTANCE_STATE_UNSPECIFIED = 0, RUNNABLE = 1, SUSPENDED = 2, PENDING_DELETE = 3, PENDING_CREATE = 4, MAINTENANCE = 5, FAILED = 6 }


	/** Database list response. */
	export interface DatabasesListResponse {

		/** List of database resources in the instance. */
		items?: Array<Database>;

		/** This is always <code>sql#databasesList</code>. */
		kind?: string | null;
	}

	/** Database list response. */
	export interface DatabasesListResponseFormProperties {

		/** This is always <code>sql#databasesList</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatabasesListResponseFormGroup() {
		return new FormGroup<DatabasesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration for connecting to the on-premises master. */
	export interface DemoteMasterConfiguration {

		/** This is always <code>sql#demoteMasterConfiguration</code>. */
		kind?: string | null;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
	}

	/** Read-replica configuration for connecting to the on-premises master. */
	export interface DemoteMasterConfigurationFormProperties {

		/** This is always <code>sql#demoteMasterConfiguration</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDemoteMasterConfigurationFormGroup() {
		return new FormGroup<DemoteMasterConfigurationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface DemoteMasterMySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string | null;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate. The format of the slave's private
		 * key can be either PKCS #1 or PKCS #8.
		 */
		clientKey?: string | null;

		/** This is always <code>sql#demoteMasterMysqlReplicaConfiguration</code>. */
		kind?: string | null;

		/** The password for the replication connection. */
		password?: string | null;

		/** The username for the replication connection. */
		username?: string | null;
	}

	/** Read-replica configuration specific to MySQL databases. */
	export interface DemoteMasterMySqlReplicaConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate. The format of the slave's private
		 * key can be either PKCS #1 or PKCS #8.
		 */
		clientKey: FormControl<string | null | undefined>,

		/** This is always <code>sql#demoteMasterMysqlReplicaConfiguration</code>. */
		kind: FormControl<string | null | undefined>,

		/** The password for the replication connection. */
		password: FormControl<string | null | undefined>,

		/** The username for the replication connection. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDemoteMasterMySqlReplicaConfigurationFormGroup() {
		return new FormGroup<DemoteMasterMySqlReplicaConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance demote master context. */
	export interface DemoteMasterContext {

		/** This is always <code>sql#demoteMasterContext</code>. */
		kind?: string | null;

		/**
		 * The name of the instance which will act as on-premises master in the
		 * replication setup.
		 */
		masterInstanceName?: string | null;

		/** Read-replica configuration for connecting to the on-premises master. */
		replicaConfiguration?: DemoteMasterConfiguration;

		/**
		 * Verify GTID consistency for demote operation. Default value:
		 * <code>True</code>. Second Generation instances only.  Setting this flag to
		 * false enables you to bypass GTID consistency check between on-premises
		 * master and Cloud SQL instance during the demotion operation but also
		 * exposes you to the risk of future replication failures. Change the value
		 * only if you know the reason for the GTID divergence and are confident that
		 * doing so will not cause any replication issues.
		 */
		verifyGtidConsistency?: boolean | null;
	}

	/** Database instance demote master context. */
	export interface DemoteMasterContextFormProperties {

		/** This is always <code>sql#demoteMasterContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The name of the instance which will act as on-premises master in the
		 * replication setup.
		 */
		masterInstanceName: FormControl<string | null | undefined>,

		/**
		 * Verify GTID consistency for demote operation. Default value:
		 * <code>True</code>. Second Generation instances only.  Setting this flag to
		 * false enables you to bypass GTID consistency check between on-premises
		 * master and Cloud SQL instance during the demotion operation but also
		 * exposes you to the risk of future replication failures. Change the value
		 * only if you know the reason for the GTID divergence and are confident that
		 * doing so will not cause any replication issues.
		 */
		verifyGtidConsistency: FormControl<boolean | null | undefined>,
	}
	export function CreateDemoteMasterContextFormGroup() {
		return new FormGroup<DemoteMasterContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			masterInstanceName: new FormControl<string | null | undefined>(undefined),
			verifyGtidConsistency: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Database instance export context. */
	export interface ExportContext {

		/** Options for exporting data as CSV. */
		csvExportOptions?: ExportContextCsvExportOptions;

		/**
		 * Databases to be exported. <br /> <b>MySQL instances:</b> If
		 * <code>fileType</code> is <code>SQL</code> and no database is specified, all
		 * databases are exported, except for the <code>mysql</code> system database.
		 * If <code>fileType</code> is <code>CSV</code>, you can specify one database,
		 * either by using this property or by using the
		 * <code>csvExportOptions.selectQuery</code> property, which takes precedence
		 * over this property. <br /> <b>PostgreSQL instances:</b> You must specify
		 * one database to be exported. If <code>fileType</code> is <code>CSV</code>,
		 * this database must match the one specified in the
		 * <code>csvExportOptions.selectQuery</code> property.
		 */
		databases?: Array<string>;

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType?: ExportContextFileType | null;

		/** This is always <code>sql#exportContext</code>. */
		kind?: string | null;

		/** Options for exporting data as SQL statements. */
		sqlExportOptions?: ExportContextSqlExportOptions;

		/**
		 * The path to the file in Google Cloud Storage where the export will be
		 * stored. The URI is in the form <code>gs:
		 * //bucketName/fileName</code>. If the file already exists, the requests
		 * // succeeds, but the operation fails. If <code>fileType</code> is
		 * // <code>SQL</code> and the filename ends with .gz, the contents are
		 * // compressed.
		 */
		uri?: string | null;
	}

	/** Database instance export context. */
	export interface ExportContextFormProperties {

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType: FormControl<ExportContextFileType | null | undefined>,

		/** This is always <code>sql#exportContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The path to the file in Google Cloud Storage where the export will be
		 * stored. The URI is in the form <code>gs:
		 * //bucketName/fileName</code>. If the file already exists, the requests
		 * // succeeds, but the operation fails. If <code>fileType</code> is
		 * // <code>SQL</code> and the filename ends with .gz, the contents are
		 * // compressed.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateExportContextFormGroup() {
		return new FormGroup<ExportContextFormProperties>({
			fileType: new FormControl<ExportContextFileType | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportContextCsvExportOptions {

		/** The select query used to extract the data. */
		selectQuery?: string | null;
	}
	export interface ExportContextCsvExportOptionsFormProperties {

		/** The select query used to extract the data. */
		selectQuery: FormControl<string | null | undefined>,
	}
	export function CreateExportContextCsvExportOptionsFormGroup() {
		return new FormGroup<ExportContextCsvExportOptionsFormProperties>({
			selectQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportContextFileType { SQL_FILE_TYPE_UNSPECIFIED = 0, SQL = 1, CSV = 2, BAK = 3 }

	export interface ExportContextSqlExportOptions {

		/** Options for exporting from MySQL. */
		mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;

		/** Export only schemas. */
		schemaOnly?: boolean | null;

		/**
		 * Tables to export, or that were exported, from the specified database. If
		 * you specify tables, specify one and only one database. For PostgreSQL
		 * instances, you can specify only one table.
		 */
		tables?: Array<string>;
	}
	export interface ExportContextSqlExportOptionsFormProperties {

		/** Export only schemas. */
		schemaOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateExportContextSqlExportOptionsFormGroup() {
		return new FormGroup<ExportContextSqlExportOptionsFormProperties>({
			schemaOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExportContextSqlExportOptionsMysqlExportOptions {

		/**
		 * Option to include SQL statement required to set up replication.
		 * If set to <code>1</code>, the dump file includes
		 * a CHANGE MASTER TO statement with the binary log coordinates.
		 * If set to <code>2</code>, the CHANGE MASTER TO statement is written as
		 * a SQL comment, and has no effect.
		 * All other values are ignored.
		 */
		masterData?: number | null;
	}
	export interface ExportContextSqlExportOptionsMysqlExportOptionsFormProperties {

		/**
		 * Option to include SQL statement required to set up replication.
		 * If set to <code>1</code>, the dump file includes
		 * a CHANGE MASTER TO statement with the binary log coordinates.
		 * If set to <code>2</code>, the CHANGE MASTER TO statement is written as
		 * a SQL comment, and has no effect.
		 * All other values are ignored.
		 */
		masterData: FormControl<number | null | undefined>,
	}
	export function CreateExportContextSqlExportOptionsMysqlExportOptionsFormGroup() {
		return new FormGroup<ExportContextSqlExportOptionsMysqlExportOptionsFormProperties>({
			masterData: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Database instance failover context. */
	export interface FailoverContext {

		/** This is always <code>sql#failoverContext</code>. */
		kind?: string | null;

		/**
		 * The current settings version of this instance. Request will be rejected if
		 * this version doesn't match the current settings version.
		 */
		settingsVersion?: string | null;
	}

	/** Database instance failover context. */
	export interface FailoverContextFormProperties {

		/** This is always <code>sql#failoverContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The current settings version of this instance. Request will be rejected if
		 * this version doesn't match the current settings version.
		 */
		settingsVersion: FormControl<string | null | undefined>,
	}
	export function CreateFailoverContextFormGroup() {
		return new FormGroup<FailoverContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			settingsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A flag resource. */
	export interface Flag {

		/**
		 * Use this field if only certain integers are accepted. Can be combined
		 * with min_value and max_value to add additional values.
		 */
		allowedIntValues?: Array<string>;

		/**
		 * For <code>STRING</code> flags, a list of strings that the value can be set
		 * to.
		 */
		allowedStringValues?: Array<string>;

		/**
		 * The database version this flag applies to. Can be <code>MYSQL_5_5</code>,
		 * <code>MYSQL_5_6</code>, or <code>MYSQL_5_7</code>. <code>MYSQL_5_7</code>
		 * is applicable only to Second Generation instances.
		 */
		appliesTo?: Array<DatabaseInstanceDatabaseVersion>;

		/** Whether or not the flag is considered in beta. */
		inBeta?: boolean | null;

		/** This is always <code>sql#flag</code>. */
		kind?: string | null;

		/** For <code>INTEGER</code> flags, the maximum allowed value. */
		maxValue?: string | null;

		/** For <code>INTEGER</code> flags, the minimum allowed value. */
		minValue?: string | null;

		/**
		 * This is the name of the flag. Flag names always use underscores, not
		 * hyphens, e.g. <code>max_allowed_packet</code>
		 */
		name?: string | null;

		/**
		 * Indicates whether changing this flag will trigger a database restart. Only
		 * applicable to Second Generation instances.
		 */
		requiresRestart?: boolean | null;

		/**
		 * The type of the flag. Flags are typed to being <code>BOOLEAN</code>,
		 * <code>STRING</code>, <code>INTEGER</code> or <code>NONE</code>.
		 * <code>NONE</code> is used for flags which do not take a value, such as
		 * <code>skip_grant_tables</code>.
		 */
		type?: FlagType | null;
	}

	/** A flag resource. */
	export interface FlagFormProperties {

		/** Whether or not the flag is considered in beta. */
		inBeta: FormControl<boolean | null | undefined>,

		/** This is always <code>sql#flag</code>. */
		kind: FormControl<string | null | undefined>,

		/** For <code>INTEGER</code> flags, the maximum allowed value. */
		maxValue: FormControl<string | null | undefined>,

		/** For <code>INTEGER</code> flags, the minimum allowed value. */
		minValue: FormControl<string | null | undefined>,

		/**
		 * This is the name of the flag. Flag names always use underscores, not
		 * hyphens, e.g. <code>max_allowed_packet</code>
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates whether changing this flag will trigger a database restart. Only
		 * applicable to Second Generation instances.
		 */
		requiresRestart: FormControl<boolean | null | undefined>,

		/**
		 * The type of the flag. Flags are typed to being <code>BOOLEAN</code>,
		 * <code>STRING</code>, <code>INTEGER</code> or <code>NONE</code>.
		 * <code>NONE</code> is used for flags which do not take a value, such as
		 * <code>skip_grant_tables</code>.
		 */
		type: FormControl<FlagType | null | undefined>,
	}
	export function CreateFlagFormGroup() {
		return new FormGroup<FlagFormProperties>({
			inBeta: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requiresRestart: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<FlagType | null | undefined>(undefined),
		});

	}

	export enum FlagType { SQL_FLAG_TYPE_UNSPECIFIED = 0, BOOLEAN = 1, STRING = 2, INTEGER = 3, NONE = 4, MYSQL_TIMEZONE_OFFSET = 5, FLOAT = 6, REPEATED_STRING = 7 }


	/** Flags list response. */
	export interface FlagsListResponse {

		/** List of flags. */
		items?: Array<Flag>;

		/** This is always <code>sql#flagsList</code>. */
		kind?: string | null;
	}

	/** Flags list response. */
	export interface FlagsListResponseFormProperties {

		/** This is always <code>sql#flagsList</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFlagsListResponseFormGroup() {
		return new FormGroup<FlagsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance import context. */
	export interface ImportContext {

		/** Import parameters specific to SQL Server .BAK files */
		bakImportOptions?: ImportContextBakImportOptions;

		/** Options for importing data as CSV. */
		csvImportOptions?: ImportContextCsvImportOptions;

		/**
		 * The target database for the import. If <code>fileType</code> is
		 * <code>SQL</code>, this field is required only if the import file does not
		 * specify a database, and is overridden by any database specification in the
		 * import file. If <code>fileType</code> is <code>CSV</code>, one database
		 * must be specified.
		 */
		database?: string | null;

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType?: ExportContextFileType | null;

		/** The PostgreSQL user for this import operation. PostgreSQL instances only. */
		importUser?: string | null;

		/** This is always <code>sql#importContext</code>. */
		kind?: string | null;

		/**
		 * Path to the import file in Cloud Storage, in the form
		 * <code>gs:
		 * //bucketName/fileName</code>. Compressed gzip files (.gz) are supported
		 * // when <code>fileType</code> is <code>SQL</code>. The instance must have
		 * // write permissions to the bucket and read access to the file.
		 */
		uri?: string | null;
	}

	/** Database instance import context. */
	export interface ImportContextFormProperties {

		/**
		 * The target database for the import. If <code>fileType</code> is
		 * <code>SQL</code>, this field is required only if the import file does not
		 * specify a database, and is overridden by any database specification in the
		 * import file. If <code>fileType</code> is <code>CSV</code>, one database
		 * must be specified.
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType: FormControl<ExportContextFileType | null | undefined>,

		/** The PostgreSQL user for this import operation. PostgreSQL instances only. */
		importUser: FormControl<string | null | undefined>,

		/** This is always <code>sql#importContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * Path to the import file in Cloud Storage, in the form
		 * <code>gs:
		 * //bucketName/fileName</code>. Compressed gzip files (.gz) are supported
		 * // when <code>fileType</code> is <code>SQL</code>. The instance must have
		 * // write permissions to the bucket and read access to the file.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImportContextFormGroup() {
		return new FormGroup<ImportContextFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<ExportContextFileType | null | undefined>(undefined),
			importUser: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportContextBakImportOptions {
		encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
	}
	export interface ImportContextBakImportOptionsFormProperties {
	}
	export function CreateImportContextBakImportOptionsFormGroup() {
		return new FormGroup<ImportContextBakImportOptionsFormProperties>({
		});

	}

	export interface ImportContextBakImportOptionsEncryptionOptions {

		/**
		 * Path to the Certificate (.cer) in Cloud Storage, in the form
		 * <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		certPath?: string | null;

		/** Password that encrypts the private key */
		pvkPassword?: string | null;

		/**
		 * Path to the Certificate Private Key (.pvk)  in Cloud Storage, in the
		 * form <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		pvkPath?: string | null;
	}
	export interface ImportContextBakImportOptionsEncryptionOptionsFormProperties {

		/**
		 * Path to the Certificate (.cer) in Cloud Storage, in the form
		 * <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		certPath: FormControl<string | null | undefined>,

		/** Password that encrypts the private key */
		pvkPassword: FormControl<string | null | undefined>,

		/**
		 * Path to the Certificate Private Key (.pvk)  in Cloud Storage, in the
		 * form <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		pvkPath: FormControl<string | null | undefined>,
	}
	export function CreateImportContextBakImportOptionsEncryptionOptionsFormGroup() {
		return new FormGroup<ImportContextBakImportOptionsEncryptionOptionsFormProperties>({
			certPath: new FormControl<string | null | undefined>(undefined),
			pvkPassword: new FormControl<string | null | undefined>(undefined),
			pvkPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportContextCsvImportOptions {

		/**
		 * The columns to which CSV data is imported. If not specified, all columns
		 * of the database table are loaded with CSV data.
		 */
		columns?: Array<string>;

		/** The table to which CSV data is imported. */
		table?: string | null;
	}
	export interface ImportContextCsvImportOptionsFormProperties {

		/** The table to which CSV data is imported. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateImportContextCsvImportOptionsFormGroup() {
		return new FormGroup<ImportContextCsvImportOptionsFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance clone request. */
	export interface InstancesCloneRequest {

		/** Database instance clone context. */
		cloneContext?: CloneContext;
	}

	/** Database instance clone request. */
	export interface InstancesCloneRequestFormProperties {
	}
	export function CreateInstancesCloneRequestFormGroup() {
		return new FormGroup<InstancesCloneRequestFormProperties>({
		});

	}


	/** Database demote master request. */
	export interface InstancesDemoteMasterRequest {

		/** Database instance demote master context. */
		demoteMasterContext?: DemoteMasterContext;
	}

	/** Database demote master request. */
	export interface InstancesDemoteMasterRequestFormProperties {
	}
	export function CreateInstancesDemoteMasterRequestFormGroup() {
		return new FormGroup<InstancesDemoteMasterRequestFormProperties>({
		});

	}


	/** Database instance export request. */
	export interface InstancesExportRequest {

		/** Database instance export context. */
		exportContext?: ExportContext;
	}

	/** Database instance export request. */
	export interface InstancesExportRequestFormProperties {
	}
	export function CreateInstancesExportRequestFormGroup() {
		return new FormGroup<InstancesExportRequestFormProperties>({
		});

	}


	/** Instance failover request. */
	export interface InstancesFailoverRequest {

		/** Database instance failover context. */
		failoverContext?: FailoverContext;
	}

	/** Instance failover request. */
	export interface InstancesFailoverRequestFormProperties {
	}
	export function CreateInstancesFailoverRequestFormGroup() {
		return new FormGroup<InstancesFailoverRequestFormProperties>({
		});

	}


	/** Database instance import request. */
	export interface InstancesImportRequest {

		/** Database instance import context. */
		importContext?: ImportContext;
	}

	/** Database instance import request. */
	export interface InstancesImportRequestFormProperties {
	}
	export function CreateInstancesImportRequestFormGroup() {
		return new FormGroup<InstancesImportRequestFormProperties>({
		});

	}


	/** Database instances list response. */
	export interface InstancesListResponse {

		/** List of database instance resources. */
		items?: Array<DatabaseInstance>;

		/** This is always <code>sql#instancesList</code>. */
		kind?: string | null;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string | null;

		/** List of warnings that occurred while handling the request. */
		warnings?: Array<ApiWarning>;
	}

	/** Database instances list response. */
	export interface InstancesListResponseFormProperties {

		/** This is always <code>sql#instancesList</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateInstancesListResponseFormGroup() {
		return new FormGroup<InstancesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instances ListServerCas response. */
	export interface InstancesListServerCasResponse {
		activeVersion?: string | null;

		/** List of server CA certificates for the instance. */
		certs?: Array<SslCert>;

		/** This is always <code>sql#instancesListServerCas</code>. */
		kind?: string | null;
	}

	/** Instances ListServerCas response. */
	export interface InstancesListServerCasResponseFormProperties {
		activeVersion: FormControl<string | null | undefined>,

		/** This is always <code>sql#instancesListServerCas</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateInstancesListServerCasResponseFormGroup() {
		return new FormGroup<InstancesListServerCasResponseFormProperties>({
			activeVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance restore backup request. */
	export interface InstancesRestoreBackupRequest {

		/**
		 * Database instance restore from backup context.
		 * Backup context contains source instance id and project id.
		 */
		restoreBackupContext?: RestoreBackupContext;
	}

	/** Database instance restore backup request. */
	export interface InstancesRestoreBackupRequestFormProperties {
	}
	export function CreateInstancesRestoreBackupRequestFormGroup() {
		return new FormGroup<InstancesRestoreBackupRequestFormProperties>({
		});

	}


	/**
	 * Database instance restore from backup context.
	 * Backup context contains source instance id and project id.
	 */
	export interface RestoreBackupContext {

		/** The ID of the backup run to restore from. */
		backupRunId?: string | null;

		/** The ID of the instance that the backup was taken from. */
		instanceId?: string | null;

		/** This is always <code>sql#restoreBackupContext</code>. */
		kind?: string | null;

		/** The full project ID of the source instance. */
		project?: string | null;
	}

	/**
	 * Database instance restore from backup context.
	 * Backup context contains source instance id and project id.
	 */
	export interface RestoreBackupContextFormProperties {

		/** The ID of the backup run to restore from. */
		backupRunId: FormControl<string | null | undefined>,

		/** The ID of the instance that the backup was taken from. */
		instanceId: FormControl<string | null | undefined>,

		/** This is always <code>sql#restoreBackupContext</code>. */
		kind: FormControl<string | null | undefined>,

		/** The full project ID of the source instance. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateRestoreBackupContextFormGroup() {
		return new FormGroup<RestoreBackupContextFormProperties>({
			backupRunId: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rotate Server CA request. */
	export interface InstancesRotateServerCaRequest {

		/** Instance rotate server CA context. */
		rotateServerCaContext?: RotateServerCaContext;
	}

	/** Rotate Server CA request. */
	export interface InstancesRotateServerCaRequestFormProperties {
	}
	export function CreateInstancesRotateServerCaRequestFormGroup() {
		return new FormGroup<InstancesRotateServerCaRequestFormProperties>({
		});

	}


	/** Instance rotate server CA context. */
	export interface RotateServerCaContext {

		/** This is always <code>sql#rotateServerCaContext</code>. */
		kind?: string | null;

		/**
		 * The fingerprint of the next version to be rotated to. If left unspecified,
		 * will be rotated to the most recently added server CA version.
		 */
		nextVersion?: string | null;
	}

	/** Instance rotate server CA context. */
	export interface RotateServerCaContextFormProperties {

		/** This is always <code>sql#rotateServerCaContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The fingerprint of the next version to be rotated to. If left unspecified,
		 * will be rotated to the most recently added server CA version.
		 */
		nextVersion: FormControl<string | null | undefined>,
	}
	export function CreateRotateServerCaContextFormGroup() {
		return new FormGroup<RotateServerCaContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance truncate log request. */
	export interface InstancesTruncateLogRequest {

		/** Database Instance truncate log context. */
		truncateLogContext?: TruncateLogContext;
	}

	/** Instance truncate log request. */
	export interface InstancesTruncateLogRequestFormProperties {
	}
	export function CreateInstancesTruncateLogRequestFormGroup() {
		return new FormGroup<InstancesTruncateLogRequestFormProperties>({
		});

	}


	/** Database Instance truncate log context. */
	export interface TruncateLogContext {

		/** This is always <code>sql#truncateLogContext</code>. */
		kind?: string | null;

		/**
		 * The type of log to truncate. Valid values are
		 * <code>MYSQL_GENERAL_TABLE</code> and <code>MYSQL_SLOW_TABLE</code>.
		 */
		logType?: string | null;
	}

	/** Database Instance truncate log context. */
	export interface TruncateLogContextFormProperties {

		/** This is always <code>sql#truncateLogContext</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The type of log to truncate. Valid values are
		 * <code>MYSQL_GENERAL_TABLE</code> and <code>MYSQL_SLOW_TABLE</code>.
		 */
		logType: FormControl<string | null | undefined>,
	}
	export function CreateTruncateLogContextFormGroup() {
		return new FormGroup<TruncateLogContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			logType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An Operation resource.&nbsp;For successful operations that return an
	 * Operation resource, only the fields relevant to the operation are populated
	 * in the resource.
	 */
	export interface Operation {

		/**
		 * The time this operation finished in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime?: string | null;

		/** Database instance operation errors list wrapper. */
		error?: OperationErrors;

		/** Database instance export context. */
		exportContext?: ExportContext;

		/** Database instance import context. */
		importContext?: ImportContext;

		/**
		 * The time this operation was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		insertTime?: string | null;

		/** This is always <code>sql#operation</code>. */
		kind?: string | null;

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		name?: string | null;

		/**
		 * The type of the operation. Valid values are <code>CREATE</code>,
		 * <code>DELETE</code>, <code>UPDATE</code>, <code>RESTART</code>,
		 * <code>IMPORT</code>, <code>EXPORT</code>, <code>BACKUP_VOLUME</code>,
		 * <code>RESTORE_VOLUME</code>, <code>CREATE_USER</code>,
		 * <code>DELETE_USER</code>, <code>CREATE_DATABASE</code>,
		 * <code>DELETE_DATABASE</code> .
		 */
		operationType?: OperationOperationType | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/**
		 * The time this operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime?: string | null;

		/**
		 * The status of an operation. Valid values are <code>PENDING</code>,
		 * <code>RUNNING</code>, <code>DONE</code>,
		 * <code>SQL_OPERATION_STATUS_UNSPECIFIED</code>.
		 */
		status?: OperationStatus | null;

		/** Name of the database instance related to this operation. */
		targetId?: string | null;
		targetLink?: string | null;

		/** The project ID of the target instance related to this operation. */
		targetProject?: string | null;

		/** The email address of the user who initiated this operation. */
		user?: string | null;
	}

	/**
	 * An Operation resource.&nbsp;For successful operations that return an
	 * Operation resource, only the fields relevant to the operation are populated
	 * in the resource.
	 */
	export interface OperationFormProperties {

		/**
		 * The time this operation finished in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The time this operation was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		insertTime: FormControl<string | null | undefined>,

		/** This is always <code>sql#operation</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the operation. Valid values are <code>CREATE</code>,
		 * <code>DELETE</code>, <code>UPDATE</code>, <code>RESTART</code>,
		 * <code>IMPORT</code>, <code>EXPORT</code>, <code>BACKUP_VOLUME</code>,
		 * <code>RESTORE_VOLUME</code>, <code>CREATE_USER</code>,
		 * <code>DELETE_USER</code>, <code>CREATE_DATABASE</code>,
		 * <code>DELETE_DATABASE</code> .
		 */
		operationType: FormControl<OperationOperationType | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The time this operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * The status of an operation. Valid values are <code>PENDING</code>,
		 * <code>RUNNING</code>, <code>DONE</code>,
		 * <code>SQL_OPERATION_STATUS_UNSPECIFIED</code>.
		 */
		status: FormControl<OperationStatus | null | undefined>,

		/** Name of the database instance related to this operation. */
		targetId: FormControl<string | null | undefined>,
		targetLink: FormControl<string | null | undefined>,

		/** The project ID of the target instance related to this operation. */
		targetProject: FormControl<string | null | undefined>,

		/** The email address of the user who initiated this operation. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationOperationType | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetLink: new FormControl<string | null | undefined>(undefined),
			targetProject: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance operation errors list wrapper. */
	export interface OperationErrors {

		/** The list of errors encountered while processing this operation. */
		errors?: Array<OperationError>;

		/** This is always <code>sql#operationErrors</code>. */
		kind?: string | null;
	}

	/** Database instance operation errors list wrapper. */
	export interface OperationErrorsFormProperties {

		/** This is always <code>sql#operationErrors</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorsFormGroup() {
		return new FormGroup<OperationErrorsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationOperationType { SQL_OPERATION_TYPE_UNSPECIFIED = 0, IMPORT = 1, EXPORT = 2, CREATE = 3, UPDATE = 4, DELETE = 5, RESTART = 6, BACKUP = 7, SNAPSHOT = 8, BACKUP_VOLUME = 9, DELETE_VOLUME = 10, RESTORE_VOLUME = 11, INJECT_USER = 12, CLONE = 13, STOP_REPLICA = 14, START_REPLICA = 15, PROMOTE_REPLICA = 16, CREATE_REPLICA = 17, CREATE_USER = 18, DELETE_USER = 19, UPDATE_USER = 20, CREATE_DATABASE = 21, DELETE_DATABASE = 22, UPDATE_DATABASE = 23, FAILOVER = 24, DELETE_BACKUP = 25, RECREATE_REPLICA = 26, TRUNCATE_LOG = 27, DEMOTE_MASTER = 28, MAINTENANCE = 29, ENABLE_PRIVATE_IP = 30, DEFER_MAINTENANCE = 31, CREATE_CLONE = 32, RESCHEDULE_MAINTENANCE = 33, START_EXTERNAL_SYNC = 34 }

	export enum OperationStatus { SQL_OPERATION_STATUS_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, DONE = 3 }


	/** Database instance list operations response. */
	export interface OperationsListResponse {

		/** List of operation resources. */
		items?: Array<Operation>;

		/** This is always <code>sql#operationsList</code>. */
		kind?: string | null;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string | null;
	}

	/** Database instance list operations response. */
	export interface OperationsListResponseFormProperties {

		/** This is always <code>sql#operationsList</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOperationsListResponseFormGroup() {
		return new FormGroup<OperationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reschedule {

		/** Required. The type of the reschedule. */
		rescheduleType?: RescheduleRescheduleType | null;

		/**
		 * Optional. Timestamp when the maintenance shall be rescheduled to if
		 * reschedule_type=SPECIFIC_TIME, in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for
		 * example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		scheduleTime?: string | null;
	}
	export interface RescheduleFormProperties {

		/** Required. The type of the reschedule. */
		rescheduleType: FormControl<RescheduleRescheduleType | null | undefined>,

		/**
		 * Optional. Timestamp when the maintenance shall be rescheduled to if
		 * reschedule_type=SPECIFIC_TIME, in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for
		 * example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateRescheduleFormGroup() {
		return new FormGroup<RescheduleFormProperties>({
			rescheduleType: new FormControl<RescheduleRescheduleType | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RescheduleRescheduleType { RESCHEDULE_TYPE_UNSPECIFIED = 0, IMMEDIATE = 1, NEXT_AVAILABLE_WINDOW = 2, SPECIFIC_TIME = 3 }


	/** External master migration setting error. */
	export interface SqlExternalSyncSettingError {

		/** Additional information about the error encountered. */
		detail?: string | null;

		/** This is always <code>sql#migrationSettingError</code>. */
		kind?: string | null;

		/** Identifies the specific error that occurred. */
		type?: SqlExternalSyncSettingErrorType | null;
	}

	/** External master migration setting error. */
	export interface SqlExternalSyncSettingErrorFormProperties {

		/** Additional information about the error encountered. */
		detail: FormControl<string | null | undefined>,

		/** This is always <code>sql#migrationSettingError</code>. */
		kind: FormControl<string | null | undefined>,

		/** Identifies the specific error that occurred. */
		type: FormControl<SqlExternalSyncSettingErrorType | null | undefined>,
	}
	export function CreateSqlExternalSyncSettingErrorFormGroup() {
		return new FormGroup<SqlExternalSyncSettingErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SqlExternalSyncSettingErrorType | null | undefined>(undefined),
		});

	}

	export enum SqlExternalSyncSettingErrorType { SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED = 0, CONNECTION_FAILURE = 1, BINLOG_NOT_ENABLED = 2, INCOMPATIBLE_DATABASE_VERSION = 3, REPLICA_ALREADY_SETUP = 4, INSUFFICIENT_PRIVILEGE = 5, UNSUPPORTED_MIGRATION_TYPE = 6, NO_PGLOGICAL_INSTALLED = 7, PGLOGICAL_NODE_ALREADY_EXISTS = 8 }


	/** Reschedule options for maintenance windows. */
	export interface SqlInstancesRescheduleMaintenanceRequestBody {
		reschedule?: Reschedule;
	}

	/** Reschedule options for maintenance windows. */
	export interface SqlInstancesRescheduleMaintenanceRequestBodyFormProperties {
	}
	export function CreateSqlInstancesRescheduleMaintenanceRequestBodyFormGroup() {
		return new FormGroup<SqlInstancesRescheduleMaintenanceRequestBodyFormProperties>({
		});

	}


	/** Instance verify external sync settings response. */
	export interface SqlInstancesVerifyExternalSyncSettingsResponse {

		/** List of migration violations. */
		errors?: Array<SqlExternalSyncSettingError>;

		/** This is always <code>sql#migrationSettingErrorList</code>. */
		kind?: string | null;
	}

	/** Instance verify external sync settings response. */
	export interface SqlInstancesVerifyExternalSyncSettingsResponseFormProperties {

		/** This is always <code>sql#migrationSettingErrorList</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSqlInstancesVerifyExternalSyncSettingsResponseFormGroup() {
		return new FormGroup<SqlInstancesVerifyExternalSyncSettingsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Sql Server user on the Cloud SQL instance. */
	export interface SqlServerUserDetails {

		/** If the user has been disabled */
		disabled?: boolean | null;

		/** The server roles for this user */
		serverRoles?: Array<string>;
	}

	/** Represents a Sql Server user on the Cloud SQL instance. */
	export interface SqlServerUserDetailsFormProperties {

		/** If the user has been disabled */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSqlServerUserDetailsFormGroup() {
		return new FormGroup<SqlServerUserDetailsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SslCertDetail. */
	export interface SslCertDetail {

		/** SslCerts Resource */
		certInfo?: SslCert;

		/**
		 * The private key for the client cert, in pem format.  Keep private in order
		 * to protect your security.
		 */
		certPrivateKey?: string | null;
	}

	/** SslCertDetail. */
	export interface SslCertDetailFormProperties {

		/**
		 * The private key for the client cert, in pem format.  Keep private in order
		 * to protect your security.
		 */
		certPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateSslCertDetailFormGroup() {
		return new FormGroup<SslCertDetailFormProperties>({
			certPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts create ephemeral certificate request. */
	export interface SslCertsCreateEphemeralRequest {

		/** PEM encoded public key to include in the signed certificate. */
		public_key?: string | null;
	}

	/** SslCerts create ephemeral certificate request. */
	export interface SslCertsCreateEphemeralRequestFormProperties {

		/** PEM encoded public key to include in the signed certificate. */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsCreateEphemeralRequestFormGroup() {
		return new FormGroup<SslCertsCreateEphemeralRequestFormProperties>({
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts insert request. */
	export interface SslCertsInsertRequest {

		/**
		 * User supplied name.  Must be a distinct name from the other certificates
		 * for this instance.
		 */
		commonName?: string | null;
	}

	/** SslCerts insert request. */
	export interface SslCertsInsertRequestFormProperties {

		/**
		 * User supplied name.  Must be a distinct name from the other certificates
		 * for this instance.
		 */
		commonName: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsInsertRequestFormGroup() {
		return new FormGroup<SslCertsInsertRequestFormProperties>({
			commonName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCert insert response. */
	export interface SslCertsInsertResponse {

		/** SslCertDetail. */
		clientCert?: SslCertDetail;

		/** This is always <code>sql#sslCertsInsert</code>. */
		kind?: string | null;

		/**
		 * An Operation resource.&nbsp;For successful operations that return an
		 * Operation resource, only the fields relevant to the operation are populated
		 * in the resource.
		 */
		operation?: Operation;

		/** SslCerts Resource */
		serverCaCert?: SslCert;
	}

	/** SslCert insert response. */
	export interface SslCertsInsertResponseFormProperties {

		/** This is always <code>sql#sslCertsInsert</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsInsertResponseFormGroup() {
		return new FormGroup<SslCertsInsertResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts list response. */
	export interface SslCertsListResponse {

		/** List of client certificates for the instance. */
		items?: Array<SslCert>;

		/** This is always <code>sql#sslCertsList</code>. */
		kind?: string | null;
	}

	/** SslCerts list response. */
	export interface SslCertsListResponseFormProperties {

		/** This is always <code>sql#sslCertsList</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsListResponseFormGroup() {
		return new FormGroup<SslCertsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Cloud SQL service tier resource. */
	export interface Tier {

		/** The maximum disk size of this tier in bytes. */
		DiskQuota?: string | null;

		/** The maximum RAM usage of this tier in bytes. */
		RAM?: string | null;

		/** This is always <code>sql#tier</code>. */
		kind?: string | null;

		/** The applicable regions for this tier. */
		region?: Array<string>;

		/**
		 * An identifier for the machine type, for example, db-n1-standard-1. For
		 * related information, see <a href="/sql/pricing">Pricing</a>.
		 */
		tier?: string | null;
	}

	/** A Google Cloud SQL service tier resource. */
	export interface TierFormProperties {

		/** The maximum disk size of this tier in bytes. */
		DiskQuota: FormControl<string | null | undefined>,

		/** The maximum RAM usage of this tier in bytes. */
		RAM: FormControl<string | null | undefined>,

		/** This is always <code>sql#tier</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * An identifier for the machine type, for example, db-n1-standard-1. For
		 * related information, see <a href="/sql/pricing">Pricing</a>.
		 */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateTierFormGroup() {
		return new FormGroup<TierFormProperties>({
			DiskQuota: new FormControl<string | null | undefined>(undefined),
			RAM: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tiers list response. */
	export interface TiersListResponse {

		/** List of tiers. */
		items?: Array<Tier>;

		/** This is always <code>sql#tiersList</code>. */
		kind?: string | null;
	}

	/** Tiers list response. */
	export interface TiersListResponseFormProperties {

		/** This is always <code>sql#tiersList</code>. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTiersListResponseFormGroup() {
		return new FormGroup<TiersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud SQL user resource. */
	export interface User {

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag?: string | null;

		/**
		 * The host name from which the user can connect. For <code>insert</code>
		 * operations, host defaults to an empty string. For <code>update</code>
		 * operations, host is specified as part of the request URL. The host name
		 * cannot be updated after insertion.
		 */
		host?: string | null;

		/**
		 * The name of the Cloud SQL instance. This does not include the project ID.
		 * Can be omitted for <code>update</code> since it is already specified on the
		 * URL.
		 */
		instance?: string | null;

		/** This is always <code>sql#user</code>. */
		kind?: string | null;

		/**
		 * The name of the user in the Cloud SQL instance. Can be omitted for
		 * <code>update</code> since it is already specified in the URL.
		 */
		name?: string | null;

		/** The password for the user. */
		password?: string | null;

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable. Can be omitted for
		 * <code>update</code> since it is already specified on the URL.
		 */
		project?: string | null;

		/** Represents a Sql Server user on the Cloud SQL instance. */
		sqlserverUserDetails?: SqlServerUserDetails;
	}

	/** A Cloud SQL user resource. */
	export interface UserFormProperties {

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * The host name from which the user can connect. For <code>insert</code>
		 * operations, host defaults to an empty string. For <code>update</code>
		 * operations, host is specified as part of the request URL. The host name
		 * cannot be updated after insertion.
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The name of the Cloud SQL instance. This does not include the project ID.
		 * Can be omitted for <code>update</code> since it is already specified on the
		 * URL.
		 */
		instance: FormControl<string | null | undefined>,

		/** This is always <code>sql#user</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The name of the user in the Cloud SQL instance. Can be omitted for
		 * <code>update</code> since it is already specified in the URL.
		 */
		name: FormControl<string | null | undefined>,

		/** The password for the user. */
		password: FormControl<string | null | undefined>,

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable. Can be omitted for
		 * <code>update</code> since it is already specified on the URL.
		 */
		project: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User list response. */
	export interface UsersListResponse {

		/** List of user resources in the instance. */
		items?: Array<User>;

		/** This is always <code>sql#usersList</code>. */
		kind?: string | null;

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		nextPageToken?: string | null;
	}

	/** User list response. */
	export interface UsersListResponseFormProperties {

		/** This is always <code>sql#usersList</code>. */
		kind: FormControl<string | null | undefined>,

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateUsersListResponseFormGroup() {
		return new FormGroup<UsersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all available database flags for Cloud SQL instances.
		 * Get sql/v1beta4/flags
		 * @param {string} databaseVersion Database type and version you want to retrieve flags for. By default, this
		 * method returns flags for all database types and versions.
		 * @return {void} Successful response
		 */
		Sql_flags_list(databaseVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/flags?databaseVersion=' + (databaseVersion == null ? '' : encodeURIComponent(databaseVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists instances under a given project.
		 * Get sql/v1beta4/projects/{project}/instances
		 * @param {string} project Project ID of the project for which to list Cloud SQL instances.
		 * @param {string} filter A filter expression that filters resources listed in the response.
		 * The expression is in the form of field:value. For example,
		 * 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per
		 * their JSON representation, such as 'settings.userLabels.auto_start:true'.
		 * Multiple filter queries are space-separated. For example.
		 * 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each
		 * expression is an AND expression. However, you can include AND and OR
		 * expressions explicitly.
		 * @param {number} maxResults The maximum number of results to return per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_instances_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances
		 * @param {string} project Project ID of the project to which the newly created Cloud SQL instances
		 * should belong.
		 * @return {void} Successful response
		 */
		Sql_instances_insert(project: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance to be deleted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_delete(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_get(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates settings of a Cloud SQL instance.
		 * This method supports patch semantics.
		 * Patch sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_patch(project: string, instance: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates settings of a Cloud SQL instance. Using this operation might cause
		 * your instance to restart.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_update(project: string, instance: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new trusted Certificate Authority (CA) version for the specified
		 * instance. Required to prepare for a certificate rotation. If a CA version
		 * was previously added but never used in a certificate rotation, this
		 * operation replaces that version. There cannot be more than one CA version
		 * waiting to be rotated in.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/addServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_addServerCa(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/addServerCa', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all backup runs associated with a given instance and configuration in
		 * the reverse chronological order of the backup initiation time.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {number} maxResults Maximum number of backup runs per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_list(project: string, instance: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new backup run on demand. This method is applicable only to
		 * Second Generation instances.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_insert(project: string, instance: string, requestBody: BackupRun): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the backup taken by a backup run.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of the Backup Run to delete. To find a Backup Run ID, use the <a
		 * href="/sql/docs/db_path/admin-api/rest/v1beta4/backupRuns/list">list</a>
		 * method.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_delete(project: string, instance: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a backup run.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of this Backup Run.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_get(project: string, instance: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud SQL instance as a clone of the source instance. Using this
		 * operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/clone
		 * @param {string} project Project ID of the source as well as the clone Cloud SQL instance.
		 * @param {string} instance The ID of the Cloud SQL instance to be cloned (source). This does not
		 * include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_clone(project: string, instance: string, requestBody: InstancesCloneRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a short-lived X509 certificate containing the provided public key
		 * and signed by a private key specific to the target instance. Users may use
		 * the certificate to authenticate as themselves when connecting to the
		 * database.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_createEphemeral(project: string, instance: string, requestBody: SslCertsCreateEphemeralRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/createEphemeral', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists databases in the specified Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_databases_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_databases_insert(project: string, instance: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a database from a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be deleted in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_delete(project: string, instance: string, database: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_get(project: string, instance: string, database: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Partially updates a resource containing information about a database inside
		 * a Cloud SQL instance. This method supports patch semantics.
		 * Patch sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_patch(project: string, instance: string, database: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_update(project: string, instance: string, database: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Demotes the stand-alone instance to be a Cloud SQL read replica for an
		 * external database server.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_demoteMaster(project: string, instance: string, requestBody: InstancesDemoteMasterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/demoteMaster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL
		 * dump or CSV file.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/export
		 * @param {string} project Project ID of the project that contains the instance to be exported.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_export(project: string, instance: string, requestBody: InstancesExportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Failover the instance to its failover replica instance. Using this
		 * operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/failover
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_failover(project: string, instance: string, requestBody: InstancesFailoverRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports data into a Cloud SQL instance from a SQL dump  or CSV file in
		 * Cloud Storage.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/import
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_import(project: string, instance: string, requestBody: InstancesImportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the trusted Certificate Authorities (CAs) for the specified
		 * instance. There can be up to three CAs listed: the CA that was used to sign
		 * the certificate that is currently in use, a CA that has been added but not
		 * yet used to sign a certificate, and a CA used to sign a certificate that
		 * has previously rotated out.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/listServerCas
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_listServerCas(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/listServerCas', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Promotes the read replica instance to be a stand-alone Cloud SQL instance.
		 * Using this operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_promoteReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/promoteReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reschedules the maintenance on the given instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_projects_instances_rescheduleMaintenance(project: string, instance: string, requestBody: SqlInstancesRescheduleMaintenanceRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rescheduleMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all client certificates and generates a new server SSL certificate
		 * for the instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_resetSslConfig(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/resetSslConfig', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts a Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/restart
		 * @param {string} project Project ID of the project that contains the instance to be restarted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_restart(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restart', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a backup of a Cloud SQL instance. Using this operation might cause
		 * your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_restoreBackup(project: string, instance: string, requestBody: InstancesRestoreBackupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restoreBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotates the server certificate to one signed by the Certificate Authority
		 * (CA) version previously added with the addServerCA method.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_rotateServerCa(project: string, instance: string, requestBody: InstancesRotateServerCaRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rotateServerCa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the current SSL certificates for the instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an SSL certificate and returns it along with the private key and
		 * server certificate authority.  The new certificate will not be usable until
		 * the instance is restarted.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_insert(project: string, instance: string, requestBody: SslCertsInsertRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the SSL certificate. For First Generation instances, the
		 * certificate remains valid until the instance is restarted.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_delete(project: string, instance: string, sha1Fingerprint: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a particular SSL certificate.  Does not include the private key
		 * (required for usage).  The private key must be saved from the response to
		 * initial creation.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_get(project: string, instance: string, sha1Fingerprint: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start External master migration.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync
		 * @param {string} project ID of the project that contains the first generation instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {Sql_projects_instances_startExternalSyncSyncMode} syncMode External sync mode
		 * @return {void} Successful response
		 */
		Sql_projects_instances_startExternalSync(project: string, instance: string, syncMode: Sql_projects_instances_startExternalSyncSyncMode | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startExternalSync&syncMode=' + syncMode, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts the replication in the read replica instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/startReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_startReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops the replication in the read replica instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/stopReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_stopReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/stopReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Truncate MySQL general and slow query log tables
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/truncateLog
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_truncateLog(project: string, instance: string, requestBody: InstancesTruncateLogRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/truncateLog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user from a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {void} Successful response
		 */
		Sql_users_delete(project: string, instance: string, host: string | null | undefined, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists users in the specified Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_users_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new user in a Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_users_insert(project: string, instance: string, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing user in a Cloud SQL instance.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Optional. Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {void} Successful response
		 */
		Sql_users_update(project: string, instance: string, host: string | null | undefined, name: string | null | undefined, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify External master external sync settings.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {Sql_projects_instances_startExternalSyncSyncMode} syncMode External sync mode
		 * @param {boolean} verifyConnectionOnly Flag to enable verifying connection only
		 * @return {void} Successful response
		 */
		Sql_projects_instances_verifyExternalSyncSettings(project: string, instance: string, syncMode: Sql_projects_instances_startExternalSyncSyncMode | null | undefined, verifyConnectionOnly: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/verifyExternalSyncSettings&syncMode=' + syncMode + '&verifyConnectionOnly=' + verifyConnectionOnly, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all instance operations that have been performed on the given Cloud
		 * SQL instance in the reverse chronological order of the start time.
		 * Get sql/v1beta4/projects/{project}/operations
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {number} maxResults Maximum number of operations per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_operations_list(project: string, instance: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations&instance=' + (instance == null ? '' : encodeURIComponent(instance)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an instance operation that has been performed on an instance.
		 * Get sql/v1beta4/projects/{project}/operations/{operation}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} operation Instance operation ID.
		 * @return {void} Successful response
		 */
		Sql_operations_get(project: string, operation: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all available machine types (tiers) for Cloud SQL, for example,
		 * db-n1-standard-1. For related information, see <a
		 * href="/sql/pricing">Pricing</a>.
		 * Get sql/v1beta4/projects/{project}/tiers
		 * @param {string} project Project ID of the project for which to list tiers.
		 * @return {void} Successful response
		 */
		Sql_tiers_list(project: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/tiers', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Sql_projects_instances_startExternalSyncSyncMode { EXTERNAL_SYNC_MODE_UNSPECIFIED = 0, ONLINE = 1, OFFLINE = 2 }

}

