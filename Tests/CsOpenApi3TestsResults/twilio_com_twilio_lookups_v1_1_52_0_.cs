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
	public class Lookupsv1phone_number
	{
		
		/// <summary>
		/// A JSON string with the results of the Add-ons you specified in the `add_ons` parameters. For the format of the object, see [Using Add-ons](https://www.twilio.com/docs/add-ons).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="add_ons")]
		public object Add_ons { get; set; }
		
		/// <summary>
		/// The name of the phone number's owner. If `null`, that information was not available.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="caller_name")]
		public object Caller_name { get; set; }
		
		/// <summary>
		/// The telecom company that provides the phone number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="carrier")]
		public object Carrier { get; set; }
		
		/// <summary>
		/// The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the phone number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country_code")]
		public string Country_code { get; set; }
		
		/// <summary>
		/// The phone number, in national format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="national_format")]
		public string National_format { get; set; }
		
		/// <summary>
		/// The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="phone_number")]
		public string Phone_number { get; set; }
		
		/// <summary>
		/// The absolute URL of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Phone_number_enum_type
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		landline = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		mobile = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		voip = 2,
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
		/// FetchPhoneNumber v1/PhoneNumbers/{PhoneNumber}
		/// </summary>
		/// <param name="PhoneNumber">The phone number to lookup in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.</param>
		/// <param name="CountryCode">The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format.</param>
		/// <param name="Type">The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value.</param>
		/// <param name="AddOns">The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons).</param>
		/// <param name="AddOnsData">Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on.</param>
		/// <returns>OK</returns>
		public async Task<Lookupsv1phone_number> FetchPhoneNumberAsync(string PhoneNumber, string CountryCode, string[] Type, string[] AddOns, string AddOnsData, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/PhoneNumbers/"+ (PhoneNumber==null? "" : System.Uri.EscapeDataString(PhoneNumber))+"&CountryCode=" + (CountryCode==null? "" : System.Uri.EscapeDataString(CountryCode))+"&"+string.Join("&", Type.Select(z => $"Type={System.Uri.EscapeDataString(z.ToString())}"))+"&"+string.Join("&", AddOns.Select(z => $"AddOns={System.Uri.EscapeDataString(z.ToString())}"))+"&AddOnsData=" + (AddOnsData==null? "" : System.Uri.EscapeDataString(AddOnsData));
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
				return JsonSerializer.Deserialize<Lookupsv1phone_number>(streamContent, jsonSerializerSettings);
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