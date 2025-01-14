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
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// The type that defines the fields for the currency and a monetary amount.
	/// </summary>
	public class Amount
	{
		
		/// <summary>
		/// The three-letter ISO 4217 code representing the currency of the amount in the value field. Restriction: Only the currency of the marketplace is supported. For example, on the US marketplace the only currency supported is USD. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/listing/types/CurrencyCodeEnum.html'>eBay API documentation</a>
		/// </summary>
		public string Currency { get; set; }
		
		/// <summary>
		/// The monetary amount, in the currency specified by the currency field.
		/// </summary>
		public string Value { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the item aspects.
	/// </summary>
	public class Aspect
	{
		
		/// <summary>
		/// The name of an aspect, such and Brand.
		/// </summary>
		public string Name { get; set; }
		
		/// <summary>
		/// A list of potential values for this aspect.
		/// </summary>
		public string[] Values { get; set; }
	}
	
	/// <summary>
	/// This type is used to identify the charitable organization that will receive a percentage of sale proceeds for each sale generated by the listing. This container also includes the donation percentage, which is the percentage of the sale proceeds that the charitable organization will get. In order to receive a percentage of the sales proceeds, the non-profit organization must be registered with the PayPal Giving Fund, which is a partner of eBay for Charity.
	/// </summary>
	public class Charity
	{
		
		/// <summary>
		/// This field sets the percentage of the purchase price that the charitable organization (identified in the charityId field) will receive for each sale that the listing generates. This field is conditionally required if a seller is planning on donating a percentage of the sale proceeds to a charitable organization. This numeric value can range from 10 to 100, and in any 5 (percent) increments in between this range (e.g. 10, 15, 20...95,... 100). The seller would pass in 10 for 10 percent, 15 for 15 percent, 20 for 20 percent, and so on, all the way to 100 for 100 percent. Note: For this field, createItemDraft will only validate that a positive integer value is supplied, so the listing draft will still be successfully created (with no error or warning message) if a non-supported value is specified. However, if the seller attempted to publish this listing draft with an unsupported value, the charity information would just be dropped from the listing.
		/// </summary>
		public string DonationPercentage { get; set; }
		
		/// <summary>
		/// The eBay-assigned unique identifier of the charitable organization that will receive a percentage of the sales proceeds. The charitable organization must be reqistered with the PayPal Giving Fund in order to receive sales proceeds through eBay listings. This field is conditionally required if a seller is planning on donating a percentage of the sale proceeds to a charitable organization. The eBay-assigned unique identifier of a charitable organization can be found using the GetCharities call of the Trading API. In the GetCharities call response, this unique identifier is shown in the id attribute of the Charity container.
		/// </summary>
		public string CharityId { get; set; }
	}
	
	/// <summary>
	/// This type defines the fields that can be returned in an error.
	/// </summary>
	public class Error
	{
		
		/// <summary>
		/// Identifies the type of erro.
		/// </summary>
		public string Category { get; set; }
		
		/// <summary>
		/// Name for the primary system where the error occurred. This is relevant for application errors.
		/// </summary>
		public string Domain { get; set; }
		
		/// <summary>
		/// A unique number to identify the error.
		/// </summary>
		public System.Nullable<System.Int32> ErrorId { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		public string[] InputRefIds { get; set; }
		
		/// <summary>
		/// A more detailed explanation of the error.
		/// </summary>
		public string LongMessage { get; set; }
		
		/// <summary>
		/// Information on how to correct the problem, in the end user's terms and language where applicable.
		/// </summary>
		public string Message { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		public string[] OutputRefIds { get; set; }
		
		/// <summary>
		/// An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
		/// </summary>
		public ErrorParameter[] Parameters { get; set; }
		
		/// <summary>
		/// Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.
		/// </summary>
		public string Subdomain { get; set; }
	}
	
	public class ErrorParameter
	{
		
		/// <summary>
		/// The object of the error.
		/// </summary>
		public string Name { get; set; }
		
		/// <summary>
		/// The value of the object.
		/// </summary>
		public string Value { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the listing details.
	/// </summary>
	public class ItemDraft
	{
		
		/// <summary>
		/// The ID of the leaf category associated with this item. A leaf category is the lowest level in that category and has no children. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored.
		/// </summary>
		public string CategoryId { get; set; }
		
		/// <summary>
		/// An enumeration value representing the condition of the item, such as NEW. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/listing/types/ConditionEnum.html'>eBay API documentation</a>
		/// </summary>
		public string Condition { get; set; }
		
		/// <summary>
		/// The format of the listing. Valid Values: FIXED_PRICE and AUCTION For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/listing/types/ListingFormatEnum.html'>eBay API documentation</a>
		/// </summary>
		public string Format { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the price details for an item.
		/// </summary>
		public PricingSummary PricingSummary { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the aspects of a product.
		/// </summary>
		public Product Product { get; set; }
		
		/// <summary>
		/// This type is used to identify the charitable organization that will receive a percentage of sale proceeds for each sale generated by the listing. This container also includes the donation percentage, which is the percentage of the sale proceeds that the charitable organization will get. In order to receive a percentage of the sales proceeds, the non-profit organization must be registered with the PayPal Giving Fund, which is a partner of eBay for Charity.
		/// </summary>
		public Charity Charity { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the price details for an item.
	/// </summary>
	public class PricingSummary
	{
		
		/// <summary>
		/// The type that defines the fields for the currency and a monetary amount.
		/// </summary>
		public Amount AuctionReservePrice { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the currency and a monetary amount.
		/// </summary>
		public Amount AuctionStartPrice { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the currency and a monetary amount.
		/// </summary>
		public Amount Price { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the aspects of a product.
	/// </summary>
	public class Product
	{
		
		/// <summary>
		/// The list of item aspects that describe the item (such as size, color, capacity, model, brand, etc.)
		/// </summary>
		public Aspect[] Aspects { get; set; }
		
		/// <summary>
		/// The name brand of the item, such as Nike, Apple, etc.
		/// </summary>
		public string Brand { get; set; }
		
		/// <summary>
		/// The description of the item that was created by the seller. This can be plain text or rich content.
		/// </summary>
		public string Description { get; set; }
		
		/// <summary>
		/// An EPID is the eBay product identifier of a product from the eBay product catalog. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored.
		/// </summary>
		public string Epid { get; set; }
		
		/// <summary>
		/// The image URLs of the item. The first URL will be the primary image, which appears on the View Item page in the eBay listing. The URL can be from the following: The eBay Picture Services (images previously uploaded). A server outside of eBay (self-hosted). For more details, see PictureURL and Introduction to Pictures in Listings. Maximum: 12 URLs (for most categories and marketplaces) Restrictions: You cannot mix self-hosted and EPS-hosted URLs in the same listing. All image URLs must be 'https'.
		/// </summary>
		public string[] ImageUrls { get; set; }
		
		/// <summary>
		/// The seller-created title of the item. This should include unique characteristics of the item, such as brand, model, color, size, capacity, etc. For example: Levi's 501 size 10 black jeans
		/// </summary>
		public string Title { get; set; }
	}
	
	/// <summary>
	/// The type that defines the field for the createItemDraft response.
	/// </summary>
	public class ItemDraftResponse
	{
		
		/// <summary>
		/// The eBay generated ID of the listing draft.
		/// </summary>
		public string ItemDraftId { get; set; }
		
		/// <summary>
		/// The URI the Partner uses to send the seller to their listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using a mobile app.
		/// </summary>
		public string SellFlowNativeUri { get; set; }
		
		/// <summary>
		/// The web URL the Partner uses to send the seller to the listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using mobile web (mweb) or the desktop web. Note: You must construct the URL using the URL returned in this field and a session token. For example: sellFlowUrl?id_token=session_token
		/// </summary>
		public string SellFlowUrl { get; set; }
	}
	
	public partial class MyClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MyClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
		/// CreateItemDraft item_draft/
		/// </summary>
		public async Task CreateItemDraftAsync(ItemDraft requestBody)
		{
			var requestUri = "item_draft/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
		/// CreateItemDraft item_draft/
		/// </summary>
		public void CreateItemDraft(ItemDraft requestBody)
		{
			var requestUri = "item_draft/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.SendAsync(httpRequestMessage).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
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
