import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateByteMatchSetResponse {
		ByteMatchSet?: ByteMatchSet;
		ChangeToken?: string;
	}
	export interface CreateByteMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateByteMatchSetResponseFormGroup() {
		return new FormGroup<CreateByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface ByteMatchSet {

		/** Required */
		ByteMatchSetId: string;
		Name?: string;

		/** Required */
		ByteMatchTuples: Array<ByteMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface ByteMatchSetFormProperties {

		/** Required */
		ByteMatchSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateByteMatchSetFormGroup() {
		return new FormGroup<ByteMatchSetFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p> */
	export interface ByteMatchTuple {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TargetString: string;

		/** Required */
		TextTransformation: TextTransformation;

		/** Required */
		PositionalConstraint: PositionalConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p> */
	export interface ByteMatchTupleFormProperties {

		/** Required */
		TargetString: FormControl<string | null | undefined>,

		/** Required */
		TextTransformation: FormControl<TextTransformation | null | undefined>,

		/** Required */
		PositionalConstraint: FormControl<PositionalConstraint | null | undefined>,
	}
	export function CreateByteMatchTupleFormGroup() {
		return new FormGroup<ByteMatchTupleFormProperties>({
			TargetString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextTransformation: new FormControl<TextTransformation | null | undefined>(undefined, [Validators.required]),
			PositionalConstraint: new FormControl<PositionalConstraint | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p> */
	export interface FieldToMatch {

		/** Required */
		Type: MatchFieldType;
		Data?: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p> */
	export interface FieldToMatchFormProperties {

		/** Required */
		Type: FormControl<MatchFieldType | null | undefined>,
		Data: FormControl<string | null | undefined>,
	}
	export function CreateFieldToMatchFormGroup() {
		return new FormGroup<FieldToMatchFormProperties>({
			Type: new FormControl<MatchFieldType | null | undefined>(undefined, [Validators.required]),
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MatchFieldType { URI = 'URI', QUERY_STRING = 'QUERY_STRING', HEADER = 'HEADER', METHOD = 'METHOD', BODY = 'BODY', SINGLE_QUERY_ARG = 'SINGLE_QUERY_ARG', ALL_QUERY_ARGS = 'ALL_QUERY_ARGS' }

	export enum TextTransformation { NONE = 'NONE', COMPRESS_WHITE_SPACE = 'COMPRESS_WHITE_SPACE', HTML_ENTITY_DECODE = 'HTML_ENTITY_DECODE', LOWERCASE = 'LOWERCASE', CMD_LINE = 'CMD_LINE', URL_DECODE = 'URL_DECODE' }

	export enum PositionalConstraint { EXACTLY = 'EXACTLY', STARTS_WITH = 'STARTS_WITH', ENDS_WITH = 'ENDS_WITH', CONTAINS = 'CONTAINS', CONTAINS_WORD = 'CONTAINS_WORD' }

	export interface CreateByteMatchSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateByteMatchSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateByteMatchSetRequestFormGroup() {
		return new FormGroup<CreateByteMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFDisallowedNameException {
	}
	export interface WAFDisallowedNameExceptionFormProperties {
	}
	export function CreateWAFDisallowedNameExceptionFormGroup() {
		return new FormGroup<WAFDisallowedNameExceptionFormProperties>({
		});

	}

	export interface WAFInternalErrorException {
	}
	export interface WAFInternalErrorExceptionFormProperties {
	}
	export function CreateWAFInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFInternalErrorExceptionFormProperties>({
		});

	}

	export interface WAFInvalidAccountException {
	}
	export interface WAFInvalidAccountExceptionFormProperties {
	}
	export function CreateWAFInvalidAccountExceptionFormGroup() {
		return new FormGroup<WAFInvalidAccountExceptionFormProperties>({
		});

	}

	export interface WAFInvalidParameterException {
	}
	export interface WAFInvalidParameterExceptionFormProperties {
	}
	export function CreateWAFInvalidParameterExceptionFormGroup() {
		return new FormGroup<WAFInvalidParameterExceptionFormProperties>({
		});

	}

	export interface WAFStaleDataException {
	}
	export interface WAFStaleDataExceptionFormProperties {
	}
	export function CreateWAFStaleDataExceptionFormGroup() {
		return new FormGroup<WAFStaleDataExceptionFormProperties>({
		});

	}

	export interface WAFLimitsExceededException {
	}
	export interface WAFLimitsExceededExceptionFormProperties {
	}
	export function CreateWAFLimitsExceededExceptionFormGroup() {
		return new FormGroup<WAFLimitsExceededExceptionFormProperties>({
		});

	}

	export interface CreateGeoMatchSetResponse {
		GeoMatchSet?: GeoMatchSet;
		ChangeToken?: string;
	}
	export interface CreateGeoMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateGeoMatchSetResponseFormGroup() {
		return new FormGroup<CreateGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
	export interface GeoMatchSet {

		/** Required */
		GeoMatchSetId: string;
		Name?: string;

		/** Required */
		GeoMatchConstraints: Array<GeoMatchConstraint>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p> */
	export interface GeoMatchSetFormProperties {

		/** Required */
		GeoMatchSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchSetFormGroup() {
		return new FormGroup<GeoMatchSetFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p> */
	export interface GeoMatchConstraint {

		/** Required */
		Type: GeoMatchConstraintType;

		/** Required */
		Value: GeoMatchConstraintValue;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p> */
	export interface GeoMatchConstraintFormProperties {

		/** Required */
		Type: FormControl<GeoMatchConstraintType | null | undefined>,

		/** Required */
		Value: FormControl<GeoMatchConstraintValue | null | undefined>,
	}
	export function CreateGeoMatchConstraintFormGroup() {
		return new FormGroup<GeoMatchConstraintFormProperties>({
			Type: new FormControl<GeoMatchConstraintType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<GeoMatchConstraintValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoMatchConstraintType { Country = 'Country' }

	export enum GeoMatchConstraintValue { AF = 'AF', AX = 'AX', AL = 'AL', DZ = 'DZ', AS = 'AS', AD = 'AD', AO = 'AO', AI = 'AI', AQ = 'AQ', AG = 'AG', AR = 'AR', AM = 'AM', AW = 'AW', AU = 'AU', AT = 'AT', AZ = 'AZ', BS = 'BS', BH = 'BH', BD = 'BD', BB = 'BB', BY = 'BY', BE = 'BE', BZ = 'BZ', BJ = 'BJ', BM = 'BM', BT = 'BT', BO = 'BO', BQ = 'BQ', BA = 'BA', BW = 'BW', BV = 'BV', BR = 'BR', IO = 'IO', BN = 'BN', BG = 'BG', BF = 'BF', BI = 'BI', KH = 'KH', CM = 'CM', CA = 'CA', CV = 'CV', KY = 'KY', CF = 'CF', TD = 'TD', CL = 'CL', CN = 'CN', CX = 'CX', CC = 'CC', CO = 'CO', KM = 'KM', CG = 'CG', CD = 'CD', CK = 'CK', CR = 'CR', CI = 'CI', HR = 'HR', CU = 'CU', CW = 'CW', CY = 'CY', CZ = 'CZ', DK = 'DK', DJ = 'DJ', DM = 'DM', DO = 'DO', EC = 'EC', EG = 'EG', SV = 'SV', GQ = 'GQ', ER = 'ER', EE = 'EE', ET = 'ET', FK = 'FK', FO = 'FO', FJ = 'FJ', FI = 'FI', FR = 'FR', GF = 'GF', PF = 'PF', TF = 'TF', GA = 'GA', GM = 'GM', GE = 'GE', DE = 'DE', GH = 'GH', GI = 'GI', GR = 'GR', GL = 'GL', GD = 'GD', GP = 'GP', GU = 'GU', GT = 'GT', GG = 'GG', GN = 'GN', GW = 'GW', GY = 'GY', HT = 'HT', HM = 'HM', VA = 'VA', HN = 'HN', HK = 'HK', HU = 'HU', IS = 'IS', IN = 'IN', ID = 'ID', IR = 'IR', IQ = 'IQ', IE = 'IE', IM = 'IM', IL = 'IL', IT = 'IT', JM = 'JM', JP = 'JP', JE = 'JE', JO = 'JO', KZ = 'KZ', KE = 'KE', KI = 'KI', KP = 'KP', KR = 'KR', KW = 'KW', KG = 'KG', LA = 'LA', LV = 'LV', LB = 'LB', LS = 'LS', LR = 'LR', LY = 'LY', LI = 'LI', LT = 'LT', LU = 'LU', MO = 'MO', MK = 'MK', MG = 'MG', MW = 'MW', MY = 'MY', MV = 'MV', ML = 'ML', MT = 'MT', MH = 'MH', MQ = 'MQ', MR = 'MR', MU = 'MU', YT = 'YT', MX = 'MX', FM = 'FM', MD = 'MD', MC = 'MC', MN = 'MN', ME = 'ME', MS = 'MS', MA = 'MA', MZ = 'MZ', MM = 'MM', NA = 'NA', NR = 'NR', NP = 'NP', NL = 'NL', NC = 'NC', NZ = 'NZ', NI = 'NI', NE = 'NE', NG = 'NG', NU = 'NU', NF = 'NF', MP = 'MP', NO = 'NO', OM = 'OM', PK = 'PK', PW = 'PW', PS = 'PS', PA = 'PA', PG = 'PG', PY = 'PY', PE = 'PE', PH = 'PH', PN = 'PN', PL = 'PL', PT = 'PT', PR = 'PR', QA = 'QA', RE = 'RE', RO = 'RO', RU = 'RU', RW = 'RW', BL = 'BL', SH = 'SH', KN = 'KN', LC = 'LC', MF = 'MF', PM = 'PM', VC = 'VC', WS = 'WS', SM = 'SM', ST = 'ST', SA = 'SA', SN = 'SN', RS = 'RS', SC = 'SC', SL = 'SL', SG = 'SG', SX = 'SX', SK = 'SK', SI = 'SI', SB = 'SB', SO = 'SO', ZA = 'ZA', GS = 'GS', SS = 'SS', ES = 'ES', LK = 'LK', SD = 'SD', SR = 'SR', SJ = 'SJ', SZ = 'SZ', SE = 'SE', CH = 'CH', SY = 'SY', TW = 'TW', TJ = 'TJ', TZ = 'TZ', TH = 'TH', TL = 'TL', TG = 'TG', TK = 'TK', TO = 'TO', TT = 'TT', TN = 'TN', TR = 'TR', TM = 'TM', TC = 'TC', TV = 'TV', UG = 'UG', UA = 'UA', AE = 'AE', GB = 'GB', US = 'US', UM = 'UM', UY = 'UY', UZ = 'UZ', VU = 'VU', VE = 'VE', VN = 'VN', VG = 'VG', VI = 'VI', WF = 'WF', EH = 'EH', YE = 'YE', ZM = 'ZM', ZW = 'ZW' }

	export interface CreateGeoMatchSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateGeoMatchSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateGeoMatchSetRequestFormGroup() {
		return new FormGroup<CreateGeoMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIPSetResponse {
		IPSet?: IPSet;
		ChangeToken?: string;
	}
	export interface CreateIPSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetResponseFormGroup() {
		return new FormGroup<CreateIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
	export interface IPSet {

		/** Required */
		IPSetId: string;
		Name?: string;

		/** Required */
		IPSetDescriptors: Array<IPSetDescriptor>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> */
	export interface IPSetFormProperties {

		/** Required */
		IPSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIPSetFormGroup() {
		return new FormGroup<IPSetFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p> */
	export interface IPSetDescriptor {

		/** Required */
		Type: IPSetDescriptorType;

		/** Required */
		Value: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p> */
	export interface IPSetDescriptorFormProperties {

		/** Required */
		Type: FormControl<IPSetDescriptorType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateIPSetDescriptorFormGroup() {
		return new FormGroup<IPSetDescriptorFormProperties>({
			Type: new FormControl<IPSetDescriptorType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPSetDescriptorType { IPV4 = 'IPV4', IPV6 = 'IPV6' }

	export interface CreateIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetRequestFormGroup() {
		return new FormGroup<CreateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRateBasedRuleResponse {
		Rule?: RateBasedRule;
		ChangeToken?: string;
	}
	export interface CreateRateBasedRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRateBasedRuleResponseFormGroup() {
		return new FormGroup<CreateRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
	export interface RateBasedRule {

		/** Required */
		RuleId: string;
		Name?: string;
		MetricName?: string;

		/** Required */
		MatchPredicates: Array<Predicate>;

		/** Required */
		RateKey: RateKey;

		/** Required */
		RateLimit: number;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p> */
	export interface RateBasedRuleFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		RateKey: FormControl<RateKey | null | undefined>,

		/** Required */
		RateLimit: FormControl<number | null | undefined>,
	}
	export function CreateRateBasedRuleFormGroup() {
		return new FormGroup<RateBasedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			RateKey: new FormControl<RateKey | null | undefined>(undefined, [Validators.required]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p> */
	export interface Predicate {

		/** Required */
		Negated: boolean;

		/** Required */
		Type: PredicateType;

		/** Required */
		DataId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p> */
	export interface PredicateFormProperties {

		/** Required */
		Negated: FormControl<boolean | null | undefined>,

		/** Required */
		Type: FormControl<PredicateType | null | undefined>,

		/** Required */
		DataId: FormControl<string | null | undefined>,
	}
	export function CreatePredicateFormGroup() {
		return new FormGroup<PredicateFormProperties>({
			Negated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PredicateType | null | undefined>(undefined, [Validators.required]),
			DataId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PredicateType { IPMatch = 'IPMatch', ByteMatch = 'ByteMatch', SqlInjectionMatch = 'SqlInjectionMatch', GeoMatch = 'GeoMatch', SizeConstraint = 'SizeConstraint', XssMatch = 'XssMatch', RegexMatch = 'RegexMatch' }

	export enum RateKey { IP = 'IP' }

	export interface CreateRateBasedRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		MetricName: string;

		/** Required */
		RateKey: RateKey;

		/** Required */
		RateLimit: number;

		/** Required */
		ChangeToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateRateBasedRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		RateKey: FormControl<RateKey | null | undefined>,

		/** Required */
		RateLimit: FormControl<number | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRateBasedRuleRequestFormGroup() {
		return new FormGroup<CreateRateBasedRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RateKey: new FormControl<RateKey | null | undefined>(undefined, [Validators.required]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
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

	export interface WAFTagOperationException {
	}
	export interface WAFTagOperationExceptionFormProperties {
	}
	export function CreateWAFTagOperationExceptionFormGroup() {
		return new FormGroup<WAFTagOperationExceptionFormProperties>({
		});

	}

	export interface WAFTagOperationInternalErrorException {
	}
	export interface WAFTagOperationInternalErrorExceptionFormProperties {
	}
	export function CreateWAFTagOperationInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFTagOperationInternalErrorExceptionFormProperties>({
		});

	}

	export interface WAFBadRequestException {
	}
	export interface WAFBadRequestExceptionFormProperties {
	}
	export function CreateWAFBadRequestExceptionFormGroup() {
		return new FormGroup<WAFBadRequestExceptionFormProperties>({
		});

	}

	export interface CreateRegexMatchSetResponse {
		RegexMatchSet?: RegexMatchSet;
		ChangeToken?: string;
	}
	export interface CreateRegexMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexMatchSetResponseFormGroup() {
		return new FormGroup<CreateRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface RegexMatchSet {
		RegexMatchSetId?: string;
		Name?: string;
		RegexMatchTuples?: Array<RegexMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p> */
	export interface RegexMatchSetFormProperties {
		RegexMatchSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchSetFormGroup() {
		return new FormGroup<RegexMatchSetFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> */
	export interface RegexMatchTuple {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: TextTransformation;

		/** Required */
		RegexPatternSetId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> */
	export interface RegexMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<TextTransformation | null | undefined>,

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchTupleFormGroup() {
		return new FormGroup<RegexMatchTupleFormProperties>({
			TextTransformation: new FormControl<TextTransformation | null | undefined>(undefined, [Validators.required]),
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRegexMatchSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateRegexMatchSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexMatchSetRequestFormGroup() {
		return new FormGroup<CreateRegexMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRegexPatternSetResponse {
		RegexPatternSet?: RegexPatternSet;
		ChangeToken?: string;
	}
	export interface CreateRegexPatternSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexPatternSetResponseFormGroup() {
		return new FormGroup<CreateRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
	export interface RegexPatternSet {

		/** Required */
		RegexPatternSetId: string;
		Name?: string;

		/** Required */
		RegexPatternStrings: Array<string>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> */
	export interface RegexPatternSetFormProperties {

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetFormGroup() {
		return new FormGroup<RegexPatternSetFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRegexPatternSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateRegexPatternSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexPatternSetRequestFormGroup() {
		return new FormGroup<CreateRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRuleResponse {
		Rule?: Rule;
		ChangeToken?: string;
	}
	export interface CreateRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleResponseFormGroup() {
		return new FormGroup<CreateRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
	export interface Rule {

		/** Required */
		RuleId: string;
		Name?: string;
		MetricName?: string;

		/** Required */
		Predicates: Array<Predicate>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p> */
	export interface RuleFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		MetricName: string;

		/** Required */
		ChangeToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRuleGroupResponse {
		RuleGroup?: RuleGroup;
		ChangeToken?: string;
	}
	export interface CreateRuleGroupResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupResponseFormGroup() {
		return new FormGroup<CreateRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
	export interface RuleGroup {

		/** Required */
		RuleGroupId: string;
		Name?: string;
		MetricName?: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> */
	export interface RuleGroupFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupFormGroup() {
		return new FormGroup<RuleGroupFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		MetricName: string;

		/** Required */
		ChangeToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateRuleGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupRequestFormGroup() {
		return new FormGroup<CreateRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSizeConstraintSetResponse {
		SizeConstraintSet?: SizeConstraintSet;
		ChangeToken?: string;
	}
	export interface CreateSizeConstraintSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSizeConstraintSetResponseFormGroup() {
		return new FormGroup<CreateSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
	export interface SizeConstraintSet {

		/** Required */
		SizeConstraintSetId: string;
		Name?: string;

		/** Required */
		SizeConstraints: Array<SizeConstraint>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p> */
	export interface SizeConstraintSetFormProperties {

		/** Required */
		SizeConstraintSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSizeConstraintSetFormGroup() {
		return new FormGroup<SizeConstraintSetFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> */
	export interface SizeConstraint {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: TextTransformation;

		/** Required */
		ComparisonOperator: ComparisonOperator;

		/** Required */
		Size: number;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> */
	export interface SizeConstraintFormProperties {

		/** Required */
		TextTransformation: FormControl<TextTransformation | null | undefined>,

		/** Required */
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateSizeConstraintFormGroup() {
		return new FormGroup<SizeConstraintFormProperties>({
			TextTransformation: new FormControl<TextTransformation | null | undefined>(undefined, [Validators.required]),
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComparisonOperator { EQ = 'EQ', NE = 'NE', LE = 'LE', LT = 'LT', GE = 'GE', GT = 'GT' }

	export interface CreateSizeConstraintSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}
	export interface CreateSizeConstraintSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSizeConstraintSetRequestFormGroup() {
		return new FormGroup<CreateSizeConstraintSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a <code>CreateSqlInjectionMatchSet</code> request. */
	export interface CreateSqlInjectionMatchSetResponse {
		SqlInjectionMatchSet?: SqlInjectionMatchSet;
		ChangeToken?: string;
	}

	/** The response to a <code>CreateSqlInjectionMatchSet</code> request. */
	export interface CreateSqlInjectionMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<CreateSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
	export interface SqlInjectionMatchSet {

		/** Required */
		SqlInjectionMatchSetId: string;
		Name?: string;

		/** Required */
		SqlInjectionMatchTuples: Array<SqlInjectionMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p> */
	export interface SqlInjectionMatchSetFormProperties {

		/** Required */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetFormGroup() {
		return new FormGroup<SqlInjectionMatchSetFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface SqlInjectionMatchTuple {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: TextTransformation;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface SqlInjectionMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<TextTransformation | null | undefined>,
	}
	export function CreateSqlInjectionMatchTupleFormGroup() {
		return new FormGroup<SqlInjectionMatchTupleFormProperties>({
			TextTransformation: new FormControl<TextTransformation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a <a>SqlInjectionMatchSet</a>. */
	export interface CreateSqlInjectionMatchSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}

	/** A request to create a <a>SqlInjectionMatchSet</a>. */
	export interface CreateSqlInjectionMatchSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<CreateSqlInjectionMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebACLResponse {
		WebACL?: WebACL;
		ChangeToken?: string;
	}
	export interface CreateWebACLResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLResponseFormGroup() {
		return new FormGroup<CreateWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
	export interface WebACL {

		/** Required */
		WebACLId: string;
		Name?: string;
		MetricName?: string;

		/** Required */
		DefaultAction: WafAction;

		/** Required */
		Rules: Array<ActivatedRule>;
		WebACLArn?: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p> */
	export interface WebACLFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		WebACLArn: FormControl<string | null | undefined>,
	}
	export function CreateWebACLFormGroup() {
		return new FormGroup<WebACLFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			WebACLArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
	export interface WafAction {

		/** Required */
		Type: WafActionType;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p> */
	export interface WafActionFormProperties {

		/** Required */
		Type: FormControl<WafActionType | null | undefined>,
	}
	export function CreateWafActionFormGroup() {
		return new FormGroup<WafActionFormProperties>({
			Type: new FormControl<WafActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WafActionType { BLOCK = 'BLOCK', ALLOW = 'ALLOW', COUNT = 'COUNT' }


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p> */
	export interface ActivatedRule {

		/** Required */
		Priority: number;

		/** Required */
		RuleId: string;
		Action?: WafAction;
		OverrideAction?: WafOverrideAction;
		Type?: WafRuleType;
		ExcludedRules?: Array<ExcludedRule>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p> */
	export interface ActivatedRuleFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<WafRuleType | null | undefined>,
	}
	export function CreateActivatedRuleFormGroup() {
		return new FormGroup<ActivatedRuleFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<WafRuleType | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p> */
	export interface WafOverrideAction {

		/** Required */
		Type: WafOverrideActionType;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p> */
	export interface WafOverrideActionFormProperties {

		/** Required */
		Type: FormControl<WafOverrideActionType | null | undefined>,
	}
	export function CreateWafOverrideActionFormGroup() {
		return new FormGroup<WafOverrideActionFormProperties>({
			Type: new FormControl<WafOverrideActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WafOverrideActionType { NONE = 'NONE', COUNT = 'COUNT' }

	export enum WafRuleType { REGULAR = 'REGULAR', RATE_BASED = 'RATE_BASED', GROUP = 'GROUP' }


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p> */
	export interface ExcludedRule {

		/** Required */
		RuleId: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p> */
	export interface ExcludedRuleFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateExcludedRuleFormGroup() {
		return new FormGroup<ExcludedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebACLRequest {

		/** Required */
		Name: string;

		/** Required */
		MetricName: string;

		/** Required */
		DefaultAction: WafAction;

		/** Required */
		ChangeToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateWebACLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLRequestFormGroup() {
		return new FormGroup<CreateWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebACLMigrationStackResponse {

		/** Required */
		S3ObjectUrl: string;
	}
	export interface CreateWebACLMigrationStackResponseFormProperties {

		/** Required */
		S3ObjectUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLMigrationStackResponseFormGroup() {
		return new FormGroup<CreateWebACLMigrationStackResponseFormProperties>({
			S3ObjectUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebACLMigrationStackRequest {

		/** Required */
		WebACLId: string;

		/** Required */
		S3BucketName: string;

		/** Required */
		IgnoreUnsupportedType: boolean;
	}
	export interface CreateWebACLMigrationStackRequestFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		IgnoreUnsupportedType: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateWebACLMigrationStackRequestFormGroup() {
		return new FormGroup<CreateWebACLMigrationStackRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IgnoreUnsupportedType: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInvalidOperationException {
	}
	export interface WAFInvalidOperationExceptionFormProperties {
	}
	export function CreateWAFInvalidOperationExceptionFormGroup() {
		return new FormGroup<WAFInvalidOperationExceptionFormProperties>({
		});

	}

	export interface WAFNonexistentItemException {
	}
	export interface WAFNonexistentItemExceptionFormProperties {
	}
	export function CreateWAFNonexistentItemExceptionFormGroup() {
		return new FormGroup<WAFNonexistentItemExceptionFormProperties>({
		});

	}

	export interface WAFEntityMigrationException {
	}
	export interface WAFEntityMigrationExceptionFormProperties {
	}
	export function CreateWAFEntityMigrationExceptionFormGroup() {
		return new FormGroup<WAFEntityMigrationExceptionFormProperties>({
		});

	}


	/** The response to a <code>CreateXssMatchSet</code> request. */
	export interface CreateXssMatchSetResponse {
		XssMatchSet?: XssMatchSet;
		ChangeToken?: string;
	}

	/** The response to a <code>CreateXssMatchSet</code> request. */
	export interface CreateXssMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateXssMatchSetResponseFormGroup() {
		return new FormGroup<CreateXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
	export interface XssMatchSet {

		/** Required */
		XssMatchSetId: string;
		Name?: string;

		/** Required */
		XssMatchTuples: Array<XssMatchTuple>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p> */
	export interface XssMatchSetFormProperties {

		/** Required */
		XssMatchSetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateXssMatchSetFormGroup() {
		return new FormGroup<XssMatchSetFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface XssMatchTuple {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformation: TextTransformation;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p> */
	export interface XssMatchTupleFormProperties {

		/** Required */
		TextTransformation: FormControl<TextTransformation | null | undefined>,
	}
	export function CreateXssMatchTupleFormGroup() {
		return new FormGroup<XssMatchTupleFormProperties>({
			TextTransformation: new FormControl<TextTransformation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create an <a>XssMatchSet</a>. */
	export interface CreateXssMatchSetRequest {

		/** Required */
		Name: string;

		/** Required */
		ChangeToken: string;
	}

	/** A request to create an <a>XssMatchSet</a>. */
	export interface CreateXssMatchSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateXssMatchSetRequestFormGroup() {
		return new FormGroup<CreateXssMatchSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteByteMatchSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteByteMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteByteMatchSetResponseFormGroup() {
		return new FormGroup<DeleteByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteByteMatchSetRequest {

		/** Required */
		ByteMatchSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteByteMatchSetRequestFormProperties {

		/** Required */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteByteMatchSetRequestFormGroup() {
		return new FormGroup<DeleteByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFReferencedItemException {
	}
	export interface WAFReferencedItemExceptionFormProperties {
	}
	export function CreateWAFReferencedItemExceptionFormGroup() {
		return new FormGroup<WAFReferencedItemExceptionFormProperties>({
		});

	}

	export interface WAFNonEmptyEntityException {
	}
	export interface WAFNonEmptyEntityExceptionFormProperties {
	}
	export function CreateWAFNonEmptyEntityExceptionFormGroup() {
		return new FormGroup<WAFNonEmptyEntityExceptionFormProperties>({
		});

	}

	export interface DeleteGeoMatchSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteGeoMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGeoMatchSetResponseFormGroup() {
		return new FormGroup<DeleteGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGeoMatchSetRequest {

		/** Required */
		GeoMatchSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteGeoMatchSetRequestFormProperties {

		/** Required */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGeoMatchSetRequestFormGroup() {
		return new FormGroup<DeleteGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIPSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteIPSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIPSetResponseFormGroup() {
		return new FormGroup<DeleteIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteIPSetRequest {

		/** Required */
		IPSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteIPSetRequestFormProperties {

		/** Required */
		IPSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIPSetRequestFormGroup() {
		return new FormGroup<DeleteIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLoggingConfigurationResponse {
	}
	export interface DeleteLoggingConfigurationResponseFormProperties {
	}
	export function CreateDeleteLoggingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteLoggingConfigurationRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteLoggingConfigurationRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePermissionPolicyResponse {
	}
	export interface DeletePermissionPolicyResponseFormProperties {
	}
	export function CreateDeletePermissionPolicyResponseFormGroup() {
		return new FormGroup<DeletePermissionPolicyResponseFormProperties>({
		});

	}

	export interface DeletePermissionPolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeletePermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionPolicyRequestFormGroup() {
		return new FormGroup<DeletePermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRateBasedRuleResponse {
		ChangeToken?: string;
	}
	export interface DeleteRateBasedRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRateBasedRuleResponseFormGroup() {
		return new FormGroup<DeleteRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRateBasedRuleRequest {

		/** Required */
		RuleId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteRateBasedRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRateBasedRuleRequestFormGroup() {
		return new FormGroup<DeleteRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRegexMatchSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteRegexMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexMatchSetResponseFormGroup() {
		return new FormGroup<DeleteRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRegexMatchSetRequest {

		/** Required */
		RegexMatchSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteRegexMatchSetRequestFormProperties {

		/** Required */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexMatchSetRequestFormGroup() {
		return new FormGroup<DeleteRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRegexPatternSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteRegexPatternSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexPatternSetResponseFormGroup() {
		return new FormGroup<DeleteRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRegexPatternSetRequest {

		/** Required */
		RegexPatternSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteRegexPatternSetRequestFormProperties {

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexPatternSetRequestFormGroup() {
		return new FormGroup<DeleteRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleResponse {
		ChangeToken?: string;
	}
	export interface DeleteRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleResponseFormGroup() {
		return new FormGroup<DeleteRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRuleRequest {

		/** Required */
		RuleId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleGroupResponse {
		ChangeToken?: string;
	}
	export interface DeleteRuleGroupResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleGroupResponseFormGroup() {
		return new FormGroup<DeleteRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRuleGroupRequest {

		/** Required */
		RuleGroupId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteRuleGroupRequestFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleGroupRequestFormGroup() {
		return new FormGroup<DeleteRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSizeConstraintSetResponse {
		ChangeToken?: string;
	}
	export interface DeleteSizeConstraintSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSizeConstraintSetResponseFormGroup() {
		return new FormGroup<DeleteSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSizeConstraintSetRequest {

		/** Required */
		SizeConstraintSetId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteSizeConstraintSetRequestFormProperties {

		/** Required */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSizeConstraintSetRequestFormGroup() {
		return new FormGroup<DeleteSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetResponse {
		ChangeToken?: string;
	}

	/** The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<DeleteSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetRequest {

		/** Required */
		SqlInjectionMatchSetId: string;

		/** Required */
		ChangeToken: string;
	}

	/** A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF. */
	export interface DeleteSqlInjectionMatchSetRequestFormProperties {

		/** Required */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<DeleteSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWebACLResponse {
		ChangeToken?: string;
	}
	export interface DeleteWebACLResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebACLResponseFormGroup() {
		return new FormGroup<DeleteWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWebACLRequest {

		/** Required */
		WebACLId: string;

		/** Required */
		ChangeToken: string;
	}
	export interface DeleteWebACLRequestFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebACLRequestFormGroup() {
		return new FormGroup<DeleteWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetResponse {
		ChangeToken?: string;
	}

	/** The response to a request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteXssMatchSetResponseFormGroup() {
		return new FormGroup<DeleteXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetRequest {

		/** Required */
		XssMatchSetId: string;

		/** Required */
		ChangeToken: string;
	}

	/** A request to delete an <a>XssMatchSet</a> from AWS WAF. */
	export interface DeleteXssMatchSetRequestFormProperties {

		/** Required */
		XssMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteXssMatchSetRequestFormGroup() {
		return new FormGroup<DeleteXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetByteMatchSetResponse {
		ByteMatchSet?: ByteMatchSet;
	}
	export interface GetByteMatchSetResponseFormProperties {
	}
	export function CreateGetByteMatchSetResponseFormGroup() {
		return new FormGroup<GetByteMatchSetResponseFormProperties>({
		});

	}

	export interface GetByteMatchSetRequest {

		/** Required */
		ByteMatchSetId: string;
	}
	export interface GetByteMatchSetRequestFormProperties {

		/** Required */
		ByteMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetByteMatchSetRequestFormGroup() {
		return new FormGroup<GetByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetChangeTokenResponse {
		ChangeToken?: string;
	}
	export interface GetChangeTokenResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChangeTokenResponseFormGroup() {
		return new FormGroup<GetChangeTokenResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChangeTokenRequest {
	}
	export interface GetChangeTokenRequestFormProperties {
	}
	export function CreateGetChangeTokenRequestFormGroup() {
		return new FormGroup<GetChangeTokenRequestFormProperties>({
		});

	}

	export interface GetChangeTokenStatusResponse {
		ChangeTokenStatus?: ChangeTokenStatus;
	}
	export interface GetChangeTokenStatusResponseFormProperties {
		ChangeTokenStatus: FormControl<ChangeTokenStatus | null | undefined>,
	}
	export function CreateGetChangeTokenStatusResponseFormGroup() {
		return new FormGroup<GetChangeTokenStatusResponseFormProperties>({
			ChangeTokenStatus: new FormControl<ChangeTokenStatus | null | undefined>(undefined),
		});

	}

	export enum ChangeTokenStatus { PROVISIONED = 'PROVISIONED', PENDING = 'PENDING', INSYNC = 'INSYNC' }

	export interface GetChangeTokenStatusRequest {

		/** Required */
		ChangeToken: string;
	}
	export interface GetChangeTokenStatusRequestFormProperties {

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChangeTokenStatusRequestFormGroup() {
		return new FormGroup<GetChangeTokenStatusRequestFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGeoMatchSetResponse {
		GeoMatchSet?: GeoMatchSet;
	}
	export interface GetGeoMatchSetResponseFormProperties {
	}
	export function CreateGetGeoMatchSetResponseFormGroup() {
		return new FormGroup<GetGeoMatchSetResponseFormProperties>({
		});

	}

	export interface GetGeoMatchSetRequest {

		/** Required */
		GeoMatchSetId: string;
	}
	export interface GetGeoMatchSetRequestFormProperties {

		/** Required */
		GeoMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetGeoMatchSetRequestFormGroup() {
		return new FormGroup<GetGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIPSetResponse {
		IPSet?: IPSet;
	}
	export interface GetIPSetResponseFormProperties {
	}
	export function CreateGetIPSetResponseFormGroup() {
		return new FormGroup<GetIPSetResponseFormProperties>({
		});

	}

	export interface GetIPSetRequest {

		/** Required */
		IPSetId: string;
	}
	export interface GetIPSetRequestFormProperties {

		/** Required */
		IPSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetIPSetRequestFormGroup() {
		return new FormGroup<GetIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface GetLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetLoggingConfigurationResponseFormProperties>({
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
	export interface LoggingConfiguration {

		/** Required */
		ResourceArn: string;

		/** Required */
		LogDestinationConfigs: Array<string>;
		RedactedFields?: Array<FieldToMatch>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p> */
	export interface LoggingConfigurationFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoggingConfigurationRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetLoggingConfigurationRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPermissionPolicyResponse {
		Policy?: string;
	}
	export interface GetPermissionPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyResponseFormGroup() {
		return new FormGroup<GetPermissionPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPermissionPolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetPermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyRequestFormGroup() {
		return new FormGroup<GetPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRateBasedRuleResponse {
		Rule?: RateBasedRule;
	}
	export interface GetRateBasedRuleResponseFormProperties {
	}
	export function CreateGetRateBasedRuleResponseFormGroup() {
		return new FormGroup<GetRateBasedRuleResponseFormProperties>({
		});

	}

	export interface GetRateBasedRuleRequest {

		/** Required */
		RuleId: string;
	}
	export interface GetRateBasedRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleRequestFormGroup() {
		return new FormGroup<GetRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRateBasedRuleManagedKeysResponse {
		ManagedKeys?: Array<string>;
		NextMarker?: string;
	}
	export interface GetRateBasedRuleManagedKeysResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleManagedKeysResponseFormGroup() {
		return new FormGroup<GetRateBasedRuleManagedKeysResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRateBasedRuleManagedKeysRequest {

		/** Required */
		RuleId: string;
		NextMarker?: string;
	}
	export interface GetRateBasedRuleManagedKeysRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedRuleManagedKeysRequestFormGroup() {
		return new FormGroup<GetRateBasedRuleManagedKeysRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegexMatchSetResponse {
		RegexMatchSet?: RegexMatchSet;
	}
	export interface GetRegexMatchSetResponseFormProperties {
	}
	export function CreateGetRegexMatchSetResponseFormGroup() {
		return new FormGroup<GetRegexMatchSetResponseFormProperties>({
		});

	}

	export interface GetRegexMatchSetRequest {

		/** Required */
		RegexMatchSetId: string;
	}
	export interface GetRegexMatchSetRequestFormProperties {

		/** Required */
		RegexMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexMatchSetRequestFormGroup() {
		return new FormGroup<GetRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRegexPatternSetResponse {
		RegexPatternSet?: RegexPatternSet;
	}
	export interface GetRegexPatternSetResponseFormProperties {
	}
	export function CreateGetRegexPatternSetResponseFormGroup() {
		return new FormGroup<GetRegexPatternSetResponseFormProperties>({
		});

	}

	export interface GetRegexPatternSetRequest {

		/** Required */
		RegexPatternSetId: string;
	}
	export interface GetRegexPatternSetRequestFormProperties {

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexPatternSetRequestFormGroup() {
		return new FormGroup<GetRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRuleResponse {
		Rule?: Rule;
	}
	export interface GetRuleResponseFormProperties {
	}
	export function CreateGetRuleResponseFormGroup() {
		return new FormGroup<GetRuleResponseFormProperties>({
		});

	}

	export interface GetRuleRequest {

		/** Required */
		RuleId: string;
	}
	export interface GetRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleRequestFormGroup() {
		return new FormGroup<GetRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRuleGroupResponse {
		RuleGroup?: RuleGroup;
	}
	export interface GetRuleGroupResponseFormProperties {
	}
	export function CreateGetRuleGroupResponseFormGroup() {
		return new FormGroup<GetRuleGroupResponseFormProperties>({
		});

	}

	export interface GetRuleGroupRequest {

		/** Required */
		RuleGroupId: string;
	}
	export interface GetRuleGroupRequestFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleGroupRequestFormGroup() {
		return new FormGroup<GetRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSampledRequestsResponse {
		SampledRequests?: Array<SampledHTTPRequest>;
		PopulationSize?: number | null;
		TimeWindow?: TimeWindow;
	}
	export interface GetSampledRequestsResponseFormProperties {
		PopulationSize: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsResponseFormGroup() {
		return new FormGroup<GetSampledRequestsResponseFormProperties>({
			PopulationSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p> */
	export interface SampledHTTPRequest {

		/** Required */
		Request: HTTPRequest;

		/** Required */
		Weight: number;
		Timestamp?: Date;
		Action?: string;
		RuleWithinRuleGroup?: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p> */
	export interface SampledHTTPRequestFormProperties {

		/** Required */
		Weight: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		Action: FormControl<string | null | undefined>,
		RuleWithinRuleGroup: FormControl<string | null | undefined>,
	}
	export function CreateSampledHTTPRequestFormGroup() {
		return new FormGroup<SampledHTTPRequestFormProperties>({
			Weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			RuleWithinRuleGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPRequest {
		ClientIP?: string;
		Country?: string;
		URI?: string;
		Method?: string;
		HTTPVersion?: string;
		Headers?: Array<HTTPHeader>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPRequestFormProperties {
		ClientIP: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		URI: FormControl<string | null | undefined>,
		Method: FormControl<string | null | undefined>,
		HTTPVersion: FormControl<string | null | undefined>,
	}
	export function CreateHTTPRequestFormGroup() {
		return new FormGroup<HTTPRequestFormProperties>({
			ClientIP: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
			Method: new FormControl<string | null | undefined>(undefined),
			HTTPVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPHeader {
		Name?: string;
		Value?: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p> */
	export interface HTTPHeaderFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateHTTPHeaderFormGroup() {
		return new FormGroup<HTTPHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
	export interface TimeWindow {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
	export interface TimeWindowFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSampledRequestsRequest {

		/** Required */
		WebAclId: string;

		/** Required */
		RuleId: string;

		/** Required */
		TimeWindow: TimeWindow;

		/** Required */
		MaxItems: number;
	}
	export interface GetSampledRequestsRequestFormProperties {

		/** Required */
		WebAclId: FormControl<string | null | undefined>,

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsRequestFormGroup() {
		return new FormGroup<GetSampledRequestsRequestFormProperties>({
			WebAclId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSizeConstraintSetResponse {
		SizeConstraintSet?: SizeConstraintSet;
	}
	export interface GetSizeConstraintSetResponseFormProperties {
	}
	export function CreateGetSizeConstraintSetResponseFormGroup() {
		return new FormGroup<GetSizeConstraintSetResponseFormProperties>({
		});

	}

	export interface GetSizeConstraintSetRequest {

		/** Required */
		SizeConstraintSetId: string;
	}
	export interface GetSizeConstraintSetRequestFormProperties {

		/** Required */
		SizeConstraintSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetSizeConstraintSetRequestFormGroup() {
		return new FormGroup<GetSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a <a>GetSqlInjectionMatchSet</a> request. */
	export interface GetSqlInjectionMatchSetResponse {
		SqlInjectionMatchSet?: SqlInjectionMatchSet;
	}

	/** The response to a <a>GetSqlInjectionMatchSet</a> request. */
	export interface GetSqlInjectionMatchSetResponseFormProperties {
	}
	export function CreateGetSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<GetSqlInjectionMatchSetResponseFormProperties>({
		});

	}


	/** A request to get a <a>SqlInjectionMatchSet</a>. */
	export interface GetSqlInjectionMatchSetRequest {

		/** Required */
		SqlInjectionMatchSetId: string;
	}

	/** A request to get a <a>SqlInjectionMatchSet</a>. */
	export interface GetSqlInjectionMatchSetRequestFormProperties {

		/** Required */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<GetSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWebACLResponse {
		WebACL?: WebACL;
	}
	export interface GetWebACLResponseFormProperties {
	}
	export function CreateGetWebACLResponseFormGroup() {
		return new FormGroup<GetWebACLResponseFormProperties>({
		});

	}

	export interface GetWebACLRequest {

		/** Required */
		WebACLId: string;
	}
	export interface GetWebACLRequestFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLRequestFormGroup() {
		return new FormGroup<GetWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a <a>GetXssMatchSet</a> request. */
	export interface GetXssMatchSetResponse {
		XssMatchSet?: XssMatchSet;
	}

	/** The response to a <a>GetXssMatchSet</a> request. */
	export interface GetXssMatchSetResponseFormProperties {
	}
	export function CreateGetXssMatchSetResponseFormGroup() {
		return new FormGroup<GetXssMatchSetResponseFormProperties>({
		});

	}


	/** A request to get an <a>XssMatchSet</a>. */
	export interface GetXssMatchSetRequest {

		/** Required */
		XssMatchSetId: string;
	}

	/** A request to get an <a>XssMatchSet</a>. */
	export interface GetXssMatchSetRequestFormProperties {

		/** Required */
		XssMatchSetId: FormControl<string | null | undefined>,
	}
	export function CreateGetXssMatchSetRequestFormGroup() {
		return new FormGroup<GetXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListActivatedRulesInRuleGroupResponse {
		NextMarker?: string;
		ActivatedRules?: Array<ActivatedRule>;
	}
	export interface ListActivatedRulesInRuleGroupResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListActivatedRulesInRuleGroupResponseFormGroup() {
		return new FormGroup<ListActivatedRulesInRuleGroupResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListActivatedRulesInRuleGroupRequest {
		RuleGroupId?: string;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListActivatedRulesInRuleGroupRequestFormProperties {
		RuleGroupId: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListActivatedRulesInRuleGroupRequestFormGroup() {
		return new FormGroup<ListActivatedRulesInRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListByteMatchSetsResponse {
		NextMarker?: string;
		ByteMatchSets?: Array<ByteMatchSetSummary>;
	}
	export interface ListByteMatchSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListByteMatchSetsResponseFormGroup() {
		return new FormGroup<ListByteMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p> */
	export interface ByteMatchSetSummary {

		/** Required */
		ByteMatchSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p> */
	export interface ByteMatchSetSummaryFormProperties {

		/** Required */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateByteMatchSetSummaryFormGroup() {
		return new FormGroup<ByteMatchSetSummaryFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListByteMatchSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListByteMatchSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListByteMatchSetsRequestFormGroup() {
		return new FormGroup<ListByteMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGeoMatchSetsResponse {
		NextMarker?: string;
		GeoMatchSets?: Array<GeoMatchSetSummary>;
	}
	export interface ListGeoMatchSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListGeoMatchSetsResponseFormGroup() {
		return new FormGroup<ListGeoMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p> */
	export interface GeoMatchSetSummary {

		/** Required */
		GeoMatchSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p> */
	export interface GeoMatchSetSummaryFormProperties {

		/** Required */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchSetSummaryFormGroup() {
		return new FormGroup<GeoMatchSetSummaryFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGeoMatchSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListGeoMatchSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListGeoMatchSetsRequestFormGroup() {
		return new FormGroup<ListGeoMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsResponse {
		NextMarker?: string;
		IPSets?: Array<IPSetSummary>;
	}
	export interface ListIPSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListIPSetsResponseFormGroup() {
		return new FormGroup<ListIPSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p> */
	export interface IPSetSummary {

		/** Required */
		IPSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p> */
	export interface IPSetSummaryFormProperties {

		/** Required */
		IPSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIPSetSummaryFormGroup() {
		return new FormGroup<IPSetSummaryFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIPSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListIPSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListIPSetsRequestFormGroup() {
		return new FormGroup<ListIPSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLoggingConfigurationsResponse {
		LoggingConfigurations?: Array<LoggingConfiguration>;
		NextMarker?: string;
	}
	export interface ListLoggingConfigurationsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsResponseFormGroup() {
		return new FormGroup<ListLoggingConfigurationsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLoggingConfigurationsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListLoggingConfigurationsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListLoggingConfigurationsRequestFormGroup() {
		return new FormGroup<ListLoggingConfigurationsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRateBasedRulesResponse {
		NextMarker?: string;
		Rules?: Array<RuleSummary>;
	}
	export interface ListRateBasedRulesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRateBasedRulesResponseFormGroup() {
		return new FormGroup<ListRateBasedRulesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p> */
	export interface RuleSummary {

		/** Required */
		RuleId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p> */
	export interface RuleSummaryFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRateBasedRulesRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRateBasedRulesRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRateBasedRulesRequestFormGroup() {
		return new FormGroup<ListRateBasedRulesRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRegexMatchSetsResponse {
		NextMarker?: string;
		RegexMatchSets?: Array<RegexMatchSetSummary>;
	}
	export interface ListRegexMatchSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRegexMatchSetsResponseFormGroup() {
		return new FormGroup<ListRegexMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p> */
	export interface RegexMatchSetSummary {

		/** Required */
		RegexMatchSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p> */
	export interface RegexMatchSetSummaryFormProperties {

		/** Required */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchSetSummaryFormGroup() {
		return new FormGroup<RegexMatchSetSummaryFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRegexMatchSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRegexMatchSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRegexMatchSetsRequestFormGroup() {
		return new FormGroup<ListRegexMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRegexPatternSetsResponse {
		NextMarker?: string;
		RegexPatternSets?: Array<RegexPatternSetSummary>;
	}
	export interface ListRegexPatternSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRegexPatternSetsResponseFormGroup() {
		return new FormGroup<ListRegexPatternSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p> */
	export interface RegexPatternSetSummary {

		/** Required */
		RegexPatternSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p> */
	export interface RegexPatternSetSummaryFormProperties {

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetSummaryFormGroup() {
		return new FormGroup<RegexPatternSetSummaryFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRegexPatternSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRegexPatternSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRegexPatternSetsRequestFormGroup() {
		return new FormGroup<ListRegexPatternSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRuleGroupsResponse {
		NextMarker?: string;
		RuleGroups?: Array<RuleGroupSummary>;
	}
	export interface ListRuleGroupsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRuleGroupsResponseFormGroup() {
		return new FormGroup<ListRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p> */
	export interface RuleGroupSummary {

		/** Required */
		RuleGroupId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p> */
	export interface RuleGroupSummaryFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSummaryFormGroup() {
		return new FormGroup<RuleGroupSummaryFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRuleGroupsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRuleGroupsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRuleGroupsRequestFormGroup() {
		return new FormGroup<ListRuleGroupsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRulesResponse {
		NextMarker?: string;
		Rules?: Array<RuleSummary>;
	}
	export interface ListRulesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRulesRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRulesRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSizeConstraintSetsResponse {
		NextMarker?: string;
		SizeConstraintSets?: Array<SizeConstraintSetSummary>;
	}
	export interface ListSizeConstraintSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSizeConstraintSetsResponseFormGroup() {
		return new FormGroup<ListSizeConstraintSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetSummary {

		/** Required */
		SizeConstraintSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetSummaryFormProperties {

		/** Required */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSizeConstraintSetSummaryFormGroup() {
		return new FormGroup<SizeConstraintSetSummaryFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSizeConstraintSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListSizeConstraintSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSizeConstraintSetsRequestFormGroup() {
		return new FormGroup<ListSizeConstraintSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response to a <a>ListSqlInjectionMatchSets</a> request. */
	export interface ListSqlInjectionMatchSetsResponse {
		NextMarker?: string;
		SqlInjectionMatchSets?: Array<SqlInjectionMatchSetSummary>;
	}

	/** The response to a <a>ListSqlInjectionMatchSets</a> request. */
	export interface ListSqlInjectionMatchSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSqlInjectionMatchSetsResponseFormGroup() {
		return new FormGroup<ListSqlInjectionMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetSummary {

		/** Required */
		SqlInjectionMatchSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetSummaryFormProperties {

		/** Required */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetSummaryFormGroup() {
		return new FormGroup<SqlInjectionMatchSetSummaryFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account. */
	export interface ListSqlInjectionMatchSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}

	/** A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account. */
	export interface ListSqlInjectionMatchSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSqlInjectionMatchSetsRequestFormGroup() {
		return new FormGroup<ListSqlInjectionMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSubscribedRuleGroupsResponse {
		NextMarker?: string;
		RuleGroups?: Array<SubscribedRuleGroupSummary>;
	}
	export interface ListSubscribedRuleGroupsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListSubscribedRuleGroupsResponseFormGroup() {
		return new FormGroup<ListSubscribedRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p> */
	export interface SubscribedRuleGroupSummary {

		/** Required */
		RuleGroupId: string;

		/** Required */
		Name: string;

		/** Required */
		MetricName: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p> */
	export interface SubscribedRuleGroupSummaryFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateSubscribedRuleGroupSummaryFormGroup() {
		return new FormGroup<SubscribedRuleGroupSummaryFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSubscribedRuleGroupsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListSubscribedRuleGroupsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSubscribedRuleGroupsRequestFormGroup() {
		return new FormGroup<ListSubscribedRuleGroupsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		NextMarker?: string;
		TagInfoForResource?: TagInfoForResource;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface TagInfoForResource {
		ResourceARN?: string;
		TagList?: Array<Tag>;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p> */
	export interface TagInfoForResourceFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagInfoForResourceFormGroup() {
		return new FormGroup<TagInfoForResourceFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		NextMarker?: string;
		Limit?: number | null;

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWebACLsResponse {
		NextMarker?: string;
		WebACLs?: Array<WebACLSummary>;
	}
	export interface ListWebACLsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListWebACLsResponseFormGroup() {
		return new FormGroup<ListWebACLsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p> */
	export interface WebACLSummary {

		/** Required */
		WebACLId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p> */
	export interface WebACLSummaryFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateWebACLSummaryFormGroup() {
		return new FormGroup<WebACLSummaryFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWebACLsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListWebACLsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListWebACLsRequestFormGroup() {
		return new FormGroup<ListWebACLsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response to a <a>ListXssMatchSets</a> request. */
	export interface ListXssMatchSetsResponse {
		NextMarker?: string;
		XssMatchSets?: Array<XssMatchSetSummary>;
	}

	/** The response to a <a>ListXssMatchSets</a> request. */
	export interface ListXssMatchSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListXssMatchSetsResponseFormGroup() {
		return new FormGroup<ListXssMatchSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetSummary {

		/** Required */
		XssMatchSetId: string;

		/** Required */
		Name: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetSummaryFormProperties {

		/** Required */
		XssMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateXssMatchSetSummaryFormGroup() {
		return new FormGroup<XssMatchSetSummaryFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to list the <a>XssMatchSet</a> objects created by the current AWS account. */
	export interface ListXssMatchSetsRequest {
		NextMarker?: string;
		Limit?: number | null;
	}

	/** A request to list the <a>XssMatchSet</a> objects created by the current AWS account. */
	export interface ListXssMatchSetsRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListXssMatchSetsRequestFormGroup() {
		return new FormGroup<ListXssMatchSetsRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutLoggingConfigurationRequest {

		/** Required */
		LoggingConfiguration: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface WAFServiceLinkedRoleErrorException {
	}
	export interface WAFServiceLinkedRoleErrorExceptionFormProperties {
	}
	export function CreateWAFServiceLinkedRoleErrorExceptionFormGroup() {
		return new FormGroup<WAFServiceLinkedRoleErrorExceptionFormProperties>({
		});

	}

	export interface PutPermissionPolicyResponse {
	}
	export interface PutPermissionPolicyResponseFormProperties {
	}
	export function CreatePutPermissionPolicyResponseFormGroup() {
		return new FormGroup<PutPermissionPolicyResponseFormProperties>({
		});

	}

	export interface PutPermissionPolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutPermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionPolicyRequestFormGroup() {
		return new FormGroup<PutPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInvalidPermissionPolicyException {
	}
	export interface WAFInvalidPermissionPolicyExceptionFormProperties {
	}
	export function CreateWAFInvalidPermissionPolicyExceptionFormGroup() {
		return new FormGroup<WAFInvalidPermissionPolicyExceptionFormProperties>({
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

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateByteMatchSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateByteMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateByteMatchSetResponseFormGroup() {
		return new FormGroup<UpdateByteMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateByteMatchSetRequest {

		/** Required */
		ByteMatchSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<ByteMatchSetUpdate>;
	}
	export interface UpdateByteMatchSetRequestFormProperties {

		/** Required */
		ByteMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateByteMatchSetRequestFormGroup() {
		return new FormGroup<UpdateByteMatchSetRequestFormProperties>({
			ByteMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p> */
	export interface ByteMatchSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		ByteMatchTuple: ByteMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p> */
	export interface ByteMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateByteMatchSetUpdateFormGroup() {
		return new FormGroup<ByteMatchSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChangeAction { INSERT = 'INSERT', DELETE = 'DELETE' }

	export interface WAFNonexistentContainerException {
	}
	export interface WAFNonexistentContainerExceptionFormProperties {
	}
	export function CreateWAFNonexistentContainerExceptionFormGroup() {
		return new FormGroup<WAFNonexistentContainerExceptionFormProperties>({
		});

	}

	export interface UpdateGeoMatchSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateGeoMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeoMatchSetResponseFormGroup() {
		return new FormGroup<UpdateGeoMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGeoMatchSetRequest {

		/** Required */
		GeoMatchSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<GeoMatchSetUpdate>;
	}
	export interface UpdateGeoMatchSetRequestFormProperties {

		/** Required */
		GeoMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGeoMatchSetRequestFormGroup() {
		return new FormGroup<UpdateGeoMatchSetRequestFormProperties>({
			GeoMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p> */
	export interface GeoMatchSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		GeoMatchConstraint: GeoMatchConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p> */
	export interface GeoMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateGeoMatchSetUpdateFormGroup() {
		return new FormGroup<GeoMatchSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIPSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateIPSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetResponseFormGroup() {
		return new FormGroup<UpdateIPSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIPSetRequest {

		/** Required */
		IPSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<IPSetUpdate>;
	}
	export interface UpdateIPSetRequestFormProperties {

		/** Required */
		IPSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetRequestFormGroup() {
		return new FormGroup<UpdateIPSetRequestFormProperties>({
			IPSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p> */
	export interface IPSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		IPSetDescriptor: IPSetDescriptor;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p> */
	export interface IPSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateIPSetUpdateFormGroup() {
		return new FormGroup<IPSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRateBasedRuleResponse {
		ChangeToken?: string;
	}
	export interface UpdateRateBasedRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRateBasedRuleResponseFormGroup() {
		return new FormGroup<UpdateRateBasedRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRateBasedRuleRequest {

		/** Required */
		RuleId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<RuleUpdate>;

		/** Required */
		RateLimit: number;
	}
	export interface UpdateRateBasedRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,

		/** Required */
		RateLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRateBasedRuleRequestFormGroup() {
		return new FormGroup<UpdateRateBasedRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RateLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p> */
	export interface RuleUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		Predicate: Predicate;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p> */
	export interface RuleUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateRuleUpdateFormGroup() {
		return new FormGroup<RuleUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegexMatchSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateRegexMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexMatchSetResponseFormGroup() {
		return new FormGroup<UpdateRegexMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRegexMatchSetRequest {

		/** Required */
		RegexMatchSetId: string;

		/** Required */
		Updates: Array<RegexMatchSetUpdate>;

		/** Required */
		ChangeToken: string;
	}
	export interface UpdateRegexMatchSetRequestFormProperties {

		/** Required */
		RegexMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexMatchSetRequestFormGroup() {
		return new FormGroup<UpdateRegexMatchSetRequestFormProperties>({
			RegexMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p> */
	export interface RegexMatchSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		RegexMatchTuple: RegexMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p> */
	export interface RegexMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateRegexMatchSetUpdateFormGroup() {
		return new FormGroup<RegexMatchSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegexPatternSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateRegexPatternSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetResponseFormGroup() {
		return new FormGroup<UpdateRegexPatternSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRegexPatternSetRequest {

		/** Required */
		RegexPatternSetId: string;

		/** Required */
		Updates: Array<RegexPatternSetUpdate>;

		/** Required */
		ChangeToken: string;
	}
	export interface UpdateRegexPatternSetRequestFormProperties {

		/** Required */
		RegexPatternSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetRequestFormGroup() {
		return new FormGroup<UpdateRegexPatternSetRequestFormProperties>({
			RegexPatternSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p> */
	export interface RegexPatternSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		RegexPatternString: string;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p> */
	export interface RegexPatternSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,

		/** Required */
		RegexPatternString: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetUpdateFormGroup() {
		return new FormGroup<RegexPatternSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
			RegexPatternString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInvalidRegexPatternException {
	}
	export interface WAFInvalidRegexPatternExceptionFormProperties {
	}
	export function CreateWAFInvalidRegexPatternExceptionFormGroup() {
		return new FormGroup<WAFInvalidRegexPatternExceptionFormProperties>({
		});

	}

	export interface UpdateRuleResponse {
		ChangeToken?: string;
	}
	export interface UpdateRuleResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleResponseFormGroup() {
		return new FormGroup<UpdateRuleResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRuleRequest {

		/** Required */
		RuleId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<RuleUpdate>;
	}
	export interface UpdateRuleRequestFormProperties {

		/** Required */
		RuleId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleRequestFormGroup() {
		return new FormGroup<UpdateRuleRequestFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRuleGroupResponse {
		ChangeToken?: string;
	}
	export interface UpdateRuleGroupResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupResponseFormGroup() {
		return new FormGroup<UpdateRuleGroupResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRuleGroupRequest {

		/** Required */
		RuleGroupId: string;

		/** Required */
		Updates: Array<RuleGroupUpdate>;

		/** Required */
		ChangeToken: string;
	}
	export interface UpdateRuleGroupRequestFormProperties {

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupRequestFormGroup() {
		return new FormGroup<UpdateRuleGroupRequestFormProperties>({
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p> */
	export interface RuleGroupUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		ActivatedRule: ActivatedRule;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p> */
	export interface RuleGroupUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateRuleGroupUpdateFormGroup() {
		return new FormGroup<RuleGroupUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSizeConstraintSetResponse {
		ChangeToken?: string;
	}
	export interface UpdateSizeConstraintSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSizeConstraintSetResponseFormGroup() {
		return new FormGroup<UpdateSizeConstraintSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSizeConstraintSetRequest {

		/** Required */
		SizeConstraintSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<SizeConstraintSetUpdate>;
	}
	export interface UpdateSizeConstraintSetRequestFormProperties {

		/** Required */
		SizeConstraintSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSizeConstraintSetRequestFormGroup() {
		return new FormGroup<UpdateSizeConstraintSetRequestFormProperties>({
			SizeConstraintSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		SizeConstraint: SizeConstraint;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p> */
	export interface SizeConstraintSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateSizeConstraintSetUpdateFormGroup() {
		return new FormGroup<SizeConstraintSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to an <a>UpdateSqlInjectionMatchSets</a> request. */
	export interface UpdateSqlInjectionMatchSetResponse {
		ChangeToken?: string;
	}

	/** The response to an <a>UpdateSqlInjectionMatchSets</a> request. */
	export interface UpdateSqlInjectionMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSqlInjectionMatchSetResponseFormGroup() {
		return new FormGroup<UpdateSqlInjectionMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update a <a>SqlInjectionMatchSet</a>. */
	export interface UpdateSqlInjectionMatchSetRequest {

		/** Required */
		SqlInjectionMatchSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<SqlInjectionMatchSetUpdate>;
	}

	/** A request to update a <a>SqlInjectionMatchSet</a>. */
	export interface UpdateSqlInjectionMatchSetRequestFormProperties {

		/** Required */
		SqlInjectionMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSqlInjectionMatchSetRequestFormGroup() {
		return new FormGroup<UpdateSqlInjectionMatchSetRequestFormProperties>({
			SqlInjectionMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		SqlInjectionMatchTuple: SqlInjectionMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p> */
	export interface SqlInjectionMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateSqlInjectionMatchSetUpdateFormGroup() {
		return new FormGroup<SqlInjectionMatchSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWebACLResponse {
		ChangeToken?: string;
	}
	export interface UpdateWebACLResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLResponseFormGroup() {
		return new FormGroup<UpdateWebACLResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWebACLRequest {

		/** Required */
		WebACLId: string;

		/** Required */
		ChangeToken: string;
		Updates?: Array<WebACLUpdate>;
		DefaultAction?: WafAction;
	}
	export interface UpdateWebACLRequestFormProperties {

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLRequestFormGroup() {
		return new FormGroup<UpdateWebACLRequestFormProperties>({
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p> */
	export interface WebACLUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		ActivatedRule: ActivatedRule;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p> */
	export interface WebACLUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateWebACLUpdateFormGroup() {
		return new FormGroup<WebACLUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFSubscriptionNotFoundException {
	}
	export interface WAFSubscriptionNotFoundExceptionFormProperties {
	}
	export function CreateWAFSubscriptionNotFoundExceptionFormGroup() {
		return new FormGroup<WAFSubscriptionNotFoundExceptionFormProperties>({
		});

	}


	/** The response to an <a>UpdateXssMatchSets</a> request. */
	export interface UpdateXssMatchSetResponse {
		ChangeToken?: string;
	}

	/** The response to an <a>UpdateXssMatchSets</a> request. */
	export interface UpdateXssMatchSetResponseFormProperties {
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXssMatchSetResponseFormGroup() {
		return new FormGroup<UpdateXssMatchSetResponseFormProperties>({
			ChangeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an <a>XssMatchSet</a>. */
	export interface UpdateXssMatchSetRequest {

		/** Required */
		XssMatchSetId: string;

		/** Required */
		ChangeToken: string;

		/** Required */
		Updates: Array<XssMatchSetUpdate>;
	}

	/** A request to update an <a>XssMatchSet</a>. */
	export interface UpdateXssMatchSetRequestFormProperties {

		/** Required */
		XssMatchSetId: FormControl<string | null | undefined>,

		/** Required */
		ChangeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXssMatchSetRequestFormGroup() {
		return new FormGroup<UpdateXssMatchSetRequestFormProperties>({
			XssMatchSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetUpdate {

		/** Required */
		Action: ChangeAction;

		/** Required */
		XssMatchTuple: XssMatchTuple;
	}

	/** <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p> */
	export interface XssMatchSetUpdateFormProperties {

		/** Required */
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateXssMatchSetUpdateFormGroup() {
		return new FormGroup<XssMatchSetUpdateFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet
		 * @return {CreateByteMatchSetResponse} Success
		 */
		CreateByteMatchSet(requestBody: CreateByteMatchSetRequest): Observable<CreateByteMatchSetResponse> {
			return this.http.post<CreateByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet
		 * @return {CreateGeoMatchSetResponse} Success
		 */
		CreateGeoMatchSet(requestBody: CreateGeoMatchSetRequest): Observable<CreateGeoMatchSetResponse> {
			return this.http.post<CreateGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateIPSet
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(requestBody: CreateIPSetRequest): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule
		 * @return {CreateRateBasedRuleResponse} Success
		 */
		CreateRateBasedRule(requestBody: CreateRateBasedRuleRequest): Observable<CreateRateBasedRuleResponse> {
			return this.http.post<CreateRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet
		 * @return {CreateRegexMatchSetResponse} Success
		 */
		CreateRegexMatchSet(requestBody: CreateRegexMatchSetRequest): Observable<CreateRegexMatchSetResponse> {
			return this.http.post<CreateRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet
		 * @return {CreateRegexPatternSetResponse} Success
		 */
		CreateRegexPatternSet(requestBody: CreateRegexPatternSetRequest): Observable<CreateRegexPatternSetResponse> {
			return this.http.post<CreateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateRule
		 * @return {CreateRuleResponse} Success
		 */
		CreateRule(requestBody: CreateRuleRequest): Observable<CreateRuleResponse> {
			return this.http.post<CreateRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateRuleGroup
		 * @return {CreateRuleGroupResponse} Success
		 */
		CreateRuleGroup(requestBody: CreateRuleGroupRequest): Observable<CreateRuleGroupResponse> {
			return this.http.post<CreateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet
		 * @return {CreateSizeConstraintSetResponse} Success
		 */
		CreateSizeConstraintSet(requestBody: CreateSizeConstraintSetRequest): Observable<CreateSizeConstraintSetResponse> {
			return this.http.post<CreateSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet
		 * @return {CreateSqlInjectionMatchSetResponse} Success
		 */
		CreateSqlInjectionMatchSet(requestBody: CreateSqlInjectionMatchSetRequest): Observable<CreateSqlInjectionMatchSetResponse> {
			return this.http.post<CreateSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateWebACL
		 * @return {CreateWebACLResponse} Success
		 */
		CreateWebACL(requestBody: CreateWebACLRequest): Observable<CreateWebACLResponse> {
			return this.http.post<CreateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack
		 * @return {CreateWebACLMigrationStackResponse} Success
		 */
		CreateWebACLMigrationStack(requestBody: CreateWebACLMigrationStackRequest): Observable<CreateWebACLMigrationStackResponse> {
			return this.http.post<CreateWebACLMigrationStackResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet
		 * @return {CreateXssMatchSetResponse} Success
		 */
		CreateXssMatchSet(requestBody: CreateXssMatchSetRequest): Observable<CreateXssMatchSetResponse> {
			return this.http.post<CreateXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet
		 * @return {DeleteByteMatchSetResponse} Success
		 */
		DeleteByteMatchSet(requestBody: DeleteByteMatchSetRequest): Observable<DeleteByteMatchSetResponse> {
			return this.http.post<DeleteByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet
		 * @return {DeleteGeoMatchSetResponse} Success
		 */
		DeleteGeoMatchSet(requestBody: DeleteGeoMatchSetRequest): Observable<DeleteGeoMatchSetResponse> {
			return this.http.post<DeleteGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteIPSet
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(requestBody: DeleteIPSetRequest): Observable<DeleteIPSetResponse> {
			return this.http.post<DeleteIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration
		 * @return {DeleteLoggingConfigurationResponse} Success
		 */
		DeleteLoggingConfiguration(requestBody: DeleteLoggingConfigurationRequest): Observable<DeleteLoggingConfigurationResponse> {
			return this.http.post<DeleteLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy
		 * @return {DeletePermissionPolicyResponse} Success
		 */
		DeletePermissionPolicy(requestBody: DeletePermissionPolicyRequest): Observable<DeletePermissionPolicyResponse> {
			return this.http.post<DeletePermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule
		 * @return {DeleteRateBasedRuleResponse} Success
		 */
		DeleteRateBasedRule(requestBody: DeleteRateBasedRuleRequest): Observable<DeleteRateBasedRuleResponse> {
			return this.http.post<DeleteRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet
		 * @return {DeleteRegexMatchSetResponse} Success
		 */
		DeleteRegexMatchSet(requestBody: DeleteRegexMatchSetRequest): Observable<DeleteRegexMatchSetResponse> {
			return this.http.post<DeleteRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet
		 * @return {DeleteRegexPatternSetResponse} Success
		 */
		DeleteRegexPatternSet(requestBody: DeleteRegexPatternSetRequest): Observable<DeleteRegexPatternSetResponse> {
			return this.http.post<DeleteRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteRule
		 * @return {DeleteRuleResponse} Success
		 */
		DeleteRule(requestBody: DeleteRuleRequest): Observable<DeleteRuleResponse> {
			return this.http.post<DeleteRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup
		 * @return {DeleteRuleGroupResponse} Success
		 */
		DeleteRuleGroup(requestBody: DeleteRuleGroupRequest): Observable<DeleteRuleGroupResponse> {
			return this.http.post<DeleteRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet
		 * @return {DeleteSizeConstraintSetResponse} Success
		 */
		DeleteSizeConstraintSet(requestBody: DeleteSizeConstraintSetRequest): Observable<DeleteSizeConstraintSetResponse> {
			return this.http.post<DeleteSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet
		 * @return {DeleteSqlInjectionMatchSetResponse} Success
		 */
		DeleteSqlInjectionMatchSet(requestBody: DeleteSqlInjectionMatchSetRequest): Observable<DeleteSqlInjectionMatchSetResponse> {
			return this.http.post<DeleteSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteWebACL
		 * @return {DeleteWebACLResponse} Success
		 */
		DeleteWebACL(requestBody: DeleteWebACLRequest): Observable<DeleteWebACLResponse> {
			return this.http.post<DeleteWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet
		 * @return {DeleteXssMatchSetResponse} Success
		 */
		DeleteXssMatchSet(requestBody: DeleteXssMatchSetRequest): Observable<DeleteXssMatchSetResponse> {
			return this.http.post<DeleteXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetByteMatchSet
		 * @return {GetByteMatchSetResponse} Success
		 */
		GetByteMatchSet(requestBody: GetByteMatchSetRequest): Observable<GetByteMatchSetResponse> {
			return this.http.post<GetByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetChangeToken
		 * @return {GetChangeTokenResponse} Success
		 */
		GetChangeToken(requestBody: GetChangeTokenRequest): Observable<GetChangeTokenResponse> {
			return this.http.post<GetChangeTokenResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetChangeToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus
		 * @return {GetChangeTokenStatusResponse} Success
		 */
		GetChangeTokenStatus(requestBody: GetChangeTokenStatusRequest): Observable<GetChangeTokenStatusResponse> {
			return this.http.post<GetChangeTokenStatusResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet
		 * @return {GetGeoMatchSetResponse} Success
		 */
		GetGeoMatchSet(requestBody: GetGeoMatchSetRequest): Observable<GetGeoMatchSetResponse> {
			return this.http.post<GetGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetIPSet
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(requestBody: GetIPSetRequest): Observable<GetIPSetResponse> {
			return this.http.post<GetIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration
		 * @return {GetLoggingConfigurationResponse} Success
		 */
		GetLoggingConfiguration(requestBody: GetLoggingConfigurationRequest): Observable<GetLoggingConfigurationResponse> {
			return this.http.post<GetLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy
		 * @return {GetPermissionPolicyResponse} Success
		 */
		GetPermissionPolicy(requestBody: GetPermissionPolicyRequest): Observable<GetPermissionPolicyResponse> {
			return this.http.post<GetPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRateBasedRule
		 * @return {GetRateBasedRuleResponse} Success
		 */
		GetRateBasedRule(requestBody: GetRateBasedRuleRequest): Observable<GetRateBasedRuleResponse> {
			return this.http.post<GetRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys
		 * @return {GetRateBasedRuleManagedKeysResponse} Success
		 */
		GetRateBasedRuleManagedKeys(requestBody: GetRateBasedRuleManagedKeysRequest): Observable<GetRateBasedRuleManagedKeysResponse> {
			return this.http.post<GetRateBasedRuleManagedKeysResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet
		 * @return {GetRegexMatchSetResponse} Success
		 */
		GetRegexMatchSet(requestBody: GetRegexMatchSetRequest): Observable<GetRegexMatchSetResponse> {
			return this.http.post<GetRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet
		 * @return {GetRegexPatternSetResponse} Success
		 */
		GetRegexPatternSet(requestBody: GetRegexPatternSetRequest): Observable<GetRegexPatternSetResponse> {
			return this.http.post<GetRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRule
		 * @return {GetRuleResponse} Success
		 */
		GetRule(requestBody: GetRuleRequest): Observable<GetRuleResponse> {
			return this.http.post<GetRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetRuleGroup
		 * @return {GetRuleGroupResponse} Success
		 */
		GetRuleGroup(requestBody: GetRuleGroupRequest): Observable<GetRuleGroupResponse> {
			return this.http.post<GetRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetSampledRequests
		 * @return {GetSampledRequestsResponse} Success
		 */
		GetSampledRequests(requestBody: GetSampledRequestsRequest): Observable<GetSampledRequestsResponse> {
			return this.http.post<GetSampledRequestsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetSampledRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet
		 * @return {GetSizeConstraintSetResponse} Success
		 */
		GetSizeConstraintSet(requestBody: GetSizeConstraintSetRequest): Observable<GetSizeConstraintSetResponse> {
			return this.http.post<GetSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet
		 * @return {GetSqlInjectionMatchSetResponse} Success
		 */
		GetSqlInjectionMatchSet(requestBody: GetSqlInjectionMatchSetRequest): Observable<GetSqlInjectionMatchSetResponse> {
			return this.http.post<GetSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetWebACL
		 * @return {GetWebACLResponse} Success
		 */
		GetWebACL(requestBody: GetWebACLRequest): Observable<GetWebACLResponse> {
			return this.http.post<GetWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.GetXssMatchSet
		 * @return {GetXssMatchSetResponse} Success
		 */
		GetXssMatchSet(requestBody: GetXssMatchSetRequest): Observable<GetXssMatchSetResponse> {
			return this.http.post<GetXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup
		 * @return {ListActivatedRulesInRuleGroupResponse} Success
		 */
		ListActivatedRulesInRuleGroup(requestBody: ListActivatedRulesInRuleGroupRequest): Observable<ListActivatedRulesInRuleGroupResponse> {
			return this.http.post<ListActivatedRulesInRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListByteMatchSets
		 * @return {ListByteMatchSetsResponse} Success
		 */
		ListByteMatchSets(requestBody: ListByteMatchSetsRequest): Observable<ListByteMatchSetsResponse> {
			return this.http.post<ListByteMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets
		 * @return {ListGeoMatchSetsResponse} Success
		 */
		ListGeoMatchSets(requestBody: ListGeoMatchSetsRequest): Observable<ListGeoMatchSetsResponse> {
			return this.http.post<ListGeoMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListIPSets
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(requestBody: ListIPSetsRequest): Observable<ListIPSetsResponse> {
			return this.http.post<ListIPSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListIPSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations
		 * @return {ListLoggingConfigurationsResponse} Success
		 */
		ListLoggingConfigurations(requestBody: ListLoggingConfigurationsRequest): Observable<ListLoggingConfigurationsResponse> {
			return this.http.post<ListLoggingConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListRateBasedRules
		 * @return {ListRateBasedRulesResponse} Success
		 */
		ListRateBasedRules(requestBody: ListRateBasedRulesRequest): Observable<ListRateBasedRulesResponse> {
			return this.http.post<ListRateBasedRulesResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets
		 * @return {ListRegexMatchSetsResponse} Success
		 */
		ListRegexMatchSets(requestBody: ListRegexMatchSetsRequest): Observable<ListRegexMatchSetsResponse> {
			return this.http.post<ListRegexMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets
		 * @return {ListRegexPatternSetsResponse} Success
		 */
		ListRegexPatternSets(requestBody: ListRegexPatternSetsRequest): Observable<ListRegexPatternSetsResponse> {
			return this.http.post<ListRegexPatternSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListRuleGroups
		 * @return {ListRuleGroupsResponse} Success
		 */
		ListRuleGroups(requestBody: ListRuleGroupsRequest): Observable<ListRuleGroupsResponse> {
			return this.http.post<ListRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListRules
		 * @return {ListRulesResponse} Success
		 */
		ListRules(requestBody: ListRulesRequest): Observable<ListRulesResponse> {
			return this.http.post<ListRulesResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets
		 * @return {ListSizeConstraintSetsResponse} Success
		 */
		ListSizeConstraintSets(requestBody: ListSizeConstraintSetsRequest): Observable<ListSizeConstraintSetsResponse> {
			return this.http.post<ListSizeConstraintSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets
		 * @return {ListSqlInjectionMatchSetsResponse} Success
		 */
		ListSqlInjectionMatchSets(requestBody: ListSqlInjectionMatchSetsRequest): Observable<ListSqlInjectionMatchSetsResponse> {
			return this.http.post<ListSqlInjectionMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups
		 * @return {ListSubscribedRuleGroupsResponse} Success
		 */
		ListSubscribedRuleGroups(requestBody: ListSubscribedRuleGroupsRequest): Observable<ListSubscribedRuleGroupsResponse> {
			return this.http.post<ListSubscribedRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListWebACLs
		 * @return {ListWebACLsResponse} Success
		 */
		ListWebACLs(requestBody: ListWebACLsRequest): Observable<ListWebACLsResponse> {
			return this.http.post<ListWebACLsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListWebACLs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.ListXssMatchSets
		 * @return {ListXssMatchSetsResponse} Success
		 */
		ListXssMatchSets(requestBody: ListXssMatchSetsRequest): Observable<ListXssMatchSetsResponse> {
			return this.http.post<ListXssMatchSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration
		 * @return {PutLoggingConfigurationResponse} Success
		 */
		PutLoggingConfiguration(requestBody: PutLoggingConfigurationRequest): Observable<PutLoggingConfigurationResponse> {
			return this.http.post<PutLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy
		 * @return {PutPermissionPolicyResponse} Success
		 */
		PutPermissionPolicy(requestBody: PutPermissionPolicyRequest): Observable<PutPermissionPolicyResponse> {
			return this.http.post<PutPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>
		 * Post #X-Amz-Target=AWSWAF_20150824.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>
		 * Post #X-Amz-Target=AWSWAF_20150824.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet
		 * @return {UpdateByteMatchSetResponse} Success
		 */
		UpdateByteMatchSet(requestBody: UpdateByteMatchSetRequest): Observable<UpdateByteMatchSetResponse> {
			return this.http.post<UpdateByteMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet
		 * @return {UpdateGeoMatchSetResponse} Success
		 */
		UpdateGeoMatchSet(requestBody: UpdateGeoMatchSetRequest): Observable<UpdateGeoMatchSetResponse> {
			return this.http.post<UpdateGeoMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateIPSet
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(requestBody: UpdateIPSetRequest): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule
		 * @return {UpdateRateBasedRuleResponse} Success
		 */
		UpdateRateBasedRule(requestBody: UpdateRateBasedRuleRequest): Observable<UpdateRateBasedRuleResponse> {
			return this.http.post<UpdateRateBasedRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet
		 * @return {UpdateRegexMatchSetResponse} Success
		 */
		UpdateRegexMatchSet(requestBody: UpdateRegexMatchSetRequest): Observable<UpdateRegexMatchSetResponse> {
			return this.http.post<UpdateRegexMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet
		 * @return {UpdateRegexPatternSetResponse} Success
		 */
		UpdateRegexPatternSet(requestBody: UpdateRegexPatternSetRequest): Observable<UpdateRegexPatternSetResponse> {
			return this.http.post<UpdateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateRule
		 * @return {UpdateRuleResponse} Success
		 */
		UpdateRule(requestBody: UpdateRuleRequest): Observable<UpdateRuleResponse> {
			return this.http.post<UpdateRuleResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup
		 * @return {UpdateRuleGroupResponse} Success
		 */
		UpdateRuleGroup(requestBody: UpdateRuleGroupRequest): Observable<UpdateRuleGroupResponse> {
			return this.http.post<UpdateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet
		 * @return {UpdateSizeConstraintSetResponse} Success
		 */
		UpdateSizeConstraintSet(requestBody: UpdateSizeConstraintSetRequest): Observable<UpdateSizeConstraintSetResponse> {
			return this.http.post<UpdateSizeConstraintSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet
		 * @return {UpdateSqlInjectionMatchSetResponse} Success
		 */
		UpdateSqlInjectionMatchSet(requestBody: UpdateSqlInjectionMatchSetRequest): Observable<UpdateSqlInjectionMatchSetResponse> {
			return this.http.post<UpdateSqlInjectionMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateWebACL
		 * @return {UpdateWebACLResponse} Success
		 */
		UpdateWebACL(requestBody: UpdateWebACLRequest): Observable<UpdateWebACLResponse> {
			return this.http.post<UpdateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet
		 * @return {UpdateXssMatchSetResponse} Success
		 */
		UpdateXssMatchSet(requestBody: UpdateXssMatchSetRequest): Observable<UpdateXssMatchSetResponse> {
			return this.http.post<UpdateXssMatchSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateByteMatchSetX_Amz_Target { 'AWSWAF_20150824.CreateByteMatchSet' = 'AWSWAF_20150824.CreateByteMatchSet' }

	export enum CreateGeoMatchSetX_Amz_Target { 'AWSWAF_20150824.CreateGeoMatchSet' = 'AWSWAF_20150824.CreateGeoMatchSet' }

	export enum CreateIPSetX_Amz_Target { 'AWSWAF_20150824.CreateIPSet' = 'AWSWAF_20150824.CreateIPSet' }

	export enum CreateRateBasedRuleX_Amz_Target { 'AWSWAF_20150824.CreateRateBasedRule' = 'AWSWAF_20150824.CreateRateBasedRule' }

	export enum CreateRegexMatchSetX_Amz_Target { 'AWSWAF_20150824.CreateRegexMatchSet' = 'AWSWAF_20150824.CreateRegexMatchSet' }

	export enum CreateRegexPatternSetX_Amz_Target { 'AWSWAF_20150824.CreateRegexPatternSet' = 'AWSWAF_20150824.CreateRegexPatternSet' }

	export enum CreateRuleX_Amz_Target { 'AWSWAF_20150824.CreateRule' = 'AWSWAF_20150824.CreateRule' }

	export enum CreateRuleGroupX_Amz_Target { 'AWSWAF_20150824.CreateRuleGroup' = 'AWSWAF_20150824.CreateRuleGroup' }

	export enum CreateSizeConstraintSetX_Amz_Target { 'AWSWAF_20150824.CreateSizeConstraintSet' = 'AWSWAF_20150824.CreateSizeConstraintSet' }

	export enum CreateSqlInjectionMatchSetX_Amz_Target { 'AWSWAF_20150824.CreateSqlInjectionMatchSet' = 'AWSWAF_20150824.CreateSqlInjectionMatchSet' }

	export enum CreateWebACLX_Amz_Target { 'AWSWAF_20150824.CreateWebACL' = 'AWSWAF_20150824.CreateWebACL' }

	export enum CreateWebACLMigrationStackX_Amz_Target { 'AWSWAF_20150824.CreateWebACLMigrationStack' = 'AWSWAF_20150824.CreateWebACLMigrationStack' }

	export enum CreateXssMatchSetX_Amz_Target { 'AWSWAF_20150824.CreateXssMatchSet' = 'AWSWAF_20150824.CreateXssMatchSet' }

	export enum DeleteByteMatchSetX_Amz_Target { 'AWSWAF_20150824.DeleteByteMatchSet' = 'AWSWAF_20150824.DeleteByteMatchSet' }

	export enum DeleteGeoMatchSetX_Amz_Target { 'AWSWAF_20150824.DeleteGeoMatchSet' = 'AWSWAF_20150824.DeleteGeoMatchSet' }

	export enum DeleteIPSetX_Amz_Target { 'AWSWAF_20150824.DeleteIPSet' = 'AWSWAF_20150824.DeleteIPSet' }

	export enum DeleteLoggingConfigurationX_Amz_Target { 'AWSWAF_20150824.DeleteLoggingConfiguration' = 'AWSWAF_20150824.DeleteLoggingConfiguration' }

	export enum DeletePermissionPolicyX_Amz_Target { 'AWSWAF_20150824.DeletePermissionPolicy' = 'AWSWAF_20150824.DeletePermissionPolicy' }

	export enum DeleteRateBasedRuleX_Amz_Target { 'AWSWAF_20150824.DeleteRateBasedRule' = 'AWSWAF_20150824.DeleteRateBasedRule' }

	export enum DeleteRegexMatchSetX_Amz_Target { 'AWSWAF_20150824.DeleteRegexMatchSet' = 'AWSWAF_20150824.DeleteRegexMatchSet' }

	export enum DeleteRegexPatternSetX_Amz_Target { 'AWSWAF_20150824.DeleteRegexPatternSet' = 'AWSWAF_20150824.DeleteRegexPatternSet' }

	export enum DeleteRuleX_Amz_Target { 'AWSWAF_20150824.DeleteRule' = 'AWSWAF_20150824.DeleteRule' }

	export enum DeleteRuleGroupX_Amz_Target { 'AWSWAF_20150824.DeleteRuleGroup' = 'AWSWAF_20150824.DeleteRuleGroup' }

	export enum DeleteSizeConstraintSetX_Amz_Target { 'AWSWAF_20150824.DeleteSizeConstraintSet' = 'AWSWAF_20150824.DeleteSizeConstraintSet' }

	export enum DeleteSqlInjectionMatchSetX_Amz_Target { 'AWSWAF_20150824.DeleteSqlInjectionMatchSet' = 'AWSWAF_20150824.DeleteSqlInjectionMatchSet' }

	export enum DeleteWebACLX_Amz_Target { 'AWSWAF_20150824.DeleteWebACL' = 'AWSWAF_20150824.DeleteWebACL' }

	export enum DeleteXssMatchSetX_Amz_Target { 'AWSWAF_20150824.DeleteXssMatchSet' = 'AWSWAF_20150824.DeleteXssMatchSet' }

	export enum GetByteMatchSetX_Amz_Target { 'AWSWAF_20150824.GetByteMatchSet' = 'AWSWAF_20150824.GetByteMatchSet' }

	export enum GetChangeTokenX_Amz_Target { 'AWSWAF_20150824.GetChangeToken' = 'AWSWAF_20150824.GetChangeToken' }

	export enum GetChangeTokenStatusX_Amz_Target { 'AWSWAF_20150824.GetChangeTokenStatus' = 'AWSWAF_20150824.GetChangeTokenStatus' }

	export enum GetGeoMatchSetX_Amz_Target { 'AWSWAF_20150824.GetGeoMatchSet' = 'AWSWAF_20150824.GetGeoMatchSet' }

	export enum GetIPSetX_Amz_Target { 'AWSWAF_20150824.GetIPSet' = 'AWSWAF_20150824.GetIPSet' }

	export enum GetLoggingConfigurationX_Amz_Target { 'AWSWAF_20150824.GetLoggingConfiguration' = 'AWSWAF_20150824.GetLoggingConfiguration' }

	export enum GetPermissionPolicyX_Amz_Target { 'AWSWAF_20150824.GetPermissionPolicy' = 'AWSWAF_20150824.GetPermissionPolicy' }

	export enum GetRateBasedRuleX_Amz_Target { 'AWSWAF_20150824.GetRateBasedRule' = 'AWSWAF_20150824.GetRateBasedRule' }

	export enum GetRateBasedRuleManagedKeysX_Amz_Target { 'AWSWAF_20150824.GetRateBasedRuleManagedKeys' = 'AWSWAF_20150824.GetRateBasedRuleManagedKeys' }

	export enum GetRegexMatchSetX_Amz_Target { 'AWSWAF_20150824.GetRegexMatchSet' = 'AWSWAF_20150824.GetRegexMatchSet' }

	export enum GetRegexPatternSetX_Amz_Target { 'AWSWAF_20150824.GetRegexPatternSet' = 'AWSWAF_20150824.GetRegexPatternSet' }

	export enum GetRuleX_Amz_Target { 'AWSWAF_20150824.GetRule' = 'AWSWAF_20150824.GetRule' }

	export enum GetRuleGroupX_Amz_Target { 'AWSWAF_20150824.GetRuleGroup' = 'AWSWAF_20150824.GetRuleGroup' }

	export enum GetSampledRequestsX_Amz_Target { 'AWSWAF_20150824.GetSampledRequests' = 'AWSWAF_20150824.GetSampledRequests' }

	export enum GetSizeConstraintSetX_Amz_Target { 'AWSWAF_20150824.GetSizeConstraintSet' = 'AWSWAF_20150824.GetSizeConstraintSet' }

	export enum GetSqlInjectionMatchSetX_Amz_Target { 'AWSWAF_20150824.GetSqlInjectionMatchSet' = 'AWSWAF_20150824.GetSqlInjectionMatchSet' }

	export enum GetWebACLX_Amz_Target { 'AWSWAF_20150824.GetWebACL' = 'AWSWAF_20150824.GetWebACL' }

	export enum GetXssMatchSetX_Amz_Target { 'AWSWAF_20150824.GetXssMatchSet' = 'AWSWAF_20150824.GetXssMatchSet' }

	export enum ListActivatedRulesInRuleGroupX_Amz_Target { 'AWSWAF_20150824.ListActivatedRulesInRuleGroup' = 'AWSWAF_20150824.ListActivatedRulesInRuleGroup' }

	export enum ListByteMatchSetsX_Amz_Target { 'AWSWAF_20150824.ListByteMatchSets' = 'AWSWAF_20150824.ListByteMatchSets' }

	export enum ListGeoMatchSetsX_Amz_Target { 'AWSWAF_20150824.ListGeoMatchSets' = 'AWSWAF_20150824.ListGeoMatchSets' }

	export enum ListIPSetsX_Amz_Target { 'AWSWAF_20150824.ListIPSets' = 'AWSWAF_20150824.ListIPSets' }

	export enum ListLoggingConfigurationsX_Amz_Target { 'AWSWAF_20150824.ListLoggingConfigurations' = 'AWSWAF_20150824.ListLoggingConfigurations' }

	export enum ListRateBasedRulesX_Amz_Target { 'AWSWAF_20150824.ListRateBasedRules' = 'AWSWAF_20150824.ListRateBasedRules' }

	export enum ListRegexMatchSetsX_Amz_Target { 'AWSWAF_20150824.ListRegexMatchSets' = 'AWSWAF_20150824.ListRegexMatchSets' }

	export enum ListRegexPatternSetsX_Amz_Target { 'AWSWAF_20150824.ListRegexPatternSets' = 'AWSWAF_20150824.ListRegexPatternSets' }

	export enum ListRuleGroupsX_Amz_Target { 'AWSWAF_20150824.ListRuleGroups' = 'AWSWAF_20150824.ListRuleGroups' }

	export enum ListRulesX_Amz_Target { 'AWSWAF_20150824.ListRules' = 'AWSWAF_20150824.ListRules' }

	export enum ListSizeConstraintSetsX_Amz_Target { 'AWSWAF_20150824.ListSizeConstraintSets' = 'AWSWAF_20150824.ListSizeConstraintSets' }

	export enum ListSqlInjectionMatchSetsX_Amz_Target { 'AWSWAF_20150824.ListSqlInjectionMatchSets' = 'AWSWAF_20150824.ListSqlInjectionMatchSets' }

	export enum ListSubscribedRuleGroupsX_Amz_Target { 'AWSWAF_20150824.ListSubscribedRuleGroups' = 'AWSWAF_20150824.ListSubscribedRuleGroups' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSWAF_20150824.ListTagsForResource' = 'AWSWAF_20150824.ListTagsForResource' }

	export enum ListWebACLsX_Amz_Target { 'AWSWAF_20150824.ListWebACLs' = 'AWSWAF_20150824.ListWebACLs' }

	export enum ListXssMatchSetsX_Amz_Target { 'AWSWAF_20150824.ListXssMatchSets' = 'AWSWAF_20150824.ListXssMatchSets' }

	export enum PutLoggingConfigurationX_Amz_Target { 'AWSWAF_20150824.PutLoggingConfiguration' = 'AWSWAF_20150824.PutLoggingConfiguration' }

	export enum PutPermissionPolicyX_Amz_Target { 'AWSWAF_20150824.PutPermissionPolicy' = 'AWSWAF_20150824.PutPermissionPolicy' }

	export enum TagResourceX_Amz_Target { 'AWSWAF_20150824.TagResource' = 'AWSWAF_20150824.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSWAF_20150824.UntagResource' = 'AWSWAF_20150824.UntagResource' }

	export enum UpdateByteMatchSetX_Amz_Target { 'AWSWAF_20150824.UpdateByteMatchSet' = 'AWSWAF_20150824.UpdateByteMatchSet' }

	export enum UpdateGeoMatchSetX_Amz_Target { 'AWSWAF_20150824.UpdateGeoMatchSet' = 'AWSWAF_20150824.UpdateGeoMatchSet' }

	export enum UpdateIPSetX_Amz_Target { 'AWSWAF_20150824.UpdateIPSet' = 'AWSWAF_20150824.UpdateIPSet' }

	export enum UpdateRateBasedRuleX_Amz_Target { 'AWSWAF_20150824.UpdateRateBasedRule' = 'AWSWAF_20150824.UpdateRateBasedRule' }

	export enum UpdateRegexMatchSetX_Amz_Target { 'AWSWAF_20150824.UpdateRegexMatchSet' = 'AWSWAF_20150824.UpdateRegexMatchSet' }

	export enum UpdateRegexPatternSetX_Amz_Target { 'AWSWAF_20150824.UpdateRegexPatternSet' = 'AWSWAF_20150824.UpdateRegexPatternSet' }

	export enum UpdateRuleX_Amz_Target { 'AWSWAF_20150824.UpdateRule' = 'AWSWAF_20150824.UpdateRule' }

	export enum UpdateRuleGroupX_Amz_Target { 'AWSWAF_20150824.UpdateRuleGroup' = 'AWSWAF_20150824.UpdateRuleGroup' }

	export enum UpdateSizeConstraintSetX_Amz_Target { 'AWSWAF_20150824.UpdateSizeConstraintSet' = 'AWSWAF_20150824.UpdateSizeConstraintSet' }

	export enum UpdateSqlInjectionMatchSetX_Amz_Target { 'AWSWAF_20150824.UpdateSqlInjectionMatchSet' = 'AWSWAF_20150824.UpdateSqlInjectionMatchSet' }

	export enum UpdateWebACLX_Amz_Target { 'AWSWAF_20150824.UpdateWebACL' = 'AWSWAF_20150824.UpdateWebACL' }

	export enum UpdateXssMatchSetX_Amz_Target { 'AWSWAF_20150824.UpdateXssMatchSet' = 'AWSWAF_20150824.UpdateXssMatchSet' }

}

