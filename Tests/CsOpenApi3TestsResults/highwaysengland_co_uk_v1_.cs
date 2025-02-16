//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Area
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Id { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		/// <summary>
		/// Required
		/// Pattern: ^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$")]
		public string XLatitude { get; set; }
		
		/// <summary>
		/// Required
		/// Pattern: ^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$")]
		public string XLongitude { get; set; }
		
		/// <summary>
		/// Required
		/// Pattern: ^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$")]
		public string YLatitude { get; set; }
		
		/// <summary>
		/// Required
		/// Pattern: ^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$")]
		public string YLongitude { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AreaResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="areas")]
		public Area[] Areas { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="row_count")]
		public System.Nullable<System.Int32> Row_count { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DailyQualityResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Qualities[] Qualities { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="row_count")]
		public System.Nullable<System.Int32> Row_count { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Qualities
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.DateTimeOffset> Date { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Quality { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Object
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class OverallQualityResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="data_quality")]
		public System.Nullable<System.Int32> Data_quality { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="end_date")]
		public string End_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="row_count")]
		public System.Nullable<System.Int32> Row_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sites")]
		public string Sites { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="start_date")]
		public string Start_date { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SiteResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="row_count")]
		public System.Nullable<System.Int32> Row_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sites")]
		public SiteResult[] Sites { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SiteResult
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Latitude { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Longitude { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SiteType
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SiteTypeLayer
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Sites[] Sites { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Sites
	{
		
		[System.Runtime.Serialization.DataMember()]
		public bool[] Active { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] Id { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public double[] Lattitude { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public double[] Longitude { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] SiteId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SiteTypeResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="row_count")]
		public System.Nullable<System.Int32> Row_count { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sitetypes")]
		public SiteType[] Sitetypes { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Returns list of areas
		/// Areas_Get v{version}/areas
		/// </summary>
		public async Task<AreaResponse> Areas_GetAsync(string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/areas";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AreaResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns details of selected area
		/// AreasGetByArea_IdsAndVersion v{version}/areas/{area_Ids}
		/// </summary>
		public async Task<AreaResponse> AreasGetByArea_IdsAndVersionAsync(string area_Ids, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/areas/"+ (area_Ids==null? "" : System.Uri.EscapeDataString(area_Ids));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<AreaResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get Site DailyQuality
		/// Quality_GetDailyDataQualityForSite v{version}/quality/daily
		/// </summary>
		/// <param name="start_date">The start date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="end_date">The end date of the report in the format ddmmyyyy (i.e 31012016)</param>
		public async Task<DailyQualityResponse> Quality_GetDailyDataQualityForSiteAsync(string siteId, string start_date, string end_date, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/quality/daily?siteId=" + (siteId==null? "" : System.Uri.EscapeDataString(siteId))+"&start_date=" + (start_date==null? "" : System.Uri.EscapeDataString(start_date))+"&end_date=" + (end_date==null? "" : System.Uri.EscapeDataString(end_date));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DailyQualityResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get Site OverallQuality
		/// Quality_GetOverallDataQualityForSites v{version}/quality/overall
		/// </summary>
		/// <param name="sites">Get site quality by site id delimited by ,</param>
		/// <param name="start_date">The start date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="end_date">The end date of the report in the format ddmmyyyy (i.e 31012016)</param>
		public async Task<OverallQualityResponse> Quality_GetOverallDataQualityForSitesAsync(string sites, string start_date, string end_date, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/quality/overall?sites=" + (sites==null? "" : System.Uri.EscapeDataString(sites))+"&start_date=" + (start_date==null? "" : System.Uri.EscapeDataString(start_date))+"&end_date=" + (end_date==null? "" : System.Uri.EscapeDataString(end_date));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OverallQualityResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the daily report.
		/// Get's the report.
		/// Reports_Index v{version}/reports/{report_type}
		/// </summary>
		/// <param name="report_type">Report Type Id (i.e Daily, Monthly, Annual)</param>
		/// <param name="sites">Comma separated list of site Ids.</param>
		/// <param name="start_date">The start date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="end_date">The end date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="page">The page offset to return.</param>
		/// <param name="page_size">The number of rows to return.</param>
		public async Task<Object> Reports_IndexAsync(string report_type, string sites, string start_date, string end_date, int page, int page_size, int reportSubTypeId, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/reports/"+ (report_type==null? "" : System.Uri.EscapeDataString(report_type))+"&sites=" + (sites==null? "" : System.Uri.EscapeDataString(sites))+"&start_date=" + (start_date==null? "" : System.Uri.EscapeDataString(start_date))+"&end_date=" + (end_date==null? "" : System.Uri.EscapeDataString(end_date))+"&page="+page+"&page_size="+page_size+"&reportSubTypeId="+reportSubTypeId;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the daily report.
		/// Get's the report.
		/// ReportsGetByReport_typeAndSitesAndStart_dateAndEnd_dateAndPageAndPage_sizeAndReportSubTypeIdAndVersion v{version}/reports/{start_date}/to/{end_date}/{report_type}
		/// </summary>
		/// <param name="report_type">Report Type Id (i.e Daily, Monthly, Annual)</param>
		/// <param name="sites">Comma separated list of site Ids.</param>
		/// <param name="start_date">The start date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="end_date">The end date of the report in the format ddmmyyyy (i.e 31012016)</param>
		/// <param name="page">The page offset to return.</param>
		/// <param name="page_size">The number of rows to return.</param>
		public async Task<Object> ReportsGetByReport_typeAndSitesAndStart_dateAndEnd_dateAndPageAndPage_sizeAndReportSubTypeIdAndVersionAsync(string report_type, string sites, string start_date, string end_date, int page, int page_size, int reportSubTypeId, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/reports/"+ (start_date==null? "" : System.Uri.EscapeDataString(start_date))+"/to/"+ (end_date==null? "" : System.Uri.EscapeDataString(end_date))+"/"+ (report_type==null? "" : System.Uri.EscapeDataString(report_type))+"&sites=" + (sites==null? "" : System.Uri.EscapeDataString(sites))+"&page="+page+"&page_size="+page_size+"&reportSubTypeId="+reportSubTypeId;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Object>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a list of sites
		/// Sites_Index v{version}/sites
		/// </summary>
		public async Task<SiteResponse> Sites_IndexAsync(string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/sites";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SiteResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get selected sites
		/// SitesGetBySite_IdsAndVersion v{version}/sites/{site_Ids}
		/// </summary>
		/// <param name="site_Ids">site id</param>
		public async Task<SiteResponse> SitesGetBySite_IdsAndVersionAsync(string site_Ids, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/sites/"+ (site_Ids==null? "" : System.Uri.EscapeDataString(site_Ids));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SiteResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return list of site types
		/// SiteTypes_Index v{version}/sitetypes
		/// </summary>
		public async Task<SiteTypeResponse> SiteTypes_IndexAsync(string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/sitetypes";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SiteTypeResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the layer metadata for the LayerId specified.
		/// SiteTypes_GetSitesForPublicFacingAPI v{version}/sitetypes/{siteType_Id}/sites
		/// </summary>
		/// <param name="siteType_Id">1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy</param>
		public async Task<SiteTypeLayer> SiteTypes_GetSitesForPublicFacingAPIAsync(int siteType_Id, string version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v"+ (version==null? "" : System.Uri.EscapeDataString(version))+"/sitetypes/"+siteType_Id+"/sites";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SiteTypeLayer>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
