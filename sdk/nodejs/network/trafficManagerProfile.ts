// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Traffic Manager Profile to which multiple endpoints can be attached.
 * 
 * ## Example Usage
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 * 
 * const server = new random.RandomId("server", {
 *     byteLength: 8,
 *     keepers: {
 *         azi_id: 1,
 *     },
 * });
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "trafficmanagerProfile",
 * });
 * const testTrafficManagerProfile = new azure.network.TrafficManagerProfile("test", {
 *     dnsConfigs: [{
 *         relativeName: server.hex,
 *         ttl: 100,
 *     }],
 *     monitorConfigs: [{
 *         intervalInSeconds: 30,
 *         path: "/",
 *         port: 80,
 *         protocol: "http",
 *         timeoutInSeconds: 9,
 *         toleratedNumberOfFailures: 3,
 *     }],
 *     name: server.hex,
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         environment: "Production",
 *     },
 *     trafficRoutingMethod: "Weighted",
 * });
 * ```
 * 
 * ## Notes
 * 
 * The Traffic Manager is created with the location `global`.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/traffic_manager_profile.html.markdown.
 */
export class TrafficManagerProfile extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrafficManagerProfileState, opts?: pulumi.CustomResourceOptions): TrafficManagerProfile {
        return new TrafficManagerProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/trafficManagerProfile:TrafficManagerProfile';

    /**
     * Returns true if the given object is an instance of TrafficManagerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrafficManagerProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrafficManagerProfile.__pulumiType;
    }

    /**
     * This block specifies the DNS configuration of the
     * Profile, it supports the fields documented below.
     */
    public readonly dnsConfigs!: pulumi.Output<outputs.network.TrafficManagerProfileDnsConfig[]>;
    /**
     * The FQDN of the created Profile.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * This block specifies the Endpoint monitoring
     * configuration for the Profile, it supports the fields documented below.
     */
    public readonly monitorConfigs!: pulumi.Output<outputs.network.TrafficManagerProfileMonitorConfig[]>;
    /**
     * The name of the virtual network. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The status of the profile, can be set to either
     * `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    public readonly profileStatus!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     * - `Geographic` - Traffic is routed based on Geographic regions specified in the Endpoint.
     * - `MultiValue`- All healthy Endpoints are returned.  MultiValue routing method works only if all the endpoints of type ‘External’ and are specified as IPv4 or IPv6 addresses.
     * - `Performance` - Traffic is routed via the User's closest Endpoint
     * - `Priority` - Traffic is routed to the Endpoint with the lowest `priority` value.
     * - `Subnet` - Traffic is routed based on a mapping of sets of end-user IP address ranges to a specific Endpoint within a Traffic Manager profile.
     * - `Weighted` - Traffic is spread across Endpoints proportional to their `weight` value.
     */
    public readonly trafficRoutingMethod!: pulumi.Output<string>;

    /**
     * Create a TrafficManagerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrafficManagerProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TrafficManagerProfileArgs | TrafficManagerProfileState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TrafficManagerProfileState | undefined;
            inputs["dnsConfigs"] = state ? state.dnsConfigs : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["monitorConfigs"] = state ? state.monitorConfigs : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["profileStatus"] = state ? state.profileStatus : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["trafficRoutingMethod"] = state ? state.trafficRoutingMethod : undefined;
        } else {
            const args = argsOrState as TrafficManagerProfileArgs | undefined;
            if (!args || args.dnsConfigs === undefined) {
                throw new Error("Missing required property 'dnsConfigs'");
            }
            if (!args || args.monitorConfigs === undefined) {
                throw new Error("Missing required property 'monitorConfigs'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.trafficRoutingMethod === undefined) {
                throw new Error("Missing required property 'trafficRoutingMethod'");
            }
            inputs["dnsConfigs"] = args ? args.dnsConfigs : undefined;
            inputs["monitorConfigs"] = args ? args.monitorConfigs : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["profileStatus"] = args ? args.profileStatus : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["trafficRoutingMethod"] = args ? args.trafficRoutingMethod : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure:trafficmanager/profile:Profile" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(TrafficManagerProfile.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TrafficManagerProfile resources.
 */
export interface TrafficManagerProfileState {
    /**
     * This block specifies the DNS configuration of the
     * Profile, it supports the fields documented below.
     */
    readonly dnsConfigs?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>[]>;
    /**
     * The FQDN of the created Profile.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * This block specifies the Endpoint monitoring
     * configuration for the Profile, it supports the fields documented below.
     */
    readonly monitorConfigs?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>[]>;
    /**
     * The name of the virtual network. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either
     * `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     * - `Geographic` - Traffic is routed based on Geographic regions specified in the Endpoint.
     * - `MultiValue`- All healthy Endpoints are returned.  MultiValue routing method works only if all the endpoints of type ‘External’ and are specified as IPv4 or IPv6 addresses.
     * - `Performance` - Traffic is routed via the User's closest Endpoint
     * - `Priority` - Traffic is routed to the Endpoint with the lowest `priority` value.
     * - `Subnet` - Traffic is routed based on a mapping of sets of end-user IP address ranges to a specific Endpoint within a Traffic Manager profile.
     * - `Weighted` - Traffic is spread across Endpoints proportional to their `weight` value.
     */
    readonly trafficRoutingMethod?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TrafficManagerProfile resource.
 */
export interface TrafficManagerProfileArgs {
    /**
     * This block specifies the DNS configuration of the
     * Profile, it supports the fields documented below.
     */
    readonly dnsConfigs: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>[]>;
    /**
     * This block specifies the Endpoint monitoring
     * configuration for the Profile, it supports the fields documented below.
     */
    readonly monitorConfigs: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>[]>;
    /**
     * The name of the virtual network. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either
     * `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     * - `Geographic` - Traffic is routed based on Geographic regions specified in the Endpoint.
     * - `MultiValue`- All healthy Endpoints are returned.  MultiValue routing method works only if all the endpoints of type ‘External’ and are specified as IPv4 or IPv6 addresses.
     * - `Performance` - Traffic is routed via the User's closest Endpoint
     * - `Priority` - Traffic is routed to the Endpoint with the lowest `priority` value.
     * - `Subnet` - Traffic is routed based on a mapping of sets of end-user IP address ranges to a specific Endpoint within a Traffic Manager profile.
     * - `Weighted` - Traffic is spread across Endpoints proportional to their `weight` value.
     */
    readonly trafficRoutingMethod: pulumi.Input<string>;
}
