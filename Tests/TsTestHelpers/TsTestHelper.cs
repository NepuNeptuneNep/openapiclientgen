﻿using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.Diagnostics;
using System.IO;
using Xunit;

namespace Fonlow.OpenApiClientGen.TestHelpers
{
	/// <summary>
	/// For integration testing for TypeScript. Though injecting a code gen type, this can be used for various TypeScript codes generators for various TypeScript libs and frameworks.
	/// Generate and assert.
	/// </summary>
	public class TsTestHelper
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="codeGenType">Code gen Type to be instantiated.</param>
		public TsTestHelper(Type codeGenType, ITestingSettings testingSettings, Action<string, string> assertEqual)
		{
			this.codeGenType = codeGenType;
			this.testingSettings = testingSettings;
			this.assertEqual = assertEqual;
		}

		readonly Type codeGenType;
		protected readonly ITestingSettings testingSettings;
		protected readonly Action<string, string> assertEqual;

		static OpenApiDocument ReadOpenApiDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		/// <summary>
		/// Translate OpenApi definition file to codes
		/// </summary>
		/// <param name="defFilePath"></param>
		/// <param name="mySettings"></param>
		/// <returns>Codes generated</returns>
		public string TranslateDefToCode(string defFilePath, ISettings mySettings = null)
		{
			static string CreateTsPath(string folder, string fileName)
			{
				if (!string.IsNullOrEmpty(folder))
				{
					string theFolder;
					try
					{
						theFolder = Path.IsPathRooted(folder) ?
							folder : Path.Combine(Directory.GetCurrentDirectory(), folder);

					}
					catch (ArgumentException e)
					{
						Trace.TraceWarning(e.Message);
						throw;
					}

					if (!Directory.Exists(theFolder))
					{
						//throw new ArgumentException("TypeScript Folder Not Exist");
						Directory.CreateDirectory(theFolder);
					}
					return Path.Combine(theFolder, fileName);
				};

				return null;
			}

			OpenApiDocument doc = ReadOpenApiDef(defFilePath);

			ISettings settings = mySettings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				DataAnnotationsToComments = true,
				//EnumToString = true, for baseline tests, false is desired.
			};

			System.CodeDom.CodeCompileUnit codeCompileUnit = new();
			System.CodeDom.CodeNamespace clientNamespace = new(settings.ClientNamespace);
			codeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom
			JSOutput jsOutput = new()
			{
				JSPath = CreateTsPath("Results", defFilePath),
				AsModule = true,
				ContentType = "application/json;charset=UTF-8",
			};

			Fonlow.CodeDom.Web.Ts.ControllersTsClientApiGenBase gen = (Fonlow.CodeDom.Web.Ts.ControllersTsClientApiGenBase)Activator.CreateInstance(codeGenType, settings, jsOutput);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		protected static string ReadFromResults(string filePath)
		{
			return File.ReadAllText(filePath);
		}

		/// <summary>
		/// Generate codes and compare with what generated in the past.
		/// </summary>
		/// <param name="openApiFile"></param>
		/// <param name="expectedFile"></param>
		/// <param name="mySettings"></param>
		public void GenerateAndAssert(string openApiFile, string expectedFile, ISettings mySettings = null)
		{
			string s = TranslateDefToCode(openApiFile, mySettings);
			if (testingSettings.UpdateGenerated)
			{
				File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			}

			string expected = ReadFromResults(expectedFile);
			assertEqual(expected, s);
		}
	}

}
