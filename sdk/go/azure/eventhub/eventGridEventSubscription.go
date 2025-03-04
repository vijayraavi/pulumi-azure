// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an EventGrid Event Subscription
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventgrid_event_subscription.html.markdown.
type EventGridEventSubscription struct {
	s *pulumi.ResourceState
}

// NewEventGridEventSubscription registers a new resource with the given unique name, arguments, and options.
func NewEventGridEventSubscription(ctx *pulumi.Context,
	name string, args *EventGridEventSubscriptionArgs, opts ...pulumi.ResourceOpt) (*EventGridEventSubscription, error) {
	if args == nil || args.Scope == nil {
		return nil, errors.New("missing required argument 'Scope'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["eventDeliverySchema"] = nil
		inputs["eventhubEndpoint"] = nil
		inputs["hybridConnectionEndpoint"] = nil
		inputs["includedEventTypes"] = nil
		inputs["labels"] = nil
		inputs["name"] = nil
		inputs["retryPolicy"] = nil
		inputs["scope"] = nil
		inputs["storageBlobDeadLetterDestination"] = nil
		inputs["storageQueueEndpoint"] = nil
		inputs["subjectFilter"] = nil
		inputs["topicName"] = nil
		inputs["webhookEndpoint"] = nil
	} else {
		inputs["eventDeliverySchema"] = args.EventDeliverySchema
		inputs["eventhubEndpoint"] = args.EventhubEndpoint
		inputs["hybridConnectionEndpoint"] = args.HybridConnectionEndpoint
		inputs["includedEventTypes"] = args.IncludedEventTypes
		inputs["labels"] = args.Labels
		inputs["name"] = args.Name
		inputs["retryPolicy"] = args.RetryPolicy
		inputs["scope"] = args.Scope
		inputs["storageBlobDeadLetterDestination"] = args.StorageBlobDeadLetterDestination
		inputs["storageQueueEndpoint"] = args.StorageQueueEndpoint
		inputs["subjectFilter"] = args.SubjectFilter
		inputs["topicName"] = args.TopicName
		inputs["webhookEndpoint"] = args.WebhookEndpoint
	}
	s, err := ctx.RegisterResource("azure:eventhub/eventGridEventSubscription:EventGridEventSubscription", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridEventSubscription{s: s}, nil
}

// GetEventGridEventSubscription gets an existing EventGridEventSubscription resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventGridEventSubscription(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EventGridEventSubscriptionState, opts ...pulumi.ResourceOpt) (*EventGridEventSubscription, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["eventDeliverySchema"] = state.EventDeliverySchema
		inputs["eventhubEndpoint"] = state.EventhubEndpoint
		inputs["hybridConnectionEndpoint"] = state.HybridConnectionEndpoint
		inputs["includedEventTypes"] = state.IncludedEventTypes
		inputs["labels"] = state.Labels
		inputs["name"] = state.Name
		inputs["retryPolicy"] = state.RetryPolicy
		inputs["scope"] = state.Scope
		inputs["storageBlobDeadLetterDestination"] = state.StorageBlobDeadLetterDestination
		inputs["storageQueueEndpoint"] = state.StorageQueueEndpoint
		inputs["subjectFilter"] = state.SubjectFilter
		inputs["topicName"] = state.TopicName
		inputs["webhookEndpoint"] = state.WebhookEndpoint
	}
	s, err := ctx.ReadResource("azure:eventhub/eventGridEventSubscription:EventGridEventSubscription", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridEventSubscription{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EventGridEventSubscription) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventGridEventSubscription) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
func (r *EventGridEventSubscription) EventDeliverySchema() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["eventDeliverySchema"])
}

// A `eventhubEndpoint` block as defined below.
func (r *EventGridEventSubscription) EventhubEndpoint() *pulumi.Output {
	return r.s.State["eventhubEndpoint"]
}

// A `hybridConnectionEndpoint` block as defined below.
func (r *EventGridEventSubscription) HybridConnectionEndpoint() *pulumi.Output {
	return r.s.State["hybridConnectionEndpoint"]
}

// A list of applicable event types that need to be part of the event subscription.
func (r *EventGridEventSubscription) IncludedEventTypes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["includedEventTypes"])
}

// A list of labels to assign to the event subscription.
func (r *EventGridEventSubscription) Labels() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["labels"])
}

// Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
func (r *EventGridEventSubscription) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A `retryPolicy` block as defined below.
func (r *EventGridEventSubscription) RetryPolicy() *pulumi.Output {
	return r.s.State["retryPolicy"]
}

// Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
func (r *EventGridEventSubscription) Scope() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["scope"])
}

// A `storageBlobDeadLetterDestination` block as defined below.
func (r *EventGridEventSubscription) StorageBlobDeadLetterDestination() *pulumi.Output {
	return r.s.State["storageBlobDeadLetterDestination"]
}

// A `storageQueueEndpoint` block as defined below.
func (r *EventGridEventSubscription) StorageQueueEndpoint() *pulumi.Output {
	return r.s.State["storageQueueEndpoint"]
}

// A `subjectFilter` block as defined below.
func (r *EventGridEventSubscription) SubjectFilter() *pulumi.Output {
	return r.s.State["subjectFilter"]
}

// Specifies the name of the topic to associate with the event subscription.
func (r *EventGridEventSubscription) TopicName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["topicName"])
}

// A `webhookEndpoint` block as defined below.
func (r *EventGridEventSubscription) WebhookEndpoint() *pulumi.Output {
	return r.s.State["webhookEndpoint"]
}

// Input properties used for looking up and filtering EventGridEventSubscription resources.
type EventGridEventSubscriptionState struct {
	// Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
	EventDeliverySchema interface{}
	// A `eventhubEndpoint` block as defined below.
	EventhubEndpoint interface{}
	// A `hybridConnectionEndpoint` block as defined below.
	HybridConnectionEndpoint interface{}
	// A list of applicable event types that need to be part of the event subscription.
	IncludedEventTypes interface{}
	// A list of labels to assign to the event subscription.
	Labels interface{}
	// Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
	Name interface{}
	// A `retryPolicy` block as defined below.
	RetryPolicy interface{}
	// Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
	Scope interface{}
	// A `storageBlobDeadLetterDestination` block as defined below.
	StorageBlobDeadLetterDestination interface{}
	// A `storageQueueEndpoint` block as defined below.
	StorageQueueEndpoint interface{}
	// A `subjectFilter` block as defined below.
	SubjectFilter interface{}
	// Specifies the name of the topic to associate with the event subscription.
	TopicName interface{}
	// A `webhookEndpoint` block as defined below.
	WebhookEndpoint interface{}
}

// The set of arguments for constructing a EventGridEventSubscription resource.
type EventGridEventSubscriptionArgs struct {
	// Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
	EventDeliverySchema interface{}
	// A `eventhubEndpoint` block as defined below.
	EventhubEndpoint interface{}
	// A `hybridConnectionEndpoint` block as defined below.
	HybridConnectionEndpoint interface{}
	// A list of applicable event types that need to be part of the event subscription.
	IncludedEventTypes interface{}
	// A list of labels to assign to the event subscription.
	Labels interface{}
	// Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
	Name interface{}
	// A `retryPolicy` block as defined below.
	RetryPolicy interface{}
	// Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
	Scope interface{}
	// A `storageBlobDeadLetterDestination` block as defined below.
	StorageBlobDeadLetterDestination interface{}
	// A `storageQueueEndpoint` block as defined below.
	StorageQueueEndpoint interface{}
	// A `subjectFilter` block as defined below.
	SubjectFilter interface{}
	// Specifies the name of the topic to associate with the event subscription.
	TopicName interface{}
	// A `webhookEndpoint` block as defined below.
	WebhookEndpoint interface{}
}
