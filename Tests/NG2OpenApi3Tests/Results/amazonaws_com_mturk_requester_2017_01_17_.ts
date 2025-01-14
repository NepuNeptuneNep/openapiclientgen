import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptQualificationRequestResponse {
	}
	export interface AcceptQualificationRequestResponseFormProperties {
	}
	export function CreateAcceptQualificationRequestResponseFormGroup() {
		return new FormGroup<AcceptQualificationRequestResponseFormProperties>({
		});

	}

	export interface AcceptQualificationRequestRequest {

		/** Required */
		QualificationRequestId: string;
		IntegerValue?: number | null;
	}
	export interface AcceptQualificationRequestRequestFormProperties {

		/** Required */
		QualificationRequestId: FormControl<string | null | undefined>,
		IntegerValue: FormControl<number | null | undefined>,
	}
	export function CreateAcceptQualificationRequestRequestFormGroup() {
		return new FormGroup<AcceptQualificationRequestRequestFormProperties>({
			QualificationRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IntegerValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceFault {
	}
	export interface ServiceFaultFormProperties {
	}
	export function CreateServiceFaultFormGroup() {
		return new FormGroup<ServiceFaultFormProperties>({
		});

	}

	export interface RequestError {
	}
	export interface RequestErrorFormProperties {
	}
	export function CreateRequestErrorFormGroup() {
		return new FormGroup<RequestErrorFormProperties>({
		});

	}

	export interface ApproveAssignmentResponse {
	}
	export interface ApproveAssignmentResponseFormProperties {
	}
	export function CreateApproveAssignmentResponseFormGroup() {
		return new FormGroup<ApproveAssignmentResponseFormProperties>({
		});

	}

	export interface ApproveAssignmentRequest {

		/** Required */
		AssignmentId: string;
		RequesterFeedback?: string;
		OverrideRejection?: boolean | null;
	}
	export interface ApproveAssignmentRequestFormProperties {

		/** Required */
		AssignmentId: FormControl<string | null | undefined>,
		RequesterFeedback: FormControl<string | null | undefined>,
		OverrideRejection: FormControl<boolean | null | undefined>,
	}
	export function CreateApproveAssignmentRequestFormGroup() {
		return new FormGroup<ApproveAssignmentRequestFormProperties>({
			AssignmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequesterFeedback: new FormControl<string | null | undefined>(undefined),
			OverrideRejection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateQualificationWithWorkerResponse {
	}
	export interface AssociateQualificationWithWorkerResponseFormProperties {
	}
	export function CreateAssociateQualificationWithWorkerResponseFormGroup() {
		return new FormGroup<AssociateQualificationWithWorkerResponseFormProperties>({
		});

	}

	export interface AssociateQualificationWithWorkerRequest {

		/** Required */
		QualificationTypeId: string;

		/** Required */
		WorkerId: string;
		IntegerValue?: number | null;
		SendNotification?: boolean | null;
	}
	export interface AssociateQualificationWithWorkerRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,

		/** Required */
		WorkerId: FormControl<string | null | undefined>,
		IntegerValue: FormControl<number | null | undefined>,
		SendNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateQualificationWithWorkerRequestFormGroup() {
		return new FormGroup<AssociateQualificationWithWorkerRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IntegerValue: new FormControl<number | null | undefined>(undefined),
			SendNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateAdditionalAssignmentsForHITResponse {
	}
	export interface CreateAdditionalAssignmentsForHITResponseFormProperties {
	}
	export function CreateCreateAdditionalAssignmentsForHITResponseFormGroup() {
		return new FormGroup<CreateAdditionalAssignmentsForHITResponseFormProperties>({
		});

	}

	export interface CreateAdditionalAssignmentsForHITRequest {

		/** Required */
		HITId: string;

		/** Required */
		NumberOfAdditionalAssignments: number;
		UniqueRequestToken?: string;
	}
	export interface CreateAdditionalAssignmentsForHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,

		/** Required */
		NumberOfAdditionalAssignments: FormControl<number | null | undefined>,
		UniqueRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAdditionalAssignmentsForHITRequestFormGroup() {
		return new FormGroup<CreateAdditionalAssignmentsForHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfAdditionalAssignments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UniqueRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHITResponse {
		HIT?: HIT;
	}
	export interface CreateHITResponseFormProperties {
	}
	export function CreateCreateHITResponseFormGroup() {
		return new FormGroup<CreateHITResponseFormProperties>({
		});

	}


	/**  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
	export interface HIT {
		HITId?: string;
		HITTypeId?: string;
		HITGroupId?: string;
		HITLayoutId?: string;
		CreationTime?: Date;
		Title?: string;
		Description?: string;
		Question?: string;
		Keywords?: string;
		HITStatus?: HITStatus;
		MaxAssignments?: number | null;

		/** A string representing a currency amount. */
		Reward?: string | null;
		AutoApprovalDelayInSeconds?: number | null;
		Expiration?: Date;
		AssignmentDurationInSeconds?: number | null;
		RequesterAnnotation?: string;
		QualificationRequirements?: Array<QualificationRequirement>;
		HITReviewStatus?: HITReviewStatus;
		NumberOfAssignmentsPending?: number | null;
		NumberOfAssignmentsAvailable?: number | null;
		NumberOfAssignmentsCompleted?: number | null;
	}

	/**  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
	export interface HITFormProperties {
		HITId: FormControl<string | null | undefined>,
		HITTypeId: FormControl<string | null | undefined>,
		HITGroupId: FormControl<string | null | undefined>,
		HITLayoutId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Question: FormControl<string | null | undefined>,
		Keywords: FormControl<string | null | undefined>,
		HITStatus: FormControl<HITStatus | null | undefined>,
		MaxAssignments: FormControl<number | null | undefined>,

		/** A string representing a currency amount. */
		Reward: FormControl<string | null | undefined>,
		AutoApprovalDelayInSeconds: FormControl<number | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
		AssignmentDurationInSeconds: FormControl<number | null | undefined>,
		RequesterAnnotation: FormControl<string | null | undefined>,
		HITReviewStatus: FormControl<HITReviewStatus | null | undefined>,
		NumberOfAssignmentsPending: FormControl<number | null | undefined>,
		NumberOfAssignmentsAvailable: FormControl<number | null | undefined>,
		NumberOfAssignmentsCompleted: FormControl<number | null | undefined>,
	}
	export function CreateHITFormGroup() {
		return new FormGroup<HITFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined),
			HITTypeId: new FormControl<string | null | undefined>(undefined),
			HITGroupId: new FormControl<string | null | undefined>(undefined),
			HITLayoutId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Question: new FormControl<string | null | undefined>(undefined),
			Keywords: new FormControl<string | null | undefined>(undefined),
			HITStatus: new FormControl<HITStatus | null | undefined>(undefined),
			MaxAssignments: new FormControl<number | null | undefined>(undefined),
			Reward: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+(\.)?[0-9]{0,2}$')]),
			AutoApprovalDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
			AssignmentDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			RequesterAnnotation: new FormControl<string | null | undefined>(undefined),
			HITReviewStatus: new FormControl<HITReviewStatus | null | undefined>(undefined),
			NumberOfAssignmentsPending: new FormControl<number | null | undefined>(undefined),
			NumberOfAssignmentsAvailable: new FormControl<number | null | undefined>(undefined),
			NumberOfAssignmentsCompleted: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HITStatus { Assignable = 'Assignable', Unassignable = 'Unassignable', Reviewable = 'Reviewable', Reviewing = 'Reviewing', Disposed = 'Disposed' }


	/**  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.  */
	export interface QualificationRequirement {

		/** Required */
		QualificationTypeId: string;

		/** Required */
		Comparator: Comparator;
		IntegerValues?: Array<number> | null;
		LocaleValues?: Array<Locale>;
		RequiredToPreview?: boolean | null;
		ActionsGuarded?: HITAccessActions;
	}

	/**  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.  */
	export interface QualificationRequirementFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,

		/** Required */
		Comparator: FormControl<Comparator | null | undefined>,
		RequiredToPreview: FormControl<boolean | null | undefined>,
		ActionsGuarded: FormControl<HITAccessActions | null | undefined>,
	}
	export function CreateQualificationRequirementFormGroup() {
		return new FormGroup<QualificationRequirementFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comparator: new FormControl<Comparator | null | undefined>(undefined, [Validators.required]),
			RequiredToPreview: new FormControl<boolean | null | undefined>(undefined),
			ActionsGuarded: new FormControl<HITAccessActions | null | undefined>(undefined),
		});

	}

	export enum Comparator { LessThan = 'LessThan', LessThanOrEqualTo = 'LessThanOrEqualTo', GreaterThan = 'GreaterThan', GreaterThanOrEqualTo = 'GreaterThanOrEqualTo', EqualTo = 'EqualTo', NotEqualTo = 'NotEqualTo', Exists = 'Exists', DoesNotExist = 'DoesNotExist', In = 'In', NotIn = 'NotIn' }


	/** The Locale data structure represents a geographical region or location. */
	export interface Locale {

		/** Required */
		Country: string;
		Subdivision?: string;
	}

	/** The Locale data structure represents a geographical region or location. */
	export interface LocaleFormProperties {

		/** Required */
		Country: FormControl<string | null | undefined>,
		Subdivision: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdivision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HITAccessActions { Accept = 'Accept', PreviewAndAccept = 'PreviewAndAccept', DiscoverPreviewAndAccept = 'DiscoverPreviewAndAccept' }

	export enum HITReviewStatus { NotReviewed = 'NotReviewed', MarkedForReview = 'MarkedForReview', ReviewedAppropriate = 'ReviewedAppropriate', ReviewedInappropriate = 'ReviewedInappropriate' }

	export interface CreateHITRequest {
		MaxAssignments?: number | null;
		AutoApprovalDelayInSeconds?: number | null;

		/** Required */
		LifetimeInSeconds: number;

		/** Required */
		AssignmentDurationInSeconds: number;

		/** Required */
		Reward: string;

		/** Required */
		Title: string;
		Keywords?: string;

		/** Required */
		Description: string;
		Question?: string;
		RequesterAnnotation?: string;
		QualificationRequirements?: Array<QualificationRequirement>;
		UniqueRequestToken?: string;
		AssignmentReviewPolicy?: ReviewPolicy;
		HITReviewPolicy?: ReviewPolicy;
		HITLayoutId?: string;
		HITLayoutParameters?: Array<HITLayoutParameter>;
	}
	export interface CreateHITRequestFormProperties {
		MaxAssignments: FormControl<number | null | undefined>,
		AutoApprovalDelayInSeconds: FormControl<number | null | undefined>,

		/** Required */
		LifetimeInSeconds: FormControl<number | null | undefined>,

		/** Required */
		AssignmentDurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		Reward: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Keywords: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		Question: FormControl<string | null | undefined>,
		RequesterAnnotation: FormControl<string | null | undefined>,
		UniqueRequestToken: FormControl<string | null | undefined>,
		HITLayoutId: FormControl<string | null | undefined>,
	}
	export function CreateCreateHITRequestFormGroup() {
		return new FormGroup<CreateHITRequestFormProperties>({
			MaxAssignments: new FormControl<number | null | undefined>(undefined),
			AutoApprovalDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			LifetimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AssignmentDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Reward: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Keywords: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Question: new FormControl<string | null | undefined>(undefined),
			RequesterAnnotation: new FormControl<string | null | undefined>(undefined),
			UniqueRequestToken: new FormControl<string | null | undefined>(undefined),
			HITLayoutId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.  */
	export interface ReviewPolicy {

		/** Required */
		PolicyName: string;
		Parameters?: Array<PolicyParameter>;
	}

	/**  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.  */
	export interface ReviewPolicyFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateReviewPolicyFormGroup() {
		return new FormGroup<ReviewPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Name of the parameter from the Review policy.  */
	export interface PolicyParameter {
		Key?: string;
		Values?: Array<string>;
		MapEntries?: Array<ParameterMapEntry>;
	}

	/**  Name of the parameter from the Review policy.  */
	export interface PolicyParameterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreatePolicyParameterFormGroup() {
		return new FormGroup<PolicyParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.  */
	export interface ParameterMapEntry {
		Key?: string;
		Values?: Array<string>;
	}

	/**  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.  */
	export interface ParameterMapEntryFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateParameterMapEntryFormGroup() {
		return new FormGroup<ParameterMapEntryFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.  */
	export interface HITLayoutParameter {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/**  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.  */
	export interface HITLayoutParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateHITLayoutParameterFormGroup() {
		return new FormGroup<HITLayoutParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateHITTypeResponse {
		HITTypeId?: string;
	}
	export interface CreateHITTypeResponseFormProperties {
		HITTypeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateHITTypeResponseFormGroup() {
		return new FormGroup<CreateHITTypeResponseFormProperties>({
			HITTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHITTypeRequest {
		AutoApprovalDelayInSeconds?: number | null;

		/** Required */
		AssignmentDurationInSeconds: number;

		/** Required */
		Reward: string;

		/** Required */
		Title: string;
		Keywords?: string;

		/** Required */
		Description: string;
		QualificationRequirements?: Array<QualificationRequirement>;
	}
	export interface CreateHITTypeRequestFormProperties {
		AutoApprovalDelayInSeconds: FormControl<number | null | undefined>,

		/** Required */
		AssignmentDurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		Reward: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Keywords: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateHITTypeRequestFormGroup() {
		return new FormGroup<CreateHITTypeRequestFormProperties>({
			AutoApprovalDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			AssignmentDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Reward: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Keywords: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateHITWithHITTypeResponse {
		HIT?: HIT;
	}
	export interface CreateHITWithHITTypeResponseFormProperties {
	}
	export function CreateCreateHITWithHITTypeResponseFormGroup() {
		return new FormGroup<CreateHITWithHITTypeResponseFormProperties>({
		});

	}

	export interface CreateHITWithHITTypeRequest {

		/** Required */
		HITTypeId: string;
		MaxAssignments?: number | null;

		/** Required */
		LifetimeInSeconds: number;
		Question?: string;
		RequesterAnnotation?: string;
		UniqueRequestToken?: string;
		AssignmentReviewPolicy?: ReviewPolicy;
		HITReviewPolicy?: ReviewPolicy;
		HITLayoutId?: string;
		HITLayoutParameters?: Array<HITLayoutParameter>;
	}
	export interface CreateHITWithHITTypeRequestFormProperties {

		/** Required */
		HITTypeId: FormControl<string | null | undefined>,
		MaxAssignments: FormControl<number | null | undefined>,

		/** Required */
		LifetimeInSeconds: FormControl<number | null | undefined>,
		Question: FormControl<string | null | undefined>,
		RequesterAnnotation: FormControl<string | null | undefined>,
		UniqueRequestToken: FormControl<string | null | undefined>,
		HITLayoutId: FormControl<string | null | undefined>,
	}
	export function CreateCreateHITWithHITTypeRequestFormGroup() {
		return new FormGroup<CreateHITWithHITTypeRequestFormProperties>({
			HITTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxAssignments: new FormControl<number | null | undefined>(undefined),
			LifetimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Question: new FormControl<string | null | undefined>(undefined),
			RequesterAnnotation: new FormControl<string | null | undefined>(undefined),
			UniqueRequestToken: new FormControl<string | null | undefined>(undefined),
			HITLayoutId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQualificationTypeResponse {
		QualificationType?: QualificationType;
	}
	export interface CreateQualificationTypeResponseFormProperties {
	}
	export function CreateCreateQualificationTypeResponseFormGroup() {
		return new FormGroup<CreateQualificationTypeResponseFormProperties>({
		});

	}


	/**  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.  */
	export interface QualificationType {
		QualificationTypeId?: string;
		CreationTime?: Date;
		Name?: string;
		Description?: string;
		Keywords?: string;
		QualificationTypeStatus?: QualificationTypeStatus;
		Test?: string;
		TestDurationInSeconds?: number | null;
		AnswerKey?: string;
		RetryDelayInSeconds?: number | null;
		IsRequestable?: boolean | null;
		AutoGranted?: boolean | null;
		AutoGrantedValue?: number | null;
	}

	/**  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.  */
	export interface QualificationTypeFormProperties {
		QualificationTypeId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Keywords: FormControl<string | null | undefined>,
		QualificationTypeStatus: FormControl<QualificationTypeStatus | null | undefined>,
		Test: FormControl<string | null | undefined>,
		TestDurationInSeconds: FormControl<number | null | undefined>,
		AnswerKey: FormControl<string | null | undefined>,
		RetryDelayInSeconds: FormControl<number | null | undefined>,
		IsRequestable: FormControl<boolean | null | undefined>,
		AutoGranted: FormControl<boolean | null | undefined>,
		AutoGrantedValue: FormControl<number | null | undefined>,
	}
	export function CreateQualificationTypeFormGroup() {
		return new FormGroup<QualificationTypeFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Keywords: new FormControl<string | null | undefined>(undefined),
			QualificationTypeStatus: new FormControl<QualificationTypeStatus | null | undefined>(undefined),
			Test: new FormControl<string | null | undefined>(undefined),
			TestDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			AnswerKey: new FormControl<string | null | undefined>(undefined),
			RetryDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			IsRequestable: new FormControl<boolean | null | undefined>(undefined),
			AutoGranted: new FormControl<boolean | null | undefined>(undefined),
			AutoGrantedValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum QualificationTypeStatus { Active = 'Active', Inactive = 'Inactive' }

	export interface CreateQualificationTypeRequest {

		/** Required */
		Name: string;
		Keywords?: string;

		/** Required */
		Description: string;

		/** Required */
		QualificationTypeStatus: QualificationTypeStatus;
		RetryDelayInSeconds?: number | null;
		Test?: string;
		AnswerKey?: string;
		TestDurationInSeconds?: number | null;
		AutoGranted?: boolean | null;
		AutoGrantedValue?: number | null;
	}
	export interface CreateQualificationTypeRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Keywords: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		QualificationTypeStatus: FormControl<QualificationTypeStatus | null | undefined>,
		RetryDelayInSeconds: FormControl<number | null | undefined>,
		Test: FormControl<string | null | undefined>,
		AnswerKey: FormControl<string | null | undefined>,
		TestDurationInSeconds: FormControl<number | null | undefined>,
		AutoGranted: FormControl<boolean | null | undefined>,
		AutoGrantedValue: FormControl<number | null | undefined>,
	}
	export function CreateCreateQualificationTypeRequestFormGroup() {
		return new FormGroup<CreateQualificationTypeRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Keywords: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QualificationTypeStatus: new FormControl<QualificationTypeStatus | null | undefined>(undefined, [Validators.required]),
			RetryDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			Test: new FormControl<string | null | undefined>(undefined),
			AnswerKey: new FormControl<string | null | undefined>(undefined),
			TestDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			AutoGranted: new FormControl<boolean | null | undefined>(undefined),
			AutoGrantedValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorkerBlockResponse {
	}
	export interface CreateWorkerBlockResponseFormProperties {
	}
	export function CreateCreateWorkerBlockResponseFormGroup() {
		return new FormGroup<CreateWorkerBlockResponseFormProperties>({
		});

	}

	export interface CreateWorkerBlockRequest {

		/** Required */
		WorkerId: string;

		/** Required */
		Reason: string;
	}
	export interface CreateWorkerBlockRequestFormProperties {

		/** Required */
		WorkerId: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerBlockRequestFormGroup() {
		return new FormGroup<CreateWorkerBlockRequestFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHITResponse {
	}
	export interface DeleteHITResponseFormProperties {
	}
	export function CreateDeleteHITResponseFormGroup() {
		return new FormGroup<DeleteHITResponseFormProperties>({
		});

	}

	export interface DeleteHITRequest {

		/** Required */
		HITId: string;
	}
	export interface DeleteHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHITRequestFormGroup() {
		return new FormGroup<DeleteHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteQualificationTypeResponse {
	}
	export interface DeleteQualificationTypeResponseFormProperties {
	}
	export function CreateDeleteQualificationTypeResponseFormGroup() {
		return new FormGroup<DeleteQualificationTypeResponseFormProperties>({
		});

	}

	export interface DeleteQualificationTypeRequest {

		/** Required */
		QualificationTypeId: string;
	}
	export interface DeleteQualificationTypeRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQualificationTypeRequestFormGroup() {
		return new FormGroup<DeleteQualificationTypeRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkerBlockResponse {
	}
	export interface DeleteWorkerBlockResponseFormProperties {
	}
	export function CreateDeleteWorkerBlockResponseFormGroup() {
		return new FormGroup<DeleteWorkerBlockResponseFormProperties>({
		});

	}

	export interface DeleteWorkerBlockRequest {

		/** Required */
		WorkerId: string;
		Reason?: string;
	}
	export interface DeleteWorkerBlockRequestFormProperties {

		/** Required */
		WorkerId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerBlockRequestFormGroup() {
		return new FormGroup<DeleteWorkerBlockRequestFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateQualificationFromWorkerResponse {
	}
	export interface DisassociateQualificationFromWorkerResponseFormProperties {
	}
	export function CreateDisassociateQualificationFromWorkerResponseFormGroup() {
		return new FormGroup<DisassociateQualificationFromWorkerResponseFormProperties>({
		});

	}

	export interface DisassociateQualificationFromWorkerRequest {

		/** Required */
		WorkerId: string;

		/** Required */
		QualificationTypeId: string;
		Reason?: string;
	}
	export interface DisassociateQualificationFromWorkerRequestFormProperties {

		/** Required */
		WorkerId: FormControl<string | null | undefined>,

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateQualificationFromWorkerRequestFormGroup() {
		return new FormGroup<DisassociateQualificationFromWorkerRequestFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccountBalanceResponse {

		/** A string representing a currency amount. */
		AvailableBalance?: string | null;

		/** A string representing a currency amount. */
		OnHoldBalance?: string | null;
	}
	export interface GetAccountBalanceResponseFormProperties {

		/** A string representing a currency amount. */
		AvailableBalance: FormControl<string | null | undefined>,

		/** A string representing a currency amount. */
		OnHoldBalance: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountBalanceResponseFormGroup() {
		return new FormGroup<GetAccountBalanceResponseFormProperties>({
			AvailableBalance: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+(\.)?[0-9]{0,2}$')]),
			OnHoldBalance: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+(\.)?[0-9]{0,2}$')]),
		});

	}

	export interface GetAccountBalanceRequest {
	}
	export interface GetAccountBalanceRequestFormProperties {
	}
	export function CreateGetAccountBalanceRequestFormGroup() {
		return new FormGroup<GetAccountBalanceRequestFormProperties>({
		});

	}

	export interface GetAssignmentResponse {
		Assignment?: Assignment;
		HIT?: HIT;
	}
	export interface GetAssignmentResponseFormProperties {
	}
	export function CreateGetAssignmentResponseFormGroup() {
		return new FormGroup<GetAssignmentResponseFormProperties>({
		});

	}


	/**  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.  */
	export interface Assignment {
		AssignmentId?: string;
		WorkerId?: string;
		HITId?: string;
		AssignmentStatus?: AssignmentStatus;
		AutoApprovalTime?: Date;
		AcceptTime?: Date;
		SubmitTime?: Date;
		ApprovalTime?: Date;
		RejectionTime?: Date;
		Deadline?: Date;
		Answer?: string;
		RequesterFeedback?: string;
	}

	/**  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.  */
	export interface AssignmentFormProperties {
		AssignmentId: FormControl<string | null | undefined>,
		WorkerId: FormControl<string | null | undefined>,
		HITId: FormControl<string | null | undefined>,
		AssignmentStatus: FormControl<AssignmentStatus | null | undefined>,
		AutoApprovalTime: FormControl<Date | null | undefined>,
		AcceptTime: FormControl<Date | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		ApprovalTime: FormControl<Date | null | undefined>,
		RejectionTime: FormControl<Date | null | undefined>,
		Deadline: FormControl<Date | null | undefined>,
		Answer: FormControl<string | null | undefined>,
		RequesterFeedback: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			WorkerId: new FormControl<string | null | undefined>(undefined),
			HITId: new FormControl<string | null | undefined>(undefined),
			AssignmentStatus: new FormControl<AssignmentStatus | null | undefined>(undefined),
			AutoApprovalTime: new FormControl<Date | null | undefined>(undefined),
			AcceptTime: new FormControl<Date | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			ApprovalTime: new FormControl<Date | null | undefined>(undefined),
			RejectionTime: new FormControl<Date | null | undefined>(undefined),
			Deadline: new FormControl<Date | null | undefined>(undefined),
			Answer: new FormControl<string | null | undefined>(undefined),
			RequesterFeedback: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssignmentStatus { Submitted = 'Submitted', Approved = 'Approved', Rejected = 'Rejected' }

	export interface GetAssignmentRequest {

		/** Required */
		AssignmentId: string;
	}
	export interface GetAssignmentRequestFormProperties {

		/** Required */
		AssignmentId: FormControl<string | null | undefined>,
	}
	export function CreateGetAssignmentRequestFormGroup() {
		return new FormGroup<GetAssignmentRequestFormProperties>({
			AssignmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFileUploadURLResponse {
		FileUploadURL?: string;
	}
	export interface GetFileUploadURLResponseFormProperties {
		FileUploadURL: FormControl<string | null | undefined>,
	}
	export function CreateGetFileUploadURLResponseFormGroup() {
		return new FormGroup<GetFileUploadURLResponseFormProperties>({
			FileUploadURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFileUploadURLRequest {

		/** Required */
		AssignmentId: string;

		/** Required */
		QuestionIdentifier: string;
	}
	export interface GetFileUploadURLRequestFormProperties {

		/** Required */
		AssignmentId: FormControl<string | null | undefined>,

		/** Required */
		QuestionIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetFileUploadURLRequestFormGroup() {
		return new FormGroup<GetFileUploadURLRequestFormProperties>({
			AssignmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuestionIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHITResponse {
		HIT?: HIT;
	}
	export interface GetHITResponseFormProperties {
	}
	export function CreateGetHITResponseFormGroup() {
		return new FormGroup<GetHITResponseFormProperties>({
		});

	}

	export interface GetHITRequest {

		/** Required */
		HITId: string;
	}
	export interface GetHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,
	}
	export function CreateGetHITRequestFormGroup() {
		return new FormGroup<GetHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQualificationScoreResponse {
		Qualification?: Qualification;
	}
	export interface GetQualificationScoreResponseFormProperties {
	}
	export function CreateGetQualificationScoreResponseFormGroup() {
		return new FormGroup<GetQualificationScoreResponseFormProperties>({
		});

	}


	/** The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score). */
	export interface Qualification {
		QualificationTypeId?: string;
		WorkerId?: string;
		GrantTime?: Date;
		IntegerValue?: number | null;

		/** The Locale data structure represents a geographical region or location. */
		LocaleValue?: Locale;
		Status?: QualificationStatus;
	}

	/** The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score). */
	export interface QualificationFormProperties {
		QualificationTypeId: FormControl<string | null | undefined>,
		WorkerId: FormControl<string | null | undefined>,
		GrantTime: FormControl<Date | null | undefined>,
		IntegerValue: FormControl<number | null | undefined>,
		Status: FormControl<QualificationStatus | null | undefined>,
	}
	export function CreateQualificationFormGroup() {
		return new FormGroup<QualificationFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined),
			WorkerId: new FormControl<string | null | undefined>(undefined),
			GrantTime: new FormControl<Date | null | undefined>(undefined),
			IntegerValue: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<QualificationStatus | null | undefined>(undefined),
		});

	}

	export enum QualificationStatus { Granted = 'Granted', Revoked = 'Revoked' }

	export interface GetQualificationScoreRequest {

		/** Required */
		QualificationTypeId: string;

		/** Required */
		WorkerId: string;
	}
	export interface GetQualificationScoreRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,

		/** Required */
		WorkerId: FormControl<string | null | undefined>,
	}
	export function CreateGetQualificationScoreRequestFormGroup() {
		return new FormGroup<GetQualificationScoreRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQualificationTypeResponse {
		QualificationType?: QualificationType;
	}
	export interface GetQualificationTypeResponseFormProperties {
	}
	export function CreateGetQualificationTypeResponseFormGroup() {
		return new FormGroup<GetQualificationTypeResponseFormProperties>({
		});

	}

	export interface GetQualificationTypeRequest {

		/** Required */
		QualificationTypeId: string;
	}
	export interface GetQualificationTypeRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
	}
	export function CreateGetQualificationTypeRequestFormGroup() {
		return new FormGroup<GetQualificationTypeRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssignmentsForHITResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		Assignments?: Array<Assignment>;
	}
	export interface ListAssignmentsForHITResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssignmentsForHITResponseFormGroup() {
		return new FormGroup<ListAssignmentsForHITResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAssignmentsForHITRequest {

		/** Required */
		HITId: string;
		NextToken?: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		AssignmentStatuses?: Array<AssignmentStatus>;
	}
	export interface ListAssignmentsForHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssignmentsForHITRequestFormGroup() {
		return new FormGroup<ListAssignmentsForHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListBonusPaymentsResponse {
		NumResults?: number | null;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		BonusPayments?: Array<BonusPayment>;
	}
	export interface ListBonusPaymentsResponseFormProperties {
		NumResults: FormControl<number | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBonusPaymentsResponseFormGroup() {
		return new FormGroup<ListBonusPaymentsResponseFormProperties>({
			NumResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object representing a Bonus payment paid to a Worker. */
	export interface BonusPayment {
		WorkerId?: string;

		/** A string representing a currency amount. */
		BonusAmount?: string | null;
		AssignmentId?: string;
		Reason?: string;
		GrantTime?: Date;
	}

	/** An object representing a Bonus payment paid to a Worker. */
	export interface BonusPaymentFormProperties {
		WorkerId: FormControl<string | null | undefined>,

		/** A string representing a currency amount. */
		BonusAmount: FormControl<string | null | undefined>,
		AssignmentId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
		GrantTime: FormControl<Date | null | undefined>,
	}
	export function CreateBonusPaymentFormGroup() {
		return new FormGroup<BonusPaymentFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined),
			BonusAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+(\.)?[0-9]{0,2}$')]),
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
			GrantTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListBonusPaymentsRequest {
		HITId?: string;
		AssignmentId?: string;
		NextToken?: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListBonusPaymentsRequestFormProperties {
		HITId: FormControl<string | null | undefined>,
		AssignmentId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBonusPaymentsRequestFormGroup() {
		return new FormGroup<ListBonusPaymentsRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined),
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListHITsResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		HITs?: Array<HIT>;
	}
	export interface ListHITsResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListHITsResponseFormGroup() {
		return new FormGroup<ListHITsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListHITsRequest {
		NextToken?: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListHITsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListHITsRequestFormGroup() {
		return new FormGroup<ListHITsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListHITsForQualificationTypeResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		HITs?: Array<HIT>;
	}
	export interface ListHITsForQualificationTypeResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListHITsForQualificationTypeResponseFormGroup() {
		return new FormGroup<ListHITsForQualificationTypeResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListHITsForQualificationTypeRequest {

		/** Required */
		QualificationTypeId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListHITsForQualificationTypeRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListHITsForQualificationTypeRequestFormGroup() {
		return new FormGroup<ListHITsForQualificationTypeRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQualificationRequestsResponse {
		NumResults?: number | null;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		QualificationRequests?: Array<QualificationRequest>;
	}
	export interface ListQualificationRequestsResponseFormProperties {
		NumResults: FormControl<number | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQualificationRequestsResponseFormGroup() {
		return new FormGroup<ListQualificationRequestsResponseFormProperties>({
			NumResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/**  The QualificationRequest data structure represents a request a Worker has made for a Qualification.  */
	export interface QualificationRequest {
		QualificationRequestId?: string;
		QualificationTypeId?: string;
		WorkerId?: string;
		Test?: string;
		Answer?: string;
		SubmitTime?: Date;
	}

	/**  The QualificationRequest data structure represents a request a Worker has made for a Qualification.  */
	export interface QualificationRequestFormProperties {
		QualificationRequestId: FormControl<string | null | undefined>,
		QualificationTypeId: FormControl<string | null | undefined>,
		WorkerId: FormControl<string | null | undefined>,
		Test: FormControl<string | null | undefined>,
		Answer: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
	}
	export function CreateQualificationRequestFormGroup() {
		return new FormGroup<QualificationRequestFormProperties>({
			QualificationRequestId: new FormControl<string | null | undefined>(undefined),
			QualificationTypeId: new FormControl<string | null | undefined>(undefined),
			WorkerId: new FormControl<string | null | undefined>(undefined),
			Test: new FormControl<string | null | undefined>(undefined),
			Answer: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListQualificationRequestsRequest {
		QualificationTypeId?: string;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListQualificationRequestsRequestFormProperties {
		QualificationTypeId: FormControl<string | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListQualificationRequestsRequestFormGroup() {
		return new FormGroup<ListQualificationRequestsRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQualificationTypesResponse {
		NumResults?: number | null;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		QualificationTypes?: Array<QualificationType>;
	}
	export interface ListQualificationTypesResponseFormProperties {
		NumResults: FormControl<number | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQualificationTypesResponseFormGroup() {
		return new FormGroup<ListQualificationTypesResponseFormProperties>({
			NumResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListQualificationTypesRequest {
		Query?: string;

		/** Required */
		MustBeRequestable: boolean;
		MustBeOwnedByCaller?: boolean | null;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListQualificationTypesRequestFormProperties {
		Query: FormControl<string | null | undefined>,

		/** Required */
		MustBeRequestable: FormControl<boolean | null | undefined>,
		MustBeOwnedByCaller: FormControl<boolean | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListQualificationTypesRequestFormGroup() {
		return new FormGroup<ListQualificationTypesRequestFormProperties>({
			Query: new FormControl<string | null | undefined>(undefined),
			MustBeRequestable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MustBeOwnedByCaller: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReviewPolicyResultsForHITResponse {
		HITId?: string;
		AssignmentReviewPolicy?: ReviewPolicy;
		HITReviewPolicy?: ReviewPolicy;
		AssignmentReviewReport?: ReviewReport;
		HITReviewReport?: ReviewReport;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
	}
	export interface ListReviewPolicyResultsForHITResponseFormProperties {
		HITId: FormControl<string | null | undefined>,

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReviewPolicyResultsForHITResponseFormGroup() {
		return new FormGroup<ListReviewPolicyResultsForHITResponseFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/**  Contains both ReviewResult and ReviewAction elements for a particular HIT.  */
	export interface ReviewReport {
		ReviewResults?: Array<ReviewResultDetail>;
		ReviewActions?: Array<ReviewActionDetail>;
	}

	/**  Contains both ReviewResult and ReviewAction elements for a particular HIT.  */
	export interface ReviewReportFormProperties {
	}
	export function CreateReviewReportFormGroup() {
		return new FormGroup<ReviewReportFormProperties>({
		});

	}


	/**  This data structure is returned multiple times for each result specified in the Review Policy.  */
	export interface ReviewResultDetail {
		ActionId?: string;
		SubjectId?: string;
		SubjectType?: string;
		QuestionId?: string;
		Key?: string;
		Value?: string;
	}

	/**  This data structure is returned multiple times for each result specified in the Review Policy.  */
	export interface ReviewResultDetailFormProperties {
		ActionId: FormControl<string | null | undefined>,
		SubjectId: FormControl<string | null | undefined>,
		SubjectType: FormControl<string | null | undefined>,
		QuestionId: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReviewResultDetailFormGroup() {
		return new FormGroup<ReviewResultDetailFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined),
			SubjectId: new FormControl<string | null | undefined>(undefined),
			SubjectType: new FormControl<string | null | undefined>(undefined),
			QuestionId: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.  */
	export interface ReviewActionDetail {
		ActionId?: string;
		ActionName?: string;
		TargetId?: string;
		TargetType?: string;
		Status?: ReviewActionStatus;
		CompleteTime?: Date;
		Result?: string;
		ErrorCode?: string;
	}

	/**  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.  */
	export interface ReviewActionDetailFormProperties {
		ActionId: FormControl<string | null | undefined>,
		ActionName: FormControl<string | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
		Status: FormControl<ReviewActionStatus | null | undefined>,
		CompleteTime: FormControl<Date | null | undefined>,
		Result: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateReviewActionDetailFormGroup() {
		return new FormGroup<ReviewActionDetailFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined),
			ActionName: new FormControl<string | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ReviewActionStatus | null | undefined>(undefined),
			CompleteTime: new FormControl<Date | null | undefined>(undefined),
			Result: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReviewActionStatus { Intended = 'Intended', Succeeded = 'Succeeded', Failed = 'Failed', Cancelled = 'Cancelled' }

	export interface ListReviewPolicyResultsForHITRequest {

		/** Required */
		HITId: string;
		PolicyLevels?: Array<ReviewPolicyLevel>;
		RetrieveActions?: boolean | null;
		RetrieveResults?: boolean | null;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReviewPolicyResultsForHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,
		RetrieveActions: FormControl<boolean | null | undefined>,
		RetrieveResults: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReviewPolicyResultsForHITRequestFormGroup() {
		return new FormGroup<ListReviewPolicyResultsForHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetrieveActions: new FormControl<boolean | null | undefined>(undefined),
			RetrieveResults: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReviewPolicyLevel { Assignment = 'Assignment', HIT = 'HIT' }

	export interface ListReviewableHITsResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		HITs?: Array<HIT>;
	}
	export interface ListReviewableHITsResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListReviewableHITsResponseFormGroup() {
		return new FormGroup<ListReviewableHITsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReviewableHITsRequest {
		HITTypeId?: string;
		Status?: ReviewableHITStatus;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReviewableHITsRequestFormProperties {
		HITTypeId: FormControl<string | null | undefined>,
		Status: FormControl<ReviewableHITStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReviewableHITsRequestFormGroup() {
		return new FormGroup<ListReviewableHITsRequestFormProperties>({
			HITTypeId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ReviewableHITStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReviewableHITStatus { Reviewable = 'Reviewable', Reviewing = 'Reviewing' }

	export interface ListWorkerBlocksResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		WorkerBlocks?: Array<WorkerBlock>;
	}
	export interface ListWorkerBlocksResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkerBlocksResponseFormGroup() {
		return new FormGroup<ListWorkerBlocksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.  */
	export interface WorkerBlock {
		WorkerId?: string;
		Reason?: string;
	}

	/**  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.  */
	export interface WorkerBlockFormProperties {
		WorkerId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateWorkerBlockFormGroup() {
		return new FormGroup<WorkerBlockFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkerBlocksRequest {
		NextToken?: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListWorkerBlocksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkerBlocksRequestFormGroup() {
		return new FormGroup<ListWorkerBlocksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListWorkersWithQualificationTypeResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken?: string | null;
		NumResults?: number | null;
		Qualifications?: Array<Qualification>;
	}
	export interface ListWorkersWithQualificationTypeResponseFormProperties {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 255
		 */
		NextToken: FormControl<string | null | undefined>,
		NumResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkersWithQualificationTypeResponseFormGroup() {
		return new FormGroup<ListWorkersWithQualificationTypeResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NumResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorkersWithQualificationTypeRequest {

		/** Required */
		QualificationTypeId: string;
		Status?: QualificationStatus;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListWorkersWithQualificationTypeRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
		Status: FormControl<QualificationStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkersWithQualificationTypeRequestFormGroup() {
		return new FormGroup<ListWorkersWithQualificationTypeRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<QualificationStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotifyWorkersResponse {
		NotifyWorkersFailureStatuses?: Array<NotifyWorkersFailureStatus>;
	}
	export interface NotifyWorkersResponseFormProperties {
	}
	export function CreateNotifyWorkersResponseFormGroup() {
		return new FormGroup<NotifyWorkersResponseFormProperties>({
		});

	}


	/**  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.  */
	export interface NotifyWorkersFailureStatus {
		NotifyWorkersFailureCode?: NotifyWorkersFailureCode;
		NotifyWorkersFailureMessage?: string;
		WorkerId?: string;
	}

	/**  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.  */
	export interface NotifyWorkersFailureStatusFormProperties {
		NotifyWorkersFailureCode: FormControl<NotifyWorkersFailureCode | null | undefined>,
		NotifyWorkersFailureMessage: FormControl<string | null | undefined>,
		WorkerId: FormControl<string | null | undefined>,
	}
	export function CreateNotifyWorkersFailureStatusFormGroup() {
		return new FormGroup<NotifyWorkersFailureStatusFormProperties>({
			NotifyWorkersFailureCode: new FormControl<NotifyWorkersFailureCode | null | undefined>(undefined),
			NotifyWorkersFailureMessage: new FormControl<string | null | undefined>(undefined),
			WorkerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotifyWorkersFailureCode { SoftFailure = 'SoftFailure', HardFailure = 'HardFailure' }

	export interface NotifyWorkersRequest {

		/** Required */
		Subject: string;

		/** Required */
		MessageText: string;

		/** Required */
		WorkerIds: Array<string>;
	}
	export interface NotifyWorkersRequestFormProperties {

		/** Required */
		Subject: FormControl<string | null | undefined>,

		/** Required */
		MessageText: FormControl<string | null | undefined>,
	}
	export function CreateNotifyWorkersRequestFormGroup() {
		return new FormGroup<NotifyWorkersRequestFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectAssignmentResponse {
	}
	export interface RejectAssignmentResponseFormProperties {
	}
	export function CreateRejectAssignmentResponseFormGroup() {
		return new FormGroup<RejectAssignmentResponseFormProperties>({
		});

	}

	export interface RejectAssignmentRequest {

		/** Required */
		AssignmentId: string;

		/** Required */
		RequesterFeedback: string;
	}
	export interface RejectAssignmentRequestFormProperties {

		/** Required */
		AssignmentId: FormControl<string | null | undefined>,

		/** Required */
		RequesterFeedback: FormControl<string | null | undefined>,
	}
	export function CreateRejectAssignmentRequestFormGroup() {
		return new FormGroup<RejectAssignmentRequestFormProperties>({
			AssignmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequesterFeedback: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectQualificationRequestResponse {
	}
	export interface RejectQualificationRequestResponseFormProperties {
	}
	export function CreateRejectQualificationRequestResponseFormGroup() {
		return new FormGroup<RejectQualificationRequestResponseFormProperties>({
		});

	}

	export interface RejectQualificationRequestRequest {

		/** Required */
		QualificationRequestId: string;
		Reason?: string;
	}
	export interface RejectQualificationRequestRequestFormProperties {

		/** Required */
		QualificationRequestId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateRejectQualificationRequestRequestFormGroup() {
		return new FormGroup<RejectQualificationRequestRequestFormProperties>({
			QualificationRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendBonusResponse {
	}
	export interface SendBonusResponseFormProperties {
	}
	export function CreateSendBonusResponseFormGroup() {
		return new FormGroup<SendBonusResponseFormProperties>({
		});

	}

	export interface SendBonusRequest {

		/** Required */
		WorkerId: string;

		/** Required */
		BonusAmount: string;

		/** Required */
		AssignmentId: string;

		/** Required */
		Reason: string;
		UniqueRequestToken?: string;
	}
	export interface SendBonusRequestFormProperties {

		/** Required */
		WorkerId: FormControl<string | null | undefined>,

		/** Required */
		BonusAmount: FormControl<string | null | undefined>,

		/** Required */
		AssignmentId: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<string | null | undefined>,
		UniqueRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSendBonusRequestFormGroup() {
		return new FormGroup<SendBonusRequestFormProperties>({
			WorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BonusAmount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssignmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UniqueRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTestEventNotificationResponse {
	}
	export interface SendTestEventNotificationResponseFormProperties {
	}
	export function CreateSendTestEventNotificationResponseFormGroup() {
		return new FormGroup<SendTestEventNotificationResponseFormProperties>({
		});

	}

	export interface SendTestEventNotificationRequest {

		/** Required */
		Notification: NotificationSpecification;

		/** Required */
		TestEventType: EventType;
	}
	export interface SendTestEventNotificationRequestFormProperties {

		/** Required */
		TestEventType: FormControl<EventType | null | undefined>,
	}
	export function CreateSendTestEventNotificationRequestFormGroup() {
		return new FormGroup<SendTestEventNotificationRequestFormProperties>({
			TestEventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The NotificationSpecification data structure describes a HIT event notification for a HIT type. */
	export interface NotificationSpecification {

		/** Required */
		Destination: string;

		/** Required */
		Transport: NotificationTransport;

		/** Required */
		Version: string;

		/** Required */
		EventTypes: Array<EventType>;
	}

	/** The NotificationSpecification data structure describes a HIT event notification for a HIT type. */
	export interface NotificationSpecificationFormProperties {

		/** Required */
		Destination: FormControl<string | null | undefined>,

		/** Required */
		Transport: FormControl<NotificationTransport | null | undefined>,

		/** Required */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSpecificationFormGroup() {
		return new FormGroup<NotificationSpecificationFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Transport: new FormControl<NotificationTransport | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationTransport { Email = 'Email', SQS = 'SQS', SNS = 'SNS' }

	export enum EventType { AssignmentAccepted = 'AssignmentAccepted', AssignmentAbandoned = 'AssignmentAbandoned', AssignmentReturned = 'AssignmentReturned', AssignmentSubmitted = 'AssignmentSubmitted', AssignmentRejected = 'AssignmentRejected', AssignmentApproved = 'AssignmentApproved', HITCreated = 'HITCreated', HITExpired = 'HITExpired', HITReviewable = 'HITReviewable', HITExtended = 'HITExtended', HITDisposed = 'HITDisposed', Ping = 'Ping' }

	export interface UpdateExpirationForHITResponse {
	}
	export interface UpdateExpirationForHITResponseFormProperties {
	}
	export function CreateUpdateExpirationForHITResponseFormGroup() {
		return new FormGroup<UpdateExpirationForHITResponseFormProperties>({
		});

	}

	export interface UpdateExpirationForHITRequest {

		/** Required */
		HITId: string;

		/** Required */
		ExpireAt: Date;
	}
	export interface UpdateExpirationForHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,

		/** Required */
		ExpireAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateExpirationForHITRequestFormGroup() {
		return new FormGroup<UpdateExpirationForHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpireAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateHITReviewStatusResponse {
	}
	export interface UpdateHITReviewStatusResponseFormProperties {
	}
	export function CreateUpdateHITReviewStatusResponseFormGroup() {
		return new FormGroup<UpdateHITReviewStatusResponseFormProperties>({
		});

	}

	export interface UpdateHITReviewStatusRequest {

		/** Required */
		HITId: string;
		Revert?: boolean | null;
	}
	export interface UpdateHITReviewStatusRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,
		Revert: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateHITReviewStatusRequestFormGroup() {
		return new FormGroup<UpdateHITReviewStatusRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Revert: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateHITTypeOfHITResponse {
	}
	export interface UpdateHITTypeOfHITResponseFormProperties {
	}
	export function CreateUpdateHITTypeOfHITResponseFormGroup() {
		return new FormGroup<UpdateHITTypeOfHITResponseFormProperties>({
		});

	}

	export interface UpdateHITTypeOfHITRequest {

		/** Required */
		HITId: string;

		/** Required */
		HITTypeId: string;
	}
	export interface UpdateHITTypeOfHITRequestFormProperties {

		/** Required */
		HITId: FormControl<string | null | undefined>,

		/** Required */
		HITTypeId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHITTypeOfHITRequestFormGroup() {
		return new FormGroup<UpdateHITTypeOfHITRequestFormProperties>({
			HITId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HITTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNotificationSettingsResponse {
	}
	export interface UpdateNotificationSettingsResponseFormProperties {
	}
	export function CreateUpdateNotificationSettingsResponseFormGroup() {
		return new FormGroup<UpdateNotificationSettingsResponseFormProperties>({
		});

	}

	export interface UpdateNotificationSettingsRequest {

		/** Required */
		HITTypeId: string;
		Notification?: NotificationSpecification;
		Active?: boolean | null;
	}
	export interface UpdateNotificationSettingsRequestFormProperties {

		/** Required */
		HITTypeId: FormControl<string | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNotificationSettingsRequestFormGroup() {
		return new FormGroup<UpdateNotificationSettingsRequestFormProperties>({
			HITTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateQualificationTypeResponse {
		QualificationType?: QualificationType;
	}
	export interface UpdateQualificationTypeResponseFormProperties {
	}
	export function CreateUpdateQualificationTypeResponseFormGroup() {
		return new FormGroup<UpdateQualificationTypeResponseFormProperties>({
		});

	}

	export interface UpdateQualificationTypeRequest {

		/** Required */
		QualificationTypeId: string;
		Description?: string;
		QualificationTypeStatus?: QualificationTypeStatus;
		Test?: string;
		AnswerKey?: string;
		TestDurationInSeconds?: number | null;
		RetryDelayInSeconds?: number | null;
		AutoGranted?: boolean | null;
		AutoGrantedValue?: number | null;
	}
	export interface UpdateQualificationTypeRequestFormProperties {

		/** Required */
		QualificationTypeId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		QualificationTypeStatus: FormControl<QualificationTypeStatus | null | undefined>,
		Test: FormControl<string | null | undefined>,
		AnswerKey: FormControl<string | null | undefined>,
		TestDurationInSeconds: FormControl<number | null | undefined>,
		RetryDelayInSeconds: FormControl<number | null | undefined>,
		AutoGranted: FormControl<boolean | null | undefined>,
		AutoGrantedValue: FormControl<number | null | undefined>,
	}
	export function CreateUpdateQualificationTypeRequestFormGroup() {
		return new FormGroup<UpdateQualificationTypeRequestFormProperties>({
			QualificationTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			QualificationTypeStatus: new FormControl<QualificationTypeStatus | null | undefined>(undefined),
			Test: new FormControl<string | null | undefined>(undefined),
			AnswerKey: new FormControl<string | null | undefined>(undefined),
			TestDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			RetryDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			AutoGranted: new FormControl<boolean | null | undefined>(undefined),
			AutoGrantedValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest
		 * @return {AcceptQualificationRequestResponse} Success
		 */
		AcceptQualificationRequest(requestBody: AcceptQualificationRequestRequest): Observable<AcceptQualificationRequestResponse> {
			return this.http.post<AcceptQualificationRequestResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment
		 * @return {ApproveAssignmentResponse} Success
		 */
		ApproveAssignment(requestBody: ApproveAssignmentRequest): Observable<ApproveAssignmentResponse> {
			return this.http.post<ApproveAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker
		 * @return {AssociateQualificationWithWorkerResponse} Success
		 */
		AssociateQualificationWithWorker(requestBody: AssociateQualificationWithWorkerRequest): Observable<AssociateQualificationWithWorkerResponse> {
			return this.http.post<AssociateQualificationWithWorkerResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT
		 * @return {CreateAdditionalAssignmentsForHITResponse} Success
		 */
		CreateAdditionalAssignmentsForHIT(requestBody: CreateAdditionalAssignmentsForHITRequest): Observable<CreateAdditionalAssignmentsForHITResponse> {
			return this.http.post<CreateAdditionalAssignmentsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT
		 * @return {CreateHITResponse} Success
		 */
		CreateHIT(requestBody: CreateHITRequest): Observable<CreateHITResponse> {
			return this.http.post<CreateHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType
		 * @return {CreateHITTypeResponse} Success
		 */
		CreateHITType(requestBody: CreateHITTypeRequest): Observable<CreateHITTypeResponse> {
			return this.http.post<CreateHITTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType
		 * @return {CreateHITWithHITTypeResponse} Success
		 */
		CreateHITWithHITType(requestBody: CreateHITWithHITTypeRequest): Observable<CreateHITWithHITTypeResponse> {
			return this.http.post<CreateHITWithHITTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType
		 * @return {CreateQualificationTypeResponse} Success
		 */
		CreateQualificationType(requestBody: CreateQualificationTypeRequest): Observable<CreateQualificationTypeResponse> {
			return this.http.post<CreateQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock
		 * @return {CreateWorkerBlockResponse} Success
		 */
		CreateWorkerBlock(requestBody: CreateWorkerBlockRequest): Observable<CreateWorkerBlockResponse> {
			return this.http.post<CreateWorkerBlockResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT
		 * @return {DeleteHITResponse} Success
		 */
		DeleteHIT(requestBody: DeleteHITRequest): Observable<DeleteHITResponse> {
			return this.http.post<DeleteHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType
		 * @return {DeleteQualificationTypeResponse} Success
		 */
		DeleteQualificationType(requestBody: DeleteQualificationTypeRequest): Observable<DeleteQualificationTypeResponse> {
			return this.http.post<DeleteQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock
		 * @return {DeleteWorkerBlockResponse} Success
		 */
		DeleteWorkerBlock(requestBody: DeleteWorkerBlockRequest): Observable<DeleteWorkerBlockResponse> {
			return this.http.post<DeleteWorkerBlockResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker
		 * @return {DisassociateQualificationFromWorkerResponse} Success
		 */
		DisassociateQualificationFromWorker(requestBody: DisassociateQualificationFromWorkerRequest): Observable<DisassociateQualificationFromWorkerResponse> {
			return this.http.post<DisassociateQualificationFromWorkerResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance
		 * @return {GetAccountBalanceResponse} Success
		 */
		GetAccountBalance(requestBody: GetAccountBalanceRequest): Observable<GetAccountBalanceResponse> {
			return this.http.post<GetAccountBalanceResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment
		 * @return {GetAssignmentResponse} Success
		 */
		GetAssignment(requestBody: GetAssignmentRequest): Observable<GetAssignmentResponse> {
			return this.http.post<GetAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL
		 * @return {GetFileUploadURLResponse} Success
		 */
		GetFileUploadURL(requestBody: GetFileUploadURLRequest): Observable<GetFileUploadURLResponse> {
			return this.http.post<GetFileUploadURLResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetHIT</code> operation retrieves the details of the specified HIT.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT
		 * @return {GetHITResponse} Success
		 */
		GetHIT(requestBody: GetHITRequest): Observable<GetHITResponse> {
			return this.http.post<GetHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore
		 * @return {GetQualificationScoreResponse} Success
		 */
		GetQualificationScore(requestBody: GetQualificationScoreRequest): Observable<GetQualificationScoreResponse> {
			return this.http.post<GetQualificationScoreResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType
		 * @return {GetQualificationTypeResponse} Success
		 */
		GetQualificationType(requestBody: GetQualificationTypeRequest): Observable<GetQualificationTypeResponse> {
			return this.http.post<GetQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssignmentsForHITResponse} Success
		 */
		ListAssignmentsForHIT(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssignmentsForHITRequest): Observable<ListAssignmentsForHITResponse> {
			return this.http.post<ListAssignmentsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBonusPaymentsResponse} Success
		 */
		ListBonusPayments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBonusPaymentsRequest): Observable<ListBonusPaymentsResponse> {
			return this.http.post<ListBonusPaymentsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHITsResponse} Success
		 */
		ListHITs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHITsRequest): Observable<ListHITsResponse> {
			return this.http.post<ListHITsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHITsForQualificationTypeResponse} Success
		 */
		ListHITsForQualificationType(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHITsForQualificationTypeRequest): Observable<ListHITsForQualificationTypeResponse> {
			return this.http.post<ListHITsForQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQualificationRequestsResponse} Success
		 */
		ListQualificationRequests(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQualificationRequestsRequest): Observable<ListQualificationRequestsResponse> {
			return this.http.post<ListQualificationRequestsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQualificationTypesResponse} Success
		 */
		ListQualificationTypes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQualificationTypesRequest): Observable<ListQualificationTypesResponse> {
			return this.http.post<ListQualificationTypesResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReviewPolicyResultsForHITResponse} Success
		 */
		ListReviewPolicyResultsForHIT(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListReviewPolicyResultsForHITRequest): Observable<ListReviewPolicyResultsForHITResponse> {
			return this.http.post<ListReviewPolicyResultsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReviewableHITsResponse} Success
		 */
		ListReviewableHITs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListReviewableHITsRequest): Observable<ListReviewableHITsResponse> {
			return this.http.post<ListReviewableHITsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkerBlocksResponse} Success
		 */
		ListWorkerBlocks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkerBlocksRequest): Observable<ListWorkerBlocksResponse> {
			return this.http.post<ListWorkerBlocksResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkersWithQualificationTypeResponse} Success
		 */
		ListWorkersWithQualificationType(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkersWithQualificationTypeRequest): Observable<ListWorkersWithQualificationTypeResponse> {
			return this.http.post<ListWorkersWithQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers
		 * @return {NotifyWorkersResponse} Success
		 */
		NotifyWorkers(requestBody: NotifyWorkersRequest): Observable<NotifyWorkersResponse> {
			return this.http.post<NotifyWorkersResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment
		 * @return {RejectAssignmentResponse} Success
		 */
		RejectAssignment(requestBody: RejectAssignmentRequest): Observable<RejectAssignmentResponse> {
			return this.http.post<RejectAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest
		 * @return {RejectQualificationRequestResponse} Success
		 */
		RejectQualificationRequest(requestBody: RejectQualificationRequestRequest): Observable<RejectQualificationRequestResponse> {
			return this.http.post<RejectQualificationRequestResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus
		 * @return {SendBonusResponse} Success
		 */
		SendBonus(requestBody: SendBonusRequest): Observable<SendBonusResponse> {
			return this.http.post<SendBonusResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification
		 * @return {SendTestEventNotificationResponse} Success
		 */
		SendTestEventNotification(requestBody: SendTestEventNotificationRequest): Observable<SendTestEventNotificationResponse> {
			return this.http.post<SendTestEventNotificationResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT
		 * @return {UpdateExpirationForHITResponse} Success
		 */
		UpdateExpirationForHIT(requestBody: UpdateExpirationForHITRequest): Observable<UpdateExpirationForHITResponse> {
			return this.http.post<UpdateExpirationForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus
		 * @return {UpdateHITReviewStatusResponse} Success
		 */
		UpdateHITReviewStatus(requestBody: UpdateHITReviewStatusRequest): Observable<UpdateHITReviewStatusResponse> {
			return this.http.post<UpdateHITReviewStatusResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT
		 * @return {UpdateHITTypeOfHITResponse} Success
		 */
		UpdateHITTypeOfHIT(requestBody: UpdateHITTypeOfHITRequest): Observable<UpdateHITTypeOfHITResponse> {
			return this.http.post<UpdateHITTypeOfHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings
		 * @return {UpdateNotificationSettingsResponse} Success
		 */
		UpdateNotificationSettings(requestBody: UpdateNotificationSettingsRequest): Observable<UpdateNotificationSettingsResponse> {
			return this.http.post<UpdateNotificationSettingsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType
		 * @return {UpdateQualificationTypeResponse} Success
		 */
		UpdateQualificationType(requestBody: UpdateQualificationTypeRequest): Observable<UpdateQualificationTypeResponse> {
			return this.http.post<UpdateQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptQualificationRequestX_Amz_Target { 'MTurkRequesterServiceV20170117.AcceptQualificationRequest' = 'MTurkRequesterServiceV20170117.AcceptQualificationRequest' }

	export enum ApproveAssignmentX_Amz_Target { 'MTurkRequesterServiceV20170117.ApproveAssignment' = 'MTurkRequesterServiceV20170117.ApproveAssignment' }

	export enum AssociateQualificationWithWorkerX_Amz_Target { 'MTurkRequesterServiceV20170117.AssociateQualificationWithWorker' = 'MTurkRequesterServiceV20170117.AssociateQualificationWithWorker' }

	export enum CreateAdditionalAssignmentsForHITX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT' = 'MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT' }

	export enum CreateHITX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateHIT' = 'MTurkRequesterServiceV20170117.CreateHIT' }

	export enum CreateHITTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateHITType' = 'MTurkRequesterServiceV20170117.CreateHITType' }

	export enum CreateHITWithHITTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateHITWithHITType' = 'MTurkRequesterServiceV20170117.CreateHITWithHITType' }

	export enum CreateQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateQualificationType' = 'MTurkRequesterServiceV20170117.CreateQualificationType' }

	export enum CreateWorkerBlockX_Amz_Target { 'MTurkRequesterServiceV20170117.CreateWorkerBlock' = 'MTurkRequesterServiceV20170117.CreateWorkerBlock' }

	export enum DeleteHITX_Amz_Target { 'MTurkRequesterServiceV20170117.DeleteHIT' = 'MTurkRequesterServiceV20170117.DeleteHIT' }

	export enum DeleteQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.DeleteQualificationType' = 'MTurkRequesterServiceV20170117.DeleteQualificationType' }

	export enum DeleteWorkerBlockX_Amz_Target { 'MTurkRequesterServiceV20170117.DeleteWorkerBlock' = 'MTurkRequesterServiceV20170117.DeleteWorkerBlock' }

	export enum DisassociateQualificationFromWorkerX_Amz_Target { 'MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker' = 'MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker' }

	export enum GetAccountBalanceX_Amz_Target { 'MTurkRequesterServiceV20170117.GetAccountBalance' = 'MTurkRequesterServiceV20170117.GetAccountBalance' }

	export enum GetAssignmentX_Amz_Target { 'MTurkRequesterServiceV20170117.GetAssignment' = 'MTurkRequesterServiceV20170117.GetAssignment' }

	export enum GetFileUploadURLX_Amz_Target { 'MTurkRequesterServiceV20170117.GetFileUploadURL' = 'MTurkRequesterServiceV20170117.GetFileUploadURL' }

	export enum GetHITX_Amz_Target { 'MTurkRequesterServiceV20170117.GetHIT' = 'MTurkRequesterServiceV20170117.GetHIT' }

	export enum GetQualificationScoreX_Amz_Target { 'MTurkRequesterServiceV20170117.GetQualificationScore' = 'MTurkRequesterServiceV20170117.GetQualificationScore' }

	export enum GetQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.GetQualificationType' = 'MTurkRequesterServiceV20170117.GetQualificationType' }

	export enum ListAssignmentsForHITX_Amz_Target { 'MTurkRequesterServiceV20170117.ListAssignmentsForHIT' = 'MTurkRequesterServiceV20170117.ListAssignmentsForHIT' }

	export enum ListBonusPaymentsX_Amz_Target { 'MTurkRequesterServiceV20170117.ListBonusPayments' = 'MTurkRequesterServiceV20170117.ListBonusPayments' }

	export enum ListHITsX_Amz_Target { 'MTurkRequesterServiceV20170117.ListHITs' = 'MTurkRequesterServiceV20170117.ListHITs' }

	export enum ListHITsForQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.ListHITsForQualificationType' = 'MTurkRequesterServiceV20170117.ListHITsForQualificationType' }

	export enum ListQualificationRequestsX_Amz_Target { 'MTurkRequesterServiceV20170117.ListQualificationRequests' = 'MTurkRequesterServiceV20170117.ListQualificationRequests' }

	export enum ListQualificationTypesX_Amz_Target { 'MTurkRequesterServiceV20170117.ListQualificationTypes' = 'MTurkRequesterServiceV20170117.ListQualificationTypes' }

	export enum ListReviewPolicyResultsForHITX_Amz_Target { 'MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT' = 'MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT' }

	export enum ListReviewableHITsX_Amz_Target { 'MTurkRequesterServiceV20170117.ListReviewableHITs' = 'MTurkRequesterServiceV20170117.ListReviewableHITs' }

	export enum ListWorkerBlocksX_Amz_Target { 'MTurkRequesterServiceV20170117.ListWorkerBlocks' = 'MTurkRequesterServiceV20170117.ListWorkerBlocks' }

	export enum ListWorkersWithQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.ListWorkersWithQualificationType' = 'MTurkRequesterServiceV20170117.ListWorkersWithQualificationType' }

	export enum NotifyWorkersX_Amz_Target { 'MTurkRequesterServiceV20170117.NotifyWorkers' = 'MTurkRequesterServiceV20170117.NotifyWorkers' }

	export enum RejectAssignmentX_Amz_Target { 'MTurkRequesterServiceV20170117.RejectAssignment' = 'MTurkRequesterServiceV20170117.RejectAssignment' }

	export enum RejectQualificationRequestX_Amz_Target { 'MTurkRequesterServiceV20170117.RejectQualificationRequest' = 'MTurkRequesterServiceV20170117.RejectQualificationRequest' }

	export enum SendBonusX_Amz_Target { 'MTurkRequesterServiceV20170117.SendBonus' = 'MTurkRequesterServiceV20170117.SendBonus' }

	export enum SendTestEventNotificationX_Amz_Target { 'MTurkRequesterServiceV20170117.SendTestEventNotification' = 'MTurkRequesterServiceV20170117.SendTestEventNotification' }

	export enum UpdateExpirationForHITX_Amz_Target { 'MTurkRequesterServiceV20170117.UpdateExpirationForHIT' = 'MTurkRequesterServiceV20170117.UpdateExpirationForHIT' }

	export enum UpdateHITReviewStatusX_Amz_Target { 'MTurkRequesterServiceV20170117.UpdateHITReviewStatus' = 'MTurkRequesterServiceV20170117.UpdateHITReviewStatus' }

	export enum UpdateHITTypeOfHITX_Amz_Target { 'MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT' = 'MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT' }

	export enum UpdateNotificationSettingsX_Amz_Target { 'MTurkRequesterServiceV20170117.UpdateNotificationSettings' = 'MTurkRequesterServiceV20170117.UpdateNotificationSettings' }

	export enum UpdateQualificationTypeX_Amz_Target { 'MTurkRequesterServiceV20170117.UpdateQualificationType' = 'MTurkRequesterServiceV20170117.UpdateQualificationType' }

}

