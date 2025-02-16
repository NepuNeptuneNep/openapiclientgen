import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a unique identifier of a beacon as broadcast by the device. */
	export interface AdvertisedId {

		/**
		 * The actual beacon identifier, as broadcast by the beacon hardware. Must be
		 * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
		 * requests, and will be so encoded (with padding) in responses. The base64
		 * encoding should be of the binary byte-stream and not any textual (such as
		 * hex) representation thereof.
		 * Required.
		 */
		id?: string | null;

		/**
		 * Specifies the identifier type.
		 * Required.
		 */
		type?: AdvertisedIdType | null;
	}

	/** Defines a unique identifier of a beacon as broadcast by the device. */
	export interface AdvertisedIdFormProperties {

		/**
		 * The actual beacon identifier, as broadcast by the beacon hardware. Must be
		 * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
		 * requests, and will be so encoded (with padding) in responses. The base64
		 * encoding should be of the binary byte-stream and not any textual (such as
		 * hex) representation thereof.
		 * Required.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Specifies the identifier type.
		 * Required.
		 */
		type: FormControl<AdvertisedIdType | null | undefined>,
	}
	export function CreateAdvertisedIdFormGroup() {
		return new FormGroup<AdvertisedIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AdvertisedIdType | null | undefined>(undefined),
		});

	}

	export enum AdvertisedIdType { TYPE_UNSPECIFIED = 0, EDDYSTONE = 1, IBEACON = 2, ALTBEACON = 3, EDDYSTONE_EID = 4 }


	/**
	 * A subset of attachment information served via the
	 * `beaconinfo.getforobserved` method, used when your users encounter your
	 * beacons.
	 */
	export interface AttachmentInfo {

		/** An opaque data container for client-provided data. */
		data?: string | null;

		/**
		 * The distance away from the beacon at which this attachment should be
		 * delivered to a mobile app.
		 * Setting this to a value greater than zero indicates that the app should
		 * behave as if the beacon is "seen" when the mobile device is less than this
		 * distance away from the beacon.
		 * Different attachments on the same beacon can have different max distances.
		 * Note that even though this value is expressed with fractional meter
		 * precision, real-world behavior is likley to be much less precise than one
		 * meter, due to the nature of current Bluetooth radio technology.
		 * Optional. When not set or zero, the attachment should be delivered at the
		 * beacon's outer limit of detection.
		 */
		maxDistanceMeters?: number | null;

		/**
		 * Specifies what kind of attachment this is. Tells a client how to
		 * interpret the `data` field. Format is <var>namespace/type</var>, for
		 * example <code>scrupulous-wombat-12345/welcome-message</code>
		 */
		namespacedType?: string | null;
	}

	/**
	 * A subset of attachment information served via the
	 * `beaconinfo.getforobserved` method, used when your users encounter your
	 * beacons.
	 */
	export interface AttachmentInfoFormProperties {

		/** An opaque data container for client-provided data. */
		data: FormControl<string | null | undefined>,

		/**
		 * The distance away from the beacon at which this attachment should be
		 * delivered to a mobile app.
		 * Setting this to a value greater than zero indicates that the app should
		 * behave as if the beacon is "seen" when the mobile device is less than this
		 * distance away from the beacon.
		 * Different attachments on the same beacon can have different max distances.
		 * Note that even though this value is expressed with fractional meter
		 * precision, real-world behavior is likley to be much less precise than one
		 * meter, due to the nature of current Bluetooth radio technology.
		 * Optional. When not set or zero, the attachment should be delivered at the
		 * beacon's outer limit of detection.
		 */
		maxDistanceMeters: FormControl<number | null | undefined>,

		/**
		 * Specifies what kind of attachment this is. Tells a client how to
		 * interpret the `data` field. Format is <var>namespace/type</var>, for
		 * example <code>scrupulous-wombat-12345/welcome-message</code>
		 */
		namespacedType: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentInfoFormGroup() {
		return new FormGroup<AttachmentInfoFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			maxDistanceMeters: new FormControl<number | null | undefined>(undefined),
			namespacedType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a beacon device. */
	export interface Beacon {

		/** Defines a unique identifier of a beacon as broadcast by the device. */
		advertisedId?: AdvertisedId;

		/**
		 * Resource name of this beacon. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.
		 * This field must be left empty when registering. After reading a beacon,
		 * clients can use the name for future operations.
		 */
		beaconName?: string | null;

		/**
		 * Free text used to identify and describe the beacon. Maximum length 140
		 * characters.
		 * Optional.
		 */
		description?: string | null;

		/**
		 * Write-only registration parameters for beacons using Eddystone-EID format.
		 * Two ways of securely registering an Eddystone-EID beacon with the service
		 * are supported:
		 * 1. Perform an ECDH key exchange via this API, including a previous call
		 * to `GET /v1beta1/eidparams`. In this case the fields
		 * `beacon_ecdh_public_key` and `service_ecdh_public_key` should be
		 * populated and `beacon_identity_key` should not be populated. This
		 * method ensures that only the two parties in the ECDH key exchange can
		 * compute the identity key, which becomes a secret between them.
		 * 2. Derive or obtain the beacon's identity key via other secure means
		 * (perhaps an ECDH key exchange between the beacon and a mobile device
		 * or any other secure method), and then submit the resulting identity key
		 * to the service. In this case `beacon_identity_key` field should be
		 * populated, and neither of `beacon_ecdh_public_key` nor
		 * `service_ecdh_public_key` fields should be. The security of this method
		 * depends on how securely the parties involved (in particular the
		 * bluetooth client) handle the identity key, and obviously on how
		 * securely the identity key was generated.
		 * See [the Eddystone
		 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
		 * at GitHub.
		 */
		ephemeralIdRegistration?: EphemeralIdRegistration;

		/**
		 * Expected location stability. This is set when the beacon is registered or
		 * updated, not automatically detected in any way.
		 * Optional.
		 */
		expectedStability?: BeaconExpectedStability | null;

		/**
		 * Indoor level, a human-readable string as returned by Google Maps APIs,
		 * useful to indicate which floor of a building a beacon is located on.
		 */
		indoorLevel?: IndoorLevel;

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;

		/**
		 * The [Google Places API](/places/place-id) Place ID of the place where
		 * the beacon is deployed. This is given when the beacon is registered or
		 * updated, not automatically detected in any way.
		 * Optional.
		 */
		placeId?: string | null;

		/**
		 * Properties of the beacon device, for example battery type or firmware
		 * version.
		 * Optional.
		 */
		properties?: {[id: string]: string };

		/**
		 * Some beacons may require a user to provide an authorization key before
		 * changing any of its configuration (e.g. broadcast frames, transmit power).
		 * This field provides a place to store and control access to that key.
		 * This field is populated in responses to `GET /v1beta1/beacons/3!beaconId`
		 * from users with write access to the given beacon. That is to say: If the
		 * user is authorized to write the beacon's confidential data in the service,
		 * the service considers them authorized to configure the beacon. Note
		 * that this key grants nothing on the service, only on the beacon itself.
		 */
		provisioningKey?: string | null;

		/**
		 * Current status of the beacon.
		 * Required.
		 */
		status?: BeaconStatus | null;
	}

	/** Details of a beacon device. */
	export interface BeaconFormProperties {

		/**
		 * Resource name of this beacon. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.
		 * This field must be left empty when registering. After reading a beacon,
		 * clients can use the name for future operations.
		 */
		beaconName: FormControl<string | null | undefined>,

		/**
		 * Free text used to identify and describe the beacon. Maximum length 140
		 * characters.
		 * Optional.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Expected location stability. This is set when the beacon is registered or
		 * updated, not automatically detected in any way.
		 * Optional.
		 */
		expectedStability: FormControl<BeaconExpectedStability | null | undefined>,

		/**
		 * The [Google Places API](/places/place-id) Place ID of the place where
		 * the beacon is deployed. This is given when the beacon is registered or
		 * updated, not automatically detected in any way.
		 * Optional.
		 */
		placeId: FormControl<string | null | undefined>,

		/**
		 * Properties of the beacon device, for example battery type or firmware
		 * version.
		 * Optional.
		 */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Some beacons may require a user to provide an authorization key before
		 * changing any of its configuration (e.g. broadcast frames, transmit power).
		 * This field provides a place to store and control access to that key.
		 * This field is populated in responses to `GET /v1beta1/beacons/3!beaconId`
		 * from users with write access to the given beacon. That is to say: If the
		 * user is authorized to write the beacon's confidential data in the service,
		 * the service considers them authorized to configure the beacon. Note
		 * that this key grants nothing on the service, only on the beacon itself.
		 */
		provisioningKey: FormControl<string | null | undefined>,

		/**
		 * Current status of the beacon.
		 * Required.
		 */
		status: FormControl<BeaconStatus | null | undefined>,
	}
	export function CreateBeaconFormGroup() {
		return new FormGroup<BeaconFormProperties>({
			beaconName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expectedStability: new FormControl<BeaconExpectedStability | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			provisioningKey: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BeaconStatus | null | undefined>(undefined),
		});

	}


	/**
	 * Write-only registration parameters for beacons using Eddystone-EID format.
	 * Two ways of securely registering an Eddystone-EID beacon with the service
	 * are supported:
	 * 1. Perform an ECDH key exchange via this API, including a previous call
	 *    to `GET /v1beta1/eidparams`. In this case the fields
	 *    `beacon_ecdh_public_key` and `service_ecdh_public_key` should be
	 *    populated and `beacon_identity_key` should not be populated. This
	 *    method ensures that only the two parties in the ECDH key exchange can
	 *    compute the identity key, which becomes a secret between them.
	 * 2. Derive or obtain the beacon's identity key via other secure means
	 *    (perhaps an ECDH key exchange between the beacon and a mobile device
	 *    or any other secure method), and then submit the resulting identity key
	 *    to the service. In this case `beacon_identity_key` field should be
	 *    populated, and neither of `beacon_ecdh_public_key` nor
	 *    `service_ecdh_public_key` fields should be. The security of this method
	 *    depends on how securely the parties involved (in particular the
	 *    bluetooth client) handle the identity key, and obviously on how
	 *    securely the identity key was generated.
	 * See [the Eddystone
	 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
	 * at GitHub.
	 */
	export interface EphemeralIdRegistration {

		/**
		 * The beacon's public key used for the Elliptic curve Diffie-Hellman
		 * key exchange. When this field is populated, `service_ecdh_public_key`
		 * must also be populated, and `beacon_identity_key` must not be.
		 */
		beaconEcdhPublicKey?: string | null;

		/**
		 * The private key of the beacon. If this field is populated,
		 * `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be
		 * populated.
		 */
		beaconIdentityKey?: string | null;

		/**
		 * The initial clock value of the beacon. The beacon's clock must have
		 * begun counting at this value immediately prior to transmitting this
		 * value to the resolving service. Significant delay in transmitting this
		 * value to the service risks registration or resolution failures. If a
		 * value is not provided, the default is zero.
		 */
		initialClockValue?: string | null;

		/**
		 * An initial ephemeral ID calculated using the clock value submitted as
		 * `initial_clock_value`, and the secret key generated by the
		 * Diffie-Hellman key exchange using `service_ecdh_public_key` and
		 * `service_ecdh_public_key`. This initial EID value will be used by the
		 * service to confirm that the key exchange process was successful.
		 */
		initialEid?: string | null;

		/**
		 * Indicates the nominal period between each rotation of the beacon's
		 * ephemeral ID. "Nominal" because the beacon should randomize the
		 * actual interval. See [the spec at
		 * github](https://github.com/google/eddystone/tree/master/eddystone-eid)
		 * for details. This value corresponds to a power-of-two scaler on the
		 * beacon's clock: when the scaler value is K, the beacon will begin
		 * broadcasting a new ephemeral ID on average every 2^K seconds.
		 */
		rotationPeriodExponent?: number | null;

		/**
		 * The service's public key used for the Elliptic curve Diffie-Hellman
		 * key exchange. When this field is populated, `beacon_ecdh_public_key`
		 * must also be populated, and `beacon_identity_key` must not be.
		 */
		serviceEcdhPublicKey?: string | null;
	}

	/**
	 * Write-only registration parameters for beacons using Eddystone-EID format.
	 * Two ways of securely registering an Eddystone-EID beacon with the service
	 * are supported:
	 * 1. Perform an ECDH key exchange via this API, including a previous call
	 *    to `GET /v1beta1/eidparams`. In this case the fields
	 *    `beacon_ecdh_public_key` and `service_ecdh_public_key` should be
	 *    populated and `beacon_identity_key` should not be populated. This
	 *    method ensures that only the two parties in the ECDH key exchange can
	 *    compute the identity key, which becomes a secret between them.
	 * 2. Derive or obtain the beacon's identity key via other secure means
	 *    (perhaps an ECDH key exchange between the beacon and a mobile device
	 *    or any other secure method), and then submit the resulting identity key
	 *    to the service. In this case `beacon_identity_key` field should be
	 *    populated, and neither of `beacon_ecdh_public_key` nor
	 *    `service_ecdh_public_key` fields should be. The security of this method
	 *    depends on how securely the parties involved (in particular the
	 *    bluetooth client) handle the identity key, and obviously on how
	 *    securely the identity key was generated.
	 * See [the Eddystone
	 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
	 * at GitHub.
	 */
	export interface EphemeralIdRegistrationFormProperties {

		/**
		 * The beacon's public key used for the Elliptic curve Diffie-Hellman
		 * key exchange. When this field is populated, `service_ecdh_public_key`
		 * must also be populated, and `beacon_identity_key` must not be.
		 */
		beaconEcdhPublicKey: FormControl<string | null | undefined>,

		/**
		 * The private key of the beacon. If this field is populated,
		 * `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be
		 * populated.
		 */
		beaconIdentityKey: FormControl<string | null | undefined>,

		/**
		 * The initial clock value of the beacon. The beacon's clock must have
		 * begun counting at this value immediately prior to transmitting this
		 * value to the resolving service. Significant delay in transmitting this
		 * value to the service risks registration or resolution failures. If a
		 * value is not provided, the default is zero.
		 */
		initialClockValue: FormControl<string | null | undefined>,

		/**
		 * An initial ephemeral ID calculated using the clock value submitted as
		 * `initial_clock_value`, and the secret key generated by the
		 * Diffie-Hellman key exchange using `service_ecdh_public_key` and
		 * `service_ecdh_public_key`. This initial EID value will be used by the
		 * service to confirm that the key exchange process was successful.
		 */
		initialEid: FormControl<string | null | undefined>,

		/**
		 * Indicates the nominal period between each rotation of the beacon's
		 * ephemeral ID. "Nominal" because the beacon should randomize the
		 * actual interval. See [the spec at
		 * github](https://github.com/google/eddystone/tree/master/eddystone-eid)
		 * for details. This value corresponds to a power-of-two scaler on the
		 * beacon's clock: when the scaler value is K, the beacon will begin
		 * broadcasting a new ephemeral ID on average every 2^K seconds.
		 */
		rotationPeriodExponent: FormControl<number | null | undefined>,

		/**
		 * The service's public key used for the Elliptic curve Diffie-Hellman
		 * key exchange. When this field is populated, `beacon_ecdh_public_key`
		 * must also be populated, and `beacon_identity_key` must not be.
		 */
		serviceEcdhPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateEphemeralIdRegistrationFormGroup() {
		return new FormGroup<EphemeralIdRegistrationFormProperties>({
			beaconEcdhPublicKey: new FormControl<string | null | undefined>(undefined),
			beaconIdentityKey: new FormControl<string | null | undefined>(undefined),
			initialClockValue: new FormControl<string | null | undefined>(undefined),
			initialEid: new FormControl<string | null | undefined>(undefined),
			rotationPeriodExponent: new FormControl<number | null | undefined>(undefined),
			serviceEcdhPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BeaconExpectedStability { STABILITY_UNSPECIFIED = 0, STABLE = 1, PORTABLE = 2, MOBILE = 3, ROVING = 4 }


	/**
	 * Indoor level, a human-readable string as returned by Google Maps APIs,
	 * useful to indicate which floor of a building a beacon is located on.
	 */
	export interface IndoorLevel {

		/** The name of this level. */
		name?: string | null;
	}

	/**
	 * Indoor level, a human-readable string as returned by Google Maps APIs,
	 * useful to indicate which floor of a building a beacon is located on.
	 */
	export interface IndoorLevelFormProperties {

		/** The name of this level. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIndoorLevelFormGroup() {
		return new FormGroup<IndoorLevelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing a latitude/longitude pair. This is expressed as a pair
	 * of doubles representing degrees latitude and degrees longitude. Unless
	 * specified otherwise, this must conform to the
	 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
	 * standard</a>. Values must be within normalized ranges.
	 */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/**
	 * An object representing a latitude/longitude pair. This is expressed as a pair
	 * of doubles representing degrees latitude and degrees longitude. Unless
	 * specified otherwise, this must conform to the
	 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
	 * standard</a>. Values must be within normalized ranges.
	 */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BeaconStatus { STATUS_UNSPECIFIED = 0, ACTIVE = 1, DECOMMISSIONED = 2, INACTIVE = 3 }


	/** Project-specific data associated with a beacon. */
	export interface BeaconAttachment {

		/**
		 * Resource name of this attachment. Attachment names have the format:
		 * <code>beacons/<var>beacon_id</var>/attachments/<var>attachment_id</var></code>.
		 * Leave this empty on creation.
		 */
		attachmentName?: string | null;

		/**
		 * The UTC time when this attachment was created, in milliseconds since the
		 * UNIX epoch.
		 */
		creationTimeMs?: string | null;

		/**
		 * An opaque data container for client-provided data. Must be
		 * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
		 * requests, and will be so encoded (with padding) in responses.
		 * Required.
		 */
		data?: string | null;

		/**
		 * The distance away from the beacon at which this attachment should be
		 * delivered to a mobile app.
		 * Setting this to a value greater than zero indicates that the app should
		 * behave as if the beacon is "seen" when the mobile device is less than this
		 * distance away from the beacon.
		 * Different attachments on the same beacon can have different max distances.
		 * Note that even though this value is expressed with fractional meter
		 * precision, real-world behavior is likley to be much less precise than one
		 * meter, due to the nature of current Bluetooth radio technology.
		 * Optional. When not set or zero, the attachment should be delivered at the
		 * beacon's outer limit of detection.
		 * Negative values are invalid and return an error.
		 */
		maxDistanceMeters?: number | null;

		/**
		 * Specifies what kind of attachment this is. Tells a client how to
		 * interpret the `data` field. Format is <var>namespace/type</var>. Namespace
		 * provides type separation between clients. Type describes the type of
		 * `data`, for use by the client when parsing the `data` field.
		 * Required.
		 */
		namespacedType?: string | null;
	}

	/** Project-specific data associated with a beacon. */
	export interface BeaconAttachmentFormProperties {

		/**
		 * Resource name of this attachment. Attachment names have the format:
		 * <code>beacons/<var>beacon_id</var>/attachments/<var>attachment_id</var></code>.
		 * Leave this empty on creation.
		 */
		attachmentName: FormControl<string | null | undefined>,

		/**
		 * The UTC time when this attachment was created, in milliseconds since the
		 * UNIX epoch.
		 */
		creationTimeMs: FormControl<string | null | undefined>,

		/**
		 * An opaque data container for client-provided data. Must be
		 * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
		 * requests, and will be so encoded (with padding) in responses.
		 * Required.
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * The distance away from the beacon at which this attachment should be
		 * delivered to a mobile app.
		 * Setting this to a value greater than zero indicates that the app should
		 * behave as if the beacon is "seen" when the mobile device is less than this
		 * distance away from the beacon.
		 * Different attachments on the same beacon can have different max distances.
		 * Note that even though this value is expressed with fractional meter
		 * precision, real-world behavior is likley to be much less precise than one
		 * meter, due to the nature of current Bluetooth radio technology.
		 * Optional. When not set or zero, the attachment should be delivered at the
		 * beacon's outer limit of detection.
		 * Negative values are invalid and return an error.
		 */
		maxDistanceMeters: FormControl<number | null | undefined>,

		/**
		 * Specifies what kind of attachment this is. Tells a client how to
		 * interpret the `data` field. Format is <var>namespace/type</var>. Namespace
		 * provides type separation between clients. Type describes the type of
		 * `data`, for use by the client when parsing the `data` field.
		 * Required.
		 */
		namespacedType: FormControl<string | null | undefined>,
	}
	export function CreateBeaconAttachmentFormGroup() {
		return new FormGroup<BeaconAttachmentFormProperties>({
			attachmentName: new FormControl<string | null | undefined>(undefined),
			creationTimeMs: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			maxDistanceMeters: new FormControl<number | null | undefined>(undefined),
			namespacedType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A subset of beacon information served via the `beaconinfo.getforobserved`
	 * method, which you call when users of your app encounter your beacons.
	 */
	export interface BeaconInfo {

		/** Defines a unique identifier of a beacon as broadcast by the device. */
		advertisedId?: AdvertisedId;

		/**
		 * Attachments matching the type(s) requested.
		 * May be empty if no attachment types were requested.
		 */
		attachments?: Array<AttachmentInfo>;

		/** The name under which the beacon is registered. */
		beaconName?: string | null;
	}

	/**
	 * A subset of beacon information served via the `beaconinfo.getforobserved`
	 * method, which you call when users of your app encounter your beacons.
	 */
	export interface BeaconInfoFormProperties {

		/** The name under which the beacon is registered. */
		beaconName: FormControl<string | null | undefined>,
	}
	export function CreateBeaconInfoFormGroup() {
		return new FormGroup<BeaconInfoFormProperties>({
			beaconName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface Date {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day?: number | null;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number | null;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number | null;
	}

	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface DateFormProperties {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for a request to delete attachments. */
	export interface DeleteAttachmentsResponse {

		/** The number of attachments that were deleted. */
		numDeleted?: number | null;
	}

	/** Response for a request to delete attachments. */
	export interface DeleteAttachmentsResponseFormProperties {

		/** The number of attachments that were deleted. */
		numDeleted: FormControl<number | null | undefined>,
	}
	export function CreateDeleteAttachmentsResponseFormGroup() {
		return new FormGroup<DeleteAttachmentsResponseFormProperties>({
			numDeleted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Diagnostics for a single beacon. */
	export interface Diagnostics {

		/** An unordered list of Alerts that the beacon has. */
		alerts?: Array<string>;

		/**
		 * Resource name of the beacon. For Eddystone-EID beacons, this may
		 * be the beacon's current EID, or the beacon's "stable" Eddystone-UID.
		 */
		beaconName?: string | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		estimatedLowBatteryDate?: Date;
	}

	/** Diagnostics for a single beacon. */
	export interface DiagnosticsFormProperties {

		/**
		 * Resource name of the beacon. For Eddystone-EID beacons, this may
		 * be the beacon's current EID, or the beacon's "stable" Eddystone-UID.
		 */
		beaconName: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticsFormGroup() {
		return new FormGroup<DiagnosticsFormProperties>({
			beaconName: new FormControl<string | null | undefined>(undefined),
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
	 * Information a client needs to provision and register beacons that
	 * broadcast Eddystone-EID format beacon IDs, using Elliptic curve
	 * Diffie-Hellman key exchange. See
	 * [the Eddystone
	 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
	 * at GitHub.
	 */
	export interface EphemeralIdRegistrationParams {

		/**
		 * Indicates the maximum rotation period supported by the service.
		 * See
		 * EddystoneEidRegistration.rotation_period_exponent
		 */
		maxRotationPeriodExponent?: number | null;

		/**
		 * Indicates the minimum rotation period supported by the service.
		 * See
		 * EddystoneEidRegistration.rotation_period_exponent
		 */
		minRotationPeriodExponent?: number | null;

		/**
		 * The beacon service's public key for use by a beacon to derive its
		 * Identity Key using Elliptic Curve Diffie-Hellman key exchange.
		 */
		serviceEcdhPublicKey?: string | null;
	}

	/**
	 * Information a client needs to provision and register beacons that
	 * broadcast Eddystone-EID format beacon IDs, using Elliptic curve
	 * Diffie-Hellman key exchange. See
	 * [the Eddystone
	 * specification](https://github.com/google/eddystone/tree/master/eddystone-eid)
	 * at GitHub.
	 */
	export interface EphemeralIdRegistrationParamsFormProperties {

		/**
		 * Indicates the maximum rotation period supported by the service.
		 * See
		 * EddystoneEidRegistration.rotation_period_exponent
		 */
		maxRotationPeriodExponent: FormControl<number | null | undefined>,

		/**
		 * Indicates the minimum rotation period supported by the service.
		 * See
		 * EddystoneEidRegistration.rotation_period_exponent
		 */
		minRotationPeriodExponent: FormControl<number | null | undefined>,

		/**
		 * The beacon service's public key for use by a beacon to derive its
		 * Identity Key using Elliptic Curve Diffie-Hellman key exchange.
		 */
		serviceEcdhPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateEphemeralIdRegistrationParamsFormGroup() {
		return new FormGroup<EphemeralIdRegistrationParamsFormProperties>({
			maxRotationPeriodExponent: new FormControl<number | null | undefined>(undefined),
			minRotationPeriodExponent: new FormControl<number | null | undefined>(undefined),
			serviceEcdhPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Request for beacon and attachment information about beacons that
	 * a mobile client has encountered "in the wild".
	 */
	export interface GetInfoForObservedBeaconsRequest {

		/**
		 * Specifies what kind of attachments to include in the response.
		 * When given, the response will include only attachments of the given types.
		 * When empty, no attachments will be returned. Must be in the format
		 * <var>namespace/type</var>. Accepts `*` to specify all types in
		 * all namespaces owned by the client.
		 * Optional.
		 */
		namespacedTypes?: Array<string>;

		/**
		 * The beacons that the client has encountered.
		 * At least one must be given.
		 */
		observations?: Array<Observation>;
	}

	/**
	 * Request for beacon and attachment information about beacons that
	 * a mobile client has encountered "in the wild".
	 */
	export interface GetInfoForObservedBeaconsRequestFormProperties {
	}
	export function CreateGetInfoForObservedBeaconsRequestFormGroup() {
		return new FormGroup<GetInfoForObservedBeaconsRequestFormProperties>({
		});

	}


	/** Represents one beacon observed once. */
	export interface Observation {

		/** Defines a unique identifier of a beacon as broadcast by the device. */
		advertisedId?: AdvertisedId;

		/**
		 * The array of telemetry bytes received from the beacon. The server is
		 * responsible for parsing it. This field may frequently be empty, as
		 * with a beacon that transmits telemetry only occasionally.
		 */
		telemetry?: string | null;

		/** Time when the beacon was observed. */
		timestampMs?: string | null;
	}

	/** Represents one beacon observed once. */
	export interface ObservationFormProperties {

		/**
		 * The array of telemetry bytes received from the beacon. The server is
		 * responsible for parsing it. This field may frequently be empty, as
		 * with a beacon that transmits telemetry only occasionally.
		 */
		telemetry: FormControl<string | null | undefined>,

		/** Time when the beacon was observed. */
		timestampMs: FormControl<string | null | undefined>,
	}
	export function CreateObservationFormGroup() {
		return new FormGroup<ObservationFormProperties>({
			telemetry: new FormControl<string | null | undefined>(undefined),
			timestampMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Information about the requested beacons, optionally including attachment
	 * data.
	 */
	export interface GetInfoForObservedBeaconsResponse {

		/**
		 * Public information about beacons.
		 * May be empty if the request matched no beacons.
		 */
		beacons?: Array<BeaconInfo>;
	}

	/**
	 * Information about the requested beacons, optionally including attachment
	 * data.
	 */
	export interface GetInfoForObservedBeaconsResponseFormProperties {
	}
	export function CreateGetInfoForObservedBeaconsResponseFormGroup() {
		return new FormGroup<GetInfoForObservedBeaconsResponseFormProperties>({
		});

	}


	/** Response to `ListBeaconAttachments` that contains the requested attachments. */
	export interface ListBeaconAttachmentsResponse {

		/** The attachments that corresponded to the request params. */
		attachments?: Array<BeaconAttachment>;
	}

	/** Response to `ListBeaconAttachments` that contains the requested attachments. */
	export interface ListBeaconAttachmentsResponseFormProperties {
	}
	export function CreateListBeaconAttachmentsResponseFormGroup() {
		return new FormGroup<ListBeaconAttachmentsResponseFormProperties>({
		});

	}


	/** Response that contains list beacon results and pagination help. */
	export interface ListBeaconsResponse {

		/** The beacons that matched the search criteria. */
		beacons?: Array<Beacon>;

		/**
		 * An opaque pagination token that the client may provide in their next
		 * request to retrieve the next page of results.
		 */
		nextPageToken?: string | null;

		/**
		 * Estimate of the total number of beacons matched by the query. Higher
		 * values may be less accurate.
		 */
		totalCount?: string | null;
	}

	/** Response that contains list beacon results and pagination help. */
	export interface ListBeaconsResponseFormProperties {

		/**
		 * An opaque pagination token that the client may provide in their next
		 * request to retrieve the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Estimate of the total number of beacons matched by the query. Higher
		 * values may be less accurate.
		 */
		totalCount: FormControl<string | null | undefined>,
	}
	export function CreateListBeaconsResponseFormGroup() {
		return new FormGroup<ListBeaconsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response that contains the requested diagnostics. */
	export interface ListDiagnosticsResponse {

		/** The diagnostics matching the given request. */
		diagnostics?: Array<Diagnostics>;

		/**
		 * Token that can be used for pagination. Returned only if the
		 * request matches more beacons than can be returned in this response.
		 */
		nextPageToken?: string | null;
	}

	/** Response that contains the requested diagnostics. */
	export interface ListDiagnosticsResponseFormProperties {

		/**
		 * Token that can be used for pagination. Returned only if the
		 * request matches more beacons than can be returned in this response.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiagnosticsResponseFormGroup() {
		return new FormGroup<ListDiagnosticsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to ListNamespacesRequest that contains all the project's namespaces. */
	export interface ListNamespacesResponse {

		/** The attachments that corresponded to the request params. */
		namespaces?: Array<Namespace>;
	}

	/** Response to ListNamespacesRequest that contains all the project's namespaces. */
	export interface ListNamespacesResponseFormProperties {
	}
	export function CreateListNamespacesResponseFormGroup() {
		return new FormGroup<ListNamespacesResponseFormProperties>({
		});

	}


	/**
	 * An attachment namespace defines read and write access for all the attachments
	 * created under it. Each namespace is globally unique, and owned by one
	 * project which is the only project that can create attachments under it.
	 */
	export interface Namespace {

		/**
		 * Resource name of this namespace. Namespaces names have the format:
		 * <code>namespaces/<var>namespace</var></code>.
		 */
		namespaceName?: string | null;

		/**
		 * Specifies what clients may receive attachments under this namespace
		 * via `beaconinfo.getforobserved`.
		 */
		servingVisibility?: NamespaceServingVisibility | null;
	}

	/**
	 * An attachment namespace defines read and write access for all the attachments
	 * created under it. Each namespace is globally unique, and owned by one
	 * project which is the only project that can create attachments under it.
	 */
	export interface NamespaceFormProperties {

		/**
		 * Resource name of this namespace. Namespaces names have the format:
		 * <code>namespaces/<var>namespace</var></code>.
		 */
		namespaceName: FormControl<string | null | undefined>,

		/**
		 * Specifies what clients may receive attachments under this namespace
		 * via `beaconinfo.getforobserved`.
		 */
		servingVisibility: FormControl<NamespaceServingVisibility | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined),
			servingVisibility: new FormControl<NamespaceServingVisibility | null | undefined>(undefined),
		});

	}

	export enum NamespaceServingVisibility { VISIBILITY_UNSPECIFIED = 0, UNLISTED = 1, PUBLIC = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Given one or more beacon observations, returns any beacon information
		 * and attachments accessible to your application. Authorize by using the
		 * [API
		 * key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
		 * for the application.
		 * Post v1beta1/beaconinfo:getforobserved
		 * @return {void} Successful response
		 */
		Proximitybeacon_beaconinfo_getforobserved(requestBody: GetInfoForObservedBeaconsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/beaconinfo:getforobserved', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches the beacon registry for beacons that match the given search
		 * criteria. Only those beacons that the client has permission to list
		 * will be returned.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
		 * the Google Developers Console project.
		 * Get v1beta1/beacons
		 * @param {number} pageSize The maximum number of records to return for this request, up to a
		 * server-defined upper limit.
		 * @param {string} pageToken A pagination token obtained from a previous request to list beacons.
		 * @param {string} projectId The project id to list beacons under. If not present then the project
		 * credential that made the request is used as the project.
		 * Optional.
		 * @param {string} q Filter query string that supports the following field filters:
		 * * **description:`"<string>"`**
		 *   For example: **description:"Room 3"**
		 *   Returns beacons whose description matches tokens in the string "Room 3"
		 *   (not necessarily that exact string).
		 *   The string must be double-quoted.
		 * * **status:`<enum>`**
		 *   For example: **status:active**
		 *   Returns beacons whose status matches the given value. Values must be
		 *   one of the Beacon.Status enum values (case insensitive). Accepts
		 *   multiple filters which will be combined with OR logic.
		 * * **stability:`<enum>`**
		 *   For example: **stability:mobile**
		 *   Returns beacons whose expected stability matches the given value.
		 *   Values must be one of the Beacon.Stability enum values (case
		 *   insensitive). Accepts multiple filters which will be combined with
		 *   OR logic.
		 * * **place\_id:`"<string>"`**
		 *   For example: **place\_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="**
		 *   Returns beacons explicitly registered at the given place, expressed as
		 *   a Place ID obtained from [Google Places API](/places/place-id). Does not
		 *   match places inside the given place. Does not consider the beacon's
		 *   actual location (which may be different from its registered place).
		 *   Accepts multiple filters that will be combined with OR logic. The place
		 *   ID must be double-quoted.
		 * * **registration\_time`[<|>|<=|>=]<integer>`**
		 *   For example: **registration\_time>=1433116800**
		 *   Returns beacons whose registration time matches the given filter.
		 *   Supports the operators: <, >, <=, and >=. Timestamp must be expressed as
		 *   an integer number of seconds since midnight January 1, 1970 UTC. Accepts
		 *   at most two filters that will be combined with AND logic, to support
		 *   "between" semantics. If more than two are supplied, the latter ones are
		 *   ignored.
		 * * **lat:`<double> lng:<double> radius:<integer>`**
		 *   For example: **lat:51.1232343 lng:-1.093852 radius:1000**
		 *   Returns beacons whose registered location is within the given circle.
		 *   When any of these fields are given, all are required. Latitude and
		 *   longitude must be decimal degrees between -90.0 and 90.0 and between
		 *   -180.0 and 180.0 respectively. Radius must be an integer number of
		 *   meters between 10 and 1,000,000 (1000 km).
		 * * **property:`"<string>=<string>"`**
		 *   For example: **property:"battery-type=CR2032"**
		 *   Returns beacons which have a property of the given name and value.
		 *   Supports multiple filters which will be combined with OR logic.
		 *   The entire name=value string must be double-quoted as one string.
		 * * **attachment\_type:`"<string>"`**
		 *   For example: **attachment_type:"my-namespace/my-type"**
		 *   Returns beacons having at least one attachment of the given namespaced
		 *   type. Supports "any within this namespace" via the partial wildcard
		 *   syntax: "my-namespace/*". Supports multiple filters which will be
		 *   combined with OR logic. The string must be double-quoted.
		 * * **indoor\_level:`"<string>"`**
		 *   For example: **indoor\_level:"1"**
		 *   Returns beacons which are located on the given indoor level. Accepts
		 *   multiple filters that will be combined with OR logic.
		 * Multiple filters on the same field are combined with OR logic (except
		 * registration_time which is combined with AND logic).
		 * Multiple filters on different fields are combined with AND logic.
		 * Filters should be separated by spaces.
		 * As with any HTTP query string parameter, the whole filter expression must
		 * be URL-encoded.
		 * Example REST request:
		 * `GET
		 * /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_list(pageSize: number | null | undefined, pageToken: string | null | undefined, projectId: string | null | undefined, q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/beacons?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Registers a previously unregistered beacon given its `advertisedId`.
		 * These IDs are unique within the system. An ID can be registered only once.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/beacons:register
		 * @param {string} projectId The project id of the project the beacon will be registered to. If
		 * the project id is not specified then the project making the request
		 * is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_register(projectId: string | null | undefined, requestBody: Beacon): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/beacons:register?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Proximity Beacon API's current public key and associated
		 * parameters used to initiate the Diffie-Hellman key exchange required to
		 * register a beacon that broadcasts the Eddystone-EID format. This key
		 * changes periodically; clients may cache it and re-use the same public key
		 * to provision and register multiple beacons. However, clients should be
		 * prepared to refresh this key when they encounter an error registering an
		 * Eddystone-EID beacon.
		 * Get v1beta1/eidparams
		 * @return {void} Successful response
		 */
		Proximitybeacon_getEidparams(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/eidparams', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all attachment namespaces owned by your Google Developers Console
		 * project. Attachment data associated with a beacon must include a
		 * namespaced type, and the namespace must be owned by your project.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
		 * the Google Developers Console project.
		 * Get v1beta1/namespaces
		 * @param {string} projectId The project id to list namespaces under.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_namespaces_list(projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/namespaces?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified attachment for the given beacon. Each attachment has
		 * a unique attachment name (`attachmentName`) which is returned when you
		 * fetch the attachment data via this API. You specify this with the delete
		 * request to control which attachment is removed. This operation cannot be
		 * undone.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Delete v1beta1/{attachmentName}
		 * @param {string} attachmentName The attachment name (`attachmentName`) of
		 * the attachment to remove. For example:
		 * `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For
		 * Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the
		 * beacon's current EID, or its "stable" Eddystone-UID.
		 * Required.
		 * @param {string} projectId The project id of the attachment to delete. If not provided, the project
		 * that is making the request is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_attachments_delete(attachmentName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (attachmentName == null ? '' : encodeURIComponent(attachmentName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified beacon including all diagnostics data for the beacon
		 * as well as any attachments on the beacon (including those belonging to
		 * other projects). This operation cannot be undone.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Delete v1beta1/{beaconName}
		 * @param {string} beaconName Beacon that should be deleted. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the beacon to delete. If not provided, the project
		 * that is making the request is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_delete(beaconName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns detailed information about the specified beacon.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
		 * the Google Developers Console project.
		 * Requests may supply an Eddystone-EID beacon name in the form:
		 * `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID
		 * broadcast by the beacon. The returned `Beacon` object will contain the
		 * beacon's stable Eddystone-UID. Clients not authorized to resolve the
		 * beacon's ephemeral Eddystone-EID broadcast will receive an error.
		 * Get v1beta1/{beaconName}
		 * @param {string} beaconName Resource name of this beacon. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the beacon to request. If the project id is not specified
		 * then the project making the request is used. The project id must match the
		 * project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_get(beaconName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the information about the specified beacon. **Any field that you do
		 * not populate in the submitted beacon will be permanently erased**, so you
		 * should follow the "read, modify, write" pattern to avoid inadvertently
		 * destroying data.
		 * Changes to the beacon status via this method will be  silently ignored.
		 * To update beacon status, use the separate methods on this API for
		 * activation, deactivation, and decommissioning.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Put v1beta1/{beaconName}
		 * @param {string} beaconName Resource name of this beacon. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.
		 * This field must be left empty when registering. After reading a beacon,
		 * clients can use the name for future operations.
		 * @param {string} projectId The project id of the beacon to update. If the project id is not
		 * specified then the project making the request is used. The project id
		 * must match the project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_update(beaconName: string, projectId: string | null | undefined, requestBody: Beacon): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the attachments for the specified beacon that match the specified
		 * namespaced-type pattern.
		 * To control which namespaced types are returned, you add the
		 * `namespacedType` query parameter to the request. You must either use
		 * `*`, to return all attachments, or the namespace must be one of
		 * the ones returned from the  `namespaces` endpoint.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
		 * the Google Developers Console project.
		 * Get v1beta1/{beaconName}/attachments
		 * @param {string} beaconName Beacon whose attachments should be fetched. A beacon name has the
		 * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
		 * by the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} namespacedType Specifies the namespace and type of attachment to include in response in
		 * <var>namespace/type</var> format. Accepts `*` to specify
		 * "all types in all namespaces".
		 * @param {string} projectId The project id to list beacon attachments under. This field can be
		 * used when "*" is specified to mean all attachment namespaces. Projects
		 * may have multiple attachments with multiple namespaces. If "*" is
		 * specified and the projectId string is empty, then the project
		 * making the request is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_attachments_list(beaconName: string, namespacedType: string | null | undefined, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '/attachments&namespacedType=' + (namespacedType == null ? '' : encodeURIComponent(namespacedType)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the given data with the specified beacon. Attachment data must
		 * contain two parts:
		 * <ul>
		 * <li>A namespaced type.</li>
		 * <li>The actual attachment data itself.</li>
		 * </ul>
		 * The namespaced type consists of two parts, the namespace and the type.
		 * The namespace must be one of the values returned by the `namespaces`
		 * endpoint, while the type can be a string of any characters except for the
		 * forward slash (`/`) up to 100 characters in length.
		 * Attachment data can be up to 1024 bytes long.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/{beaconName}/attachments
		 * @param {string} beaconName Beacon on which the attachment should be created. A beacon name has the
		 * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
		 * by the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the project the attachment will belong to. If
		 * the project id is not specified then the project making the request
		 * is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_attachments_create(beaconName: string, projectId: string | null | undefined, requestBody: BeaconAttachment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '/attachments&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes multiple attachments on a given beacon. This operation is
		 * permanent and cannot be undone.
		 * You can optionally specify `namespacedType` to choose which attachments
		 * should be deleted. If you do not specify `namespacedType`,  all your
		 * attachments on the given beacon will be deleted. You also may explicitly
		 * specify `*` to delete all.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/{beaconName}/attachments:batchDelete
		 * @param {string} beaconName The beacon whose attachments should be deleted. A beacon name has the
		 * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
		 * by the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} namespacedType Specifies the namespace and type of attachments to delete in
		 * `namespace/type` format. Accepts `*` to specify
		 * "all types in all namespaces".
		 * Optional.
		 * @param {string} projectId The project id to delete beacon attachments under. This field can be
		 * used when "*" is specified to mean all attachment namespaces. Projects
		 * may have multiple attachments with multiple namespaces. If "*" is
		 * specified and the projectId string is empty, then the project
		 * making the request is used.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_attachments_batchDelete(beaconName: string, namespacedType: string | null | undefined, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '/attachments:batchDelete&namespacedType=' + (namespacedType == null ? '' : encodeURIComponent(namespacedType)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the diagnostics for a single beacon. You can also list diagnostics for
		 * all the beacons owned by your Google Developers Console project by using
		 * the beacon name `beacons/-`.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **viewer**, **Is owner** or **Can edit** permissions in
		 * the Google Developers Console project.
		 * Get v1beta1/{beaconName}/diagnostics
		 * @param {string} beaconName Beacon that the diagnostics are for.
		 * @param {Proximitybeacon_beacons_diagnostics_listAlertFilter} alertFilter Requests only beacons that have the given alert. For example, to find
		 * beacons that have low batteries use `alert_filter=LOW_BATTERY`.
		 * @param {number} pageSize Specifies the maximum number of results to return. Defaults to
		 * 10. Maximum 1000. Optional.
		 * @param {string} pageToken Requests results that occur after the `page_token`, obtained from the
		 * response to a previous request. Optional.
		 * @param {string} projectId Requests only diagnostic records for the given project id. If not set,
		 * then the project making the request will be used for looking up
		 * diagnostic records. Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_diagnostics_list(beaconName: string, alertFilter: Proximitybeacon_beacons_diagnostics_listAlertFilter | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + '/diagnostics&alertFilter=' + alertFilter + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activates a beacon. A beacon that is active will return information
		 * and attachment data when queried via `beaconinfo.getforobserved`.
		 * Calling this method on an already active beacon will do nothing (but
		 * will return a successful response code).
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/{beaconName}:activate
		 * @param {string} beaconName Beacon that should be activated. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the beacon to activate. If the project id is not
		 * specified then the project making the request is used. The project id
		 * must match the project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_activate(beaconName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + ':activate&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivates a beacon. Once deactivated, the API will not return
		 * information nor attachment data for the beacon when queried via
		 * `beaconinfo.getforobserved`. Calling this method on an already inactive
		 * beacon will do nothing (but will return a successful response code).
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/{beaconName}:deactivate
		 * @param {string} beaconName Beacon that should be deactivated. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID or the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the beacon to deactivate. If the project id is not
		 * specified then the project making the request is used. The project id must
		 * match the project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_deactivate(beaconName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + ':deactivate&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Decommissions the specified beacon in the service. This beacon will no
		 * longer be returned from `beaconinfo.getforobserved`. This operation is
		 * permanent -- you will not be able to re-register a beacon with this ID
		 * again.
		 * Authenticate using an [OAuth access
		 * token](https://developers.google.com/identity/protocols/OAuth2) from a
		 * signed-in user with **Is owner** or **Can edit** permissions in the Google
		 * Developers Console project.
		 * Post v1beta1/{beaconName}:decommission
		 * @param {string} beaconName Beacon that should be decommissioned. A beacon name has the format
		 * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
		 * the beacon and N is a code for the beacon's type. Possible values are
		 * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
		 * for AltBeacon. For Eddystone-EID beacons, you may use either the
		 * current EID of the beacon's "stable" UID.
		 * Required.
		 * @param {string} projectId The project id of the beacon to decommission. If the project id is not
		 * specified then the project making the request is used. The project id
		 * must match the project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_beacons_decommission(beaconName: string, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (beaconName == null ? '' : encodeURIComponent(beaconName)) + ':decommission&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the information about the specified namespace. Only the namespace
		 * visibility can be updated.
		 * Put v1beta1/{namespaceName}
		 * @param {string} namespaceName Resource name of this namespace. Namespaces names have the format:
		 * <code>namespaces/<var>namespace</var></code>.
		 * @param {string} projectId The project id of the namespace to update. If the project id is not
		 * specified then the project making the request is used. The project id
		 * must match the project that owns the beacon.
		 * Optional.
		 * @return {void} Successful response
		 */
		Proximitybeacon_namespaces_update(namespaceName: string, projectId: string | null | undefined, requestBody: Namespace): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Proximitybeacon_beacons_diagnostics_listAlertFilter { ALERT_UNSPECIFIED = 0, WRONG_LOCATION = 1, LOW_BATTERY = 2, LOW_ACTIVITY = 3 }

}

