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
	public class Gif
	{
		
		/// <summary>
		/// The unique bit.ly URL for this GIF
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bitly_url")]
		public string Bitly_url { get; set; }
		
		/// <summary>
		/// Currently unused
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="content_url")]
		public string Content_url { get; set; }
		
		/// <summary>
		/// The date this GIF was added to the GIPHY database.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="create_datetime")]
		public System.Nullable<System.DateTimeOffset> Create_datetime { get; set; }
		
		/// <summary>
		/// A URL used for embedding this GIF
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="embded_url")]
		public string Embded_url { get; set; }
		
		/// <summary>
		/// An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="featured_tags")]
		public string[] Featured_tags { get; set; }
		
		/// <summary>
		/// This GIF's unique ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// An object containing data for various available formats and sizes of this GIF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="images")]
		public GifImages Images { get; set; }
		
		/// <summary>
		/// The creation or upload date from this GIF's source.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="import_datetime")]
		public System.Nullable<System.DateTimeOffset> Import_datetime { get; set; }
		
		/// <summary>
		/// The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rating")]
		public string Rating { get; set; }
		
		/// <summary>
		/// The unique slug used in this GIF's URL
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="slug")]
		public string Slug { get; set; }
		
		/// <summary>
		/// The page on which this GIF was found
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public string Source { get; set; }
		
		/// <summary>
		/// The URL of the webpage on which this GIF was found.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source_post_url")]
		public string Source_post_url { get; set; }
		
		/// <summary>
		/// The top level domain of the source URL.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source_tld")]
		public string Source_tld { get; set; }
		
		/// <summary>
		/// An array of tags for this GIF (Note: Not available when using the Public Beta Key)
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public string[] Tags { get; set; }
		
		/// <summary>
		/// The date on which this gif was marked trending, if applicable.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="trending_datetime")]
		public System.Nullable<System.DateTimeOffset> Trending_datetime { get; set; }
		
		/// <summary>
		/// Type of the gif. By default, this is almost always gif
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<GifType> Type { get; set; }
		
		/// <summary>
		/// The date on which this GIF was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="update_datetime")]
		public System.Nullable<System.DateTimeOffset> Update_datetime { get; set; }
		
		/// <summary>
		/// The unique URL for this GIF
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user")]
		public User User { get; set; }
		
		/// <summary>
		/// The username this GIF is attached to, if applicable
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
	}
	
	public class GifImages
	{
		
		[System.Runtime.Serialization.DataMember(Name="downsized")]
		public Image Downsized { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="downsized_large")]
		public Image Downsized_large { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="downsized_medium")]
		public Image Downsized_medium { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="downsized_small")]
		public Image Downsized_small { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="downsized_still")]
		public Image Downsized_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_height")]
		public Image Fixed_height { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_height_downsampled")]
		public Image Fixed_height_downsampled { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_height_small")]
		public Image Fixed_height_small { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_height_small_still")]
		public Image Fixed_height_small_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_height_still")]
		public Image Fixed_height_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_width")]
		public Image Fixed_width { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_width_downsampled")]
		public Image Fixed_width_downsampled { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_width_small")]
		public Image Fixed_width_small { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_width_small_still")]
		public Image Fixed_width_small_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fixed_width_still")]
		public Image Fixed_width_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="looping")]
		public Image Looping { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="original")]
		public Image Original { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="original_still")]
		public Image Original_still { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="preview")]
		public Image Preview { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="preview_gif")]
		public Image Preview_gif { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Image
	{
		
		/// <summary>
		/// The number of frames in this GIF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="frames")]
		public string Frames { get; set; }
		
		/// <summary>
		/// The height of this GIF in pixels.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="height")]
		public string Height { get; set; }
		
		/// <summary>
		/// The URL for this GIF in .MP4 format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mp4")]
		public string Mp4 { get; set; }
		
		/// <summary>
		/// The size in bytes of the .MP4 file corresponding to this GIF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mp4_size")]
		public string Mp4_size { get; set; }
		
		/// <summary>
		/// The size of this GIF in bytes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public string Size { get; set; }
		
		/// <summary>
		/// The publicly-accessible direct URL for this GIF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// The URL for this GIF in .webp format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webp")]
		public string Webp { get; set; }
		
		/// <summary>
		/// The size in bytes of the .webp file corresponding to this GIF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webp_size")]
		public string Webp_size { get; set; }
		
		/// <summary>
		/// The width of this GIF in pixels.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="width")]
		public string Width { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GifType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		gif = 0,
	}
	
	/// <summary>
	/// The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class User
	{
		
		/// <summary>
		/// The URL for this user's avatar image.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="avatar_url")]
		public string Avatar_url { get; set; }
		
		/// <summary>
		/// The URL for the banner image that appears atop this user's profile page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="banner_url")]
		public string Banner_url { get; set; }
		
		/// <summary>
		/// The display name associated with this user (contains formatting the base username might not).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="display_name")]
		public string Display_name { get; set; }
		
		/// <summary>
		/// The URL for this user's profile.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profile_url")]
		public string Profile_url { get; set; }
		
		/// <summary>
		/// The Twitter username associated with this user, if applicable.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="twitter")]
		public string Twitter { get; set; }
		
		/// <summary>
		/// The username associated with this user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="username")]
		public string Username { get; set; }
	}
	
	/// <summary>
	/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
	///
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Meta
	{
		
		/// <summary>
		/// HTTP Response Message
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="msg")]
		public string Msg { get; set; }
		
		/// <summary>
		/// A unique ID paired with this response from the API.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="response_id")]
		public string Response_id { get; set; }
		
		/// <summary>
		/// HTTP Response Code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<System.Int32> Status { get; set; }
	}
	
	/// <summary>
	/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
	///
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Pagination
	{
		
		/// <summary>
		/// Total number of items returned.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
		
		/// <summary>
		/// Position in pagination.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="offset")]
		public System.Nullable<System.Int32> Offset { get; set; }
		
		/// <summary>
		/// Total number of items available.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total_count")]
		public System.Nullable<System.Int32> Total_count { get; set; }
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
		/// Get GIFs by ID
		/// A multiget version of the get GIF by ID endpoint.
		/// 
		/// GetGifsById gifs
		/// </summary>
		/// <param name="ids">Filters results by specified GIF IDs, separated by commas.</param>
		public async Task<GetGifsByIdReturn> GetGifsByIdAsync(string ids, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs?ids=" + (ids==null? "" : System.Uri.EscapeDataString(ids));
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
				return JsonSerializer.Deserialize<GetGifsByIdReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Random GIF
		/// Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
		/// 
		/// RandomGif gifs/random
		/// </summary>
		/// <param name="tag">Filters results by specified tag.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		public async Task<RandomGifReturn> RandomGifAsync(string tag, string rating, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs/random?tag=" + (tag==null? "" : System.Uri.EscapeDataString(tag))+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating));
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
				return JsonSerializer.Deserialize<RandomGifReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Search GIFs
		/// Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
		/// 
		/// SearchGifs gifs/search
		/// </summary>
		/// <param name="q">Search query term or prhase.</param>
		/// <param name="limit">The maximum number of records to return.</param>
		/// <param name="offset">An optional results offset.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		/// <param name="lang">Specify default language for regional content; use a 2-letter ISO 639-1 language code.</param>
		/// <returns>Search results</returns>
		public async Task<SearchGifsReturn> SearchGifsAsync(string q, int limit, int offset, string rating, string lang, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs/search?q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&limit="+limit+"&offset="+offset+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating))+"&lang=" + (lang==null? "" : System.Uri.EscapeDataString(lang));
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
				return JsonSerializer.Deserialize<SearchGifsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Translate phrase to GIF
		/// The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF
		/// 
		/// TranslateGif gifs/translate
		/// </summary>
		/// <param name="s">Search term.</param>
		public async Task<TranslateGifReturn> TranslateGifAsync(string s, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs/translate?s=" + (s==null? "" : System.Uri.EscapeDataString(s));
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
				return JsonSerializer.Deserialize<TranslateGifReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Trending GIFs
		/// Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
		/// 
		/// TrendingGifs gifs/trending
		/// </summary>
		/// <param name="limit">The maximum number of records to return.</param>
		/// <param name="offset">An optional results offset.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		public async Task<TrendingGifsReturn> TrendingGifsAsync(int limit, int offset, string rating, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs/trending?limit="+limit+"&offset="+offset+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating));
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
				return JsonSerializer.Deserialize<TrendingGifsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get GIF by Id
		/// Returns a GIF given that GIF's unique ID
		/// 
		/// GetGifById gifs/{gifId}
		/// </summary>
		/// <param name="gifId">Filters results by specified GIF ID.</param>
		public async Task<GetGifByIdReturn> GetGifByIdAsync(int gifId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "gifs/"+gifId;
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
				return JsonSerializer.Deserialize<GetGifByIdReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Random Sticker
		/// Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
		/// 
		/// RandomSticker stickers/random
		/// </summary>
		/// <param name="tag">Filters results by specified tag.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		public async Task<RandomStickerReturn> RandomStickerAsync(string tag, string rating, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stickers/random?tag=" + (tag==null? "" : System.Uri.EscapeDataString(tag))+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating));
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
				return JsonSerializer.Deserialize<RandomStickerReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Search Stickers
		/// Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.
		/// 
		/// SearchStickers stickers/search
		/// </summary>
		/// <param name="q">Search query term or prhase.</param>
		/// <param name="limit">The maximum number of records to return.</param>
		/// <param name="offset">An optional results offset.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		/// <param name="lang">Specify default language for regional content; use a 2-letter ISO 639-1 language code.</param>
		/// <returns>Search results</returns>
		public async Task<SearchStickersReturn> SearchStickersAsync(string q, int limit, int offset, string rating, string lang, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stickers/search?q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&limit="+limit+"&offset="+offset+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating))+"&lang=" + (lang==null? "" : System.Uri.EscapeDataString(lang));
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
				return JsonSerializer.Deserialize<SearchStickersReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Translate phrase to Sticker
		/// The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.
		/// 
		/// TranslateSticker stickers/translate
		/// </summary>
		/// <param name="s">Search term.</param>
		public async Task<TranslateStickerReturn> TranslateStickerAsync(string s, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stickers/translate?s=" + (s==null? "" : System.Uri.EscapeDataString(s));
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
				return JsonSerializer.Deserialize<TranslateStickerReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Trending Stickers
		/// Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.
		/// 
		/// TrendingStickers stickers/trending
		/// </summary>
		/// <param name="limit">The maximum number of records to return.</param>
		/// <param name="offset">An optional results offset.</param>
		/// <param name="rating">Filters results by specified rating.</param>
		public async Task<TrendingStickersReturn> TrendingStickersAsync(int limit, int offset, string rating, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stickers/trending?limit="+limit+"&offset="+offset+"&rating=" + (rating==null? "" : System.Uri.EscapeDataString(rating));
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
				return JsonSerializer.Deserialize<TrendingStickersReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class GetGifsByIdReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif[] Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		/// <summary>
		/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
	}
	
	public class RandomGifReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
	}
	
	public class SearchGifsReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif[] Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		/// <summary>
		/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
	}
	
	public class TranslateGifReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
	}
	
	public class TrendingGifsReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif[] Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		/// <summary>
		/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
	}
	
	public class GetGifByIdReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
	}
	
	public class RandomStickerReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
	}
	
	public class SearchStickersReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif[] Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		/// <summary>
		/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
	}
	
	public class TranslateStickerReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
	}
	
	public class TrendingStickersReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public Gif[] Data { get; set; }
		
		/// <summary>
		/// The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		/// <summary>
		/// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
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
