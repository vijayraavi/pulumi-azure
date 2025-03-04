// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lb

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Load Balancer
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/lb.html.markdown.
func LookupLB(ctx *pulumi.Context, args *GetLBArgs) (*GetLBResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:lb/getLB:getLB", inputs)
	if err != nil {
		return nil, err
	}
	return &GetLBResult{
		FrontendIpConfigurations: outputs["frontendIpConfigurations"],
		Location: outputs["location"],
		Name: outputs["name"],
		PrivateIpAddress: outputs["privateIpAddress"],
		PrivateIpAddresses: outputs["privateIpAddresses"],
		ResourceGroupName: outputs["resourceGroupName"],
		Sku: outputs["sku"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getLB.
type GetLBArgs struct {
	// Specifies the name of the Load Balancer.
	Name interface{}
	// The name of the Resource Group in which the Load Balancer exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getLB.
type GetLBResult struct {
	// (Optional) A `frontendIpConfiguration` block as documented below.
	FrontendIpConfigurations interface{}
	// The Azure location where the Load Balancer exists.
	Location interface{}
	// The name of the Frontend IP Configuration.
	Name interface{}
	// Private IP Address to assign to the Load Balancer.
	PrivateIpAddress interface{}
	// The list of private IP address assigned to the load balancer in `frontendIpConfiguration` blocks, if any.
	PrivateIpAddresses interface{}
	ResourceGroupName interface{}
	// The SKU of the Load Balancer.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
