import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Annotation {

		/** Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		afterSelectedText?: string | null;

		/** Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		beforeSelectedText?: string | null;

		/** Selection ranges sent from the client. */
		clientVersionRanges?: AnnotationClientVersionRanges;

		/** Timestamp for the created time of this annotation. */
		created?: Date | null;

		/** Selection ranges for the most recent content version. */
		currentVersionRanges?: AnnotationCurrentVersionRanges;

		/** User-created data for this annotation. */
		data?: string | null;

		/** Indicates that this annotation is deleted. */
		deleted?: boolean | null;

		/** The highlight style for this annotation. */
		highlightStyle?: string | null;

		/** Id of this annotation, in the form of a GUID. */
		id?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** The layer this annotation is for. */
		layerId?: string | null;
		layerSummary?: AnnotationLayerSummary;

		/** Pages that this annotation spans. */
		pageIds?: Array<string>;

		/** Excerpt from the volume. */
		selectedText?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time this annotation was modified. */
		updated?: Date | null;

		/** The volume that this annotation belongs to. */
		volumeId?: string | null;
	}

	export interface AnnotationClientVersionRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version the client sent in. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
		imageCfiRange?: BooksAnnotationsRange;
	}

	export interface BooksAnnotationsRange {

		/** The offset from the ending position. */
		endOffset?: string | null;

		/** The ending position for the range. */
		endPosition?: string | null;

		/** The offset from the starting position. */
		startOffset?: string | null;

		/** The starting position for the range. */
		startPosition?: string | null;
	}

	export interface AnnotationCurrentVersionRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version applicable to ranges below. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
		imageCfiRange?: BooksAnnotationsRange;
	}

	export interface AnnotationLayerSummary {

		/** Maximum allowed characters on this layer, especially for the "copy" layer. */
		allowedCharacterCount?: number | null;

		/** Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer. */
		limitType?: string | null;

		/** Remaining allowed characters on this layer, especially for the "copy" layer. */
		remainingCharacterCount?: number | null;
	}

	export interface Annotationdata {

		/** The type of annotation this data is for. */
		annotationType?: string | null;
		data?: any;

		/** Base64 encoded data for this annotation data. */
		encoded_data?: string | null;

		/** Unique id for this annotation data. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The Layer id for this data. * */
		layerId?: string | null;

		/** URL for this resource. * */
		selfLink?: string | null;

		/** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
		updated?: Date | null;

		/** The volume id for this data. * */
		volumeId?: string | null;
	}

	export interface Annotations {

		/** A list of annotations. */
		items?: Array<Annotation>;

		/** Resource type. */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated. */
		totalItems?: number | null;
	}

	export interface AnnotationsSummary {
		kind?: string | null;
		AnnotationsSummaryLayers?: Array<AnnotationsSummaryLayers>;
	}

	export interface AnnotationsSummaryLayers {
		allowedCharacterCount?: number | null;
		layerId?: string | null;
		limitType?: string | null;
		remainingCharacterCount?: number | null;
		updated?: Date | null;
	}

	export interface Annotationsdata {

		/** A list of Annotation Data. */
		items?: Array<Annotationdata>;

		/** Resource type */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** The total number of volume annotations found. */
		totalItems?: number | null;
	}

	export interface BooksCloudloadingResource {
		author?: string | null;
		processingState?: string | null;
		title?: string | null;
		volumeId?: string | null;
	}

	export interface BooksSubscriptionReleaseInfo {

		/** Amount in micros of the specified currency code. */
		amountInMicros?: string | null;

		/** Currency code of the amount. */
		currencyCode?: string | null;

		/** The release number of this issue/volume/book. */
		releaseNumber?: string | null;

		/** The release date. */
		releaseTimestampUs?: string | null;
	}

	export interface BooksVolumesRecommendedRateResponse {
		consistency_token?: string | null;
	}

	export interface Bookshelf {

		/** Whether this bookshelf is PUBLIC or PRIVATE. */
		access?: string | null;

		/** Created time for this bookshelf (formatted UTC timestamp with millisecond resolution). */
		created?: Date | null;

		/** Description of this bookshelf. */
		description?: string | null;

		/** Id of this bookshelf, only unique by user. */
		id?: number | null;

		/** Resource type for bookshelf metadata. */
		kind?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Title of this bookshelf. */
		title?: string | null;

		/** Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution). */
		updated?: Date | null;

		/** Number of volumes in this bookshelf. */
		volumeCount?: number | null;

		/** Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution). */
		volumesLastUpdated?: Date | null;
	}

	export interface Bookshelves {

		/** A list of bookshelves. */
		items?: Array<Bookshelf>;

		/** Resource type. */
		kind?: string | null;
	}

	export interface Category {

		/** A list of onboarding categories. */
		CategoryItems?: Array<CategoryItems>;

		/** Resource type. */
		kind?: string | null;
	}

	export interface CategoryItems {
		badgeUrl?: string | null;
		categoryId?: string | null;
		name?: string | null;
	}

	export interface ConcurrentAccessRestriction {

		/** Whether access is granted for this (user, device, volume). */
		deviceAllowed?: boolean | null;

		/** Resource type. */
		kind?: string | null;

		/** The maximum number of concurrent access licenses for this volume. */
		maxConcurrentDevices?: number | null;

		/** Error/warning message. */
		message?: string | null;

		/** Client nonce for verification. Download access and client-validation only. */
		nonce?: string | null;

		/** Error/warning reason code. */
		reasonCode?: string | null;

		/** Whether this volume has any concurrent access restrictions. */
		restricted?: boolean | null;

		/** Response signature. */
		signature?: string | null;

		/** Client app identifier for verification. Download access and client-validation only. */
		source?: string | null;

		/** Time in seconds for license auto-expiration. */
		timeWindowSeconds?: number | null;

		/** Identifies the volume for which this entry applies. */
		volumeId?: string | null;
	}

	export interface Dictlayerdata {
		common?: DictlayerdataCommon;
		dict?: DictlayerdataDict;
		kind?: string | null;
	}

	export interface DictlayerdataCommon {

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title?: string | null;
	}

	export interface DictlayerdataDict {

		/** The source, url and attribution for this dictionary data. */
		source?: DictlayerdataDictSource;
		DictlayerdataDictWords?: Array<DictlayerdataDictWords>;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictWords {
		DictlayerdataDictWordsDerivatives?: Array<DictlayerdataDictWordsDerivatives>;
		DictlayerdataDictWordsExamples?: Array<DictlayerdataDictWordsExamples>;
		DictlayerdataDictWordsSenses?: Array<DictlayerdataDictWordsSenses>;

		/** The words with different meanings but not related words, e.g. "go" (game) and "go" (verb). */
		source?: DictlayerdataDictSource;
	}

	export interface DictlayerdataDictWordsDerivatives {
		source?: DictlayerdataDictSource;
		text?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictWordsExamples {
		source?: DictlayerdataDictSource;
		text?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictWordsSenses {
		DictlayerdataDictWordsSensesConjugations?: Array<DictlayerdataDictWordsSensesConjugations>;
		DictlayerdataDictWordsSensesDefinitions?: Array<DictlayerdataDictWordsSensesDefinitions>;
		partOfSpeech?: string | null;
		pronunciation?: string | null;
		pronunciationUrl?: string | null;
		source?: DictlayerdataDictSource;
		syllabification?: string | null;
		DictlayerdataDictWordsSensesSynonyms?: Array<DictlayerdataDictWordsSensesSynonyms>;
	}

	export interface DictlayerdataDictWordsSensesConjugations {
		type?: string | null;
		value?: string | null;
	}

	export interface DictlayerdataDictWordsSensesDefinitions {
		definition?: string | null;
		DictlayerdataDictWordsSensesDefinitionsExamples?: Array<DictlayerdataDictWordsSensesDefinitionsExamples>;
	}

	export interface DictlayerdataDictWordsSensesDefinitionsExamples {
		source?: DictlayerdataDictSource;
		text?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictWordsSensesSynonyms {
		source?: DictlayerdataDictSource;
		text?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}

	export interface Discoveryclusters {
		DiscoveryclustersClusters?: Array<DiscoveryclustersClusters>;

		/** Resorce type. */
		kind?: string | null;
		totalClusters?: number | null;
	}

	export interface DiscoveryclustersClusters {
		banner_with_content_container?: DiscoveryclustersBanner_with_content_container;
		subTitle?: string | null;
		title?: string | null;
		totalVolumes?: number | null;
		uid?: string | null;
		volumes?: Array<Volume>;
	}

	export interface DiscoveryclustersBanner_with_content_container {
		fillColorArgb?: string | null;
		imageUrl?: string | null;
		maskColorArgb?: string | null;
		moreButtonText?: string | null;
		moreButtonUrl?: string | null;
		textColorArgb?: string | null;
	}

	export interface Volume {

		/** Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.). */
		accessInfo?: VolumeAccessInfo;

		/** Opaque identifier for a specific version of a volume resource. (In LITE projection) */
		etag?: string | null;

		/** Unique identifier for a volume. (In LITE projection.) */
		id?: string | null;

		/** Resource type for a volume. (In LITE projection.) */
		kind?: string | null;

		/** What layers exist in this volume and high level information about them. */
		layerInfo?: VolumeLayerInfo;

		/** Recommendation related information for this volume. */
		recommendedInfo?: VolumeRecommendedInfo;

		/** Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries). */
		saleInfo?: VolumeSaleInfo;

		/** Search result information related to this volume. */
		searchInfo?: VolumeSearchInfo;

		/** URL to this resource. (In LITE projection.) */
		selfLink?: string | null;

		/** User specific information related to this volume. (e.g. page this user last read or whether they purchased this book) */
		userInfo?: VolumeUserInfo;

		/** General volume information. */
		volumeInfo?: VolumeVolumeInfo;
	}

	export interface VolumeAccessInfo {

		/** Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.) */
		accessViewStatus?: string | null;

		/** The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.) */
		country?: string | null;
		downloadAccess?: DownloadAccessRestriction;

		/** URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive. */
		driveImportedContentLink?: string | null;

		/** Whether this volume can be embedded in a viewport using the Embedded Viewer API. */
		embeddable?: boolean | null;

		/** Information about epub content. (In LITE projection.) */
		epub?: VolumeAccessInfoEpub;

		/** Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it. */
		explicitOfflineLicenseManagement?: boolean | null;

		/** Information about pdf content. (In LITE projection.) */
		pdf?: VolumeAccessInfoPdf;

		/** Whether or not this book is public domain in the country listed above. */
		publicDomain?: boolean | null;

		/** Whether quote sharing is allowed for this volume. */
		quoteSharingAllowed?: boolean | null;

		/** Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED. */
		textToSpeechPermission?: string | null;

		/** For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page. */
		viewOrderUrl?: string | null;

		/** The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES. */
		viewability?: string | null;

		/** URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes. */
		webReaderLink?: string | null;
	}

	export interface DownloadAccessRestriction {

		/** If restricted, whether access is granted for this (user, device, volume). */
		deviceAllowed?: boolean | null;

		/** If restricted, the number of content download licenses already acquired (including the requesting client, if licensed). */
		downloadsAcquired?: number | null;

		/** If deviceAllowed, whether access was just acquired with this request. */
		justAcquired?: boolean | null;

		/** Resource type. */
		kind?: string | null;

		/** If restricted, the maximum number of content download licenses for this volume. */
		maxDownloadDevices?: number | null;

		/** Error/warning message. */
		message?: string | null;

		/** Client nonce for verification. Download access and client-validation only. */
		nonce?: string | null;

		/** Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS */
		reasonCode?: string | null;

		/** Whether this volume has any download access restrictions. */
		restricted?: boolean | null;

		/** Response signature. */
		signature?: string | null;

		/** Client app identifier for verification. Download access and client-validation only. */
		source?: string | null;

		/** Identifies the volume for which this entry applies. */
		volumeId?: string | null;
	}

	export interface VolumeAccessInfoEpub {

		/** URL to retrieve ACS token for epub download. (In LITE projection.) */
		acsTokenLink?: string | null;

		/** URL to download epub. (In LITE projection.) */
		downloadLink?: string | null;

		/** Is a flowing text epub available either as public domain or for purchase. (In LITE projection.) */
		isAvailable?: boolean | null;
	}

	export interface VolumeAccessInfoPdf {

		/** URL to retrieve ACS token for pdf download. (In LITE projection.) */
		acsTokenLink?: string | null;

		/** URL to download pdf. (In LITE projection.) */
		downloadLink?: string | null;

		/** Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.) */
		isAvailable?: boolean | null;
	}

	export interface VolumeLayerInfo {

		/** A layer should appear here if and only if the layer exists for this book. */
		VolumeLayerInfoLayers?: Array<VolumeLayerInfoLayers>;
	}

	export interface VolumeLayerInfoLayers {

		/** The layer id of this layer (e.g. "geo"). */
		layerId?: string | null;

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion?: string | null;
	}

	export interface VolumeRecommendedInfo {

		/** A text explaining why this volume is recommended. */
		explanation?: string | null;
	}

	export interface VolumeSaleInfo {

		/** URL to purchase this volume on the Google Books site. (In LITE projection) */
		buyLink?: string | null;

		/** The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.) */
		country?: string | null;

		/** Whether or not this volume is an eBook (can be added to the My eBooks shelf). */
		isEbook?: boolean | null;

		/** Suggested retail price. (In LITE projection.) */
		listPrice?: VolumeSaleInfoListPrice;

		/** Offers available for this volume (sales and rentals). */
		VolumeSaleInfoOffers?: Array<VolumeSaleInfoOffers>;

		/** The date on which this book is available for sale. */
		onSaleDate?: Date | null;

		/** The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.) */
		retailPrice?: VolumeSaleInfoRetailPrice;

		/** Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER. */
		saleability?: string | null;
	}

	export interface VolumeSaleInfoListPrice {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount?: number | null;

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode?: string | null;
	}

	export interface VolumeSaleInfoOffers {

		/** The finsky offer type (e.g., PURCHASE=0 RENTAL=3) */
		finskyOfferType?: number | null;

		/** Indicates whether the offer is giftable. */
		giftable?: boolean | null;

		/** Offer list (=undiscounted) price in Micros. */
		listPrice?: VolumeSaleInfoListPrice;

		/** The rental duration (for rental offers only). */
		rentalDuration?: VolumeSaleInfoRentalDuration;

		/** Offer retail (=discounted) price in Micros */
		retailPrice?: VolumeSaleInfoRetailPrice;
	}

	export interface VolumeSaleInfoListPrice {
		amountInMicros?: number | null;
		currencyCode?: string | null;
	}

	export interface VolumeSaleInfoRentalDuration {
		count?: number | null;
		unit?: string | null;
	}

	export interface VolumeSaleInfoRetailPrice {
		amountInMicros?: number | null;
		currencyCode?: string | null;
	}

	export interface VolumeSaleInfoRetailPrice {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount?: number | null;

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode?: string | null;
	}

	export interface VolumeSearchInfo {

		/** A text snippet containing the search query. */
		textSnippet?: string | null;
	}

	export interface VolumeUserInfo {

		/** Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc. */
		acquiredTime?: Date | null;

		/** How this volume was acquired. */
		acquisitionType?: number | null;

		/** Copy/Paste accounting information. */
		copy?: VolumeUserInfoCopy;

		/** Whether this volume is purchased, sample, pd download etc. */
		entitlementType?: number | null;

		/** Information on the ability to share with the family. */
		familySharing?: VolumeUserInfoFamilySharing;

		/** Whether or not the user shared this volume with the family. */
		isFamilySharedFromUser?: boolean | null;

		/** Whether or not the user received this volume through family sharing. */
		isFamilySharedToUser?: boolean | null;

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingAllowed?: boolean | null;

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingDisabledByFop?: boolean | null;

		/** Whether or not this volume is currently in "my books." */
		isInMyBooks?: boolean | null;

		/** Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.) */
		isPreordered?: boolean | null;

		/** Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.) */
		isPurchased?: boolean | null;

		/** Whether or not this volume was user uploaded. */
		isUploaded?: boolean | null;
		readingPosition?: ReadingPosition;

		/** Period during this book is/was a valid rental. */
		rentalPeriod?: VolumeUserInfoRentalPeriod;

		/** Whether this book is an active or an expired rental. */
		rentalState?: string | null;
		review?: Review;

		/** Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format). */
		updated?: Date | null;
		userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
	}

	export interface VolumeUserInfoCopy {
		allowedCharacterCount?: number | null;
		limitType?: string | null;
		remainingCharacterCount?: number | null;
		updated?: Date | null;
	}

	export interface VolumeUserInfoFamilySharing {

		/** The role of the user in the family. */
		familyRole?: string | null;

		/** Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action. */
		isSharingAllowed?: boolean | null;

		/** Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet. */
		isSharingDisabledByFop?: boolean | null;
	}

	export interface ReadingPosition {

		/** Position in an EPUB as a CFI. */
		epubCfiPosition?: string | null;

		/** Position in a volume for image-based content. */
		gbImagePosition?: string | null;

		/** Position in a volume for text-based content. */
		gbTextPosition?: string | null;

		/** Resource type for a reading position. */
		kind?: string | null;

		/** Position in a PDF file. */
		pdfPosition?: string | null;

		/** Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution). */
		updated?: Date | null;

		/** Volume id associated with this reading position. */
		volumeId?: string | null;
	}

	export interface VolumeUserInfoRentalPeriod {
		endUtcSec?: string | null;
		startUtcSec?: string | null;
	}

	export interface Review {

		/** Author of this review. */
		author?: ReviewAuthor;

		/** Review text. */
		content?: string | null;

		/** Date of this review. */
		date?: string | null;

		/** URL for the full review text, for reviews gathered from the web. */
		fullTextUrl?: string | null;

		/** Resource type for a review. */
		kind?: string | null;

		/** Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED. */
		rating?: string | null;

		/** Information regarding the source of this review, when the review is not from a Google Books user. */
		source?: ReviewSource;

		/** Title for this review. */
		title?: string | null;

		/** Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER. */
		type?: string | null;

		/** Volume that this review is for. */
		volumeId?: string | null;
	}

	export interface ReviewAuthor {

		/** Name of this person. */
		displayName?: string | null;
	}

	export interface ReviewSource {

		/** Name of the source. */
		description?: string | null;

		/** Extra text about the source of the review. */
		extraDescription?: string | null;

		/** URL of the source of the review. */
		url?: string | null;
	}

	export interface VolumeUserInfoUserUploadedVolumeInfo {
		processingState?: string | null;
	}

	export interface VolumeVolumeInfo {

		/** Whether anonymous logging should be allowed. */
		allowAnonLogging?: boolean | null;

		/** The names of the authors and/or editors for this volume. (In LITE projection) */
		authors?: Array<string>;

		/** The mean review rating for this volume. (min = 1.0, max = 5.0) */
		averageRating?: number | null;

		/** Canonical URL for a volume. (In LITE projection.) */
		canonicalVolumeLink?: string | null;

		/** A list of subject categories, such as "Fiction", "Suspense", etc. */
		categories?: Array<string>;

		/** Whether the volume has comics content. */
		comicsContent?: boolean | null;

		/** An identifier for the version of the volume content (text & images). (In LITE projection) */
		contentVersion?: string | null;

		/** A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.) */
		description?: string | null;

		/** Physical dimensions of this volume. */
		dimensions?: VolumeVolumeInfoDimensions;

		/** A list of image links for all the sizes that are available. (In LITE projection.) */
		imageLinks?: VolumeVolumeInfoImageLinks;

		/** Industry standard identifiers for this volume. */
		VolumeVolumeInfoIndustryIdentifiers?: Array<VolumeVolumeInfoIndustryIdentifiers>;

		/** URL to view information about this volume on the Google Books site. (In LITE projection) */
		infoLink?: string | null;

		/** Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc. */
		language?: string | null;

		/** The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight. */
		mainCategory?: string | null;
		maturityRating?: string | null;

		/** Total number of pages as per publisher metadata. */
		pageCount?: number | null;

		/** A top-level summary of the panelization info in this volume. */
		panelizationSummary?: VolumeVolumeInfoPanelizationSummary;

		/** URL to preview this volume on the Google Books site. */
		previewLink?: string | null;

		/** Type of publication of this volume. Possible values are BOOK or MAGAZINE. */
		printType?: string | null;

		/** Total number of printed pages in generated pdf representation. */
		printedPageCount?: number | null;

		/** Date of publication. (In LITE projection.) */
		publishedDate?: string | null;

		/** Publisher of this volume. (In LITE projection.) */
		publisher?: string | null;

		/** The number of review ratings for this volume. */
		ratingsCount?: number | null;

		/** The reading modes available for this volume. */
		readingModes?: any;

		/** Total number of sample pages as per publisher metadata. */
		samplePageCount?: number | null;
		seriesInfo?: Volumeseriesinfo;

		/** Volume subtitle. (In LITE projection.) */
		subtitle?: string | null;

		/** Volume title. (In LITE projection.) */
		title?: string | null;
	}

	export interface VolumeVolumeInfoDimensions {

		/** Height or length of this volume (in cm). */
		height?: string | null;

		/** Thickness of this volume (in cm). */
		thickness?: string | null;

		/** Width of this volume (in cm). */
		width?: string | null;
	}

	export interface VolumeVolumeInfoImageLinks {

		/** Image link for extra large size (width of ~1280 pixels). (In LITE projection) */
		extraLarge?: string | null;

		/** Image link for large size (width of ~800 pixels). (In LITE projection) */
		large?: string | null;

		/** Image link for medium size (width of ~575 pixels). (In LITE projection) */
		medium?: string | null;

		/** Image link for small size (width of ~300 pixels). (In LITE projection) */
		small?: string | null;

		/** Image link for small thumbnail size (width of ~80 pixels). (In LITE projection) */
		smallThumbnail?: string | null;

		/** Image link for thumbnail size (width of ~128 pixels). (In LITE projection) */
		thumbnail?: string | null;
	}

	export interface VolumeVolumeInfoIndustryIdentifiers {

		/** Industry specific volume identifier. */
		identifier?: string | null;

		/** Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER. */
		type?: string | null;
	}

	export interface VolumeVolumeInfoPanelizationSummary {
		containsEpubBubbles?: boolean | null;
		containsImageBubbles?: boolean | null;
		epubBubbleVersion?: string | null;
		imageBubbleVersion?: string | null;
	}

	export interface Volumeseriesinfo {

		/** The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber. */
		bookDisplayNumber?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** Short book title in the context of the series. */
		shortSeriesBookTitle?: string | null;
		VolumeseriesinfoVolumeSeries?: Array<VolumeseriesinfoVolumeSeries>;
	}

	export interface VolumeseriesinfoVolumeSeries {

		/** List of issues. Applicable only for Collection Edition and Omnibus. */
		VolumeseriesinfoVolumeSeriesIssue?: Array<VolumeseriesinfoVolumeSeriesIssue>;

		/** The book order number in the series. */
		orderNumber?: number | null;

		/** The book type in the context of series. Examples - Single Issue, Collection Edition, etc. */
		seriesBookType?: string | null;

		/** The series id. */
		seriesId?: string | null;
	}

	export interface VolumeseriesinfoVolumeSeriesIssue {
		issueDisplayNumber?: string | null;
		issueOrderNumber?: number | null;
	}

	export interface DownloadAccesses {

		/** A list of download access responses. */
		downloadAccessList?: Array<DownloadAccessRestriction>;

		/** Resource type. */
		kind?: string | null;
	}

	export interface FamilyInfo {

		/** Resource type. */
		kind?: string | null;

		/** Family membership info of the user that made the request. */
		membership?: FamilyInfoMembership;
	}

	export interface FamilyInfoMembership {

		/** Restrictions on user buying and acquiring content. */
		acquirePermission?: string | null;

		/** The age group of the user. */
		ageGroup?: string | null;

		/** The maximum allowed maturity rating for the user. */
		allowedMaturityRating?: string | null;
		isInFamily?: boolean | null;

		/** The role of the user in the family. */
		role?: string | null;
	}

	export interface Geolayerdata {
		common?: GeolayerdataCommon;
		geo?: GeolayerdataGeo;
		kind?: string | null;
	}

	export interface GeolayerdataCommon {

		/** The language of the information url and description. */
		lang?: string | null;

		/** The URL for the preview image information. */
		previewImageUrl?: string | null;

		/** The description for this location. */
		snippet?: string | null;

		/** The URL for information for this location. Ex: wikipedia link. */
		snippetUrl?: string | null;

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title?: string | null;
	}

	export interface GeolayerdataGeo {

		/** The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates. */
		boundary?: Array<string>;

		/** The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER */
		cachePolicy?: string | null;

		/** The country code of the location. */
		countryCode?: string | null;

		/** The latitude of the location. */
		latitude?: number | null;

		/** The longitude of the location. */
		longitude?: number | null;

		/** The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN */
		mapType?: string | null;

		/** The viewport for showing this location. This is a latitude, longitude rectangle. */
		viewport?: GeolayerdataGeoViewport;

		/** The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https://developers.google.com/maps/documentation/staticmaps/#Zoomlevels */
		zoom?: number | null;
	}

	export interface GeolayerdataGeoViewport {
		hi?: GeolayerdataGeoViewportHi;
		lo?: GeolayerdataGeoViewportLo;
	}

	export interface GeolayerdataGeoViewportHi {
		latitude?: number | null;
		longitude?: number | null;
	}

	export interface GeolayerdataGeoViewportLo {
		latitude?: number | null;
		longitude?: number | null;
	}

	export interface Layersummaries {

		/** A list of layer summary items. */
		items?: Array<Layersummary>;

		/** Resource type. */
		kind?: string | null;

		/** The total number of layer summaries found. */
		totalItems?: number | null;
	}

	export interface Layersummary {

		/** The number of annotations for this layer. */
		annotationCount?: number | null;

		/** The list of annotation types contained for this layer. */
		annotationTypes?: Array<string>;

		/** Link to get data for this annotation. */
		annotationsDataLink?: string | null;

		/** The link to get the annotations for this layer. */
		annotationsLink?: string | null;

		/** The content version this resource is for. */
		contentVersion?: string | null;

		/** The number of data items for this layer. */
		dataCount?: number | null;

		/** Unique id of this layer summary. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The layer id for this summary. */
		layerId?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format). */
		updated?: Date | null;

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion?: string | null;

		/** The volume id this resource is for. */
		volumeId?: string | null;
	}

	export interface Metadata {

		/** A list of offline dictionary metadata. */
		MetadataItems?: Array<MetadataItems>;

		/** Resource type. */
		kind?: string | null;
	}

	export interface MetadataItems {
		download_url?: string | null;
		encrypted_key?: string | null;
		language?: string | null;
		size?: string | null;
		version?: string | null;
	}

	export interface Notification {
		body?: string | null;

		/** The list of crm experiment ids. */
		crmExperimentIds?: Array<string>;
		doc_id?: string | null;
		doc_type?: string | null;
		dont_show_notification?: boolean | null;
		iconUrl?: string | null;
		is_document_mature?: boolean | null;

		/** Resource type. */
		kind?: string | null;
		notificationGroup?: string | null;
		notification_type?: string | null;
		pcampaign_id?: string | null;
		reason?: string | null;
		show_notification_settings_action?: boolean | null;
		targetUrl?: string | null;
		timeToExpireMs?: string | null;
		title?: string | null;
	}

	export interface Offers {

		/** A list of offers. */
		OffersItems?: Array<OffersItems>;

		/** Resource type. */
		kind?: string | null;
	}

	export interface OffersItems {
		artUrl?: string | null;
		gservicesKey?: string | null;
		id?: string | null;
		OffersItemsItems?: Array<OffersItemsItems>;
	}

	export interface OffersItemsItems {
		author?: string | null;
		canonicalVolumeLink?: string | null;
		coverUrl?: string | null;
		description?: string | null;
		title?: string | null;
		volumeId?: string | null;
	}

	export interface RequestAccess {
		concurrentAccess?: ConcurrentAccessRestriction;
		downloadAccess?: DownloadAccessRestriction;

		/** Resource type. */
		kind?: string | null;
	}

	export interface Series {

		/** Resource type. */
		kind?: string | null;
		SeriesSeries?: Array<SeriesSeries>;
	}

	export interface SeriesSeries {
		bannerImageUrl?: string | null;
		eligibleForSubscription?: boolean | null;
		imageUrl?: string | null;
		isComplete?: boolean | null;
		seriesFormatType?: string | null;
		seriesId?: string | null;
		seriesSubscriptionReleaseInfo?: SeriesSeriesSubscriptionReleaseInfo;
		seriesType?: string | null;
		subscriptionId?: string | null;
		title?: string | null;
	}

	export interface SeriesSeriesSubscriptionReleaseInfo {

		/** Cancellation date of the series subscription (or when it ends). */
		cancellationTimestampUs?: string | null;
		currentReleaseInfo?: BooksSubscriptionReleaseInfo;
		nextReleaseInfo?: BooksSubscriptionReleaseInfo;

		/** series subscription type. */
		seriesSubscriptionType?: string | null;
	}

	export interface Seriesmembership {

		/** Resorce type. */
		kind?: string | null;
		member?: Array<Volume>;
		nextPageToken?: string | null;
	}

	export interface Usersettings {

		/** Resource type. */
		kind?: string | null;

		/** User settings in sub-objects, each for different purposes. */
		notesExport?: UsersettingsNotesExport;
		notification?: UsersettingsNotification;
	}

	export interface UsersettingsNotesExport {
		folderName?: string | null;
		isEnabled?: boolean | null;
	}

	export interface UsersettingsNotification {
		matchMyInterests?: UsersettingsNotificationMatchMyInterests;
		moreFromAuthors?: UsersettingsNotificationMoreFromAuthors;
		moreFromSeries?: UsersettingsNotificationMoreFromSeries;
		priceDrop?: UsersettingsNotificationPriceDrop;
		rewardExpirations?: UsersettingsNotificationRewardExpirations;
	}

	export interface UsersettingsNotificationMatchMyInterests {
		opted_state?: string | null;
	}

	export interface UsersettingsNotificationMoreFromAuthors {
		opted_state?: string | null;
	}

	export interface UsersettingsNotificationMoreFromSeries {
		opted_state?: string | null;
	}

	export interface UsersettingsNotificationPriceDrop {
		opted_state?: string | null;
	}

	export interface UsersettingsNotificationRewardExpirations {
		opted_state?: string | null;
	}

	export interface Volume2 {

		/** A list of volumes. */
		items?: Array<Volume>;

		/** Resource type. */
		kind?: string | null;
		nextPageToken?: string | null;
	}

	export interface Volumeannotation {

		/** The annotation data id for this volume annotation. */
		annotationDataId?: string | null;

		/** Link to get data for this annotation. */
		annotationDataLink?: string | null;

		/** The type of annotation this is. */
		annotationType?: string | null;

		/** The content ranges to identify the selected text. */
		contentRanges?: VolumeannotationContentRanges;

		/** Data for this annotation. */
		data?: string | null;

		/** Indicates that this annotation is deleted. */
		deleted?: boolean | null;

		/** Unique id of this volume annotation. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The Layer this annotation is for. */
		layerId?: string | null;

		/** Pages the annotation spans. */
		pageIds?: Array<string>;

		/** Excerpt from the volume. */
		selectedText?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format). */
		updated?: Date | null;

		/** The Volume this annotation is for. */
		volumeId?: string | null;
	}

	export interface VolumeannotationContentRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version applicable to ranges below. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
	}

	export interface Volumeannotations {

		/** A list of volume annotations. */
		items?: Array<Volumeannotation>;

		/** Resource type */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** The total number of volume annotations found. */
		totalItems?: number | null;

		/** The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book). */
		version?: string | null;
	}

	export interface Volumes {

		/** A list of volumes. */
		items?: Array<Volume>;

		/** Resource type. */
		kind?: string | null;

		/** Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated. */
		totalItems?: number | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post cloudloading/addBook
		 * @param {string} drive_document_id A drive document id. The upload_client_token must not be set.
		 * @param {string} mime_type The document MIME type. It can be set only if the drive_document_id is set.
		 * @param {string} name The document name. It can be set only if the drive_document_id is set.
		 * @return {void} Successful response
		 */
		Books_cloudloading_addBook(drive_document_id: string | null | undefined, mime_type: string | null | undefined, name: string | null | undefined, upload_client_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloudloading/addBook?drive_document_id=' + (drive_document_id == null ? '' : encodeURIComponent(drive_document_id)) + '&mime_type=' + (mime_type == null ? '' : encodeURIComponent(mime_type)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&upload_client_token=' + (upload_client_token == null ? '' : encodeURIComponent(upload_client_token)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove the book and its contents
		 * Post cloudloading/deleteBook
		 * @param {string} volumeId The id of the book to be removed.
		 * @return {void} Successful response
		 */
		Books_cloudloading_deleteBook(volumeId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloudloading/deleteBook?volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post cloudloading/updateBook
		 * @return {void} Successful response
		 */
		Books_cloudloading_updateBook(requestBody: BooksCloudloadingResource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloudloading/updateBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of offline dictionary metadata available
		 * Get dictionary/listOfflineMetadata
		 * @param {string} cpksver The device/version ID from which to request the data.
		 * @return {void} Successful response
		 */
		Books_dictionary_listOfflineMetadata(cpksver: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'dictionary/listOfflineMetadata?cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information regarding the family that the user is part of.
		 * Get familysharing/getFamilyInfo
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_familysharing_getFamilyInfo(source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'familysharing/getFamilyInfo?source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiates sharing of the content with the user's family. Empty response indicates success.
		 * Post familysharing/share
		 * @param {string} docId The docid to share.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to share.
		 * @return {void} Successful response
		 */
		Books_familysharing_share(docId: string | null | undefined, source: string | null | undefined, volumeId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'familysharing/share?docId=' + (docId == null ? '' : encodeURIComponent(docId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
		 * Post familysharing/unshare
		 * @param {string} docId The docid to unshare.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to unshare.
		 * @return {void} Successful response
		 */
		Books_familysharing_unshare(docId: string | null | undefined, source: string | null | undefined, volumeId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'familysharing/unshare?docId=' + (docId == null ? '' : encodeURIComponent(docId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the current settings for the user.
		 * Get myconfig/getUserSettings
		 * @return {void} Successful response
		 */
		Books_myconfig_getUserSettings(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'myconfig/getUserSettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Release downloaded content access restriction.
		 * Post myconfig/releaseDownloadAccess
		 * @param {Array<string>} volumeIds The volume(s) to release restrictions for.
		 * @param {string} cpksver The device/version ID from which to release the restriction.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_myconfig_releaseDownloadAccess(volumeIds: Array<string>, cpksver: string, locale: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'myconfig/releaseDownloadAccess?' + volumeIds.map(z => `volumeIds=${encodeURIComponent(z)}`).join('&') + '&cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request concurrent and download access restrictions.
		 * Post myconfig/requestAccess
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to request concurrent/download restrictions for.
		 * @param {string} nonce The client nonce value.
		 * @param {string} cpksver The device/version ID from which to request the restrictions.
		 * @param {Books_myconfig_requestAccessLicenseTypes} licenseTypes The type of access license to request. If not specified, the default is BOTH.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @return {void} Successful response
		 */
		Books_myconfig_requestAccess(source: string, volumeId: string, nonce: string, cpksver: string, licenseTypes: Books_myconfig_requestAccessLicenseTypes | null | undefined, locale: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'myconfig/requestAccess?source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)) + '&cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&licenseTypes=' + licenseTypes + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request downloaded content access for specified volumes on the My eBooks shelf.
		 * Post myconfig/syncVolumeLicenses
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} nonce The client nonce value.
		 * @param {string} cpksver The device/version ID from which to release the restriction.
		 * @param {Array<string>} features List of features supported by the client, i.e., 'RENTALS'
		 * @param {boolean} includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {Array<string>} volumeIds The volume(s) to request download restrictions for.
		 * @return {void} Successful response
		 */
		Books_myconfig_syncVolumeLicenses(source: string, nonce: string, cpksver: string, features: Array<string> | null | undefined, includeNonComicsSeries: boolean | null | undefined, locale: string | null | undefined, showPreorders: boolean | null | undefined, volumeIds: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'myconfig/syncVolumeLicenses?source=' + (source == null ? '' : encodeURIComponent(source)) + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)) + '&cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&' + features?.map(z => `features=${encodeURIComponent(z)}`).join('&') + '&includeNonComicsSeries=' + includeNonComicsSeries + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&showPreorders=' + showPreorders + '&' + volumeIds?.map(z => `volumeIds=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
		 * Post myconfig/updateUserSettings
		 * @return {void} Successful response
		 */
		Books_myconfig_updateUserSettings(requestBody: Usersettings): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'myconfig/updateUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of annotations, possibly filtered.
		 * Get mylibrary/annotations
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} layerId The layer ID to limit annotation by.
		 * @param {Array<string>} layerIds The layer ID(s) to limit annotation by.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {string} volumeId The volume to restrict annotations to.
		 * @return {void} Successful response
		 */
		Books_mylibrary_annotations_list(contentVersion: string | null | undefined, layerId: string | null | undefined, layerIds: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, source: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, volumeId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mylibrary/annotations?contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&layerId=' + (layerId == null ? '' : encodeURIComponent(layerId)) + '&' + layerIds?.map(z => `layerIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new annotation.
		 * Post mylibrary/annotations
		 * @param {string} annotationId The ID for the annotation to insert.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {boolean} showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_annotations_insert(annotationId: string | null | undefined, country: string | null | undefined, showOnlySummaryInResponse: boolean | null | undefined, source: string | null | undefined, requestBody: Annotation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/annotations?annotationId=' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&showOnlySummaryInResponse=' + showOnlySummaryInResponse + '&source=' + (source == null ? '' : encodeURIComponent(source)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the summary of specified layers.
		 * Post mylibrary/annotations/summary
		 * @param {Array<string>} layerIds Array of layer IDs to get the summary for.
		 * @param {string} volumeId Volume id to get the summary for.
		 * @return {void} Successful response
		 */
		Books_mylibrary_annotations_summary(layerIds: Array<string>, volumeId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/annotations/summary?' + layerIds.map(z => `layerIds=${encodeURIComponent(z)}`).join('&') + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an annotation.
		 * Delete mylibrary/annotations/{annotationId}
		 * @param {string} annotationId The ID for the annotation to delete.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_annotations_delete(annotationId: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'mylibrary/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing annotation.
		 * Put mylibrary/annotations/{annotationId}
		 * @param {string} annotationId The ID for the annotation to update.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_annotations_update(annotationId: string, source: string | null | undefined, requestBody: Annotation): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mylibrary/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of bookshelves belonging to the authenticated user.
		 * Get mylibrary/bookshelves
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_list(source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mylibrary/bookshelves?source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
		 * Get mylibrary/bookshelves/{shelf}
		 * @param {string} shelf ID of bookshelf to retrieve.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_get(shelf: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a volume to a bookshelf.
		 * Post mylibrary/bookshelves/{shelf}/addVolume
		 * @param {string} shelf ID of bookshelf to which to add a volume.
		 * @param {string} volumeId ID of volume to add.
		 * @param {Books_mylibrary_bookshelves_addVolumeReason} reason The reason for which the book is added to the library.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_addVolume(shelf: string, volumeId: string, reason: Books_mylibrary_bookshelves_addVolumeReason | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/addVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&reason=' + reason + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears all volumes from a bookshelf.
		 * Post mylibrary/bookshelves/{shelf}/clearVolumes
		 * @param {string} shelf ID of bookshelf from which to remove a volume.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_clearVolumes(shelf: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/clearVolumes&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves a volume within a bookshelf.
		 * Post mylibrary/bookshelves/{shelf}/moveVolume
		 * @param {string} shelf ID of bookshelf with the volume.
		 * @param {string} volumeId ID of volume to move.
		 * @param {number} volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_moveVolume(shelf: string, volumeId: string, volumePosition: number, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/moveVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&volumePosition=' + volumePosition + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a volume from a bookshelf.
		 * Post mylibrary/bookshelves/{shelf}/removeVolume
		 * @param {string} shelf ID of bookshelf from which to remove a volume.
		 * @param {string} volumeId ID of volume to remove.
		 * @param {Books_mylibrary_bookshelves_removeVolumeReason} reason The reason for which the book is removed from the library.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_removeVolume(shelf: string, volumeId: string, reason: Books_mylibrary_bookshelves_removeVolumeReason | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/removeVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&reason=' + reason + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets volume information for volumes on a bookshelf.
		 * Get mylibrary/bookshelves/{shelf}/volumes
		 * @param {string} shelf The bookshelf ID or name retrieve volumes for.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} q Full-text search query string in this bookshelf.
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first element to return (starts at 0)
		 * @return {void} Successful response
		 */
		Books_mylibrary_bookshelves_volumes_list(shelf: string, country: string | null | undefined, maxResults: number | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, q: string | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/volumes&country=' + (country == null ? '' : encodeURIComponent(country)) + '&maxResults=' + maxResults + '&projection=' + projection + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves my reading position information for a volume.
		 * Get mylibrary/readingpositions/{volumeId}
		 * @param {string} volumeId ID of volume for which to retrieve a reading position.
		 * @param {string} contentVersion Volume content version for which this reading position is requested.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_readingpositions_get(volumeId: string, contentVersion: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mylibrary/readingpositions/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets my reading position information for a volume.
		 * Post mylibrary/readingpositions/{volumeId}/setPosition
		 * @param {string} volumeId ID of volume for which to update the reading position.
		 * @param {string} timestamp RFC 3339 UTC format timestamp associated with this reading position.
		 * @param {string} position Position string for the new volume reading position.
		 * @param {Books_mylibrary_readingpositions_setPositionAction} action Action that caused this reading position to be set.
		 * @param {string} contentVersion Volume content version for which this reading position applies.
		 * @param {string} deviceCookie Random persistent device cookie optional on set position.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_mylibrary_readingpositions_setPosition(volumeId: string, timestamp: string, position: string, action: Books_mylibrary_readingpositions_setPositionAction | null | undefined, contentVersion: string | null | undefined, deviceCookie: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mylibrary/readingpositions/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/setPosition&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&action=' + action + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&deviceCookie=' + (deviceCookie == null ? '' : encodeURIComponent(deviceCookie)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns notification details for a given notification id.
		 * Get notification/get
		 * @param {string} notification_id String to identify the notification.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_notification_get(notification_id: string, locale: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notification/get?notification_id=' + (notification_id == null ? '' : encodeURIComponent(notification_id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List categories for onboarding experience.
		 * Get onboarding/listCategories
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
		 * @return {void} Successful response
		 */
		Books_onboarding_listCategories(locale: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'onboarding/listCategories?locale=' + (locale == null ? '' : encodeURIComponent(locale)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List available volumes under categories for onboarding experience.
		 * Get onboarding/listCategoryVolumes
		 * @param {Array<string>} categoryId List of category ids requested.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
		 * @param {number} pageSize Number of maximum results per page to be included in the response.
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @return {void} Successful response
		 */
		Books_onboarding_listCategoryVolumes(categoryId: Array<string> | null | undefined, locale: string | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'onboarding/listCategoryVolumes?' + categoryId?.map(z => `categoryId=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a stream of personalized book clusters
		 * Get personalizedstream/get
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_personalizedstream_getMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_personalizedstream_get(locale: string | null | undefined, maxAllowedMaturityRating: Books_personalizedstream_getMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'personalizedstream/get?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post promooffer/accept
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @param {string} volumeId Volume id to exercise the offer
		 * @return {void} Successful response
		 */
		Books_promooffer_accept(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, offerId: string | null | undefined, product: string | null | undefined, serial: string | null | undefined, volumeId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'promooffer/accept?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&offerId=' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post promooffer/dismiss
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} offerId Offer to dimiss
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @return {void} Successful response
		 */
		Books_promooffer_dismiss(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, offerId: string | null | undefined, product: string | null | undefined, serial: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'promooffer/dismiss?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&offerId=' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of promo offers available to the user
		 * Get promooffer/get
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @return {void} Successful response
		 */
		Books_promooffer_get(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, product: string | null | undefined, serial: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'promooffer/get?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns Series metadata for the given series ids.
		 * Get series/get
		 * @param {Array<string>} series_id String that identifies the series
		 * @return {void} Successful response
		 */
		Books_series_get(series_id: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/get?' + series_id.map(z => `series_id=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns Series membership data given the series id.
		 * Get series/membership/get
		 * @param {string} series_id String that identifies the series
		 * @param {number} page_size Number of maximum results per page to be included in the response.
		 * @param {string} page_token The value of the nextToken from the previous page.
		 * @return {void} Successful response
		 */
		Books_series_membership_get(series_id: string, page_size: number | null | undefined, page_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/membership/get?series_id=' + (series_id == null ? '' : encodeURIComponent(series_id)) + '&page_size=' + page_size + '&page_token=' + (page_token == null ? '' : encodeURIComponent(page_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of public bookshelves for the specified user.
		 * Get users/{userId}/bookshelves
		 * @param {string} userId ID of user for whom to retrieve bookshelves.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_bookshelves_list(userId: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves metadata for a specific bookshelf for the specified user.
		 * Get users/{userId}/bookshelves/{shelf}
		 * @param {string} userId ID of user for whom to retrieve bookshelves.
		 * @param {string} shelf ID of bookshelf to retrieve.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_bookshelves_get(userId: string, shelf: string, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves volumes in a specific bookshelf for the specified user.
		 * Get users/{userId}/bookshelves/{shelf}/volumes
		 * @param {string} userId ID of user for whom to retrieve bookshelf volumes.
		 * @param {string} shelf ID of bookshelf to retrieve volumes.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first element to return (starts at 0)
		 * @return {void} Successful response
		 */
		Books_bookshelves_volumes_list(userId: string, shelf: string, maxResults: number | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/volumes&maxResults=' + maxResults + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs a book search.
		 * Get volumes
		 * @param {string} q Full-text search query string.
		 * @param {Books_volumes_listDownload} download Restrict to volumes by download availability.
		 * @param {Books_volumes_listFilter} filter Filter search results.
		 * @param {string} langRestrict Restrict results to books with this language code.
		 * @param {Books_volumes_listLibraryRestrict} libraryRestrict Restrict search to this user's library.
		 * @param {Books_volumes_listMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Books_volumes_listOrderBy} orderBy Sort search results.
		 * @param {string} partner Restrict and brand results for partner ID.
		 * @param {Books_volumes_listPrintType} printType Restrict to books or magazines.
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {boolean} showPreorders Set to true to show books available for preorder. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @return {void} Successful response
		 */
		Books_volumes_list(q: string, download: Books_volumes_listDownload | null | undefined, filter: Books_volumes_listFilter | null | undefined, langRestrict: string | null | undefined, libraryRestrict: Books_volumes_listLibraryRestrict | null | undefined, maxAllowedMaturityRating: Books_volumes_listMaxAllowedMaturityRating | null | undefined, maxResults: number | null | undefined, orderBy: Books_volumes_listOrderBy | null | undefined, partner: string | null | undefined, printType: Books_volumes_listPrintType | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes?q=' + (q == null ? '' : encodeURIComponent(q)) + '&download=' + download + '&filter=' + filter + '&langRestrict=' + (langRestrict == null ? '' : encodeURIComponent(langRestrict)) + '&libraryRestrict=' + libraryRestrict + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&printType=' + printType + '&projection=' + projection + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of books in My Library.
		 * Get volumes/mybooks
		 * @param {Array<string>} acquireMethod How the book was acquired
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @return {void} Successful response
		 */
		Books_volumes_mybooks_list(acquireMethod: Array<string> | null | undefined, country: string | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, processingState: Array<string> | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/mybooks?' + acquireMethod?.map(z => `acquireMethod=${encodeURIComponent(z)}`).join('&') + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + processingState?.map(z => `processingState=${encodeURIComponent(z)}`).join('&') + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of recommended books for the current user.
		 * Get volumes/recommended
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_volumes_recommended_listMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_volumes_recommended_list(locale: string | null | undefined, maxAllowedMaturityRating: Books_volumes_recommended_listMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/recommended?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rate a recommended book for the current user.
		 * Post volumes/recommended/rate
		 * @param {Books_volumes_recommended_rateRating} rating Rating to be given to the volume.
		 * @param {string} volumeId ID of the source volume.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_volumes_recommended_rate(rating: Books_volumes_recommended_rateRating, volumeId: string, locale: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/recommended/rate?rating=' + rating + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of books uploaded by the current user.
		 * Get volumes/useruploaded
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} processingState The processing state of the user uploaded volumes to be returned.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @param {Array<string>} volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
		 * @return {void} Successful response
		 */
		Books_volumes_useruploaded_list(locale: string | null | undefined, maxResults: number | null | undefined, processingState: Array<string> | null | undefined, source: string | null | undefined, startIndex: number | null | undefined, volumeId: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/useruploaded?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + processingState?.map(z => `processingState=${encodeURIComponent(z)}`).join('&') + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex + '&' + volumeId?.map(z => `volumeId=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets volume information for a single volume.
		 * Get volumes/{volumeId}
		 * @param {string} volumeId ID of volume to retrieve.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {boolean} includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
		 * @param {string} partner Brand results for partner ID.
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_volumes_get(volumeId: string, country: string | null | undefined, includeNonComicsSeries: boolean | null | undefined, partner: string | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, source: string | null | undefined, user_library_consistent_read: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&includeNonComicsSeries=' + includeNonComicsSeries + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&projection=' + projection + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&user_library_consistent_read=' + user_library_consistent_read, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a list of associated books.
		 * Get volumes/{volumeId}/associated
		 * @param {string} volumeId ID of the source volume.
		 * @param {Books_volumes_associated_listAssociation} association Association type.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_volumes_associated_listMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_volumes_associated_list(volumeId: string, association: Books_volumes_associated_listAssociation | null | undefined, locale: string | null | undefined, maxAllowedMaturityRating: Books_volumes_associated_listMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/associated&association=' + association + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the volume annotations for a volume and layer.
		 * Get volumes/{volumeId}/layers/{layerId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} endOffset The end offset to end retrieving data from.
		 * @param {string} endPosition The end position to end retrieving data from.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} startOffset The start offset to start retrieving data from.
		 * @param {string} startPosition The start position to start retrieving data from.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {string} volumeAnnotationsVersion The version of the volume annotations that you are requesting.
		 * @return {void} Successful response
		 */
		Books_layers_volumeAnnotations_list(volumeId: string, layerId: string, contentVersion: string, endOffset: string | null | undefined, endPosition: string | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, source: string | null | undefined, startOffset: string | null | undefined, startPosition: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, volumeAnnotationsVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&endOffset=' + (endOffset == null ? '' : encodeURIComponent(endOffset)) + '&endPosition=' + (endPosition == null ? '' : encodeURIComponent(endPosition)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startOffset=' + (startOffset == null ? '' : encodeURIComponent(startOffset)) + '&startPosition=' + (startPosition == null ? '' : encodeURIComponent(startPosition)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&volumeAnnotationsVersion=' + (volumeAnnotationsVersion == null ? '' : encodeURIComponent(volumeAnnotationsVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the volume annotation.
		 * Get volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} annotationId The ID of the volume annotation to retrieve.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_layers_volumeAnnotations_get(volumeId: string, layerId: string, annotationId: string, locale: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the annotation data for a volume and layer.
		 * Get volumes/{volumeId}/layers/{layerId}/data
		 * @param {string} volumeId The volume to retrieve annotation data for.
		 * @param {string} layerId The ID for the layer to get the annotation data.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {Array<string>} annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
		 * @param {number} h The requested pixel height for any images. If height is provided width must also be provided.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {number} scale The requested scale for the image.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {number} w The requested pixel width for any images. If width is provided height must also be provided.
		 * @return {void} Successful response
		 */
		Books_layers_annotationData_list(volumeId: string, layerId: string, contentVersion: string, annotationDataId: Array<string> | null | undefined, h: number | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, scale: number | null | undefined, source: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, w: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/data&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&' + annotationDataId?.map(z => `annotationDataId=${encodeURIComponent(z)}`).join('&') + '&h=' + h + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scale=' + scale + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&w=' + w, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the annotation data.
		 * Get volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} annotationDataId The ID of the annotation data to retrieve.
		 * @param {string} contentVersion The content version for the volume you are trying to retrieve.
		 * @param {boolean} allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
		 * @param {number} h The requested pixel height for any images. If height is provided width must also be provided.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} scale The requested scale for the image.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} w The requested pixel width for any images. If width is provided height must also be provided.
		 * @return {void} Successful response
		 */
		Books_layers_annotationData_get(volumeId: string, layerId: string, annotationDataId: string, contentVersion: string, allowWebDefinitions: boolean | null | undefined, h: number | null | undefined, locale: string | null | undefined, scale: number | null | undefined, source: string | null | undefined, w: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/data/' + (annotationDataId == null ? '' : encodeURIComponent(annotationDataId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&allowWebDefinitions=' + allowWebDefinitions + '&h=' + h + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&scale=' + scale + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&w=' + w, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the layer summaries for a volume.
		 * Get volumes/{volumeId}/layersummary
		 * @param {string} volumeId The volume to retrieve layers for.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_layers_list(volumeId: string, contentVersion: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layersummary&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the layer summary for a volume.
		 * Get volumes/{volumeId}/layersummary/{summaryId}
		 * @param {string} volumeId The volume to retrieve layers for.
		 * @param {string} summaryId The ID for the layer to get the summary for.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} source String to identify the originator of this request.
		 * @return {void} Successful response
		 */
		Books_layers_get(volumeId: string, summaryId: string, contentVersion: string | null | undefined, source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layersummary/' + (summaryId == null ? '' : encodeURIComponent(summaryId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Books_myconfig_requestAccessLicenseTypes { BOTH = 0, CONCURRENT = 1, DOWNLOAD = 2 }

	export enum Books_mylibrary_bookshelves_addVolumeReason { IOS_PREX = 0, IOS_SEARCH = 1, ONBOARDING = 2 }

	export enum Books_mylibrary_bookshelves_removeVolumeReason { ONBOARDING = 0 }

	export enum Books_mylibrary_bookshelves_volumes_listProjection { full = 0, lite = 1 }

	export enum Books_mylibrary_readingpositions_setPositionAction { bookmark = 0, chapter = 1, next_page = 2, prev_page = 3, scroll = 4, search = 5 }

	export enum Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating { mature = 0, not_mature = 1 }

	export enum Books_personalizedstream_getMaxAllowedMaturityRating { mature = 0, not_mature = 1 }

	export enum Books_volumes_listDownload { epub = 0 }

	export enum Books_volumes_listFilter { ebooks = 0, free_ebooks = 1, full = 2, paid_ebooks = 3, partial = 4 }

	export enum Books_volumes_listLibraryRestrict { my_library = 0, no_restrict = 1 }

	export enum Books_volumes_listMaxAllowedMaturityRating { mature = 0, not_mature = 1 }

	export enum Books_volumes_listOrderBy { newest = 0, relevance = 1 }

	export enum Books_volumes_listPrintType { all = 0, books = 1, magazines = 2 }

	export enum Books_volumes_recommended_listMaxAllowedMaturityRating { mature = 0, not_mature = 1 }

	export enum Books_volumes_recommended_rateRating { HAVE_IT = 0, NOT_INTERESTED = 1 }

	export enum Books_volumes_associated_listAssociation { end_of_sample = 0, end_of_volume = 1, related_for_play = 2 }

	export enum Books_volumes_associated_listMaxAllowedMaturityRating { mature = 0, not_mature = 1 }

}
