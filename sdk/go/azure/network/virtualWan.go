// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Virtual WAN.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_wan.html.markdown.
type VirtualWan struct {
	s *pulumi.ResourceState
}

// NewVirtualWan registers a new resource with the given unique name, arguments, and options.
func NewVirtualWan(ctx *pulumi.Context,
	name string, args *VirtualWanArgs, opts ...pulumi.ResourceOpt) (*VirtualWan, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["allowBranchToBranchTraffic"] = nil
		inputs["allowVnetToVnetTraffic"] = nil
		inputs["disableVpnEncryption"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["office365LocalBreakoutCategory"] = nil
		inputs["resourceGroupName"] = nil
		inputs["securityProviderName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["allowBranchToBranchTraffic"] = args.AllowBranchToBranchTraffic
		inputs["allowVnetToVnetTraffic"] = args.AllowVnetToVnetTraffic
		inputs["disableVpnEncryption"] = args.DisableVpnEncryption
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["office365LocalBreakoutCategory"] = args.Office365LocalBreakoutCategory
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["securityProviderName"] = args.SecurityProviderName
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:network/virtualWan:VirtualWan", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VirtualWan{s: s}, nil
}

// GetVirtualWan gets an existing VirtualWan resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualWan(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VirtualWanState, opts ...pulumi.ResourceOpt) (*VirtualWan, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["allowBranchToBranchTraffic"] = state.AllowBranchToBranchTraffic
		inputs["allowVnetToVnetTraffic"] = state.AllowVnetToVnetTraffic
		inputs["disableVpnEncryption"] = state.DisableVpnEncryption
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["office365LocalBreakoutCategory"] = state.Office365LocalBreakoutCategory
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["securityProviderName"] = state.SecurityProviderName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:network/virtualWan:VirtualWan", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VirtualWan{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VirtualWan) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VirtualWan) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
func (r *VirtualWan) AllowBranchToBranchTraffic() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["allowBranchToBranchTraffic"])
}

// Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
func (r *VirtualWan) AllowVnetToVnetTraffic() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["allowVnetToVnetTraffic"])
}

// Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
func (r *VirtualWan) DisableVpnEncryption() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["disableVpnEncryption"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *VirtualWan) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
func (r *VirtualWan) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
func (r *VirtualWan) Office365LocalBreakoutCategory() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["office365LocalBreakoutCategory"])
}

// The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
func (r *VirtualWan) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The name of the Security Provider.
func (r *VirtualWan) SecurityProviderName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["securityProviderName"])
}

// A mapping of tags to assign to the Virtual WAN.
func (r *VirtualWan) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering VirtualWan resources.
type VirtualWanState struct {
	// Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
	AllowBranchToBranchTraffic interface{}
	// Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
	AllowVnetToVnetTraffic interface{}
	// Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
	DisableVpnEncryption interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
	Office365LocalBreakoutCategory interface{}
	// The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The name of the Security Provider.
	SecurityProviderName interface{}
	// A mapping of tags to assign to the Virtual WAN.
	Tags interface{}
}

// The set of arguments for constructing a VirtualWan resource.
type VirtualWanArgs struct {
	// Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
	AllowBranchToBranchTraffic interface{}
	// Boolean flag to specify whether VNet to VNet traffic is allowed. Defaults to `false`.
	AllowVnetToVnetTraffic interface{}
	// Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
	DisableVpnEncryption interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
	Office365LocalBreakoutCategory interface{}
	// The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The name of the Security Provider.
	SecurityProviderName interface{}
	// A mapping of tags to assign to the Virtual WAN.
	Tags interface{}
}
