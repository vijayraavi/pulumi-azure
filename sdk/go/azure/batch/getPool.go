// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Batch pool
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/batch_pool.html.markdown.
func LookupPool(ctx *pulumi.Context, args *GetPoolArgs) (*GetPoolResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["accountName"] = args.AccountName
		inputs["certificates"] = args.Certificates
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["startTask"] = args.StartTask
	}
	outputs, err := ctx.Invoke("azure:batch/getPool:getPool", inputs)
	if err != nil {
		return nil, err
	}
	return &GetPoolResult{
		AccountName: outputs["accountName"],
		AutoScales: outputs["autoScales"],
		Certificates: outputs["certificates"],
		ContainerConfigurations: outputs["containerConfigurations"],
		DisplayName: outputs["displayName"],
		FixedScales: outputs["fixedScales"],
		MaxTasksPerNode: outputs["maxTasksPerNode"],
		Name: outputs["name"],
		NodeAgentSkuId: outputs["nodeAgentSkuId"],
		ResourceGroupName: outputs["resourceGroupName"],
		StartTask: outputs["startTask"],
		StorageImageReferences: outputs["storageImageReferences"],
		VmSize: outputs["vmSize"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getPool.
type GetPoolArgs struct {
	AccountName interface{}
	Certificates interface{}
	Name interface{}
	ResourceGroupName interface{}
	StartTask interface{}
}

// A collection of values returned by getPool.
type GetPoolResult struct {
	// The name of the Batch account.
	AccountName interface{}
	// A `autoScale` block that describes the scale settings when using auto scale.
	AutoScales interface{}
	// One or more `certificate` blocks that describe the certificates installed on each compute node in the pool.
	Certificates interface{}
	// The container configuration used in the pool's VMs.
	ContainerConfigurations interface{}
	DisplayName interface{}
	// A `fixedScale` block that describes the scale settings when using fixed scale.
	FixedScales interface{}
	// The maximum number of tasks that can run concurrently on a single compute node in the pool.
	MaxTasksPerNode interface{}
	// The name of the Batch pool.
	Name interface{}
	// The Sku of the node agents in the Batch pool.
	NodeAgentSkuId interface{}
	ResourceGroupName interface{}
	// A `startTask` block that describes the start task settings for the Batch pool.
	StartTask interface{}
	// The reference of the storage image used by the nodes in the Batch pool.
	StorageImageReferences interface{}
	// The size of the VM created in the Batch pool.
	VmSize interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
