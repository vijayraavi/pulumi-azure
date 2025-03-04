// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package autoscale

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an AutoScale Setting which can be applied to Virtual Machine Scale Sets, App Services and other scalable resources.
// 
// > **NOTE:** This resource has been deprecated in favour of the `monitoring.AutoscaleSetting` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/autoscale_setting.html.markdown.
type Setting struct {
	s *pulumi.ResourceState
}

// NewSetting registers a new resource with the given unique name, arguments, and options.
func NewSetting(ctx *pulumi.Context,
	name string, args *SettingArgs, opts ...pulumi.ResourceOpt) (*Setting, error) {
	if args == nil || args.Profiles == nil {
		return nil, errors.New("missing required argument 'Profiles'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.TargetResourceId == nil {
		return nil, errors.New("missing required argument 'TargetResourceId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["enabled"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["notification"] = nil
		inputs["profiles"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
		inputs["targetResourceId"] = nil
	} else {
		inputs["enabled"] = args.Enabled
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["notification"] = args.Notification
		inputs["profiles"] = args.Profiles
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["targetResourceId"] = args.TargetResourceId
	}
	s, err := ctx.RegisterResource("azure:autoscale/setting:Setting", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Setting{s: s}, nil
}

// GetSetting gets an existing Setting resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSetting(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SettingState, opts ...pulumi.ResourceOpt) (*Setting, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["enabled"] = state.Enabled
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["notification"] = state.Notification
		inputs["profiles"] = state.Profiles
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["targetResourceId"] = state.TargetResourceId
	}
	s, err := ctx.ReadResource("azure:autoscale/setting:Setting", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Setting{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Setting) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Setting) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
func (r *Setting) Enabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enabled"])
}

// Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
func (r *Setting) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// The name of the AutoScale Setting. Changing this forces a new resource to be created.
func (r *Setting) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Specifies a `notification` block as defined below.
func (r *Setting) Notification() *pulumi.Output {
	return r.s.State["notification"]
}

// Specifies one or more (up to 20) `profile` blocks as defined below.
func (r *Setting) Profiles() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["profiles"])
}

// The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
func (r *Setting) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *Setting) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Specifies the resource ID of the resource that the autoscale setting should be added to.
func (r *Setting) TargetResourceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["targetResourceId"])
}

// Input properties used for looking up and filtering Setting resources.
type SettingState struct {
	// Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
	Enabled interface{}
	// Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the AutoScale Setting. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies a `notification` block as defined below.
	Notification interface{}
	// Specifies one or more (up to 20) `profile` blocks as defined below.
	Profiles interface{}
	// The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// Specifies the resource ID of the resource that the autoscale setting should be added to.
	TargetResourceId interface{}
}

// The set of arguments for constructing a Setting resource.
type SettingArgs struct {
	// Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
	Enabled interface{}
	// Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the AutoScale Setting. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies a `notification` block as defined below.
	Notification interface{}
	// Specifies one or more (up to 20) `profile` blocks as defined below.
	Profiles interface{}
	// The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// Specifies the resource ID of the resource that the autoscale setting should be added to.
	TargetResourceId interface{}
}
