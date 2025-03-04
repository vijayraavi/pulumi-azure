// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package recoveryservices

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Azure recovery vault protection container.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/recovery_services_protection_container.html.markdown.
type ProtectionContainer struct {
	s *pulumi.ResourceState
}

// NewProtectionContainer registers a new resource with the given unique name, arguments, and options.
func NewProtectionContainer(ctx *pulumi.Context,
	name string, args *ProtectionContainerArgs, opts ...pulumi.ResourceOpt) (*ProtectionContainer, error) {
	if args == nil || args.RecoveryFabricName == nil {
		return nil, errors.New("missing required argument 'RecoveryFabricName'")
	}
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["recoveryFabricName"] = nil
		inputs["recoveryVaultName"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["recoveryFabricName"] = args.RecoveryFabricName
		inputs["recoveryVaultName"] = args.RecoveryVaultName
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:recoveryservices/protectionContainer:ProtectionContainer", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProtectionContainer{s: s}, nil
}

// GetProtectionContainer gets an existing ProtectionContainer resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProtectionContainer(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ProtectionContainerState, opts ...pulumi.ResourceOpt) (*ProtectionContainer, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["recoveryFabricName"] = state.RecoveryFabricName
		inputs["recoveryVaultName"] = state.RecoveryVaultName
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:recoveryservices/protectionContainer:ProtectionContainer", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProtectionContainer{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ProtectionContainer) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ProtectionContainer) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The name of the network mapping.
func (r *ProtectionContainer) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Name of fabric that should contain this protection container.
func (r *ProtectionContainer) RecoveryFabricName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["recoveryFabricName"])
}

// The name of the vault that should be updated.
func (r *ProtectionContainer) RecoveryVaultName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["recoveryVaultName"])
}

// Name of the resource group where the vault that should be updated is located.
func (r *ProtectionContainer) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering ProtectionContainer resources.
type ProtectionContainerState struct {
	// The name of the network mapping.
	Name interface{}
	// Name of fabric that should contain this protection container.
	RecoveryFabricName interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a ProtectionContainer resource.
type ProtectionContainerArgs struct {
	// The name of the network mapping.
	Name interface{}
	// Name of fabric that should contain this protection container.
	RecoveryFabricName interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
}
