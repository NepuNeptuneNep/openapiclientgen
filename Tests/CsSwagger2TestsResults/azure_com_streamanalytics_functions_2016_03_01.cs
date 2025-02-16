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
	
	
	/// <summary>
	/// The binding to an Azure Machine Learning web service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceFunctionBinding : FunctionBinding
	{
		
		/// <summary>
		/// The binding properties associated with an Azure Machine learning web service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public AzureMachineLearningWebServiceFunctionBindingProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The binding properties associated with an Azure Machine learning web service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceFunctionBindingProperties
	{
		
		/// <summary>
		/// The API key used to authenticate with Request-Response endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiKey")]
		public string ApiKey { get; set; }
		
		/// <summary>
		/// Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="batchSize")]
		public System.Nullable<System.Int32> BatchSize { get; set; }
		
		/// <summary>
		/// The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endpoint")]
		public string Endpoint { get; set; }
		
		/// <summary>
		/// The inputs for the Azure Machine Learning web service endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="inputs")]
		public AzureMachineLearningWebServiceInputs Inputs { get; set; }
		
		/// <summary>
		/// A list of outputs from the Azure Machine Learning web service endpoint execution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="outputs")]
		public AzureMachineLearningWebServiceOutputColumn[] Outputs { get; set; }
	}
	
	/// <summary>
	/// Describes an output column for the Azure Machine Learning web service endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceOutputColumn
	{
		
		/// <summary>
		/// The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// The name of the output column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// The binding retrieval properties associated with an Azure Machine learning web service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceFunctionBindingRetrievalProperties
	{
		
		/// <summary>
		/// The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="executeEndpoint")]
		public string ExecuteEndpoint { get; set; }
		
		/// <summary>
		/// The function type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="udfType")]
		public System.Nullable<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType> UdfType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Scalar = 0,
	}
	
	/// <summary>
	/// The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters : FunctionRetrieveDefaultDefinitionParameters
	{
		
		/// <summary>
		/// The binding retrieval properties associated with an Azure Machine learning web service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindingRetrievalProperties")]
		public AzureMachineLearningWebServiceFunctionBindingRetrievalProperties BindingRetrievalProperties { get; set; }
	}
	
	/// <summary>
	/// Describes an input column for the Azure Machine Learning web service endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceInputColumn
	{
		
		/// <summary>
		/// The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// The zero based index of the function parameter this input maps to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mapTo")]
		public System.Nullable<System.Int32> MapTo { get; set; }
		
		/// <summary>
		/// The name of the input column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// The inputs for the Azure Machine Learning web service endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AzureMachineLearningWebServiceInputs
	{
		
		/// <summary>
		/// A list of input columns for the Azure Machine Learning web service endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="columnNames")]
		public AzureMachineLearningWebServiceInputColumn[] ColumnNames { get; set; }
		
		/// <summary>
		/// The name of the input. This is the name provided while authoring the endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// A function object, containing all information associated with the named function. All functions are contained under a streaming job.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Function : SubResource
	{
		
		/// <summary>
		/// The properties that are associated with a function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public FunctionProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionBinding
	{
		
		/// <summary>
		/// Indicates the function binding type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Describes one input parameter of a function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionInput
	{
		
		/// <summary>
		/// The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isConfigurationParameter")]
		public System.Nullable<System.Boolean> IsConfigurationParameter { get; set; }
	}
	
	/// <summary>
	/// Object containing a list of functions under a streaming job.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionListResult
	{
		
		/// <summary>
		/// The link (url) to the next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// A list of functions under a streaming job. Populated by a 'List' operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Function[] Value { get; set; }
	}
	
	/// <summary>
	/// Describes the output of a function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionOutput
	{
		
		/// <summary>
		/// The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
	}
	
	/// <summary>
	/// The properties that are associated with a function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionProperties
	{
		
		/// <summary>
		/// The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// Indicates the type of function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Parameters used to specify the type of function to retrieve the default definition for.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FunctionRetrieveDefaultDefinitionParameters
	{
		
		/// <summary>
		/// Indicates the function binding type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindingType")]
		public string BindingType { get; set; }
	}
	
	/// <summary>
	/// The binding to a JavaScript function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JavaScriptFunctionBinding : FunctionBinding
	{
		
		/// <summary>
		/// The binding properties associated with a JavaScript function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public JavaScriptFunctionBindingProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The binding properties associated with a JavaScript function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JavaScriptFunctionBindingProperties
	{
		
		/// <summary>
		/// The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="script")]
		public string Script { get; set; }
	}
	
	/// <summary>
	/// The binding retrieval properties associated with a JavaScript function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JavaScriptFunctionBindingRetrievalProperties
	{
		
		/// <summary>
		/// The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="script")]
		public string Script { get; set; }
		
		/// <summary>
		/// The function type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="udfType")]
		public AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType UdfType { get; set; }
	}
	
	/// <summary>
	/// The parameters needed to retrieve the default function definition for a JavaScript function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class JavaScriptFunctionRetrieveDefaultDefinitionParameters : FunctionRetrieveDefaultDefinitionParameters
	{
		
		/// <summary>
		/// The binding retrieval properties associated with a JavaScript function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bindingRetrievalProperties")]
		public JavaScriptFunctionBindingRetrievalProperties BindingRetrievalProperties { get; set; }
	}
	
	/// <summary>
	/// Describes the configuration of the scalar function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScalarFunctionConfiguration
	{
		
		/// <summary>
		/// The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="binding")]
		public FunctionBinding Binding { get; set; }
		
		/// <summary>
		/// A list of inputs describing the parameters of the function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="inputs")]
		public FunctionInput[] Inputs { get; set; }
		
		/// <summary>
		/// Describes the output of a function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="output")]
		public FunctionOutput Output { get; set; }
	}
	
	/// <summary>
	/// The properties that are associated with a scalar function.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScalarFunctionProperties : FunctionProperties
	{
		
		/// <summary>
		/// Describes the configuration of the scalar function.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ScalarFunctionConfiguration Properties { get; set; }
	}
	
	/// <summary>
	/// The base sub-resource model definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SubResource
	{
		
		/// <summary>
		/// Resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// The function type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum UdfType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Scalar = 0,
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
		/// Lists all of the functions under the specified streaming job.
		/// Functions_ListByStreamingJob subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions
		/// </summary>
		/// <param name="select">The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <returns>Successfully listed the functions under the specified streaming job.</returns>
		public async Task<FunctionListResult> Functions_ListByStreamingJobAsync(string select, string api_version, string subscriptionId, string resourceGroupName, string jobName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions?$select=" + (select==null? "" : System.Uri.EscapeDataString(select))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<FunctionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets details about the specified function.
		/// Functions_Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <returns>Successfully retrieved the specified function.</returns>
		public async Task<Function> Functions_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Function>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a function or replaces an already existing function under an existing streaming job.
		/// Functions_CreateOrReplace subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <param name="requestBody">The definition of the function that will be used to create a new function or replace the existing one under the streaming job.</param>
		/// <returns>The function was successfully created or replaced.</returns>
		public async Task<Function> Functions_CreateOrReplaceAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName, Function requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Function>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a function from the streaming job.
		/// Functions_Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <returns>The function was successfully deleted.</returns>
		public async Task Functions_DeleteAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
		/// Functions_Update subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <param name="requestBody">A function object. The properties specified here will overwrite the corresponding properties in the existing function (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing function will remain the same and not change as a result of this PATCH operation.</param>
		/// <returns>The function was successfully updated.</returns>
		public async Task<Function> Functions_UpdateAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName, Function requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Function>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves the default definition of a function based on the parameters specified.
		/// Functions_RetrieveDefaultDefinition subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/RetrieveDefaultDefinition
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <param name="requestBody">Parameters used to specify the type of function to retrieve the default definition for.</param>
		/// <returns>Successfully retrieved the function's default definition.</returns>
		public async Task<Function> Functions_RetrieveDefaultDefinitionAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName, FunctionRetrieveDefaultDefinitionParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"/RetrieveDefaultDefinition?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Function>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.
		/// Functions_Test subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="jobName">The name of the streaming job.</param>
		/// <param name="functionName">The name of the function.</param>
		/// <param name="requestBody">If the function specified does not already exist, this parameter must contain the full function definition intended to be tested. If the function specified already exists, this parameter can be left null to test the existing function as is or if specified, the properties specified will overwrite the corresponding properties in the existing function (exactly like a PATCH operation) and the resulting function will be tested.</param>
		/// <returns>The test operation completed successfully.</returns>
		public async Task<object> Functions_TestAsync(string api_version, string subscriptionId, string resourceGroupName, string jobName, string functionName, Function requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.StreamAnalytics/streamingjobs/"+ (jobName==null? "" : System.Uri.EscapeDataString(jobName))+"/functions/"+ (functionName==null? "" : System.Uri.EscapeDataString(functionName))+"/test?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<object>(streamContent, jsonSerializerSettings);
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
