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
		/// The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.
		/// 
		/// The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.
		/// Use this endpoint if you are comparing model predictions to measurements.
		/// 
		/// App_api_cari7_endpoints_CARI7_ambient_dose cari7/ambient_dose
		/// </summary>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).</param>
		/// <param name="latitude">Latitude. -90 (S) to 90 (N).</param>
		/// <param name="longitude">Longitude. -180 (W) to 180 (E).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <param name="utc">Hour in 24 hour time.</param>
		/// <param name="particle">The particle type as a string. Specifying 'total' returns the dose for all particle types.
		///</param>
		/// <returns>Successful dose calculation</returns>
		public async Task<App_api_cari7_endpoints_CARI7_ambient_doseReturn> App_api_cari7_endpoints_CARI7_ambient_doseAsync(double altitude, double latitude, double longitude, int year, int month, int day, int utc, App_api_cari7_endpoints_CARI7_ambient_doseParticle particle, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "cari7/ambient_dose?altitude="+altitude+"&latitude="+latitude+"&longitude="+longitude+"&year="+year+"&month="+month+"&day="+day+"&utc="+utc+"&particle=" + particle;
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
				return JsonSerializer.Deserialize<App_api_cari7_endpoints_CARI7_ambient_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// The effective dose rate calculated for a single particle type, or accumulated over all particle types.
		/// 
		/// Effective Dose is a radiation protection quantity defined by the International Commission on
		/// Radiological Protection (ICRP) and represents the stochastic health
		/// risk to the human body at low levels of radiation.
		/// It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.
		/// Use this endpoint if you need to estimate radiation exposures of personnel.
		/// 
		/// App_api_cari7_endpoints_CARI7_effective_dose cari7/effective_dose
		/// </summary>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).</param>
		/// <param name="latitude">Latitude. -90 (S) to 90 (N).</param>
		/// <param name="longitude">Longitude. -180 (W) to 180 (E).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <param name="utc">Hour in 24 hour time.</param>
		/// <param name="particle">The particle type as a string. Specifying 'total' returns the dose for all particle types.
		///</param>
		/// <returns>Successful dose calculation</returns>
		public async Task<App_api_cari7_endpoints_CARI7_effective_doseReturn> App_api_cari7_endpoints_CARI7_effective_doseAsync(double altitude, double latitude, double longitude, int year, int month, int day, int utc, App_api_cari7_endpoints_CARI7_effective_doseParticle particle, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "cari7/effective_dose?altitude="+altitude+"&latitude="+latitude+"&longitude="+longitude+"&year="+year+"&month="+month+"&day="+day+"&utc="+utc+"&particle=" + particle;
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
				return JsonSerializer.Deserialize<App_api_cari7_endpoints_CARI7_effective_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.
		/// 
		/// The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.
		/// Use this endpoint if you are comparing model predictions to measurements.
		/// 
		/// App_api_parma_endpoints_PARMA_ambient_dose parma/ambient_dose
		/// </summary>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).</param>
		/// <param name="atmospheric_depth">Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		///</param>
		/// <param name="latitude">Latitude. -90 (S) to 90 (N).</param>
		/// <param name="longitude">Longitude. -180 (W) to 180 (E).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <param name="particle">The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		///</param>
		/// <returns>Successful dose read operation</returns>
		public async Task<App_api_parma_endpoints_PARMA_ambient_doseReturn> App_api_parma_endpoints_PARMA_ambient_doseAsync(double altitude, double atmospheric_depth, double latitude, double longitude, int year, int month, int day, App_api_parma_endpoints_PARMA_ambient_doseParticle particle, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "parma/ambient_dose?altitude="+altitude+"&atmospheric_depth="+atmospheric_depth+"&latitude="+latitude+"&longitude="+longitude+"&year="+year+"&month="+month+"&day="+day+"&particle=" + particle;
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
				return JsonSerializer.Deserialize<App_api_parma_endpoints_PARMA_ambient_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// The energy differential intensity of a particle at a given zenith angle.
		/// The differential intensity of a particle is a directional quantity that describes the number of particles per unit area, per unit solid angle, per unit energy, and per unit time. The API leverages the functionality of PARMA to calculate differential intensity distributions with energies in units of MeV and Intensity in units of /cm2/sr/MeV/s.
		/// 
		/// App_api_parma_endpoints_PARMA_differential_intensity parma/differential_intensity
		/// </summary>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).</param>
		/// <param name="atmospheric_depth">Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		///</param>
		/// <param name="latitude">Latitude. -90 (S) to 90 (N).</param>
		/// <param name="longitude">Longitude. -180 (W) to 180 (E).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <param name="particle">The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		///</param>
		/// <param name="angle">Direction cosine. 1.0 is in the downward direction.</param>
		/// <returns>Successful read of intensity operation</returns>
		public async Task<App_api_parma_endpoints_PARMA_differential_intensityReturn> App_api_parma_endpoints_PARMA_differential_intensityAsync(double altitude, double atmospheric_depth, double latitude, double longitude, int year, int month, int day, App_api_parma_endpoints_PARMA_differential_intensityParticle particle, double angle, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "parma/differential_intensity?altitude="+altitude+"&atmospheric_depth="+atmospheric_depth+"&latitude="+latitude+"&longitude="+longitude+"&year="+year+"&month="+month+"&day="+day+"&particle=" + particle+"&angle="+angle;
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
				return JsonSerializer.Deserialize<App_api_parma_endpoints_PARMA_differential_intensityReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// The effective dose rate calculated for a single particle type, or accumulated over all particle types.
		/// 
		/// Effective dose is a radiation protection quantity defined by the International Commission on Radiological Protection (ICRP) and represents the stochastic health risk to the human body at low levels of radiation. It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.
		/// Use this endpoint if you need to estimate radiation exposures of personnel.
		/// 
		/// App_api_parma_endpoints_PARMA_effective_dose parma/effective_dose
		/// </summary>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).</param>
		/// <param name="atmospheric_depth">Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		///</param>
		/// <param name="latitude">Latitude. -90 (S) to 90 (N).</param>
		/// <param name="longitude">Longitude. -180 (W) to 180 (E).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <param name="particle">The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		///</param>
		/// <returns>Successful dose read operation</returns>
		public async Task<App_api_parma_endpoints_PARMA_effective_doseReturn> App_api_parma_endpoints_PARMA_effective_doseAsync(double altitude, double atmospheric_depth, double latitude, double longitude, int year, int month, int day, App_api_parma_endpoints_PARMA_effective_doseParticle particle, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "parma/effective_dose?altitude="+altitude+"&atmospheric_depth="+atmospheric_depth+"&latitude="+latitude+"&longitude="+longitude+"&year="+year+"&month="+month+"&day="+day+"&particle=" + particle;
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
				return JsonSerializer.Deserialize<App_api_parma_endpoints_PARMA_effective_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Calculate the ambient equivalent dose along a great circle flight route.
		/// 
		/// The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.  <br> <br> Use this endpoint if you are comparing model predictions to measurements. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.
		/// 
		/// App_api_icaro_endpoints_ICARO_ambient_dose route/ambient_dose
		/// </summary>
		/// <param name="origin">The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.</param>
		/// <param name="destination">The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.</param>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="duration">The flight duration in hours. The minimum is 0, the maximum is 20 hrs.</param>
		/// <param name="initial_altitude">Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="cruising_altitudes">Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="climb_times">Climb times for each cruising altitude (hours).</param>
		/// <param name="cruising_times">Cruising times at each cruising altitude (hours).</param>
		/// <param name="descent_time">Descent time from last cruising altitude to final altitude (hours).</param>
		/// <param name="final_altitude">Final altitude (in km).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <returns>Successful dose calculation</returns>
		public async Task<App_api_icaro_endpoints_ICARO_ambient_doseReturn> App_api_icaro_endpoints_ICARO_ambient_doseAsync(string origin, string destination, double altitude, double duration, double initial_altitude, double[] cruising_altitudes, double[] climb_times, double[] cruising_times, double descent_time, double final_altitude, int year, int month, int day, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "route/ambient_dose?origin=" + (origin==null? "" : System.Uri.EscapeDataString(origin))+"&destination=" + (destination==null? "" : System.Uri.EscapeDataString(destination))+"&altitude="+altitude+"&duration="+duration+"&initial_altitude="+initial_altitude+"&"+string.Join("&", cruising_altitudes.Select(z => $"cruising_altitudes={z}"))+"&"+string.Join("&", climb_times.Select(z => $"climb_times={z}"))+"&"+string.Join("&", cruising_times.Select(z => $"cruising_times={z}"))+"&descent_time="+descent_time+"&final_altitude="+final_altitude+"&year="+year+"&month="+month+"&day="+day;
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
				return JsonSerializer.Deserialize<App_api_icaro_endpoints_ICARO_ambient_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Calculate the total effective dose along a great circle flight route.
		/// 
		/// Effective Dose is a radiation protection quantity defined by the International Commission on
		/// Radiological Protection (ICRP) and represents the stochastic health
		/// risk to the human body at low levels of radiation.
		/// It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation. <br> <br> Use this endpoint if you need to estimate radiation exposures of personnel. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.
		/// 
		/// App_api_icaro_endpoints_ICARO_effective_dose route/effective_dose
		/// </summary>
		/// <param name="origin">The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.</param>
		/// <param name="destination">The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.</param>
		/// <param name="altitude">Altitude (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="duration">The flight duration in hours. The minimum is 0, the maximum is 20 hrs.</param>
		/// <param name="initial_altitude">Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="cruising_altitudes">Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.</param>
		/// <param name="climb_times">Climb times for each cruising altitude (hours).</param>
		/// <param name="cruising_times">Cruising times at each cruising altitude (hours).</param>
		/// <param name="descent_time">Descent time from last cruising altitude to final altitude (hours).</param>
		/// <param name="final_altitude">Final altitude (in km).</param>
		/// <param name="year">Year in YYYY.</param>
		/// <param name="month">Month in MM.</param>
		/// <param name="day">Day in DD.</param>
		/// <returns>Successful dose calculation</returns>
		public async Task<App_api_icaro_endpoints_ICARO_effective_doseReturn> App_api_icaro_endpoints_ICARO_effective_doseAsync(string origin, string destination, double altitude, double duration, double initial_altitude, double[] cruising_altitudes, double[] climb_times, double[] cruising_times, double descent_time, double final_altitude, int year, int month, int day, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "route/effective_dose?origin=" + (origin==null? "" : System.Uri.EscapeDataString(origin))+"&destination=" + (destination==null? "" : System.Uri.EscapeDataString(destination))+"&altitude="+altitude+"&duration="+duration+"&initial_altitude="+initial_altitude+"&"+string.Join("&", cruising_altitudes.Select(z => $"cruising_altitudes={z}"))+"&"+string.Join("&", climb_times.Select(z => $"climb_times={z}"))+"&"+string.Join("&", cruising_times.Select(z => $"cruising_times={z}"))+"&descent_time="+descent_time+"&final_altitude="+final_altitude+"&year="+year+"&month="+month+"&day="+day;
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
				return JsonSerializer.Deserialize<App_api_icaro_endpoints_ICARO_effective_doseReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum App_api_cari7_endpoints_CARI7_ambient_doseParticle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		total = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		neutron = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		photon = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e-")]
		eMinus = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e+")]
		ePlus = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu-")]
		muMinus = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu+")]
		muPlus = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		proton = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pi-")]
		piMinus = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pi+")]
		piPlus = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		deuteron = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		triton = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		helion = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		alpha = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Li = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Be = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		B = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		C = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		N = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		O = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		F = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ne = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Na = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Mg = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Al = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Si = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cl = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ar = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		K = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ca = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sc = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ti = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		V = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cr = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Mn = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fe = 37,
	}
	
	public class App_api_cari7_endpoints_CARI7_ambient_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose rate")]
		public App_api_cari7_endpoints_CARI7_ambient_doseReturnDose_rate Dose_rate { get; set; }
	}
	
	public class App_api_cari7_endpoints_CARI7_ambient_doseReturnDose_rate
	{
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
	}
	
	public enum App_api_cari7_endpoints_CARI7_effective_doseParticle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		total = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		neutron = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		photon = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e-")]
		eMinus = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e+")]
		ePlus = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu-")]
		muMinus = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu+")]
		muPlus = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		proton = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pi-")]
		piMinus = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pi+")]
		piPlus = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		deuteron = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		triton = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		helion = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		alpha = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Li = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Be = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		B = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		C = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		N = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		O = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		F = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ne = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Na = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Mg = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Al = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Si = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		S = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cl = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ar = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		K = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ca = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sc = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ti = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		V = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cr = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Mn = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fe = 37,
	}
	
	public class App_api_cari7_endpoints_CARI7_effective_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose rate")]
		public App_api_cari7_endpoints_CARI7_effective_doseReturnDose_rate Dose_rate { get; set; }
	}
	
	public class App_api_cari7_endpoints_CARI7_effective_doseReturnDose_rate
	{
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
	}
	
	public enum App_api_parma_endpoints_PARMA_ambient_doseParticle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		total = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e-")]
		eMinus = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e+")]
		ePlus = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu+")]
		muPlus = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu-")]
		muMinus = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		gamma = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		neutron = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		proton = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		alpha = 8,
	}
	
	public class App_api_parma_endpoints_PARMA_ambient_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose rate")]
		public App_api_parma_endpoints_PARMA_ambient_doseReturnDose_rate Dose_rate { get; set; }
	}
	
	public class App_api_parma_endpoints_PARMA_ambient_doseReturnDose_rate
	{
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
	}
	
	public enum App_api_parma_endpoints_PARMA_differential_intensityParticle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		total = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e-")]
		eMinus = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e+")]
		ePlus = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu+")]
		muPlus = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu-")]
		muMinus = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		gamma = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		neutron = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		proton = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		alpha = 8,
	}
	
	public class App_api_parma_endpoints_PARMA_differential_intensityReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="energies")]
		public App_api_parma_endpoints_PARMA_differential_intensityReturnEnergies Energies { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="intensities")]
		public App_api_parma_endpoints_PARMA_differential_intensityReturnIntensities Intensities { get; set; }
	}
	
	public class App_api_parma_endpoints_PARMA_differential_intensityReturnEnergies
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public double[] Data { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
	}
	
	public class App_api_parma_endpoints_PARMA_differential_intensityReturnIntensities
	{
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public double[] Data { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
	}
	
	public enum App_api_parma_endpoints_PARMA_effective_doseParticle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		total = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e-")]
		eMinus = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="e+")]
		ePlus = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu+")]
		muPlus = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mu-")]
		muMinus = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		gamma = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		neutron = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		proton = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		alpha = 8,
	}
	
	public class App_api_parma_endpoints_PARMA_effective_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose rate")]
		public App_api_parma_endpoints_PARMA_effective_doseReturnDose_rate Dose_rate { get; set; }
	}
	
	public class App_api_parma_endpoints_PARMA_effective_doseReturnDose_rate
	{
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
	}
	
	public class App_api_icaro_endpoints_ICARO_ambient_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose")]
		public App_api_icaro_endpoints_ICARO_ambient_doseReturnDose Dose { get; set; }
	}
	
	public class App_api_icaro_endpoints_ICARO_ambient_doseReturnDose
	{
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="destination")]
		public string Destination { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="origin")]
		public string Origin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
	}
	
	public class App_api_icaro_endpoints_ICARO_effective_doseReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="dose")]
		public App_api_icaro_endpoints_ICARO_effective_doseReturnDose Dose { get; set; }
	}
	
	public class App_api_icaro_endpoints_ICARO_effective_doseReturnDose
	{
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public string Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="destination")]
		public string Destination { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="origin")]
		public string Origin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="units")]
		public string Units { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Double> Value { get; set; }
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
