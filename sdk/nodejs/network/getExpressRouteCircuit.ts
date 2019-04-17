// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing ExpressRoute circuit.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.all([azurerm_express_route_circuit_test.name, azurerm_resource_group_test.name]).apply(([azurerm_express_route_circuit_testName, azurerm_resource_group_testName]) => azure.network.getExpressRouteCircuit({
 *     name: azurerm_express_route_circuit_testName,
 *     resourceGroupName: azurerm_resource_group_testName,
 * }));
 * 
 * export const expressRouteCircuitId = test.apply(test => test.id);
 * export const serviceKey = test.apply(test => test.serviceKey);
 * ```
 */
export function getExpressRouteCircuit(args: GetExpressRouteCircuitArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitResult> {
    return pulumi.runtime.invoke("azure:network/getExpressRouteCircuit:getExpressRouteCircuit", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getExpressRouteCircuit.
 */
export interface GetExpressRouteCircuitArgs {
    /**
     * The name of the ExpressRoute circuit.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the ExpressRoute circuit exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getExpressRouteCircuit.
 */
export interface GetExpressRouteCircuitResult {
    /**
     * The Azure location where the ExpressRoute circuit exists
     */
    readonly location: string;
    readonly name: string;
    /**
     * A `peerings` block for the ExpressRoute circuit as documented below
     */
    readonly peerings: { azureAsn: number, peerAsn: number, peeringType: string, primaryPeerAddressPrefix: string, secondaryPeerAddressPrefix: string, sharedKey: string, vlanId: number }[];
    readonly resourceGroupName: string;
    /**
     * The string needed by the service provider to provision the ExpressRoute circuit.
     */
    readonly serviceKey: string;
    /**
     * A `service_provider_properties` block for the ExpressRoute circuit as documented below
     */
    readonly serviceProviderProperties: { bandwidthInMbps: number, peeringLocation: string, serviceProviderName: string }[];
    /**
     * The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
     */
    readonly serviceProviderProvisioningState: string;
    /**
     * A `sku` block for the ExpressRoute circuit as documented below.
     */
    readonly sku: { family: string, tier: string };
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
