// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../types/input";
import * as outputApi from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a subnet. Subnets represent network segments within the IP space defined by the virtual network.
 * 
 * > **NOTE on Virtual Networks and Subnet's:** This provider currently
 * provides both a standalone Subnet resource, and allows for Subnets to be defined in-line within the Virtual Network resource.
 * At this time you cannot use a Virtual Network with in-line Subnets in conjunction with any Subnet resources. Doing so will cause a conflict of Subnet configurations and will overwrite Subnet's.
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
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "acceptanceTestVirtualNetwork1",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.1.0/24",
 *     delegations: [{
 *         name: "acctestdelegation",
 *         serviceDelegation: {
 *             actions: ["Microsoft.Network/virtualNetworks/subnets/action"],
 *             name: "Microsoft.ContainerInstance/containerGroups",
 *         },
 *     }],
 *     name: "testsubnet",
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/subnet.html.markdown.
 */
export class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetState, opts?: pulumi.CustomResourceOptions): Subnet {
        return new Subnet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/subnet:Subnet';

    /**
     * Returns true if the given object is an instance of Subnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subnet.__pulumiType;
    }

    /**
     * The address prefix to use for the subnet.
     */
    public readonly addressPrefix!: pulumi.Output<string>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    public readonly delegations!: pulumi.Output<outputApi.network.SubnetDelegation[] | undefined>;
    /**
     * The collection of IP Configurations with IPs within this subnet.
     */
    public readonly ipConfigurations!: pulumi.Output<string[]>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the Network Security Group to associate with the subnet.
     */
    public readonly networkSecurityGroupId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The ID of the Route Table to associate with the subnet.
     */
    public readonly routeTableId!: pulumi.Output<string | undefined>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
     */
    public readonly serviceEndpoints!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    public readonly virtualNetworkName!: pulumi.Output<string>;

    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetArgs | SubnetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubnetState | undefined;
            inputs["addressPrefix"] = state ? state.addressPrefix : undefined;
            inputs["delegations"] = state ? state.delegations : undefined;
            inputs["ipConfigurations"] = state ? state.ipConfigurations : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkSecurityGroupId"] = state ? state.networkSecurityGroupId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["routeTableId"] = state ? state.routeTableId : undefined;
            inputs["serviceEndpoints"] = state ? state.serviceEndpoints : undefined;
            inputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
        } else {
            const args = argsOrState as SubnetArgs | undefined;
            if (!args || args.addressPrefix === undefined) {
                throw new Error("Missing required property 'addressPrefix'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.virtualNetworkName === undefined) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            inputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            inputs["delegations"] = args ? args.delegations : undefined;
            inputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkSecurityGroupId"] = args ? args.networkSecurityGroupId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routeTableId"] = args ? args.routeTableId : undefined;
            inputs["serviceEndpoints"] = args ? args.serviceEndpoints : undefined;
            inputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Subnet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Subnet resources.
 */
export interface SubnetState {
    /**
     * The address prefix to use for the subnet.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    readonly delegations?: pulumi.Input<pulumi.Input<inputApi.network.SubnetDelegation>[]>;
    /**
     * The collection of IP Configurations with IPs within this subnet.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the Network Security Group to associate with the subnet.
     */
    readonly networkSecurityGroupId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Route Table to associate with the subnet.
     */
    readonly routeTableId?: pulumi.Input<string>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
     */
    readonly serviceEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    /**
     * The address prefix to use for the subnet.
     */
    readonly addressPrefix: pulumi.Input<string>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    readonly delegations?: pulumi.Input<pulumi.Input<inputApi.network.SubnetDelegation>[]>;
    /**
     * The collection of IP Configurations with IPs within this subnet.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the Network Security Group to associate with the subnet.
     */
    readonly networkSecurityGroupId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Route Table to associate with the subnet.
     */
    readonly routeTableId?: pulumi.Input<string>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
     */
    readonly serviceEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
}
