// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about a set of existing Public IP Addresses.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/public_ips.html.markdown.
func LookupPublicIPs(ctx *pulumi.Context, args *GetPublicIPsArgs) (*GetPublicIPsResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["allocationType"] = args.AllocationType
		inputs["attached"] = args.Attached
		inputs["namePrefix"] = args.NamePrefix
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:network/getPublicIPs:getPublicIPs", inputs)
	if err != nil {
		return nil, err
	}
	return &GetPublicIPsResult{
		AllocationType: outputs["allocationType"],
		Attached: outputs["attached"],
		NamePrefix: outputs["namePrefix"],
		PublicIps: outputs["publicIps"],
		ResourceGroupName: outputs["resourceGroupName"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getPublicIPs.
type GetPublicIPsArgs struct {
	// The Allocation Type for the Public IP Address. Possible values include `Static` or `Dynamic`.
	AllocationType interface{}
	// Filter to include IP Addresses which are attached to a device, such as a VM/LB (`true`) or unattached (`false`).
	Attached interface{}
	// A prefix match used for the IP Addresses `name` field, case sensitive.
	NamePrefix interface{}
	// Specifies the name of the resource group.
	ResourceGroupName interface{}
}

// A collection of values returned by getPublicIPs.
type GetPublicIPsResult struct {
	AllocationType interface{}
	Attached interface{}
	NamePrefix interface{}
	// A List of `publicIps` blocks as defined below filtered by the criteria above.
	PublicIps interface{}
	ResourceGroupName interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
