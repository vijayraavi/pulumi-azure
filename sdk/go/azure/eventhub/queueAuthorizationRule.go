// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Authorization Rule for a ServiceBus Queue.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_queue_authorization_rule_legacy.html.markdown.
type QueueAuthorizationRule struct {
	s *pulumi.ResourceState
}

// NewQueueAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewQueueAuthorizationRule(ctx *pulumi.Context,
	name string, args *QueueAuthorizationRuleArgs, opts ...pulumi.ResourceOpt) (*QueueAuthorizationRule, error) {
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.QueueName == nil {
		return nil, errors.New("missing required argument 'QueueName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["listen"] = nil
		inputs["manage"] = nil
		inputs["name"] = nil
		inputs["namespaceName"] = nil
		inputs["queueName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["send"] = nil
	} else {
		inputs["listen"] = args.Listen
		inputs["manage"] = args.Manage
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["queueName"] = args.QueueName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["send"] = args.Send
	}
	inputs["primaryConnectionString"] = nil
	inputs["primaryKey"] = nil
	inputs["secondaryConnectionString"] = nil
	inputs["secondaryKey"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/queueAuthorizationRule:QueueAuthorizationRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &QueueAuthorizationRule{s: s}, nil
}

// GetQueueAuthorizationRule gets an existing QueueAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetQueueAuthorizationRule(ctx *pulumi.Context,
	name string, id pulumi.ID, state *QueueAuthorizationRuleState, opts ...pulumi.ResourceOpt) (*QueueAuthorizationRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["listen"] = state.Listen
		inputs["manage"] = state.Manage
		inputs["name"] = state.Name
		inputs["namespaceName"] = state.NamespaceName
		inputs["primaryConnectionString"] = state.PrimaryConnectionString
		inputs["primaryKey"] = state.PrimaryKey
		inputs["queueName"] = state.QueueName
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryConnectionString"] = state.SecondaryConnectionString
		inputs["secondaryKey"] = state.SecondaryKey
		inputs["send"] = state.Send
	}
	s, err := ctx.ReadResource("azure:eventhub/queueAuthorizationRule:QueueAuthorizationRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &QueueAuthorizationRule{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *QueueAuthorizationRule) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *QueueAuthorizationRule) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
func (r *QueueAuthorizationRule) Listen() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["listen"])
}

// Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
func (r *QueueAuthorizationRule) Manage() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["manage"])
}

// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
func (r *QueueAuthorizationRule) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Specifies the name of the ServiceBus Namespace in which the Queue exists. Changing this forces a new resource to be created.
func (r *QueueAuthorizationRule) NamespaceName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["namespaceName"])
}

// The Primary Connection String for the Authorization Rule.
func (r *QueueAuthorizationRule) PrimaryConnectionString() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryConnectionString"])
}

// The Primary Key for the Authorization Rule.
func (r *QueueAuthorizationRule) PrimaryKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryKey"])
}

// Specifies the name of the ServiceBus Queue. Changing this forces a new resource to be created.
func (r *QueueAuthorizationRule) QueueName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["queueName"])
}

// The name of the Resource Group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
func (r *QueueAuthorizationRule) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The Secondary Connection String for the Authorization Rule.
func (r *QueueAuthorizationRule) SecondaryConnectionString() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryConnectionString"])
}

// The Secondary Key for the Authorization Rule.
func (r *QueueAuthorizationRule) SecondaryKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryKey"])
}

// Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
func (r *QueueAuthorizationRule) Send() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["send"])
}

// Input properties used for looking up and filtering QueueAuthorizationRule resources.
type QueueAuthorizationRuleState struct {
	// Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
	Listen interface{}
	// Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the ServiceBus Namespace in which the Queue exists. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The Primary Connection String for the Authorization Rule.
	PrimaryConnectionString interface{}
	// The Primary Key for the Authorization Rule.
	PrimaryKey interface{}
	// Specifies the name of the ServiceBus Queue. Changing this forces a new resource to be created.
	QueueName interface{}
	// The name of the Resource Group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Secondary Connection String for the Authorization Rule.
	SecondaryConnectionString interface{}
	// The Secondary Key for the Authorization Rule.
	SecondaryKey interface{}
	// Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
	Send interface{}
}

// The set of arguments for constructing a QueueAuthorizationRule resource.
type QueueAuthorizationRuleArgs struct {
	// Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
	Listen interface{}
	// Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the ServiceBus Namespace in which the Queue exists. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// Specifies the name of the ServiceBus Queue. Changing this forces a new resource to be created.
	QueueName interface{}
	// The name of the Resource Group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
	Send interface{}
}
