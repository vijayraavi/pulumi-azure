// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Route within a Route Table.
 * 
 * > **NOTE on Route Tables and Routes:** This provider currently
 * provides both a standalone Route resource, and allows for Routes to be defined in-line within the Route Table resource.
 * At this time you cannot use a Route Table with in-line Routes in conjunction with any Route resources. Doing so will cause a conflict of Route configurations and will overwrite Routes.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acceptanceTestResourceGroup1",
 * });
 * const testRouteTable = new azure.network.RouteTable("test", {
 *     location: testResourceGroup.location,
 *     name: "acceptanceTestRouteTable1",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testRoute = new azure.network.Route("test", {
 *     addressPrefix: "10.1.0.0/16",
 *     name: "acceptanceTestRoute1",
 *     nextHopType: "vnetlocal",
 *     resourceGroupName: testResourceGroup.name,
 *     routeTableName: testRouteTable.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/route.html.markdown.
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/route:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    public readonly addressPrefix!: pulumi.Output<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    public readonly nextHopInIpAddress!: pulumi.Output<string | undefined>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    public readonly nextHopType!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    public readonly routeTableName!: pulumi.Output<string>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteArgs | RouteState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RouteState | undefined;
            inputs["addressPrefix"] = state ? state.addressPrefix : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nextHopInIpAddress"] = state ? state.nextHopInIpAddress : undefined;
            inputs["nextHopType"] = state ? state.nextHopType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["routeTableName"] = state ? state.routeTableName : undefined;
        } else {
            const args = argsOrState as RouteArgs | undefined;
            if (!args || args.addressPrefix === undefined) {
                throw new Error("Missing required property 'addressPrefix'");
            }
            if (!args || args.nextHopType === undefined) {
                throw new Error("Missing required property 'nextHopType'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.routeTableName === undefined) {
                throw new Error("Missing required property 'routeTableName'");
            }
            inputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nextHopInIpAddress"] = args ? args.nextHopInIpAddress : undefined;
            inputs["nextHopType"] = args ? args.nextHopType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routeTableName"] = args ? args.routeTableName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Route.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    readonly nextHopInIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    readonly nextHopType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    readonly routeTableName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    readonly addressPrefix: pulumi.Input<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    readonly nextHopInIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    readonly nextHopType: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    readonly routeTableName: pulumi.Input<string>;
}
