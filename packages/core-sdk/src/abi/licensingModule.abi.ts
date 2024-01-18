export const licensingModuleRaw = [
  {
    type: "constructor",
    inputs: [
      {
        name: "params_",
        type: "tuple",
        internalType: "struct BaseModule.ModuleConstruction",
        components: [
          {
            name: "ipaRegistry",
            type: "address",
            internalType: "contract IPAssetRegistry",
          },
          {
            name: "moduleRegistry",
            type: "address",
            internalType: "contract ModuleRegistry",
          },
          {
            name: "licenseRegistry",
            type: "address",
            internalType: "contract LicenseRegistry",
          },
          {
            name: "ipOrgController",
            type: "address",
            internalType: "contract IPOrgController",
          },
        ],
      },
      { name: "licFrameworkRepo_", type: "address", internalType: "address" },
      { name: "defaultRevoker_", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DEFAULT_REVOKER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "INDEX_NOT_FOUND",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IPA_REGISTRY",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IPAssetRegistry" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "IP_ORG_CONTROLLER",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IPOrgController" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LICENSE_REGISTRY",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract LicenseRegistry" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LICENSING_FRAMEWORK_REPO",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract LicensingFrameworkRepo" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MAX_HOOKS",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MODULE_REGISTRY",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ModuleRegistry" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "clearHooks",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "ipOrg_", type: "address", internalType: "contract IIPOrg" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "configure",
    inputs: [
      { name: "ipOrg_", type: "address", internalType: "contract IIPOrg" },
      { name: "caller_", type: "address", internalType: "address" },
      { name: "params_", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      { name: "ipOrg_", type: "address", internalType: "contract IIPOrg" },
      { name: "caller_", type: "address", internalType: "address" },
      { name: "moduleParams_", type: "bytes", internalType: "bytes" },
      { name: "preHookParams_", type: "bytes[]", internalType: "bytes[]" },
      { name: "postHookParams_", type: "bytes[]", internalType: "bytes[]" },
    ],
    outputs: [{ name: "result", type: "bytes", internalType: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getIpOrgLicensorConfig",
    inputs: [{ name: "ipOrg_", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint8", internalType: "enum Licensing.LicensorConfig" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getIpOrgValueForParam",
    inputs: [
      { name: "ipOrg_", type: "address", internalType: "address" },
      { name: "paramTag_", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleHookCallback",
    inputs: [
      { name: "requestId_", type: "bytes32", internalType: "bytes32" },
      { name: "callbackData_", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hookAt",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
      { name: "index_", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hookConfigAt",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
      { name: "index_", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hookIndex",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
      { name: "hook_", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isRegistered",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
      { name: "hook_", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "moduleKey",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "ModuleKey" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "registerHooks",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "ipOrg_", type: "address", internalType: "contract IIPOrg" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
      { name: "hooks_", type: "address[]", internalType: "address[]" },
      { name: "hooksConfig_", type: "bytes[]", internalType: "bytes[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalHooks",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalHooksConfig",
    inputs: [
      { name: "hookType_", type: "uint8", internalType: "enum HookRegistry.HookType" },
      { name: "registryKey_", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "HooksCleared",
    inputs: [
      {
        name: "hType",
        type: "uint8",
        indexed: true,
        internalType: "enum HookRegistry.HookType",
      },
      { name: "registryKey", type: "bytes32", indexed: true, internalType: "bytes32" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "HooksRegistered",
    inputs: [
      {
        name: "hType",
        type: "uint8",
        indexed: true,
        internalType: "enum HookRegistry.HookType",
      },
      { name: "registryKey", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "hooks", type: "address[]", indexed: false, internalType: "address[]" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IpOrgLicensingFrameworkSet",
    inputs: [
      { name: "ipOrg", type: "address", indexed: true, internalType: "address" },
      { name: "frameworkId", type: "string", indexed: false, internalType: "string" },
      { name: "url", type: "string", indexed: false, internalType: "string" },
      {
        name: "licensorConfig",
        type: "uint8",
        indexed: false,
        internalType: "enum Licensing.LicensorConfig",
      },
      {
        name: "values",
        type: "tuple[]",
        indexed: false,
        internalType: "struct Licensing.ParamValue[]",
        components: [
          { name: "tag", type: "bytes32", internalType: "ShortString" },
          { name: "value", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestCompleted",
    inputs: [{ name: "sender", type: "address", indexed: true, internalType: "address" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestFailed",
    inputs: [
      { name: "sender", type: "address", indexed: true, internalType: "address" },
      { name: "reason", type: "string", indexed: false, internalType: "string" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestPending",
    inputs: [{ name: "sender", type: "address", indexed: true, internalType: "address" }],
    anonymous: false,
  },
  {
    type: "error",
    name: "BaseModule_HooksParamsLengthMismatch",
    inputs: [{ name: "hookType", type: "uint8", internalType: "uint8" }],
  },
  { type: "error", name: "BaseModule_OnlyModuleRegistry", inputs: [] },
  { type: "error", name: "BaseModule_ZeroIpaRegistry", inputs: [] },
  { type: "error", name: "BaseModule_ZeroLicenseRegistry", inputs: [] },
  { type: "error", name: "HookRegistry_CallerNotIPOrgOwner", inputs: [] },
  { type: "error", name: "HookRegistry_HooksConfigLengthMismatch", inputs: [] },
  {
    type: "error",
    name: "HookRegistry_IndexOutOfBounds",
    inputs: [{ name: "hooksIndex", type: "uint256", internalType: "uint256" }],
  },
  { type: "error", name: "HookRegistry_MaxHooksExceeded", inputs: [] },
  { type: "error", name: "HookRegistry_RegisteringDuplicatedHook", inputs: [] },
  {
    type: "error",
    name: "HookRegistry_RegisteringNonWhitelistedHook",
    inputs: [{ name: "hookAddress", type: "address", internalType: "address" }],
  },
  { type: "error", name: "HookRegistry_RegisteringZeroAddressHook", inputs: [] },
  { type: "error", name: "HookRegistry_ZeroModuleRegistry", inputs: [] },
  { type: "error", name: "LicensingModule_CallerNotIpOrgOwner", inputs: [] },
  { type: "error", name: "LicensingModule_CallerNotLicensor", inputs: [] },
  { type: "error", name: "LicensingModule_DerivativeNotAllowed", inputs: [] },
  { type: "error", name: "LicensingModule_DuplicateParam", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidAction", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidConfigType", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidInputValue", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidLicensorConfig", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidParamValue", inputs: [] },
  { type: "error", name: "LicensingModule_InvalidParamsLength", inputs: [] },
  { type: "error", name: "LicensingModule_IpOrgFrameworkAlreadySet", inputs: [] },
  { type: "error", name: "LicensingModule_IpOrgFrameworkNotSet", inputs: [] },
  { type: "error", name: "LicensingModule_ParamSetByIpOrg", inputs: [] },
  { type: "error", name: "LicensingModule_ParentLicenseNotActive", inputs: [] },
  { type: "error", name: "LicensingModule_ReciprocalCannotSetParams", inputs: [] },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [{ name: "str", type: "string", internalType: "string" }],
  },
  { type: "error", name: "ZeroAddress", inputs: [] },
] as const;