// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an IotHub Shared Access Policy
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 *     name: "resourceGroup1",
 * });
 * const exampleIoTHub = new azure.iot.IoTHub("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "S1",
 *         tier: "Standard",
 *     },
 * });
 * const exampleSharedAccessPolicy = new azure.iot.SharedAccessPolicy("example", {
 *     iothubName: exampleIoTHub.name,
 *     name: "example",
 *     registryRead: true,
 *     registryWrite: true,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_shared_access_policy.html.markdown.
 */
export class SharedAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SharedAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedAccessPolicyState, opts?: pulumi.CustomResourceOptions): SharedAccessPolicy {
        return new SharedAccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/sharedAccessPolicy:SharedAccessPolicy';

    /**
     * Returns true if the given object is an instance of SharedAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedAccessPolicy.__pulumiType;
    }

    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    public readonly deviceConnect!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    public readonly iothubName!: pulumi.Output<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    public /*out*/ readonly primaryConnectionString!: pulumi.Output<string>;
    /**
     * The primary key used to create the authentication token.
     */
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    public readonly registryRead!: pulumi.Output<boolean | undefined>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    public readonly registryWrite!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    public /*out*/ readonly secondaryConnectionString!: pulumi.Output<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    public readonly serviceConnect!: pulumi.Output<boolean | undefined>;

    /**
     * Create a SharedAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedAccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SharedAccessPolicyArgs | SharedAccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SharedAccessPolicyState | undefined;
            inputs["deviceConnect"] = state ? state.deviceConnect : undefined;
            inputs["iothubName"] = state ? state.iothubName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryKey"] = state ? state.primaryKey : undefined;
            inputs["registryRead"] = state ? state.registryRead : undefined;
            inputs["registryWrite"] = state ? state.registryWrite : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            inputs["serviceConnect"] = state ? state.serviceConnect : undefined;
        } else {
            const args = argsOrState as SharedAccessPolicyArgs | undefined;
            if (!args || args.iothubName === undefined) {
                throw new Error("Missing required property 'iothubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["deviceConnect"] = args ? args.deviceConnect : undefined;
            inputs["iothubName"] = args ? args.iothubName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["registryRead"] = args ? args.registryRead : undefined;
            inputs["registryWrite"] = args ? args.registryWrite : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceConnect"] = args ? args.serviceConnect : undefined;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SharedAccessPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SharedAccessPolicy resources.
 */
export interface SharedAccessPolicyState {
    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    readonly deviceConnect?: pulumi.Input<boolean>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    readonly primaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary key used to create the authentication token.
     */
    readonly primaryKey?: pulumi.Input<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    readonly registryRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    readonly registryWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    readonly secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    readonly secondaryKey?: pulumi.Input<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    readonly serviceConnect?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SharedAccessPolicy resource.
 */
export interface SharedAccessPolicyArgs {
    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    readonly deviceConnect?: pulumi.Input<boolean>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    readonly registryRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    readonly registryWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    readonly serviceConnect?: pulumi.Input<boolean>;
}
