using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public class CodeGenCsTests
	{
		public CodeGenCsTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output, CodeGenSettings.Default,
				(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true),
				(bool success)=> Assert.True(success));
		}

		readonly CSharpTestHelper helper;

		void GenerateAndAssertAndBuild(string filePath, string expectedFile, ISettings mySettings = null)
		{
			helper.GenerateAndAssertAndBuild(filePath, expectedFile, mySettings);
		}

		[Fact]
		public void TestValuesPaths()
		{
			GenerateAndAssertAndBuild("SwagMock/ValuesPaths.json", "Results/ValuesPaths.cs");
		}

		[Fact]
		public void TestSimplePet()
		{
			GenerateAndAssertAndBuild("SwagMock/SimplePet.json", "Results/SimplePet.cs");
		}

		[Fact]
		public void TestPet()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet.cs");
		}

		[Fact]
		public void TestPetReturnNumber()
		{
			GenerateAndAssertAndBuild("SwagMock/petReturnNumber.yaml", "Results/PetReturnNumber.cs");
		}

		[Fact]
		public void TestPetDicInt64()
		{
			GenerateAndAssertAndBuild("SwagMock/petDicInt64.yaml", "Results/PetDicInt64.cs");
		}

		[Fact]
		public void TestPetWithCancellationToken()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet_Cancellationtoken.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				GenerateBothAsyncAndSync = true,
				//DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				CancellationTokenEnabled = true,
				//HandleHttpRequestHeaders = true,
			}
			);
		}

		[Fact]
		public void TestPetWithCancellationTokenAndHeadersHandling()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet_CancellationtokenAndHeadersHandling.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				GenerateBothAsyncAndSync = true,
				//DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				CancellationTokenEnabled = true,
				HandleHttpRequestHeaders = true,
			}
			);
		}

		[Fact]
		public void TestPet_DisableSystemNullableByDefault()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.DisableSystemNullableByDefault = true;
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet_DisableSystemNullableByDefault.cs", settings);
		}

		[Fact]
		public void TestPet_DecorateDataModelWithPropertyName()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.DecorateDataModelWithPropertyName = true;
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet_DecorateDataModelWithPropertyName.cs", settings);
		}

		[Fact]
		public void TestPet_EnumToString()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.DecorateDataModelWithDataContract = true;
			settings.EnumToString = true;
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/Pet_EnumToString.cs", settings);
		}

		[Fact]
		public void TestPet_UseCSharpNullable()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.UseNullableQuestionMark = true;
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/PetNullable.cs", settings);
		}

		[Fact]
		public void TestPetByTags()
		{
			GenerateAndAssertAndBuild("SwagMock/petByTags.yaml", "Results/PetByTags.cs");
		}

		[Fact]
		public void TestPetByNumbers()
		{
			GenerateAndAssertAndBuild("SwagMock/petByNumbers.yaml", "Results/PetByNumbers.cs");
		}

		[Fact]
		public void TestPetWithDataContractAttribute()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/PetDataContracts.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				GenerateBothAsyncAndSync = true,
				DecorateDataModelWithDataContract = true,
				DataContractNamespace = "http://openapidemo.com/09/2019",
				DecorateDataModelWithSerializable = true
			});
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/PetPathAsContainer.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.MethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.Path,
				GenerateBothAsyncAndSync = false
			});
		}

		[Fact]
		public void TestPetWithGodContainerAndPathAction()
		{
			GenerateAndAssertAndBuild("SwagMock/pet.yaml", "Results/PetGodClass.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
				GenerateBothAsyncAndSync = false
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			GenerateAndAssertAndBuild("SwagMock/petByStatus.yaml", "Results/PetFindByStatus.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetBackup()
		{
			GenerateAndAssertAndBuild("SwagMock/petBackup.yaml", "Results/PetBackup.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetDelete()
		{
			GenerateAndAssertAndBuild("SwagMock/PetDelete.json", "Results/PetDelete.cs");
		}

		[Fact]
		public void TestPetTypes()
		{
			GenerateAndAssertAndBuild("SwagMock/petTypes.json", "Results/PetTypes.cs");
		}

		[Fact]
		public void TestPetStore()
		{
			GenerateAndAssertAndBuild("SwagMock/petStore.yaml", "Results/PetStore.cs");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			GenerateAndAssertAndBuild("SwagMock/petStoreExpanded.yaml", "Results/PetStoreExpanded.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				GenerateBothAsyncAndSync = false,
				HandleHttpRequestHeaders = true,
			});
		}

		[Fact]
		public void TestUspto()
		{
			GenerateAndAssertAndBuild("SwagMock/uspto.yaml", "Results/Uspto.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				GenerateBothAsyncAndSync = false,
				HandleHttpRequestHeaders = true,
			});
		}

		[Fact]
		public void TestMcp()
		{
			GenerateAndAssertAndBuild("SwagMock/mcp3.yaml", "Results/mcp.cs", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "McpClient",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.None,
				GenerateBothAsyncAndSync = false,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				PathPrefixToRemove = "/mcp",
				HandleHttpRequestHeaders = true,
			});
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			GenerateAndAssertAndBuild("SwagMock/redocOpenApi200501.json", "Results/redocOpenApi200501.cs");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_account_v1_oas3.json", "Results/sell_account.cs");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_analytics_v1_oas3.yaml", "Results/sell_analytics.cs");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_compliance_v1_oas3.yaml", "Results/sell_compliance.cs");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_finances_v1_oas3.yaml", "Results/sell_finances.cs");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_inventory_v1_oas3.yaml", "Results/sell_inventory.cs");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_listing_v1_beta_oas3.yaml", "Results/sell_listing.cs");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_logistics_v1_oas3.json", "Results/sell_logistics.cs");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_negotiation_v1_oas3.yaml", "Results/sell_negotiation.cs");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_marketing_v1_oas3.json", "Results/sell_marketing.cs");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_metadata_v1_oas3.json", "Results/sell_metadata.cs");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			GenerateAndAssertAndBuild("SwagMock/sell_recommendation_v1_oas3.yaml", "Results/sell_recommendation.cs");
		}

		[Fact]
		public void TestEBay_buy_browse()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_browse_v1_beta_oas3.json", "Results/buy_browse.cs");
		}

		[Fact]
		public void TestEBay_buy_feed()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_feed_v1_beta_oas3.json", "Results/buy_feed.cs");
		}

		[Fact]
		public void TestEBay_buy_marketing()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_marketing_v1_beta_oas3.yaml", "Results/buy_marketing.cs");
		}

		[Fact]
		public void TestEBay_buy_marketplace_insights()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_marketplace_insights_v1_beta_oas3.yaml", "Results/buy_marketplace_insights.cs");
		}

		[Fact]
		public void TestEBay_buy_offer()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_offer_v1_beta_oas3.yaml", "Results/buy_offer.cs");
		}

		[Fact]
		public void TestEBay_buy_order()
		{
			GenerateAndAssertAndBuild("SwagMock/buy_order_v1_beta_oas3.json", "Results/buy_order.cs");
		}

		[Fact]
		public void TestEBay_buy_order_ArrayAsList()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.ArrayAs = ArrayAsIEnumerableDerived.List;
			GenerateAndAssertAndBuild("SwagMock/buy_order_v1_beta_oas3.json", "Results/buy_order_ArrayAsList.cs", settings);
		}

		[Fact]
		public void TestEBay_buy_order_ArrayAsCollection()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.ArrayAs = ArrayAsIEnumerableDerived.ICollection;
			GenerateAndAssertAndBuild("SwagMock/buy_order_v1_beta_oas3.json", "Results/buy_order_ArrayAsCollection.cs", settings);
		}

		[Fact]
		public void TestEBay_commerce_catalog()
		{
			GenerateAndAssertAndBuild("SwagMock/commerce_catalog_v1_beta_oas3.json", "Results/commerce_catalog.cs");
		}

		[Fact]
		public void TestEBay_commerce_identity()
		{
			GenerateAndAssertAndBuild("SwagMock/commerce_identity_v1_oas3.json", "Results/commerce_identity.cs");
		}

		[Fact]
		public void TestEBay_commerce_taxonomy()
		{
			GenerateAndAssertAndBuild("SwagMock/commerce_taxonomy_v1_beta_oas3.json", "Results/commerce_taxonomy.cs");
		}

		[Fact]
		public void TestEBay_commerce_translation()
		{
			GenerateAndAssertAndBuild("SwagMock/commerce_translation_v1_oas3.json", "Results/commerce_translation.cs");
		}

		[Fact]
		public void TestEBay_developer_analytics()
		{
			GenerateAndAssertAndBuild("SwagMock/developer_analytics_v1_beta_oas3.json", "Results/developer_analytics.cs");
		}

		[Fact]
		public void Testxero_accounting()
		{
			GenerateAndAssertAndBuild("SwagMock/xero_accounting.yaml", "Results/xero_accounting.cs");
		}

		[Fact]
		public void Testxero_assets()
		{
			GenerateAndAssertAndBuild("SwagMock/xero_assets.yaml", "Results/xero_assets.cs");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			GenerateAndAssertAndBuild("SwagMock/xero_bankfeeds.yaml", "Results/xero_bankfeeds.cs");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			GenerateAndAssertAndBuild("SwagMock/xero-payroll-au.yaml", "Results/xero-payroll-au.cs");
		}

		[Fact]
		public void Testxero_identity()
		{
			GenerateAndAssertAndBuild("SwagMock/xero-identity.yaml", "Results/xero-identity.cs");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			GenerateAndAssertAndBuild("SwagMock/xero-payroll-uk.yaml", "Results/xero-payroll-uk.cs");
		}

		[Fact]
		public void TestGoogleBooks()
		{
			GenerateAndAssertAndBuild("SwagMock/googleBooksOpenApi.yaml", "Results/googleBooksOpenApi.cs");
		}

		[Fact(Skip = "Not sure")]
		public void TestAzureSecurityInsights()
		{
			GenerateAndAssertAndBuild("SwagMock/AzureSecurityInsights.yaml", "Results/AzureSecurityInsights.cs");
			// AlertRules_CreateOrUpdateAction in generated codes should be mapped to
			// https://learn.microsoft.com/en-us/dotnet/api/azure.resourcemanager.securityinsights.securityinsightsalertruleactioncollection.createorupdate?view=azure-dotnet#azure-resourcemanager-securityinsights-securityinsightsalertruleactioncollection-createorupdate(azure-waituntil-system-string-azure-resourcemanager-securityinsights-models-securityinsightsalertruleactioncreateorupdatecontent-system-threading-cancellationtoken)
			// I am not sure if the yaml is ever correct, or there should be an updated one somewhere?
		}

		/// <summary>
		/// OpenApi v3.1
		/// </summary>
		[Fact(Skip = "Until OpenApi v3.1 is supported by Microsoft.OpenApi.Readers")]
		public void Testwebhook31()
		{
			GenerateAndAssertAndBuild("SwagMock/webhook31.yaml", "Results/webhook31.cs");
		}

	}
}