import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetResponseFormProperties {
	}
	export function CreateCreateConfigurationSetResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetResponseFormProperties>({
		});

	}


	/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
	export enum TlsPolicy { REQUIRE = 'REQUIRE', OPTIONAL = 'OPTIONAL' }


	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateCreateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An email sending event type. For example, email sends, opens, and bounces are all email events. */
	export enum EventType { SEND = 'SEND', REJECT = 'REJECT', BOUNCE = 'BOUNCE', COMPLAINT = 'COMPLAINT', DELIVERY = 'DELIVERY', OPEN = 'OPEN', CLICK = 'CLICK', RENDERING_FAILURE = 'RENDERING_FAILURE' }


	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestination {

		/** Required */
		IamRoleArn: string;

		/** Required */
		DeliveryStreamArn: string;
	}

	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestinationFormProperties {

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestination {

		/** Required */
		DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
	}

	/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestinationFormProperties {
	}
	export function CreateCloudWatchDestinationFormGroup() {
		return new FormGroup<CloudWatchDestinationFormProperties>({
		});

	}


	/** An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfiguration {

		/** Required */
		DimensionName: string;

		/** Required */
		DimensionValueSource: DimensionValueSource;

		/** Required */
		DefaultDimensionValue: string;
	}

	/** An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfigurationFormProperties {

		/** Required */
		DimensionName: FormControl<string | null | undefined>,

		/** Required */
		DimensionValueSource: FormControl<DimensionValueSource | null | undefined>,

		/** Required */
		DefaultDimensionValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchDimensionConfigurationFormGroup() {
		return new FormGroup<CloudWatchDimensionConfigurationFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DimensionValueSource: new FormControl<DimensionValueSource | null | undefined>(undefined, [Validators.required]),
			DefaultDimensionValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>. */
	export enum DimensionValueSource { MESSAGE_TAG = 'MESSAGE_TAG', EMAIL_HEADER = 'EMAIL_HEADER', LINK_TAG = 'LINK_TAG' }


	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestination {

		/** Required */
		TopicArn: string;
	}

	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestinationFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsDestinationFormGroup() {
		return new FormGroup<SnsDestinationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns. */
	export interface PinpointDestination {
		ApplicationArn?: string;
	}

	/** An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns. */
	export interface PinpointDestinationFormProperties {
		ApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreatePinpointDestinationFormGroup() {
		return new FormGroup<PinpointDestinationFormProperties>({
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateDedicatedIpPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateDedicatedIpPoolResponseFormProperties {
	}
	export function CreateCreateDedicatedIpPoolResponseFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolResponseFormProperties>({
		});

	}


	/** Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponse {

		/** Required */
		ReportId: string;

		/** Required */
		DeliverabilityTestStatus: DeliverabilityTestStatus;
	}

	/** Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponseFormProperties {

		/** Required */
		ReportId: FormControl<string | null | undefined>,

		/** Required */
		DeliverabilityTestStatus: FormControl<DeliverabilityTestStatus | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportResponseFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliverabilityTestStatus: new FormControl<DeliverabilityTestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export enum DeliverabilityTestStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED' }


	/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface Message {

		/** Required */
		Subject: Content;

		/** Required */
		Body: Body;
	}

	/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface MessageFormProperties {
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
		});

	}


	/** An object that represents the content of the email, and optionally a character set specification. */
	export interface Content {

		/** Required */
		Data: string;
		Charset?: string;
	}

	/** An object that represents the content of the email, and optionally a character set specification. */
	export interface ContentFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
		Charset: FormControl<string | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Charset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the body of the email message. */
	export interface Body {
		Text?: Content;
		Html?: Content;
	}

	/** Represents the body of the email message. */
	export interface BodyFormProperties {
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
		});

	}


	/** The raw email message. */
	export interface RawMessage {

		/** Required */
		Data: string;
	}

	/** The raw email message. */
	export interface RawMessageFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRawMessageFormGroup() {
		return new FormGroup<RawMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Template {
		TemplateArn?: string;
		TemplateData?: string;
	}
	export interface TemplateFormProperties {
		TemplateArn: FormControl<string | null | undefined>,
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			TemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountSuspendedException {
	}
	export interface AccountSuspendedExceptionFormProperties {
	}
	export function CreateAccountSuspendedExceptionFormGroup() {
		return new FormGroup<AccountSuspendedExceptionFormProperties>({
		});

	}

	export interface SendingPausedException {
	}
	export interface SendingPausedExceptionFormProperties {
	}
	export function CreateSendingPausedExceptionFormGroup() {
		return new FormGroup<SendingPausedExceptionFormProperties>({
		});

	}

	export interface MessageRejected {
	}
	export interface MessageRejectedFormProperties {
	}
	export function CreateMessageRejectedFormGroup() {
		return new FormGroup<MessageRejectedFormProperties>({
		});

	}

	export interface MailFromDomainNotVerifiedException {
	}
	export interface MailFromDomainNotVerifiedExceptionFormProperties {
	}
	export function CreateMailFromDomainNotVerifiedExceptionFormGroup() {
		return new FormGroup<MailFromDomainNotVerifiedExceptionFormProperties>({
		});

	}


	/** <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponse {
		IdentityType?: IdentityType;
		VerifiedForSendingStatus?: boolean | null;
		DkimAttributes?: DkimAttributes;
	}

	/** <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponseFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEmailIdentityResponseFormGroup() {
		return new FormGroup<CreateEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
	export enum IdentityType { EMAIL_ADDRESS = 'EMAIL_ADDRESS', DOMAIN = 'DOMAIN', MANAGED_DOMAIN = 'MANAGED_DOMAIN' }


	/** An object that contains information about the DKIM configuration for an email identity. */
	export interface DkimAttributes {
		SigningEnabled?: boolean | null;
		Status?: DkimStatus;
		Tokens?: Array<string>;
	}

	/** An object that contains information about the DKIM configuration for an email identity. */
	export interface DkimAttributesFormProperties {
		SigningEnabled: FormControl<boolean | null | undefined>,
		Status: FormControl<DkimStatus | null | undefined>,
	}
	export function CreateDkimAttributesFormGroup() {
		return new FormGroup<DkimAttributesFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<DkimStatus | null | undefined>(undefined),
		});

	}


	/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
	export enum DkimStatus { PENDING = 'PENDING', SUCCESS = 'SUCCESS', FAILED = 'FAILED', TEMPORARY_FAILURE = 'TEMPORARY_FAILURE', NOT_STARTED = 'NOT_STARTED' }


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteDedicatedIpPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteDedicatedIpPoolResponseFormProperties {
	}
	export function CreateDeleteDedicatedIpPoolResponseFormGroup() {
		return new FormGroup<DeleteDedicatedIpPoolResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteEmailIdentityResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteEmailIdentityResponseFormProperties {
	}
	export function CreateDeleteEmailIdentityResponseFormGroup() {
		return new FormGroup<DeleteEmailIdentityResponseFormProperties>({
		});

	}


	/** A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region. */
	export interface GetAccountResponse {
		SendQuota?: SendQuota;
		SendingEnabled?: boolean | null;
		DedicatedIpAutoWarmupEnabled?: boolean | null;
		EnforcementStatus?: string;
		ProductionAccessEnabled?: boolean | null;
	}

	/** A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region. */
	export interface GetAccountResponseFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
		DedicatedIpAutoWarmupEnabled: FormControl<boolean | null | undefined>,
		EnforcementStatus: FormControl<string | null | undefined>,
		ProductionAccessEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAccountResponseFormGroup() {
		return new FormGroup<GetAccountResponseFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedIpAutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
			EnforcementStatus: new FormControl<string | null | undefined>(undefined),
			ProductionAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region. */
	export interface SendQuota {
		Max24HourSend?: number | null;
		MaxSendRate?: number | null;
		SentLast24Hours?: number | null;
	}

	/** An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region. */
	export interface SendQuotaFormProperties {
		Max24HourSend: FormControl<number | null | undefined>,
		MaxSendRate: FormControl<number | null | undefined>,
		SentLast24Hours: FormControl<number | null | undefined>,
	}
	export function CreateSendQuotaFormGroup() {
		return new FormGroup<SendQuotaFormProperties>({
			Max24HourSend: new FormControl<number | null | undefined>(undefined),
			MaxSendRate: new FormControl<number | null | undefined>(undefined),
			SentLast24Hours: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponse {

		/** Required */
		BlacklistReport: BlacklistReport;
	}

	/** An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponseFormProperties {
	}
	export function CreateGetBlacklistReportsResponseFormGroup() {
		return new FormGroup<GetBlacklistReportsResponseFormProperties>({
		});

	}

	export interface BlacklistReport {
	}
	export interface BlacklistReportFormProperties {
	}
	export function CreateBlacklistReportFormGroup() {
		return new FormGroup<BlacklistReportFormProperties>({
		});

	}


	/** Information about a configuration set. */
	export interface GetConfigurationSetResponse {
		ConfigurationSetName?: string;
		TrackingOptions?: TrackingOptions;
		DeliveryOptions?: DeliveryOptions;
		ReputationOptions?: ReputationOptions;
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;
	}

	/** Information about a configuration set. */
	export interface GetConfigurationSetResponseFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigurationSetResponseFormGroup() {
		return new FormGroup<GetConfigurationSetResponseFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptions {

		/** Required */
		CustomRedirectDomain: string;
	}

	/** <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptionsFormProperties {

		/** Required */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateTrackingOptionsFormGroup() {
		return new FormGroup<TrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptions {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}

	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryOptionsFormGroup() {
		return new FormGroup<DeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.  */
	export interface ReputationOptions {
		ReputationMetricsEnabled?: boolean | null;
		LastFreshStart?: Date;
	}

	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.  */
	export interface ReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateReputationOptionsFormGroup() {
		return new FormGroup<ReputationOptionsFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
	export interface SendingOptions {
		SendingEnabled?: boolean | null;
	}

	/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
	export interface SendingOptionsFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSendingOptionsFormGroup() {
		return new FormGroup<SendingOptionsFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about an event destination for a configuration set. */
	export interface GetConfigurationSetEventDestinationsResponse {
		EventDestinations?: Array<EventDestination>;
	}

	/** Information about an event destination for a configuration set. */
	export interface GetConfigurationSetEventDestinationsResponseFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsResponseFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsResponseFormProperties>({
		});

	}


	/** In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestination {

		/** Required */
		Name: string;
		Enabled?: boolean | null;

		/** Required */
		MatchingEventTypes: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
		PinpointDestination?: PinpointDestination;
	}

	/** In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestinationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a dedicated IP address. */
	export interface GetDedicatedIpResponse {
		DedicatedIp?: DedicatedIp;
	}

	/** Information about a dedicated IP address. */
	export interface GetDedicatedIpResponseFormProperties {
	}
	export function CreateGetDedicatedIpResponseFormGroup() {
		return new FormGroup<GetDedicatedIpResponseFormProperties>({
		});

	}


	/** <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/> */
	export interface DedicatedIp {

		/** Required */
		Ip: string;

		/** Required */
		WarmupStatus: WarmupStatus;

		/** Required */
		WarmupPercentage: number;
		PoolName?: string;
	}

	/** <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/> */
	export interface DedicatedIpFormProperties {

		/** Required */
		Ip: FormControl<string | null | undefined>,

		/** Required */
		WarmupStatus: FormControl<WarmupStatus | null | undefined>,

		/** Required */
		WarmupPercentage: FormControl<number | null | undefined>,
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedIpFormGroup() {
		return new FormGroup<DedicatedIpFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WarmupStatus: new FormControl<WarmupStatus | null | undefined>(undefined, [Validators.required]),
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The warmup status of a dedicated IP. */
	export enum WarmupStatus { IN_PROGRESS = 'IN_PROGRESS', DONE = 'DONE' }


	/** Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account. */
	export interface GetDedicatedIpsResponse {
		DedicatedIps?: Array<DedicatedIp>;
		NextToken?: string;
	}

	/** Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account. */
	export interface GetDedicatedIpsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDedicatedIpsResponseFormGroup() {
		return new FormGroup<GetDedicatedIpsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account. */
	export interface GetDeliverabilityDashboardOptionsResponse {

		/** Required */
		DashboardEnabled: boolean;
		SubscriptionExpiryDate?: Date;
		AccountStatus?: DeliverabilityDashboardAccountStatus;
		ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
		PendingExpirationSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account. */
	export interface GetDeliverabilityDashboardOptionsResponseFormProperties {

		/** Required */
		DashboardEnabled: FormControl<boolean | null | undefined>,
		SubscriptionExpiryDate: FormControl<Date | null | undefined>,
		AccountStatus: FormControl<DeliverabilityDashboardAccountStatus | null | undefined>,
	}
	export function CreateGetDeliverabilityDashboardOptionsResponseFormGroup() {
		return new FormGroup<GetDeliverabilityDashboardOptionsResponseFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SubscriptionExpiryDate: new FormControl<Date | null | undefined>(undefined),
			AccountStatus: new FormControl<DeliverabilityDashboardAccountStatus | null | undefined>(undefined),
		});

	}


	/** The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
	export enum DeliverabilityDashboardAccountStatus { ACTIVE = 'ACTIVE', PENDING_EXPIRATION = 'PENDING_EXPIRATION', DISABLED = 'DISABLED' }


	/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOption {
		Domain?: string;
		SubscriptionStartDate?: Date;
		InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
	}

	/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOptionFormProperties {
		Domain: FormControl<string | null | undefined>,
		SubscriptionStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateDomainDeliverabilityTrackingOptionFormGroup() {
		return new FormGroup<DomainDeliverabilityTrackingOptionFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			SubscriptionStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface InboxPlacementTrackingOption {
		Global?: boolean | null;
		TrackedIsps?: Array<string>;
	}

	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface InboxPlacementTrackingOptionFormProperties {
		Global: FormControl<boolean | null | undefined>,
	}
	export function CreateInboxPlacementTrackingOptionFormGroup() {
		return new FormGroup<InboxPlacementTrackingOptionFormProperties>({
			Global: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponse {

		/** Required */
		DeliverabilityTestReport: DeliverabilityTestReport;

		/** Required */
		OverallPlacement: PlacementStatistics;

		/** Required */
		IspPlacements: Array<IspPlacement>;
		Message?: string;
		Tags?: Array<Tag>;
	}

	/** The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateGetDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<GetDeliverabilityTestReportResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReport {
		ReportId?: string;
		ReportName?: string;
		Subject?: string;
		FromEmailAddress?: string;
		CreateDate?: Date;
		DeliverabilityTestStatus?: DeliverabilityTestStatus;
	}

	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReportFormProperties {
		ReportId: FormControl<string | null | undefined>,
		ReportName: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		DeliverabilityTestStatus: FormControl<DeliverabilityTestStatus | null | undefined>,
	}
	export function CreateDeliverabilityTestReportFormGroup() {
		return new FormGroup<DeliverabilityTestReportFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			DeliverabilityTestStatus: new FormControl<DeliverabilityTestStatus | null | undefined>(undefined),
		});

	}


	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatistics {
		InboxPercentage?: number | null;
		SpamPercentage?: number | null;
		MissingPercentage?: number | null;
		SpfPercentage?: number | null;
		DkimPercentage?: number | null;
	}

	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatisticsFormProperties {
		InboxPercentage: FormControl<number | null | undefined>,
		SpamPercentage: FormControl<number | null | undefined>,
		MissingPercentage: FormControl<number | null | undefined>,
		SpfPercentage: FormControl<number | null | undefined>,
		DkimPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePlacementStatisticsFormGroup() {
		return new FormGroup<PlacementStatisticsFormProperties>({
			InboxPercentage: new FormControl<number | null | undefined>(undefined),
			SpamPercentage: new FormControl<number | null | undefined>(undefined),
			MissingPercentage: new FormControl<number | null | undefined>(undefined),
			SpfPercentage: new FormControl<number | null | undefined>(undefined),
			DkimPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacement {
		IspName?: string;
		PlacementStatistics?: PlacementStatistics;
	}

	/** An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacementFormProperties {
		IspName: FormControl<string | null | undefined>,
	}
	export function CreateIspPlacementFormGroup() {
		return new FormGroup<IspPlacementFormProperties>({
			IspName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignResponse {

		/** Required */
		DomainDeliverabilityCampaign: DomainDeliverabilityCampaign;
	}

	/** An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignResponseFormProperties {
	}
	export function CreateGetDomainDeliverabilityCampaignResponseFormGroup() {
		return new FormGroup<GetDomainDeliverabilityCampaignResponseFormProperties>({
		});

	}


	/** An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface DomainDeliverabilityCampaign {
		CampaignId?: string;
		ImageUrl?: string;
		Subject?: string;
		FromAddress?: string;
		SendingIps?: Array<string>;
		FirstSeenDateTime?: Date;
		LastSeenDateTime?: Date;
		InboxCount?: number | null;
		SpamCount?: number | null;
		ReadRate?: number | null;
		DeleteRate?: number | null;
		ReadDeleteRate?: number | null;
		ProjectedVolume?: number | null;
		Esps?: Array<string>;
	}

	/** An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface DomainDeliverabilityCampaignFormProperties {
		CampaignId: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
		FirstSeenDateTime: FormControl<Date | null | undefined>,
		LastSeenDateTime: FormControl<Date | null | undefined>,
		InboxCount: FormControl<number | null | undefined>,
		SpamCount: FormControl<number | null | undefined>,
		ReadRate: FormControl<number | null | undefined>,
		DeleteRate: FormControl<number | null | undefined>,
		ReadDeleteRate: FormControl<number | null | undefined>,
		ProjectedVolume: FormControl<number | null | undefined>,
	}
	export function CreateDomainDeliverabilityCampaignFormGroup() {
		return new FormGroup<DomainDeliverabilityCampaignFormProperties>({
			CampaignId: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
			FirstSeenDateTime: new FormControl<Date | null | undefined>(undefined),
			LastSeenDateTime: new FormControl<Date | null | undefined>(undefined),
			InboxCount: new FormControl<number | null | undefined>(undefined),
			SpamCount: new FormControl<number | null | undefined>(undefined),
			ReadRate: new FormControl<number | null | undefined>(undefined),
			DeleteRate: new FormControl<number | null | undefined>(undefined),
			ReadDeleteRate: new FormControl<number | null | undefined>(undefined),
			ProjectedVolume: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that includes statistics that are related to the domain that you specified. */
	export interface GetDomainStatisticsReportResponse {

		/** Required */
		OverallVolume: OverallVolume;

		/** Required */
		DailyVolumes: Array<DailyVolume>;
	}

	/** An object that includes statistics that are related to the domain that you specified. */
	export interface GetDomainStatisticsReportResponseFormProperties {
	}
	export function CreateGetDomainStatisticsReportResponseFormGroup() {
		return new FormGroup<GetDomainStatisticsReportResponseFormProperties>({
		});

	}


	/** An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolume {
		VolumeStatistics?: VolumeStatistics;
		ReadRatePercent?: number | null;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}

	/** An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolumeFormProperties {
		ReadRatePercent: FormControl<number | null | undefined>,
	}
	export function CreateOverallVolumeFormGroup() {
		return new FormGroup<OverallVolumeFormProperties>({
			ReadRatePercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatistics {
		InboxRawCount?: number | null;
		SpamRawCount?: number | null;
		ProjectedInbox?: number | null;
		ProjectedSpam?: number | null;
	}

	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatisticsFormProperties {
		InboxRawCount: FormControl<number | null | undefined>,
		SpamRawCount: FormControl<number | null | undefined>,
		ProjectedInbox: FormControl<number | null | undefined>,
		ProjectedSpam: FormControl<number | null | undefined>,
	}
	export function CreateVolumeStatisticsFormGroup() {
		return new FormGroup<VolumeStatisticsFormProperties>({
			InboxRawCount: new FormControl<number | null | undefined>(undefined),
			SpamRawCount: new FormControl<number | null | undefined>(undefined),
			ProjectedInbox: new FormControl<number | null | undefined>(undefined),
			ProjectedSpam: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacement {
		IspName?: string;
		InboxRawCount?: number | null;
		SpamRawCount?: number | null;
		InboxPercentage?: number | null;
		SpamPercentage?: number | null;
	}

	/** An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacementFormProperties {
		IspName: FormControl<string | null | undefined>,
		InboxRawCount: FormControl<number | null | undefined>,
		SpamRawCount: FormControl<number | null | undefined>,
		InboxPercentage: FormControl<number | null | undefined>,
		SpamPercentage: FormControl<number | null | undefined>,
	}
	export function CreateDomainIspPlacementFormGroup() {
		return new FormGroup<DomainIspPlacementFormProperties>({
			IspName: new FormControl<string | null | undefined>(undefined),
			InboxRawCount: new FormControl<number | null | undefined>(undefined),
			SpamRawCount: new FormControl<number | null | undefined>(undefined),
			InboxPercentage: new FormControl<number | null | undefined>(undefined),
			SpamPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the volume of email sent on each day of the analysis period. */
	export interface DailyVolume {
		StartDate?: Date;
		VolumeStatistics?: VolumeStatistics;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}

	/** An object that contains information about the volume of email sent on each day of the analysis period. */
	export interface DailyVolumeFormProperties {
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateDailyVolumeFormGroup() {
		return new FormGroup<DailyVolumeFormProperties>({
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about an email identity. */
	export interface GetEmailIdentityResponse {
		IdentityType?: IdentityType;
		FeedbackForwardingStatus?: boolean | null;
		VerifiedForSendingStatus?: boolean | null;
		DkimAttributes?: DkimAttributes;
		MailFromAttributes?: MailFromAttributes;
		Tags?: Array<Tag>;
	}

	/** Details about an email identity. */
	export interface GetEmailIdentityResponseFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		FeedbackForwardingStatus: FormControl<boolean | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateGetEmailIdentityResponseFormGroup() {
		return new FormGroup<GetEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			FeedbackForwardingStatus: new FormControl<boolean | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributes {

		/** Required */
		MailFromDomain: string;

		/** Required */
		MailFromDomainStatus: MailFromDomainStatus;

		/** Required */
		BehaviorOnMxFailure: BehaviorOnMxFailure;
	}

	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributesFormProperties {

		/** Required */
		MailFromDomain: FormControl<string | null | undefined>,

		/** Required */
		MailFromDomainStatus: FormControl<MailFromDomainStatus | null | undefined>,

		/** Required */
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreateMailFromAttributesFormGroup() {
		return new FormGroup<MailFromAttributesFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MailFromDomainStatus: new FormControl<MailFromDomainStatus | null | undefined>(undefined, [Validators.required]),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul> */
	export enum MailFromDomainStatus { PENDING = 'PENDING', SUCCESS = 'SUCCESS', FAILED = 'FAILED', TEMPORARY_FAILURE = 'TEMPORARY_FAILURE' }


	/** <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
	export enum BehaviorOnMxFailure { USE_DEFAULT_VALUE = 'USE_DEFAULT_VALUE', REJECT_MESSAGE = 'REJECT_MESSAGE' }


	/** A list of configuration sets in your Amazon Pinpoint account in the current AWS Region. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<string>;
		NextToken?: string;
	}

	/** A list of configuration sets in your Amazon Pinpoint account in the current AWS Region. */
	export interface ListConfigurationSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationSetsResponseFormGroup() {
		return new FormGroup<ListConfigurationSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponse {
		DedicatedIpPools?: Array<string>;
		NextToken?: string;
	}

	/** A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDedicatedIpPoolsResponseFormGroup() {
		return new FormGroup<ListDedicatedIpPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete. */
	export interface ListDeliverabilityTestReportsResponse {

		/** Required */
		DeliverabilityTestReports: Array<DeliverabilityTestReport>;
		NextToken?: string;
	}

	/** A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete. */
	export interface ListDeliverabilityTestReportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeliverabilityTestReportsResponseFormGroup() {
		return new FormGroup<ListDeliverabilityTestReportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain. */
	export interface ListDomainDeliverabilityCampaignsResponse {

		/** Required */
		DomainDeliverabilityCampaigns: Array<DomainDeliverabilityCampaign>;
		NextToken?: string;
	}

	/** An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain. */
	export interface ListDomainDeliverabilityCampaignsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainDeliverabilityCampaignsResponseFormGroup() {
		return new FormGroup<ListDomainDeliverabilityCampaignsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified. */
	export interface ListEmailIdentitiesResponse {
		EmailIdentities?: Array<IdentityInfo>;
		NextToken?: string;
	}

	/** A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified. */
	export interface ListEmailIdentitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEmailIdentitiesResponseFormGroup() {
		return new FormGroup<ListEmailIdentitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an email identity. */
	export interface IdentityInfo {
		IdentityType?: IdentityType;
		IdentityName?: string;
		SendingEnabled?: boolean | null;
	}

	/** Information about an email identity. */
	export interface IdentityInfoFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityInfoFormGroup() {
		return new FormGroup<IdentityInfoFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountDedicatedIpWarmupAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountDedicatedIpWarmupAttributesResponseFormProperties {
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesResponseFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSendingAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSendingAttributesResponseFormProperties {
	}
	export function CreatePutAccountSendingAttributesResponseFormGroup() {
		return new FormGroup<PutAccountSendingAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetDeliveryOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetDeliveryOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetDeliveryOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetReputationOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetReputationOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetReputationOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSendingOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSendingOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetSendingOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetTrackingOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetTrackingOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetTrackingOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpInPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpInPoolResponseFormProperties {
	}
	export function CreatePutDedicatedIpInPoolResponseFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpWarmupAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpWarmupAttributesResponseFormProperties {
	}
	export function CreatePutDedicatedIpWarmupAttributesResponseFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesResponseFormProperties>({
		});

	}


	/** A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. */
	export interface PutDeliverabilityDashboardOptionResponse {
	}

	/** A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. */
	export interface PutDeliverabilityDashboardOptionResponseFormProperties {
	}
	export function CreatePutDeliverabilityDashboardOptionResponseFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityDkimAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityDkimAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityDkimAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityFeedbackAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityFeedbackAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityFeedbackAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityMailFromAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityMailFromAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityMailFromAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesResponseFormProperties>({
		});

	}


	/** A unique message ID that you receive when Amazon Pinpoint accepts an email for sending. */
	export interface SendEmailResponse {
		MessageId?: string;
	}

	/** A unique message ID that you receive when Amazon Pinpoint accepts an email for sending. */
	export interface SendEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailResponseFormGroup() {
		return new FormGroup<SendEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTag {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTagFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMessageTagFormGroup() {
		return new FormGroup<MessageTagFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntry {
		RblName?: string;
		ListingTime?: Date;
		Description?: string;
	}

	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntryFormProperties {
		RblName: FormControl<string | null | undefined>,
		ListingTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateBlacklistEntryFormGroup() {
		return new FormGroup<BlacklistEntryFormProperties>({
			RblName: new FormControl<string | null | undefined>(undefined),
			ListingTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinition {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
		PinpointDestination?: PinpointDestination;
	}

	/** An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinitionFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationDefinitionFormGroup() {
		return new FormGroup<EventDestinationDefinitionFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequest {

		/** Required */
		EventDestinationName: string;

		/** Required */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequestFormProperties {

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationRequestFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequest {

		/** Required */
		ConfigurationSetName: string;
		TrackingOptions?: TrackingOptions;
		DeliveryOptions?: DeliveryOptions;
		ReputationOptions?: ReputationOptions;
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;
	}

	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequest {

		/** Required */
		PoolName: string;
		Tags?: Array<Tag>;
	}

	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequestFormProperties {

		/** Required */
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContent {
		Simple?: Message;
		Raw?: RawMessage;
		Template?: Template;
	}

	/** An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContentFormProperties {
	}
	export function CreateEmailContentFormGroup() {
		return new FormGroup<EmailContentFormProperties>({
		});

	}


	/** A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequest {
		ReportName?: string;

		/** Required */
		FromEmailAddress: string;

		/** Required */
		Content: EmailContent;
		Tags?: Array<Tag>;
	}

	/** A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequestFormProperties {
		ReportName: FormControl<string | null | undefined>,

		/** Required */
		FromEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportRequestFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportRequestFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequest {

		/** Required */
		EmailIdentity: string;
		Tags?: Array<Tag>;
	}

	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequestFormProperties {

		/** Required */
		EmailIdentity: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityRequestFormGroup() {
		return new FormGroup<CreateEmailIdentityRequestFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to delete an event destination from a configuration set. */
	export interface DeleteConfigurationSetEventDestinationRequest {
	}

	/** A request to delete an event destination from a configuration set. */
	export interface DeleteConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationRequestFormProperties>({
		});

	}


	/** A request to delete a configuration set. */
	export interface DeleteConfigurationSetRequest {
	}

	/** A request to delete a configuration set. */
	export interface DeleteConfigurationSetRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetRequestFormProperties>({
		});

	}


	/** A request to delete a dedicated IP pool. */
	export interface DeleteDedicatedIpPoolRequest {
	}

	/** A request to delete a dedicated IP pool. */
	export interface DeleteDedicatedIpPoolRequestFormProperties {
	}
	export function CreateDeleteDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<DeleteDedicatedIpPoolRequestFormProperties>({
		});

	}


	/** A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again. */
	export interface DeleteEmailIdentityRequest {
	}

	/** A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again. */
	export interface DeleteEmailIdentityRequestFormProperties {
	}
	export function CreateDeleteEmailIdentityRequestFormGroup() {
		return new FormGroup<DeleteEmailIdentityRequestFormProperties>({
		});

	}


	/** An object that describes the recipients for an email. */
	export interface Destination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}

	/** An object that describes the recipients for an email. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account. */
	export interface GetAccountRequest {
	}

	/** A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account. */
	export interface GetAccountRequestFormProperties {
	}
	export function CreateGetAccountRequestFormGroup() {
		return new FormGroup<GetAccountRequestFormProperties>({
		});

	}


	/** A request to retrieve a list of the blacklists that your dedicated IP addresses appear on. */
	export interface GetBlacklistReportsRequest {
	}

	/** A request to retrieve a list of the blacklists that your dedicated IP addresses appear on. */
	export interface GetBlacklistReportsRequestFormProperties {
	}
	export function CreateGetBlacklistReportsRequestFormGroup() {
		return new FormGroup<GetBlacklistReportsRequestFormProperties>({
		});

	}


	/** A request to obtain information about the event destinations for a configuration set. */
	export interface GetConfigurationSetEventDestinationsRequest {
	}

	/** A request to obtain information about the event destinations for a configuration set. */
	export interface GetConfigurationSetEventDestinationsRequestFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsRequestFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsRequestFormProperties>({
		});

	}


	/** A request to obtain information about a configuration set. */
	export interface GetConfigurationSetRequest {
	}

	/** A request to obtain information about a configuration set. */
	export interface GetConfigurationSetRequestFormProperties {
	}
	export function CreateGetConfigurationSetRequestFormGroup() {
		return new FormGroup<GetConfigurationSetRequestFormProperties>({
		});

	}


	/** A request to obtain more information about a dedicated IP address. */
	export interface GetDedicatedIpRequest {
	}

	/** A request to obtain more information about a dedicated IP address. */
	export interface GetDedicatedIpRequestFormProperties {
	}
	export function CreateGetDedicatedIpRequestFormGroup() {
		return new FormGroup<GetDedicatedIpRequestFormProperties>({
		});

	}


	/** A request to obtain more information about dedicated IP pools. */
	export interface GetDedicatedIpsRequest {
	}

	/** A request to obtain more information about dedicated IP pools. */
	export interface GetDedicatedIpsRequestFormProperties {
	}
	export function CreateGetDedicatedIpsRequestFormGroup() {
		return new FormGroup<GetDedicatedIpsRequestFormProperties>({
		});

	}


	/** <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface GetDeliverabilityDashboardOptionsRequest {
	}

	/** <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface GetDeliverabilityDashboardOptionsRequestFormProperties {
	}
	export function CreateGetDeliverabilityDashboardOptionsRequestFormGroup() {
		return new FormGroup<GetDeliverabilityDashboardOptionsRequestFormProperties>({
		});

	}


	/** A request to retrieve the results of a predictive inbox placement test. */
	export interface GetDeliverabilityTestReportRequest {
	}

	/** A request to retrieve the results of a predictive inbox placement test. */
	export interface GetDeliverabilityTestReportRequestFormProperties {
	}
	export function CreateGetDeliverabilityTestReportRequestFormGroup() {
		return new FormGroup<GetDeliverabilityTestReportRequestFormProperties>({
		});

	}


	/** Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignRequest {
	}

	/** Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignRequestFormProperties {
	}
	export function CreateGetDomainDeliverabilityCampaignRequestFormGroup() {
		return new FormGroup<GetDomainDeliverabilityCampaignRequestFormProperties>({
		});

	}


	/** A request to obtain deliverability metrics for a domain. */
	export interface GetDomainStatisticsReportRequest {
	}

	/** A request to obtain deliverability metrics for a domain. */
	export interface GetDomainStatisticsReportRequestFormProperties {
	}
	export function CreateGetDomainStatisticsReportRequestFormGroup() {
		return new FormGroup<GetDomainStatisticsReportRequestFormProperties>({
		});

	}


	/** A request to return details about an email identity. */
	export interface GetEmailIdentityRequest {
	}

	/** A request to return details about an email identity. */
	export interface GetEmailIdentityRequestFormProperties {
	}
	export function CreateGetEmailIdentityRequestFormGroup() {
		return new FormGroup<GetEmailIdentityRequestFormProperties>({
		});

	}


	/** A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region. */
	export interface ListConfigurationSetsRequest {
	}

	/** A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region. */
	export interface ListConfigurationSetsRequestFormProperties {
	}
	export function CreateListConfigurationSetsRequestFormGroup() {
		return new FormGroup<ListConfigurationSetsRequestFormProperties>({
		});

	}


	/** A request to obtain a list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsRequest {
	}

	/** A request to obtain a list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsRequestFormProperties {
	}
	export function CreateListDedicatedIpPoolsRequestFormGroup() {
		return new FormGroup<ListDedicatedIpPoolsRequestFormProperties>({
		});

	}


	/** A request to list all of the predictive inbox placement tests that you've performed. */
	export interface ListDeliverabilityTestReportsRequest {
	}

	/** A request to list all of the predictive inbox placement tests that you've performed. */
	export interface ListDeliverabilityTestReportsRequestFormProperties {
	}
	export function CreateListDeliverabilityTestReportsRequestFormGroup() {
		return new FormGroup<ListDeliverabilityTestReportsRequestFormProperties>({
		});

	}


	/** Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain. */
	export interface ListDomainDeliverabilityCampaignsRequest {
	}

	/** Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain. */
	export interface ListDomainDeliverabilityCampaignsRequestFormProperties {
	}
	export function CreateListDomainDeliverabilityCampaignsRequestFormGroup() {
		return new FormGroup<ListDomainDeliverabilityCampaignsRequestFormProperties>({
		});

	}


	/** A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequest {
	}

	/** A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequestFormProperties {
	}
	export function CreateListEmailIdentitiesRequestFormGroup() {
		return new FormGroup<ListEmailIdentitiesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** A request to enable or disable the automatic IP address warm-up feature. */
	export interface PutAccountDedicatedIpWarmupAttributesRequest {
		AutoWarmupEnabled?: boolean | null;
	}

	/** A request to enable or disable the automatic IP address warm-up feature. */
	export interface PutAccountDedicatedIpWarmupAttributesRequestFormProperties {
		AutoWarmupEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesRequestFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesRequestFormProperties>({
			AutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to change the ability of your account to send email. */
	export interface PutAccountSendingAttributesRequest {
		SendingEnabled?: boolean | null;
	}

	/** A request to change the ability of your account to send email. */
	export interface PutAccountSendingAttributesRequestFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountSendingAttributesRequestFormGroup() {
		return new FormGroup<PutAccountSendingAttributesRequestFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequest {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}

	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequestFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetDeliveryOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsRequestFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to enable or disable tracking of reputation metrics for a configuration set. */
	export interface PutConfigurationSetReputationOptionsRequest {
		ReputationMetricsEnabled?: boolean | null;
	}

	/** A request to enable or disable tracking of reputation metrics for a configuration set. */
	export interface PutConfigurationSetReputationOptionsRequestFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetReputationOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsRequestFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set. */
	export interface PutConfigurationSetSendingOptionsRequest {
		SendingEnabled?: boolean | null;
	}

	/** A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set. */
	export interface PutConfigurationSetSendingOptionsRequestFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetSendingOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsRequestFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequest {
		CustomRedirectDomain?: string;
	}

	/** A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequestFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsRequestFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequest {

		/** Required */
		DestinationPoolName: string;
	}

	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequestFormProperties {

		/** Required */
		DestinationPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutDedicatedIpInPoolRequestFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolRequestFormProperties>({
			DestinationPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequest {

		/** Required */
		WarmupPercentage: number;
	}

	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequestFormProperties {

		/** Required */
		WarmupPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePutDedicatedIpWarmupAttributesRequestFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesRequestFormProperties>({
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequest {

		/** Required */
		DashboardEnabled: boolean;
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequestFormProperties {

		/** Required */
		DashboardEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDeliverabilityDashboardOptionRequestFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionRequestFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to enable or disable DKIM signing of email that you send from an email identity. */
	export interface PutEmailIdentityDkimAttributesRequest {
		SigningEnabled?: boolean | null;
	}

	/** A request to enable or disable DKIM signing of email that you send from an email identity. */
	export interface PutEmailIdentityDkimAttributesRequestFormProperties {
		SigningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesRequestFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to set the attributes that control how bounce and complaint events are processed. */
	export interface PutEmailIdentityFeedbackAttributesRequest {
		EmailForwardingEnabled?: boolean | null;
	}

	/** A request to set the attributes that control how bounce and complaint events are processed. */
	export interface PutEmailIdentityFeedbackAttributesRequestFormProperties {
		EmailForwardingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityFeedbackAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesRequestFormProperties>({
			EmailForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequest {
		MailFromDomain?: string;
		BehaviorOnMxFailure?: BehaviorOnMxFailure;
	}

	/** A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequestFormProperties {
		MailFromDomain: FormControl<string | null | undefined>,
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesRequestFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined),
		});

	}


	/** A request to send an email message. */
	export interface SendEmailRequest {
		FromEmailAddress?: string;

		/** Required */
		Destination: Destination;
		ReplyToAddresses?: Array<string>;
		FeedbackForwardingEmailAddress?: string;

		/** Required */
		Content: EmailContent;
		EmailTags?: Array<MessageTag>;
		ConfigurationSetName?: string;
	}

	/** A request to send an email message. */
	export interface SendEmailRequestFormProperties {
		FromEmailAddress: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailRequestFormGroup() {
		return new FormGroup<SendEmailRequestFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequest {

		/** Required */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
		 * Post v1/email/configuration-sets
		 * @return {CreateConfigurationSetResponse} Success
		 */
		CreateConfigurationSet(requestBody: CreateConfigurationSetPostBody): Observable<CreateConfigurationSetResponse> {
			return this.http.post<CreateConfigurationSetResponse>(this.baseUri + 'v1/email/configuration-sets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get v1/email/configuration-sets
		 * @param {string} NextToken A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position in the list of configuration sets.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListConfigurationSets</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListConfigurationSetsResponse} Success
		 */
		ListConfigurationSets(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListConfigurationSetsResponse> {
			return this.http.get<ListConfigurationSetsResponse>(this.baseUri + 'v1/email/configuration-sets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
		 * Post v1/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add an event destination to.
		 * @return {CreateConfigurationSetEventDestinationResponse} Success
		 */
		CreateConfigurationSetEventDestination(ConfigurationSetName: string, requestBody: CreateConfigurationSetEventDestinationPostBody): Observable<CreateConfigurationSetEventDestinationResponse> {
			return this.http.post<CreateConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Get v1/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination.
		 * @return {GetConfigurationSetEventDestinationsResponse} Success
		 */
		GetConfigurationSetEventDestinations(ConfigurationSetName: string): Observable<GetConfigurationSetEventDestinationsResponse> {
			return this.http.get<GetConfigurationSetEventDestinationsResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', {});
		}

		/**
		 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
		 * Post v1/email/dedicated-ip-pools
		 * @return {CreateDedicatedIpPoolResponse} Success
		 */
		CreateDedicatedIpPool(requestBody: CreateDedicatedIpPoolPostBody): Observable<CreateDedicatedIpPoolResponse> {
			return this.http.post<CreateDedicatedIpPoolResponse>(this.baseUri + 'v1/email/dedicated-ip-pools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
		 * Get v1/email/dedicated-ip-pools
		 * @param {string} NextToken A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate the position in the list of dedicated IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListDedicatedIpPools</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListDedicatedIpPoolsResponse} Success
		 */
		ListDedicatedIpPools(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDedicatedIpPoolsResponse> {
			return this.http.get<ListDedicatedIpPoolsResponse>(this.baseUri + 'v1/email/dedicated-ip-pools?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
		 * Post v1/email/deliverability-dashboard/test
		 * @return {CreateDeliverabilityTestReportResponse} Success
		 */
		CreateDeliverabilityTestReport(requestBody: CreateDeliverabilityTestReportPostBody): Observable<CreateDeliverabilityTestReportResponse> {
			return this.http.post<CreateDeliverabilityTestReportResponse>(this.baseUri + 'v1/email/deliverability-dashboard/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
		 * Post v1/email/identities
		 * @return {CreateEmailIdentityResponse} Success
		 */
		CreateEmailIdentity(requestBody: CreateEmailIdentityPostBody): Observable<CreateEmailIdentityResponse> {
			return this.http.post<CreateEmailIdentityResponse>(this.baseUri + 'v1/email/identities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
		 * Get v1/email/identities
		 * @param {string} NextToken A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListEmailIdentitiesResponse} Success
		 */
		ListEmailIdentities(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListEmailIdentitiesResponse> {
			return this.http.get<ListEmailIdentitiesResponse>(this.baseUri + 'v1/email/identities?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Delete v1/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to delete.
		 * @return {DeleteConfigurationSetResponse} Success
		 */
		DeleteConfigurationSet(ConfigurationSetName: string): Observable<DeleteConfigurationSetResponse> {
			return this.http.delete<DeleteConfigurationSetResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get v1/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to obtain more information about.
		 * @return {GetConfigurationSetResponse} Success
		 */
		GetConfigurationSet(ConfigurationSetName: string): Observable<GetConfigurationSetResponse> {
			return this.http.get<GetConfigurationSetResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Delete v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to delete.
		 * @param {string} EventDestinationName The name of the event destination that you want to delete.
		 * @return {DeleteConfigurationSetEventDestinationResponse} Success
		 */
		DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string): Observable<DeleteConfigurationSetEventDestinationResponse> {
			return this.http.delete<DeleteConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), {});
		}

		/**
		 * <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Put v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to modify.
		 * @param {string} EventDestinationName The name of the event destination that you want to modify.
		 * @return {UpdateConfigurationSetEventDestinationResponse} Success
		 */
		UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, requestBody: UpdateConfigurationSetEventDestinationPutBody): Observable<UpdateConfigurationSetEventDestinationResponse> {
			return this.http.put<UpdateConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a dedicated IP pool.
		 * Delete v1/email/dedicated-ip-pools/{PoolName}
		 * @param {string} PoolName The name of the dedicated IP pool that you want to delete.
		 * @return {DeleteDedicatedIpPoolResponse} Success
		 */
		DeleteDedicatedIpPool(PoolName: string): Observable<DeleteDedicatedIpPoolResponse> {
			return this.http.delete<DeleteDedicatedIpPoolResponse>(this.baseUri + 'v1/email/dedicated-ip-pools/' + (PoolName == null ? '' : encodeURIComponent(PoolName)), {});
		}

		/**
		 * Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
		 * Delete v1/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The identity (that is, the email address or domain) that you want to delete from your Amazon Pinpoint account.
		 * @return {DeleteEmailIdentityResponse} Success
		 */
		DeleteEmailIdentity(EmailIdentity: string): Observable<DeleteEmailIdentityResponse> {
			return this.http.delete<DeleteEmailIdentityResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
		 * Get v1/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The email identity that you want to retrieve details for.
		 * @return {GetEmailIdentityResponse} Success
		 */
		GetEmailIdentity(EmailIdentity: string): Observable<GetEmailIdentityResponse> {
			return this.http.get<GetEmailIdentityResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
		 * Get v1/email/account
		 * @return {GetAccountResponse} Success
		 */
		GetAccount(): Observable<GetAccountResponse> {
			return this.http.get<GetAccountResponse>(this.baseUri + 'v1/email/account', {});
		}

		/**
		 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
		 * Get v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames
		 * @param {Array<string>} BlacklistItemNames A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.
		 * @return {GetBlacklistReportsResponse} Success
		 */
		GetBlacklistReports(BlacklistItemNames: Array<string>): Observable<GetBlacklistReportsResponse> {
			return this.http.get<GetBlacklistReportsResponse>(this.baseUri + 'v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames?' + BlacklistItemNames.map(z => `BlacklistItemNames=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
		 * Get v1/email/dedicated-ips/{IP}
		 * @param {string} IP The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.
		 * @return {GetDedicatedIpResponse} Success
		 */
		GetDedicatedIp(IP: string): Observable<GetDedicatedIpResponse> {
			return this.http.get<GetDedicatedIpResponse>(this.baseUri + 'v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)), {});
		}

		/**
		 * List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
		 * Get v1/email/dedicated-ips
		 * @param {string} PoolName The name of the IP pool that the dedicated IP address is associated with.
		 * @param {string} NextToken A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the position of the dedicated IP pool in the list of IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetDedicatedIpsResponse} Success
		 */
		GetDedicatedIps(PoolName: string | null | undefined, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<GetDedicatedIpsResponse> {
			return this.http.get<GetDedicatedIpsResponse>(this.baseUri + 'v1/email/dedicated-ips?PoolName=' + (PoolName == null ? '' : encodeURIComponent(PoolName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
		 * Get v1/email/deliverability-dashboard
		 * @return {GetDeliverabilityDashboardOptionsResponse} Success
		 */
		GetDeliverabilityDashboardOptions(): Observable<GetDeliverabilityDashboardOptionsResponse> {
			return this.http.get<GetDeliverabilityDashboardOptionsResponse>(this.baseUri + 'v1/email/deliverability-dashboard', {});
		}

		/**
		 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
		 * Put v1/email/deliverability-dashboard
		 * @return {PutDeliverabilityDashboardOptionResponse} Success
		 */
		PutDeliverabilityDashboardOption(requestBody: PutDeliverabilityDashboardOptionPutBody): Observable<PutDeliverabilityDashboardOptionResponse> {
			return this.http.put<PutDeliverabilityDashboardOptionResponse>(this.baseUri + 'v1/email/deliverability-dashboard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the results of a predictive inbox placement test.
		 * Get v1/email/deliverability-dashboard/test-reports/{ReportId}
		 * @param {string} ReportId A unique string that identifies the predictive inbox placement test.
		 * @return {GetDeliverabilityTestReportResponse} Success
		 */
		GetDeliverabilityTestReport(ReportId: string): Observable<GetDeliverabilityTestReportResponse> {
			return this.http.get<GetDeliverabilityTestReportResponse>(this.baseUri + 'v1/email/deliverability-dashboard/test-reports/' + (ReportId == null ? '' : encodeURIComponent(ReportId)), {});
		}

		/**
		 * Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
		 * Get v1/email/deliverability-dashboard/campaigns/{CampaignId}
		 * @param {string} CampaignId The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.
		 * @return {GetDomainDeliverabilityCampaignResponse} Success
		 */
		GetDomainDeliverabilityCampaign(CampaignId: string): Observable<GetDomainDeliverabilityCampaignResponse> {
			return this.http.get<GetDomainDeliverabilityCampaignResponse>(this.baseUri + 'v1/email/deliverability-dashboard/campaigns/' + (CampaignId == null ? '' : encodeURIComponent(CampaignId)), {});
		}

		/**
		 * Retrieve inbox placement and engagement rates for the domains that you use to send email.
		 * Get v1/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate
		 * @param {string} Domain The domain that you want to obtain deliverability metrics for.
		 * @param {Date} StartDate The first day (in Unix time) that you want to obtain domain deliverability metrics for.
		 * @param {Date} EndDate The last day (in Unix time) that you want to obtain domain deliverability metrics for. The <code>EndDate</code> that you specify has to be less than or equal to 30 days after the <code>StartDate</code>.
		 * @return {GetDomainStatisticsReportResponse} Success
		 */
		GetDomainStatisticsReport(Domain: string, StartDate: Date, EndDate: Date): Observable<GetDomainStatisticsReportResponse> {
			return this.http.get<GetDomainStatisticsReportResponse>(this.baseUri + 'v1/email/deliverability-dashboard/statistics-report/' + (Domain == null ? '' : encodeURIComponent(Domain)) + '#StartDate&EndDate&StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString(), {});
		}

		/**
		 * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
		 * Get v1/email/deliverability-dashboard/test-reports
		 * @param {string} NextToken A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to indicate the position in the list of predictive inbox placement tests.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListDeliverabilityTestReports</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListDeliverabilityTestReportsResponse} Success
		 */
		ListDeliverabilityTestReports(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDeliverabilityTestReportsResponse> {
			return this.http.get<ListDeliverabilityTestReportsResponse>(this.baseUri + 'v1/email/deliverability-dashboard/test-reports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
		 * Get v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate
		 * @param {Date} StartDate The first day, in Unix time format, that you want to obtain deliverability data for.
		 * @param {Date} EndDate The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.
		 * @param {string} SubscribedDomain The domain to obtain deliverability data for.
		 * @param {string} NextToken A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.
		 * @param {number} PageSize The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListDomainDeliverabilityCampaignsResponse} Success
		 */
		ListDomainDeliverabilityCampaigns(StartDate: Date, EndDate: Date, SubscribedDomain: string, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDomainDeliverabilityCampaignsResponse> {
			return this.http.get<ListDomainDeliverabilityCampaignsResponse>(this.baseUri + 'v1/email/deliverability-dashboard/domains/' + (SubscribedDomain == null ? '' : encodeURIComponent(SubscribedDomain)) + '/campaigns#StartDate&EndDate?StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Get v1/email/tags#ResourceArn
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/email/tags#ResourceArn?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Enable or disable the automatic warm-up feature for dedicated IP addresses.
		 * Put v1/email/account/dedicated-ips/warmup
		 * @return {PutAccountDedicatedIpWarmupAttributesResponse} Success
		 */
		PutAccountDedicatedIpWarmupAttributes(requestBody: PutAccountDedicatedIpWarmupAttributesPutBody): Observable<PutAccountDedicatedIpWarmupAttributesResponse> {
			return this.http.put<PutAccountDedicatedIpWarmupAttributesResponse>(this.baseUri + 'v1/email/account/dedicated-ips/warmup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable the ability of your account to send email.
		 * Put v1/email/account/sending
		 * @return {PutAccountSendingAttributesResponse} Success
		 */
		PutAccountSendingAttributes(requestBody: PutAccountSendingAttributesPutBody): Observable<PutAccountSendingAttributesResponse> {
			return this.http.put<PutAccountSendingAttributesResponse>(this.baseUri + 'v1/email/account/sending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
		 * Put v1/email/configuration-sets/{ConfigurationSetName}/delivery-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to associate with a dedicated IP pool.
		 * @return {PutConfigurationSetDeliveryOptionsResponse} Success
		 */
		PutConfigurationSetDeliveryOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetDeliveryOptionsPutBody): Observable<PutConfigurationSetDeliveryOptionsResponse> {
			return this.http.put<PutConfigurationSetDeliveryOptionsResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/delivery-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
		 * Put v1/email/configuration-sets/{ConfigurationSetName}/reputation-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable reputation metric tracking for.
		 * @return {PutConfigurationSetReputationOptionsResponse} Success
		 */
		PutConfigurationSetReputationOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetReputationOptionsPutBody): Observable<PutConfigurationSetReputationOptionsResponse> {
			return this.http.put<PutConfigurationSetReputationOptionsResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/reputation-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
		 * Put v1/email/configuration-sets/{ConfigurationSetName}/sending
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable email sending for.
		 * @return {PutConfigurationSetSendingOptionsResponse} Success
		 */
		PutConfigurationSetSendingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSendingOptionsPutBody): Observable<PutConfigurationSetSendingOptionsResponse> {
			return this.http.put<PutConfigurationSetSendingOptionsResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/sending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
		 * Put v1/email/configuration-sets/{ConfigurationSetName}/tracking-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add a custom tracking domain to.
		 * @return {PutConfigurationSetTrackingOptionsResponse} Success
		 */
		PutConfigurationSetTrackingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetTrackingOptionsPutBody): Observable<PutConfigurationSetTrackingOptionsResponse> {
			return this.http.put<PutConfigurationSetTrackingOptionsResponse>(this.baseUri + 'v1/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/tracking-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
		 * Put v1/email/dedicated-ips/{IP}/pool
		 * @param {string} IP The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Pinpoint account.
		 * @return {PutDedicatedIpInPoolResponse} Success
		 */
		PutDedicatedIpInPool(IP: string, requestBody: PutDedicatedIpInPoolPutBody): Observable<PutDedicatedIpInPoolResponse> {
			return this.http.put<PutDedicatedIpInPoolResponse>(this.baseUri + 'v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/pool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p/>
		 * Put v1/email/dedicated-ips/{IP}/warmup
		 * @param {string} IP The dedicated IP address that you want to update the warm-up attributes for.
		 * @return {PutDedicatedIpWarmupAttributesResponse} Success
		 */
		PutDedicatedIpWarmupAttributes(IP: string, requestBody: PutDedicatedIpWarmupAttributesPutBody): Observable<PutDedicatedIpWarmupAttributesResponse> {
			return this.http.put<PutDedicatedIpWarmupAttributesResponse>(this.baseUri + 'v1/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/warmup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable DKIM authentication for an email identity.
		 * Put v1/email/identities/{EmailIdentity}/dkim
		 * @param {string} EmailIdentity The email identity that you want to change the DKIM settings for.
		 * @return {PutEmailIdentityDkimAttributesResponse} Success
		 */
		PutEmailIdentityDkimAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimAttributesPutBody): Observable<PutEmailIdentityDkimAttributesResponse> {
			return this.http.put<PutEmailIdentityDkimAttributesResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
		 * Put v1/email/identities/{EmailIdentity}/feedback
		 * @param {string} EmailIdentity The email identity that you want to configure bounce and complaint feedback forwarding for.
		 * @return {PutEmailIdentityFeedbackAttributesResponse} Success
		 */
		PutEmailIdentityFeedbackAttributes(EmailIdentity: string, requestBody: PutEmailIdentityFeedbackAttributesPutBody): Observable<PutEmailIdentityFeedbackAttributesResponse> {
			return this.http.put<PutEmailIdentityFeedbackAttributesResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
		 * Put v1/email/identities/{EmailIdentity}/mail-from
		 * @param {string} EmailIdentity The verified email identity that you want to set up the custom MAIL FROM domain for.
		 * @return {PutEmailIdentityMailFromAttributesResponse} Success
		 */
		PutEmailIdentityMailFromAttributes(EmailIdentity: string, requestBody: PutEmailIdentityMailFromAttributesPutBody): Observable<PutEmailIdentityMailFromAttributesResponse> {
			return this.http.put<PutEmailIdentityMailFromAttributesResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/mail-from', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
		 * Post v1/email/outbound-emails
		 * @return {SendEmailResponse} Success
		 */
		SendEmail(requestBody: SendEmailPostBody): Observable<SendEmailResponse> {
			return this.http.post<SendEmailResponse>(this.baseUri + 'v1/email/outbound-emails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post v1/email/tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v1/email/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one or more tags (keys and values) from a specified resource.
		 * Delete v1/email/tags#ResourceArn&TagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.
		 * @param {Array<string>} TagKeys <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v1/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, TagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v1/email/tags#ResourceArn&TagKeys?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateConfigurationSetPostBody {

		/**
		 * <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: string;

		/** <p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: CreateConfigurationSetPostBodyTrackingOptions;

		/** Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: CreateConfigurationSetPostBodyDeliveryOptions;

		/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: CreateConfigurationSetPostBodyReputationOptions;

		/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: CreateConfigurationSetPostBodySendingOptions;

		/** An array of objects that define the tags (keys and values) that you want to associate with the configuration set. */
		Tags?: Array<Tag>;
	}
	export interface CreateConfigurationSetPostBodyFormProperties {

		/**
		 * <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfigurationSetPostBodyTrackingOptions {
		CustomRedirectDomain?: string;
	}
	export interface CreateConfigurationSetPostBodyTrackingOptionsFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyTrackingOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyTrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyDeliveryOptions {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}
	export interface CreateConfigurationSetPostBodyDeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyDeliveryOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyDeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyReputationOptions {
		ReputationMetricsEnabled?: boolean | null;
		LastFreshStart?: Date;
	}
	export interface CreateConfigurationSetPostBodyReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyReputationOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyReputationOptionsFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodySendingOptions {
		SendingEnabled?: boolean | null;
	}
	export interface CreateConfigurationSetPostBodySendingOptionsFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodySendingOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodySendingOptionsFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBody {

		/**
		 * <p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: string;

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: CreateConfigurationSetEventDestinationPostBodyEventDestination;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyFormProperties {

		/**
		 * <p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBodyEventDestination {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
		PinpointDestination?: PinpointDestination;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyEventDestinationFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDedicatedIpPoolPostBody {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: string;

		/** An object that defines the tags (keys and values) that you want to associate with the pool. */
		Tags?: Array<Tag>;
	}
	export interface CreateDedicatedIpPoolPostBodyFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolPostBodyFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolPostBodyFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDeliverabilityTestReportPostBody {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string | null;

		/**
		 * The email address that the predictive inbox placement test email was sent from.
		 * Required
		 */
		FromEmailAddress: string;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: CreateDeliverabilityTestReportPostBodyContent;

		/** An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test. */
		Tags?: Array<Tag>;
	}
	export interface CreateDeliverabilityTestReportPostBodyFormProperties {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName: FormControl<string | null | undefined>,

		/**
		 * The email address that the predictive inbox placement test email was sent from.
		 * Required
		 */
		FromEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportPostBodyFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportPostBodyFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDeliverabilityTestReportPostBodyContent {
		Simple?: Message;
		Raw?: RawMessage;
		Template?: Template;
	}
	export interface CreateDeliverabilityTestReportPostBodyContentFormProperties {
	}
	export function CreateCreateDeliverabilityTestReportPostBodyContentFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportPostBodyContentFormProperties>({
		});

	}

	export interface CreateEmailIdentityPostBody {

		/**
		 * The email address or domain that you want to verify.
		 * Required
		 */
		EmailIdentity: string;

		/** An array of objects that define the tags (keys and values) that you want to associate with the email identity. */
		Tags?: Array<Tag>;
	}
	export interface CreateEmailIdentityPostBodyFormProperties {

		/**
		 * The email address or domain that you want to verify.
		 * Required
		 */
		EmailIdentity: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPostBodyFormGroup() {
		return new FormGroup<CreateEmailIdentityPostBodyFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBody {

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: UpdateConfigurationSetEventDestinationPutBodyEventDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyFormProperties>({
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestination {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
		PinpointDestination?: PinpointDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyEventDestinationFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutDeliverabilityDashboardOptionPutBody {

		/**
		 * Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.
		 * Required
		 */
		DashboardEnabled: boolean;

		/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}
	export interface PutDeliverabilityDashboardOptionPutBodyFormProperties {

		/**
		 * Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.
		 * Required
		 */
		DashboardEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDeliverabilityDashboardOptionPutBodyFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionPutBodyFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAccountDedicatedIpWarmupAttributesPutBody {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled?: boolean | null;
	}
	export interface PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties>({
			AutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAccountSendingAttributesPutBody {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled?: boolean | null;
	}
	export interface PutAccountSendingAttributesPutBodyFormProperties {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountSendingAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountSendingAttributesPutBodyFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetDeliveryOptionsPutBody {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName?: string | null;
	}
	export interface PutConfigurationSetDeliveryOptionsPutBodyFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetDeliveryOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsPutBodyFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetReputationOptionsPutBody {

		/** If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set. */
		ReputationMetricsEnabled?: boolean | null;
	}
	export interface PutConfigurationSetReputationOptionsPutBodyFormProperties {

		/** If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set. */
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetReputationOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsPutBodyFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetSendingOptionsPutBody {

		/** If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set. */
		SendingEnabled?: boolean | null;
	}
	export interface PutConfigurationSetSendingOptionsPutBodyFormProperties {

		/** If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set. */
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetSendingOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsPutBodyFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetTrackingOptionsPutBody {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string | null;
	}
	export interface PutConfigurationSetTrackingOptionsPutBodyFormProperties {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsPutBodyFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDedicatedIpInPoolPutBody {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: string;
	}
	export interface PutDedicatedIpInPoolPutBodyFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutDedicatedIpInPoolPutBodyFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolPutBodyFormProperties>({
			DestinationPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDedicatedIpWarmupAttributesPutBody {

		/**
		 * The warm-up percentage that you want to associate with the dedicated IP address.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WarmupPercentage: number;
	}
	export interface PutDedicatedIpWarmupAttributesPutBodyFormProperties {

		/**
		 * The warm-up percentage that you want to associate with the dedicated IP address.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WarmupPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePutDedicatedIpWarmupAttributesPutBodyFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesPutBodyFormProperties>({
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEmailIdentityDkimAttributesPutBody {

		/** <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p> */
		SigningEnabled?: boolean | null;
	}
	export interface PutEmailIdentityDkimAttributesPutBodyFormProperties {

		/** <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p> */
		SigningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesPutBodyFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityFeedbackAttributesPutBody {

		/** <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p> */
		EmailForwardingEnabled?: boolean | null;
	}
	export interface PutEmailIdentityFeedbackAttributesPutBodyFormProperties {

		/** <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p> */
		EmailForwardingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityFeedbackAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesPutBodyFormProperties>({
			EmailForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityMailFromAttributesPutBody {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain?: string | null;

		/** <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: BehaviorOnMxFailure | null;
	}
	export interface PutEmailIdentityMailFromAttributesPutBodyFormProperties {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain: FormControl<string | null | undefined>,

		/** <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesPutBodyFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined),
		});

	}

	export interface SendEmailPostBody {

		/** The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress?: string | null;

		/**
		 * An object that describes the recipients for an email.
		 * Required
		 */
		Destination: SendEmailPostBodyDestination;

		/** The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply. */
		ReplyToAddresses?: Array<string>;

		/** The address that Amazon Pinpoint should send bounce and complaint notifications to. */
		FeedbackForwardingEmailAddress?: string | null;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: SendEmailPostBodyContent;

		/** A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/** <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface SendEmailPostBodyFormProperties {

		/** The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** The address that Amazon Pinpoint should send bounce and complaint notifications to. */
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailPostBodyFormGroup() {
		return new FormGroup<SendEmailPostBodyFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendEmailPostBodyDestination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}
	export interface SendEmailPostBodyDestinationFormProperties {
	}
	export function CreateSendEmailPostBodyDestinationFormGroup() {
		return new FormGroup<SendEmailPostBodyDestinationFormProperties>({
		});

	}

	export interface SendEmailPostBodyContent {
		Simple?: Message;
		Raw?: RawMessage;
		Template?: Template;
	}
	export interface SendEmailPostBodyContentFormProperties {
	}
	export function CreateSendEmailPostBodyContentFormGroup() {
		return new FormGroup<SendEmailPostBodyContentFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

