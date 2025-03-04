// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Key Vault.
 * 
 * > **NOTE:** It's possible to define Key Vault Access Policies both within the `azure.keyvault.KeyVault` resource via the `accessPolicy` block and by using the `azure.keyvault.AccessPolicy` resource. However it's not possible to use both methods to manage Access Policies within a KeyVault, since there'll be conflicts.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "resourceGroup1",
 * });
 * const testKeyVault = new azure.keyvault.KeyVault("test", {
 *     accessPolicies: [{
 *         keyPermissions: ["get"],
 *         objectId: "d746815a-0433-4a21-b95d-fc437d2d475b",
 *         secretPermissions: ["get"],
 *         storagePermissions: ["get"],
 *         tenantId: "d6e396d0-5584-41dc-9fc0-268df99bc610",
 *     }],
 *     enabledForDiskEncryption: true,
 *     location: testResourceGroup.location,
 *     name: "testvault",
 *     networkAcls: {
 *         bypass: "AzureServices",
 *         defaultAction: "Deny",
 *     },
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "standard",
 *     tags: {
 *         environment: "Production",
 *     },
 *     tenantId: "d6e396d0-5584-41dc-9fc0-268df99bc610",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault.html.markdown.
 */
export class KeyVault extends pulumi.CustomResource {
    /**
     * Get an existing KeyVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyVaultState, opts?: pulumi.CustomResourceOptions): KeyVault {
        return new KeyVault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:keyvault/keyVault:KeyVault';

    /**
     * Returns true if the given object is an instance of KeyVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyVault.__pulumiType;
    }

    /**
     * [A list](https://www.terraform.io/docs/configuration/attr-as-blocks.html) of up to 16 objects describing access policies, as described below.
     */
    public readonly accessPolicies!: pulumi.Output<outputs.keyvault.KeyVaultAccessPolicy[]>;
    /**
     * Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
     */
    public readonly enabledForDeployment!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
     */
    public readonly enabledForDiskEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
     */
    public readonly enabledForTemplateDeployment!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Key Vault. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    public readonly networkAcls!: pulumi.Output<outputs.keyvault.KeyVaultNetworkAcls | undefined>;
    /**
     * The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * ) A `sku` block as described below.
     */
    public readonly sku!: pulumi.Output<outputs.keyvault.KeyVaultSku>;
    /**
     * The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
     */
    public readonly skuName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * The URI of the Key Vault, used for performing operations on keys and secrets.
     */
    public /*out*/ readonly vaultUri!: pulumi.Output<string>;

    /**
     * Create a KeyVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyVaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyVaultArgs | KeyVaultState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KeyVaultState | undefined;
            inputs["accessPolicies"] = state ? state.accessPolicies : undefined;
            inputs["enabledForDeployment"] = state ? state.enabledForDeployment : undefined;
            inputs["enabledForDiskEncryption"] = state ? state.enabledForDiskEncryption : undefined;
            inputs["enabledForTemplateDeployment"] = state ? state.enabledForTemplateDeployment : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkAcls"] = state ? state.networkAcls : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["skuName"] = state ? state.skuName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["vaultUri"] = state ? state.vaultUri : undefined;
        } else {
            const args = argsOrState as KeyVaultArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.tenantId === undefined) {
                throw new Error("Missing required property 'tenantId'");
            }
            inputs["accessPolicies"] = args ? args.accessPolicies : undefined;
            inputs["enabledForDeployment"] = args ? args.enabledForDeployment : undefined;
            inputs["enabledForDiskEncryption"] = args ? args.enabledForDiskEncryption : undefined;
            inputs["enabledForTemplateDeployment"] = args ? args.enabledForTemplateDeployment : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkAcls"] = args ? args.networkAcls : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["skuName"] = args ? args.skuName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["vaultUri"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(KeyVault.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KeyVault resources.
 */
export interface KeyVaultState {
    /**
     * [A list](https://www.terraform.io/docs/configuration/attr-as-blocks.html) of up to 16 objects describing access policies, as described below.
     */
    readonly accessPolicies?: pulumi.Input<pulumi.Input<inputs.keyvault.KeyVaultAccessPolicy>[]>;
    /**
     * Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
     */
    readonly enabledForDeployment?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
     */
    readonly enabledForDiskEncryption?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
     */
    readonly enabledForTemplateDeployment?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    readonly networkAcls?: pulumi.Input<inputs.keyvault.KeyVaultNetworkAcls>;
    /**
     * The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * ) A `sku` block as described below.
     */
    readonly sku?: pulumi.Input<inputs.keyvault.KeyVaultSku>;
    /**
     * The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
     */
    readonly skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * The URI of the Key Vault, used for performing operations on keys and secrets.
     */
    readonly vaultUri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyVault resource.
 */
export interface KeyVaultArgs {
    /**
     * [A list](https://www.terraform.io/docs/configuration/attr-as-blocks.html) of up to 16 objects describing access policies, as described below.
     */
    readonly accessPolicies?: pulumi.Input<pulumi.Input<inputs.keyvault.KeyVaultAccessPolicy>[]>;
    /**
     * Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
     */
    readonly enabledForDeployment?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
     */
    readonly enabledForDiskEncryption?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
     */
    readonly enabledForTemplateDeployment?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    readonly networkAcls?: pulumi.Input<inputs.keyvault.KeyVaultNetworkAcls>;
    /**
     * The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * ) A `sku` block as described below.
     */
    readonly sku?: pulumi.Input<inputs.keyvault.KeyVaultSku>;
    /**
     * The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
     */
    readonly skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    readonly tenantId: pulumi.Input<string>;
}
