// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing ExpressRoute circuit.
func LookupExpressRouteCircuit(ctx *pulumi.Context, args *GetExpressRouteCircuitArgs) (*GetExpressRouteCircuitResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:network/getExpressRouteCircuit:getExpressRouteCircuit", inputs)
	if err != nil {
		return nil, err
	}
	return &GetExpressRouteCircuitResult{
		Location: outputs["location"],
		Name: outputs["name"],
		Peerings: outputs["peerings"],
		ResourceGroupName: outputs["resourceGroupName"],
		ServiceKey: outputs["serviceKey"],
		ServiceProviderProperties: outputs["serviceProviderProperties"],
		ServiceProviderProvisioningState: outputs["serviceProviderProvisioningState"],
		Sku: outputs["sku"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getExpressRouteCircuit.
type GetExpressRouteCircuitArgs struct {
	// The name of the ExpressRoute circuit.
	Name interface{}
	// The Name of the Resource Group where the ExpressRoute circuit exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getExpressRouteCircuit.
type GetExpressRouteCircuitResult struct {
	// The Azure location where the ExpressRoute circuit exists
	Location interface{}
	Name interface{}
	// A `peerings` block for the ExpressRoute circuit as documented below
	Peerings interface{}
	ResourceGroupName interface{}
	// The string needed by the service provider to provision the ExpressRoute circuit.
	ServiceKey interface{}
	// A `service_provider_properties` block for the ExpressRoute circuit as documented below
	ServiceProviderProperties interface{}
	// The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
	ServiceProviderProvisioningState interface{}
	// A `sku` block for the ExpressRoute circuit as documented below.
	Sku interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
