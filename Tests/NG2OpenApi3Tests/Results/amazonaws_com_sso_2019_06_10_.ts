import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetRoleCredentialsResponse {
		roleCredentials?: RoleCredentials;
	}
	export interface GetRoleCredentialsResponseFormProperties {
	}
	export function CreateGetRoleCredentialsResponseFormGroup() {
		return new FormGroup<GetRoleCredentialsResponseFormProperties>({
		});

	}


	/** Provides information about the role credentials that are assigned to the user. */
	export interface RoleCredentials {
		accessKeyId?: string;
		secretAccessKey?: string;
		sessionToken?: string;
		expiration?: number | null;
	}

	/** Provides information about the role credentials that are assigned to the user. */
	export interface RoleCredentialsFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		secretAccessKey: FormControl<string | null | undefined>,
		sessionToken: FormControl<string | null | undefined>,
		expiration: FormControl<number | null | undefined>,
	}
	export function CreateRoleCredentialsFormGroup() {
		return new FormGroup<RoleCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ListAccountRolesResponse {
		nextToken?: string;
		roleList?: Array<RoleInfo>;
	}
	export interface ListAccountRolesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountRolesResponseFormGroup() {
		return new FormGroup<ListAccountRolesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the role that is assigned to the user. */
	export interface RoleInfo {
		roleName?: string;
		accountId?: string;
	}

	/** Provides information about the role that is assigned to the user. */
	export interface RoleInfoFormProperties {
		roleName: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRoleInfoFormGroup() {
		return new FormGroup<RoleInfoFormProperties>({
			roleName: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountsResponse {
		nextToken?: string;
		accountList?: Array<AccountInfo>;
	}
	export interface ListAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about your AWS account. */
	export interface AccountInfo {
		accountId?: string;
		accountName?: string;
		emailAddress?: string;
	}

	/** Provides information about your AWS account. */
	export interface AccountInfoFormProperties {
		accountId: FormControl<string | null | undefined>,
		accountName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateAccountInfoFormGroup() {
		return new FormGroup<AccountInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoleCredentialsRequest {
	}
	export interface GetRoleCredentialsRequestFormProperties {
	}
	export function CreateGetRoleCredentialsRequestFormGroup() {
		return new FormGroup<GetRoleCredentialsRequestFormProperties>({
		});

	}

	export interface ListAccountRolesRequest {
	}
	export interface ListAccountRolesRequestFormProperties {
	}
	export function CreateListAccountRolesRequestFormGroup() {
		return new FormGroup<ListAccountRolesRequestFormProperties>({
		});

	}

	export interface ListAccountsRequest {
	}
	export interface ListAccountsRequestFormProperties {
	}
	export function CreateListAccountsRequestFormGroup() {
		return new FormGroup<ListAccountsRequestFormProperties>({
		});

	}

	export interface LogoutRequest {
	}
	export interface LogoutRequestFormProperties {
	}
	export function CreateLogoutRequestFormGroup() {
		return new FormGroup<LogoutRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the STS short-term credentials for a given role name that is assigned to the user.
		 * Get federation/credentials#role_name&account_id&x-amz-sso_bearer_token
		 * @param {string} role_name The friendly name of the role that is assigned to the user.
		 * @param {string} account_id The identifier for the AWS account that is assigned to the user.
		 * @return {GetRoleCredentialsResponse} Success
		 */
		GetRoleCredentials(role_name: string, account_id: string): Observable<GetRoleCredentialsResponse> {
			return this.http.get<GetRoleCredentialsResponse>(this.baseUri + 'federation/credentials#role_name&account_id&x-amz-sso_bearer_token?role_name=' + (role_name == null ? '' : encodeURIComponent(role_name)) + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)), {});
		}

		/**
		 * Lists all roles that are assigned to the user for a given AWS account.
		 * Get assignment/roles#x-amz-sso_bearer_token&account_id
		 * @param {string} next_token The page token from the previous response output when you request subsequent pages.
		 * @param {number} max_result The number of items that clients can request per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} account_id The identifier for the AWS account that is assigned to the user.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountRolesResponse} Success
		 */
		ListAccountRoles(next_token: string | null | undefined, max_result: number | null | undefined, account_id: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListAccountRolesResponse> {
			return this.http.get<ListAccountRolesResponse>(this.baseUri + 'assignment/roles#x-amz-sso_bearer_token&account_id?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>IAM Identity Center User Guide</i>. This operation returns a paginated response.
		 * Get assignment/accounts#x-amz-sso_bearer_token
		 * @param {string} next_token (Optional) When requesting subsequent pages, this is the page token from the previous response output.
		 * @param {number} max_result This is the number of items clients can request per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(next_token: string | null | undefined, max_result: number | null | undefined, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'assignment/accounts#x-amz-sso_bearer_token?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in session.</p> <note> <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set. More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user, and the corresponding temporary AWS credentials are returned to the client.</p> <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center permission sets continue based on the duration configured in the permission set. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User authentications</a> in the <i>IAM Identity Center User Guide</i>.</p> </note>
		 * Post logout#x-amz-sso_bearer_token
		 * @return {void} Success
		 */
		Logout(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'logout#x-amz-sso_bearer_token', null, { observe: 'response', responseType: 'text' });
		}
	}

}

