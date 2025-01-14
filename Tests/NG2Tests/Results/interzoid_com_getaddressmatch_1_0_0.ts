import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a similarity key for matching purposes for address data
		 * Gets a similarity key for matching purposes for street address data
		 * Get getaddressmatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} address Address from which to generate similarity key
		 * @return {GetaddressmatchGetByLicenseAndAddressReturn} Generated similarity key for address data
		 */
		GetaddressmatchGetByLicenseAndAddress(license: string, address: string, headersHandler?: () => HttpHeaders): Observable<GetaddressmatchGetByLicenseAndAddressReturn> {
			return this.http.get<GetaddressmatchGetByLicenseAndAddressReturn>(this.baseUri + 'getaddressmatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&address=' + (address == null ? '' : encodeURIComponent(address)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface GetaddressmatchGetByLicenseAndAddressReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetaddressmatchGetByLicenseAndAddressReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetaddressmatchGetByLicenseAndAddressReturnFormGroup() {
		return new FormGroup<GetaddressmatchGetByLicenseAndAddressReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

