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
		/// Email Validation
		/// Email Validation
		/// EmailValidation json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<EmailValidationReturn> EmailValidationAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}";
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
				return JsonSerializer.Deserialize<EmailValidationReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Phone Validation
		/// Phone Validation
		/// PhoneValidation json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}
		/// </summary>
		/// <param name="country">country</param>
		/// <returns>Successful response</returns>
		public async Task<PhoneValidationReturn> PhoneValidationAsync(string country, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}?country=" + (country==null? "" : System.Uri.EscapeDataString(country));
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
				return JsonSerializer.Deserialize<PhoneValidationReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Malicious URL Scanner
		/// Malicious URL Scanner
		/// MaliciousUrlScanner json/url/{YOUR_API_KEY_HERE}/{URL_HERE}
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<MaliciousUrlScannerReturn> MaliciousUrlScannerAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "json/url/{YOUR_API_KEY_HERE}/{URL_HERE}";
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
				return JsonSerializer.Deserialize<MaliciousUrlScannerReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class EmailValidationReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="associated_names")]
		public EmailValidationReturnAssociated_names Associated_names { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="associated_phone_numbers")]
		public EmailValidationReturnAssociated_phone_numbers Associated_phone_numbers { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="catch_all")]
		public System.Nullable<System.Boolean> Catch_all { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="common")]
		public System.Nullable<System.Boolean> Common { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="deliverability")]
		public string Deliverability { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="disposable")]
		public System.Nullable<System.Boolean> Disposable { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="dns_valid")]
		public System.Nullable<System.Boolean> Dns_valid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="domain_age")]
		public EmailValidationReturnDomain_age Domain_age { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="domain_velocity")]
		public string Domain_velocity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="first_name")]
		public string First_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="first_seen")]
		public EmailValidationReturnFirst_seen First_seen { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fraud_score")]
		public System.Nullable<System.Double> Fraud_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="frequent_complainer")]
		public System.Nullable<System.Boolean> Frequent_complainer { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="generic")]
		public System.Nullable<System.Boolean> Generic { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="honeypot")]
		public System.Nullable<System.Boolean> Honeypot { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="leaked")]
		public System.Nullable<System.Boolean> Leaked { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="overall_score")]
		public System.Nullable<System.Double> Overall_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="recent_abuse")]
		public System.Nullable<System.Boolean> Recent_abuse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="request_id")]
		public string Request_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sanitized_email")]
		public string Sanitized_email { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="smtp_score")]
		public System.Nullable<System.Double> Smtp_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="spam_trap_score")]
		public string Spam_trap_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="suggested_domain")]
		public string Suggested_domain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="suspect")]
		public System.Nullable<System.Boolean> Suspect { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timed_out")]
		public System.Nullable<System.Boolean> Timed_out { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="user_activity")]
		public string User_activity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid")]
		public System.Nullable<System.Boolean> Valid { get; set; }
	}
	
	public class EmailValidationReturnAssociated_names
	{
		
		[System.Runtime.Serialization.DataMember(Name="names")]
		public string[] Names { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	public class EmailValidationReturnAssociated_phone_numbers
	{
		
		[System.Runtime.Serialization.DataMember(Name="phone_numbers")]
		public string[] Phone_numbers { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	public class EmailValidationReturnDomain_age
	{
		
		[System.Runtime.Serialization.DataMember(Name="human")]
		public string Human { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="iso")]
		public string Iso { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.Double> Timestamp { get; set; }
	}
	
	public class EmailValidationReturnFirst_seen
	{
		
		[System.Runtime.Serialization.DataMember(Name="human")]
		public string Human { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="iso")]
		public string Iso { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.Double> Timestamp { get; set; }
	}
	
	public class PhoneValidationReturn
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> VOIP { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="active")]
		public System.Nullable<System.Boolean> Active { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="active_status")]
		public string Active_status { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="associated_email_addresses")]
		public PhoneValidationReturnAssociated_email_addresses Associated_email_addresses { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="carrier")]
		public string Carrier { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="dialing_code")]
		public System.Nullable<System.Double> Dialing_code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="do_not_call")]
		public System.Nullable<System.Boolean> Do_not_call { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="formatted")]
		public string Formatted { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fraud_score")]
		public System.Nullable<System.Double> Fraud_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="leaked")]
		public System.Nullable<System.Boolean> Leaked { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="line_type")]
		public string Line_type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="local_format")]
		public string Local_format { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="mcc")]
		public string Mcc { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="mnc")]
		public string Mnc { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="prepaid")]
		public string Prepaid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="recent_abuse")]
		public System.Nullable<System.Boolean> Recent_abuse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="region")]
		public string Region { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="request_id")]
		public string Request_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="risky")]
		public System.Nullable<System.Boolean> Risky { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sms_domain")]
		public string Sms_domain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sms_email")]
		public string Sms_email { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="spammer")]
		public System.Nullable<System.Boolean> Spammer { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timezone")]
		public string Timezone { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="user_activity")]
		public string User_activity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid")]
		public System.Nullable<System.Boolean> Valid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="zip_code")]
		public string Zip_code { get; set; }
	}
	
	public class PhoneValidationReturnAssociated_email_addresses
	{
		
		[System.Runtime.Serialization.DataMember(Name="emails")]
		public string[] Emails { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	public class MaliciousUrlScannerReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="adult")]
		public System.Nullable<System.Boolean> Adult { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="content_type")]
		public string Content_type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="dns_valid")]
		public System.Nullable<System.Boolean> Dns_valid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="domain_age")]
		public MaliciousUrlScannerReturnDomain_age Domain_age { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="domain_rank")]
		public System.Nullable<System.Double> Domain_rank { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="ip_address")]
		public string Ip_address { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="malware")]
		public System.Nullable<System.Boolean> Malware { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Double> Page_size { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="parking")]
		public System.Nullable<System.Boolean> Parking { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="phishing")]
		public System.Nullable<System.Boolean> Phishing { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="request_id")]
		public string Request_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="risk_score")]
		public System.Nullable<System.Double> Risk_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="server")]
		public string Server { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="spamming")]
		public System.Nullable<System.Boolean> Spamming { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status_code")]
		public System.Nullable<System.Double> Status_code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="suspicious")]
		public System.Nullable<System.Boolean> Suspicious { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="unsafe")]
		public System.Nullable<System.Boolean> Unsafe { get; set; }
	}
	
	public class MaliciousUrlScannerReturnDomain_age
	{
		
		[System.Runtime.Serialization.DataMember(Name="human")]
		public string Human { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="iso")]
		public string Iso { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.Double> Timestamp { get; set; }
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