// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a Public IP Prefix.
 * 
 * > **NOTE** Public IP Prefix are currently in Public Preview. You can find more information about [Public IP Preifx Preview here](https://docs.microsoft.com/en-us/azure/virtual-network/public-ip-address-prefix).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "resourceGroup1",
 * });
 * const testPublicIpPrefix = new azure.network.PublicIpPrefix("test", {
 *     location: testResourceGroup.location,
 *     name: "acceptanceTestPublicIpPrefix1",
 *     prefixLength: 31,
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 */
export class PublicIpPrefix extends pulumi.CustomResource {
    /**
     * Get an existing PublicIpPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpPrefixState, opts?: pulumi.CustomResourceOptions): PublicIpPrefix {
        return new PublicIpPrefix(name, <any>state, { ...opts, id: id });
    }

    /**
     * The IP address prefix value that was allocated.
     */
    public /*out*/ readonly ipPrefix: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
     */
    public readonly prefixLength: pulumi.Output<number | undefined>;
    /**
     * The name of the resource group in which to create the public IP.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    public readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    public readonly zones: pulumi.Output<string | undefined>;

    /**
     * Create a PublicIpPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpPrefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIpPrefixArgs | PublicIpPrefixState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PublicIpPrefixState = argsOrState as PublicIpPrefixState | undefined;
            inputs["ipPrefix"] = state ? state.ipPrefix : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["prefixLength"] = state ? state.prefixLength : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as PublicIpPrefixArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["prefixLength"] = args ? args.prefixLength : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["ipPrefix"] = undefined /*out*/;
        }
        super("azure:network/publicIpPrefix:PublicIpPrefix", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PublicIpPrefix resources.
 */
export interface PublicIpPrefixState {
    /**
     * The IP address prefix value that was allocated.
     */
    readonly ipPrefix?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
     */
    readonly prefixLength?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the public IP.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    readonly zones?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicIpPrefix resource.
 */
export interface PublicIpPrefixArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
     */
    readonly prefixLength?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the public IP.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Public IP in.
     */
    readonly zones?: pulumi.Input<string>;
}
