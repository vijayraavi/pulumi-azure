// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Subnet within a Virtual Network.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = azure.network.getSubnet({
 *     name: "backend",
 *     resourceGroupName: "networking",
 *     virtualNetworkName: "production",
 * });
 * 
 * export const subnetId = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/subnet.html.markdown.
 */
export function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult> & GetSubnetResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetSubnetResult> = pulumi.runtime.invoke("azure:network/getSubnet:getSubnet", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetArgs {
    /**
     * Specifies the name of the Subnet.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Virtual Network is located in.
     */
    readonly resourceGroupName: string;
    /**
     * Specifies the name of the Virtual Network this Subnet is located within.
     */
    readonly virtualNetworkName: string;
}

/**
 * A collection of values returned by getSubnet.
 */
export interface GetSubnetResult {
    /**
     * The address prefix used for the subnet.
     */
    readonly addressPrefix: string;
    /**
     * The collection of IP Configurations with IPs within this subnet.
     */
    readonly ipConfigurations: string[];
    readonly name: string;
    /**
     * The ID of the Network Security Group associated with the subnet.
     */
    readonly networkSecurityGroupId: string;
    readonly resourceGroupName: string;
    /**
     * The ID of the Route Table associated with this subnet.
     */
    readonly routeTableId: string;
    /**
     * A list of Service Endpoints within this subnet.
     */
    readonly serviceEndpoints: string[];
    readonly virtualNetworkName: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
