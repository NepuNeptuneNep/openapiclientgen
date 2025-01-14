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
		 * Additional Data
		 * Get search/{versionNumber}/additionalData.{ext}
		 * @param {Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomExt} ext Expected response format.
		 * @param {string} geometries Comma separated list of geometry UUIDs, previously retrieved from an Search API request.
		 * @param {Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomGeometriesZoom} geometriesZoom Defines the precision of the geometries.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK: additional data were retrieved and the body of the response contains requested data.
		 */
		Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoom(versionNumber: Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomVersionNumber, ext: Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomExt, geometries: string, geometriesZoom: Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomGeometriesZoom | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/additionalData.' + ext + '?geometries=' + (geometries == null ? '' : encodeURIComponent(geometries)) + '&geometriesZoom=' + geometriesZoom, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Low Bandwith Category Search
		 * Get search/{versionNumber}/cS/{category}.{ext}
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} category Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndView(versionNumber: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber, category: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, idxSet: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/cS/' + (category == null ? '' : encodeURIComponent(category)) + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Category Search
		 * Get search/{versionNumber}/categorySearch/{query}.{ext}
		 * @param {Search_versionNumberCategorySearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberCategorySearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndView(versionNumber: Search_versionNumberCategorySearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/categorySearch/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Geocode
		 * Get search/{versionNumber}/geocode/{query}.{ext}
		 * @param {Search_versionNumberGeocode_query__extGetByStoreResultAndTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} storeResult If the "storeResult" flag is set, the query will be interpreted as a stored geocode and will be billed according to the terms of use.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberGeocode_query__extGetByStoreResultAndTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndView(versionNumber: Search_versionNumberGeocode_query__extGetByStoreResultAndTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, storeResult: boolean | null | undefined, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/geocode/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&storeResult=' + storeResult + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Geometry Filter
		 * Get search/{versionNumber}/geometryFilter.{ext}
		 * @param {Search_versionNumberGeometryFilter__extGetByGeometryListAndPoiListVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {string} geometryList List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.
		 * @param {string} poiList List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberGeometryFilter__extGetByGeometryListAndPoiList(versionNumber: Search_versionNumberGeometryFilter__extGetByGeometryListAndPoiListVersionNumber, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, geometryList: string, poiList: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/geometryFilter.' + ext + '?geometryList=' + (geometryList == null ? '' : encodeURIComponent(geometryList)) + '&poiList=' + (poiList == null ? '' : encodeURIComponent(poiList)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Geometry Filter
		 * Post search/{versionNumber}/geometryFilter.{ext}
		 * @param {Search_versionNumberGeometryFilter__extPostVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberGeometryFilter__extPost(versionNumber: Search_versionNumberGeometryFilter__extPostVersionNumber, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, requestBody: Search_versionNumberGeometryFilter__extPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search/' + versionNumber + '/geometryFilter.' + ext, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Geometry Search
		 * Get search/{versionNumber}/geometrySearch/{query}.{ext}
		 * @param {Search_versionNumberGeometrySearch_query__extGetByGeometryListAndLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {string} geometryList List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberGeometrySearch_query__extGetByGeometryListAndLimitAndLanguageAndExtendedPostalCodesForAndIdxSet(versionNumber: Search_versionNumberGeometrySearch_query__extGetByGeometryListAndLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, geometryList: string | null | undefined, limit: number | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, idxSet: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/geometrySearch/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&geometryList=' + (geometryList == null ? '' : encodeURIComponent(geometryList)) + '&limit=' + limit + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Geometry Search
		 * Post search/{versionNumber}/geometrySearch/{query}.{ext}
		 * @param {Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSet(versionNumber: Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, limit: number | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, idxSet: string | null | undefined, requestBody: Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search/' + versionNumber + '/geometrySearch/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&limit=' + limit + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Nearby Search
		 * Get search/{versionNumber}/nearbySearch/.{ext}
		 * @param {Search_versionNumberNearbySearch__extGetByLatAndLonAndLimitAndOfsAndCountrySetAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} radius If radius and position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Maximum: 50000
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {number} minFuzzyLevel Minimum fuzziness level to be used.
		 *     Minimum: 1    Maximum: 4
		 * @param {number} maxFuzzyLevel Maximum fuzziness level to be used.
		 *     Minimum: 1    Maximum: 4
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberNearbySearch__extGetByLatAndLonAndLimitAndOfsAndCountrySetAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndView(versionNumber: Search_versionNumberNearbySearch__extGetByLatAndLonAndLimitAndOfsAndCountrySetAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, lat: number, lon: number, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, minFuzzyLevel: number | null | undefined, maxFuzzyLevel: number | null | undefined, idxSet: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/nearbySearch/.' + ext + '?lat=' + lat + '&lon=' + lon + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&minFuzzyLevel=' + minFuzzyLevel + '&maxFuzzyLevel=' + maxFuzzyLevel + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Points of Interest Search
		 * Get search/{versionNumber}/poiSearch/{query}.{ext}
		 * @param {Search_versionNumberPoiSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberPoiSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndView(versionNumber: Search_versionNumberPoiSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/poiSearch/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cross Street lookup
		 * Get search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}
		 * @param {Search_versionNumberReverseGeocodeCrossStreet_position__extGetByLimitAndSpatialKeysAndHeadingAndRadiusAndLanguageVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} position This is specified as a comma separated string composed of lat., lon.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {number} limit Maximum number of cross-streets to return.
		 *     Minimum: 0    Maximum: 100
		 * @param {boolean} spatialKeys If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
		 * @param {number} heading The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
		 *     Type: float
		 * @param {number} radius The maximum distance in meters from the specified position for the reverse geocoder to consider.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberReverseGeocodeCrossStreet_position__extGetByLimitAndSpatialKeysAndHeadingAndRadiusAndLanguage(versionNumber: Search_versionNumberReverseGeocodeCrossStreet_position__extGetByLimitAndSpatialKeysAndHeadingAndRadiusAndLanguageVersionNumber, position: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, limit: number | null | undefined, spatialKeys: boolean | null | undefined, heading: number | null | undefined, radius: number | null | undefined, language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/reverseGeocode/crossStreet/' + (position == null ? '' : encodeURIComponent(position)) + '.' + ext + '&limit=' + limit + '&spatialKeys=' + spatialKeys + '&heading=' + heading + '&radius=' + radius + '&language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverse Geocode
		 * Get search/{versionNumber}/reverseGeocode/{position}.{ext}
		 * @param {Search_versionNumberReverseGeocode_position__extGetBySpatialKeysAndReturnSpeedLimitAndHeadingAndRadiusAndNumberAndReturnRoadUseAndRoadUseAndCallbackVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} position This is specified as a comma separated string composed of lat., lon.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} spatialKeys If the "spatialKeys" flag is set, the response will also contain a proprietary geospatial keys for a specified location.
		 * @param {boolean} returnSpeedLimit To enable return of the posted speed limit (where available).
		 * @param {number} heading The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
		 *     Type: float
		 * @param {number} radius The maximum distance in meters from the specified position for the reverse geocoder to consider.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} number If a number is sent in along with the request, the response may include the side of the street (Left/Right) and an offset position for that number.
		 * @param {boolean} returnRoadUse Enables return of the road use array for reverse geocodes at street level.
		 * @param {string} roadUse Restricts reverse geocodes to a certain type of road use. The road use array for reverse geocodes can be one or more of: ["LimitedAccess", "Arterial", "Terminal", "Ramp", "Rotary", "LocalStreet"].
		 * @param {string} callback Specifies the jsonp callback method.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberReverseGeocode_position__extGetBySpatialKeysAndReturnSpeedLimitAndHeadingAndRadiusAndNumberAndReturnRoadUseAndRoadUseAndCallback(versionNumber: Search_versionNumberReverseGeocode_position__extGetBySpatialKeysAndReturnSpeedLimitAndHeadingAndRadiusAndNumberAndReturnRoadUseAndRoadUseAndCallbackVersionNumber, position: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, spatialKeys: boolean | null | undefined, returnSpeedLimit: boolean | null | undefined, heading: number | null | undefined, radius: number | null | undefined, number: string | null | undefined, returnRoadUse: boolean | null | undefined, roadUse: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/reverseGeocode/' + (position == null ? '' : encodeURIComponent(position)) + '.' + ext + '&spatialKeys=' + spatialKeys + '&returnSpeedLimit=' + returnSpeedLimit + '&heading=' + heading + '&radius=' + radius + '&number=' + (number == null ? '' : encodeURIComponent(number)) + '&returnRoadUse=' + returnRoadUse + '&roadUse=' + (roadUse == null ? '' : encodeURIComponent(roadUse)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Routed Filter
		 * Get search/{versionNumber}/routedFilter/{position}/{heading}.{ext}
		 * @param {Search_versionNumberRoutedFilter_position_heading__extGetByPoiListAndRoutingTimeoutVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} position This is specified as a comma separated string composed of lat., lon.
		 * @param {number} heading The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
		 *     Type: float
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {string} poiList List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.
		 * @param {number} routingTimeout Only return results that arrive from routing engine within this time limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberRoutedFilter_position_heading__extGetByPoiListAndRoutingTimeout(versionNumber: Search_versionNumberRoutedFilter_position_heading__extGetByPoiListAndRoutingTimeoutVersionNumber, position: string, heading: number, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, poiList: string, routingTimeout: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/routedFilter/' + (position == null ? '' : encodeURIComponent(position)) + '/' + heading + '.' + ext + '&poiList=' + (poiList == null ? '' : encodeURIComponent(poiList)) + '&routingTimeout=' + routingTimeout, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Routed Filter
		 * Post search/{versionNumber}/routedFilter/{position}/{heading}.{ext}
		 * @param {Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} position This is specified as a comma separated string composed of lat., lon.
		 * @param {number} heading The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
		 *     Type: float
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {number} routingTimeout Only return results that arrive from routing engine within this time limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeout(versionNumber: Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutVersionNumber, position: string, heading: number, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, routingTimeout: number | null | undefined, requestBody: Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search/' + versionNumber + '/routedFilter/' + (position == null ? '' : encodeURIComponent(position)) + '/' + heading + '.' + ext + '&routingTimeout=' + routingTimeout, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Routed Search
		 * Get search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}
		 * @param {Search_versionNumberRoutedSearch_query_position_heading__extGetByTypeaheadAndLimitAndMultiplierAndRoutingTimeoutAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {string} position This is specified as a comma separated string composed of lat., lon.
		 * @param {number} heading The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
		 *     Type: float
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} multiplier Multiplies the limit by N to gather more candidate POIs, which will then be sorted by drive distance, returning only the top candidates according to the limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} routingTimeout Only return results that arrive from routing engine within this time limit.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberRoutedSearch_query_position_heading__extGetByTypeaheadAndLimitAndMultiplierAndRoutingTimeoutAndLanguageAndExtendedPostalCodesForAndIdxSet(versionNumber: Search_versionNumberRoutedSearch_query_position_heading__extGetByTypeaheadAndLimitAndMultiplierAndRoutingTimeoutAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber, query: string, position: string, heading: number, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, multiplier: number | null | undefined, routingTimeout: number | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, idxSet: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/routedSearch/' + (query == null ? '' : encodeURIComponent(query)) + '/' + (position == null ? '' : encodeURIComponent(position)) + '/' + heading + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&multiplier=' + multiplier + '&routingTimeout=' + routingTimeout + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Low bandwith Search
		 * Get search/{versionNumber}/s/{query}.{ext}
		 * @param {Search_versionNumberS_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberS_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndView(versionNumber: Search_versionNumberS_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, idxSet: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/s/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fuzzy Search
		 * Get search/{versionNumber}/search/{query}.{ext}
		 * @param {Search_versionNumberSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * To perform a reverse geocode, the user can provide latitude and longitude coordinates directly in the query. More information can be found <a href="/search-api/search-api-documentation-search/fuzzy-search#AdditionalInfo">here</a>.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {boolean} typeahead If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} countrySet Comma separated string of country codes. This will limit the search to the specified countries.
		 * @param {number} lat Latitude where results should be biased.
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} lon Longitude where results should be biased
		 * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
		 *     Type: float
		 * @param {number} radius If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} topLeft Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} btmRight Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @param {number} minFuzzyLevel Minimum fuzziness level to be used.
		 *     Minimum: 1    Maximum: 4
		 * @param {number} maxFuzzyLevel Maximum fuzziness level to be used.
		 *     Minimum: 1    Maximum: 4
		 * @param {string} idxSet A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
		 *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of interest
		 *   - <b>Str</b> = Streets
		 *   - <b>Xstr</b> = Cross Streets (intersections)
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView} view Geopolitical View.
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndView(versionNumber: Search_versionNumberSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, typeahead: boolean | null | undefined, limit: number | null | undefined, ofs: number | null | undefined, countrySet: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, radius: number | null | undefined, topLeft: string | null | undefined, btmRight: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, minFuzzyLevel: number | null | undefined, maxFuzzyLevel: number | null | undefined, idxSet: string | null | undefined, view: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/search/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&typeahead=' + typeahead + '&limit=' + limit + '&ofs=' + ofs + '&countrySet=' + (countrySet == null ? '' : encodeURIComponent(countrySet)) + '&lat=' + lat + '&lon=' + lon + '&radius=' + radius + '&topLeft=' + (topLeft == null ? '' : encodeURIComponent(topLeft)) + '&btmRight=' + (btmRight == null ? '' : encodeURIComponent(btmRight)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)) + '&minFuzzyLevel=' + minFuzzyLevel + '&maxFuzzyLevel=' + maxFuzzyLevel + '&idxSet=' + (idxSet == null ? '' : encodeURIComponent(idxSet)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Along Route Search
		 * Post search/{versionNumber}/searchAlongRoute/{query}.{ext}
		 * @param {Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query Query string. Must be properly URL encoded.
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {number} maxDetourTime Maximum detour time
		 *     Maximum: 3600
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimit(versionNumber: Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitVersionNumber, query: string, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, maxDetourTime: number, limit: number | null | undefined, requestBody: Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search/' + versionNumber + '/searchAlongRoute/' + (query == null ? '' : encodeURIComponent(query)) + '.' + ext + '&maxDetourTime=' + maxDetourTime + '&limit=' + limit, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Structured Geocode
		 * Get search/{versionNumber}/structuredGeocode.{ext}
		 * @param {Search_versionNumberStructuredGeocode__extGetByCountryCodeAndLimitAndOfsAndStreetNumberAndStreetNameAndCrossStreetAndMunicipalityAndMunicipalitySubdivisionAndCountryTertiarySubdivisionAndCountrySecondarySubdivisionAndCountrySubdivisionAndPostalCodeAndLanguageAndExtendedPostalCodesForVersionNumber} versionNumber Service version number. The current value is 2.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt} ext Expected response format.
		 * @param {string} countryCode 2 or 3 letter country code (e.g.: FR, ES).
		 * @param {number} limit Maximum number of search results that will be returned.
		 *     Maximum: 100
		 * @param {number} ofs Starting offset of the returned results within the full result set.
		 *     Maximum: 1900
		 * @param {string} streetNumber The street number for the structured address.
		 * @param {string} streetName The street name for the structured address.
		 * @param {string} crossStreet The cross street name for the structured address.
		 * @param {string} municipality The municipality (city/town) for the structured address.
		 * @param {string} municipalitySubdivision The municipality subdivision (sub/super city) for the structured address.
		 * @param {string} countryTertiarySubdivision The named area for the structured address.
		 * @param {string} countrySecondarySubdivision The county for the structured address.
		 * @param {string} countrySubdivision The state or province for the structured address.
		 * @param {string} postalCode The zip code or postal code for the structured address.
		 * @param {string} language Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
		 * @param {string} extendedPostalCodesFor Indexes for which extended postal codes should be included in the results. Available indexes are:
		 *   - <b>Addr</b> = Address ranges
		 *   - <b>Geo</b> = Geographies
		 *   - <b>PAD</b> = Point Addresses
		 *   - <b>POI</b> = Points of Interest
		 *   - <b>Str</b> = Streets
		 *   - <b>XStr</b> = Cross Streets (intersections)
		 * @return {void} OK: the search successfully returned zero or more results.
		 */
		Search_versionNumberStructuredGeocode__extGetByCountryCodeAndLimitAndOfsAndStreetNumberAndStreetNameAndCrossStreetAndMunicipalityAndMunicipalitySubdivisionAndCountryTertiarySubdivisionAndCountrySecondarySubdivisionAndCountrySubdivisionAndPostalCodeAndLanguageAndExtendedPostalCodesFor(versionNumber: Search_versionNumberStructuredGeocode__extGetByCountryCodeAndLimitAndOfsAndStreetNumberAndStreetNameAndCrossStreetAndMunicipalityAndMunicipalitySubdivisionAndCountryTertiarySubdivisionAndCountrySecondarySubdivisionAndCountrySubdivisionAndPostalCodeAndLanguageAndExtendedPostalCodesForVersionNumber, ext: Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt, countryCode: string, limit: number | null | undefined, ofs: number | null | undefined, streetNumber: string | null | undefined, streetName: string | null | undefined, crossStreet: string | null | undefined, municipality: string | null | undefined, municipalitySubdivision: string | null | undefined, countryTertiarySubdivision: string | null | undefined, countrySecondarySubdivision: string | null | undefined, countrySubdivision: string | null | undefined, postalCode: string | null | undefined, language: string | null | undefined, extendedPostalCodesFor: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + versionNumber + '/structuredGeocode.' + ext + '?countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&limit=' + limit + '&ofs=' + ofs + '&streetNumber=' + (streetNumber == null ? '' : encodeURIComponent(streetNumber)) + '&streetName=' + (streetName == null ? '' : encodeURIComponent(streetName)) + '&crossStreet=' + (crossStreet == null ? '' : encodeURIComponent(crossStreet)) + '&municipality=' + (municipality == null ? '' : encodeURIComponent(municipality)) + '&municipalitySubdivision=' + (municipalitySubdivision == null ? '' : encodeURIComponent(municipalitySubdivision)) + '&countryTertiarySubdivision=' + (countryTertiarySubdivision == null ? '' : encodeURIComponent(countryTertiarySubdivision)) + '&countrySecondarySubdivision=' + (countrySecondarySubdivision == null ? '' : encodeURIComponent(countrySecondarySubdivision)) + '&countrySubdivision=' + (countrySubdivision == null ? '' : encodeURIComponent(countrySubdivision)) + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&extendedPostalCodesFor=' + (extendedPostalCodesFor == null ? '' : encodeURIComponent(extendedPostalCodesFor)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomVersionNumber { _2 = 0 }

	export enum Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomExt { json = 'json' }

	export enum Search_versionNumberAdditionalData__extGetByGeometriesAndGeometriesZoomGeometriesZoom { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22 }

	export enum Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewExt { json = 'json', jsonp = 'jsonp', js = 'js', xml = 'xml' }

	export enum Search_versionNumberCS_category__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewView { Unified = 'Unified', IN = 'IN', PK = 'PK', IL = 'IL', MA = 'MA' }

	export enum Search_versionNumberCategorySearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberGeocode_query__extGetByStoreResultAndTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberGeometryFilter__extGetByGeometryListAndPoiListVersionNumber { _2 = 0 }

	export enum Search_versionNumberGeometryFilter__extPostVersionNumber { _2 = 0 }

	export interface Search_versionNumberGeometryFilter__extPostPostBody {
		Search_versionNumberGeometryFilter__extPostPostBodyGeometryList?: Array<Search_versionNumberGeometryFilter__extPostPostBodyGeometryList>;
		Search_versionNumberGeometryFilter__extPostPostBodyPoiList?: Array<Search_versionNumberGeometryFilter__extPostPostBodyPoiList>;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyFormProperties {
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyFormProperties>({
		});

	}

	export interface Search_versionNumberGeometryFilter__extPostPostBodyGeometryList {
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		radius?: number | null;
		type?: string | null;
		vertices?: Array<string>;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyGeometryListFormProperties {
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		radius: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyGeometryListFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyGeometryListFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
			radius: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiList {
		address?: Search_versionNumberGeometryFilter__extPostPostBodyPoiListAddress;
		poi?: Search_versionNumberGeometryFilter__extPostPostBodyPoiListPoi;
		position?: Search_versionNumberGeometryFilter__extPostPostBodyPoiListPosition;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListFormProperties {
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyPoiListFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyPoiListFormProperties>({
		});

	}

	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListAddress {
		freeformAddress?: string | null;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListAddressFormProperties {
		freeformAddress: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyPoiListAddressFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyPoiListAddressFormProperties>({
			freeformAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListPoi {
		name?: string | null;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListPoiFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyPoiListPoiFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyPoiListPoiFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListPosition {

		/** Type: float */
		lat?: number | null;

		/** Type: float */
		lon?: number | null;
	}
	export interface Search_versionNumberGeometryFilter__extPostPostBodyPoiListPositionFormProperties {

		/** Type: float */
		lat: FormControl<number | null | undefined>,

		/** Type: float */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateSearch_versionNumberGeometryFilter__extPostPostBodyPoiListPositionFormGroup() {
		return new FormGroup<Search_versionNumberGeometryFilter__extPostPostBodyPoiListPositionFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Search_versionNumberGeometrySearch_query__extGetByGeometryListAndLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber { _2 = 0 }

	export enum Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber { _2 = 0 }

	export interface Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBody {
		Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryList?: Array<Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryList>;
	}
	export interface Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyFormProperties {
	}
	export function CreateSearch_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyFormGroup() {
		return new FormGroup<Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyFormProperties>({
		});

	}

	export interface Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryList {
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		radius?: number | null;
		type?: string | null;
		vertices?: Array<string>;
	}
	export interface Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryListFormProperties {
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		radius: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryListFormGroup() {
		return new FormGroup<Search_versionNumberGeometrySearch_query__extPostByLimitAndLanguageAndExtendedPostalCodesForAndIdxSetPostBodyGeometryListFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
			radius: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Search_versionNumberNearbySearch__extGetByLatAndLonAndLimitAndOfsAndCountrySetAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberPoiSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberReverseGeocodeCrossStreet_position__extGetByLimitAndSpatialKeysAndHeadingAndRadiusAndLanguageVersionNumber { _2 = 0 }

	export enum Search_versionNumberReverseGeocode_position__extGetBySpatialKeysAndReturnSpeedLimitAndHeadingAndRadiusAndNumberAndReturnRoadUseAndRoadUseAndCallbackVersionNumber { _2 = 0 }

	export enum Search_versionNumberRoutedFilter_position_heading__extGetByPoiListAndRoutingTimeoutVersionNumber { _2 = 0 }

	export enum Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutVersionNumber { _2 = 0 }

	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBody {
		Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiList?: Array<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiList>;
	}
	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyFormProperties {
	}
	export function CreateSearch_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyFormGroup() {
		return new FormGroup<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyFormProperties>({
		});

	}

	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiList {
		address?: Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListAddress;
		poi?: Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPoi;
		position?: Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPosition;
	}
	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListFormProperties {
	}
	export function CreateSearch_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListFormGroup() {
		return new FormGroup<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListFormProperties>({
		});

	}

	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListAddress {
		freeformAddress?: string | null;
	}
	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListAddressFormProperties {
		freeformAddress: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListAddressFormGroup() {
		return new FormGroup<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListAddressFormProperties>({
			freeformAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPoi {
		name?: string | null;
	}
	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPoiFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateSearch_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPoiFormGroup() {
		return new FormGroup<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPoiFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPosition {

		/** Type: float */
		lat?: number | null;

		/** Type: float */
		lon?: number | null;
	}
	export interface Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPositionFormProperties {

		/** Type: float */
		lat: FormControl<number | null | undefined>,

		/** Type: float */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateSearch_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPositionFormGroup() {
		return new FormGroup<Search_versionNumberRoutedFilter_position_heading__extPostByRoutingTimeoutPostBodyPoiListPositionFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Search_versionNumberRoutedSearch_query_position_heading__extGetByTypeaheadAndLimitAndMultiplierAndRoutingTimeoutAndLanguageAndExtendedPostalCodesForAndIdxSetVersionNumber { _2 = 0 }

	export enum Search_versionNumberS_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndIdxSetAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberSearch_query__extGetByTypeaheadAndLimitAndOfsAndCountrySetAndLatAndLonAndRadiusAndTopLeftAndBtmRightAndLanguageAndExtendedPostalCodesForAndMinFuzzyLevelAndMaxFuzzyLevelAndIdxSetAndViewVersionNumber { _2 = 0 }

	export enum Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitVersionNumber { _2 = 0 }

	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBody {
		route?: Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoute;
	}
	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyFormProperties {
	}
	export function CreateSearch_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyFormGroup() {
		return new FormGroup<Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyFormProperties>({
		});

	}

	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoute {
		Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePoints?: Array<Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePoints>;
	}
	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRouteFormProperties {
	}
	export function CreateSearch_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRouteFormGroup() {
		return new FormGroup<Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRouteFormProperties>({
		});

	}

	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePoints {

		/** Type: float */
		lat?: number | null;

		/** Type: float */
		lon?: number | null;
	}
	export interface Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePointsFormProperties {

		/** Type: float */
		lat: FormControl<number | null | undefined>,

		/** Type: float */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateSearch_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePointsFormGroup() {
		return new FormGroup<Search_versionNumberSearchAlongRoute_query__extPostByMaxDetourTimeAndLimitPostBodyRoutePointsFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Search_versionNumberStructuredGeocode__extGetByCountryCodeAndLimitAndOfsAndStreetNumberAndStreetNameAndCrossStreetAndMunicipalityAndMunicipalitySubdivisionAndCountryTertiarySubdivisionAndCountrySecondarySubdivisionAndCountrySubdivisionAndPostalCodeAndLanguageAndExtendedPostalCodesForVersionNumber { _2 = 0 }

}

