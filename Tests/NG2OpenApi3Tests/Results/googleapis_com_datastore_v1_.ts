import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines an aggregation that produces a single result. */
	export interface Aggregation {

		/** Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations. */
		alias?: string | null;

		/** Average of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
		avg?: Avg;

		/** Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference. */
		count?: Count;

		/** Sum of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
		sum?: Sum;
	}

	/** Defines an aggregation that produces a single result. */
	export interface AggregationFormProperties {

		/** Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations. */
		alias: FormControl<string | null | undefined>,
	}
	export function CreateAggregationFormGroup() {
		return new FormGroup<AggregationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Average of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
	export interface Avg {

		/** A reference to a property relative to the kind expressions. */
		property?: PropertyReference;
	}

	/** Average of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
	export interface AvgFormProperties {
	}
	export function CreateAvgFormGroup() {
		return new FormGroup<AvgFormProperties>({
		});

	}


	/** A reference to a property relative to the kind expressions. */
	export interface PropertyReference {

		/** A reference to a property. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to entity property name limitations. */
		name?: string | null;
	}

	/** A reference to a property relative to the kind expressions. */
	export interface PropertyReferenceFormProperties {

		/** A reference to a property. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to entity property name limitations. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePropertyReferenceFormGroup() {
		return new FormGroup<PropertyReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference. */
	export interface Count {

		/** Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be non-negative when present. */
		upTo?: string | null;
	}

	/** Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference. */
	export interface CountFormProperties {

		/** Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be non-negative when present. */
		upTo: FormControl<string | null | undefined>,
	}
	export function CreateCountFormGroup() {
		return new FormGroup<CountFormProperties>({
			upTo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sum of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
	export interface Sum {

		/** A reference to a property relative to the kind expressions. */
		property?: PropertyReference;
	}

	/** Sum of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
	export interface SumFormProperties {
	}
	export function CreateSumFormGroup() {
		return new FormGroup<SumFormProperties>({
		});

	}


	/** Datastore query for running an aggregation over a Query. */
	export interface AggregationQuery {

		/** Optional. Series of aggregations to apply over the results of the `nested_query`. Requires: * A minimum of one and maximum of five aggregations per query. */
		aggregations?: Array<Aggregation>;

		/** A query for entities. */
		nestedQuery?: Query;
	}

	/** Datastore query for running an aggregation over a Query. */
	export interface AggregationQueryFormProperties {
	}
	export function CreateAggregationQueryFormGroup() {
		return new FormGroup<AggregationQueryFormProperties>({
		});

	}


	/** A query for entities. */
	export interface Query {

		/** The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If `order` is specified, the set of distinct on properties must appear before the non-distinct on properties in `order`. */
		distinctOn?: Array<PropertyReference>;

		/** An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
		endCursor?: string | null;

		/** A holder for any type of filter. */
		filter?: Filter;

		/** The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified. */
		kind?: Array<KindExpression>;

		/**
		 * The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The order to apply to the query results (if empty, order is unspecified). */
		order?: Array<PropertyOrder>;

		/** The projection to return. Defaults to returning all properties. */
		projection?: Array<Projection>;

		/** A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
		startCursor?: string | null;
	}

	/** A query for entities. */
	export interface QueryFormProperties {

		/** An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
		endCursor: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
		startCursor: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			endCursor: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			startCursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A holder for any type of filter. */
	export interface Filter {

		/** A filter that merges multiple other filters using the given operator. */
		compositeFilter?: CompositeFilter;

		/** A filter on a specific property. */
		propertyFilter?: PropertyFilter;
	}

	/** A holder for any type of filter. */
	export interface FilterFormProperties {
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
		});

	}


	/** A filter that merges multiple other filters using the given operator. */
	export interface CompositeFilter {

		/** The list of filters to combine. Requires: * At least one filter is present. */
		filters?: Array<Filter>;

		/** The operator for combining multiple filters. */
		op?: CompositeFilterOp | null;
	}

	/** A filter that merges multiple other filters using the given operator. */
	export interface CompositeFilterFormProperties {

		/** The operator for combining multiple filters. */
		op: FormControl<CompositeFilterOp | null | undefined>,
	}
	export function CreateCompositeFilterFormGroup() {
		return new FormGroup<CompositeFilterFormProperties>({
			op: new FormControl<CompositeFilterOp | null | undefined>(undefined),
		});

	}

	export enum CompositeFilterOp { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', AND = 'AND', OR = 'OR' }


	/** A filter on a specific property. */
	export interface PropertyFilter {

		/** The operator to filter by. */
		op?: PropertyFilterOp | null;

		/** A reference to a property relative to the kind expressions. */
		property?: PropertyReference;

		/** A message that can hold any of the supported value types and associated metadata. */
		value?: Value;
	}

	/** A filter on a specific property. */
	export interface PropertyFilterFormProperties {

		/** The operator to filter by. */
		op: FormControl<PropertyFilterOp | null | undefined>,
	}
	export function CreatePropertyFilterFormGroup() {
		return new FormGroup<PropertyFilterFormProperties>({
			op: new FormControl<PropertyFilterOp | null | undefined>(undefined),
		});

	}

	export enum PropertyFilterOp { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL', GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL', EQUAL = 'EQUAL', IN = 'IN', NOT_EQUAL = 'NOT_EQUAL', HAS_ANCESTOR = 'HAS_ANCESTOR', NOT_IN = 'NOT_IN' }


	/** A message that can hold any of the supported value types and associated metadata. */
	export interface Value {

		/** An array value. */
		arrayValue?: ArrayValue;

		/** A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded. */
		blobValue?: string | null;

		/** A boolean value. */
		booleanValue?: boolean | null;

		/**
		 * A double value.
		 * Type: double
		 */
		doubleValue?: number | null;

		/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
		entityValue?: Entity;

		/** If the value should be excluded from all indexes including those defined explicitly. */
		excludeFromIndexes?: boolean | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		geoPointValue?: LatLng;

		/** An integer value. */
		integerValue?: string | null;

		/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
		keyValue?: Key;

		/**
		 * The `meaning` field should only be populated for backwards compatibility.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		meaning?: number | null;

		/** A null value. */
		nullValue?: ValueNullValue | null;

		/** A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes. */
		stringValue?: string | null;

		/** A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down. */
		timestampValue?: string | null;
	}

	/** A message that can hold any of the supported value types and associated metadata. */
	export interface ValueFormProperties {

		/** A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded. */
		blobValue: FormControl<string | null | undefined>,

		/** A boolean value. */
		booleanValue: FormControl<boolean | null | undefined>,

		/**
		 * A double value.
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/** If the value should be excluded from all indexes including those defined explicitly. */
		excludeFromIndexes: FormControl<boolean | null | undefined>,

		/** An integer value. */
		integerValue: FormControl<string | null | undefined>,

		/**
		 * The `meaning` field should only be populated for backwards compatibility.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		meaning: FormControl<number | null | undefined>,

		/** A null value. */
		nullValue: FormControl<ValueNullValue | null | undefined>,

		/** A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes. */
		stringValue: FormControl<string | null | undefined>,

		/** A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down. */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			blobValue: new FormControl<string | null | undefined>(undefined),
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			excludeFromIndexes: new FormControl<boolean | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			meaning: new FormControl<number | null | undefined>(undefined),
			nullValue: new FormControl<ValueNullValue | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array value. */
	export interface ArrayValue {

		/** Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'. */
		values?: Array<Value>;
	}

	/** An array value. */
	export interface ArrayValueFormProperties {
	}
	export function CreateArrayValueFormGroup() {
		return new FormGroup<ArrayValueFormProperties>({
		});

	}


	/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
	export interface Entity {

		/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
		key?: Key;

		/** The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
		properties?: {[id: string]: Value };
	}

	/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
	export interface EntityFormProperties {

		/** The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
		properties: FormControl<{[id: string]: Value } | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			properties: new FormControl<{[id: string]: Value } | null | undefined>(undefined),
		});

	}


	/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
	export interface Key {

		/** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state. */
		partitionId?: PartitionId;

		/** The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. An entity path is always fully complete: *all* of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier. A path can never be empty, and a path can have at most 100 elements. */
		path?: Array<PathElement>;
	}

	/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
	export interface KeyFormProperties {
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
		});

	}


	/** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state. */
	export interface PartitionId {

		/** If not empty, the ID of the database to which the entities belong. */
		databaseId?: string | null;

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId?: string | null;

		/** The ID of the project to which the entities belong. */
		projectId?: string | null;
	}

	/** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state. */
	export interface PartitionIdFormProperties {

		/** If not empty, the ID of the database to which the entities belong. */
		databaseId: FormControl<string | null | undefined>,

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId: FormControl<string | null | undefined>,

		/** The ID of the project to which the entities belong. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreatePartitionIdFormGroup() {
		return new FormGroup<PartitionIdFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
			namespaceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete. */
	export interface PathElement {

		/** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
		id?: string | null;

		/** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
		kind?: string | null;

		/** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
		name?: string | null;
	}

	/** A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete. */
	export interface PathElementFormProperties {

		/** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
		id: FormControl<string | null | undefined>,

		/** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
		kind: FormControl<string | null | undefined>,

		/** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePathElementFormGroup() {
		return new FormGroup<PathElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ValueNullValue { NULL_VALUE = 'NULL_VALUE' }


	/** A representation of a kind. */
	export interface KindExpression {

		/** The name of the kind. */
		name?: string | null;
	}

	/** A representation of a kind. */
	export interface KindExpressionFormProperties {

		/** The name of the kind. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKindExpressionFormGroup() {
		return new FormGroup<KindExpressionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The desired order for a specific property. */
	export interface PropertyOrder {

		/** The direction to order by. Defaults to `ASCENDING`. */
		direction?: PropertyOrderDirection | null;

		/** A reference to a property relative to the kind expressions. */
		property?: PropertyReference;
	}

	/** The desired order for a specific property. */
	export interface PropertyOrderFormProperties {

		/** The direction to order by. Defaults to `ASCENDING`. */
		direction: FormControl<PropertyOrderDirection | null | undefined>,
	}
	export function CreatePropertyOrderFormGroup() {
		return new FormGroup<PropertyOrderFormProperties>({
			direction: new FormControl<PropertyOrderDirection | null | undefined>(undefined),
		});

	}

	export enum PropertyOrderDirection { DIRECTION_UNSPECIFIED = 'DIRECTION_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** A representation of a property in a projection. */
	export interface Projection {

		/** A reference to a property relative to the kind expressions. */
		property?: PropertyReference;
	}

	/** A representation of a property in a projection. */
	export interface ProjectionFormProperties {
	}
	export function CreateProjectionFormGroup() {
		return new FormGroup<ProjectionFormProperties>({
		});

	}


	/** The result of a single bucket from a Datastore aggregation query. The keys of `aggregate_properties` are the same for all results in an aggregation query, unlike entity queries which can have different fields present for each result. */
	export interface AggregationResult {

		/** The result of the aggregation functions, ex: `COUNT(*) AS total_entities`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
		aggregateProperties?: {[id: string]: Value };
	}

	/** The result of a single bucket from a Datastore aggregation query. The keys of `aggregate_properties` are the same for all results in an aggregation query, unlike entity queries which can have different fields present for each result. */
	export interface AggregationResultFormProperties {

		/** The result of the aggregation functions, ex: `COUNT(*) AS total_entities`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
		aggregateProperties: FormControl<{[id: string]: Value } | null | undefined>,
	}
	export function CreateAggregationResultFormGroup() {
		return new FormGroup<AggregationResultFormProperties>({
			aggregateProperties: new FormControl<{[id: string]: Value } | null | undefined>(undefined),
		});

	}


	/** A batch of aggregation results produced by an aggregation query. */
	export interface AggregationResultBatch {

		/** The aggregation results for this batch. */
		aggregationResults?: Array<AggregationResult>;

		/** The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`. */
		moreResults?: AggregationResultBatchMoreResults | null;

		/** Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. */
		readTime?: string | null;
	}

	/** A batch of aggregation results produced by an aggregation query. */
	export interface AggregationResultBatchFormProperties {

		/** The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`. */
		moreResults: FormControl<AggregationResultBatchMoreResults | null | undefined>,

		/** Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateAggregationResultBatchFormGroup() {
		return new FormGroup<AggregationResultBatchFormProperties>({
			moreResults: new FormControl<AggregationResultBatchMoreResults | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregationResultBatchMoreResults { MORE_RESULTS_TYPE_UNSPECIFIED = 'MORE_RESULTS_TYPE_UNSPECIFIED', NOT_FINISHED = 'NOT_FINISHED', MORE_RESULTS_AFTER_LIMIT = 'MORE_RESULTS_AFTER_LIMIT', MORE_RESULTS_AFTER_CURSOR = 'MORE_RESULTS_AFTER_CURSOR', NO_MORE_RESULTS = 'NO_MORE_RESULTS' }


	/** The request for Datastore.AllocateIds. */
	export interface AllocateIdsRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only. */
		keys?: Array<Key>;
	}

	/** The request for Datastore.AllocateIds. */
	export interface AllocateIdsRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateAllocateIdsRequestFormGroup() {
		return new FormGroup<AllocateIdsRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.AllocateIds. */
	export interface AllocateIdsResponse {

		/** The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID. */
		keys?: Array<Key>;
	}

	/** The response for Datastore.AllocateIds. */
	export interface AllocateIdsResponseFormProperties {
	}
	export function CreateAllocateIdsResponseFormGroup() {
		return new FormGroup<AllocateIdsResponseFormProperties>({
		});

	}


	/** The request for Datastore.BeginTransaction. */
	export interface BeginTransactionRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests. */
		transactionOptions?: TransactionOptions;
	}

	/** The request for Datastore.BeginTransaction. */
	export interface BeginTransactionRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionRequestFormGroup() {
		return new FormGroup<BeginTransactionRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests. */
	export interface TransactionOptions {

		/** Options specific to read-only transactions. */
		readOnly?: ReadOnly;

		/** Options specific to read / write transactions. */
		readWrite?: ReadWrite;
	}

	/** Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests. */
	export interface TransactionOptionsFormProperties {
	}
	export function CreateTransactionOptionsFormGroup() {
		return new FormGroup<TransactionOptionsFormProperties>({
		});

	}


	/** Options specific to read-only transactions. */
	export interface ReadOnly {

		/** Reads entities at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;
	}

	/** Options specific to read-only transactions. */
	export interface ReadOnlyFormProperties {

		/** Reads entities at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateReadOnlyFormGroup() {
		return new FormGroup<ReadOnlyFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options specific to read / write transactions. */
	export interface ReadWrite {

		/** The transaction identifier of the transaction being retried. */
		previousTransaction?: string | null;
	}

	/** Options specific to read / write transactions. */
	export interface ReadWriteFormProperties {

		/** The transaction identifier of the transaction being retried. */
		previousTransaction: FormControl<string | null | undefined>,
	}
	export function CreateReadWriteFormGroup() {
		return new FormGroup<ReadWriteFormProperties>({
			previousTransaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.BeginTransaction. */
	export interface BeginTransactionResponse {

		/** The transaction identifier (always present). */
		transaction?: string | null;
	}

	/** The response for Datastore.BeginTransaction. */
	export interface BeginTransactionResponseFormProperties {

		/** The transaction identifier (always present). */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionResponseFormGroup() {
		return new FormGroup<BeginTransactionResponseFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Datastore.Commit. */
	export interface CommitRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** The type of commit to perform. Defaults to `TRANSACTIONAL`. */
		mode?: CommitRequestMode | null;

		/** The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity. */
		mutations?: Array<Mutation>;

		/** Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests. */
		singleUseTransaction?: TransactionOptions;

		/** The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
		transaction?: string | null;
	}

	/** The request for Datastore.Commit. */
	export interface CommitRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,

		/** The type of commit to perform. Defaults to `TRANSACTIONAL`. */
		mode: FormControl<CommitRequestMode | null | undefined>,

		/** The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateCommitRequestFormGroup() {
		return new FormGroup<CommitRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<CommitRequestMode | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommitRequestMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', TRANSACTIONAL = 'TRANSACTIONAL', NON_TRANSACTIONAL = 'NON_TRANSACTIONAL' }


	/** A mutation to apply to an entity. */
	export interface Mutation {

		/** The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts. */
		baseVersion?: string | null;

		/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
		delete?: Key;

		/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
		insert?: Entity;

		/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
		update?: Entity;

		/** The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts. */
		updateTime?: string | null;

		/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
		upsert?: Entity;
	}

	/** A mutation to apply to an entity. */
	export interface MutationFormProperties {

		/** The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts. */
		baseVersion: FormControl<string | null | undefined>,

		/** The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMutationFormGroup() {
		return new FormGroup<MutationFormProperties>({
			baseVersion: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.Commit. */
	export interface CommitResponse {

		/** The transaction commit timestamp. Not set for non-transactional commits. */
		commitTime?: string | null;

		/**
		 * The number of index entries updated during the commit, or zero if none were updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexUpdates?: number | null;

		/** The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request. */
		mutationResults?: Array<MutationResult>;
	}

	/** The response for Datastore.Commit. */
	export interface CommitResponseFormProperties {

		/** The transaction commit timestamp. Not set for non-transactional commits. */
		commitTime: FormControl<string | null | undefined>,

		/**
		 * The number of index entries updated during the commit, or zero if none were updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexUpdates: FormControl<number | null | undefined>,
	}
	export function CreateCommitResponseFormGroup() {
		return new FormGroup<CommitResponseFormProperties>({
			commitTime: new FormControl<string | null | undefined>(undefined),
			indexUpdates: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of applying a mutation. */
	export interface MutationResult {

		/** Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation. */
		conflictDetected?: boolean | null;

		/** The create time of the entity. This field will not be set after a 'delete'. */
		createTime?: string | null;

		/** A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts. */
		key?: Key;

		/** The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'. */
		updateTime?: string | null;

		/** The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity. */
		version?: string | null;
	}

	/** The result of applying a mutation. */
	export interface MutationResultFormProperties {

		/** Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation. */
		conflictDetected: FormControl<boolean | null | undefined>,

		/** The create time of the entity. This field will not be set after a 'delete'. */
		createTime: FormControl<string | null | undefined>,

		/** The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'. */
		updateTime: FormControl<string | null | undefined>,

		/** The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMutationResultFormGroup() {
		return new FormGroup<MutationResultFormProperties>({
			conflictDetected: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
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


	/** The result of fetching an entity from Datastore. */
	export interface EntityResult {

		/** The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
		createTime?: string | null;

		/** A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message. */
		cursor?: string | null;

		/** A Datastore data object. Must not exceed 1 MiB - 4 bytes. */
		entity?: Entity;

		/** The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
		updateTime?: string | null;

		/** The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads. */
		version?: string | null;
	}

	/** The result of fetching an entity from Datastore. */
	export interface EntityResultFormProperties {

		/** The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
		createTime: FormControl<string | null | undefined>,

		/** A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message. */
		cursor: FormControl<string | null | undefined>,

		/** The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
		updateTime: FormControl<string | null | undefined>,

		/** The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEntityResultFormGroup() {
		return new FormGroup<EntityResultFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cursor: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1CommonMetadata {

		/** The time the operation ended, either successfully or otherwise. */
		endTime?: string | null;

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels?: {[id: string]: string };

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType?: GoogleDatastoreAdminV1CommonMetadataOperationType | null;

		/** The time that work began on the operation. */
		startTime?: string | null;

		/** The current state of the Operation. */
		state?: GoogleDatastoreAdminV1CommonMetadataState | null;
	}

	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1CommonMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. */
		endTime: FormControl<string | null | undefined>,

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType: FormControl<GoogleDatastoreAdminV1CommonMetadataOperationType | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the Operation. */
		state: FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1CommonMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1CommonMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<GoogleDatastoreAdminV1CommonMetadataOperationType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1CommonMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', EXPORT_ENTITIES = 'EXPORT_ENTITIES', IMPORT_ENTITIES = 'IMPORT_ENTITIES', CREATE_INDEX = 'CREATE_INDEX', DELETE_INDEX = 'DELETE_INDEX' }

	export enum GoogleDatastoreAdminV1CommonMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', CANCELLING = 'CANCELLING', FINALIZING = 'FINALIZING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration" */
	export interface GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata {

		/** The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationState?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null;

		/** The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationStep?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null;
	}

	/** Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration" */
	export interface GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormProperties {

		/** The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationState: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>,

		/** The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationStep: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormProperties>({
			migrationState: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>(undefined),
			migrationStep: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState { MIGRATION_STATE_UNSPECIFIED = 'MIGRATION_STATE_UNSPECIFIED', RUNNING = 'RUNNING', PAUSED = 'PAUSED', COMPLETE = 'COMPLETE' }

	export enum GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep { MIGRATION_STEP_UNSPECIFIED = 'MIGRATION_STEP_UNSPECIFIED', PREPARE = 'PREPARE', START = 'START', APPLY_WRITES_SYNCHRONOUSLY = 'APPLY_WRITES_SYNCHRONOUSLY', COPY_AND_VERIFY = 'COPY_AND_VERIFY', REDIRECT_EVENTUALLY_CONSISTENT_READS = 'REDIRECT_EVENTUALLY_CONSISTENT_READS', REDIRECT_STRONGLY_CONSISTENT_READS = 'REDIRECT_STRONGLY_CONSISTENT_READS', REDIRECT_WRITES = 'REDIRECT_WRITES' }


	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1EntityFilter {

		/** If empty, then this represents all kinds. */
		kinds?: Array<string>;

		/** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;
	}

	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1EntityFilterFormProperties {
	}
	export function CreateGoogleDatastoreAdminV1EntityFilterFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1EntityFilterFormProperties>({
		});

	}


	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1ExportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1ExportEntitiesMetadataFormProperties {

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ExportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ExportEntitiesMetadataFormProperties>({
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1Progress {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted?: string | null;

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated?: string | null;
	}

	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1ProgressFormProperties {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted: FormControl<string | null | undefined>,

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ProgressFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ProgressFormProperties>({
			workCompleted: new FormControl<string | null | undefined>(undefined),
			workEstimated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesRequest {

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** Client-assigned labels. */
		labels?: {[id: string]: string };

		/** Required. Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. */
		outputUrlPrefix?: string | null;
	}

	/** The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesRequestFormProperties {

		/** Client-assigned labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ExportEntitiesRequestFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ExportEntitiesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesResponse {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl?: string | null;
	}

	/** The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesResponseFormProperties {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ExportEntitiesResponseFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ExportEntitiesResponseFormProperties>({
			outputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1ImportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
		inputUrl?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1ImportEntitiesMetadataFormProperties {

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
		inputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ImportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ImportEntitiesMetadataFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities. */
	export interface GoogleDatastoreAdminV1ImportEntitiesRequest {

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		inputUrl?: string | null;

		/** Client-assigned labels. */
		labels?: {[id: string]: string };
	}

	/** The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities. */
	export interface GoogleDatastoreAdminV1ImportEntitiesRequestFormProperties {

		/** Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		inputUrl: FormControl<string | null | undefined>,

		/** Client-assigned labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ImportEntitiesRequestFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ImportEntitiesRequestFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Datastore composite index definition. */
	export interface GoogleDatastoreAdminV1Index {

		/** Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED. */
		ancestor?: GoogleDatastoreAdminV1IndexAncestor | null;

		/** Output only. The resource ID of the index. */
		indexId?: string | null;

		/** Required. The entity kind to which this index applies. */
		kind?: string | null;

		/** Output only. Project ID. */
		projectId?: string | null;

		/** Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties. */
		properties?: Array<GoogleDatastoreAdminV1IndexedProperty>;

		/** Output only. The state of the index. */
		state?: GoogleDatastoreAdminV1IndexState | null;
	}

	/** Datastore composite index definition. */
	export interface GoogleDatastoreAdminV1IndexFormProperties {

		/** Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED. */
		ancestor: FormControl<GoogleDatastoreAdminV1IndexAncestor | null | undefined>,

		/** Output only. The resource ID of the index. */
		indexId: FormControl<string | null | undefined>,

		/** Required. The entity kind to which this index applies. */
		kind: FormControl<string | null | undefined>,

		/** Output only. Project ID. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The state of the index. */
		state: FormControl<GoogleDatastoreAdminV1IndexState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1IndexFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1IndexFormProperties>({
			ancestor: new FormControl<GoogleDatastoreAdminV1IndexAncestor | null | undefined>(undefined),
			indexId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDatastoreAdminV1IndexState | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1IndexAncestor { ANCESTOR_MODE_UNSPECIFIED = 'ANCESTOR_MODE_UNSPECIFIED', NONE = 'NONE', ALL_ANCESTORS = 'ALL_ANCESTORS' }


	/** A property of an index. */
	export interface GoogleDatastoreAdminV1IndexedProperty {

		/** Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED. */
		direction?: PropertyOrderDirection | null;

		/** Required. The property name to index. */
		name?: string | null;
	}

	/** A property of an index. */
	export interface GoogleDatastoreAdminV1IndexedPropertyFormProperties {

		/** Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED. */
		direction: FormControl<PropertyOrderDirection | null | undefined>,

		/** Required. The property name to index. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1IndexedPropertyFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1IndexedPropertyFormProperties>({
			direction: new FormControl<PropertyOrderDirection | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1IndexState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** Metadata for Index operations. */
	export interface GoogleDatastoreAdminV1IndexOperationMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** The index resource ID that this operation is acting on. */
		indexId?: string | null;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for Index operations. */
	export interface GoogleDatastoreAdminV1IndexOperationMetadataFormProperties {

		/** The index resource ID that this operation is acting on. */
		indexId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1IndexOperationMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1IndexOperationMetadataFormProperties>({
			indexId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes. */
	export interface GoogleDatastoreAdminV1ListIndexesResponse {

		/** The indexes. */
		indexes?: Array<GoogleDatastoreAdminV1Index>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes. */
	export interface GoogleDatastoreAdminV1ListIndexesResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ListIndexesResponseFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ListIndexesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationProgressEvent {

		/** Details for the `PREPARE` step. */
		prepareStepDetails?: GoogleDatastoreAdminV1PrepareStepDetails;

		/** Details for the `REDIRECT_WRITES` step. */
		redirectWritesStepDetails?: GoogleDatastoreAdminV1RedirectWritesStepDetails;

		/** The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state. */
		step?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null;
	}

	/** An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationProgressEventFormProperties {

		/** The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state. */
		step: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1MigrationProgressEventFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1MigrationProgressEventFormProperties>({
			step: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>(undefined),
		});

	}


	/** Details for the `PREPARE` step. */
	export interface GoogleDatastoreAdminV1PrepareStepDetails {

		/** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
		concurrencyMode?: GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null;
	}

	/** Details for the `PREPARE` step. */
	export interface GoogleDatastoreAdminV1PrepareStepDetailsFormProperties {

		/** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
		concurrencyMode: FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1PrepareStepDetailsFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1PrepareStepDetailsFormProperties>({
			concurrencyMode: new FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode { CONCURRENCY_MODE_UNSPECIFIED = 'CONCURRENCY_MODE_UNSPECIFIED', PESSIMISTIC = 'PESSIMISTIC', OPTIMISTIC = 'OPTIMISTIC', OPTIMISTIC_WITH_ENTITY_GROUPS = 'OPTIMISTIC_WITH_ENTITY_GROUPS' }


	/** Details for the `REDIRECT_WRITES` step. */
	export interface GoogleDatastoreAdminV1RedirectWritesStepDetails {

		/** Ths concurrency mode for this database. */
		concurrencyMode?: GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null;
	}

	/** Details for the `REDIRECT_WRITES` step. */
	export interface GoogleDatastoreAdminV1RedirectWritesStepDetailsFormProperties {

		/** Ths concurrency mode for this database. */
		concurrencyMode: FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1RedirectWritesStepDetailsFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1RedirectWritesStepDetailsFormProperties>({
			concurrencyMode: new FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>(undefined),
		});

	}


	/** An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationStateEvent {

		/** The new state of the migration. */
		state?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null;
	}

	/** An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationStateEventFormProperties {

		/** The new state of the migration. */
		state: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1MigrationStateEventFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1MigrationStateEventFormProperties>({
			state: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>(undefined),
		});

	}


	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1beta1CommonMetadata {

		/** The time the operation ended, either successfully or otherwise. */
		endTime?: string | null;

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels?: {[id: string]: string };

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType?: GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null;

		/** The time that work began on the operation. */
		startTime?: string | null;

		/** The current state of the Operation. */
		state?: GoogleDatastoreAdminV1CommonMetadataState | null;
	}

	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1beta1CommonMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. */
		endTime: FormControl<string | null | undefined>,

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType: FormControl<GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the Operation. */
		state: FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1CommonMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1CommonMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1beta1CommonMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', EXPORT_ENTITIES = 'EXPORT_ENTITIES', IMPORT_ENTITIES = 'IMPORT_ENTITIES' }


	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1beta1EntityFilter {

		/** If empty, then this represents all kinds. */
		kinds?: Array<string>;

		/** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;
	}

	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1beta1EntityFilterFormProperties {
	}
	export function CreateGoogleDatastoreAdminV1beta1EntityFilterFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1EntityFilterFormProperties>({
		});

	}


	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1beta1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1beta1Progress;
	}

	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormProperties {

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormProperties>({
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1beta1Progress {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted?: string | null;

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated?: string | null;
	}

	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1beta1ProgressFormProperties {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted: FormControl<string | null | undefined>,

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ProgressFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ProgressFormProperties>({
			workCompleted: new FormControl<string | null | undefined>(undefined),
			workEstimated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl?: string | null;
	}

	/** The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponseFormProperties {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ExportEntitiesResponseFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ExportEntitiesResponseFormProperties>({
			outputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1beta1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
		inputUrl?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1beta1Progress;
	}

	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormProperties {

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
		inputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
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
		error?: Status;

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


	/** A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
	export interface GqlQuery {

		/** When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is. */
		allowLiterals?: boolean | null;

		/** For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`. */
		namedBindings?: {[id: string]: GqlQueryParameter };

		/** Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true. */
		positionalBindings?: Array<GqlQueryParameter>;

		/** A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
		queryString?: string | null;
	}

	/** A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
	export interface GqlQueryFormProperties {

		/** When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is. */
		allowLiterals: FormControl<boolean | null | undefined>,

		/** For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`. */
		namedBindings: FormControl<{[id: string]: GqlQueryParameter } | null | undefined>,

		/** A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
		queryString: FormControl<string | null | undefined>,
	}
	export function CreateGqlQueryFormGroup() {
		return new FormGroup<GqlQueryFormProperties>({
			allowLiterals: new FormControl<boolean | null | undefined>(undefined),
			namedBindings: new FormControl<{[id: string]: GqlQueryParameter } | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A binding parameter for a GQL query. */
	export interface GqlQueryParameter {

		/** A query cursor. Query cursors are returned in query result batches. */
		cursor?: string | null;

		/** A message that can hold any of the supported value types and associated metadata. */
		value?: Value;
	}

	/** A binding parameter for a GQL query. */
	export interface GqlQueryParameterFormProperties {

		/** A query cursor. Query cursors are returned in query result batches. */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateGqlQueryParameterFormGroup() {
		return new FormGroup<GqlQueryParameterFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Datastore.Lookup. */
	export interface LookupRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** Required. Keys of entities to look up. */
		keys?: Array<Key>;

		/** The options shared by read requests. */
		readOptions?: ReadOptions;
	}

	/** The request for Datastore.Lookup. */
	export interface LookupRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateLookupRequestFormGroup() {
		return new FormGroup<LookupRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options shared by read requests. */
	export interface ReadOptions {

		/** Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests. */
		newTransaction?: TransactionOptions;

		/** The non-transactional read consistency to use. */
		readConsistency?: ReadOptionsReadConsistency | null;

		/** Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;

		/** The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
		transaction?: string | null;
	}

	/** The options shared by read requests. */
	export interface ReadOptionsFormProperties {

		/** The non-transactional read consistency to use. */
		readConsistency: FormControl<ReadOptionsReadConsistency | null | undefined>,

		/** Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,

		/** The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateReadOptionsFormGroup() {
		return new FormGroup<ReadOptionsFormProperties>({
			readConsistency: new FormControl<ReadOptionsReadConsistency | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReadOptionsReadConsistency { READ_CONSISTENCY_UNSPECIFIED = 'READ_CONSISTENCY_UNSPECIFIED', STRONG = 'STRONG', EVENTUAL = 'EVENTUAL' }


	/** The response for Datastore.Lookup. */
	export interface LookupResponse {

		/** A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
		deferred?: Array<Key>;

		/** Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
		found?: Array<EntityResult>;

		/** Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
		missing?: Array<EntityResult>;

		/** The time at which these entities were read or found missing. */
		readTime?: string | null;

		/** The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options. */
		transaction?: string | null;
	}

	/** The response for Datastore.Lookup. */
	export interface LookupResponseFormProperties {

		/** The time at which these entities were read or found missing. */
		readTime: FormControl<string | null | undefined>,

		/** The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateLookupResponseFormGroup() {
		return new FormGroup<LookupResponseFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch of results produced by a query. */
	export interface QueryResultBatch {

		/** A cursor that points to the position after the last result in the batch. */
		endCursor?: string | null;

		/** The result type for every entity in `entity_results`. */
		entityResultType?: QueryResultBatchEntityResultType | null;

		/** The results for this batch. */
		entityResults?: Array<EntityResult>;

		/** The state of the query after the current batch. */
		moreResults?: AggregationResultBatchMoreResults | null;

		/** Read timestamp this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore. */
		readTime?: string | null;

		/** A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0. */
		skippedCursor?: string | null;

		/**
		 * The number of results skipped, typically because of an offset.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skippedResults?: number | null;

		/** The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries. */
		snapshotVersion?: string | null;
	}

	/** A batch of results produced by a query. */
	export interface QueryResultBatchFormProperties {

		/** A cursor that points to the position after the last result in the batch. */
		endCursor: FormControl<string | null | undefined>,

		/** The result type for every entity in `entity_results`. */
		entityResultType: FormControl<QueryResultBatchEntityResultType | null | undefined>,

		/** The state of the query after the current batch. */
		moreResults: FormControl<AggregationResultBatchMoreResults | null | undefined>,

		/** Read timestamp this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore. */
		readTime: FormControl<string | null | undefined>,

		/** A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0. */
		skippedCursor: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped, typically because of an offset.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		skippedResults: FormControl<number | null | undefined>,

		/** The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries. */
		snapshotVersion: FormControl<string | null | undefined>,
	}
	export function CreateQueryResultBatchFormGroup() {
		return new FormGroup<QueryResultBatchFormProperties>({
			endCursor: new FormControl<string | null | undefined>(undefined),
			entityResultType: new FormControl<QueryResultBatchEntityResultType | null | undefined>(undefined),
			moreResults: new FormControl<AggregationResultBatchMoreResults | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			skippedCursor: new FormControl<string | null | undefined>(undefined),
			skippedResults: new FormControl<number | null | undefined>(undefined),
			snapshotVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryResultBatchEntityResultType { RESULT_TYPE_UNSPECIFIED = 'RESULT_TYPE_UNSPECIFIED', FULL = 'FULL', PROJECTION = 'PROJECTION', KEY_ONLY = 'KEY_ONLY' }


	/** The request for Datastore.ReserveIds. */
	export interface ReserveIdsRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated. */
		keys?: Array<Key>;
	}

	/** The request for Datastore.ReserveIds. */
	export interface ReserveIdsRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateReserveIdsRequestFormGroup() {
		return new FormGroup<ReserveIdsRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.ReserveIds. */
	export interface ReserveIdsResponse {
	}

	/** The response for Datastore.ReserveIds. */
	export interface ReserveIdsResponseFormProperties {
	}
	export function CreateReserveIdsResponseFormGroup() {
		return new FormGroup<ReserveIdsResponseFormProperties>({
		});

	}


	/** The request for Datastore.Rollback. */
	export interface RollbackRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. */
		transaction?: string | null;
	}

	/** The request for Datastore.Rollback. */
	export interface RollbackRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,

		/** Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRollbackRequestFormGroup() {
		return new FormGroup<RollbackRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.Rollback. (an empty message). */
	export interface RollbackResponse {
	}

	/** The response for Datastore.Rollback. (an empty message). */
	export interface RollbackResponseFormProperties {
	}
	export function CreateRollbackResponseFormGroup() {
		return new FormGroup<RollbackResponseFormProperties>({
		});

	}


	/** The request for Datastore.RunAggregationQuery. */
	export interface RunAggregationQueryRequest {

		/** Datastore query for running an aggregation over a Query. */
		aggregationQuery?: AggregationQuery;

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
		gqlQuery?: GqlQuery;

		/** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state. */
		partitionId?: PartitionId;

		/** The options shared by read requests. */
		readOptions?: ReadOptions;
	}

	/** The request for Datastore.RunAggregationQuery. */
	export interface RunAggregationQueryRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateRunAggregationQueryRequestFormGroup() {
		return new FormGroup<RunAggregationQueryRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.RunAggregationQuery. */
	export interface RunAggregationQueryResponse {

		/** A batch of aggregation results produced by an aggregation query. */
		batch?: AggregationResultBatch;

		/** Datastore query for running an aggregation over a Query. */
		query?: AggregationQuery;

		/** The identifier of the transaction that was started as part of this RunAggregationQuery request. Set only when ReadOptions.new_transaction was set in RunAggregationQueryRequest.read_options. */
		transaction?: string | null;
	}

	/** The response for Datastore.RunAggregationQuery. */
	export interface RunAggregationQueryResponseFormProperties {

		/** The identifier of the transaction that was started as part of this RunAggregationQuery request. Set only when ReadOptions.new_transaction was set in RunAggregationQueryRequest.read_options. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunAggregationQueryResponseFormGroup() {
		return new FormGroup<RunAggregationQueryResponseFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Datastore.RunQuery. */
	export interface RunQueryRequest {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId?: string | null;

		/** A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
		gqlQuery?: GqlQuery;

		/** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state. */
		partitionId?: PartitionId;

		/** A query for entities. */
		query?: Query;

		/** The options shared by read requests. */
		readOptions?: ReadOptions;
	}

	/** The request for Datastore.RunQuery. */
	export interface RunQueryRequestFormProperties {

		/** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateRunQueryRequestFormGroup() {
		return new FormGroup<RunQueryRequestFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Datastore.RunQuery. */
	export interface RunQueryResponse {

		/** A batch of results produced by a query. */
		batch?: QueryResultBatch;

		/** A query for entities. */
		query?: Query;

		/** The identifier of the transaction that was started as part of this RunQuery request. Set only when ReadOptions.new_transaction was set in RunQueryRequest.read_options. */
		transaction?: string | null;
	}

	/** The response for Datastore.RunQuery. */
	export interface RunQueryResponseFormProperties {

		/** The identifier of the transaction that was started as part of this RunQuery request. Set only when ReadOptions.new_transaction was set in RunQueryRequest.read_options. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunQueryResponseFormGroup() {
		return new FormGroup<RunQueryResponseFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
		 * Get v1/projects/{projectId}/indexes
		 * @param {string} projectId Project ID against which to make the request.
		 * @param {number} pageSize The maximum number of items to return. If zero, then all results will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {GoogleDatastoreAdminV1ListIndexesResponse} Successful response
		 */
		Datastore_projects_indexes_list(projectId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleDatastoreAdminV1ListIndexesResponse> {
			return this.http.get<GoogleDatastoreAdminV1ListIndexesResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/indexes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
		 * Post v1/projects/{projectId}/indexes
		 * @param {string} projectId Project ID against which to make the request.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_indexes_create(projectId: string, requestBody: GoogleDatastoreAdminV1Index): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
		 * Delete v1/projects/{projectId}/indexes/{indexId}
		 * @param {string} projectId Project ID against which to make the request.
		 * @param {string} indexId The resource ID of the index to delete.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_indexes_delete(projectId: string, indexId: string): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/indexes/' + (indexId == null ? '' : encodeURIComponent(indexId)), {});
		}

		/**
		 * Gets an index.
		 * Get v1/projects/{projectId}/indexes/{indexId}
		 * @param {string} projectId Project ID against which to make the request.
		 * @param {string} indexId The resource ID of the index to get.
		 * @return {GoogleDatastoreAdminV1Index} Successful response
		 */
		Datastore_projects_indexes_get(projectId: string, indexId: string): Observable<GoogleDatastoreAdminV1Index> {
			return this.http.get<GoogleDatastoreAdminV1Index>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/indexes/' + (indexId == null ? '' : encodeURIComponent(indexId)), {});
		}

		/**
		 * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
		 * Post v1/projects/{projectId}:allocateIds
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {AllocateIdsResponse} Successful response
		 */
		Datastore_projects_allocateIds(projectId: string, requestBody: AllocateIdsRequest): Observable<AllocateIdsResponse> {
			return this.http.post<AllocateIdsResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':allocateIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins a new transaction.
		 * Post v1/projects/{projectId}:beginTransaction
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {BeginTransactionResponse} Successful response
		 */
		Datastore_projects_beginTransaction(projectId: string, requestBody: BeginTransactionRequest): Observable<BeginTransactionResponse> {
			return this.http.post<BeginTransactionResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':beginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits a transaction, optionally creating, deleting or modifying some entities.
		 * Post v1/projects/{projectId}:commit
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {CommitResponse} Successful response
		 */
		Datastore_projects_commit(projectId: string, requestBody: CommitRequest): Observable<CommitResponse> {
			return this.http.post<CommitResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
		 * Post v1/projects/{projectId}:export
		 * @param {string} projectId Required. Project ID against which to make the request.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_export(projectId: string, requestBody: GoogleDatastoreAdminV1ExportEntitiesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
		 * Post v1/projects/{projectId}:import
		 * @param {string} projectId Required. Project ID against which to make the request.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_import(projectId: string, requestBody: GoogleDatastoreAdminV1ImportEntitiesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Looks up entities by key.
		 * Post v1/projects/{projectId}:lookup
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {LookupResponse} Successful response
		 */
		Datastore_projects_lookup(projectId: string, requestBody: LookupRequest): Observable<LookupResponse> {
			return this.http.post<LookupResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':lookup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
		 * Post v1/projects/{projectId}:reserveIds
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {ReserveIdsResponse} Successful response
		 */
		Datastore_projects_reserveIds(projectId: string, requestBody: ReserveIdsRequest): Observable<ReserveIdsResponse> {
			return this.http.post<ReserveIdsResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':reserveIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a transaction.
		 * Post v1/projects/{projectId}:rollback
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {RollbackResponse} Successful response
		 */
		Datastore_projects_rollback(projectId: string, requestBody: RollbackRequest): Observable<RollbackResponse> {
			return this.http.post<RollbackResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs an aggregation query.
		 * Post v1/projects/{projectId}:runAggregationQuery
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {RunAggregationQueryResponse} Successful response
		 */
		Datastore_projects_runAggregationQuery(projectId: string, requestBody: RunAggregationQueryRequest): Observable<RunAggregationQueryResponse> {
			return this.http.post<RunAggregationQueryResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':runAggregationQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries for entities.
		 * Post v1/projects/{projectId}:runQuery
		 * @param {string} projectId Required. The ID of the project against which to make the request.
		 * @return {RunQueryResponse} Successful response
		 */
		Datastore_projects_runQuery(projectId: string, requestBody: RunQueryRequest): Observable<RunQueryResponse> {
			return this.http.post<RunQueryResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':runQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Datastore_projects_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
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
		Datastore_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Datastore_projects_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}
	}

}

