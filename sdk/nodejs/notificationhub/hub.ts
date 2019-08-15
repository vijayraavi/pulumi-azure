// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Notification Hub within a Notification Hub Namespace.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "Australia East",
 *     name: "notificationhub-resources",
 * });
 * const testNamespace = new azure.notificationhub.Namespace("test", {
 *     location: testResourceGroup.location,
 *     name: "myappnamespace",
 *     namespaceType: "NotificationHub",
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "Free",
 * });
 * const testHub = new azure.notificationhub.Hub("test", {
 *     location: testResourceGroup.location,
 *     name: "mynotificationhub",
 *     namespaceName: testNamespace.name,
 *     resourceGroupName: testResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/notification_hub.html.markdown.
 */
export class Hub extends pulumi.CustomResource {
    /**
     * Get an existing Hub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HubState, opts?: pulumi.CustomResourceOptions): Hub {
        return new Hub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:notificationhub/hub:Hub';

    /**
     * Returns true if the given object is an instance of Hub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Hub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Hub.__pulumiType;
    }

    /**
     * A `apnsCredential` block as defined below.
     */
    public readonly apnsCredential!: pulumi.Output<outputApi.notificationhub.HubApnsCredential | undefined>;
    /**
     * A `gcmCredential` block as defined below.
     */
    public readonly gcmCredential!: pulumi.Output<outputApi.notificationhub.HubGcmCredential | undefined>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a Hub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HubArgs | HubState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as HubState | undefined;
            inputs["apnsCredential"] = state ? state.apnsCredential : undefined;
            inputs["gcmCredential"] = state ? state.gcmCredential : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as HubArgs | undefined;
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apnsCredential"] = args ? args.apnsCredential : undefined;
            inputs["gcmCredential"] = args ? args.gcmCredential : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Hub.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Hub resources.
 */
export interface HubState {
    /**
     * A `apnsCredential` block as defined below.
     */
    readonly apnsCredential?: pulumi.Input<inputApi.notificationhub.HubApnsCredential>;
    /**
     * A `gcmCredential` block as defined below.
     */
    readonly gcmCredential?: pulumi.Input<inputApi.notificationhub.HubGcmCredential>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Hub resource.
 */
export interface HubArgs {
    /**
     * A `apnsCredential` block as defined below.
     */
    readonly apnsCredential?: pulumi.Input<inputApi.notificationhub.HubApnsCredential>;
    /**
     * A `gcmCredential` block as defined below.
     */
    readonly gcmCredential?: pulumi.Input<inputApi.notificationhub.HubGcmCredential>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
