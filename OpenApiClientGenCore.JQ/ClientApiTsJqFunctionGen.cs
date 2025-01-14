﻿using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Linq;
using Fonlow.OpenApiClientGen.ClientTypes;
using System.Globalization;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription for AXIOS
	/// </summary>
	public class ClientApiTsJqFunctionGen : ClientApiTsFunctionGenBase
	{
		readonly ISettings settings;
		readonly string contentType;

		public ClientApiTsJqFunctionGen(ISettings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = ActionName,
			};
		}

		protected override void RenderImplementation()
		{
			string httpMethodName = HttpMethod.ToString().ToLower(CultureInfo.CurrentCulture); //Method is always uppercase.
																							   //deal with parameters
			var parameters = CreateCodeParameterDeclarationExpressions();

			var returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || String.IsNullOrEmpty(returnTypeText) || returnTypeText == "response")
			{
				returnTypeText = "void";
			}
			var callbackTypeText = String.Format("(data : {0}) => any", returnTypeText);

			Debug.WriteLine("callback: " + callbackTypeText);
			var callbackTypeReference = new CodeSnipetTypeReference(callbackTypeText);
			Method.Parameters.AddRange(parameters);
			Method.Parameters.Add(new CodeParameterDeclarationExpression(callbackTypeReference, "callback"));

			if (RequestBodyCodeTypeReference != null)
			{
				CodeParameterDeclarationExpression p = new(RequestBodyCodeTypeReference, "requestBody");
				Method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				Method.Parameters.Add(new CodeParameterDeclarationExpression(
					"() => {[header: string]: string}", "headersHandler?"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
#pragma warning disable CA1508 // Avoid dead conditional code
			string uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" : RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");
#pragma warning restore CA1508 // Avoid dead conditional code

			string headerHandlerCall = settings.HandleHttpRequestHeaders ? ", headersHandler" : String.Empty;

			if (httpMethodName == "get" || httpMethodName == "delete")
			{
				Method.Statements.Add(new CodeSnippetStatement($"this.httpClient.{httpMethodName}({uriText}, callback, this.error, this.statusCode{headerHandlerCall});"));
			}
			else if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
			{
				if (RequestBodyCodeTypeReference == null) // no body
				{
					Method.Statements.Add(new CodeSnippetStatement($"this.httpClient.{httpMethodName}({uriText}, null, callback, this.error, this.statusCode, '{contentType}'{headerHandlerCall});"));
				}
				else
				{
					Method.Statements.Add(new CodeSnippetStatement($"this.httpClient.{httpMethodName}({uriText}, requestBody, callback, this.error, this.statusCode, '{contentType}'{headerHandlerCall});"));
				}

			}
			else
			{
				Debug.Assert(false, $"How come with {httpMethodName}?");
			}
		}

	}

}
