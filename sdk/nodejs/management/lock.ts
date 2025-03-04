// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Management Lock which is scoped to a Subscription, Resource Group or Resource.
 * 
 * ## Example Usage (Subscription Level Lock)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const current = azure.core.getSubscription();
 * const subscriptionLevel = new azure.management.Lock("subscription-level", {
 *     lockLevel: "CanNotDelete",
 *     name: "subscription-level",
 *     notes: "Items can't be deleted in this subscription!",
 *     scope: current.id,
 * });
 * ```
 * 
 * ## Example Usage (Resource Group Level Lock)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "locked-resource-group",
 * });
 * const resourceGroupLevel = new azure.management.Lock("resource-group-level", {
 *     lockLevel: "ReadOnly",
 *     name: "resource-group-level",
 *     notes: "This Resource Group is Read-Only",
 *     scope: test.id,
 * });
 * ```
 * 
 * ## Example Usage (Resource Level Lock)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "locked-resource-group",
 * });
 * const testPublicIp = new azure.network.PublicIp("test", {
 *     allocationMethod: "Static",
 *     idleTimeoutInMinutes: 30,
 *     location: testResourceGroup.location,
 *     name: "locked-publicip",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const publicIp = new azure.management.Lock("public-ip", {
 *     lockLevel: "CanNotDelete",
 *     name: "resource-ip",
 *     notes: "Locked because it's needed by a third-party",
 *     scope: testPublicIp.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/management_lock.html.markdown.
 */
export class Lock extends pulumi.CustomResource {
    /**
     * Get an existing Lock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LockState, opts?: pulumi.CustomResourceOptions): Lock {
        return new Lock(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:management/lock:Lock';

    /**
     * Returns true if the given object is an instance of Lock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lock {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lock.__pulumiType;
    }

    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    public readonly lockLevel!: pulumi.Output<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a Lock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LockArgs | LockState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LockState | undefined;
            inputs["lockLevel"] = state ? state.lockLevel : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notes"] = state ? state.notes : undefined;
            inputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as LockArgs | undefined;
            if (!args || args.lockLevel === undefined) {
                throw new Error("Missing required property 'lockLevel'");
            }
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["lockLevel"] = args ? args.lockLevel : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["scope"] = args ? args.scope : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure:managementresource/manangementLock:ManangementLock" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Lock.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Lock resources.
 */
export interface LockState {
    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel?: pulumi.Input<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    readonly scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Lock resource.
 */
export interface LockArgs {
    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel: pulumi.Input<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Input<string>;
}
