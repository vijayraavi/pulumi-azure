// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package maps

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Azure Maps Account.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/maps_account.html.markdown.
func LookupAccount(ctx *pulumi.Context, args *GetAccountArgs) (*GetAccountResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	outputs, err := ctx.Invoke("azure:maps/getAccount:getAccount", inputs)
	if err != nil {
		return nil, err
	}
	return &GetAccountResult{
		Name: outputs["name"],
		PrimaryAccessKey: outputs["primaryAccessKey"],
		ResourceGroupName: outputs["resourceGroupName"],
		SecondaryAccessKey: outputs["secondaryAccessKey"],
		SkuName: outputs["skuName"],
		Tags: outputs["tags"],
		XMsClientId: outputs["xMsClientId"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getAccount.
type GetAccountArgs struct {
	// Specifies the name of the Maps Account.
	Name interface{}
	// Specifies the name of the Resource Group in which the Maps Account is located.
	ResourceGroupName interface{}
	Tags interface{}
}

// A collection of values returned by getAccount.
type GetAccountResult struct {
	Name interface{}
	// The primary key used to authenticate and authorize access to the Maps REST APIs.
	PrimaryAccessKey interface{}
	ResourceGroupName interface{}
	// The primary key used to authenticate and authorize access to the Maps REST APIs. The second key is given to provide seamless key regeneration.
	SecondaryAccessKey interface{}
	// The sku of the Azure Maps Account.
	SkuName interface{}
	Tags interface{}
	// A unique identifier for the Maps Account.
	XMsClientId interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
