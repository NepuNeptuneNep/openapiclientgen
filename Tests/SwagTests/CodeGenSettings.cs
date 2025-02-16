﻿using Fonlow.OpenApiClientGen.ClientTypes;

namespace SwagTests
{
	public static class CodeGenSettings
	{
		public static readonly ISettings Default = WithActionNameStrategy(ActionNameStrategy.Default);

		public static ISettings WithActionNameStrategy(ActionNameStrategy ans)
		{
			return new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ans,
				GenerateBothAsyncAndSync = true,
				//DecorateDataModelWithSerializable = true,
				IncludeEnsureSuccessStatusCodeExBlock = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				//HandleHttpRequestHeaders = true,
			};
		}
	}
}
